import type { BlogListEntry } from "@/lib/content-list";

type Props = {
  blogs: BlogListEntry[];
  variant?: "home";
};

export default function BlogList({ blogs }: Props) {
  return (
    <ul className="grid sm:grid-cols-2 grid-cols-1 gap-y-14 gap-x-10 w-full">
      {blogs.map((blog) => (
        <li key={blog.slug}>
          <a href={`/blog/${blog.slug}`}>
            {blog.image ? (
              <img
                src={blog.image}
                alt={blog.title}
                loading="lazy"
                decoding="async"
                className="w-full rounded-md aspect-[16/9] object-cover"
              />
            ) : (
              <div className="w-full rounded-md aspect-[16/9] bg-neutral-100" />
            )}
            <div>
              <h3 className="text-xl font-semibold leading-snug tracking-tight mt-4 text-neutral-800">
                {blog.title}
              </h3>
              <div className="flex gap-1 mt-2">
                <div className="text-gray-500">{blog.snippet}</div>
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
