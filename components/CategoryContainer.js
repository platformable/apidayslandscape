export default function CategoryContainer({
  categorieName,
  values,
  index,
  children,
}) {
  const sectionColor = values.color ? `${values.color}` : "bg-[#E6EFFF]";
  return (
    <div
      id="categorie"
      className={`px-5 py-4 flex-grow ${sectionColor} border-2 border-[var(--orange)] rounded-md`}
      key={index}
    >
      <header className="flex gap-3">
        <h3 className="mb-4 font-bold text-[#083ECB] block text-left">
          {categorieName}
        </h3>
        <div
          className="cursor-pointer bg-blue-500 rounded-full text-sm text-white w-5 h-5 grid place-content-center"
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
