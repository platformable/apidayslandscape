import React from "react";

export default function SearchFilters({
  categories,
  subcategoryList,
  clusters,
  total,
  handleSorted,
  setSelectedCategory,
  setSelectedSubcategory,
  setSelectedCluster,
  selectedCluster,
  handleCompanyName,
  sorted,
  subcategories,
  datalength
}) {
  return (
    <section className="filer bg-[#083ECB] py-5 md:px-0 px-5">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:flex gap-y-3 gap-x-5">
          <div className="clusters flex-1 ">
            <select
              className="bg-white px-2 py-3 w-full rounded-lg mb-2"
              ariaLabel="Default select example"
              onChange={(e) => setSelectedCluster(e.target.value)}
            >
              <option selected disabled>
                Select a Cluster
              </option>
              <option value="All">All</option>

              {clusters
                ? clusters.map((cluster, index) => {
                    return (
                      <option value={cluster} key={index}>
                        {cluster}
                      </option>
                    );
                  })
                : ""}
            </select>
          </div>
          <div className="categories flex-1">
            <select
              className="bg-white px-2 py-3 w-full rounded-lg mb-2"
              ariaLabel="Default select example"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option selected disabled>
                Select a Category
              </option>
              <option value="All">All</option>

              {categories
                ? categories.map((category, index) => {
                    return (
                      <option value={category} key={index}>
                        {category}
                      </option>
                    );
                  })
                : ""}
            </select>
          </div>
          <div className="subcategories flex-1">
            <select
              className="bg-white px-2 py-3 rounded-lg mb-2 w-full"
              onChange={(e) => setSelectedSubcategory(e.target.value)}
            >
              <option selected disabled>
                Select a Subcategory
              </option>
              <option value="All">All</option>
              {subcategories
                ? subcategories.map((subcategory, index) => {
                    return (
                      <option value={subcategory} key={index}>
                        {subcategory}
                      </option>
                    );
                  })
                : ""}
            </select>
          </div>{" "}
          {/* subcategory */}
          <div className="search flex-1">
            {/*         <div className=" mb-2">
                    <input type="text" className="form-control " id="inputGroupFile04" 
                    aria-describedby="inputGroupFileAddon04" aria-label="" 
                    onChange={(e)=>handleCompanyName(e.target.value)} />
                    <button className="btn border bg-white" type="button" id="inputGroupFileAddon04" onClick={handleCompanyName}>
                    <img src="https://cdn-icons-png.flaticon.com/512/107/107122.png" alt="" className="sm-icon"/>
                    </button>
                    </div> */}

            <div class="relative">
              <input
                type="search"
                onChange={(e) => handleCompanyName(e.target.value)}
                id="default-search"
                className="block w-full px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/107/107122.png"
                alt=""
                className="sm-icon absolute end-2.5 bottom-2"
                width={20}
              />
            </div>
          </div>
          {/* search */}
          {/* <div></div>
          <div></div>
          <div className=""></div> */}
          <div className="flex max-md:justify-center items-center rounded gap-x-3">
          <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={sorted}
                id="flexCheckDefault"
                defaultChecked={sorted ? true : false}
                onClick={()=>handleSorted()}
              />
              <label
                className="form-check-label font-bold text-white"
                htmlFor="flexCheckDefault"
              >
                {" "}
                A-Z
              </label>
            </div>
            <div><div className="py-2 px-4 font-bold bg-white text-lg w-20">{datalength}</div></div>
            
            {/*   <p className="rounded font-bold  text-center shadow py-2 px-4 text-[#083ECB] bg-white"> {total} </p> */}
          </div>
        </div>
      </div>{" "}
      {/* container */}
    </section>
  );
}
