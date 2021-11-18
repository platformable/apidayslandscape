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
import {
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";


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

  const lastUpdate = new Date


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
    "Marketing and Analytics",
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


  const handleForm = ()=>{

    if(typeof window !== "undefined"){
      window.open(
        "https://airtable.com/shr07pWSbRnQfnZZd",
        '_blank' 
      );
    }
    
  }

  const getMonth = date => {
    return lastUpdate.toLocaleString("default", {
      month: "long",
    })
  }
  const getDay = date => {
    return lastUpdate.toLocaleString("default", {
      day: "2-digit",
    })
  }

  const getYear = date => {
    return lastUpdate.toLocaleString("default", {
      year: "numeric",
    })
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

  APILifecyclePlatformANDAPIAnalyticsMonitoring.sort((a, b) => a.name > b.name && 1 || -1) 



  const APILifecyclePlatformANDAPIDesignDocumentationPlatforms = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory?.includes("API Design/Documentation Platforms") 
  );

  APILifecyclePlatformANDAPIDesignDocumentationPlatforms.sort((a, b) => a.name > b.name && 1 || -1) 

  const APILifecyclePlatformANDAPIDeveloperPortals = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory?.includes("API Developer Portals")
  );

  APILifecyclePlatformANDAPIDeveloperPortals.sort((a, b) => a.name > b.name && 1 || -1) 

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

  APILifecyclePlatformANDApiSecurity.sort((a, b) => a.name > b.name && 1 || -1) 

  const APILifecyclePlatformANDAPIManagementAPIGateway = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory?.includes("API Management/API Gateway")
  );

  APILifecyclePlatformANDAPIManagementAPIGateway.sort((a, b) => a.name > b.name && 1 || -1)



  const APILifecyclePlatformANDAPIOrientedITConsultingFirms = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory.includes("API Oriented IT Consulting Firms") 
  );

  APILifecyclePlatformANDAPIOrientedITConsultingFirms.sort((a, b) => a.name > b.name && 1 || -1)

  const APILifecyclePlatformANDAPITesting = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory?.includes("API Testing")
  );

  APILifecyclePlatformANDAPITesting.sort((a, b) => a.name > b.name && 1 || -1)

  const APILifecyclePlatformANDIoTPlatformsNetworksDevicesAPIs = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle Platform") &&
      company?.subcategory?.includes("IoT Platforms/Networks/Devices")
  );

  APILifecyclePlatformANDIoTPlatformsNetworksDevicesAPIs.sort((a, b) => a.name > b.name && 1 || -1)

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
  ).sort((a, b) => a.name > b.name && 1 || -1)

  const ApiStandardsandProtocolsANDAsyncAPI = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Standards and Protocols") &&
      company?.subcategory?.includes("API protocols")
  ).sort((a, b) => a.name > b.name && 1 || -1)

  const ApiStandardsandProtocolsANDFIDO = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Standards and Protocols") &&
      company?.subcategory?.includes("API standards")
  ).sort((a, b) => a.name > b.name && 1 || -1)

  const ApiStandardsandProtocolsANDGraphQL = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Standards and Protocols") &&
      company?.subcategory?.includes("GraphQL")
  ).sort((a, b) => a.name > b.name && 1 || -1)

  const ApiStandardsandProtocolsANDGRPC = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Standards and Protocols") &&
      company?.subcategory?.includes("gRPC")
  ).sort((a, b) => a.name > b.name && 1 || -1)

  const ApiStandardsandProtocolsANDOpenApiSpecs = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Standards and Protocols") &&
      company?.subcategory?.includes("Open API Specs") 
  ).sort((a, b) => a.name > b.name && 1 || -1)

  const ApiStandardsandProtocolsANDOpenID = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Standards and Protocols") &&
      company?.subcategory?.includes("OpenID")
  ).sort((a, b) => a.name > b.name && 1 || -1)

  const ApiStandardsandProtocolsANDPSD2APIAbstractions = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Standards and Protocols") &&
      company?.subcategory?.includes("PSD2 API Abstractions")
  ).sort((a, b) => a.name > b.name && 1 || -1)

  const ApiStandardsandProtocolsANDSTETBerlinGroup = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Standards and Protocols") &&
      company?.subcategory?.includes("STET Berlin Group")
  ).sort((a, b) => a.name > b.name && 1 || -1)


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
  ).sort((a, b) => a.name > b.name && 1 || -1)

  const BackendBuildingToolsMBaaSANDBankingFinanceInsuranceBackends = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Backend Building Tools") &&
      company?.subcategory?.includes("Banking/Finance/Insurance Backends")
  ).sort((a, b) => a.name > b.name && 1 || -1)
  
  const BackendBuildingToolsANDBlockchain = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Backend Building Tools") &&
      company?.subcategory?.includes("Blockchain")
  ).sort((a, b) => a.name > b.name && 1 || -1)

  const BackendBuildingToolsANDHeadlessCMS = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Backend Building Tools") &&
      company?.subcategory?.includes("Headless CMS")
  ).sort((a, b) => a.name > b.name && 1 || -1)

  const BackendBuildingToolsANDInfrastructureCloudServerlessAPIs = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Backend Building Tools") &&
      company?.subcategory?.includes("Infrastructure/Cloud/Serverless APIs")
  ).sort((a, b) => a.name > b.name && 1 || -1)

  const BackendBuildingToolsANDMobileBackendasaService = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "Backend Building Tools") &&
      company?.subcategory?.includes("Mobile Backend as a Service")
  ).sort((a, b) => a.name > b.name && 1 || -1)


