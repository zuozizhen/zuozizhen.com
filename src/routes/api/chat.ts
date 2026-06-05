import { createFileRoute } from "@tanstack/react-router";
import { env } from "cloudflare:workers";
import { buildSystemPrompt } from "@/lib/chat-prompt";

type ChatMessage = {
  role: string;
  content: string;
};

type ChatRequestBody = {
  messages?: ChatMessage[];
};

type UpstreamPayload = {
  text?: unknown;
  choices?: Array<{
    delta?: {
      content?: unknown;
    };
    message?: {
      content?: unknown;
    };
  }>;
};

const encoder = new TextEncoder();

function sseEvent(name: string, payload: unknown) {
  return encoder.encode(`event: ${name}\ndata: ${JSON.stringify(payload)}\n\n`);
}

function extractText(payload: UpstreamPayload) {
  if (payload.text) return String(payload.text);
  const choice = payload.choices?.[0] ?? {};
  if (choice?.delta?.content) return String(choice.delta.content);
  if (choice?.message?.content) return String(choice.message.content);
  return "";
}

async function* readSseStream(body: ReadableStream<Uint8Array>) {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    let sepIndex = buffer.indexOf("\n\n");
    while (sepIndex !== -1) {
      const chunk = buffer.slice(0, sepIndex);
      buffer = buffer.slice(sepIndex + 2);
      const lines = chunk.split("\n");
      let event = "message";
      const dataLines: string[] = [];

      for (const line of lines) {
        if (line.startsWith("event:")) event = line.slice(6).trim();
        if (line.startsWith("data:")) dataLines.push(line.slice(5).trim());
      }

      if (dataLines.length > 0) yield { event, data: dataLines.join("\n") };
      sepIndex = buffer.indexOf("\n\n");
    }
  }
}

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: ({ request }) => handleChat(request),
      GET: () => new Response("Method Not Allowed", { status: 405 }),
    },
  },
});

async function handleChat(request: Request) {
  const workerEnv = env as Env;
  const stream = new TransformStream();
  const writer = stream.writable.getWriter();

  const response = new Response(stream.readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "X-Accel-Buffering": "no",
    },
  });

  (async () => {
    try {
      const body = (await request.json().catch(() => ({}))) as ChatRequestBody;
      const messages = body?.messages;
      if (!Array.isArray(messages) || messages.length === 0) {
        await writer.write(sseEvent("error", { message: "消息不能为空" }));
        return;
      }

      const endpoint = workerEnv.AI_API_ENDPOINT ?? process.env.AI_API_ENDPOINT ?? "";
      const model = workerEnv.AI_MODEL ?? process.env.AI_MODEL ?? "";
      const apiKey = workerEnv.AI_API_KEY ?? process.env.AI_API_KEY ?? "";

      if (!endpoint || !model || !apiKey) {
        await writer.write(sseEvent("error", { message: "AI 配置缺失，请设置 AI_API_ENDPOINT / AI_API_KEY / AI_MODEL" }));
        return;
      }

      const userMessages: ChatMessage[] = messages
        .map((m: ChatMessage) => ({ role: String(m?.role || ""), content: String(m?.content || "") }))
        .filter((m: ChatMessage) => m.role === "user" || m.role === "assistant");

      const upstream = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/event-stream",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model,
          stream: true,
          messages: [{ role: "system", content: buildSystemPrompt() }, ...userMessages],
        }),
      });

      if (!upstream.ok || !upstream.body) {
        await writer.write(sseEvent("error", { message: `upstream error: ${upstream.status}` }));
        return;
      }

      let fullText = "";
      for await (const event of readSseStream(upstream.body)) {
        if (!event.data || event.data === "[DONE]") continue;
        let payload: UpstreamPayload | null = null;
        try {
          payload = JSON.parse(event.data);
        } catch {
          payload = null;
        }
        if (!payload) continue;
        const text = extractText(payload);
        if (!text) continue;
        fullText += text;
        await writer.write(sseEvent("delta", { text }));
      }

      await writer.write(sseEvent("done", { text: fullText }));
    } catch (error) {
      const message = error instanceof Error ? error.message : "未知错误";
      await writer.write(sseEvent("error", { message }));
    } finally {
      await writer.close();
    }
  })();

  return response;
}
