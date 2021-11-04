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
    "API standards and Protocols",
    "Backend Building Tools/MBaaS",
    "Business processes as an API/API-as a Product",
    "Business processes as an API/API-as a Products",
    "Integration Platform as a Service",
    "Vertical API Abstraction",
  ];

  const subcategories = [
    "Access Level and Identity Management",
    "API Analytics/Monitoring",
    "API Design/Documentation Platforms",
    "API Developer Portals",
    "API Documentation",
    "API Industry Specifications",
    "API Management/API Gateway",
    "API Oriented IT Consulting Firms",
    "API Testing",
    "IoT Platforms/Networks/Devices APIs",
    "Streaming APIs",
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
  ];


  const APILifecyclePlatform = data.values.filter(
    (company, index) =>
      company.parentCategorySlug.includes(
        "API Lifecycle Platform")
  );

   const  APILifecyclePlatformANDAccessLevelandIdentityManagement =  data.values.filter(
    (company, index) =>
      company.parentCategorySlug.includes(
        "API Lifecycle Platform") &&
      company.subcategory.includes("Access Level and Identity Management") 
  );
  

  const APILifecyclePlatformANDAPIAnalyticsMonitoring = data.values.filter(
    (company, index) =>
      company.parentCategorySlug.includes(
        "API Lifecycle Platform") &&
      company.subcategory.includes("API Analytics/Monitoring")
  );

  const APILifecyclePlatformANDAPIDesignDocumentationPlatforms = data.values.filter(
    (company, index) =>
      company.parentCategorySlug.includes(
        "API Lifecycle Platform") &&
      company.subcategory.includes("AAPI Design/Documentation Platforms") 
  );

  const APILifecyclePlatformANDAPIDeveloperPortals = data.values.filter(
    (company, index) =>
      company.parentCategorySlug.includes(
        "API Lifecycle Platform") &&
      company.subcategory.includes("API Developer Portals") 
  );

  const APILifecyclePlatformANDAPIDocumentation = data.values.filter(
    (company, index) =>
      company.parentCategorySlug.includes(
        "API Lifecycle Platform") &&
      company.subcategory.includes("API Documentation") 
  );

  const APILifecyclePlatformANDAPIIndustrySpecifications = data.values.filter(
    (company, index) =>
      company.parentCategorySlug.includes(
        "API Lifecycle Platform") &&
      company.subcategory.includes("API Industry Specifications")
  );
  const APILifecyclePlatformANDAPIManagementAPIGateway = data.values.filter(
    (company, index) =>
      company.parentCategorySlug ===
        "API Lifecycle Platform" &&
      company.subcategory === "API Management/API Gateway"
  );

  const APILifecyclePlatformANDAPIOrientedITConsultingFirms = data.values.filter(
    (company, index) =>
      company.parentCategorySlug.includes(
        "API Lifecycle Platform") &&
      company.subcategory.includes("API Oriented IT Consulting Firms") 
  );

  const APILifecyclePlatformANDAPITesting = data.values.filter(
    (company, index) =>
      company.parentCategorySlug.includes(
        "API Lifecycle Platform") &&
      company.subcategory.includes("API Testing")
  );

  const APILifecyclePlatformANDIoTPlatformsNetworksDevicesAPIs = data.values.filter(
    (company, index) =>
      company.parentCategorySlug.includes(
        "API Lifecycle Platform") &&
      company.subcategory.includes("IoT Platforms/Networks/Devices APIs")
  );

  const APILifecyclePlatformANDStreamingAPIs = data.values.filter(
    (company, index) =>
      company.parentCategorySlug.includes(
        "API Lifecycle Platform") &&
      company.subcategory.includes("Streaming APIs")
  );
  

  /* API Standards and Protocols */

  const ApiStandardsandProtocols = data.values.filter(
    (company, index) =>
      company.parentCategorySlug.includes(
        "API Standards and Protocols")
  );

  const ApiStandardsandProtocolsANDAsyncAPI = data.values.filter(
    (company, index) =>
      company.parentCategorySlug.includes(
        "API Standards and Protocols") &&
      company.subcategory.includes("AsyncAPI")
  );

  const ApiStandardsandProtocolsANDFIDO = data.values.filter(
    (company, index) =>
      company.parentCategorySlug.includes(
        "API Standards and Protocols") &&
      company.subcategory.includes("FIDO")
  );

  const ApiStandardsandProtocolsANDGraphQL = data.values.filter(
    (company, index) =>
      company.parentCategorySlug.includes(
        "API Standards and Protocols") &&
      company.subcategory.includes("GraphQL")
  );

  const ApiStandardsandProtocolsANDGRPC = data.values.filter(
    (company, index) =>
      company.parentCategorySlug.includes(
        "API Standards and Protocols") &&
      company.subcategory.includes("gRPC") 
  );

  const ApiStandardsandProtocolsANDOpenApiSpecs = data.values.filter(
    (company, index) =>
      company.parentCategorySlug.includes(
        "API Standards and Protocols") &&
      company.subcategory.includes("Open API Specs") 
  );

  const ApiStandardsandProtocolsANDOpenID = data.values.filter(
    (company, index) =>
      company.parentCategorySlug.includes(
        "API Standards and Protocols") &&
      company.subcategory.includes("OpenID")
  );

  const ApiStandardsandProtocolsANDPSD2APIAbstractions = data.values.filter(
    (company, index) =>
      company.parentCategorySlug.includes(
        "API Standards and Protocols") &&
      company.subcategory.includes("PSD2 API Abstractions")
  );

  const ApiStandardsandProtocolsANDSTETBerlinGroup = data.values.filter(
    (company, index) =>
      company.parentCategorySlug.includes(
        "API Standards and Protocols") &&
      company.subcategory.includes("STET Berlin Group")
  );


  /* Backend Building Tools/MBaaS */

  const BackendBuildingToolsMBaaS = data.values.filter(
    (company, index) =>
      company.parentCategorySlug.includes(
        "Backend Building Tools/MBaaS")
  );

