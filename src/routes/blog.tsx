import { createFileRoute } from "@tanstack/react-router";
import BlogList from "@/components/BlogList";
import { getRecentBlogs } from "@/lib/content";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [{ title: "文章 | 左子祯" }] }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const blogs = getRecentBlogs();
  return (
    <section className="max-w-screen-lg mx-auto w-full px-5 py-12">
      <div className="mb-8 mt-12">
        <h1 className="text-4xl font-semibold">文章</h1>
        <p className="text-neutral-500 mt-2">和设计、开发、创作有关的分享</p>
      </div>
      <BlogList blogs={blogs} />
    </section>
  );
}
