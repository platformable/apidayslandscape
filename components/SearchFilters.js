import React, {useState, useEffect} from "react";
import APISCounter from "./APISCounter";
const initialStateForFilters = 'All'

export default function SearchFilters({
  categories,
  clusters,
  data,
  handleSorted,
  setLiveData,
  handleCompanyName,
  sorted,
  subcategories,
  setLoader,
  datalength
}) {
  const [selectedCategory, setSelectedCategory] = useState(initialStateForFilters);
  const [selectedCluster, setSelectedCluster] = useState(initialStateForFilters);
  const [selectedSubcategory, setSelectedSubcategory] = useState(initialStateForFilters);



  useEffect(() => {
    
    handleFilter();

    setTimeout(function () {
      setLoader(false);
    }, 1000);
  }, [selectedCategory, selectedSubcategory, selectedCluster]);
  const handleFilter = () => {
    // if (company.searchInput !== "") {
    //   handleCompanyName(company.searchInput);
    // }

    if (
      selectedCluster === "All" &&
      selectedSubcategory === "All" &&
      selectedCategory === "All"
    ) {
      setLiveData(data.values);
      // setSubcategoryList(subcategories);
    }

    if (
      selectedCluster !== "All" &&
      selectedCategory === "All" &&
      selectedSubcategory === "All"
    ) {

      const result = data.values.filter((company, index) =>
        company.cluster?.includes(selectedCluster)
      );
      setLiveData(result);
      //  setCategoriesList(subcatgeoriesOfSelectedCategory);
      //  setSubcategoryList(subcatgeoriesOfSelectedCategory[0]?.subcategorxies);
    }

    if (
      selectedCluster == "All" &&
      selectedCategory !== "All" &&
      selectedSubcategory === "All"
    ) {

      const result = data.values.filter((company, index) =>
        company.category?.includes(selectedCategory)
      );
      setLiveData(result);
      //  setCategoriesList(subcatgeoriesOfSelectedCategory);
      //  setSubcategoryList(subcatgeoriesOfSelectedCategory[0]?.subcategorxies);
    }

    if (
      selectedCluster == "All" &&
      selectedCategory === "All" &&
      selectedSubcategory !== "All"
    ) {
      
      const result = data.values.filter((company, index) =>
        company.subcategory?.includes(selectedSubcategory)
      );
      setLiveData(result);
      //  setCategoriesList(subcatgeoriesOfSelectedCategory);
      //  setSubcategoryList(subcatgeoriesOfSelectedCategory[0]?.subcategorxies);
    }

    if (
      selectedCluster !== "All" &&
      selectedCategory !== "All" &&
      selectedSubcategory === "All"
    ) {
      
      const result = data.values.filter(
        (company, index) =>
          company.cluster?.includes(selectedCluster) &&
          company.category.includes(selectedCategory)
      );

      result.length === 0
        ? setLiveData({
            message: "No data with that cluster and category relation",
          })
        : setLiveData(result);
      //  setCategoriesList(subcatgeoriesOfSelectedCategory);
      //  setSubcategoryList(subcatgeoriesOfSelectedCategory[0]?.subcategorxies);
    }


    if (
      selectedCluster !== "All" &&
      selectedCategory !== "All" &&
      selectedSubcategory !== "All"
    ) {
      
      const result = data.values.filter(
        (company, index) =>
          company.cluster?.includes(selectedCluster) &&
          company.category.includes(selectedCategory) &&
          company.subcategory.includes(selectedSubcategory) 

      );

      result.length === 0
        ? setLiveData({
            message: "No data with that cluster, category or subcategory relation",
          })
        : setLiveData(result);
      //  setCategoriesList(subcatgeoriesOfSelectedCategory);
      //  setSubcategoryList(subcatgeoriesOfSelectedCategory[0]?.subcategorxies);
    }


  };
  return (
    <section id="search-filter" className="bg-[var(--main-green)] py-5 md:px-0 px-5">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:flex gap-y-3 gap-x-5">
          <div className="clusters flex-1 ">
            <select
              className="bg-white px-2 py-3 w-full rounded-lg mb-2"
              aria-label="Default select example"
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
              aria-label="Default select example"
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option selected disabled>
                Select a Category
              </option>
              <option value="All">All</option>

              {categories
                ? categories.filter(category => selectedCluster !== 'All' ? category.cluster === selectedCluster : true).map((category, index) => {
                    return (
                      <option value={category?.label} key={index}>
                        {category?.label}
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
                ? subcategories.filter(subcategory =>  selectedCategory !== 'All' ? subcategory.category === selectedCategory : true).map((subcategory, index) => {
                    return (
                      <option value={subcategory.label} key={index}>
                        {subcategory.label}
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

            <div className="relative">
              <input
                type="search"
                onChange={(e) => handleCompanyName(e.target.value)}
                id="default-search"
                className="block w-full px-2 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-[var(--main-green)]"
                placeholder=""
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/107/107122.png"
                alt="Search icon"
                className="sm-icon absolute end-2.5 bottom-2.5"
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
            <APISCounter count={datalength}/>

            
            {/*   <p className="rounded font-bold  text-center shadow py-2 px-4 text-[#083ECB] bg-white"> {total} </p> */}
          </div>
        </div>
      </div>{" "}
      {/* container */}
    </section>
  );
}