const BackendBuildingToolsMBaaSANDBlockchainAPIs = data.values.filter(
    (company, index) =>
      company.parentCategorySlug.includes(
        "Backend Building Tools/MBaaS") &&
      company.subcategory.includes("Blockchain APIs")
  );
  const BackendBuildingToolsMBaaSANDInfrastructureCloudServerlessAPIs = data.values.filter(
    (company, index) =>
      company.parentCategorySlug.includes(
        "Backend Building Tools/MBaaS") &&
      company.subcategory.includes("Infrastructure/Cloud/Serverless APIs")
  );
  
  const BackendBuildingToolsANDMBaas = data.values.filter(
    (company, index) =>
      company.parentCategorySlug.includes(
        "Backend Building Tools/MBaaS") &&
      company.subcategory.includes("MBaaS")
  );

/*   Business processes as an API/API-as a Product */
  
const BusinessprocessesasanAPIAPIasaProduct = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Business processes as an API/API-as a Product")
);

const BusinessprocessesasanAPIAPIasaProductANDDataManagementAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Business processes as an API/API-as a Product") &&
    company.subcategory.includes("Data Management APIs")
);


const BusinessprocessesasanAPIAPIasaProductANDDataasaservice = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Business processes as an API/API-as a Product") &&
    company.subcategory.includes("Data-as-a-service") 
);

const BusinessprocessesasanAPIAPIasaProductANDEcommerceAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Business processes as an API/API-as a Product") &&
    company.subcategory.includes("E-commerce APIs")
);

const BusinessprocessesasanAPIAPIasaProductANDEmailAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Business processes as an API/API-as a Product") &&
    company.subcategory.includes("E-mail APIs")
);

const BusinessprocessesasanAPIAPIasaProductANDFaxMailVoice = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Business processes as an API/API-as a Product") &&
    company.subcategory.includes("Fax/Mail/Voice")
);
const BusinessprocessesasanAPIAPIasaProductANDHumanasaserviceAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Business processes as an API/API-as a Product") &&
    company.subcategory.includes("Human as a service APIs")
);

const BusinessprocessesasanAPIAPIasaProductANDHumanResourcesAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Business processes as an API/API-as a Product") &&
    company.subcategory.includes("Human Resources APIs")
);


