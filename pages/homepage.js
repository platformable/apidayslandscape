import React, { useContext, useEffect, useState, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";

import { CompanyContext } from "../context/CompanyContext";
import { useRouter } from "next/router";

import HomepageSubcategory from "../components/HomepageSubcategory";

export default function Homepage({ data }) {
  const [company, setCompany] = useContext(CompanyContext);
  const [businessANDMessaginAPis, setBusinessANDMessaginApis] = useState([]);
  const [businessANDKYC, setBusinessANDKYC] = useState([]);

  const router = useRouter();



  const handleCompany = (company) => {
    setCompany(company);
    router.push(`/company/${company.name}`);
  };

  const categories = [
    "API Lifecycle Platform",
    "API Standards and Protocols",
    "Backend Building Tools",
    "Business processes as an API/API-as a Product",
    "Integration Platform as a Service",
    "Vertical API Abstraction",
  ];

  const subcategories = [
    "Access Level and Identity Management",
    "API Analytics/Monitoring",
    "API Design/Documentation Platforms",
    "API Developer Portals",
    "API Documentation",
    "API Security",
    "API Management/API Gateway",
    "API Oriented IT Consulting Firms",
    "API Testing",
    "IoT Platforms/Networks/Devices",
    "Streaming & Event Architecture",
    "AsyncAPI",
    "FIDO",
    "GraphQL",
    "gRPC",
    "Open API Specs",
    "OpenID",
    "PSD2 API Abstractions",
    "STET Berlin Group",
    "Blockchain APIs",
    "Infrastructure/Cloud/Serverless APIs",
    "MBaas",
    "Data Management APIs",
    "Data-as-a-service",
    "E-commerce APIs",
    "E-mail APIs",
    "Fax/Mail/Voice",
    "Headless E-commerce APIs",
    "Human as a service APIs",
    "Human Resources APIs",
    "IoT APIs",
    "KYC APIs",
    "Messaging APIs/Cpass",
    "Online Forms",
    "Open Banking APIs",
    "Payment APIs",
    "Search Engine APIs",
    "Video",
    "Accounting APIs",
    "AI APIs",
    "API Aggregators",
    "API Deployment/Back-end Building",
    "Data (B2B, B2C)",
    "Automation/Orchestration APIs",
    "Bank-as-a-service",
    "Database-as-a-service",
    "Insurance-as-a-service",
    "IPaaS",
    "Horizontal API Abstractions",
    "Cloud Storage API",
    "Delivery APIs",
    "Headless CMS API",
    "Healthcare",
    "LastPass",
    "Login APIs",
    "Marketing/Analytics",
    "Smart Home",
    "API protocols",
    "API standards"
  ];


  const APILifecyclePlatform = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "API Lifecycle Platform"
  );

   const  APILifecyclePlatformANDAccessLevelandIdentityManagement =  data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "API Lifecycle Platform" &&
      company.subcategory==="Access and Identity Management" 
  );
  
console.log("APILifecyclePlatformANDAccessLevelandIdentityManagement",APILifecyclePlatformANDAccessLevelandIdentityManagement.lenght)
  const APILifecyclePlatformANDAPIAnalyticsMonitoring = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "API Lifecycle Platform" &&
      company.subcategory==="API Analytics/Monitoring"
  );

  const APILifecyclePlatformANDAPIDesignDocumentationPlatforms = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "API Lifecycle Platform" &&
      company.subcategory==="API Design/Documentation Platforms" 
  );

  const APILifecyclePlatformANDAPIDeveloperPortals = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "API Lifecycle Platform" &&
      company.subcategory==="API Developer Portals"
  );

  const APILifecyclePlatformANDAPIDocumentation = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "API Lifecycle Platform" &&
      company.subcategory==="API Documentation" 
  );

  const APILifecyclePlatformANDApiSecurity = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "API Lifecycle Platform" &&
      company.subcategory==="API Security"
  );
  const APILifecyclePlatformANDAPIManagementAPIGateway = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Lifecycle Platform" &&
      company.subcategory === "API Management/API Gateway"
  );

  const APILifecyclePlatformANDAPIOrientedITConsultingFirms = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "API Lifecycle Platform" &&
      company.subcategory==="API Oriented IT Consulting Firms" 
  );

  const APILifecyclePlatformANDAPITesting = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "API Lifecycle Platform" &&
      company.subcategory==="API Testing"
  );

  const APILifecyclePlatformANDIoTPlatformsNetworksDevicesAPIs = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "API Lifecycle Platform" &&
      company.subcategory==="IoT Platforms/Networks/Devices"
  );

  const APILifecyclePlatformANDStreamingAPIs = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "API Lifecycle Platform" &&
      company.subcategory==="Streaming & Event Architecture"
  );
  

  /* API Standards and Protocols */

  const ApiStandardsandProtocols = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "API Standards and Protocols"
  );

  const ApiStandardsandProtocolsANDAsyncAPI = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "API Standards and Protocols" &&
      company.subcategory==="API protocols"
  );

  const ApiStandardsandProtocolsANDFIDO = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "API Standards and Protocols" &&
      company.subcategory==="API standards"
  );

  const ApiStandardsandProtocolsANDGraphQL = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "API Standards and Protocols" &&
      company.subcategory==="GraphQL"
  );

  const ApiStandardsandProtocolsANDGRPC = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "API Standards and Protocols" &&
      company.subcategory==="gRPC"
  );

  const ApiStandardsandProtocolsANDOpenApiSpecs = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "API Standards and Protocols" &&
      company.subcategory==="Open API Specs" 
  );

  const ApiStandardsandProtocolsANDOpenID = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "API Standards and Protocols" &&
      company.subcategory==="OpenID"
  );

  const ApiStandardsandProtocolsANDPSD2APIAbstractions = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "API Standards and Protocols" &&
      company.subcategory==="PSD2 API Abstractions"
  );

  const ApiStandardsandProtocolsANDSTETBerlinGroup = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "API Standards and Protocols" &&
      company.subcategory==="STET Berlin Group"
  );


  /* Backend Building Tools/MBaaS */

  const BackendBuildingTools = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "Backend Building Tools"
  );

