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
import Modal from '../components/Modal'
import TopBarProgress from "react-topbar-progress-indicator";

export default function Homepage({ data }) {
  const [company, setCompany] = useContext(CompanyContext);
  const [businessANDMessaginAPis, setBusinessANDMessaginApis] = useState([]);
  const [businessANDKYC, setBusinessANDKYC] = useState([]);

  const router = useRouter();

  const [loading,setLoading]=useState(false)

  const handleLoading = ()=>{
    setLoading(!loading)
  }

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

  TopBarProgress.config({
    barColors: {
      "0": "#fdb43e",
      "1.0": "#fdb43e"
    },
    shadowBlur: 5
  });
/*   const prueba = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug.includes(
        "API Lifecycle Platform")
  ); */

  const handleForm = ()=>{
    console.log("handle Form")
    if(typeof window !== "undefined"){
      window.open(
        "https://airtable.com/shr07pWSbRnQfnZZd",
        '_blank' 
      );
    }
    
  }

  const APILifecyclePlatform = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform")
  );

   const  APILifecyclePlatformANDAccessLevelandIdentityManagement =  data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory?.includes("Access and Identity Management") 
  );
  

  const APILifecyclePlatformANDAPIAnalyticsMonitoring = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory?.includes("API Analytics/Monitoring")
  );

  const APILifecyclePlatformANDAPIDesignDocumentationPlatforms = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory?.includes("API Design/Documentation Platforms") 
  );

  const APILifecyclePlatformANDAPIDeveloperPortals = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory?.includes("API Developer Portals")
  );

  const APILifecyclePlatformANDAPIDocumentation = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory?.includes("API Documentation") 
  );

  const APILifecyclePlatformANDApiSecurity = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory?.includes("API Security")
  );
  const APILifecyclePlatformANDAPIManagementAPIGateway = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory?.includes("API Management/API Gateway")
  );

  const APILifecyclePlatformANDAPIOrientedITConsultingFirms = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory.includes("API Oriented IT Consulting Firms") 
  );

  const APILifecyclePlatformANDAPITesting = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory?.includes("API Testing")
  );

  const APILifecyclePlatformANDIoTPlatformsNetworksDevicesAPIs = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory?.includes("IoT Platforms/Networks/Devices")
  );

  const APILifecyclePlatformANDStreamingAPIs = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory?.includes("Streaming & Event Architecture")
  );
  

  /* API Standards and Protocols */

  const ApiStandardsandProtocols = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Standards and Protocols")
  );

  const ApiStandardsandProtocolsANDAsyncAPI = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Standards and Protocols") &&
      company?.subcategory?.includes("API protocols")
  );

  const ApiStandardsandProtocolsANDFIDO = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Standards and Protocols") &&
      company?.subcategory?.includes("API standards")
  );

  const ApiStandardsandProtocolsANDGraphQL = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Standards and Protocols") &&
      company?.subcategory?.includes("GraphQL")
  );

  const ApiStandardsandProtocolsANDGRPC = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Standards and Protocols") &&
      company?.subcategory?.includes("gRPC")
  );

  const ApiStandardsandProtocolsANDOpenApiSpecs = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Standards and Protocols") &&
      company?.subcategory?.includes("Open API Specs") 
  );

  const ApiStandardsandProtocolsANDOpenID = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Standards and Protocols") &&
      company?.subcategory?.includes("OpenID")
  );

  const ApiStandardsandProtocolsANDPSD2APIAbstractions = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Standards and Protocols") &&
      company?.subcategory?.includes("PSD2 API Abstractions")
  );

  const ApiStandardsandProtocolsANDSTETBerlinGroup = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Standards and Protocols") &&
      company?.subcategory?.includes("STET Berlin Group")
  );


  /* Backend Building Tools/MBaaS */

  const BackendBuildingTools = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Backend Building Tools")
  );

const BackendBuildingToolsMBaaSANDAPIDeploymentBackendBuilding = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Backend Building Tools") &&
      company?.subcategory?.includes("API Deployment/Back-end Building")
  );
  const BackendBuildingToolsMBaaSANDBankingFinanceInsuranceBackends = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Backend Building Tools") &&
      company?.subcategory?.includes("Banking/Finance/Insurance Backends")
  );
  
  const BackendBuildingToolsANDBlockchain = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Backend Building Tools") &&
      company?.subcategory?.includes("Blockchain")
  );

  const BackendBuildingToolsANDHeadlessCMS = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Backend Building Tools") &&
      company?.subcategory?.includes("Headless CMS")
  );

  const BackendBuildingToolsANDInfrastructureCloudServerlessAPIs = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Backend Building Tools") &&
      company?.subcategory?.includes("Infrastructure/Cloud/Serverless APIs")
  );

  const BackendBuildingToolsANDMobileBackendasaService = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Backend Building Tools") &&
      company?.subcategory?.includes("Mobile Backend as a Service")
  );