const BusinessprocessesasanAPIAPIasaProductANDIotAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Business processes as an API/API-as a Product") &&
    company.subcategory.includes("IoT APIs")
);

const BusinessprocessesasanAPIAPIasaProductANDKYCAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Business processes as an API/API-as a Product") &&
    company.subcategory.includes("KYC APIs")
);

const BusinessprocessesasanAPIAPIasaProductANDMessagingAPIsCpass = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Business processes as an API/API-as a Product") &&
    company.subcategory.includes("Messaging APIs/Cpass") 
);


const BusinessprocessesasanAPIAPIasaProductANDOnlineForms = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Business processes as an API/API-as a Product") &&
    company.subcategory.includes("Online Forms") 
);

const BusinessprocessesasanAPIAPIasaProductANDOpenBankingApis = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Business processes as an API/API-as a Product") &&
    company.subcategory.includes("OpenBankingApis")
);
const BusinessprocessesasanAPIAPIasaProductANDPaymentApis = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Business processes as an API/API-as a Product") &&
    company.subcategory.includes("Payment APIs")
);

const BusinessprocessesasanAPIAPIasaProductANDSearchEngineApis = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Business processes as an API/API-as a Product") &&
    company.subcategory.includes("Search Engine Apis")
);

const BusinessprocessesasanAPIAPIasaProductANDVideo = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Business processes as an API/API-as a Product") &&
    company.subcategory.includes("Video")
);

const BusinessprocessesasanAPIAPIasaProductANDHeadlessEcommerce2 = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Business processes as an API/API-as a Product") &&
    company.subcategory.includes("Headless E-commerce APIs")
);


const BusinessprocessesasanAPIAPIasaProductANDHeadlessEcommerce = data.values.filter((company,index)=>{
  return company.parentCategorySlug.includes("Business processes as an API/API-as a Product") && company.subcategory.includes("Headless E-commerce APIs")
})


/*   Business processes as an API/API-as a Products */
  
const BusinessprocessesasanAPIAPIasaProducts= data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Business processes as an API/API-as a Products")
);


const BusinessprocessesasanAPIAPIasaProductsANDAccountingAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Business processes as an API/API-as a Products") &&
    company.subcategory.includes("Accounting APIs") 
);


const BusinessprocessesasanAPIAPIasaProductsANDAIAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Business processes as an API/API-as a Products") &&
    company.subcategory.includes("AI APIs") 
);

const BusinessprocessesasanAPIAPIasaProductsANDAPIAggregators = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Business processes as an API/API-as a Products") &&
    company.subcategory.includes("API Aggregators") 
);

const BusinessprocessesasanAPIAPIasaProductsANDAPIDeployment = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Business processes as an API/API-as a Products") &&
    company.subcategory.includes("API Deployment/Back-end Building") 
);

const BusinessprocessesasanAPIAPIasaProductsANDDataB2 = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Business processes as an API/API-as a Products") &&
    company.subcategory.includes("Data (B2B, B2C)") 
);




/* Integration Platform as a service */
const IntegrationPlatformAsAService = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Integration Platform as a Service")
);

const IntegrationPlatformAsAServiceANDAutomationOrchestrationAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Integration Platform as a Service") &&
    company.subcategory.includes("Automation/Orchestration APIs") 
);

const IntegrationPlatformAsAServiceANDBankasaservice = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Integration Platform as a Service") &&
    company.subcategory.includes("Bank-as-a-service") 
);

const IntegrationPlatformAsAServiceANDDatabaseasaservice = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Integration Platform as a Service") &&
    company.subcategory.includes("Database-as-a-service") 
);

const IntegrationPlatformAsAServiceANDInsuranceasaservice = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Integration Platform as a Service") &&
    company.subcategory.includes("Insurance-as-a-service") 
);
const IntegrationPlatformAsAServiceANDIpass = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Integration Platform as a Service") &&
    company.subcategory.includes("IPaaS") 
);

const IntegrationPlatformAsAServiceANDHorizontalAPIAbstractions = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Integration Platform as a Service") &&
    company.subcategory.includes("Horizontal API Abstractions")
);