/*   Business processes as an API/API-as a Product */
  
const BusinessprocessesasanAPIAPIasaProduct = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product")
).sort((a, b) => a.name > b.name && 1 || -1)

const BusinessprocessesasanAPIAPIasaProductANDAccounting = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Accounting")
).sort((a, b) => a.name > b.name && 1 || -1)


const BusinessprocessesasanAPIAPIasaProductANDAIML = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("AI & ML")
).sort((a, b) => a.name > b.name && 1 || -1)

const BusinessprocessesasanAPIAPIasaProductANDAudioAndVideo = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Audio & Video")
).sort((a, b) => a.name > b.name && 1 || -1)

const BusinessprocessesasanAPIAPIasaProductANDLegalRegulatory = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Legal & Regulatory")
).sort((a, b) => a.name > b.name && 1 || -1)

const BusinessprocessesasanAPIAPIasaProductANDTimeCalendar = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Time & Calendar")
).sort((a, b) => a.name > b.name && 1 || -1)
const BusinessprocessesasanAPIAPIasaProductANDDatagovernanceDatamanagement = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Data governance & Data management")
).sort((a, b) => a.name > b.name && 1 || -1)

const BusinessprocessesasanAPIAPIasaProductANDEcommerce = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("E-commerce")
).sort((a, b) => a.name > b.name && 1 || -1)


const BusinessprocessesasanAPIAPIasaProductANDData = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Data")
).sort((a, b) => a.name > b.name && 1 || -1)

const BusinessprocessesasanAPIAPIasaProductANDEmailMessaging = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Email/Messaging/Communications Platforms as a Service")
).sort((a, b) => a.name > b.name && 1 || -1)

const BusinessprocessesasanAPIAPIasaProductANDIdentityverificationKYC = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Identity verification & KYC")
).sort((a, b) => a.name > b.name && 1 || -1)


const BusinessprocessesasanAPIAPIasaProductANDOnlineForms = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Forms") 
).sort((a, b) => a.name > b.name && 1 || -1)

const BusinessprocessesasanAPIAPIasaProductANDHumanresources = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Human Resources")
).sort((a, b) => a.name > b.name && 1 || -1)

const BusinessprocessesasanAPIAPIasaProductANDHumanasaservice = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Human-as-a-service")
).sort((a, b) => a.name > b.name && 1 || -1)

const BusinessprocessesasanAPIAPIasaProductANDPayments = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Payments")
).sort((a, b) => a.name > b.name && 1 || -1)

const BusinessprocessesasanAPIAPIasaProductANDVideo = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Video")
).sort((a, b) => a.name > b.name && 1 || -1)

const BusinessprocessesasanAPIAPIasaProductANDSearch = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Product") &&
    company?.subcategory?.includes("Search")
).sort((a, b) => a.name > b.name && 1 || -1)


/*   Business processes as an API/API-as a Products */
  
const BusinessprocessesasanAPIAPIasaProducts= data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Products")
).sort((a, b) => a.name > b.name && 1 || -1)


const BusinessprocessesasanAPIAPIasaProductsANDAccountingAPIs = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Products") &&
    company?.subcategory?.includes("Accounting APIs")
).sort((a, b) => a.name > b.name && 1 || -1)


const BusinessprocessesasanAPIAPIasaProductsANDAIAPIs = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Products") &&
    company?.subcategory?.includes("AI APIs") 
).sort((a, b) => a.name > b.name && 1 || -1)