/*   Business processes as an API/API-as a Product */
  
const BusinessprocessesasanAPIAPIasaProduct = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product")
);

const BusinessprocessesasanAPIAPIasaProductANDAccounting = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Accounting")
);


const BusinessprocessesasanAPIAPIasaProductANDAIML = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("AI & ML")
);

const BusinessprocessesasanAPIAPIasaProductANDAudioAndVideo = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Audio & Video")
);

const BusinessprocessesasanAPIAPIasaProductANDLegalRegulatory = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Legal & Regulatory")
);

const BusinessprocessesasanAPIAPIasaProductANDTimeCalendar = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Time & Calendar")
);
const BusinessprocessesasanAPIAPIasaProductANDDatagovernanceDatamanagement = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Data governance & Data management")
);

const BusinessprocessesasanAPIAPIasaProductANDEcommerce = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("E-commerce")
);


const BusinessprocessesasanAPIAPIasaProductANDData = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Data")
);

const BusinessprocessesasanAPIAPIasaProductANDEmailMessaging = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Email/Messaging/Communications Platforms as a Service")
);

const BusinessprocessesasanAPIAPIasaProductANDIdentityverificationKYC = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Identity verification & KYC")
);


const BusinessprocessesasanAPIAPIasaProductANDOnlineForms = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Forms") 
);

const BusinessprocessesasanAPIAPIasaProductANDHumanresources = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Human Resources")
);
const BusinessprocessesasanAPIAPIasaProductANDHumanasaservice = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Human-as-a-service")
);

const BusinessprocessesasanAPIAPIasaProductANDPayments = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Payments")
);

const BusinessprocessesasanAPIAPIasaProductANDVideo = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Video")
);

const BusinessprocessesasanAPIAPIasaProductANDSearch = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Search")
);


/* const test = data.values.filter((company,index)=>{
  return company?.parentCategorySlug?==="Business processes as an API/API-as a Product" && company?.subcategory?.includes("Headless E-commerce APIs")
}) */


/*   Business processes as an API/API-as a Products */
  
const BusinessprocessesasanAPIAPIasaProducts= data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Products")
);


const BusinessprocessesasanAPIAPIasaProductsANDAccountingAPIs = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Products") &&
    company?.subcategory?.includes("Accounting APIs")
);


const BusinessprocessesasanAPIAPIasaProductsANDAIAPIs = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Products") &&
    company?.subcategory?.includes("AI APIs") 
);

const BusinessprocessesasanAPIAPIasaProductsANDAPIAggregators = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Products") &&
    company?.subcategory?.includes("API Aggregators") 
);

const BusinessprocessesasanAPIAPIasaProductsANDAPIDeployment = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Products") &&
    company?.subcategory?.includes("API Deployment/Back-end Building") 
);

const BusinessprocessesasanAPIAPIasaProductsANDDataB2 = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Products") &&
    company?.subcategory?.includes("Data (B2B, B2C)")
);




/* Integration Platform as a service */
const IntegrationPlatformAsAService = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Integration Platform as a Service")
);

const IntegrationPlatformAsAServiceANDAPIAggregators= data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Integration Platform as a Service") &&
    company?.subcategory?.includes("API Aggregators (General)") 
);

const IntegrationPlatformAsAServiceANDAutomationOrchestration = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Integration Platform as a Service") &&
    company?.subcategory?.includes("Automation/Orchestration") 
);

const IntegrationPlatformAsAServiceANDDatabaseasaservice = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Integration Platform as a Service") &&
    company?.subcategory?.includes("Database-as-a-service")
);

const IntegrationPlatformAsAServiceANDAPIAggregatorsFinance = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Integration Platform as a Service") &&
    company?.subcategory?.includes("API Aggregators (Finance)") 
);
/* const IntegrationPlatformAsAServiceANDIpass = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?===
      "Integration Platform as a Service" &&
    company?.subcategory?.includes("IPaaS" 
); */

/* const IntegrationPlatformAsAServiceANDHorizontalAPIAbstractions = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?===
      "Integration Platform as a Service" &&
    company?.subcategory?.includes("Horizontal API Abstractions"
);
 */
/* Vertical API Abstractions */

const VerticalAPIAbstractions = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Vertical API Abstractions")
);

const VerticalAPIAbstractionsANDCloudStorage = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Vertical API Abstractions") &&
    company?.subcategory?.includes("Cloud Storage")
);

