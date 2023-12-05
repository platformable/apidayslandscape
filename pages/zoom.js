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
import Script from 'next/script';

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

  const categories = [
    "API Lifecycle Platform",
    "API Standards/Protocols",
    "Backend Building Tools",
    "Business processes as an API/API-as-a-Product",
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
    "API Consulting",
    "API Testing",
    "IoT Platforms/Networks/Devices",
    "Streaming/Event Architecture",
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
    "API Protocols",
    "API Standards",
  ];

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

  const APILifecyclePlatform = data.values.filter((company, index) =>
    company?.parentCategorySlug?.includes("API Lifecycle Platform")
  );

  const APILifecyclePlatformANDAccessLevelandIdentityManagement =
    data.values.filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("API Lifecycle Platform") &&
        company?.subcategory?.includes("Access and Identity Management")
    );

  APILifecyclePlatformANDAccessLevelandIdentityManagement.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const APILifecyclePlatformANDAPIAnalyticsMonitoring = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes("API Lifecycle Platform") &&
      company?.subcategory?.includes("API Analytics/Monitoring")
  );

  APILifecyclePlatformANDAPIAnalyticsMonitoring.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const APILifecyclePlatformANDAPIDesignDocumentationPlatforms =
    data.values.filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("API Lifecycle Platform") &&
        company?.subcategory?.includes("API Design/Documentation Platforms")
    );

  APILifecyclePlatformANDAPIDesignDocumentationPlatforms.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const APILifecyclePlatformANDAPIDeveloperPortals = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes("API Lifecycle Platform") &&
      company?.subcategory?.includes("API Developer Portals")
  );

  APILifecyclePlatformANDAPIDeveloperPortals.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const APILifecyclePlatformANDAPIDocumentation = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes("API Lifecycle Platform") &&
      company?.subcategory?.includes("API Documentation")
  );

  const APILifecyclePlatformANDApiSecurity = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes("API Lifecycle Platform") &&
      company?.subcategory?.includes("API Security")
  );

  APILifecyclePlatformANDApiSecurity.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const APILifecyclePlatformANDAPIManagementAPIGateway = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes("API Lifecycle Platform") &&
      company?.subcategory?.includes("API Management/API Gateway")
  );
  APILifecyclePlatformANDAPIManagementAPIGateway.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const APILifecyclePlatformANDAPIOrientedITConsultingFirms =
    data.values.filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("API Lifecycle Platform") &&
        company?.subcategory.includes("API Consulting")
    );

  APILifecyclePlatformANDAPIOrientedITConsultingFirms.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const APILifecyclePlatformANDAPITesting = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes("API Lifecycle Platform") &&
      company?.subcategory?.includes("API Testing")
  );

  APILifecyclePlatformANDAPITesting.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const APILifecyclePlatformANDIoTPlatformsNetworksDevicesAPIs =
    data.values.filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("API Lifecycle Platform") &&
        company?.subcategory?.includes("IoT Platforms/Networks/Devices")
    );

  APILifecyclePlatformANDIoTPlatformsNetworksDevicesAPIs.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const APILifecyclePlatformANDStreamingAPIs = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes("API Lifecycle Platform") &&
      company?.subcategory?.includes("Streaming/Event Architecture")
  ).sort((a, b) => a.name.localeCompare(b.name));

  /* API Standards/Protocols */

  const ApiStandardsandProtocols = data.values
    .filter((company, index) =>
      company?.parentCategorySlug?.includes("API Standards/Protocols")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const ApiStandardsandProtocolsANDAsyncAPI = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("API Standards/Protocols") &&
        company?.subcategory?.includes("API Protocols")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const ApiStandardsandProtocolsANDFIDO = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("API Standards/Protocols") &&
        company?.subcategory?.includes("API Standards")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const ApiStandardsandProtocolsANDGraphQL = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("API Standards/Protocols") &&
        company?.subcategory?.includes("GraphQL")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const ApiStandardsandProtocolsANDGRPC = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("API Standards/Protocols") &&
        company?.subcategory?.includes("gRPC")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const ApiStandardsandProtocolsANDOpenApiSpecs = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("API Standards/Protocols") &&
        company?.subcategory?.includes("Open API Specs")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const ApiStandardsandProtocolsANDOpenID = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("API Standards/Protocols") &&
        company?.subcategory?.includes("OpenID")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const ApiStandardsandProtocolsANDPSD2APIAbstractions = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("API Standards/Protocols") &&
        company?.subcategory?.includes("PSD2 API Abstractions")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const ApiStandardsandProtocolsANDSTETBerlinGroup = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("API Standards/Protocols") &&
        company?.subcategory?.includes("STET Berlin Group")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  /* Backend Building Tools/MBaaS */

  const BackendBuildingTools = data.values.filter((company, index) =>
    company?.parentCategorySlug?.includes("Backend Building Tools")
  );

  const BackendBuildingToolsMBaaSANDAPIDeploymentBackendBuilding = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("Backend Building Tools") &&
        company?.subcategory?.includes("API Deployment/Back-end Building")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const BackendBuildingToolsMBaaSANDBankingFinanceInsuranceBackends =
    data.values
      .filter(
        (company, index) =>
          company?.parentCategorySlug?.includes("Backend Building Tools") &&
          company?.subcategory?.includes("Banking/Finance/Insurance Backends")
      )
      .sort((a, b) => a.name.localeCompare(b.name));

  const BackendBuildingToolsANDBlockchain = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("Backend Building Tools") &&
        company?.subcategory?.includes("Blockchain")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const BackendBuildingToolsANDHeadlessCMS = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("Backend Building Tools") &&
        company?.subcategory?.includes("Headless CMS")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const BackendBuildingToolsANDInfrastructureCloudServerlessAPIs = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("Backend Building Tools") &&
        company?.subcategory?.includes("Infrastructure/Cloud/Serverless APIs")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const BackendBuildingToolsANDMobileBackendasaService = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("Backend Building Tools") &&
        company?.subcategory?.includes("Mobile Backend as a Service")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  /*   Business processes as an API/API-as-a-Product */

  const BusinessprocessesasanAPIAPIasaProduct = data.values
    .filter((company, index) =>
      company?.parentCategorySlug?.includes(
        "Business processes as an API/API-as-a-Product"
      )
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const BusinessprocessesasanAPIAPIasaProductANDAccounting = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Business processes as an API/API-as-a-Product"
        ) && company?.subcategory?.includes("Accounting")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const BusinessprocessesasanAPIAPIasaProductANDAIML = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Business processes as an API/API-as-a-Product"
        ) && company?.subcategory?.includes("AI/ML")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const BusinessprocessesasanAPIAPIasaProductANDAudioAndVideo = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Business processes as an API/API-as-a-Product"
        ) && company?.subcategory?.includes("Audio/Visual")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const BusinessprocessesasanAPIAPIasaProductANDLegalRegulatory = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Business processes as an API/API-as-a-Product"
        ) && company?.subcategory?.includes("Legal/Regulatory")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const BusinessprocessesasanAPIAPIasaProductANDTimeCalendar = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Business processes as an API/API-as-a-Product"
        ) && company?.subcategory?.includes("Time/Calendar")
    )
    .sort((a, b) => a.name.localeCompare(b.name));
  const BusinessprocessesasanAPIAPIasaProductANDDatagovernanceDatamanagement =
    data.values
      .filter(
        (company, index) =>
          company?.parentCategorySlug?.includes(
            "Business processes as an API/API-as-a-Product"
          ) && company?.subcategory?.includes("Data governance/Data management")
      )
      .sort((a, b) => a.name.localeCompare(b.name));

  const BusinessprocessesasanAPIAPIasaProductANDEcommerce = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Business processes as an API/API-as-a-Product"
        ) && company?.subcategory?.includes("E-commerce")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const BusinessprocessesasanAPIAPIasaProductANDData = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Business processes as an API/API-as-a-Product"
        ) && company?.subcategory?.includes("Data")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const BusinessprocessesasanAPIAPIasaProductANDEmailMessaging = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Business processes as an API/API-as-a-Product"
        ) &&
        company?.subcategory?.includes(
          "Email/Messaging/Communications Platforms as a Service"
        )
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const BusinessprocessesasanAPIAPIasaProductANDIdentityverificationKYC =
    data.values
      .filter(
        (company, index) =>
          company?.parentCategorySlug?.includes(
            "Business processes as an API/API-as-a-Product"
          ) && company?.subcategory?.includes("Identity verification/KYC")
      )
      .sort((a, b) => a.name.localeCompare(b.name));

  const BusinessprocessesasanAPIAPIasaProductANDOnlineForms = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Business processes as an API/API-as-a-Product"
        ) && company?.subcategory?.includes("Forms")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const BusinessprocessesasanAPIAPIasaProductANDHumanresources = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Business processes as an API/API-as-a-Product"
        ) && company?.subcategory?.includes("Human Resources")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const BusinessprocessesasanAPIAPIasaProductANDHumanasaservice = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Business processes as an API/API-as-a-Product"
        ) && company?.subcategory?.includes("Human-as-a-service")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const BusinessprocessesasanAPIAPIasaProductANDPayments = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Business processes as an API/API-as-a-Product"
        ) && company?.subcategory?.includes("Payments")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const BusinessprocessesasanAPIAPIasaProductANDVideo = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Business processes as an API/API-as-a-Product"
        ) && company?.subcategory?.includes("Video")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const BusinessprocessesasanAPIAPIasaProductANDSearch = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Business processes as an API/API-as-a-Product"
        ) && company?.subcategory?.includes("Search")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  /*   Business processes as an API/API-as-a-Products */

  const BusinessprocessesasanAPIAPIasaProducts = data.values
    .filter((company, index) =>
      company?.parentCategorySlug?.includes(
        "Business processes as an API/API-as-a-Products"
      )
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const BusinessprocessesasanAPIAPIasaProductsANDAccountingAPIs = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Business processes as an API/API-as-a-Products"
        ) && company?.subcategory?.includes("Accounting APIs")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const BusinessprocessesasanAPIAPIasaProductsANDAIAPIs = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Business processes as an API/API-as-a-Products"
        ) && company?.subcategory?.includes("AI APIs")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const BusinessprocessesasanAPIAPIasaProductsANDAPIAggregators = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Business processes as an API/API-as-a-Products"
        ) && company?.subcategory?.includes("API Aggregators")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const BusinessprocessesasanAPIAPIasaProductsANDAPIDeployment = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Business processes as an API/API-as-a-Products"
        ) && company?.subcategory?.includes("API Deployment/Back-end Building")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const BusinessprocessesasanAPIAPIasaProductsANDDataB2 = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Business processes as an API/API-as-a-Products"
        ) && company?.subcategory?.includes("Data (B2B, B2C)")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  /* Integration Platform as a service */
  const IntegrationPlatformAsAService = data.values.filter((company, index) =>
    company?.parentCategorySlug?.includes("Integration Platform as a Service")
  );

  const IntegrationPlatformAsAServiceANDAPIAggregators = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Integration Platform as a Service"
        ) && company?.subcategory?.includes("API Aggregators (General)")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const IntegrationPlatformAsAServiceANDAutomationOrchestration = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Integration Platform as a Service"
        ) && company?.subcategory?.includes("Automation/Orchestration")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const IntegrationPlatformAsAServiceANDDatabaseasaservice = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Integration Platform as a Service"
        ) && company?.subcategory?.includes("Database-as-a-service")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const IntegrationPlatformAsAServiceANDAPIAggregatorsFinance = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "Integration Platform as a Service"
        ) && company?.subcategory?.includes("API Aggregators (Finance)")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  /* Vertical API Abstractions */

  const VerticalAPIAbstractions = data.values
    .filter((company, index) =>
      company?.parentCategorySlug?.includes("Vertical API Abstractions")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const VerticalAPIAbstractionsANDCloudStorage = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("Vertical API Abstractions") &&
        company?.subcategory?.includes("Cloud Storage")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const VerticalAPIAbstractionsANDDeliveryAPIs = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("Vertical API Abstractions") &&
        company?.subcategory?.includes("Delivery/Transport/Logistics")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const VerticalAPIAbstractionsANDLogin = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("Vertical API Abstractions") &&
        company?.subcategory?.includes("Login")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const VerticalAPIAbstractionsANDHealthcare = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("Vertical API Abstractions") &&
        company?.subcategory?.includes("Healthcare")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const VerticalAPIAbstractionsANDFinance = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("Vertical API Abstractions") &&
        company?.subcategory?.includes("Finance")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const VerticalAPIAbstractionsANDLoginAPIs = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("Vertical API Abstractions") &&
        company?.subcategory?.includes("Login APIs")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const VerticalAPIAbstractionsANDMarketingAnalytics = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("Vertical API Abstractions") &&
        company?.subcategory?.includes("Marketing/Analytics")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const VerticalAPIAbstractionsANDSmartHome = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("Vertical API Abstractions") &&
        company?.subcategory?.includes("Smart Home/Facilities")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  /* MEDIA ASSOCIATIONS */

  const MediaAssociations = data.values
    .filter((company, index) =>
      company?.parentCategorySlug?.includes("Media/Associations")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const MediaAssociationsANDMedia = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("Media/Associations") &&
        company?.subcategory?.includes("Media")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const MediaAssociationsANDAssociations = data.values
    .filter(
      (company, index) =>
        company?.parentCategorySlug?.includes("Media/Associations") &&
        company?.subcategory?.includes("Associations")
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  // API LIFECYCLE SCURITY PUREPLAY

  const APILifecyclePlatformSecurityPureplay = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes("API Lifecycle (Security Pureplay)")
  );


  const APILifecyclePlatformSecurityPureplayAndApiSecurity =
    data.values.filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "API Lifecycle (Security Pureplay)"
        ) && company?.subcategory?.includes("API Security")
    );

    APILifecyclePlatformSecurityPureplayAndApiSecurity.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

