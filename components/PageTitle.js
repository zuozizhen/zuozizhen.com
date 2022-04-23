export default function PageTitle({ title, textColor, description }) {
  return (
    <div className="space-y-4 mb-12">
      <h1 className="font-bold text-2xl md:text-3xl">
        <span className={textColor}>{title}</span>
      </h1>
      <p className="prose dark:prose-dark">{description}</p>
    </div>
  );
}
