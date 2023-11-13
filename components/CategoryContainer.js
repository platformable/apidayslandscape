export default function CategoryContainer({
  categorieName,
  values,
  index,
  children,
}) {
  return (
    <div
      id="categorie"
      className={`${index === 0 && 'border-l-2 border-l-[var(--orange)] rounded-tr-md' }  px-2 2xl:px-3 py-4 flex-grow-1 ${values.color || 'bg-[#E6EFFF]'}`}
      key={index}
    >
      <center className="mb-4 font-bold text-[#083ECB]">{categorieName}</center>
      <div
        id="subcategories-container"
        className={`d-flex flex-column flex-wrap gap-3`}
        key={index}
      >
        {children}
      </div>
    </div>
  );
}