const VerticalAPIAbstractionsANDDeliveryAPIs = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Vertical API Abstractions") &&
    company?.subcategory?.includes("Delivery/Transport/Logistics") 
);

const VerticalAPIAbstractionsANDLogin = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Vertical API Abstractions") &&
    company?.subcategory?.includes("login") 
);
const VerticalAPIAbstractionsANDHealthcare = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Vertical API Abstractions") &&
    company?.subcategory?.includes("Healthcare") 
);
const VerticalAPIAbstractionsANDFinance = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Vertical API Abstractions") &&
    company?.subcategory?.includes("Finance") 
);

const VerticalAPIAbstractionsANDLoginAPIs = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Vertical API Abstractions") &&
    company?.subcategory?.includes("Login APIs") 
);

const VerticalAPIAbstractionsANDMarketingAnalytics = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Vertical API Abstractions") &&
    company?.subcategory?.includes("Marketing/Analytics")
);

const VerticalAPIAbstractionsANDSmartHome = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Vertical API Abstractions") &&
    company?.subcategory?.includes("Smart Home and Smart Facilities") 
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

  const [selectedEntity,setSelectedEntity]=useState([])

  const handleEntity = (entity)=>{
    setSelectedEntity(entity)
  }

 

  return (
    <Layout>
      {loading && <TopBarProgress />}
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
            <h4 className="text-white text-center py-2 text-white">A comprehensive view of all stakeholders creating the programmable economy</h4>
            <button className="btn bg-dark-orange me-1 text-white" onClick={()=>handleForm()}>Add your API Tool</button>
            <a className="btn btn-download" href="../apilandscape_map.png"  download="apilandscape">Download the map</a>


            </div>
            <div className=""><h3><span class="badge bg-light text-black shadow ">{data.values.length}</span> </h3></div>
          </div>
          </section>

    
          
          <section className="home-landscape heroBg">
          <ReactTooltip backgroundColor="#04a5b6" textColor="#fff" />
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 mb-1">
                  <div className="home-main-container ">
                    <div className="apilifecycleplatform">
                      <span className="text-white">API Lifecycle <br/>Platform ({APILifecyclePlatform.length})</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box b1">
                            {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Access and Identity Management"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDAccessLevelandIdentityManagement}
                          handleLoading={handleLoading}
                          />
            
                          </div>
                        
                     

                          <div class="landscape-subcategory-box"> 
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Oriented IT Consulting Firms"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDAPIOrientedITConsultingFirms}
                          />
                          </div>

                         

                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Management/APIGateway"
                          handleCompany={handleEntity}
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
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDAPIDeveloperPortals}
                          />
                          </div>
                    
                          <div class="landscape-subcategory-box">
                          
                          <HomepageSubcategory 
                          subcategoryName="API Security"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDApiSecurity}
                          />
                         
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Management/APIGateway"
                          handleCompany={handleEntity}
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
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDAPIAnalyticsMonitoring}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Design/Documentation Platforms"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDAPIDesignDocumentationPlatforms}
                          />
                          </div>
                        <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Developer Portals"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDAPIDeveloperPortals}
                          />
                          </div>
                        <div class="landscape-subcategory-box">
                          
                          <HomepageSubcategory 
                          subcategoryName="API Security"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDApiSecurity}
                          />
                         
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Testing"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDAPITesting}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="IoT Platforms/Networks/Devices"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDIoTPlatformsNetworksDevicesAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Streaming & Event Architecture"
                          handleCompany={handleEntity}
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
                    <div class="BackendBuildingToolsANDMBaas">
                      <span className="text-white">Backend Building <br /> Tools ({BackendBuildingTools.length})</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                         
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Headless CMS"
                          handleCompany={handleEntity}
                          filteredCategory={ BackendBuildingToolsANDHeadlessCMS}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Infrastructure/Cloud/Serverless APIs"
                          handleCompany={handleEntity}
                          filteredCategory={BackendBuildingToolsANDInfrastructureCloudServerlessAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Mobile Backend as a Service"
                          handleCompany={handleEntity}
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
                          handleCompany={handleEntity}
                          filteredCategory={ BackendBuildingToolsMBaaSANDAPIDeploymentBackendBuilding}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Banking, Finance, Insurance Backends"
                          handleCompany={handleEntity}
                          filteredCategory={BackendBuildingToolsMBaaSANDBankingFinanceInsuranceBackends}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Blockchain"
                          handleCompany={handleEntity}
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
                        <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Data"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDData}
                          />
                          </div>
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Data governance & Data management"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDDatagovernanceDatamanagement}
                          />
                          </div>

                          
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Payments"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDPayments}
                          />
                          </div>
                         
                       
                        </div>
                      </div>

                      <div className="landscape-container">
                        <div className="landscape-category-container">
                        <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Email, Messaging, Communications Platforms as a Service"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDEmailMessaging}
                          />
                          </div>
                        </div>
                      </div>


                      <div class="landscape-container">
                        <div class="landscape-category-container">
                        
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Accounting"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDAccounting}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="AI & ML"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDAIML}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="E-commerce"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDEcommerce}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Identity verification & KYC"
                          handleCompany={handleEntity}
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
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDAudioAndVideo}
                          />
                          </div>
                      
                     
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Forms"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDOnlineForms}
                          />
                          </div>

                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Human-as-a-service"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDHumanasaservice}
                          />
                          </div>

                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Human Resources"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDHumanresources}
                          />
                          </div>

                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Legal & Regulatory"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDLegalRegulatory}
                          />
                          </div>
                        
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Search"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDSearch}
                          />
                          </div>
                        
                         
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Time & Calendar"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDTimeCalendar}
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
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDHumanasaservice}
                          />
                          </div>
                        
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Search"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDSearch}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Data"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDData}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Human Resources"
                          handleCompany={handleEntity}
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
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductsANDAccountingAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="AI APIs"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductsANDAIAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Aggregators"
                          handleCompany={handleEntity}
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
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductsANDAPIDeployment}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Data (B2B, B2C)"
                          handleCompany={handleEntity}
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
                        <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Aggregators (Finance)"
                          handleCompany={handleEntity}
                          filteredCategory={IntegrationPlatformAsAServiceANDAPIAggregatorsFinance}
                          />
                          </div>
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Aggregators (General)"
                          handleCompany={handleEntity}
                          filteredCategory={IntegrationPlatformAsAServiceANDAPIAggregators}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Automation/Orchestration"
                          handleCompany={handleEntity}
                          filteredCategory={IntegrationPlatformAsAServiceANDAutomationOrchestration}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Database-as-a-service"
                          handleCompany={handleEntity}
                          filteredCategory={IntegrationPlatformAsAServiceANDDatabaseasaservice}
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
                          handleCompany={handleEntity}
                          filteredCategory={IntegrationPlatformAsAServiceANDAPIAggregatorsFinance}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="IPaaS"
                          handleCompany={handleEntity}
                          filteredCategory={IntegrationPlatformAsAServiceANDAPIAggregatorsFinance}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Horizontal API Abstractions"
                          handleCompany={handleEntity}
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
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDCloudStorage}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Delivery, Transport and Logistics"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDDeliveryAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box b1">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Finance"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDFinance}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Healthcare"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDHealthcare}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Login"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDLogin}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Marketing/Analytics"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDMarketingAnalytics}
                          />
                          </div>
                          <div class="landscape-subcategory-box ">
                            {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Smart Home and Smart Facilities"
                          handleCompany={handleEntity}
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
                          handleCompany={handleEntity}
                          filteredCategory={ ApiStandardsandProtocolsANDAsyncAPI}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API standards"
                          handleCompany={handleEntity}
                          filteredCategory={ApiStandardsandProtocolsANDFIDO}
                          />
                          </div>
                          {/* <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="GraphQL"
                          handleCompany={handleEntity}
                          filteredCategory={ApiStandardsandProtocolsANDGraphQL}
                          />
                          </div> */}
                          {/* <div class="landscape-subcategory-box ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="gRPC"
                          handleCompany={handleEntity}
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
                          handleCompany={handleEntity}
                          filteredCategory={ApiStandardsandProtocolsANDOpenApiSpecs}
                          />
                          
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="OpenID"
                          handleCompany={handleEntity}
                          filteredCategory={ApiStandardsandProtocolsANDOpenID}
                          />
                          </div>
                          <div class="landscape-subcategory-box">

                          <HomepageSubcategory 
                          subcategoryName="PSD2 API Abstractions"
                          handleCompany={handleEntity}
                          filteredCategory={ApiStandardsandProtocolsANDPSD2APIAbstractions}
                          />
                          </div>
                          <div class="landscape-subcategory-box">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="STET Berlin Group"
                          handleCompany={handleEntity}
                          filteredCategory={ApiStandardsandProtocolsANDSTETBerlinGroup}
                          />
                          
                          </div>
                        </div>
                        
                      </div> */}
                    </div>
                  </div>
                </div> {/* col-md-12 */}

              </div>
            </div>
          </section>
        </main>
      </div>
      <Modal  selectedEntity={selectedEntity} handleLoading={handleLoading}/>
    

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
