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
          <ReactTooltip backgroundColor="#04a5b6" textColor="#fff" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 mb-1">
                  <div class="home-main-container ">
                    <div class="apilifecycleplatform">
                      <span className="">API Lifecycle <br/>Platform ({APILifecyclePlatform.length})</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                            {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Access and Identity Management"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAccessLevelandIdentityManagement}
                          />
            
                          </div>
                        
                     

                          <div class="landscape-subcategory-box"> 
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Oriented IT Consulting Firms"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAPIOrientedITConsultingFirms}
                          />
                          </div>

                         

                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Management/APIGateway"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAPIManagementAPIGateway}
                          />
                          </div>
                        </div>
                      </div>
                      {/* <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Developer Portals"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAPIDeveloperPortals}
                          />
                          </div>
                    
                          <div class="landscape-subcategory-box">
                          
                          <HomepageSubcategory 
                          subcategoryName="API Security"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDApiSecurity}
                          />
                         
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Management/APIGateway"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAPIManagementAPIGateway}
                          />
                          </div>
                        </div>
                      </div> */}

                      <div class="landscape-container">
                        <div class="landscape-category-container">
                        <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Analytics/Monitoring"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAPIAnalyticsMonitoring}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Design/Documentation Platforms"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAPIDesignDocumentationPlatforms}
                          />
                          </div>
                        <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Developer Portals"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAPIDeveloperPortals}
                          />
                          </div>
                        <div class="landscape-subcategory-box">
                          
                          <HomepageSubcategory 
                          subcategoryName="API Security"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDApiSecurity}
                          />
                         
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Testing"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAPITesting}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="IoT Platforms/Networks/Devices"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDIoTPlatformsNetworksDevicesAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Streaming & Event Architecture"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDStreamingAPIs}
                          />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> {/* col-md-12 */}


                <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="ApiStandardsandProtocols" >
                      <span className="">API Standards <br/>  and Protocols({ApiStandardsandProtocols.length})</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API protocols"
                          handleCompany={handleCompany}
                          filteredCategory={ ApiStandardsandProtocolsANDAsyncAPI}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API standards"
                          handleCompany={handleCompany}
                          filteredCategory={ApiStandardsandProtocolsANDFIDO}
                          />
                          </div>
                          {/* <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="GraphQL"
                          handleCompany={handleCompany}
                          filteredCategory={ApiStandardsandProtocolsANDGraphQL}
                          />
                          </div> */}
                          {/* <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="gRPC"
                          handleCompany={handleCompany}
                          filteredCategory={ApiStandardsandProtocolsANDGRPC}
                          />
                          </div> */}
                        </div>
                      </div>
                      {/* <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Open API Specs"
                          handleCompany={handleCompany}
                          filteredCategory={ApiStandardsandProtocolsANDOpenApiSpecs}
                          />
                          
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="OpenID"
                          handleCompany={handleCompany}
                          filteredCategory={ApiStandardsandProtocolsANDOpenID}
                          />
                          </div>
                          <div class="landscape-subcategory-box">

                          <HomepageSubcategory 
                          subcategoryName="PSD2 API Abstractions"
                          handleCompany={handleCompany}
                          filteredCategory={ApiStandardsandProtocolsANDPSD2APIAbstractions}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="STET Berlin Group"
                          handleCompany={handleCompany}
                          filteredCategory={ApiStandardsandProtocolsANDSTETBerlinGroup}
                          />
                          
                          </div>
                        </div>
                        
                      </div> */}
                    </div>
                  </div>
                </div> {/* col-md-12 */}





                <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="BackendBuildingToolsANDMBaas">
                      <span className="">Backend Building <br /> Tools ({BackendBuildingTools.length})</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                         
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Headless CMS"
                          handleCompany={handleCompany}
                          filteredCategory={ BackendBuildingToolsANDHeadlessCMS}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Infrastructure/Cloud/Serverless APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BackendBuildingToolsANDInfrastructureCloudServerlessAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Mobile Backend as a Service"
                          handleCompany={handleCompany}
                          filteredCategory={BackendBuildingToolsANDMobileBackendasaService}
                          />
                          </div>
                        </div>
                      </div>

                      <div class="landscape-container">
                        <div class="landscape-category-container">
                        <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Deployment/Back-end Building"
                          handleCompany={handleCompany}
                          filteredCategory={ BackendBuildingToolsMBaaSANDAPIDeploymentBackendBuilding}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Banking, Finance, Insurance Backends"
                          handleCompany={handleCompany}
                          filteredCategory={BackendBuildingToolsMBaaSANDBankingFinanceInsuranceBackends}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Blockchain"
                          handleCompany={handleCompany}
                          filteredCategory={BackendBuildingToolsANDBlockchain}
                          />
                          </div>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </div> {/* col-md-12 */}
                

                <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="BusinessprocessesasanAPIAPIasaProduct"> 
                      <span className="">Business processes as an <br /> API/API-as a Product ({BusinessprocessesasanAPIAPIasaProduct.length})</span>
                    </div>
                    <div class="category-container ">
                      

                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Data governance & Data management"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDDatagovernanceDatamanagement}
                          />
                          </div>

                          
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Payments"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDPayments}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Email, Messaging, Communications Platforms as a Service"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDEmailMessaging}
                          />
                          </div>
                        </div>
                      </div>



                      <div class="landscape-container">
                        <div class="landscape-category-container">
                        <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="E-commerce"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDEcommerce}
                          />
                          </div>
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Accounting"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDAccounting}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="AI & ML"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDAIML}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Identity verification & KYC"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDIdentityverificationKYC}
                          />
                          </div>
                         
                        </div>
                      </div>


                      <div class="landscape-container">
                        <div class="landscape-category-container">
                        <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Audio & Video"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDAudioAndVideo}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Legal & Regulatory"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDLegalRegulatory}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Time & Calendar"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDTimeCalendar}
                          />
                          </div>
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Forms"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDOnlineForms}
                          />
                          </div>

                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Human-as-a-service"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDHumanasaservice}
                          />
                          </div>
                        
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Search"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDSearch}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Data"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDData}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Human Resources"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDHumanresources}
                          />
                          </div>
                          
                         
                        </div>
                      </div> {/* landscape container */}

                     {/*  <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Human-as-a-service"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDHumanasaservice}
                          />
                          </div>
                        
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Search"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDSearch}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Data"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDData}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Human Resources"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDHumanresources}
                          />
                          </div>
              
                          
                        </div>
                      </div>  */}
                      {/* landscape container */}
                     
                    </div>
                  </div>
                </div> {/* col-md-12 */}
         


                {/* <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="BusinessprocessesasanAPIAPIasaProducts">
                      <span className="text-white">Business processes as an <br /> API/API-as a Products ({BusinessprocessesasanAPIAPIasaProducts.length})</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Accounting APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductsANDAccountingAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="AI APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductsANDAIAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Aggregators"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductsANDAPIAggregators}
                          />
                          </div>
                        </div>
                      </div>

                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Deployment/Back-end Building"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductsANDAPIDeployment}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Data (B2B, B2C)"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductsANDDataB2}
                          />
                          </div>
                         
                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  */}
                {/* col-md-12 */}


                <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="IntegrationPlatformAsAService">
                      <span className="">Integration Platform <br /> as a Service ({IntegrationPlatformAsAService.length})</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Aggregators (General)"
                          handleCompany={handleCompany}
                          filteredCategory={IntegrationPlatformAsAServiceANDAPIAggregators}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Automation/Orchestration"
                          handleCompany={handleCompany}
                          filteredCategory={IntegrationPlatformAsAServiceANDAutomationOrchestration}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Database-as-a-service"
                          handleCompany={handleCompany}
                          filteredCategory={IntegrationPlatformAsAServiceANDDatabaseasaservice}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Aggregators (Finance)"
                          handleCompany={handleCompany}
                          filteredCategory={IntegrationPlatformAsAServiceANDAPIAggregatorsFinance}
                          />
                          </div>
                        </div>
                      </div>
                      





                      {/* <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Insurance-as-a-service"
                          handleCompany={handleCompany}
                          filteredCategory={IntegrationPlatformAsAServiceANDAPIAggregatorsFinance}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="IPaaS"
                          handleCompany={handleCompany}
                          filteredCategory={IntegrationPlatformAsAServiceANDAPIAggregatorsFinance}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Horizontal API Abstractions"
                          handleCompany={handleCompany}
                          filteredCategory={IntegrationPlatformAsAServiceANDAPIAggregatorsFinance}
                          />
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div> {/* col-md-12 */}


                <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="VerticalAPIAbstractions">
                      <span className="">Vertical API Abstractions ({VerticalAPIAbstractions.length})</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Cloud Storage"
                          handleCompany={handleCompany}
                          filteredCategory={VerticalAPIAbstractionsANDCloudStorage}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Delivery, Transport and Logistics"
                          handleCompany={handleCompany}
                          filteredCategory={VerticalAPIAbstractionsANDDeliveryAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Login"
                          handleCompany={handleCompany}
                          filteredCategory={VerticalAPIAbstractionsANDLogin}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Healthcare"
                          handleCompany={handleCompany}
                          filteredCategory={VerticalAPIAbstractionsANDHealthcare}
                          />
                          </div>
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Finance"
                          handleCompany={handleCompany}
                          filteredCategory={VerticalAPIAbstractionsANDFinance}
                          />
                          </div>
                     
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Marketing/Analytics"
                          handleCompany={handleCompany}
                          filteredCategory={VerticalAPIAbstractionsANDMarketingAnalytics}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                            {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Smart Home and Smart Facilities"
                          handleCompany={handleCompany}
                          filteredCategory={VerticalAPIAbstractionsANDSmartHome}
                          />
                          </div>
                        </div>
                      </div>
 
                     {/*  <div class="landscape-container">
                        <div class="landscape-category-container">
                         
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div> 
                {/* col-md-12 */}

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
