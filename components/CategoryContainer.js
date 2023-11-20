export default function CategoryContainer({
  categorieName,
  values,
  index,
  children,
}) {
  const sectionColor = values.color ? `${values.color}`: 'bg-[#E6EFFF]'
  return (
    <div
      id="categorie"
      className={`px-2 2xl:px-3 py-4 flex-grow ${sectionColor} border-2 border-[var(--orange)] rounded`}
      key={index}
    >
      <center className="mb-4 font-bold text-[#083ECB]">{categorieName}</center>
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
