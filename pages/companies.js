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



  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState("");
  const [noData, setNoData] = useState(true);

  const [liveData, setLiveData] = useState(data.values);
  const [sorted, setSorted] = useState(true);



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





  const handleLoading = () => {
    setLoading(!loading);
  };


 

  const clusters = Object.keys(newModel);
  const categories = Object.entries(newModel)
    .map(([cluster, values], index) => {
      const allCategories = [];
      const data = Object.entries(values.categories).map(
        ([category, value], i) => {
          return allCategories.push({label: category, cluster });
        }
      );
      return allCategories;
    })
    .flat();

    const subcategories = Object.entries(newModel)
    .map(([cluster, values], index) => {
      const allSubcategories = [];
      // console.log("make subcategories", cluster, values)
      const data = Object.entries(values.categories).map(
        ([category, value], i) => {
          value?.subcategories.forEach(subcat => allSubcategories.push({label: subcat.name, category }))
        }
      );
      return allSubcategories;
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
        clusters={clusters}
        data={data}
        setLiveData={setLiveData}
        setLoader={setLoader}
        handleSorted={handleSorted}
        handleCompanyName={handleCompanyName}
        sorted={sorted}
        subcategories={subcategories}
        datalength={liveData.length}
      />

      {loader && (
        <div className="container mx-auto text-center flex justify-center my-5">
          <img src="../Spinner-1s-44px.gif" />{" "}
        </div>
      )}

      <section id="cards" className="container mx-auto py-10"> 
        {liveData.message ? <p className="font-bold text-center bg-[#E1F6F8] rounded-lg px-2 py-1">{liveData.message}</p> : ""}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded md:px-0 px-5 ">
           
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
      </section>
    </Layout>
  );
}

export async function getStaticProps(context) {
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
    revalidate:60
  };
}