const BackendBuildingToolsMBaaSANDAPIDeploymentBackendBuilding = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "Backend Building Tools" &&
      company.subcategory==="API Deployment/Back-end Building"
  );
  const BackendBuildingToolsMBaaSANDBankingFinanceInsuranceBackends = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "Backend Building Tools" &&
      company.subcategory==="Banking, Finance, Insurance Backends"
  );
  
  const BackendBuildingToolsANDBlockchain = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "Backend Building Tools" &&
      company.subcategory==="Blockchain"
  );

  const BackendBuildingToolsANDHeadlessCMS = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "Backend Building Tools" &&
      company.subcategory==="Headless CMS"
  );

  const BackendBuildingToolsANDInfrastructureCloudServerlessAPIs = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "Backend Building Tools" &&
      company.subcategory==="Infrastructure/Cloud/Serverless APIs"
  );

  const BackendBuildingToolsANDMobileBackendasaService = data.values.filter(
    (company, index) =>
      company.parentCategorySlug===
        "Backend Building Tools" &&
      company.subcategory==="Mobile Backend as a Service"
  );


/*   Business processes as an API/API-as a Product */
  
const BusinessprocessesasanAPIAPIasaProduct = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Business processes as an API/API-as a Product"
);

const BusinessprocessesasanAPIAPIasaProductANDAccounting = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Business processes as an API/API-as a Product" &&
    company.subcategory==="Accounting"
);


const BusinessprocessesasanAPIAPIasaProductANDAIML = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Business processes as an API/API-as a Product" &&
    company.subcategory==="AI & ML"
);

const BusinessprocessesasanAPIAPIasaProductANDAudioAndVideo = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Business processes as an API/API-as a Product" &&
    company.subcategory==="Audio & Video"
);

const BusinessprocessesasanAPIAPIasaProductANDLegalRegulatory = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Business processes as an API/API-as a Product" &&
    company.subcategory==="Legal & Regulatory"
);

const BusinessprocessesasanAPIAPIasaProductANDTimeCalendar = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Business processes as an API/API-as a Product" &&
    company.subcategory==="Time & Calendar"
);
const BusinessprocessesasanAPIAPIasaProductANDDatagovernanceDatamanagement = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Business processes as an API/API-as a Product" &&
    company.subcategory==="Data governance & Data management"
);

const BusinessprocessesasanAPIAPIasaProductANDEcommerce = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Business processes as an API/API-as a Product" &&
    company.subcategory==="E-commerce"
);


const BusinessprocessesasanAPIAPIasaProductANDData = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Business processes as an API/API-as a Product" &&
    company.subcategory==="Data"
);

const BusinessprocessesasanAPIAPIasaProductANDEmailMessaging = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Business processes as an API/API-as a Product" &&
    company.subcategory==="Email, Messaging, Communications Platforms as a Service"
);

const BusinessprocessesasanAPIAPIasaProductANDIdentityverificationKYC = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Business processes as an API/API-as a Product" &&
    company.subcategory==="Identity verification & KYC"
);


const BusinessprocessesasanAPIAPIasaProductANDOnlineForms = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Business processes as an API/API-as a Product" &&
    company.subcategory==="Forms" 
);

