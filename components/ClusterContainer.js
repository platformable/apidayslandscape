export default function ClusterContainer({clusterName, values, index, children}) {
  return (
    <div id="cluster" className="" key={index}>
      <div className="flex flex-col border-2 border-[var(--orange)] rounded-lg bg-[#98BDFF] px-4 pb-10">
        <div className={`cluster-label py-3  ${values.color || 'bg-[#98BDFF]'} rounded-t-lg`}>
          <header className="flex gap-3 items-center">
          <h2
            className="text-[23px] text-[var(--dark-blue)] text-left block font-bold "
            data-tooltip-content={values?.description}
            data-tooltip-id="cluster-tooltip"
          >
            {clusterName}
            {/* <span className="opacity-80">
            (
            {
              Object.values(values?.categories)
                .map((cat) => cat)
                .flat().length
            }
            )
            </span> */}
          </h2>
          <div
          className="cursor-pointer bg-blue-500 rounded-full text-sm text-white w-5 h-5 grid place-content-center"
          data-tooltip-content={
            values.description || "No description provided"
          }
          data-tooltip-id="subcategory-tooltip"
        >
          ?
        </div>
          </header>
         
        </div>
        <div
          id="categories-container"
          className={`${values.color || 'bg-[#98BDFF]'}  flex flex-col gap-x-4 gap-y-7`}
        >
            {children}

        </div>
      </div>
    </div>
  );
}
