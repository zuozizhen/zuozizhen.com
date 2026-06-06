import { createFileRoute, notFound } from "@tanstack/react-router";
import { getBlogBySlug } from "@/lib/content";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const blog = getBlog(params.slug);
    return { blog };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: loaderData ? `${loaderData.blog.title} | 左子祯` : "文章 | 左子祯" }],
  }),
  component: BlogDetailPage,
});

function getBlog(slug: string) {
  const blog = getBlogBySlug(slug);
  if (!blog) throw notFound();
  return blog;
}

function BlogDetailPage() {
  const { blog } = Route.useLoaderData();
  return (
    <section className="max-w-screen-lg mx-auto w-full px-5 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="sm:mb-20 mb-10">
          <div className="mt-12">
            <h1 className="text-4xl font-semibold mb-3 text-neutral-800 leading-snug">
              {blog.title}
            </h1>
            <time className="block text-gray-400 mb-3" dateTime={blog.publishedAt ?? undefined}>
              {blog.formattedDate}
            </time>
            {blog.image ? (
              <img src={blog.image} className="rounded-xl flex-none w-full" alt={blog.title} />
            ) : null}
          </div>
          <div
            className="prose prose-lg mt-6"
            dangerouslySetInnerHTML={{ __html: blog.renderedContent }}
          />
        </div>
      </div>
    </section>
  );
}