const BusinessprocessesasanAPIAPIasaProductsANDAPIAggregators = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Products") &&
    company?.subcategory?.includes("API Aggregators") 
).sort((a, b) => a.name > b.name && 1 || -1)

const BusinessprocessesasanAPIAPIasaProductsANDAPIDeployment = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Products") &&
    company?.subcategory?.includes("API Deployment/Back-end Building") 
).sort((a, b) => a.name > b.name && 1 || -1)

const BusinessprocessesasanAPIAPIasaProductsANDDataB2 = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Business processes as an API/API-as a Products") &&
    company?.subcategory?.includes("Data (B2B, B2C)")
).sort((a, b) => a.name > b.name && 1 || -1)




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
).sort((a, b) => a.name > b.name && 1 || -1)

const IntegrationPlatformAsAServiceANDAutomationOrchestration = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Integration Platform as a Service") &&
    company?.subcategory?.includes("Automation/Orchestration") 
).sort((a, b) => a.name > b.name && 1 || -1)

const IntegrationPlatformAsAServiceANDDatabaseasaservice = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Integration Platform as a Service") &&
    company?.subcategory?.includes("Database-as-a-service")
).sort((a, b) => a.name > b.name && 1 || -1)

const IntegrationPlatformAsAServiceANDAPIAggregatorsFinance = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Integration Platform as a Service") &&
    company?.subcategory?.includes("API Aggregators (Finance)") 
).sort((a, b) => a.name > b.name && 1 || -1)

/* Vertical API Abstractions */

const VerticalAPIAbstractions = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Vertical API Abstractions")
).sort((a, b) => a.name > b.name && 1 || -1)

const VerticalAPIAbstractionsANDCloudStorage = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Vertical API Abstractions") &&
    company?.subcategory?.includes("Cloud Storage")
).sort((a, b) => a.name > b.name && 1 || -1)

const VerticalAPIAbstractionsANDDeliveryAPIs = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Vertical API Abstractions") &&
    company?.subcategory?.includes("Delivery/Transport/Logistics") 
).sort((a, b) => a.name > b.name && 1 || -1)

const VerticalAPIAbstractionsANDLogin = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Vertical API Abstractions") &&
    company?.subcategory?.includes("login") 
).sort((a, b) => a.name > b.name && 1 || -1)

const VerticalAPIAbstractionsANDHealthcare = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Vertical API Abstractions") &&
    company?.subcategory?.includes("Healthcare") 
).sort((a, b) => a.name > b.name && 1 || -1)

const VerticalAPIAbstractionsANDFinance = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Vertical API Abstractions") &&
    company?.subcategory?.includes("Finance") 
).sort((a, b) => a.name > b.name && 1 || -1)

const VerticalAPIAbstractionsANDLoginAPIs = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Vertical API Abstractions") &&
    company?.subcategory?.includes("Login APIs") 
).sort((a, b) => a.name > b.name && 1 || -1)

const VerticalAPIAbstractionsANDMarketingAnalytics = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Vertical API Abstractions") &&
    company?.subcategory?.includes("Marketing and Analytics")
).sort((a, b) => a.name > b.name && 1 || -1)