const BusinessprocessesasanAPIAPIasaProductANDHumanresources = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Business processes as an API/API-as a Product" &&
    company.subcategory==="Human Resources"
);
const BusinessprocessesasanAPIAPIasaProductANDHumanasaservice = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Business processes as an API/API-as a Product" &&
    company.subcategory==="Human-as-a-service"
);

const BusinessprocessesasanAPIAPIasaProductANDPayments = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Business processes as an API/API-as a Product" &&
    company.subcategory==="Payments"
);

const BusinessprocessesasanAPIAPIasaProductANDVideo = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Business processes as an API/API-as a Product" &&
    company.subcategory==="Video"
);

const BusinessprocessesasanAPIAPIasaProductANDSearch = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Business processes as an API/API-as a Product" &&
    company.subcategory==="Search"
);


const test = data.values.filter((company,index)=>{
  return company.parentCategorySlug==="Business processes as an API/API-as a Product" && company.subcategory==="Headless E-commerce APIs"
})


/*   Business processes as an API/API-as a Products */
  
const BusinessprocessesasanAPIAPIasaProducts= data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Business processes as an API/API-as a Products"
);


const BusinessprocessesasanAPIAPIasaProductsANDAccountingAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Business processes as an API/API-as a Products" &&
    company.subcategory==="Accounting APIs"
);


const BusinessprocessesasanAPIAPIasaProductsANDAIAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Business processes as an API/API-as a Products" &&
    company.subcategory==="AI APIs" 
);

const BusinessprocessesasanAPIAPIasaProductsANDAPIAggregators = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Business processes as an API/API-as a Products" &&
    company.subcategory==="API Aggregators" 
);

const BusinessprocessesasanAPIAPIasaProductsANDAPIDeployment = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Business processes as an API/API-as a Products" &&
    company.subcategory==="API Deployment/Back-end Building" 
);

const BusinessprocessesasanAPIAPIasaProductsANDDataB2 = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Business processes as an API/API-as a Products" &&
    company.subcategory==="Data (B2B, B2C)"
);




/* Integration Platform as a service */
const IntegrationPlatformAsAService = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Integration Platform as a Service"
);

const IntegrationPlatformAsAServiceANDAPIAggregators= data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Integration Platform as a Service" &&
    company.subcategory==="API Aggregators (General)" 
);

const IntegrationPlatformAsAServiceANDAutomationOrchestration = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Integration Platform as a Service" &&
    company.subcategory==="Automation/Orchestration" 
);

const IntegrationPlatformAsAServiceANDDatabaseasaservice = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Integration Platform as a Service" &&
    company.subcategory==="Database-as-a-service"
);

const IntegrationPlatformAsAServiceANDAPIAggregatorsFinance = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Integration Platform as a Service" &&
    company.subcategory==="API Aggregators (Finance)" 
);
/* const IntegrationPlatformAsAServiceANDIpass = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Integration Platform as a Service" &&
    company.subcategory==="IPaaS" 
); */

/* const IntegrationPlatformAsAServiceANDHorizontalAPIAbstractions = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Integration Platform as a Service" &&
    company.subcategory==="Horizontal API Abstractions"
);
 */
/* Vertical API Abstractions */

const VerticalAPIAbstractions = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Vertical API Abstractions"
);

const VerticalAPIAbstractionsANDCloudStorage = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Vertical API Abstractions" &&
    company.subcategory==="Cloud Storage" 
);

const VerticalAPIAbstractionsANDDeliveryAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Vertical API Abstractions" &&
    company.subcategory==="Delivery, Transport and Logistics" 
);

const VerticalAPIAbstractionsANDLogin = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Vertical API Abstractions" &&
    company.subcategory==="login" 
);
const VerticalAPIAbstractionsANDHealthcare = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Vertical API Abstractions" &&
    company.subcategory==="Healthcare" 
);
const VerticalAPIAbstractionsANDFinance = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Vertical API Abstractions" &&
    company.subcategory==="Finance" 
);

const VerticalAPIAbstractionsANDLoginAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Vertical API Abstractions" &&
    company.subcategory==="Login APIs" 
);

const VerticalAPIAbstractionsANDMarketingAnalytics = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Vertical API Abstractions" &&
    company.subcategory==="Marketing/Analytics"
);

const VerticalAPIAbstractionsANDSmartHome = data.values.filter(
  (company, index) =>
    company.parentCategorySlug===
      "Vertical API Abstractions" &&
    company.subcategory==="Smart Home and Smart Facilities" 
);


  const isInitialMount = useRef(true);

/*   useEffect(() => {
    if (isInitialMount.current) {
      getBusinessANDMessaginApis(data);
      getBusinessANDKYC(data);
      isInitialMount.current = false;
    } else {
    }
  }, []); */
