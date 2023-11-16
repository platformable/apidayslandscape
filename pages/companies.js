import React, { useState, useEffect, useRef, useContext } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import CompanyCard from "../components/CompanyCard";
import TopBarProgress from "react-topbar-progress-indicator";
//import { categories,subcategories,categoriesWithSubcategories } from '../utils/categoriesAndSubcategories';
import Loader from "../components/Loader";
import { CompanyContext } from "../context/CompanyContext";
import { newModel } from "../context/data";
import SearchFilters from "../components/SearchFilters";

export default function companiesCards({ data }) {
  const [company, setCompany] = useContext(CompanyContext);

  const newData = data.values.filter(
    (items) =>
      (items.parentCategorySlug !== "API Standards/Protocols" &&
        items.parentCategorySlug !== "Media/Associations") ||
      company.searchInput
  );

  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState("");
  const [noData, setNoData] = useState(true);

  const [liveData, setLiveData] = useState([] || newData);
  const [categoriesList, setCategoriesList] = useState([]);
  const [sorted, setSorted] = useState(true);
  const [subcategoryList, setSubcategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCluster, setSelectedCluster] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");

  const total = liveData.filter(
    (items) =>
      (items.parentCategorySlug !== "API Standards/Protocols" &&
        items.parentCategorySlug !== "Media/Associations") ||
      company.searchInput
  ).length;

  //console.log("cluster", clusters)

  TopBarProgress.config({
    barColors: {
      0: "#fdb43e",
      "1.0": "#fdb43e",
    },
    shadowBlur: 5,
  });

  const handleCompanyName = (text) => {
    const result = data.values.filter((company, index) =>
      company.name.toLowerCase().includes(text.toLowerCase())
    );

    setLiveData(result);
    if (result.length <= 0) {
      setNoData(true);
    } else {
      setNoData(false);
    }
  };

  const handleSorted = () => {
    setSorted(!sorted);

    if (sorted) {
      setLiveData(liveData.sort((b, a) => a.name.localeCompare(b.name)));
    } else {
      setLiveData(liveData.sort((a, b) => a.name.localeCompare(b.name)));
    }
  };

  const handleFilter = () => {
    if (company.searchInput !== "") {
      handleCompanyName(company.searchInput);
    }

    if (selectedSubcategory === "All" && selectedCategory === "All") {
      setLiveData(data.values);
      setSubcategoryList(subcategories);
    }

    if (selectedCategory !== "All" && selectedSubcategory === "All") {
      const result = data.values.filter((company, index) =>
        company.parentCategorySlug?.includes(selectedCategory)
      );
      const subcatgeoriesOfSelectedCategory =
        categoriesWithSubcategories.filter(
          (category, index) => category.name === selectedCategory
        );

      setLiveData(result);
      setCategoriesList(subcatgeoriesOfSelectedCategory);
      setSubcategoryList(subcatgeoriesOfSelectedCategory[0]?.subcategories);
    }

    if (selectedCategory !== "All" && selectedSubcategory !== "All") {
      const result = data.values.filter(
        (company, index) =>
          company.parentCategorySlug?.includes(selectedCategory) &&
          company.subcategory?.includes(selectedSubcategory)
      );
      setLiveData(result);
    }

    if (selectedCategory === "All" && selectedSubcategory !== "All") {
      const result = data.values.filter((company, index) =>
        company.subcategory?.includes(selectedSubcategory)
      );
      setLiveData(result);
    }
  };

  const handleLoading = () => {
    setLoading(!loading);
  };

  useEffect(() => {
    liveData.sort((a, b) => a.name.localeCompare(b.name));
    handleFilter();

    setTimeout(function () {
      setLoader(false);
    }, 1000);
  }, [selectedCategory, selectedSubcategory]);

  const clusters = Object.keys(newModel);

  /* const categories = Object.entries(newModel).map(([clusters,values],index)=>{
 const data = Object.entries(values.categories).map(([category,value],i)=>{
return category
 })
 return data
}) */

  const categories = Object.entries(newModel)
    .map(([clusters, values], index) => {
      const allCategories = [];
      const data = Object.entries(values.categories).map(
        ([category, value], i) => {
          return allCategories.push(category);
        }
      );
      return allCategories;
    })
    .flat();

  console.log("categories", categories);

  const subcategories = Object.entries(newModel).map(([clusters,values],index)=>{
    return Object.entries(values.categories).map(([category,value],i)=>{
       return Object.entries(value.subcategories).map(([sub,v],ind)=>{
     return v.name
   }).flat()
    }).flat()
   }).flat()


  console.log("sub", subcategories);

  return (
    <Layout>
      <Head>
        <title>apidays Landscape - Companies</title>
        <meta name="description" content="apidays landscape companies" />
      </Head>
      {loading && <TopBarProgress />}
      <SearchFilters
        categories={categories}
        subcategoryList={subcategoryList}
        clusters={clusters}
        total={total}
        handleSorted={handleSorted}
        setSelectedCategory={setSelectedCategory}
        setSelectedSubcategory={setSelectedSubcategory}
        handleCompanyName={handleCompanyName}
        sorted={sorted}
        selectedCluster={selectedCluster}
        setSelectedCluster={setSelectedCluster}
      />

      {loader && (
        <div className="text-center d-flex justify-content-center my-5">
          <img src="../Spinner-1s-44px.gif" />{" "}
        </div>
      )}

      <section className="cards my-2">
        <div className="container mx-auto">
          <div className="card-container">
            {liveData ? (
              liveData.map((company, index) => {
                return (
                  <CompanyCard
                    company={company}
                    index={index}
                    handleLoading={handleLoading}
                    key={index}
                  />
                );
              })
            ) : (
              <Loader />
            )}

            {liveData.length <= 0 && !loader ? "No Data..." : ""}

            {/* {noData ? <h3 className="fw-bold">No Data</h3>: <img src="../waiting.gif"/>}  */}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v2/companies`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  });

  const data = await res.json();
  const cleanNullValues = await data.values.filter(
    (company) => company.cluster !== null || company.category !== null
  );

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data: { values: cleanNullValues } },
  };
}
