export const cluster = {
  "API Lifecycle Platform": {
    // ["Access Level and Identity Management",
    // "API Analytics/Monitoring",],
    // "API Documentation",
    // "API Security",
    description: "Essential tools to manage the API lifecycle: from design to testing, and including access and identity, security, analytics, and developer portals. Also includes consulting companies that assist API providers define API strategies and build APIs, and the infrastructure needed to enable event-driven architectures including IoT platforms.",
    color: "bg-dark-company-color",
    categories: {
      0: ["API Management/API Gateway", "API Consulting"],
      1: ["API Design/Documentation Platforms"],
      2: ["API Developer Portals", "Streaming/Event Architecture"],
      // "API Testing",
      3: ["IoT Platforms/Networks/Devices"],
    },
  },
  "API Lifecycle (Security Pureplay)": {
    description: '',
    color: "bg-company-dark-purple-color",
    categories: {
      0: ["API Security"],
      1: ["API Threat Management"],
      2: ["API Discovery and Risk Management", "Vulnerability Management"],
    },
  },
  "API Lifecycle (Embedded Security)": {
    description: '',
    color: "bg-company-dark-purple-color",
    categories: {
      0: ["Vulnerability Identification/scanners", "Web Application Firewalls"],
    },
  },
  "API Lifecycle (Adjacent Security Solutions)": {
    description: '',
    color: "bg-company-dark-purple-color",
    categories: {
      0: ["API Analytics/Monitoring"],
      1: ["Identity verification/KYC"],
      2: ["Login", "Access and Identity Management"],
    },
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
    description: "Serverless, cloud, mobile-based and blockchain backend infrastructure and cloud-based API infrastructures. Also includes headless CMS and backend infrastructure built specifically for the banking/finance/insurance industry.",
    color: "bg-dark-company-color",
    categories: {
      0: ["API Deployment/Back-end Building"],
      1: ["Banking/Finance/Insurance Backends"],
      2: ["Blockchain"],
      3: ["Headless CMS"],
      4: ["Infrastructure/Cloud/Serverless APIs"],
      5: ["Mobile Backend as a Service"],
    },
  },
  "Business processes as an API/API-as-a-Product": {
    description: 'API products specifically available to be used as service components that enable business processes and functionalities to be composed into IT architectures. Includes the use of data as a service, payments, communication platforms, identity verification, and so on.',
    color: "bg-dark-company-color",
    categories: {
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
  },
  "Integration Platform as a Service": {
    description: 'API aggregators and automation/orchestration services that help create workflows and standardised integrations to facilitate use of APIs in internal IT architectures. Platforms that provide a single point of integration for APIs that have different value propositions.',
    color: "bg-dark-company-color",
    categories: {
      0: ["API Aggregators (General)"],
      1: ["Automation/Orchestration"],
      2: ["Database-as-a-service", "API Aggregators (Finance)"],
    },
  },
  "Vertical API Abstraction": {
    description: 'Platforms that take a value proposition from one use case, such as cloud storage, and abstracts all available APIs into one API.',
    color: "bg-dark-company-color",
    categories: {
      0: ["Finance", "Healthcare"],
      1: [
        "Marketing/Analytics",
        "Cloud Storage",
        "Delivery/Transport/Logistics",
        "Smart Home/Facilities",
      ],
    },
  },
};


export const newModel = {
  "API lifecycle": {
    description: "",
    color: 'bg-company-dark-purple-color',
    categories: {
      "API Gateways/Management": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'API gateways',
        description: "",
        color: "",
      },
      {
        name: 'API management solutions',
        description: "",
        color: "",
      },
      ]
     },
      "API Design": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'API design tools',
        description: "",
        color: "",
      },
      {
        name: 'API mocking tools',
        description: "",
        color: "",
      },
      {
        name: 'API linters',
        description: "",
        color: "",
      },
      ]
     },
      "API Code Tools": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'Source code',
        description: "",
        color: "",
      },
      {
        name: 'API client',
        description: "",
        color: "",
      },
      ]
     },
      "Security Pureplay": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'API Security',
        description: "",
        color: "",
      },
      {
        name: 'API Threat Management',
        description: "",
        color: "",
      },
      {
        name: 'API Discovery & Risk Management',
        description: "",
        color: "",
      },
      {
        name: 'Vulnerabilty Management',
        description: "",
        color: "",
      },
      {
        name: 'Privacy Technology',
        description: "",
        color: "",
      },
      ]
     },
      "Embedded Security": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'Vulnerability identification/scanners',
        description: "",
        color: "",
      },
      {
        name: 'Web Application Firewalls',
        description: "",
        color: "",
      },
      ]
     },
      "Security Adjacent": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'API testing',
        description: "",
        color: "",
      },
      {
        name: 'Login',
        description: "",
        color: "",
      },
      {
        name: 'Access & Identity management',
        description: "",
        color: "",
      },
      {
        name: 'API Monitoring',
        description: "",
        color: "",
      },
      {
        name: 'API Analytics/Monitoring',
        description: "",
        color: "",
      },
      ]
     },
      "APIOps": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'API observability',
        description: "",
        color: "",
      },
      {
        name: 'APM',
        description: "",
        color: "",
      },
      {
        name: 'CI/CD',
        description: "",
        color: "",
      },
      ]
     },
      "Developer Experience": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'API sustainability tools',
        description: "",
        color: "",
      },
      ]
     },
      
    }
  },
  "Infrastructure": {
    description: "",
    color: 'bg-company-dark-purple-color',
    categories: {
     "Databases": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'Databases',
        description: "",
        color: "",
      },
      {
        name: 'Cloud Storage',
        description: "",
        color: "",
      },
      {
        name: 'Database-as-a-service',
        description: "",
        color: "",
      },
      ]
     },
     "Wokflow": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'No-code tools',
        description: "",
        color: "",
      },
      {
        name: 'API auto-creators',
        description: "",
        color: "",
      },
      {
        name: 'Orchestration',
        description: "",
        color: "",
      },
      {
        name: 'AI/ML tools',
        description: "",
        color: "",
      },
      {
        name: 'IPaaS',
        description: "",
        color: "",
      },
      ]
     },
     "Backend Building Tools": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'Banking/Finance/Insurance backends',
        description: "",
        color: "",
      },
      {
        name: 'Headless CMS',
        description: "",
        color: "",
      },
      {
        name: 'Blockchain',
        description: "",
        color: "",
      },
      {
        name: 'Mobile Backend as a Service',
        description: "",
        color: "",
      },
      {
        name: 'Serverless',
        description: "",
        color: "",
      },
      ]
     },
     "Streaming/Event Architecture": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'Streaming tools',
        description: "",
        color: "",
      },
      {
        name: 'Webhook tools',
        description: "",
        color: "",
      },
      {
        name: 'Event architeture',
        description: "",
        color: "",
      },
      {
        name: 'IoT Platforms',
        description: "",
        color: "",
      },
      ]
     },
     "Sustainability": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'API sustainability tools',
        description: "",
        color: "",
      },
      ]
     },
    }
  },
  "API Products": {
    description: "",
    color: 'bg-company-dark-purple-color',
    categories: {
     "Email/Messaging/CPaaS": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'Email',
        description: "",
        color: "",
      },
      {
        name: 'CPaaS',
        description: "",
        color: "",
      },
      {
        name: 'VoIP',
        description: "",
        color: "",
      },
      ]
     },
     "Finance": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'Payments',
        description: "",
        color: "",
      },
      {
        name: 'HR and Payroll',
        description: "",
        color: "",
      },
      {
        name: 'Insurance',
        description: "",
        color: "",
      },
      {
        name: 'Tax',
        description: "",
        color: "",
      },
      ]
     },
     "Business Support": {
      description: "",
      color: "",
      subcategories: [
      {
        name: '',
        description: "",
        color: "",
      },
      {
        name: '',
        description: "",
        color: "",
      },
      {
        name: '',
        description: "",
        color: "",
      },
      ]
     },
     "Audio-visual": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'Audio',
        description: "",
        color: "",
      },
      {
        name: 'Cameras',
        description: "",
        color: "",
      },
      {
        name: 'Image processing',
        description: "",
        color: "",
      },
      ]
     },
     "Delivery/Transport/Logistics": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'Delivery',
        description: "",
        color: "",
      },
      {
        name: 'Transport',
        description: "",
        color: "",
      },
      {
        name: 'Logistics',
        description: "",
        color: "",
      },
      ]
     },
     "Travel": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'Travel',
        description: "",
        color: "",
      },
      ]
     },
     "IoT": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'Automative/Vehicles',
        description: "",
        color: "",
      },
      {
        name: 'Smart Home',
        description: "",
        color: "",
      },
      {
        name: 'Smart Facilities',
        description: "",
        color: "",
      },
      ]
     },
    }
  },
  "API Consumption": {
    description: "",
    color: 'bg-company-dark-purple-color',
    categories: {
     "Aggregators/Integration Platforms": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'IPaaS',
        description: "",
        color: "",
      },
      {
        name: 'Financial Aggregators',
        description: "",
        color: "",
      },
      {
        name: 'Health Aggregators',
        description: "",
        color: "",
      },
      {
        name: 'Government Aggregators',
        description: "",
        color: "",
      },
      {
        name: 'General Aggregators',
        description: "",
        color: "",
      },
      ]
     },
     "Marketplaces": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'API Marketplaces',
        description: "",
        color: "",
      },
      {
        name: 'Data Marketplaces',
        description: "",
        color: "",
      },
      ]
     },
     "Licensing": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'Data Licensing',
        description: "",
        color: "",
      },
      {
        name: 'API Licensing',
        description: "",
        color: "",
      },
      ]
     },
    }
  },
  "API Knowledge": {
    description: "",
    color: 'bg-company-dark-purple-color',
    categories: {
      "API Consulting": {
        description: "",
        color: "",
        subcategories: [
        {
          name: 'API consultants',
          description: "",
          color: "",
        },
        {
          name: 'Integration Partners',
          description: "",
          color: "",
        },
        ]
       },
     "Media": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'Newsletters',
        description: "",
        color: "",
      },
      {
        name: 'Video sites & Podcasts',
        description: "",
        color: "",
      },
      {
        name: 'Conferences',
        description: "",
        color: "",
      },
      {
        name: 'Books',
        description: "",
        color: "",
      },
      {
        name: 'Websites',
        description: "",
        color: "",
      },
      {
        name: 'Training courses',
        description: "",
        color: "",
      },
      ]
     },
     "Organisations": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'Industry Associations',
        description: "",
        color: "",
      },
      {
        name: 'Industry thinktanks',
        description: "",
        color: "",
      },
      {
        name: 'Consumer associations',
        description: "",
        color: "",
      },
      ]
     },
     "Research": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'Academics',
        description: "",
        color: "",
      },
      {
        name: 'Market research',
        description: "",
        color: "",
      },
      ]
     },
     "Assessment Tools": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'Indices',
        description: "",
        color: "",
      },
      {
        name: 'Scorecards',
        description: "",
        color: "",
      },
      ]
     },
    }
  },
  "Standards, Protocols & Specifications": {
    description: "",
    color: 'bg-company-dark-purple-color',
    categories: {
     "API Standards": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'Standards & governing bodies',
        description: "",
        color: "",
      },
      {
        name: 'API standards',
        description: "",
        color: "",
      },
      {
        name: 'Database-as-a-service',
        description: "",
        color: "",
      },
      ]
     },
     "API Specifications": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'API protocols & specifications',
        description: "",
        color: "",
      },
      {
        name: 'API protocol/specification tools',
        description: "",
        color: "",
      },
      ]
     },
     "Governance": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'Data governance',
        description: "",
        color: "",
      },
      {
        name: 'Data management',
        description: "",
        color: "",
      },
      {
        name: 'API governance',
        description: "",
        color: "",
      },
      ]
     },
    }
  },
  "Regulations": {
    description: "",
    color: 'bg-company-dark-purple-color',
    categories: {
     "Regulations": {
      description: "",
      color: "",
      subcategories: [
      {
        name: 'API-specific regulations',
        description: "",
        color: "",
      },
      {
        name: 'Government bodies/authorities managing API regulations',
        description: "",
        color: "",
      },
      ]
     }
    }
  },
}