export default function IconTitle({ subtitle, title, icon }) {
  return (
    <div className="mt-12">
      <div className="-mb-10 text-xs text-gray-500 dark:text-gray-400 flex items-center space-x-1">
        <i class={icon}></i>
        <span>{subtitle}</span>
      </div>
      <h2 className="">{title}</h2>
    </div>
  );
}