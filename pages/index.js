import React, { useContext,  useState, useRef } from "react";
import { newModel } from "../context/data";
import Layout from "../components/Layout";
import { CompanyContext } from "../context/CompanyContext";
import { useRouter } from "next/router";
import ReactTooltip from "react-tooltip";
import HomepageSubcategory from "../components/HomepageSubcategory";
import Modal from "../components/Modal";
import Methodology from "../components/Methodology";
import TopBarProgress from "react-topbar-progress-indicator";
import Meta from "../components/Meta";
import Hero from "../components/Hero";
import SubcategoryContainer from "../components/SubcategoryContainer";
import CategoryContainer from "../components/CategoryContainer";
import ClusterContainer from "../components/ClusterContainer";
import Toolbar from "../components/Toolbar";

export default function Homepage({ data }) {
  // console.log("data", data)
  const [company, setCompany] = useContext(CompanyContext);
  const [selectedEntity, setSelectedEntity] = useState([]);
  const [loading, setLoading] = useState(false);
  const [withZoom, setWithZoom] = useState(false);


  const router = useRouter();
  

  // const handleCompany = (company) => {
  //   setCompany(company);
  //   router.push(`/company/${company.name}`);
  // };


  TopBarProgress.config({
    barColors: {
      0: "#fdb43e",
      "1.0": "#fdb43e",
    },
    shadowBlur: 5,
  });

 



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
       <Meta />
        <main>
          <Hero />
          <section className="home-landscape heroBg d-none d-md-block py-1">
          <Toolbar setLoading={setLoading} setWithZoom={setWithZoom} data={data}/>
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
                      <ClusterContainer clusterName={clusterName} values={values} index={index}>
                            {Object.entries(values?.categories).map(
                              ([categorieName, values], index) => {
                                
                                return (
                                  <CategoryContainer categorieName={categorieName} key={index}>
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
                                            

                                              <SubcategoryContainer
                                                subcategory={subcat}
                                                handleCompany={handleEntity}
                                                filteredSubcategory={
                                                  filteredSubcategory
                                                }
                                                withZoom={withZoom}
                                                index={index}
                                              />
                                              
                                          );
                                        }
                                      )}
                                    </CategoryContainer>
                                );
                              }
                            )}
                          </ClusterContainer>
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
      <Modal selectedEntity={selectedEntity} setLoading={setLoading} />
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