/* Vertical API Abstractions */

const VerticalAPIAbstractions = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Vertical API Abstractions")
);

const VerticalAPIAbstractionsANDCloudStorageAPI = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Vertical API Abstractions") &&
    company.subcategory.includes("Cloud Storage API") 
);

const VerticalAPIAbstractionsANDDeliveryAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Vertical API Abstractions") &&
    company.subcategory.includes("Delivery APIs") 
);

const VerticalAPIAbstractionsANDHeadlessCMSAPI = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Vertical API Abstractions") &&
    company.subcategory.includes("Headless CMS API") 
);
const VerticalAPIAbstractionsANDHealthcare = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Vertical API Abstractions") &&
    company.subcategory.includes("Healthcare") 
);
const VerticalAPIAbstractionsANDLastPass = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Vertical API Abstractions") &&
    company.subcategory.includes("LastPass") 
);

const VerticalAPIAbstractionsANDLoginAPIs = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Vertical API Abstractions") &&
    company.subcategory.includes("Login APIs") 
);

const VerticalAPIAbstractionsANDMarketingAnalytics = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Vertical API Abstractions") &&
    company.subcategory.includes("Marketing/Analytics") 
);

const VerticalAPIAbstractionsANDSmartHome = data.values.filter(
  (company, index) =>
    company.parentCategorySlug.includes(
      "Vertical API Abstractions") &&
    company.subcategory.includes("Smart Home") 
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
          <div className="container hero d-flex justify-content-between  align-items-center">
          {/* <Link className="navbar-brand" href="/"><img src="../homepage/logo_temporary_apilandscape.png" alt="apidays" className="home-logo align-self-start" /></Link> */}
            <h4 className="text-white  py-2 m-0">A comprehensive view of all stakeholders creating the programmable economy</h4>
            <span class="badge bg-light text-black shadow">{data.values.length}</span> 
          </div>
          </section>
          
          <section className="home-landscape heroBg">
          <ReactTooltip backgroundColor="#04a5b6" textColor="#fff" />
            <div className="container">
              <div className="row">
                <div className="col-md-12 mb-1">
                  <div class="home-main-container ">
                    <div class="apilifecycleplatform">
                      <span className="text-white">API Lifecycle <br/>Platform ({APILifecyclePlatform.length})</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                            {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Access Level and Identity Management"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAccessLevelandIdentityManagement}
                          />
            
                          </div>
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
                          subcategoryName="AAPI Design/Documentation Platforms"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAPIDesignDocumentationPlatforms}
                          />
                          </div>
                        </div>
                      </div>
                      <div class="landscape-container">
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
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Documentation"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAPIDocumentation}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          
                          <HomepageSubcategory 
                          subcategoryName="API Industry Specifications"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAPIIndustrySpecifications}
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

                      <div class="landscape-container">
                        <div class="landscape-category-container">
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
                          subcategoryName="API Testing"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDAPITesting}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="IoT Platforms/Networks/Devices APIs"
                          handleCompany={handleCompany}
                          filteredCategory={APILifecyclePlatformANDIoTPlatformsNetworksDevicesAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Streaming APIs"
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
                      <span className="text-white">API Standards <br/>  and Protocols({ApiStandardsandProtocols.length})</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="AsyncAPI"
                          handleCompany={handleCompany}
                          filteredCategory={ ApiStandardsandProtocolsANDAsyncAPI}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="FIDO"
                          handleCompany={handleCompany}
                          filteredCategory={ApiStandardsandProtocolsANDFIDO}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="GraphQL"
                          handleCompany={handleCompany}
                          filteredCategory={ApiStandardsandProtocolsANDGraphQL}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="gRPC"
                          handleCompany={handleCompany}
                          filteredCategory={ApiStandardsandProtocolsANDGRPC}
                          />
                          </div>
                        </div>
                      </div>
                      <div class="landscape-container">
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
                        
                      </div>
                    </div>
                  </div>
                </div> {/* col-md-12 */}





                <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="BackendBuildingToolsANDMBaas">
                      <span className="text-white">Backend Building <br /> Tools/MBaaS ({BackendBuildingToolsMBaaS.length})</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Blockchain APIs"
                          handleCompany={handleCompany}
                          filteredCategory={ BackendBuildingToolsMBaaSANDBlockchainAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Infrastructure/Cloud/Serverless APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BackendBuildingToolsMBaaSANDInfrastructureCloudServerlessAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="MBaas"
                          handleCompany={handleCompany}
                          filteredCategory={BackendBuildingToolsANDMBaas}
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
                      <span className="text-white">Business processes as an <br /> API/API-as a Product ({BusinessprocessesasanAPIAPIasaProduct.length})</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Data Management APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDDataManagementAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Data-as-a-service"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDDataasaservice}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="E-mail APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDEmailAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Fax/Mail/Voice"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDFaxMailVoice}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Human as a service APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDHumanasaserviceAPIs}
                          />
                          </div>
                        </div>
                      </div>

                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Human Resources APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDHumanResourcesAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="IoT APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDIotAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="KYC APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDKYCAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Messaging APIs/Cpass"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDMessagingAPIsCpass}
                          />
                          </div>
                        </div>
                      </div>


                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Online Forms"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDOnlineForms}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Open Banking APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDOpenBankingApis}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Payment APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDPaymentApis}
                          />
                          </div>
                        </div>
                      </div> {/* landscape container */}

                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Search Engine APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDSearchEngineApis}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Video"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDVideo}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Headless E-commerce APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDHeadlessEcommerce}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="E-commerce APIs"
                          handleCompany={handleCompany}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDEcommerceAPIs}
                          />
                          </div>
                          
                        </div>
                      </div> {/* landscape container */}
                     
                    </div>
                  </div>
                </div> {/* col-md-12 */}
         


                <div className="col-md-12 my-1">
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
                </div> {/* col-md-12 */}


                <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="IntegrationPlatformAsAService">
                      <span className="text-white">Integration Platform as a Service ({IntegrationPlatformAsAService.length})</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Automation/Orchestration APIs"
                          handleCompany={handleCompany}
                          filteredCategory={IntegrationPlatformAsAServiceANDAutomationOrchestrationAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Bank-as-a-service"
                          handleCompany={handleCompany}
                          filteredCategory={IntegrationPlatformAsAServiceANDBankasaservice}
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
                        </div>
                      </div>
                      





                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Insurance-as-a-service"
                          handleCompany={handleCompany}
                          filteredCategory={IntegrationPlatformAsAServiceANDInsuranceasaservice}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="IPaaS"
                          handleCompany={handleCompany}
                          filteredCategory={IntegrationPlatformAsAServiceANDIpass}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Horizontal API Abstractions"
                          handleCompany={handleCompany}
                          filteredCategory={IntegrationPlatformAsAServiceANDHorizontalAPIAbstractions}
                          />
                          </div>
                         
                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div> {/* col-md-12 */}


                <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="VerticalAPIAbstractions">
                      <span className="text-white">Vertical API Abstractions ({VerticalAPIAbstractions.length})</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Cloud Storage API"
                          handleCompany={handleCompany}
                          filteredCategory={VerticalAPIAbstractionsANDCloudStorageAPI}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Delivery APIs"
                          handleCompany={handleCompany}
                          filteredCategory={VerticalAPIAbstractionsANDDeliveryAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Headless CMS API"
                          handleCompany={handleCompany}
                          filteredCategory={VerticalAPIAbstractionsANDHeadlessCMSAPI}
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
                        </div>
                      </div>
 
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="LastPass"
                          handleCompany={handleCompany}
                          filteredCategory={VerticalAPIAbstractionsANDLastPass}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Login APIs"
                          handleCompany={handleCompany}
                          filteredCategory={VerticalAPIAbstractionsANDLoginAPIs}
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
                          subcategoryName="Smart Home"
                          handleCompany={handleCompany}
                          filteredCategory={VerticalAPIAbstractionsANDSmartHome}
                          />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> {/* col-md-12 */}

              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {

  const res = await fetch(`https://apidaysserver-svmwd.ondigitalocean.app` || `http://localhost:5000`);
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