//
  const APILifecyclePlatformSecurityPureplayAndApiThreadManagement =
    data.values.filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "API Lifecycle (Security Pureplay)"
        ) && company?.subcategory?.includes("API Threat Management")
    );

  APILifecyclePlatformSecurityPureplayAndApiThreadManagement.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // console.log(
  //   "APILifecyclePlatformSecurityPureplay",
  //   APILifecyclePlatformSecurityPureplay
  // );
  //

  const APILifecyclePlatformSecurityPureplayAndApiDiscoveryAndRisk =
    data.values.filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "API Lifecycle (Security Pureplay)"
        ) && company?.subcategory?.includes("API Discovery and Risk Management")
    );

  APILifecyclePlatformSecurityPureplayAndApiDiscoveryAndRisk.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

 

  //

  const APILifecyclePlatformSecurityPureplayAndVulnerabilityManagement =
    data.values.filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "API Lifecycle (Security Pureplay)"
        ) && company?.subcategory?.includes("Vulnerability Management")
    );

  APILifecyclePlatformSecurityPureplayAndVulnerabilityManagement.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
 
  // API LIFECYCLE EMBEDDED SCURITY

  const APILifecyclePlatformEmbeddedSecurity = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes("API Lifecycle (Embedded Security)")
  );

  const APILifecyclePlatformEmbeddedSecurityVulnerabilityIdentificationScanners =
    data.values.filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "API Lifecycle (Embedded Security)"
        ) &&
        company?.subcategory?.includes("Vulnerability Identification/scanners")
    );

  APILifecyclePlatformEmbeddedSecurityVulnerabilityIdentificationScanners.sort(
    (a, b) => a.name.localeCompare(b.name)
  );



  //

  const APILifecyclePlatformEmbeddedSecurityWebApplicationFirewalls =
    data.values.filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "API Lifecycle (Embedded Security)"
        ) && company?.subcategory?.includes("Web Application Firewalls")
    );

  APILifecyclePlatformEmbeddedSecurityWebApplicationFirewalls.sort((a, b) =>
    a.name.localeCompare(b.name)
  );


  //

  // API LIFECYCLE Adjacent SCURITY Solutions

  const APILifecyclePlatformAdjacentSecuritySolutions = data.values.filter(
    (company, index) =>
      company?.parentCategorySlug?.includes(
        "API Lifecycle (Adjacent Security Solutions)"
      )
  );

  const APILifecyclePlatformAdjacentSecuritySolutionsAndApiTesting =
    data.values.filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "API Lifecycle (Adjacent Security Solutions)"
        ) && company?.subcategory?.includes("API Analytics/Monitoring")
    );

  APILifecyclePlatformAdjacentSecuritySolutionsAndApiTesting.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  //

  const APILifecyclePlatformAdjacentSecuritySolutionsAndIdentityVerification =
    data.values.filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "API Lifecycle (Adjacent Security Solutions)"
        ) && company?.subcategory?.includes("Identity verification/KYC")
    );

  APILifecyclePlatformAdjacentSecuritySolutionsAndIdentityVerification.sort(
    (a, b) => a.name.localeCompare(b.name)
  );

  //

  const APILifecyclePlatformAdjacentSecuritySolutionsAndLogin =
    data.values.filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "API Lifecycle (Adjacent Security Solutions)"
        ) && company?.subcategory?.includes("Login")
    );

  APILifecyclePlatformAdjacentSecuritySolutionsAndLogin.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  //

  const APILifecyclePlatformAdjacentSecuritySolutionsAndAccess =
    data.values.filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "API Lifecycle (Adjacent Security Solutions)"
        ) && company?.subcategory?.includes("Access and Identity Management")
    );

  APILifecyclePlatformAdjacentSecuritySolutionsAndAccess.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  //

  const APILifecyclePlatformAdjacentSecuritySolutionsAndApiAnalytics =
    data.values.filter(
      (company, index) =>
        company?.parentCategorySlug?.includes(
          "API Lifecycle (Adjacent Security Solutions)"
        ) && company?.subcategory?.includes("API Analytics/Monitoring")
    );

  APILifecyclePlatformAdjacentSecuritySolutionsAndApiAnalytics.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  //

  // console.log("APILifecyclePlatformSecurityPureplay",APILifecyclePlatformSecurityPureplay)

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
        <Script defer data-domain="apilandscape.apiscene.io" src="https://plausible.io/js/script.js" />
        <main>
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

          {/* MOBILE */}

          <section className="mobile-landscape d-xs-block d-md-none">
            <div className="container">
              <div className="row">
                <div className="col-md-12 bg-white px-0">
                  <h3
                    className="sm-text text-center mobile-bg-dark-company-color text-white py-2"
                    data-tooltip-content={APILifecyclePlatformsDescription}
                    data-tooltip-id="category-tooltip"
                  >
                    Lifecycle Platform ({APILifecyclePlatform.length})
                  </h3>
              {/*     <div className="subcat">
                    <HomepageSubcategory
                      subcategoryName="Access and Identity Management"
                      handleCompany={handleEntity}
                      filteredCategory={
                        APILifecyclePlatformANDAccessLevelandIdentityManagement
                      }
                      handleLoading={handleLoading}
                    />
                  </div> */}
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="API Management/API Gateway"
                      handleCompany={handleEntity}
                      filteredCategory={
                        APILifecyclePlatformANDAPIManagementAPIGateway
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="API Consulting"
                      handleCompany={handleEntity}
                      filteredCategory={
                        APILifecyclePlatformANDAPIOrientedITConsultingFirms
                      }
                    />
                  </div>
              {/*     <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="API Analytics/Monitoring"
                      handleCompany={handleEntity}
                      filteredCategory={
                        APILifecyclePlatformANDAPIAnalyticsMonitoring
                      }
                    />
                  </div> */}
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="API Design/Documentation Platforms"
                      handleCompany={handleEntity}
                      filteredCategory={
                        APILifecyclePlatformANDAPIDesignDocumentationPlatforms
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="API Developer Portals"
                      handleCompany={handleEntity}
                      filteredCategory={
                        APILifecyclePlatformANDAPIDeveloperPortals
                      }
                    />
                  </div>
                  {/* <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="API Security"
                      handleCompany={handleEntity}
                      filteredCategory={APILifecyclePlatformANDApiSecurity}
                    />
                  </div> */}
                  {/* <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="API Testing"
                      handleCompany={handleEntity}
                      filteredCategory={APILifecyclePlatformANDAPITesting}
                    />
                  </div> */}
                  <div className="subcat">
                    <HomepageSubcategory
                      subcategoryName="IoT Platforms/Networks/Devices"
                      handleCompany={handleEntity}
                      filteredCategory={
                        APILifecyclePlatformANDIoTPlatformsNetworksDevicesAPIs
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="Streaming/Event Architecture"
                      handleCompany={handleEntity}
                      filteredCategory={APILifecyclePlatformANDStreamingAPIs}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* mobile section */}

          <section className="mobile-landscape d-xs-block d-md-none">
            <div className="container">
              <div className="row">
                <div className="col-md-12 bg-white px-0">
                  <h3
                    className="sm-text text-center bg-dark-purple text-white py-2"
                    data-tooltip-content={APILifecyclePlatformsDescription}
                    data-tooltip-id="category-tooltip"
                  >
                    API Lifecycle Platform (Security Pureplay) ({APILifecyclePlatformSecurityPureplay.length})
                  </h3>
                  <div className="subcat">
                    <HomepageSubcategory
                      subcategoryName="API Security"
                      handleCompany={handleEntity}
                      filteredCategory={
                        APILifecyclePlatformSecurityPureplayAndApiSecurity
                      }
                      handleLoading={handleLoading}
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="API Threat Management"
                      handleCompany={handleEntity}
                      filteredCategory={
                        APILifecyclePlatformSecurityPureplayAndApiThreadManagement
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="API Discovery & Risk Management"
                      handleCompany={handleEntity}
                      filteredCategory={
                        APILifecyclePlatformSecurityPureplayAndApiDiscoveryAndRisk
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="Vulnerability Management"
                      handleCompany={handleEntity}
                      filteredCategory={
                        APILifecyclePlatformSecurityPureplayAndVulnerabilityManagement
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* mobile section */}


          <section className="mobile-landscape d-xs-block d-md-none">
            <div className="container">
              <div className="row">
                <div className="col-md-12 bg-white px-0">
                  <h3
                    className="sm-text text-center bg-dark-purple text-white py-2"
                    data-tooltip-content={APILifecyclePlatformsDescription}
                    data-tooltip-id="category-tooltip"
                  >
                    API Lifecycle (Embedded Security) ({APILifecyclePlatformEmbeddedSecurity.length})
                  </h3>
                  <div className="subcat">
                    <HomepageSubcategory
                      subcategoryName="Vulnerability Identification/scanners"
                      handleCompany={handleEntity}
                      filteredCategory={
                        APILifecyclePlatformEmbeddedSecurityVulnerabilityIdentificationScanners
                      }
                      handleLoading={handleLoading}
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="Web Application Firewalls"
                      handleCompany={handleEntity}
                      filteredCategory={
                        APILifecyclePlatformEmbeddedSecurityWebApplicationFirewalls
                      }
                    />
                  </div>
 
                </div>
              </div>
            </div>
          </section>
          {/* mobile section */}


          <section className="mobile-landscape d-xs-block d-md-none">
            <div className="container">
              <div className="row">
                <div className="col-md-12 bg-white px-0">
                  <h3
                    className="sm-text text-center bg-dark-purple text-white py-2"
                    data-tooltip-content={APILifecyclePlatformsDescription}
                    data-tooltip-id="category-tooltip"
                  >
                    API Lifecycle (Adjacent Security Solutions) ({APILifecyclePlatformAdjacentSecuritySolutions.length})
                  </h3>
                  <div className="subcat">
                    <HomepageSubcategory
                      subcategoryName="API Testing"
                      handleCompany={handleEntity}
                      filteredCategory={
                        APILifecyclePlatformAdjacentSecuritySolutionsAndApiTesting
                      }
                      handleLoading={handleLoading}
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="Identity Verification/KYC"
                      handleCompany={handleEntity}
                      filteredCategory={
                        APILifecyclePlatformAdjacentSecuritySolutionsAndIdentityVerification
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="Login"
                      handleCompany={handleEntity}
                      filteredCategory={
                        APILifecyclePlatformAdjacentSecuritySolutionsAndLogin
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="Access and Identity Management"
                      handleCompany={handleEntity}
                      filteredCategory={
                        APILifecyclePlatformAdjacentSecuritySolutionsAndAccess
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="API Analytics/Monitoring"
                      handleCompany={handleEntity}
                      filteredCategory={
                        APILifecyclePlatformAdjacentSecuritySolutionsAndApiAnalytics
                      }
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
                  <h3 className="sm-text text-center mobile-bg-dark-company-color text-white py-2">
                    Backend Building Tools ({BackendBuildingTools.length})
                  </h3>
                  <div className="subcat">
                    <HomepageSubcategory
                      subcategoryName="Headless CMS"
                      handleCompany={handleEntity}
                      filteredCategory={BackendBuildingToolsANDHeadlessCMS}
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="Infrastructure/Cloud/Serverless APIs"
                      handleCompany={handleEntity}
                      filteredCategory={
                        BackendBuildingToolsANDInfrastructureCloudServerlessAPIs
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="Mobile Backend as a Service"
                      handleCompany={handleEntity}
                      filteredCategory={
                        BackendBuildingToolsANDMobileBackendasaService
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="API Deployment/Back-end Building"
                      handleCompany={handleEntity}
                      filteredCategory={
                        BackendBuildingToolsMBaaSANDAPIDeploymentBackendBuilding
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="Banking/Finance/Insurance Backends"
                      handleCompany={handleEntity}
                      filteredCategory={
                        BackendBuildingToolsMBaaSANDBankingFinanceInsuranceBackends
                      }
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
                  <h3 className="sm-text text-center mobile-bg-dark-company-color text-white py-2">
                    Business processes as an <br /> API/API-as-a-Product (
                    {BusinessprocessesasanAPIAPIasaProduct.length})
                  </h3>
                  <div className="subcat">
                    <HomepageSubcategory
                      subcategoryName="Data"
                      handleCompany={handleEntity}
                      filteredCategory={
                        BusinessprocessesasanAPIAPIasaProductANDData
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="Data governance/Data management"
                      handleCompany={handleEntity}
                      filteredCategory={
                        BusinessprocessesasanAPIAPIasaProductANDDatagovernanceDatamanagement
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="Payments"
                      handleCompany={handleEntity}
                      filteredCategory={
                        BusinessprocessesasanAPIAPIasaProductANDPayments
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="Email/Messaging/Communications Platforms as a Service"
                      handleCompany={handleEntity}
                      filteredCategory={
                        BusinessprocessesasanAPIAPIasaProductANDEmailMessaging
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="Accounting"
                      handleCompany={handleEntity}
                      filteredCategory={
                        BusinessprocessesasanAPIAPIasaProductANDAccounting
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="AI/ML"
                      handleCompany={handleEntity}
                      filteredCategory={
                        BusinessprocessesasanAPIAPIasaProductANDAIML
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="E-commerce"
                      handleCompany={handleEntity}
                      filteredCategory={
                        BusinessprocessesasanAPIAPIasaProductANDEcommerce
                      }
                    />
                  </div>
                  {/* <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="Identity verification/KYC"
                      handleCompany={handleEntity}
                      filteredCategory={
                        BusinessprocessesasanAPIAPIasaProductANDIdentityverificationKYC
                      }
                    />
                  </div> */}
                  <div className="subcat">
                    <HomepageSubcategory
                      subcategoryName="Audio/Visual"
                      handleCompany={handleEntity}
                      filteredCategory={
                        BusinessprocessesasanAPIAPIasaProductANDAudioAndVideo
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="Forms"
                      handleCompany={handleEntity}
                      filteredCategory={
                        BusinessprocessesasanAPIAPIasaProductANDOnlineForms
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="Human-as-a-service"
                      handleCompany={handleEntity}
                      filteredCategory={
                        BusinessprocessesasanAPIAPIasaProductANDHumanasaservice
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="Legal/Regulatory"
                      handleCompany={handleEntity}
                      filteredCategory={
                        BusinessprocessesasanAPIAPIasaProductANDLegalRegulatory
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="Search"
                      handleCompany={handleEntity}
                      filteredCategory={
                        BusinessprocessesasanAPIAPIasaProductANDSearch
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="Time/Calendar"
                      handleCompany={handleEntity}
                      filteredCategory={
                        BusinessprocessesasanAPIAPIasaProductANDTimeCalendar
                      }
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
                  <h3 className="sm-text text-center mobile-bg-dark-company-color text-white py-2">
                    Integration Platform <br /> as a Service (
                    {IntegrationPlatformAsAService.length}){" "}
                  </h3>
                  <div className="subcat">
                    <HomepageSubcategory
                      subcategoryName="API Aggregators (Finance)"
                      handleCompany={handleEntity}
                      filteredCategory={
                        IntegrationPlatformAsAServiceANDAPIAggregatorsFinance
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="API Aggregators (General)"
                      handleCompany={handleEntity}
                      filteredCategory={
                        IntegrationPlatformAsAServiceANDAPIAggregators
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="Automation/Orchestration"
                      handleCompany={handleEntity}
                      filteredCategory={
                        IntegrationPlatformAsAServiceANDAutomationOrchestration
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="Database-as-a-service"
                      handleCompany={handleEntity}
                      filteredCategory={
                        IntegrationPlatformAsAServiceANDDatabaseasaservice
                      }
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
                  <h3 className="sm-text text-center mobile-bg-dark-company-color text-white py-2">
                    Vertical API Abstractions ({VerticalAPIAbstractions.length}){" "}
                  </h3>
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
                {/*   <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="Login"
                      handleCompany={handleEntity}
                      filteredCategory={VerticalAPIAbstractionsANDLogin}
                    />
                  </div> */}
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="Marketing/Analytics"
                      handleCompany={handleEntity}
                      filteredCategory={
                        VerticalAPIAbstractionsANDMarketingAnalytics
                      }
                    />
                  </div>
                  <div className="subcat border-top">
                    <HomepageSubcategory
                      subcategoryName="Smart Home/Facilities"
                      handleCompany={handleEntity}
                      filteredCategory={VerticalAPIAbstractionsANDSmartHome}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* mobile section */}

          {/*  DO NOT DELETE API STANDARDS */}
          {/*  <section className="mobile-landscape mt-3  d-xs-block d-md-none">
            <div className="container">
              <div className="row">
                <div className="col-md-12 bg-white px-0">
                  <h3 className="sm-text text-center ApiStandardsandProtocolsBg text-white py-2">API Standards <br/>  and Protocols({ApiStandardsandProtocols.length})</h3>
                  <div className="subcat">
                  <HomepageSubcategory 
                          subcategoryName="API Protocols"
                          handleCompany={handleEntity}
                          filteredCategory={ ApiStandardsandProtocolsANDAsyncAPI}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="API Standards"
                          handleCompany={handleEntity}
                          filteredCategory={ApiStandardsandProtocolsANDFIDO}
                          />
                  </div>
                </div>
              </div>
            </div>
          </section>  */}

          {/*  DO NOT DELETE MEDIA ASSOCIATIONS */}
          {/*  <section className="mobile-landscape mt-3  d-xs-block d-md-none">
            <div className="container">
              <div className="row">
                <div className="col-md-12 bg-white px-0">
                  <h3 className="sm-text text-center ApiStandardsandProtocolsBg text-white py-2">Media/Associations ({ApiStandardsandProtocols.length})</h3>
                  <div className="subcat">
                  <HomepageSubcategory 
                          subcategoryName="Media"
                          handleCompany={handleEntity}
                          filteredCategory={ MediaAssociationsANDMedia}
                          />
                  </div>
                  <div className="subcat border-top">
                  <HomepageSubcategory 
                          subcategoryName="Associations"
                          handleCompany={handleEntity}
                          filteredCategory={MediaAssociationsANDAssociations}
                          />
                  </div>
                </div>
              </div>
            </div>
          </section>  */}
          {/* mobile section */}

          {/* END MOBILE */}

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
              <div className="row">
                <div className="col-md-12 mb-1">
                  <div className="home-main-container ">
                    <div className="bg-dark-company-color">
                      <span
                        className="text-white"
                        data-tooltip-content={APILifecyclePlatformsDescription}
                        data-tooltip-id="category-tooltip"
                      >
                        API Lifecycle <br />
                        Platform ({APILifecyclePlatform.length})
                      </span>
                    </div>
                    <div className="category-container ">
                      <div className="landscape-container">
                        <div className="landscape-category-container">
                          <div className="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}

                            <HomepageSubcategory
                              subcategoryName="API Management/API Gateway"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformANDAPIManagementAPIGateway
                              }
                            />
                          </div>

                          <div className="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="API Consulting"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformANDAPIOrientedITConsultingFirms
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div className="landscape-container">
                        <div className="landscape-category-container">
                      {/*     <div className="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Access and Identity Management"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformANDAccessLevelandIdentityManagement
                              }
                              handleLoading={handleLoading}
                            />
                          </div> */}
                          <div className="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="API Design/Documentation Platforms"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformANDAPIDesignDocumentationPlatforms
                              }
                            />
                          </div>
                          {/* <div className="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            <HomepageSubcategory
                              subcategoryName="API Security"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformANDApiSecurity
                              }
                            />
                          </div> */}

                      {/*     <div className="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="API Testing"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformANDAPITesting
                              }
                            />
                          </div> */}
                        </div>
                      </div>

                      <div className="landscape-container">
                        <div className="landscape-category-container">
                          <div className="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="API Developer Portals"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformANDAPIDeveloperPortals
                              }
                            />
                          </div>

                          <div className="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Streaming/Event Architecture"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformANDStreamingAPIs
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div className="landscape-container">
                        <div className="landscape-category-container">
                     {/*      <div className="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="API Analytics/Monitoring"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformANDAPIAnalyticsMonitoring
                              }
                            />
                          </div> */}

                          <div className="landscape-subcategory-box landscape-subcategory-box-apilifecycleplatform">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="IoT Platforms/Networks/Devices"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformANDIoTPlatformsNetworksDevicesAPIs
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* col-md-12 */}
                <div className="col-md-12 my-1" id="main-row">
                  <div className="home-main-container ">
                    <div className="bg-company-dark-purple-color">
                      <span
                        className="text-white"
                        data-tooltip-content={verticalApiDescription}
                        data-tooltip-id="category-tooltip"
                      >
                        API Lifecycle (Security Pureplay) (
                        {VerticalAPIAbstractions.length})
                      </span>
                    </div>
                    <div className="category-container ">
                      <div className="landscape-container">
                        <div className="landscape-category-container">
                          <div className="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="API Security"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformSecurityPureplayAndApiSecurity

                              }
                            />
                          </div>
                        </div>
                      </div>



                      <div className="landscape-container">
                        <div className="landscape-category-container">
                        
                          <div className="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="API Threat Management"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformSecurityPureplayAndApiThreadManagement
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div className="landscape-container">
                        <div className="landscape-category-container">
                        <div className="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="API Discovery & Risk Management"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformSecurityPureplayAndApiDiscoveryAndRisk
                              }
                            />
                          </div>
                          <div className="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Vulnerability Management"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformSecurityPureplayAndVulnerabilityManagement
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* row end */}
                 {/* col-md-12 */}
                 <div className="col-md-12 my-1" id="main-row">
                  <div className="home-main-container ">
                    <div className="bg-company-dark-purple-color">
                      <span
                        className="text-white"
                        data-tooltip-content={verticalApiDescription}
                        data-tooltip-id="category-tooltip"
                      >
                        API Lifecycle (Embedded Security) (
                        {APILifecyclePlatformEmbeddedSecurity.length})
                      </span>
                    </div>
                    <div className="category-container ">
                      <div className="landscape-container">
                        <div className="landscape-category-container">
                          <div className="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Vulnerability Identification/scanners"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformEmbeddedSecurityVulnerabilityIdentificationScanners
                              }
                            />
                          </div>
                          <div className="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Web Application Firewalls"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformEmbeddedSecurityWebApplicationFirewalls
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* row end */}
                 {/* col-md-12 */}
                 <div className="col-md-12 my-1" id="main-row">
                  <div className="home-main-container ">
                    <div className="bg-company-dark-purple-color">
                      <span
                        className="text-white"
                        data-tooltip-content={verticalApiDescription}
                        data-tooltip-id="category-tooltip"
                      >
                        API Lifecycle (Adjacent Security Solutions) (
                        {APILifecyclePlatformAdjacentSecuritySolutions.length})
                      </span>
                    </div>
                    <div className="category-container ">
                      <div className="landscape-container">
                        <div className="landscape-category-container">
                          <div className="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="API Testing"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformAdjacentSecuritySolutionsAndApiTesting
                              }
                            />
                          </div>
                      
                        </div>
                      </div>

                      <div className="landscape-container">
                        <div className="landscape-category-container">
                        <div className="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Identity Verification/KYC"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformAdjacentSecuritySolutionsAndIdentityVerification
                              }
                            />
                          </div>
                          <div className="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Login"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformAdjacentSecuritySolutionsAndLogin
                              }
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="landscape-container">
                        <div className="landscape-category-container">
                      
                          <div className="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Access and Identity Management"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformAdjacentSecuritySolutionsAndAccess
                              }
                            />
                          </div>
                          <div className="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="API Analytics/Monitoring"
                              handleCompany={handleEntity}
                              filteredCategory={
                                APILifecyclePlatformAdjacentSecuritySolutionsAndApiTesting
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* row end */}
                {/* col-md-12 */}
                <div className="col-md-12 my-1">
                  <div className="home-main-container ">
                    <div className="bg-dark-company-color">
                      <span
                        className="text-white"
                        data-tooltip-content={BackendBuildingToolsDescription}
                        data-tooltip-id="category-tooltip"
                      >
                        Backend Building <br /> Tools (
                        {BackendBuildingTools.length})
                      </span>
                    </div>
                    <div className="category-container ">
                      <div className="landscape-container">
                        <div className="landscape-category-container">
                          <div className="landscape-subcategory-box landscape-subcategory-box-BackendBuildingToolsANDMBaas">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Banking/Finance/Insurance Backends"
                              handleCompany={handleEntity}
                              filteredCategory={
                                BackendBuildingToolsMBaaSANDBankingFinanceInsuranceBackends
                              }
                            />
                          </div>

                  
                        </div>
                      </div>


                      <div className="landscape-container">
                        <div className="landscape-category-container">
                          <div className="landscape-subcategory-box landscape-subcategory-box-BackendBuildingToolsANDMBaas">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Infrastructure/Cloud/Serverless APIs"
                              handleCompany={handleEntity}
                              filteredCategory={
                                BackendBuildingToolsANDInfrastructureCloudServerlessAPIs
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div className="landscape-container">
                        <div className="landscape-category-container">
                          <div className="landscape-subcategory-box landscape-subcategory-box-BackendBuildingToolsANDMBaas">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="API Deployment/Back-end Building"
                              handleCompany={handleEntity}
                              filteredCategory={
                                BackendBuildingToolsMBaaSANDAPIDeploymentBackendBuilding
                              }
                            />
                          </div>

                         
                        </div>
                      </div>

                      <div className="landscape-container">
                        <div className="landscape-category-container">
                        <div className="landscape-subcategory-box landscape-subcategory-box-BackendBuildingToolsANDMBaas">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Headless CMS"
                              handleCompany={handleEntity}
                              filteredCategory={
                                BackendBuildingToolsANDHeadlessCMS
                              }
                            />
                          </div>
                          <div className="landscape-subcategory-box landscape-subcategory-box-BackendBuildingToolsANDMBaas">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Blockchain"
                              handleCompany={handleEntity}
                              filteredCategory={
                                BackendBuildingToolsANDBlockchain
                              }
                            />
                          </div>

                          <div className="landscape-subcategory-box landscape-subcategory-box-BackendBuildingToolsANDMBaas">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Mobile Backend as a Service"
                              handleCompany={handleEntity}
                              filteredCategory={
                                BackendBuildingToolsANDMobileBackendasaService
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* col-md-12 */}
                <div className="col-md-12 my-1">
                  <div className="home-main-container ">
                    <div className="bg-dark-company-color">
                      <span
                        className="cat-name text-white"
                        data-tooltip-content={
                          BusinessprocessesasanAPIAPIasaProductDescription
                        }
                        data-tooltip-id="category-tooltip"
                      >
                        Business processes as an <br /> API/API-as-a-Product (
                        {BusinessprocessesasanAPIAPIasaProduct.length})
                      </span>
                    </div>
                    <div className="category-container ">
                      <div className="landscape-container">
                        <div className="landscape-category-container">
                          <div className="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Data"
                              handleCompany={handleEntity}
                              filteredCategory={
                                BusinessprocessesasanAPIAPIasaProductANDData
                              }
                            />
                          </div>

                   
                        </div>
                      </div>
                      <div className="landscape-container">
                        <div className="landscape-category-container">
                          <div className="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Email/Messaging/Communications Platforms as a Service"
                              handleCompany={handleEntity}
                              filteredCategory={
                                BusinessprocessesasanAPIAPIasaProductANDEmailMessaging
                              }
                            />
                          </div>
                          <div className="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Payments"
                              handleCompany={handleEntity}
                              filteredCategory={
                                BusinessprocessesasanAPIAPIasaProductANDPayments
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="landscape-container">
                        <div className="landscape-category-container">
                          <div className="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="AI/ML"
                              handleCompany={handleEntity}
                              filteredCategory={
                                BusinessprocessesasanAPIAPIasaProductANDAIML
                              }
                            />
                          </div>

                          <div className="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="E-commerce"
                              handleCompany={handleEntity}
                              filteredCategory={
                                BusinessprocessesasanAPIAPIasaProductANDEcommerce
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="landscape-container">
                        <div className="landscape-category-container">
                          <div className="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Accounting"
                              handleCompany={handleEntity}
                              filteredCategory={
                                BusinessprocessesasanAPIAPIasaProductANDAccounting
                              }
                            />
                          </div>
                          <div className="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Audio/Visual"
                              handleCompany={handleEntity}
                              filteredCategory={
                                BusinessprocessesasanAPIAPIasaProductANDAudioAndVideo
                              }
                            />
                          </div>


                          <div className="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Legal/Regulatory"
                              handleCompany={handleEntity}
                              filteredCategory={
                                BusinessprocessesasanAPIAPIasaProductANDLegalRegulatory
                              }
                            />
                          </div>
                         

                 {/*          <div className="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Identity verification/KYC"
                              handleCompany={handleEntity}
                              filteredCategory={
                                BusinessprocessesasanAPIAPIasaProductANDIdentityverificationKYC
                              }
                            />
                          </div> */}
                        </div>
                      </div>
                      <div className="lanscape-container">
                        <div className="landscape-category-container">
                        <div className="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Data governance/Data management"
                              handleCompany={handleEntity}
                              filteredCategory={
                                BusinessprocessesasanAPIAPIasaProductANDDatagovernanceDatamanagement
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="landscape-container">
                        <div className="landscape-category-container">
                          <div className="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Forms"
                              handleCompany={handleEntity}
                              filteredCategory={
                                BusinessprocessesasanAPIAPIasaProductANDOnlineForms
                              }
                            />
                          </div>

                          <div className="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Human-as-a-service"
                              handleCompany={handleEntity}
                              filteredCategory={
                                BusinessprocessesasanAPIAPIasaProductANDHumanasaservice
                              }
                            />
                          </div>

                          <div className="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Human Resources"
                              handleCompany={handleEntity}
                              filteredCategory={
                                BusinessprocessesasanAPIAPIasaProductANDHumanresources
                              }
                            />
                          </div>


                          <div className="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Search"
                              handleCompany={handleEntity}
                              filteredCategory={
                                BusinessprocessesasanAPIAPIasaProductANDSearch
                              }
                            />
                          </div>

                          <div className="landscape-subcategory-box landscape-subcategory-box-BusinessprocessesasanAPIAPIasaProduct">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Time/Calendar"
                              handleCompany={handleEntity}
                              filteredCategory={
                                BusinessprocessesasanAPIAPIasaProductANDTimeCalendar
                              }
                            />
                          </div>
                        </div>
                      </div>{" "}
                      {/* landscape container */}
                    </div>
                  </div>
                </div>{" "}
                {/* col-md-12 */}
                <div className="col-md-12 my-1">
                  <div className="home-main-container ">
                    <div className="bg-dark-company-color">
                      <span
                        className="text-white"
                        data-tooltip-content={integrationPlatformDescription}
                        data-tooltip-id="category-tooltip"
                      >
                        Integration Platform <br /> as a Service (
                        {IntegrationPlatformAsAService.length})
                      </span>
                    </div>
                    <div className="category-container ">
                      <div className="landscape-container">
                        <div className="landscape-category-container">
                          <div className="landscape-subcategory-box landscape-subcategory-box-IntegrationPlatformAsAService ">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="API Aggregators (Finance)"
                              handleCompany={handleEntity}
                              filteredCategory={
                                IntegrationPlatformAsAServiceANDAPIAggregatorsFinance
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div className="landscape-container">
                        <div className="landscape-category-container">
                          <div className="landscape-subcategory-box landscape-subcategory-box-IntegrationPlatformAsAService">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Automation/Orchestration"
                              handleCompany={handleEntity}
                              filteredCategory={
                                IntegrationPlatformAsAServiceANDAutomationOrchestration
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div className="landscape-container">
                        <div className="landscape-category-container">
                          <div className="landscape-subcategory-box landscape-subcategory-box-IntegrationPlatformAsAService">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="API Aggregators (General)"
                              handleCompany={handleEntity}
                              filteredCategory={
                                IntegrationPlatformAsAServiceANDAPIAggregators
                              }
                            />
                          </div>
                          <div className="landscape-subcategory-box landscape-subcategory-box-IntegrationPlatformAsAService">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Database-as-a-service"
                              handleCompany={handleEntity}
                              filteredCategory={
                                IntegrationPlatformAsAServiceANDDatabaseasaservice
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* col-md-12 */}
                <div className="col-md-12 my-1">
                  <div className="home-main-container ">
                    <div className="bg-dark-company-color">
                      <span
                        className="text-white"
                        data-tooltip-content={verticalApiDescription}
                        data-tooltip-id="category-tooltip"
                      >
                        Vertical API <br /> Abstractions (
                        {VerticalAPIAbstractions.length})
                      </span>
                    </div>
                    <div className="category-container ">
                      <div className="landscape-container">
                        <div className="landscape-category-container">
                          <div className="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Finance"
                              handleCompany={handleEntity}
                              filteredCategory={
                                VerticalAPIAbstractionsANDFinance
                              }
                            />
                          </div>
                          <div className="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Healthcare"
                              handleCompany={handleEntity}
                              filteredCategory={
                                VerticalAPIAbstractionsANDHealthcare
                              }
                            />
                          </div>
                   {/*        <div className="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Login"
                              handleCompany={handleEntity}
                              filteredCategory={VerticalAPIAbstractionsANDLogin}
                            />
                          </div> */}

                        </div>
                      </div>

                      <div className="landscape-container">
                        <div className="landscape-category-container">
                        <div className="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Marketing/Analytics"
                              handleCompany={handleEntity}
                              filteredCategory={
                                VerticalAPIAbstractionsANDMarketingAnalytics
                              }
                            />
                          </div>
                          <div className="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Cloud Storage"
                              handleCompany={handleEntity}
                              filteredCategory={
                                VerticalAPIAbstractionsANDCloudStorage
                              }
                            />
                          </div>

                          <div className="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Delivery/Transport/Logistics"
                              handleCompany={handleEntity}
                              filteredCategory={
                                VerticalAPIAbstractionsANDDeliveryAPIs
                              }
                            />
                          </div>

                          <div className="landscape-subcategory-box landscape-subcategory-box-VerticalAPIAbstractions">
                            {data <= 0 && <Loader />}
                            <HomepageSubcategory
                              subcategoryName="Smart Home/Facilities"
                              handleCompany={handleEntity}
                              filteredCategory={
                                VerticalAPIAbstractionsANDSmartHome
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
