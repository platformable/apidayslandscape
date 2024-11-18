export default function ClusterContainer({clusterName, values, index, children}) {
  return (
    // <div id={clusterName.split(' ').join('_').toLowerCase()} className="" key={index}>
    <div id={clusterName} className="" key={index}>
      {/* <a href={`/#${clusterName}`}></a> */}
      <div className="flex flex-col bg-[var(--main-blue)] rounded-lg px-4 pb-10">
        <div className={`cluster-label py-3  ${values.color || 'transparent'} rounded-t-lg`}>
          <header className="flex gap-3 items-center">
          <h2
            className="text-[23px] text-white text-left block font-bold "
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
          className="cursor-pointer bg-[var(--tooltip-bg)] rounded-full text-sm w-5 h-5 grid place-content-center"
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
          className={` flex flex-col gap-x-4 gap-y-7`}
        >
            {children}

        </div>
      </div>
    </div>
  );
}
