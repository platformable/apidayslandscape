export default function CategoryContainer({
  categorieName,
  values,
  index,
  children,
}) {
  const sectionColor = values.color ? `${values.color}` : "bg-[var(--main-green)]";
  return (
    <div
      id="categorie"
      className={`px-5 py-4 flex-grow ${sectionColor} rounded-md`}
      key={index}
    >
      <header className="flex gap-3">
        <h3 className="mb-4 font-bold text-white block text-left">
          {categorieName}
        </h3>
        <div
          className="cursor-pointer bg-[var(--tooltip-bg)] rounded-full text-sm  w-5 h-5 grid place-content-center"
          data-tooltip-content={
            values.description || "No description provided"
          }
          data-tooltip-id="category-tooltip"
        >
          ?
        </div>
      </header>
      <div
        id="subcategories-container"
        className={`flex flex-col flex-wrap gap-3`}
        key={index}
      >
        {children}
      </div>
    </div>
  );
}
