export default function ClusterContainer({clusterName, values, index, children}) {
  return (
    <div id="cluster" className="mb-5 " key={index}>
      <div className="flex border-2 border-[var(--orange)] bg-white rounded-md">
        <div className={`cluster-label rounded-r ${values.color || 'bg-[#98BDFF]'}`}>
          <h6
            className="text-white font-[13px]"
            data-tip={values?.description}
            data-for="category-tooltip"
          >
            {clusterName}{' '}
            <span className="opacity-80">
            (
            {
              Object.values(values?.categories)
                .map((cat) => cat)
                .flat().length
            }
            )
            </span>
          </h6>
        </div>
        <div
          id="categories-container"
          className="d-flex flex-wrap flex-row divide-y-2 divide-x-2 divide-[var(--orange)] "
        >
            {children}

        </div>
      </div>
    </div>
  );
}
