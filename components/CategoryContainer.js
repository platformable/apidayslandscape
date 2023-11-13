export default function CategoryContainer({
  categorieName,
  index,
  children,
}) {
  return (
    <div
      id="categorie"
      className="px-2 py-3 flex-grow-1  border border-1 rounded border-dark bg-category-container-purple"
      key={index}
    >
      <center className="mb-3">{categorieName}</center>
      <div
        id="subcategories-container"
        className={`d-flex flex-column flex-wrap gap-3 landscape-container`}
        key={index}
      >
        {children}
      </div>
    </div>
  );
}
