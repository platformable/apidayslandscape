import React, { useContext, useState, useRef } from "react";
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

  const handleCompany = (entity) => {
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
          <section className="bg-[#083ECB]">
            <div className="px-2 md:px-6 lg:px-10">
              <Toolbar
                setLoading={setLoading}
                setWithZoom={setWithZoom}
                data={data}
              />
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

              <div className="">
                <div className="row" id="cluster-container">
                  {Object.entries(newModel)?.map(
                    ([clusterName, values], index) => {
                      return (
                        <ClusterContainer
                          clusterName={clusterName}
                          values={values}
                          index={index}
                        >
                          {Object.entries(values?.categories).map(
                            ([categorieName, values], index) => {
                              return (
                                <CategoryContainer
                                  categorieName={categorieName}
                                  index={index}
                                  values={values}
                                >
                                  {values?.subcategories?.map(
                                    (subcat, index) => {
                                      // if (subcat.name === 'Red Hat') console.log("subcat,", subcat, categorieName);
                                      const filteredSubcategory =
                                        data.values.filter((company, index) =>
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
                                          handleCompany={handleCompany}
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
            </div>
          </section>

          {/* MOBILE ********************************************************/}

          {/* {Object.entries(newModel)?.map(([clusterName, values], index) => {
            return (
              // <div className={``}>
              <section
                className="mobile-landscape hidden"
                key={index}
              >
                <div className="container">
                  <div className="">
                    <center>{clusterName}</center>

                    <div className="bg-white px-0">
                      {Object.entries(values?.categories).map(
                        ([categorieName, values], index) => (
                          <div key={index}>
                            <h3
                              className="sm-text text-center mobile-bg-dark-company-color text-white py-2"
                              data-tip={values?.description}
                              data-for="category-tooltip"
                            >
                              {categorieName}

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
          })} */}

          {/* END MOBILE */}

          <Methodology />
        </main>
      </div>
      <Modal selectedEntity={selectedEntity} setLoading={setLoading} />
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
