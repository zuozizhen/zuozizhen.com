import { resources } from "@/lib/resources";

export default function ResourcesGrid() {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 gap-6">
      {resources.map((resource) => (
        <a
          key={resource.href}
          href={resource.href}
          className={`rounded-lg p-6 relative card-resource ${resource.className} border border-neutral-200 hover:shadow-lg`}
          target="_blank"
          rel="noreferrer"
        >
          <div className="bg-neutral-800 py-1 px-2 w-fit rounded text-xs mb-2.5 font-semibold text-white">
            {resource.badgeText}
          </div>
          <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
          <div className="text-sm font-medium">{resource.buttonText}</div>
        </a>
      ))}
    </div>
  );
}
