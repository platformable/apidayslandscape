export default function ClusterContainer({clusterName, values, index, children}) {
  return (
    <div id="cluster" className="col-md-12 mb-1" key={index}>
      <div className="home-main-container ">
        <div className={`${values.color}`}>
          <span
            className="text-white"
            data-tip={values?.description}
            data-for="category-tooltip"
          >
            {clusterName}(
            {
              Object.values(values?.categories)
                .map((cat) => cat)
                .flat().length
            }
            )
          </span>
        </div>
        <div
          id="categories-container"
          className="p-2 d-flex flex-wrap flex-row gap-3"
        >
            {children}

        </div>
      </div>
    </div>
  );
}