const VerticalAPIAbstractionsANDSmartHome = data.values.filter(
  (company, index) =>
    company?.parentCategorySlug?.includes(
      "Vertical API Abstractions") &&
    company?.subcategory?.includes("Smart Home and Smart Facilities") 
).sort((a, b) => a.name > b.name && 1 || -1)


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

  const handleLinks = (url) => {
    handleLoading()
    router.push(`/${url}`);
  };




  const testCat = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consequuntur, velit, alias numquam necessitatibus earum accusamus voluptate sequi exercitationem mollitia minus? Saepe tenetur neque dolorum deleniti, error soluta dolorem molestias, laborum eaque distinctio hic voluptatibus deserunt corporis quaerat iste veritatis assumenda voluptatum magni alias nesciunt sed eum odio quam! Odit beatae aliquam itaque! Rem facilis repudiandae, laboriosam delectus officiis voluptatum nostrum necessitatibus accusantium corrupti expedita placeat sunt consequatur laudantium quae porro voluptatibus? Sequi aperiam ut quas incidunt quo dolore, eius illum praesentium nesciunt doloribus ex est, quasi aut fugit ducimus consequatur consequuntur nobis magni ratione eum iure. Atque optio vel, magnam sit ipsa exercitationem maiores quisquam, deleniti est nobis error veritatis non explicabo fuga culpa dolor aliquam praesentium architecto qui. Totam maiores illum doloremque optio itaque laboriosam nihil ipsum officia."

 

  return (
    <Layout>
      {loading && <TopBarProgress />}
      <div className="">
        <Head>
          <title>The API Landscape</title>
          <meta content="text/html; charset=UTF-8" name="Content-Type" />
          <meta name="description" content="The API Landscape" />
          <meta property="og:url" content="https://apilandscape.platformable.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:description" content="The API Landscape"/>
        <meta property="og:title" content="The API Landscape" />
        <meta property="og:image" content="../landscape_social_map.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@alexeigarban" />
        <meta name="twitter:title" content="Embed a Twitch Video into a React Website" />
        <meta name="twitter:description" content="How to embed a Twitch video into a React application or website using the ReactPlayer npm package." />
        <meta name="twitter:image" content="../landscape_social_map.png" />
       
        </Head>

        <main>
         {/*  <section className="hero heroBg">
            <HomeHero />
          </section> */}

          <section className="intro-text py-3">
          <div className="container hero  d-flex justify-content-center  align-items-center">
          {/* <Link className="navbar-brand" href="/"><img src="../homepage/logo_temporary_apilandscape.png" alt="apidays" className="home-logo align-self-start" /></Link> */}
            <div className="text-center flex-grow-1">
            <h1 className="text-white text-center py-2 text-white fw-bold">The API Landscape</h1>
            <p className="text-center sm-text text-white">Last Update: {`${getDay()} ${getMonth()} ${getYear()}`}</p>
            <h4 className="text-white text-center py-2 text-white">A comprehensive view of all stakeholders creating the programmable economy</h4>
            <button className="btn bg-dark-orange me-1  text-company-color" onClick={()=>handleForm()}>Add your API Tool</button>
            <button className="btn btn-download  m-0 text-company-color" onClick={()=>handleLinks("companies")}>Explore the companies</button>
            <a className="btn bg-dark-orange me-1 text-company-color" href="../landscape.png"  download="apilandscape">Download the map</a>
            <button className="btn btn-download me-1  text-company-color" onClick={()=>handleLinks("homepage")}>Zoom</button>
             
      
          
            </div>
            <div className="">
              <h3><span class="badge bg-light text-black shadow d-none d-md-block ">{data.values.length}</span> </h3>
              <h3 className="sm-text text-center text-white">Share</h3>
              <LinkedinShareButton url="https://apilandscape.platformable.com/"  title="The API Landscape" source="https://apilandscape.platformable.com/" summary="The API Landscape">
             <LinkedinIcon size={32} round={true}/> 
             </LinkedinShareButton>
             <TwitterShareButton title="The API Landscape" url="https://apilandscape.platformable.com" via="http://apidays.global" hashtags={["api","landscape"]}>
            <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <EmailShareButton url=""  title="The API Landscape" subject="The API Landscape from apidays" separator=" " body="Get to know more about the API Landscape, visit http://apilandscape.com">
              <EmailIcon size={32} round={true}/>
            </EmailShareButton>
              </div>
          </div>
          </section>

          {/* MOBILE */}

          <section className="mobile-landscape d-xs-block d-md-none">
            <div className="container">
              <div className="row">
                <div className="col-md-12 bg-white px-0">
                  <h3 className="sm-text text-center apilifecycleplatformBg text-white py-2">API Lifecycle Platform ({APILifecyclePlatform.length})</h3>
                  <div className="subcat">
                  <HomepageSubcategory 
                          subcategoryName="Access and Identity Management"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDAccessLevelandIdentityManagement}
                          handleLoading={handleLoading}
                          />
                  </div>
                  <div className="subcat border-top">
                  
                           <HomepageSubcategory 
                          subcategoryName="API Management/API Gateway"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDAPIManagementAPIGateway}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="API Oriented IT Consulting Firms"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDAPIOrientedITConsultingFirms}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="API Analytics/Monitoring"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDAPIAnalyticsMonitoring}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="API Design/Documentation Platforms"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDAPIDesignDocumentationPlatforms}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="API Developer Portals"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDAPIDeveloperPortals}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="API Security"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDApiSecurity}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="API Testing"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDAPITesting}
                          />
                  </div>
                  <div className="subcat">
                  <HomepageSubcategory 
                          subcategoryName="IoT Platforms/Networks/Devices"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDIoTPlatformsNetworksDevicesAPIs}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="Streaming & Event Architecture"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDStreamingAPIs}
                          />
                  </div>
                </div>
              </div>
            </div>
          </section> 
          {/* mobile section */}

          <section className="mobile-landscape mt-3 d-xs-block d-md-none">
            <div className="container">
              <div className="row">
                <div className="col-md-12 bg-white px-0">
                  <h3 className="sm-text text-center BackendBuildingToolsANDMBaasBg text-white py-2">Backend Building Tools ({BackendBuildingTools.length})</h3>
                  <div className="subcat">
                  <HomepageSubcategory 
                          subcategoryName="Headless CMS"
                          handleCompany={handleEntity}
                          filteredCategory={ BackendBuildingToolsANDHeadlessCMS}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="Infrastructure/Cloud/Serverless APIs"
                          handleCompany={handleEntity}
                          filteredCategory={BackendBuildingToolsANDInfrastructureCloudServerlessAPIs}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="Mobile Backend as a Service"
                          handleCompany={handleEntity}
                          filteredCategory={BackendBuildingToolsANDMobileBackendasaService}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="API Deployment/Back-end Building"
                          handleCompany={handleEntity}
                          filteredCategory={ BackendBuildingToolsMBaaSANDAPIDeploymentBackendBuilding}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="Banking/Finance/Insurance Backends"
                          handleCompany={handleEntity}
                          filteredCategory={BackendBuildingToolsMBaaSANDBankingFinanceInsuranceBackends}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="Blockchain"
                          handleCompany={handleEntity}
                          filteredCategory={BackendBuildingToolsANDBlockchain}
                          />
                  </div>
                </div>
              </div>
            </div>
          </section> 
          {/* mobile section */}

          <section className="mobile-landscape my-3 d-xs-block d-md-none">
            <div className="container">
              <div className="row">
                <div className="col-md-12 bg-white px-0">
                  <h3 className="sm-text text-center BusinessprocessesasanAPIAPIasaProductBg text-company-color py-2">Business processes as an <br /> API/API-as a Product ({BusinessprocessesasanAPIAPIasaProduct.length})</h3>
                  <div className="subcat">
                  <HomepageSubcategory 
                          subcategoryName="Data"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDData}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="Data governance & Data management"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDDatagovernanceDatamanagement}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="Payments"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDPayments}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="Email/Messaging/Communications Platforms as a Service"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDEmailMessaging}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="Accounting"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDAccounting}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="AI & ML"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDAIML}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="E-commerce"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDEcommerce}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="Identity verification & KYC"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDIdentityverificationKYC}
                          />
                  </div>
                  <div className="subcat">
                  <HomepageSubcategory 
                          subcategoryName="Audio & Video"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDAudioAndVideo}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="Forms"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDOnlineForms}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="Human-as-a-service"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDHumanasaservice}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="Legal & Regulatory"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDLegalRegulatory}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="Search"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDSearch}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="Time & Calendar"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDTimeCalendar}
                          />
                  </div>

                </div>
              </div>
            </div>
          </section> 
          {/* mobile section */}

          <section className="mobile-landscape mt-3 d-xs-block d-md-none">
            <div className="container">
              <div className="row">
                <div className="col-md-12 bg-white px-0">
                  <h3 className="sm-text text-center IntegrationPlatformAsAServiceBg text-white py-2">Integration Platform <br /> as a Service ({IntegrationPlatformAsAService.length}) </h3>
                  <div className="subcat">
                  <HomepageSubcategory 
                          subcategoryName="API Aggregators (Finance)"
                          handleCompany={handleEntity}
                          filteredCategory={IntegrationPlatformAsAServiceANDAPIAggregatorsFinance}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="API Aggregators (General)"
                          handleCompany={handleEntity}
                          filteredCategory={IntegrationPlatformAsAServiceANDAPIAggregators}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="Automation/Orchestration"
                          handleCompany={handleEntity}
                          filteredCategory={IntegrationPlatformAsAServiceANDAutomationOrchestration}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="Database-as-a-service"
                          handleCompany={handleEntity}
                          filteredCategory={IntegrationPlatformAsAServiceANDDatabaseasaservice}
                          />
                  </div>
                </div>
              </div>
            </div>
          </section> 
          {/* mobile section */}

          <section className="mobile-landscape mt-3 d-xs-block d-md-none">
            <div className="container">
              <div className="row">
                <div className="col-md-12 bg-white px-0">
                  <h3 className="sm-text text-center IntegrationPlatformAsAServiceBg text-white py-2">Vertical API Abstractions ({VerticalAPIAbstractions.length}) </h3>
                  <div className="subcat">
                  <HomepageSubcategory 
                          subcategoryName="Cloud Storage"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDCloudStorage}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="Delivery/Transport/Logistics"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDDeliveryAPIs}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="Finance"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDFinance}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="Healthcare"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDHealthcare}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="Login"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDLogin}
                          />
                  </div>
                  <div className="subcat border-top">
                
                             <HomepageSubcategory 
                          subcategoryName="Marketing and Analytics"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDMarketingAnalytics}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="Smart Home and Smart Facilities"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDSmartHome}
                          />
                  </div>
                </div>
              </div>
            </div>
          </section> 
          {/* mobile section */}

          <section className="mobile-landscape mt-3  d-xs-block d-md-none">
            <div className="container">
              <div className="row">
                <div className="col-md-12 bg-white px-0">
                  <h3 className="sm-text text-center ApiStandardsandProtocolsBg text-white py-2">API Standards <br/>  and Protocols({ApiStandardsandProtocols.length})</h3>
                  <div className="subcat">
                  <HomepageSubcategory 
                          subcategoryName="API protocols"
                          handleCompany={handleEntity}
                          filteredCategory={ ApiStandardsandProtocolsANDAsyncAPI}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="API standards"
                          handleCompany={handleEntity}
                          filteredCategory={ApiStandardsandProtocolsANDFIDO}
                          />
                  </div>
                </div>
              </div>
            </div>
          </section> 
          {/* mobile section */}


          {/* END MOBILE */}
          
          <section className="home-landscape heroBg d-none d-md-block py-5">
          <ReactTooltip backgroundColor="#04a5b6" textColor="#fff" id="companyName-tooltip"/>
          <ReactTooltip backgroundColor="#0c4b6e" textColor="#fff" id="subcategory-tooltip"/>
          <ReactTooltip backgroundColor="#0c4b6e" textColor="#fff" id="category-tooltip" place="right" className="categoryToolTip"/>
  


            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 mb-1">
                  <div className="home-main-container ">
                    <div className="apilifecycleplatform">
                      <span className="text-white" data-tip={testCat} data-for="category-tooltip">API Lifecycle <br/>Platform ({APILifecyclePlatform.length})</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Access and Identity Management"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDAccessLevelandIdentityManagement}
                          handleLoading={handleLoading}
                          />
            
                          </div>
                        
                     

                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform"> 
                          {data<=0 &&  <Loader/>}
                          
                            <HomepageSubcategory 
                          subcategoryName="API Management/API Gateway"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDAPIManagementAPIGateway}
                          />
                          </div>

                         

                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Oriented IT Consulting Firms"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDAPIOrientedITConsultingFirms}
                          />
                          </div>
                        </div>
                      </div>

                      <div className="landscape-container">
                        <div className="landscape-category-container">
                        <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Design/Documentation Platforms"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDAPIDesignDocumentationPlatforms}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                          
                          <HomepageSubcategory 
                          subcategoryName="API Security"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDApiSecurity}
                          />
                         
                          </div>
                        </div>
                      </div>
                    

                      <div class="landscape-container">
                        <div class="landscape-category-container">
                        <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Analytics/Monitoring"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDAPIAnalyticsMonitoring}
                          />
                          </div>
                      
                        <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Developer Portals"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDAPIDeveloperPortals}
                          />
                          </div>
               
                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Testing"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDAPITesting}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="IoT Platforms/Networks/Devices"
                          handleCompany={handleEntity}
                          filteredCategory={APILifecyclePlatformANDIoTPlatformsNetworksDevicesAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
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
                        <div class="landscape-subcategory-box landscape-subcategory-box-BackendBuildingToolsANDMBaas">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Banking/Finance/Insurance Backends"
                          handleCompany={handleEntity}
                          filteredCategory={BackendBuildingToolsMBaaSANDBankingFinanceInsuranceBackends}
                          />
                          </div>
                         
                          <div class="landscape-subcategory-box landscape-subcategory-box-BackendBuildingToolsANDMBaas">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Headless CMS"
                          handleCompany={handleEntity}
                          filteredCategory={ BackendBuildingToolsANDHeadlessCMS}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-BackendBuildingToolsANDMBaas">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Infrastructure/Cloud/Serverless APIs"
                          handleCompany={handleEntity}
                          filteredCategory={BackendBuildingToolsANDInfrastructureCloudServerlessAPIs}
                          />
                          </div>
                          
                        </div>
                      </div>

                      <div class="landscape-container">
                        <div class="landscape-category-container">
                        <div class="landscape-subcategory-box landscape-subcategory-box-BackendBuildingToolsANDMBaas">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Deployment/Back-end Building"
                          handleCompany={handleEntity}
                          filteredCategory={ BackendBuildingToolsMBaaSANDAPIDeploymentBackendBuilding}
                          />
                          </div>
                         
                          <div class="landscape-subcategory-box landscape-subcategory-box-BackendBuildingToolsANDMBaas">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Blockchain"
                          handleCompany={handleEntity}
                          filteredCategory={BackendBuildingToolsANDBlockchain}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-BackendBuildingToolsANDMBaas">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Mobile Backend as a Service"
                          handleCompany={handleEntity}
                          filteredCategory={BackendBuildingToolsANDMobileBackendasaService}
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
                      <span className="cat-name">Business processes as an <br /> API/API-as a Product ({BusinessprocessesasanAPIAPIasaProduct.length})</span>
                    </div>
                    <div class="category-container ">
                      

                      <div class="landscape-container">
                        <div class="landscape-category-container">
                        <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Data"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDData}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Data governance & Data management"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDDatagovernanceDatamanagement}
                          />
                          </div>

                          
                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
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
                        <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Email/Messaging/Communications Platforms as a Service"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDEmailMessaging}
                          />
                          </div>
                        </div>
                      </div>


                      <div class="landscape-container">
                        <div class="landscape-category-container">
                        
                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Accounting"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDAccounting}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="AI & ML"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDAIML}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="E-commerce"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDEcommerce}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
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
                        <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Audio & Video"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDAudioAndVideo}
                          />
                          </div>
                      
                     
                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Forms"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDOnlineForms}
                          />
                          </div>

                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Human-as-a-service"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDHumanasaservice}
                          />
                          </div>

                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Human Resources"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDHumanresources}
                          />
                          </div>

                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Legal & Regulatory"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDLegalRegulatory}
                          />
                          </div>
                        
                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Search"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDSearch}
                          />
                          </div>
                        
                         
                          <div class="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Time & Calendar"
                          handleCompany={handleEntity}
                          filteredCategory={BusinessprocessesasanAPIAPIasaProductANDTimeCalendar}
                          />
                          </div>
                         
                        </div>
                      </div> {/* landscape container */}
                     
                    </div>
                  </div>
                </div> {/* col-md-12 */}


                <div className="col-md-12 my-1">
                  <div class="home-main-container ">
                    <div class="IntegrationPlatformAsAService">
                      <span className="">Integration Platform <br /> as a Service ({IntegrationPlatformAsAService.length})</span>
                    </div>
                    <div class="category-container ">
                    <div className="landscape-container">
                      <div className="landscape-category-container">
                      <div class="landscape-subcategory-box landscape-subcategory-box-IntegrationPlatformAsAService ">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Aggregators (Finance)"
                          handleCompany={handleEntity}
                          filteredCategory={IntegrationPlatformAsAServiceANDAPIAggregatorsFinance}
                          />
                          </div>
                      </div>

                    </div>

                      <div class="landscape-container">
                        <div class="landscape-category-container">
                        
                          <div class="landscape-subcategory-box landscape-subcategory-box-IntegrationPlatformAsAService">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API Aggregators (General)"
                          handleCompany={handleEntity}
                          filteredCategory={IntegrationPlatformAsAServiceANDAPIAggregators}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-IntegrationPlatformAsAService">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Automation/Orchestration"
                          handleCompany={handleEntity}
                          filteredCategory={IntegrationPlatformAsAServiceANDAutomationOrchestration}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-IntegrationPlatformAsAService">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Database-as-a-service"
                          handleCompany={handleEntity}
                          filteredCategory={IntegrationPlatformAsAServiceANDDatabaseasaservice}
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
                      <span className="text-white">Vertical API <br /> Abstractions ({VerticalAPIAbstractions.length})</span>
                    </div>
                    <div class="category-container ">
                      <div class="landscape-container">
                        <div class="landscape-category-container">
                          <div class="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Cloud Storage"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDCloudStorage}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Delivery/Transport/Logistics"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDDeliveryAPIs}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Finance"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDFinance}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Healthcare"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDHealthcare}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Login"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDLogin}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="Marketing and Analytics"
                          handleCompany={handleEntity}
                          filteredCategory={VerticalAPIAbstractionsANDMarketingAnalytics}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
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
                          <div class="landscape-subcategory-box landscape-subcategory-box-ApiStandardsandProtocols">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API protocols"
                          handleCompany={handleEntity}
                          filteredCategory={ ApiStandardsandProtocolsANDAsyncAPI}
                          />
                          </div>
                          <div class="landscape-subcategory-box landscape-subcategory-box-ApiStandardsandProtocols">
                          {data<=0 &&  <Loader/>}
                          <HomepageSubcategory 
                          subcategoryName="API standards"
                          handleCompany={handleEntity}
                          filteredCategory={ApiStandardsandProtocolsANDFIDO}
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



          <section className="methodology py-5 bg-white">
                <div className="container">
                    <div className="methodology-title d-flex justify-content-center align-items-center my-5">
                        <img src="../methodology_icon.png" alt="" className=" mx-2 xd-icon" />
                   
                        <h3 className="fw-bold text-center mx-2 text-company-color">Methodology</h3>
                    </div>
                    <div className="row d-flex bg-light rounded shadow py-5 my-2 px-3">
                        <div className="col-md-3 ">
                            <img src="../homepage/logo_dark.png" alt="" />
                        </div>
                        <div className="col-md-9 ">
                            <p className="mt-3 text-company-color">Our dataset has been built on 3 years of apidays industry analysis and data collection</p>
                        </div> 
                    </div> 
                    {/* row */}

                    <div className="row d-flex bg-light rounded shadow py-5 my-2 px-3">
                        <div className="col-md-3 d-flex align-items-center">
                            <img src="../about-icon1.png" alt="" className="xd-icon"/>
                            <h5 className="ms-3 fw-bold text-company-color">Industry <br />categorisations</h5>
                        </div>
                        <div className="col-md-9 ">
                            <p className="mt-3 text-company-color">We have categorised API tool providers into their predominant function, however, at times, tools have been allocated to more than one category when their feature range is sufficiently diverse</p>
                        </div> 
                    </div> 
                    {/* row */}

                    <div className="row d-flex bg-light rounded shadow py-5 my-2 px-3">
                        <div className="col-md-3 d-flex align-items-center">
                            <img src="../about-icon2.png" alt="" className="xd-icon"/>
                            <h5 className="ms-3 fw-bold text-company-color">Why isn’t my tool listed?</h5>
                        </div>
                        <div className="col-md-9 ">
                            <p className="mt-3 text-company-color">We aim to be comprehensive in our list of all tools. Please complete our form to <a href="https://airtable.com/shr07pWSbRnQfnZZd" className="m-0 badge bg-dark-orange text-white rounded" target="_blank">add your tool</a> to our catalogue</p>
                        </div> 
                    </div> 
                    {/* row */}

                    <div className="row d-flex bg-light rounded shadow py-5 my-2 px-3">
                        <div className="col-md-3 d-flex align-items-center">
                            <img src="../about-icon3.png" alt="" className="xd-icon"/>
                            <h5 className="ms-3  fw-bold text-company-color">Where does the data come from?</h5>
                        </div>
                        <div className="col-md-9 ">
                            <p className="mt-3 text-company-color">We manually check each API tool provider at least once annually and we collect data on blog posts, positions vacant and new feature development on a quarterly basis. We also confirm data against industry leading datasets including Crunchbase, LinkedIn, Clearbit and API Evangelist.</p>
                        </div> 
                    </div> 
                    {/* row */}
                </div>
            </section>

            <section className="something-to-change py-5 bg-white border-top">
            <div className="container">
                <h3 className="text-center fw-bold my-5 text-company-color">See something you want to change?</h3>
                <div className="something-to-change-container">
                    <div className="change-box text-center px-5">
                    <div className="d-flex justify-content-center mb-2">
                    <img src="../about-btn1.png" alt="" className="d-block align-self-start mb-2 xd-icon" />
                   
                    </div>
                    <button className="btn-about bg-dark-orange text-white mt-3" onClick={()=>handleForm()}>Add your API tool</button>
                    </div>

                    <div className="change-box  px-5">
                    <div className="d-flex">
                    <img src="../about-btn2.png" alt="" className="align-self-start mb-3 me-3 xd-icon" />
                    <p className="pt-1 text-company-color">Report a bug including problems with the website or with the data for a specific tool provider</p>
                    </div>
                    <div className="text-center d-flex flex-grow-1">
                    <button className="btn-about bg-dark-orange text-white" onClick={()=>handleForm()}>Report a bug</button>
                    </div>
                    </div>


                    <div className="change-box  px-5">
                    <div className="d-flex">
                    <img src="../about-btn3.png" alt="" className="align-self-start mb-3 me-3 xd-icon" /> 
                    <p className="pt-1 text-company-color">Share a new feature idea, including any additional data points you would like to see </p>
                    </div>
                    <div className="text-center d-flex flex-grow-1">
                    <button className="btn-about bg-dark-orange text-white mt-2" onClick={()=>handleForm()}>New feature idea</button>
                    </div>
                    </div>
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
