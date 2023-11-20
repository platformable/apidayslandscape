export default function ClusterContainer({clusterName, values, index, children}) {
  return (
    <div id="cluster" className="" key={index}>
      <div className="flex flex-col border-2 border-[var(--orange)] rounded-md bg-[#98BDFF]">
        <div className={`cluster-label py-3  ${values.color || 'bg-[#98BDFF]'} px-3 rounded-t-md`}>
          <h6
            className="text-[23px] text-[var(--dark-blue)] text-left block font-bold "
            data-tip={values?.description}
            data-for="category-tooltip"
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
          </h6>
        </div>
        <div
          id="categories-container"
          className={`${values.color || 'bg-[#98BDFF]'}  flex flex-wrap flex-row gap-10 rounded-md  mx-3`}
        >
            {children}

        </div>
      </div>
    </div>
  );
}
