import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import BlogList from "@/components/BlogList";
import ResourcesGrid from "@/components/ResourcesGrid";
import { getRecentBlogs } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "左子祯 — 设计师和创造者" },
      { name: "description", content: "左子祯 — 设计师和创造者" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const blogs = getRecentBlogs(2);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    setError(false);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(true);
      return;
    }

    if (submitting) return;
    setSubmitting(true);

    try {
      const response = await fetch("https://subscribers-email-to-notion.jingmiaofenxiang.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website: "zuozizhen.com" }),
      });

      if (response.ok) {
        window.location.href = "/subscribed/";
      } else {
        alert(`订阅失败，错误代码：${response.status}`);
      }
    } catch (err) {
      console.error("订阅请求出错：", err);
      alert("订阅请求出错，请稍后再试。");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="sm:space-y-20 space-y-3 mb-24">
      <section className="flex flex-col pt-20 pb-8 sm:pt-40 px-5">
        <div className="max-w-screen-lg mx-auto w-full">
          <h1 className="text-3xl font-semibold max-w-3xl">我是左子祯 — 设计师, 创作者。</h1>
          <p className="text-xl mt-3 text-neutral-500 max-w-[52rem] leading-9">
            我是一名产品设计师，乐于创作和分享，对创造充满热情，你可以关注我的{" "}
            <a className="font-medium hover:opacity-70 text-neutral-800 underline underline-offset-2" href="https://twitter.com/zuozizhen">
              Twitter
            </a>
            、
            <a
              className="font-medium hover:opacity-70 text-neutral-800 underline underline-offset-2"
              href="https://www.xiaohongshu.com/user/profile/5c5f7e25000000001000fc79"
            >
              小红书
            </a>
            ，订阅我的{" "}
            <a className="font-medium hover:opacity-70 text-neutral-800 underline underline-offset-2" href="https://zuozizhen.substack.com">
              Newsletter
            </a>
            ，或者了解关于我的{" "}
            <a className="font-medium hover:opacity-70 text-neutral-800 underline underline-offset-2" href="/about">
              更多
            </a>
            。
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 items-center md:grid-cols-[500px_20px_300px]">
            <div className="h-fit">
              <form className="subscription-form sm:flex-row flex-col" onSubmit={submitForm}>
                <input type="email" required placeholder="输入邮箱" value={email} onChange={(event) => setEmail(event.target.value)} />
                <button
                  type="submit"
                  className={`button_fail flex-none font-semibold text-white leading-7 text-lg bg-neutral-800 px-6 py-2.5 rounded-md block hover:bg-neutral-900 transition sm:w-[200px] w-full ${
                    submitting ? "disabled" : ""
                  }`}
                >
                  {submitting ? <span className="loader" /> : <span>订阅堆栈 Stack<span className="button-icon">→</span></span>}
                </button>
              </form>
              {error ? <div className="error-message">请输入有效的邮箱地址。</div> : null}
              <div className="text-neutral-500 text-sm mt-2 block">
                关于设计、技术、创作等话题的独家经验和分享，
                <a className="font-medium text-neutral-700 hover:text-neutral-900 transition" href="https://zuozizhen.substack.com/archive" target="_blank" rel="noreferrer">
                  查看往期内容
                </a>
              </div>
            </div>
            <div className="sm:h-full w-full flex sm:flex-col flex-row items-center gap-1">
              <div className="sm:h-full w-full sm:w-[1px] h-[1px] bg-neutral-200" />
              <div className="text-xs font-semibold text-neutral-400">OR</div>
              <div className="sm:h-full w-full sm:w-[1px] h-[1px] bg-neutral-200" />
            </div>
            <div className="flex items-center gap-6 flex-col md:flex-row text-center md:text-left">
              <div className="qr sm:w-24 sm:h-24 w-36 h-36 rounded-md flex-none border border-neutral-200" />
            </div>
          </div>
        </div>
      </section>

      <Section title="资源" description="为设计师或创作者提供有用的资源">
        <ResourcesGrid />
      </Section>

      <Section title="文章" description="和设计、开发、创作有关的分享">
        <BlogList blogs={blogs} />
        <a href="/blog" className="block font-semibold mt-6 hover:opacity-70 transition">更多文章 -&gt;</a>
      </Section>
    </div>
  );
}

function Section({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <section className="relative py-12 px-5">
      <div className="max-w-screen-lg mx-auto space-y-7">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <div className="text-neutral-500 text-lg">{description}</div>
        </div>
        {children}
      </div>
    </section>
  );
}
