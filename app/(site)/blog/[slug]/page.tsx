import { notFound } from "next/navigation";
import { getAllBlogs, getBlogBySlug } from "@/lib/content";

export function generateStaticParams() {
  return getAllBlogs().map((blog) => ({ slug: blog.slug }));
}

type RouteParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};
  return { title: blog.title };
}

export default async function BlogDetailPage({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  return (
    <section className="max-w-screen-lg mx-auto w-full px-5 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="sm:mb-20 mb-10">
          <div className="mt-12">
            <h1 className="text-4xl font-semibold mb-3 text-neutral-800 leading-snug">{blog.title}</h1>
            <time className="block text-gray-400 mb-3" dateTime={blog.publishedAt ?? undefined}>{blog.formattedDate}</time>
            {blog.image ? <img src={blog.image} className="rounded-xl flex-none w-full" alt={blog.title} /> : null}
          </div>
          <div className="prose prose-lg mt-6" dangerouslySetInnerHTML={{ __html: blog.renderedContent }} />
        </div>
      </div>
    </section>
  );
}
