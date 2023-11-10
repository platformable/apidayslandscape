import React, { useContext, useEffect, useState, useRef } from "react";
import { newModel } from "../context/data";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";
import { CompanyContext } from "../context/CompanyContext";
import { useRouter } from "next/router";
import ReactTooltip from "react-tooltip";
import HomepageSubcategory from "../components/HomepageSubcategory";
import Modal from "../components/Modal";
import Methodology from "../components/Methodology";
import TopBarProgress from "react-topbar-progress-indicator";
import {
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";
import Script from "next/script";
import HomepageSubcategoryAlt from "../components/HomepageSubcategoryAlt";

export default function Homepage({ data }) {
  // console.log("data", data)
  const [company, setCompany] = useContext(CompanyContext);
  const [selectedEntity, setSelectedEntity] = useState([]);
  const [withZoom, setWithZoom] = useState(false);

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(!loading);
  };

  const handleCompany = (company) => {
    setCompany(company);
    router.push(`/company/${company.name}`);
  };

  const lastUpdate = new Date();

  TopBarProgress.config({
    barColors: {
      0: "#fdb43e",
      "1.0": "#fdb43e",
    },
    shadowBlur: 5,
  });

  const handleForm = (url) => {
    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  };

  const getMonth = (date) => {
    return lastUpdate.toLocaleString("default", {
      month: "long",
    });
  };
  const getDay = (date) => {
    return lastUpdate.toLocaleString("default", {
      day: "2-digit",
    });
  };

  const getYear = (date) => {
    return lastUpdate.toLocaleString("default", {
      year: "numeric",
    });
  };

  const isInitialMount = useRef(true);

  /*   useEffect(() => {
    if (isInitialMount.current) {
      getBusinessANDMessaginApis(data);
      getBusinessANDKYC(data);
      isInitialMount.current = false;
    } else {
    }
  }, []); */

  const handleEntity = (entity) => {
    setSelectedEntity(entity);
  };

  const handleLinks = (url) => {
    handleLoading();
    router.push(`/${url}`);
  };

  const totalValues = data.values.filter(
    (items) =>
      items.parentCategorySlug !== "API Standards/Protocols" &&
      items.parentCategorySlug !== "Media/Associations"
  );

  const [searchResult, setSearchResult] = useState(false);

  const handleSearchMessage = () => {
    setSearchResult(true);
    setTimeout(() => setSearchResult(false), 3000);
  };

  const handleFoundCompany = (company) => {
    setLoading(!loading);
    router.push(`/company/${company}`);
  };

  const handleSearch = () => {
    if (company.searchInput !== "") {
      const result = data.values.filter(
        (item, index) => item.name.toLowerCase() === company.searchInput
      );
      result.length === 0
        ? handleSearchMessage()
        : handleFoundCompany(result[0].name);
    }
  };

  return (
    <Layout>
      {loading && <TopBarProgress />}
      <div className="">
        <Head>
          <title>The API Landscape</title>
          <meta content="text/html; charset=UTF-8" name="Content-Type" />
          <meta name="description" content="The API Landscape" />
          <meta property="og:url" content="https://apilandscape.apiscene.io/" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:description" content="The API Landscape" />
          <meta property="og:title" content="The API Landscape" />
          <meta property="og:image" content="../landscape_social_map.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@APIdaysGlobal" />
          <meta name="twitter:title" content="apidays" />
          <meta name="twitter:description" content="apidays" />
          <meta name="twitter:image" content="../landscape_social_map.png" />
        </Head>
        <Script
          defer
          data-domain="apilandscape.apiscene.io"
          src="https://plausible.io/js/script.js"
        />
        <main>
          <section id="hero" className="intro-text py-3 ">
            <div className="d-flex container justify-content-center  align-items-center">
              {/* <Link className="navbar-brand" href="/"><img src="../homepage/logo_temporary_apilandscape.png" alt="apidays" className="home-logo align-self-start" /></Link> */}
              <div className="text-center flex-grow-1">
                <h1 className="text-white text-center py-2 text-white fw-bold">
                  The API Landscape
                </h1>
                <p className="text-center sm-text text-white">
                  Last Update: {`${getDay()} ${getMonth()} ${getYear()}`}
                </p>
                <h4 className="text-white text-center py-2 text-white">
                  A comprehensive view of all stakeholders creating the
                  programmable economy
                </h4>
                <button
                  className="btn btn-dark-gray me-1 text-white mb-1"
                  onClick={() =>
                    handleForm("https://airtable.com/shr07pWSbRnQfnZZd")
                  }
                >
                  Add your API Tool
                </button>
                <button
                  className="btn btn-light-gray  m-0 text-company-color mb-1"
                  onClick={() => handleLinks("companies")}
                >
                  Search
                </button>
                <a
                  className="btn btn-dark-gray me-1 text-white"
                  href="../apilandscape.png"
                  download="apilandscape"
                >
                  Download the map
                </a>
                <button
                  className="btn btn-light-gray   text-company-color "
                  onClick={() => setWithZoom((prev) => !prev)}
                >
                  Zoom
                </button>
                {/* <a className="btn btn-dark-gray  text-white" href="https://drive.google.com/u/0/uc?id=1J2DdAB54QU6QuPoACqQoNv4nImFjyAdx&export=download"  download="stateofthemarket2022">Report</a> */}
                <a
                  className="btn btn-dark-gray  text-white"
                  href="https://apidays.typeform.com/to/YMTfJ3"
                  target="_blank"
                >
                  Report
                </a>
                {/*      <div className="row">
            <div className="col-md-4"> </div>
              <div className="col-md-4">
              <div className="input-group my-3">
                <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="button-addon2" value={company.inputSearch} onChange={(e)=>setCompany({...company,searchInput:e.target.value})}/>
                <button className="btn btn-dark-gray text-white" type="button" id="button-addon2" onClick={()=>handleSearch(company.searchInput)}>search</button>
              </div>
               {searchResult && <div className="text-center"><span className="text-center sm-text text-white">Company not found</span></div>}
              </div>
              <div className="col-md-4"></div>              
            </div> */}
              </div>
              <div className="mt-5">
                <h3>
                  <span className="badge bg-light text-black shadow d-none d-md-block  mt-5">
                    {totalValues.length}
                  </span>{" "}
                </h3>
                <h3 className="sm-text text-center text-white md-social-share-buttons">
                  Share
                </h3>
                <LinkedinShareButton
                  url="https://apilandscape.platformable.com/"
                  title="The API Landscape"
                  source="https://apilandscape.platformable.com/"
                  summary="The API Landscape"
                >
                  <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>
                <TwitterShareButton
                  title="The API Landscape"
                  url="https://apilandscape.platformable.com"
                  via="http://apidays.global"
                  hashtags={["api", "landscape"]}
                >
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>
                <EmailShareButton
                  url=""
                  title="The API Landscape"
                  subject="The API Landscape from apidays"
                  separator=" "
                  body="Get to know more about the API Landscape, visit http://apilandscape.com"
                >
                  <EmailIcon size={32} round={true} />
                </EmailShareButton>
              </div>
            </div>
          </section>
          <section className="home-landscape heroBg d-none d-md-block py-1">
            <ReactTooltip
              backgroundColor="#04a5b6"
              textColor="#fff"
              id="companyName-tooltip"
            />
            <ReactTooltip
              backgroundColor="#0c4b6e"
              textColor="#fff"
              id="subcategory-tooltip"
            />
            <ReactTooltip
              backgroundColor="#0c4b6e"
              textColor="#fff"
              id="category-tooltip"
              place="right"
              className="categoryToolTip"
            />

            <div className="container-fluid">
              <div className="row" id="cluster-container">
                {Object.entries(newModel)?.map(
                  ([clusterName, values], index) => {
                    
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
                            {Object.entries(values?.categories).map(
                              ([categorieName, values], index) => {
                                
                                return (
                                  <div
                                    id="categorie"
                                    className="px-2 py-3 flex-grow-1  border border-1 rounded border-dark bg-category-container-purple"
                                  >
                                    <center className="mb-3">
                                      {categorieName}
                                    </center>
                                    <div
                                      id="subcategories-container"
                                      className={`d-flex flex-column flex-wrap gap-3 landscape-container`}
                                      key={index}
                                    >
                                      {values?.subcategories?.map(
                                        (subcat, index) => {
                                          // if (subcat.name === 'Red Hat') console.log("subcat,", subcat, categorieName);
                                          const filteredSubcategory =
                                            data.values.filter(
                                              (company, index) =>
                                                // company.category?.includes(categorieName) &&
                                                company?.subcategory?.includes(
                                                  subcat.name
                                                )
                                            );
                                          filteredSubcategory.sort((a, b) =>
                                            a.name.localeCompare(b.name)
                                          );
                                          return (
                                            <div
                                              id="subcategory"
                                              className="flex-grow-1 flex-shrink-0"
                                              key={index}
                                            >
                                              
                                              {data <= 0 && <Loader />}

                                              <HomepageSubcategoryAlt
                                                subcategory={subcat}
                                                handleCompany={handleEntity}
                                                filteredSubcategory={
                                                  filteredSubcategory
                                                }
                                                withZoom={withZoom}
                                              />
                                              
                                            </div>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </section>

          {/* MOBILE ********************************************************/}

          {Object.entries(newModel)?.map(([clusterName, values], index) => {
            return (
              // <div className={``}>
              <section
                className="mobile-landscape d-xs-block d-md-none"
                key={index}
              >
                <div className="container">
                  <div className="row">
                    <center>{clusterName}</center>

                    <div className="col-md-12 bg-white px-0">
                      {Object.entries(values?.categories).map(
                        ([categorieName, values], index) => (
                          <div key={index}>
                            <h3
                              className="sm-text text-center mobile-bg-dark-company-color text-white py-2"
                              data-tip={values?.description}
                              data-for="category-tooltip"
                            >
                              {categorieName}
                              {/* ({APILifecyclePlatform.length}) */}
                            </h3>
                            {values.subcategories?.map((subcat, index) => {
                              // console.log("subcat,", subcat)
                              const filteredSubcategory = data.values.filter(
                                (company, index) =>
                                  company?.subcategory?.includes(subcat.name)
                              );
                              filteredSubcategory.sort((a, b) =>
                                a.name.localeCompare(b.name)
                              );
                              return (
                                <div className="subcat" key={index}>
                                  <HomepageSubcategory
                                    subcategory={subcat}
                                    handleCompany={handleEntity}
                                    filteredSubcategory={filteredSubcategory}
                                  />
                                </div>
                              );
                            })}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}

          {/* END MOBILE */}

          <Methodology />
        </main>
      </div>
      <Modal selectedEntity={selectedEntity} handleLoading={handleLoading} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  console.log(process.env.NEXT_PUBLIC_API_KEY)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/v2/companies`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
    }
    }
  );

  const data = await res.json();
  const cleanNullValues = await data.values.filter(company => company.cluster !== null|| company.category !== null)

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data: {values: cleanNullValues} },
  };
}
