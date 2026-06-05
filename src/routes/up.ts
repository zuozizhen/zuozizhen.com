import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/up")({
  server: {
    handlers: {
      GET: () => new Response("ok", { headers: { "Content-Type": "text/plain" } }),
    },
  },
});
