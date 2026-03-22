import Link from "next/link";
import BlogList from "@/components/BlogList";
import ResourcesGrid from "@/components/ResourcesGrid";
import { getRecentBlogs } from "@/lib/content";

export default function HomePage() {
  const blogs = getRecentBlogs(2);

  return (
    <div className="sm:space-y-20 space-y-3 mb-24">
      <section className="flex flex-col pt-20 pb-8 sm:pt-40 px-5">
        <div className="max-w-screen-lg mx-auto w-full">
          <h1 className="text-3xl font-semibold max-w-3xl">我是左子祯 — 设计师, 创作者。</h1>
          <p className="text-xl mt-3 text-neutral-500 max-w-[52rem] leading-9">
            我是一名产品设计师，乐于创作和分享，对创造充满热情，关注AI Agent、一人公司、工作流，你可以关注我的
            <a
              href="https://twitter.com/zuozizhen"
              target="_blank"
              rel="noreferrer"
              className="font-medium hover:opacity-70 border-neutral-500 text-neutral-800 underline underline-offset-2"
            >
              X
            </a>
            、
            <a
              href="https://www.xiaohongshu.com/user/profile/5c5f7e25000000001000fc79"
              target="_blank"
              rel="noreferrer"
              className="font-medium hover:opacity-70 border-neutral-500 text-neutral-800 underline underline-offset-2"
            >
              小红书
            </a>
            、或者下方公众号。
          </p>
          <div className="mt-12 flex items-center gap-6 flex-col md:flex-row text-center md:text-left">
            <img src="/qrcode.jpg" alt="微信公众号" className="sm:w-32 sm:h-32 w-48 h-48 rounded-lg flex-none border border-neutral-200" />
            <div>
              <h3 className="text-lg font-semibold mb-1">关注我的公众号</h3>
              <p className="text-neutral-500">分享 AI、一人公司相关内容</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-screen-lg mx-auto w-full px-5">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">资源</h2>
          <p className="text-neutral-500 mt-1">为设计师或创作者提供有用的资源</p>
        </div>
        <ResourcesGrid />
      </section>

      <section className="max-w-screen-lg mx-auto w-full px-5">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">文章</h2>
          <p className="text-neutral-500 mt-1">和设计、开发、创作有关的分享</p>
        </div>
        <BlogList blogs={blogs} />
        <Link href="/blog" className="block font-semibold mt-6 hover:opacity-70 transition">
          更多文章 -&gt;
        </Link>
      </section>
    </div>
  );
}
