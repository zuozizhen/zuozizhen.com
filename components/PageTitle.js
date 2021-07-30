export default function PageTitle({ title, description }) {
  return (
    <div className="space-y-4 mb-12">
      <h1 className="font-bold text-2xl md:text-3xl text-gray-900 dark:text-gray-100">
        {title}
      </h1>
      <p className="prose text-gray-500 dark:text-gray-500">{description}</p>
    </div>
  );
}
