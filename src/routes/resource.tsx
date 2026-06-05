import { createFileRoute } from "@tanstack/react-router";
import ResourcesGrid from "@/components/ResourcesGrid";

export const Route = createFileRoute("/resource")({
  head: () => ({ meta: [{ title: "资源 | 左子祯" }] }),
  component: ResourcePage,
});

function ResourcePage() {
  return (
    <section className="max-w-screen-lg mx-auto w-full px-5 py-12">
      <div className="mb-8 mt-12">
        <h1 className="text-4xl font-semibold">资源</h1>
        <p className="text-neutral-500 mt-2">为设计师或创作者提供有用的资源</p>
      </div>
      <ResourcesGrid />
    </section>
  );
}
