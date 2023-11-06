import React, { useContext, useEffect, useState, useRef } from "react";
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

export default function Homepage({ data }) {
  const [company, setCompany] = useContext(CompanyContext);

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

  const cluster = {
    "API Lifecycle Platform": {
      // ["Access Level and Identity Management",
      // "API Analytics/Monitoring",],
      // "API Documentation",
      // "API Security",
      0: ["API Management/API Gateway", "API Consulting"],
      1: ["API Design/Documentation Platforms"],
      2: ["API Developer Portals", "Streaming/Event Architecture"],
      // "API Testing",
      3: ["IoT Platforms/Networks/Devices"],
    },
    "API Lifecycle (Security Pureplay)": {
      0: ["API Security"],
      1: ["API Threat Management"],
      2: ["API Discovery and Risk Management", "Vulnerability Management"],
    },
    "API Lifecycle (Embedded Security)": {
      0: ["Vulnerability Identification/scanners", "Web Application Firewalls"],
    },
    "API Lifecycle (Adjacent Security Solutions)": {
      0: ["API Analytics/Monitoring"],
      1: ["Identity verification/KYC"],
      2: ["Login", "Access and Identity Management"],
    },
    // "API Standards/Protocols": [
    //   ["AsyncAPI"],
    //   ["FIDO"],
    //   ["GraphQL"],
    //   ["gRPC"],
    //   ["Open API Specs"],
    //   ["OpenID"],
    //   ["PSD2 API Abstractions"],
    //   ["STET Berlin Group"],
    // ],
    "Backend Building Tools": {
      0: ["API Deployment/Back-end Building"],
      1: ["Banking/Finance/Insurance Backends"],
      2: ["Blockchain"],
      3: ["Headless CMS"],
      4: ["Infrastructure/Cloud/Serverless APIs"],
      5: ["Mobile Backend as a Service"],
    },
    "Business processes as an API/API-as-a-Product": {
      0: ["Data"],
      1: ["Email/Messaging/Communications Platforms as a Service", "Payments"],
      2: ["AI/ML", "E-commerce"],
      3: ["Accounting", "Audio/Visual", "Legal/Regulatory"],
      4: ["Data governance/Data management"],
      5: [
        "Forms",
        "Human-as-a-service",
        "Human Resources",
        "Search",
        "Time/Calendar",
      ],
    },
    "Integration Platform as a Service": {
      0: ["API Aggregators (General)"],
      1: ["Automation/Orchestration"],
      2: ["Database-as-a-service", "API Aggregators (Finance)"],
    },
    "Vertical API Abstraction": {
      0: ["Finance", "Healthcare"],
      1: [
        "Marketing/Analytics",
        "Cloud Storage",
        "Delivery/Transport/Logistics",
        "Smart Home/Facilities",
      ],
    },
  };

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

  const [selectedEntity, setSelectedEntity] = useState([]);

  const handleEntity = (entity) => {
    setSelectedEntity(entity);
  };

  const handleLinks = (url) => {
    handleLoading();
    router.push(`/${url}`);
  };

  const APILifecyclePlatformsDescription =
    "Essential tools to manage the API lifecycle: from design to testing, and including access and identity, security, analytics, and developer portals. Also includes consulting companies that assist API providers define API strategies and build APIs, and the infrastructure needed to enable event-driven architectures including IoT platforms.";
  const BackendBuildingToolsDescription =
    "Serverless, cloud, mobile-based and blockchain backend infrastructure and cloud-based API infrastructures. Also includes headless CMS and backend infrastructure built specifically for the banking/finance/insurance industry.";
  const BusinessprocessesasanAPIAPIasaProductDescription =
    "API products specifically available to be used as service components that enable business processes and functionalities to be composed into IT architectures. Includes the use of data as a service, payments, communication platforms, identity verification, and so on.";
  const integrationPlatformDescription =
    "API aggregators and automation/orchestration services that help create workflows and standardised integrations to facilitate use of APIs in internal IT architectures. Platforms that provide a single point of integration for APIs that have different value propositions.";
  const verticalApiDescription =
    "Platforms that take a value proposition from one use case, such as cloud storage, and abstracts all available APIs into one API.";

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
                {Object.entries(cluster)?.map(
                  ([clusterName, categories], index) => {
                    return (
                      <div id="cluster" className="col-md-12 mb-1" key={index}>
                        <div className="home-main-container ">
                          <div className="bg-dark-company-color">
                            <span
                              className="text-white"
                              // data-tip={APILifecyclePlatformsDescription}
                              data-for="category-tooltip"
                            >
                              {clusterName}
                              {/* ({value.length}) */}
                            </span>
                          </div>
                          <div id="category-container" class="category-container ">

                          {Object.entries(categories).map(
                            ([key, subcategoriesGroup], index) => {
                              return (
                                <div className="px-2 py-3 ">
                                  <center className="mb-3">{key}</center>

                                  <div id="category" className="landscape-container" key={index}>
                                  {subcategoriesGroup?.map((subcat, index) => {
                                    // console.log("subcat,", subcat);
                                    const filteredCtegory = data.values.filter(
                                      (company, index) =>
                                        company?.subcategory?.includes(subcat)
                                    );
                                    filteredCtegory.sort((a, b) =>
                                      a.name.localeCompare(b.name)
                                    );
                                    return (
                                      <div
                                        id="subcategory"
                                        class=""
                                        key={index}
                                      >
                                        <div class="landscape-category-container">
                                          <div
                                            key={index}
                                            class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform"
                                          >
                                            {data <= 0 && <Loader />}

                                            <HomepageSubcategory
                                              subcategoryName={subcat}
                                              handleCompany={handleEntity}
                                              filteredCategory={filteredCtegory}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  })}
                                  </div>
                                </div>
                              )
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

          <section className="intro-text py-3">
            <div className="container hero  d-flex justify-content-center  align-items-center">
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
                  onClick={() => handleLinks("zoom")}
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
              <div class="input-group my-3">
                <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="button-addon2" value={company.inputSearch} onChange={(e)=>setCompany({...company,searchInput:e.target.value})}/>
                <button class="btn btn-dark-gray text-white" type="button" id="button-addon2" onClick={()=>handleSearch(company.searchInput)}>search</button>
              </div>
               {searchResult && <div className="text-center"><span className="text-center sm-text text-white">Company not found</span></div>}
              </div>
              <div className="col-md-4"></div>              
            </div> */}
              </div>

              <div className="mt-5">
                <h3>
                  <span class="badge bg-light text-black shadow d-none d-md-block  mt-5">
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
          {Object.entries(cluster)?.map(([clusterName, categories], index) => {
            return (
              // <div className={``}>
                <section className="mobile-landscape d-xs-block d-md-none">
                      <div className="container">
                        <div className="row">
                        <center>{clusterName}</center>

                          <div className="col-md-12 bg-white px-0">
                {Object.entries(categories).map(
                  ([key, subcategoriesGroup], index) => (
                    <>
                            <h3
                              className="sm-text text-center mobile-bg-dark-company-color text-white py-2"
                              // data-tip={APILifecyclePlatformsDescription}
                              data-for="category-tooltip"
                            >
                              {key}
                              {/* ({APILifecyclePlatform.length}) */}
                            </h3>
                            {subcategoriesGroup?.map((subcat, index) => {
                          console.log("subcat,", subcat)
                          const filteredCategory = data.values.filter(
                            (company, index) =>
                            
                              company?.subcategory?.includes(subcat)
                          );
                          filteredCategory.sort((a, b) =>
                            a.name.localeCompare(b.name)
                          );
                          return (

                            <div className="subcat" key={index}>
                            <HomepageSubcategory
                              subcategoryName={subcat}
                              handleCompany={handleEntity}
                              filteredCategory={
                                filteredCategory
                              }
                            />
                          </div>
                        )})}
                        </>
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
  const res = await fetch(
    `https://apidaysserver-svmwd.ondigitalocean.app/` || `http://localhost:5000`
  );

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
