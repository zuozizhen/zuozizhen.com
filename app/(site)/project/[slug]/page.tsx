import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/content";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

type RouteParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.title };
}

export default async function ProjectDetailPage({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <section className="max-w-screen-lg mx-auto w-full px-5 py-12">
      <div className="flex mx-auto gap-20">
        <div className="w-full sm:mb-20 mb-10">
          <div className="mt-12">
            <h1 className="text-4xl font-semibold mb-3 text-neutral-800 leading-snug">{project.title}</h1>
            <time className="block text-gray-400 mb-3" dateTime={project.publishedAt ?? undefined}>{project.formattedDate}</time>
            {project.image ? <img src={project.image} className="rounded-xl flex-none w-full" alt={project.title} /> : null}
          </div>
          <div className="prose prose-lg mt-6 max-w-full" dangerouslySetInnerHTML={{ __html: project.renderedContent }} />
        </div>
      </div>
    </section>
  );
}
