import { createFileRoute } from "@tanstack/react-router";
import { getRecentProjects } from "@/lib/content";

export const Route = createFileRoute("/project")({
  head: () => ({ meta: [{ title: "工作项目 | 左子祯" }] }),
  component: ProjectIndexPage,
});

function ProjectIndexPage() {
  const projects = getRecentProjects();
  return (
    <section className="max-w-screen-lg mx-auto w-full px-5 py-12">
      <div className="mb-8 mt-12">
        <h1 className="text-4xl font-semibold">工作项目</h1>
        <p className="text-neutral-500 mt-2">我参与过的一些工作项目</p>
      </div>
      <ul className="grid grid-cols-1 gap-10">
        {projects.map((project) => (
          <li key={project.slug}>
            <a href={`/project/${project.slug}`}>
              <div className="w-full aspect-[1480/830] flex relative items-center sm:pl-16 pl-6 overflow-hidden rounded-xl">
                <div className="w-2/5 relative z-10">
                  <div className="flex gap-1 mb-2 text-white text-opacity-50 sm:text-base text-sm font-medium mix-blend-hard-light">
                    {project.year} · {project.duty}
                  </div>
                  <h2 className="sm:text-3xl text-xl font-semibold leading-snug tracking-tight text-neutral-100">{project.title}</h2>
                  <div className="flex gap-1 mt-8 text-white text-opacity-50 sm:text-base text-xs mix-blend-hard-light">查看项目 -&gt;</div>
                </div>
                {project.image ? <img src={project.image} className="w-full object-cover absolute right-0 top-0 -z-0" alt={project.title} /> : <div className="w-full h-full absolute right-0 top-0 -z-0 bg-neutral-800" />}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
