import { createFileRoute, notFound } from "@tanstack/react-router";
import { getProjectBySlug } from "@/lib/content";

export const Route = createFileRoute("/project/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData ? `${loaderData.project.title} | 左子祯` : "工作项目 | 左子祯",
      },
    ],
  }),
  component: ProjectDetailPage,
});

function getProject(slug: string) {
  const project = getProjectBySlug(slug);
  if (!project) throw notFound();
  return project;
}

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();
  return (
    <section className="max-w-screen-lg mx-auto w-full px-5 py-12">
      <div className="flex mx-auto gap-20">
        <div className="w-full sm:mb-20 mb-10">
          <div className="mt-12">
            <h1 className="text-4xl font-semibold mb-3 text-neutral-800 leading-snug">
              {project.title}
            </h1>
            <time className="block text-gray-400 mb-3" dateTime={project.publishedAt ?? undefined}>
              {project.formattedDate}
            </time>
            {project.image ? (
              <img
                src={project.image}
                className="rounded-xl flex-none w-full"
                alt={project.title}
              />
            ) : null}
          </div>
          <div
            className="prose prose-lg mt-6 max-w-full"
            dangerouslySetInnerHTML={{ __html: project.renderedContent }}
          />
        </div>
      </div>
    </section>
  );
}
