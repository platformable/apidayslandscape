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

  /*   console.log("data",data) */



  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState("");
  const [noData, setNoData] = useState(true);

  const [liveData, setLiveData] = useState(data.values);
  const [categoriesList, setCategoriesList] = useState([]);
  const [sorted, setSorted] = useState(true);
  const [subcategoryList, setSubcategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCluster, setSelectedCluster] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");


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
      setLiveData(liveData.sort((a, b) => b.name.localeCompare(a.name)));
    } 
    if (!sorted){ 
      setLiveData(liveData.sort((a, b) => a.name.localeCompare(b.name)));
    }
  };



  const handleFilter = () => {
    if (company.searchInput !== "") {
      handleCompanyName(company.searchInput);
    }

    if (
      selectedCluster === "All" &&
      selectedSubcategory === "All" &&
      selectedCategory === "All"
    ) {
      setLiveData(data.values);
      setSubcategoryList(subcategories);
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

  const handleLoading = () => {
    setLoading(!loading);
  };

 
/*   useEffect(() => {
       

      }, [sorted]); */


  useEffect(() => {
    
    handleFilter();

    setTimeout(function () {
      setLoader(false);
    }, 1000);
  }, [selectedCategory, selectedSubcategory, selectedCluster]);

  const clusters = Object.keys(newModel);

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

  const subcategories = Object.entries(newModel)
    .map(([clusters, values], index) => {
      return Object.entries(values.categories)
        .map(([category, value], i) => {
          return Object.entries(value.subcategories)
            .map(([sub, v], ind) => {
              return v.name;
            })
            .flat();
        })
        .flat();
    })
    .flat();


  return (
    <Layout>
      <Head>
        <title>apidays Landscape - Companies</title>
        <meta name="description" content="apidays landscape companies" />
      </Head>
      {loading && <TopBarProgress />}
      <SearchFilters
        categories={categories}
        subcategoryList={subcategories}
        clusters={clusters}
        // total={total}
        handleSorted={handleSorted}
        setSelectedCategory={setSelectedCategory}
        setSelectedSubcategory={setSelectedSubcategory}
        handleCompanyName={handleCompanyName}
        sorted={sorted}
        selectedCluster={selectedCluster}
        setSelectedCluster={setSelectedCluster}
        subcategories={subcategories}
        datalength={liveData.length}
      />

      {loader && (
        <div className="container mx-auto text-center flex justify-center my-5">
          <img src="../Spinner-1s-44px.gif" />{" "}
        </div>
      )}

      <section className="cards ">
        <div className="container mx-auto">
        {liveData.message ? <p className="font-bold text-center bg-blue-50 rounded-lg px-2 py-1">{liveData.message}</p> : ""}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 rounded md:px-0 px-5 my-10">
           
            {liveData.length > 0 ? (
              liveData?.map((company, index) => {
                return (
                  <CompanyCard
                    company={company}
                    index={index}
                    handleLoading={handleLoading}
                    key={index}
                  />
                )
              })
            ) : (
              
             <></>
           
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
    props: { data: { values: cleanNullValues.sort((a, b) => a.name.localeCompare(b.name)) } },
  };
}