console.log(APILifecyclePlatformANDAccessLevelandIdentityManagement.length)
  return (
    <Layout>
      <div className="">
        <Head>
          <title>apidays landscape</title>
          <meta name="description" content="Generated by create next app" />
        </Head>

        <main>
         {/*  <section className="hero heroBg">
            <HomeHero />
          </section> */}

          <section className="intro-text py-3">
          <div className="container hero  d-flex justify-content-center  align-items-center">
          {/* <Link className="navbar-brand" href="/"><img src="../homepage/logo_temporary_apilandscape.png" alt="apidays" className="home-logo align-self-start" /></Link> */}
            <div className="text-center flex-grow-1">
            <h4 className="text-white text-center py-2 ">A comprehensive view of all stakeholders creating the programmable economy</h4>
            </div>
            <div className=""><h3><span class="badge bg-light text-black shadow ">{data.values.length}</span> </h3></div>
          </div>
          </section>
          
          <section className="home-landscape heroBg">
       
            <div className="container">
              <div className="row">
                <div className="col-md-12 mb-1">
                 

                <div class="apilandscape-container ">
    
                  <div class="apilandscape-container-left apilifecycleplatformBg landscape-border-box">
                    <h3 class="landscape-category-title">API Platform Protocols (129)</h3>
                  </div> {/* <!--container left--> */}
                  
                  <div class="apilandscape-container-right">
                    
                    <div class="apilandscape-subcategory-box landscape-border-box">
                      <h3 class="landscape-subcategory-title apilifecycleplatformBg">Access and <br /> Identity <br /> Management {`(${APILifecyclePlatformANDAccessLevelandIdentityManagement.length})`}</h3>
                      <div className="centered-subcategory">
                      <HomepageSubcategory 
                          subcategoryName=""
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAccessLevelandIdentityManagement}
                          />
                      </div>
                    </div> {/* <!--subcategory-box --> */}
                      <div class="apilandscape-subcategory-box landscape-border-box">
                      <h3 class="landscape-subcategory-title apilifecycleplatformBg">API <br /> Analytics/Monitoring {`(${APILifecyclePlatformANDAPIAnalyticsMonitoring.length})`}</h3>
                      <div className="centered-subcategory">
                      <HomepageSubcategory 
                          subcategoryName=""
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAPIAnalyticsMonitoring}
                          />
                      </div>

                    </div>{/*  <!--subcategory-box --> */}
                      <div class="apilandscape-subcategory-box landscape-border-box">
                      <h3 class="landscape-subcategory-title apilifecycleplatformBg">API Design/Documentation <br /> Platforms {`(${APILifecyclePlatformANDAPIDesignDocumentationPlatforms.length})`}</h3>
                      <div className="centered-subcategory">
                      <HomepageSubcategory 
                          subcategoryName=""
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAPIDesignDocumentationPlatforms}
                          />
                      </div>
                    </div> {/* <!--subcategory-box --> */}
                    
                      <div class="apilandscape-subcategory-box landscape-border-box">
                      <h3 class="landscape-subcategory-title apilifecycleplatformBg"> API Developer <br /> Portals  {`(${APILifecyclePlatformANDAPIDeveloperPortals.length})`}</h3>
                      <div className="centered-subcategory">
                      <HomepageSubcategory 
                          subcategoryName=""
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAPIDeveloperPortals}
                          />
                      </div>
                    </div> {/* <!--subcategory-box --> */}


                    <div class="apilandscape-subcategory-box landscape-border-box">
                      <h3 class="landscape-subcategory-title apilifecycleplatformBg"> API <br /> Security  {`(${APILifecyclePlatformANDApiSecurity.length})`}</h3>
                      <div className="centered-subcategory">
                      <HomepageSubcategory 
                          subcategoryName=""
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDApiSecurity}
                          />
                      </div>
                    </div> {/* <!--subcategory-box --> */}
                    <div class="apilandscape-subcategory-box landscape-border-box">
                      <h3 class="landscape-subcategory-title apilifecycleplatformBg"> API <br /> Management/APIGateway  {`(${APILifecyclePlatformANDAPIManagementAPIGateway.length})`}</h3>
                      <div className="centered-subcategory">
                      <HomepageSubcategory 
                          subcategoryName=""
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAPIManagementAPIGateway}
                          />
                      </div>
                    </div> {/* <!--subcategory-box --> */}
                    
                  </div> {/* <!--container right--> */}
                </div>{/*  <!--apilandscape-container--> */}



                </div> {/* col-md-12 */}


                


                  {/* BORRAR */}


                
                

                
         


                


                
                      





                     


               

              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {

  const res = await fetch(`https://apidaysserver-svmwd.ondigitalocean.app/` || `http://localhost:5000`);
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
