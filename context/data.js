

export const newModel = {
  "API Lifecycle": {
    description: "Components that enable the design, development, testing, deployment and use of APIs",
    color: '',
    categories: {
      "API Code Tools": {
        description: "Tools that manage the API code base",
        color: "",
        subcategories: [
          {
            name: 'API client',
            description: "Tools that help explore, test, and debug APIs",
            color: "",
          },
        {
          name: 'Source code',
          description: "Tools that store and manage the source code of an API",
          color: "",
        },
   
        ]
       },
       "API Design": {
        description: "Tools that support best practice in the design of APIs",
        color: "",
        subcategories: [
        {
          name: 'API design tools',
          description: "Tools to support the design of an API",
          color: "",
        },
        {
          name: 'API linters',
          description: "Tools that check that an API has been designed to agreed standards",
          color: "",
        },
        {
          name: 'API mocking tools',
          description: "Tools that allow an API to be simulated for testing",
          color: "",
        },

        ]
       },
      "API Gateways/Management": {
      description: "Tools that enable APIs to be implemented between two or more parties",
      color: "",
      subcategories: [
      {
        name: 'API gateways',
        description: "A tool that takes an API call, routes it to defined services, collects the response and delivers the results ",
        color: "",
      },
      {
        name: 'API management solutions',
        description: "Tools that enable a comprehensive range of tasks involved in managing APIs for an organisation including security, access, usage, and monetisation",
        color: "",
      },
      ]
     },

     "APIOps": {
      description: "Tooling that helps manage the operations and deployment of APIs",
      color: "",
      subcategories: [
        {
          name: 'APM',
          description: "Application Program Management tools able to monitor aspects of API performance",
          color: "",
        },
      {
        name: 'API observability',
        description: "Tools that help measure the performance of APIs (such as uptime or error rates)",
        color: "",
      },
   
      {
        name: 'CI/CD',
        description: "Tools that support continuous integration and continuous development of APIs as they are deployed",
        color: "",
      },
      ]
     },
     "Developer Experience": {
      description: "Tooling aimed at improving the Developer Experience and making it easier for developers to use APIs",
      color: "",
      subcategories: [
        {
          name: 'API catalogs',
          description: "Tools that help the creation and management of API Catalogs",
          color: "",
        },
        {
          name: 'API developer portals',
          description: "Tools that help the creation and management of developer portals (internal or external)",
          color: "",
        },
      {
        name: 'API documentation',
        description: "Tools that assist in creating, managing and publishing API documentation",
        color: "",
      },
  
      {
        name: 'API sandboxes',
        description: "Tools that help create and manage sandboxes where APIs can be tested in a non-production environment or can be monitored in a regulatory environment",
        color: "",
      },
      {
        name: 'API SDK tools',
        description: "Tools that help create and manage SDKs from APIs",
        color: "",
      },

      ]
     },
     "Security Adjacent": {
      description: "Tooling that has multiple purposes in the API Lifecycle but that can be used to enhance security management",
      color: "bg-section-security",
      subcategories: [
        {
          name: 'API Analytics/Monitoring',
          description: "Tools that help measure the use of APIs (such as rate limiting) and developer adoption, etc",
          color: "",
        },
        {
          name: 'Access & Identity management',
          description: "Policy tooling that ensures access to API resources is limited to those with agreed permission roles and needs",
          color: "",
        },

      {
        name: 'API testing',
        description: "Tools that test the rigour of APIs against industry best practices",
        color: "",
      },

      {
        name: 'Identity verification/KYC',
        description: "Tools that verify the identity of the API user (producers or consumers)",
        color: "",
      },
      {
        name: 'Login',
        description: "Tools that ensure access to APIs is managed securely",
        color: "",
      },


      ]
     },
     "Security Embedded": {
      description: "Tooling to enhance security, often added as features or additional elements to other products",
      color: "bg-section-security",
      subcategories: [
      {
        name: 'Vulnerability identification/scanners',
        description: "Open source projects and other tools to enhance security ops",
        color: "",
      },
      {
        name: 'Web Application Firewalls',
        description: "Products and services that apply rules-based automations and policies to assess and reduce API security risks such as Denial of Service attacks",
        color: "",
      },
      ]
     },
      "Security Pureplay": {
      description: "Products and services designed to address API security risks and vulnerabilities",
      color: "bg-section-security",
      subcategories: [
        {
          name: 'API Discovery & Risk management',
          description: "Tooling that enables APIs and endpoints to be identified within systems where they are not documented or officially exposed, and analysed in terms of the exposure risks they create",
          color: "",
        },
      {
        name: 'API Security',
        description: "Tools focused on ensuring that APIs are secure",
        color: "",
      },
      {
        name: 'API Threat Management',
        description: "Tools that assess and manage threats to the security of APIs",
        color: "",
      },
      {
        name: 'Privacy Technology',
        description: "Tools that ensure that data and functionalities enabled via API are protected",
        color: "",
      },
      {
        name: 'Vulnerability Management',
        description: "Tooling to manage potential API security vulnerabilities",
        color: "",
      },

      ]
     },
    }
  },
  "Infrastructure": {
    description: "Infrastructure components needed to design and deploy APIs",
    color: '',
    categories: {
      "Backend Building Tools": {
        description: "Tools that assist existing or new infrastructure to implement API-enabled architectures ",
        color: "",
        subcategories: [
        {
          name: 'Banking/Finance/Insurance backends',
          description: "Specific tooling designed for banking, finance and insurance industries to enable digitisation and open ecosystem participation",
          color: "",
        },
        {
          name: 'Blockchain',
          description: "API tooling that enables blockchain-enabled infrastructure to operate ",
          color: "",
        },
        {
          name: 'Headless CMS',
          description: "Content management systems designed in a way that each content component is available via an API to be composed in multiple forms as required",
          color: "",
        },

        {
          name: 'Mobile Backend as a Service',
          description: "API-enabled architecture used to enable mobile applications",
          color: "",
        },
        {
          name: 'Serverless',
          description: "Autoscaling and cloud-based infrastructure that is auto-generated as needed using APIs",
          color: "",
        },
        ]
       },

     "Databases": {
      description: "Database tools and services",
      color: "",
      subcategories: [
        {
          name: 'Cloud Storage',
          description: "Cloud storage services commonly used as part of API-enabled architecture",
          color: "",
        },
      {
        name: 'Databases',
        description: "Databases commonly used as part of API-enabled architecture",
        color: "",
      },

      {
        name: 'Database-as-a-service',
        description: "SaaS-model databases that enable data to be stored, often via API or using API integrations to combine multiple databases into one database service",
        color: "",
      },
      ]
     },

 
     "Streaming/Event Architecture": {
      description: "Integration of components to read data in real-time to deliver up-to-date results",
      color: "",
      subcategories: [
        {
          name: 'Event architeture',
          description: "IT infrastructure focused on enabling an events-based approach to operate",
          color: "",
        },
        {
          name: 'IoT Platforms',
          description: "Tools and platforms specifically designed to support the Internet of Things",
          color: "",
        },
      {
        name: 'Streaming tools',
        description: "Tools that enable data to be streamed in event-driven architecture",
        color: "",
      },
      {
        name: 'Webhook tools',
        description: "Webhook tools that enable ongoing review of APIs and sharing of data and service updates without constant API calls being made",
        color: "",
      },

      ]
     },
     "Sustainability": {
      description: "Tooling aimed at monitoring and improving the sustainability of API-enabled infrastructures",
      color: "",
      subcategories: [
      {
        name: 'API sustainability tools',
        description: "Tools that monitor and provide support for API-enabled sustainability approaches to IT infrastructure",
        color: "",
      },
      ]
     },
     "Workflow": {
      description: "Tools and services that support workflows to be created with APIs",
      color: "",
      subcategories: [

      {
        name: 'AI/ML tools',
        description: "API tooling that enables Artificial Intelligence and Machine Learning initiatives to be implemented across an organisation's IT infrastructure",
        color: "",
      },
      {
        name: 'API auto-creators',
        description: "Tools designed to help automatically create APIs from a database or web service",
        color: "",
      },
      {
        name: 'No-code tools',
        description: "No and low code tools that enable the creation of apps and workflows using APIs from other services or specifically created APIs",
        color: "",
      },
      {
        name: 'Orchestration',
        description: "Tools that assist with API orchestration or that orchestrate infrastructure components via APIs",
        color: "",
      },


      ]
     },
    }
  },
  "API Products": {
    description: "API products built to expose a specific functionality or dataset to enable use programmatically in apps, websites, workflows, AI systems, and so on",
    color: '',
    categories: {
      "Audio-visual": {
        description: "APIs that support audio-visual functionalities",
        color: "",
        subcategories: [
        {
          name: 'Audio',
          description: "APIs that enable audio components to be managed programmatically",
          color: "",
        },
        {
          name: 'Camera/Video',
          description: "APIs that enable cameras and videos functionality programmatically",
          color: "",
        },
        {
          name: 'Image processing',
          description: "APIs that enable image processing",
          color: "",
        },
        ]
       },
       "Business Support": {
        description: "APIs that support various business functionalities or processes",
        color: "",
        subcategories: [
          {
            name: 'Accounting',
            description: "APIs that support accounting functionalities",
            color: "",
          },
        {
          name: 'AI',
          description: "APIs that enable AI functionalities to be integrated into an organisation's IT infrastructure or products/services",
          color: "",
        },
        {
          name: 'Data',
          description: "APIs that enable specific datasets to be exposed for use programmatically",
          color: "",
        },
        {
          name: 'ESG',
          description: "APIs that support the collation and use of Environmental, Social, Governance data systems",
          color: "",
        },
        {
          name: 'Human-as-a-service',
          description: "APIs that enable hiring and service delivery by humans performing tasks",
          color: "",
        },

        {
          name: 'Ecommerce',
          description: "APIs that enable ecommerce functionalities (except payments, see separate subcategory)",
          color: "",
        },
        {
          name: 'Forms',
          description: "APIs that enable form design and data collection",
          color: "",
        },
        {
          name: 'Legal',
          description: "APIs that support delivery of legal functions",
          color: "",
        },
        {
          name: 'Marketing',
          description: "APIs that support all aspects of marketing functions",
          color: "",
        },
        {
          name: 'Metrics',
          description: "APIs that assist with the collection and analysis of data and metrics from other systems",
          color: "",
        },

        {
          name: 'Regulatory compliance',
          description: "APIs that support adherence to or monitoring of regulations",
          color: "",
        },
        {
          name: 'Time/calendar',
          description: "Products and tools that enable time and date integration via API, and that enable APIs for calendar integrations   ",
          color: "",
        },
        {
          name: 'Training and Education',
          description: "APIs that support training and education functionalities",
          color: "",
        },
        {
          name: 'Search',
          description: "APIs that enable search functionality",
          color: "",
        },

        ]
       },
       "Delivery/Transport/Logistics": {
        description: "APIs that assist with delivery, transport, and logistics functionalities programmatically",
        color: "",
        subcategories: [
        {
          name: 'Delivery',
          description: "APIs that enable delivery of goods and services programmatically or via mobile or computer",
          color: "",
        },
        {
          name: 'Logistics',
          description: "APIs that support supply chain management programmatically",
          color: "",
        },
        {
          name: 'Transport',
          description: "APIs that support all aspects of transport including air travel, trains, roads, parking, etc to be managed programmatically",
          color: "",
        },

        ]
       },
     "Email/Messaging/CPaaS": {
      description: "Integrates Communications Platforms as a Service, cloud-based model to add video, voice, and messaging to existing business software via APIs ",
      color: "",
      subcategories: [
        {
          name: 'CPaaS',
          description: "APIs that enable multiple communication services to be delivered programmatically from a platform service",
          color: "",
        },
      {
        name: 'Email',
        description: "APIs that enable email to be managed programmatically",
        color: "",
      },

      {
        name: 'VoIP',
        description: "APIs that enable voice-over-internet functionalities",
        color: "",
      },
      {
        name: 'Text/SMS',
        description: "APIs that enable texting and SMS functionalities",
        color: "",
      },
      ]
     },
     "Finance": {
      description: "APIs that enable finance functionalities",
      color: "",
      subcategories: [
        {
          name: 'HR and Payroll',
          description: "APIs that allow human resources or payroll functionalities to be delivered programmatically",
          color: "",
        },
        {
          name: 'Insurance',
          description: "APIs that enable insurance functionalities to be delivered programmatically",
          color: "",
        },
      {
        name: 'Payments',
        description: "APIs that enable payments functionalities to be delivered programmatically",
        color: "",
      },

      {
        name: 'Tax',
        description: "APIs that calculate and enable tax regulations to be managed",
        color: "",
      },
      ]
     },
     "Health": {
      description: "APIs that support healthcare solutions",
      color: "",
      subcategories: [
      {
        name: 'Healthcare',
        description: "APIs that support healthcare solutions",
        color: "",
      },
      ]
     },
     "IoT": {
      description: "Internet of Things tooling",
      color: "",
      subcategories: [
      {
        name: 'Automative/Vehicles',
        description: "APIs that enable cars, fleets, bicycles and other vehicles to be managed via mobile or computer",
        color: "",
      },
      {
        name: 'Smart Home',
        description: "APIs that enable a home equipped with heating, lighting, and other electronic devices to be remotely controlled via mobile or computer",
        color: "",
      },
      {
        name: 'Smart Facilities',
        description: "APIs that enable venues and large facilities equipped with heating, lighting, and other electronic devices to be remotely controlled via mobile or computer",
        color: "",
      },
      ]
     },
     "Travel": {
      description: "APIs that support travel and accommodation services to be managed programmatically",
      color: "",
      subcategories: [
      {
        name: 'Travel',
        description: "APIs that support travel and accommodation services to be managed programmatically",
        color: "",
      },
      ]
     },
    }
  },
  "API Consumption": {
    description: "API products built to expose a specific functionality or dataset to enable use programmatically in apps, websites, workflows, AI systems, and so on",
    color: '',
    categories: {
     "Aggregators/Integration Platforms": {
      description: "Tooling that enables APIs to be consumed",
      color: "",
      subcategories: [
        {
          name: 'Financial Aggregators',
          description: "Aggregation platforms that normalise and standardise a broader range of bank and fintech APIs into a core suite of API tools",
          color: "",
        },
    
      {
        name: 'General Aggregators',
        description: "Aggregation platforms that normalise and standardise a range of APIs into a core suite of API tools",
        color: "",
      },
      {
        name: 'Government Aggregators',
        description: "Aggregation platforms that normalise and standardise a broader range of public service APIs into a core suite of API tools",
        color: "",
      },

      {
        name: 'Health Aggregators',
        description: "Aggregation platforms that normalise and standardise a broader range of health provider and health data APIs into a core suite of API tools",
        color: "",
      },
      {
        name: 'IPaaS/ESB',
        description: "Integration Platform as a Service and Enterprise Service Bus tooling that enables APIs to be consumed and integrated into existing IT infrastructures",
        color: "",
      },
     
      ]
     },
     "Marketplaces": {
      description: "Marketplaces that make it possible to discover and use APIs",
      color: "",
      subcategories: [
      {
        name: 'API Marketplaces',
        description: "Catalogs and marketplaces and other tooling that makes APIs discoverable",
        color: "",
      },
      {
        name: 'Data Marketplaces',
        description: "Catalogs and marketplaces and other tooling that makes data discoverable",
        color: "",
      },
      ]
     },
     "Licensing": {
      description: "Tooling that enables APIs to be consumed",
      color: "",
      subcategories: [
      {
        name: 'Data Licensing',
        description: "",
        color: "",
      },
      {
        name: 'API Licensing',
        description: "Tooling that stipulates and or monitors the conditions under which an API may be used",
        color: "",
      },

      ]
     },
    }
  },
  "API Knowledge": {
    description: "Tools and services that support the maturity of the API industry by sharing and expanding knowledge amongst API practitioners",
    color: '',
    categories: {
      "API Consulting": {
        description: "Services that support the development and implementation of APIs",
        color: "",
        subcategories: [
        {
          name: 'API consultants',
          description: "Consultants that specialise in any stage of the API journey, from platform mindset thinking to API strategy to API technical design and implementation",
          color: "",
        },
        {
          name: 'Integration Partners',
          description: "Consultations that specialise in supporting organisations to modernise their architecture by integrating API-enabled architecture and tooling into their stack",
          color: "",
        },
        ]
       },
       "Assessment Tools": {
        description: "Tooling that helps measure the API industry or that supports the measuring of API maturity and best practices",
        color: "",
        subcategories: [
        {
          name: 'Indices',
          description: "Published indices that track some aspect of the API industry",
          color: "",
        },
        {
          name: 'Scorecards',
          description: "Scorecards and assessment tools that allow organisations to measure their maturity or other characteristics regarding API adoption and use",
          color: "",
        },
        ]
      },
      "Media": {
        description: "Entities focused on publishing or sharing knowledge about the API industry and API best practices",
        color: "",
        subcategories: [
          {
            name: 'Books',
            description: "Books that discuss APIs",
            color: "",
          },
          {
            name: 'Conferences',
            description: "Conferences focused on API strategy and practice",
            color: "",
          },
        {
          name: 'Newsletters',
          description: "Newsletters with a specific focus on APIs or brodare tech newsletters that have a specific section on APIs",
          color: "",
        },
        {
          name: 'Training courses',
          description: "Training courses specifically aimed at providing API best practice skills",
          color: "",
        },
        {
          name: 'Video sites & Podcasts',
          description: "Video channels and podcasts focused specifically on APIs and the API industry",
          color: "",
        },      
        {
          name: 'Websites',
          description: "Websites that focus primarily on APIs and share resources",
          color: "",
        },
       
        ]
      },
      "Organisations": {
        description: "Organisations supporting API providers and/or consumers to ensure their participation in decision-making and to advocate for their right to generate value from APIs",
        color: "",
        subcategories: [
          {
            name: 'Consumer associations',
            description: "Consumer associations that have a track record in having discussed the impact of APIs on the general public or specific sub-populations",
            color: "",
          },
        {
          name: 'Industry Associations',
          description: "Industry associations that are open to API tools providers and/or that advocate on issues relevant to the API industry",
          color: "",
        },
        {
          name: 'Industry thinktanks',
          description: "Thinktanks and committees that focus specifically on issues relevant to the API industry",
          color: "",
        },

        ]
      },
      "Research": {
        description: "Bodies focused on developing and sharing research on the API industry",
        color: "",
        subcategories: [
        {
          name: 'Academics',
          description: "Researchers and academics working specifically on API-related research",
          color: "",
        },
        {
          name: 'Market research',
          description: "Market research companies and consultants that focus on the API industry or who produce reports specifically on aspects of the API industry",
          color: "",
        },
        ]
      },

    }
  },
  "Standards, Protocols & Specifications": {
    description: "Components that enable standardisation of APIs",
    color: '',
    categories: {
     "API Standards": {
      description: "Components relevant to maintaining API standards",
      color: "",
      subcategories: [
        {
          name: 'API standards',
          description: "Standards that are available for use when building APIs",
          color: "",
        },
      {
        name: 'Standards & governing bodies',
        description: "Standards and governing bodies that own specific API standards and ensure they are maintained, updated and socialised",
        color: "",
      },
      ]
     },
     "API Specifications": {
      description: "Components relevant to developing and maintaining API specifications",
      color: "",
      subcategories: [
      {
        name: 'API protocols & specifications',
        description: "Protocols and specifications that can be used to build APIs",
        color: "",
      },
      {
        name: 'API protocol/specification tools',
        description: "Tools that support the use of API protocols and specifications",
        color: "",
      },
      ]
     },
     "Governance": {
      description: "Components relevant to maintaining API standards",
      color: "",
      subcategories: [
        {
          name: 'API governance',
          description: "Tools that support managing APIs consistently",
          color: "",
        },
      {
        name: 'Data governance',
        description: "Tools that support data to be managed consistently, ethically, securely and responsibly across the data journey",
        color: "",
      },
      {
        name: 'Data management',
        description: "Tools that support data usage and data sharing",
        color: "",
      },

      ]
     },
    }
  },
  "Regulations": {
    description: "Regulations that focus on the API industry",
    color: '',
    categories: {
     "Regulations": {
      description: "Regulations that focus on the API industry ",
      color: "",
      subcategories: [
      {
        name: 'API-specific regulations',
        description: "Regulations that mandate or recommend that APIs must be used for data exchange or other purposes",
        color: "",
      },
      {
        name: 'Government bodies/authorities managing API regulations',
        description: "Government bodies and authorities that are responsible for ensuring that API-specific regulations are upheld and that stakeholders act according to regulations",
        color: "",
      },
      ]
     }
    }
  },
}