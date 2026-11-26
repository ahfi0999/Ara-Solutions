/**
 * Google search titles and descriptions, from the SEO sheet ("Ara Seo Updates", November 2026).
 * Titles are written without the brand: the site adds " | ARA Solutions" to every title itself.
 * Keep descriptions to about 160 characters, or Google cuts them off.
 */
export type PageSeo = { title: string; description: string };

const pages: Record<string, PageSeo> = {
  '/': {
    // Title and description from the client (Nov 2026). The description is the client's full sentence (207
    // characters) on purpose: Google shows about the first 160 and cuts the rest.
    title: 'Staffing, Training & Placement in Hyderabad',
    description:
      'ARA Solutions connects growing businesses with the right talent while helping aspiring professionals build in-demand technology skills through practical training, hands-on learning, and placement assistance.',
  },
  '/services/': {
    title: 'IT & Non-IT Recruitment & Staffing Services',
    description:
      'ARA Solutions provides IT & Non-IT recruitment, fulltime staffing, Corp-to-Corp staffing and international hiring solutions for growing businesses.',
  },
  '/services/corp-to-corp/': {
    title: 'Corp-to-Corp (C2C) Staffing in Hyderabad',
    description:
      "Access skilled IT consultants through ARA Solutions' Corp-to-Corp (C2C) staffing in Hyderabad. Flexible vendor-to-vendor hiring for specialized project skills.",
  },
  '/services/fulltime-staffing/': {
    title: 'Fulltime Staffing (IT & Non-IT) in Hyderabad',
    description:
      'ARA Solutions provides IT and Non-IT fulltime staffing in Hyderabad. Hire qualified professionals across technology, sales, HR, finance and operations.',
  },
  '/services/rpo/': {
    title: 'Recruitment Process Outsourcing (RPO) in Hyderabad',
    description:
      "ARA Solutions' RPO services give growing businesses a dedicated recruitment team in Hyderabad, with custom SLAs, candidate screening and verification.",
  },
  '/services/international-consulting/': {
    title: 'International Recruitment Services in Hyderabad',
    description:
      'ARA Solutions supports international hiring with IT & Non-IT talent sourcing, candidate screening, background verification and cross-border recruitment coordination.',
  },
  '/training-placement/': {
    title: 'IT Training & Placement in Hyderabad',
    description:
      'IT training and placement in Hyderabad: Salesforce, ServiceNow, Workday, AI, data, cybersecurity and full stack courses with live classes and projects.',
  },
  '/training-placement/salesforce/': {
    title: 'Salesforce Training & Placement in Hyderabad',
    description:
      'Salesforce training in Hyderabad covering admin, Flow, Apex, LWC, integration and Agentforce: 8 modules with labs, certification prep and placement support.',
  },
  '/training-placement/servicenow/': {
    title: 'ServiceNow Training & Placement in Hyderabad',
    description:
      'ServiceNow training in Hyderabad covering admin, development, HRSD and AI: 31 modules with hands-on labs, CSA, CAD and CIS-HR exam prep and placement support.',
  },
  '/training-placement/ai-ml/': {
    title: 'AI and Machine Learning Course in Hyderabad',
    description:
      'AI and machine learning course in Hyderabad: Python, ML, deep learning, LLMs, RAG and fine-tuning, with deployed projects, live classes and placement support.',
  },
  '/training-placement/agentic-ai/': {
    title: 'Agentic AI Course in Hyderabad',
    description:
      'Agentic AI course in Hyderabad: build AI agents with tools, MCP, memory, LangGraph and CrewAI, plus guardrails, evaluation and deployment. Placement support.',
  },
  '/training-placement/cybersecurity/': {
    title: 'Cyber Security Course in Hyderabad',
    description:
      'Cyber security course in Hyderabad for SOC analyst roles: network, cloud and identity security, Splunk, Sentinel, Security+ prep and placement support.',
  },
  '/training-placement/full-stack-ai/': {
    title: 'MERN Stack Course in Hyderabad with AI',
    description:
      'MERN stack course in Hyderabad: React, Next.js, Node.js, Express and MongoDB with AI features, deployed projects, MongoDB exam prep and placement support.',
  },
  // From our keyword research for the client's Workday HCM page document (24 Nov 2026).
  '/training-placement/workday-hcm/': {
    title: 'Workday HCM Course in Hyderabad',
    description:
      'Workday HCM techno-functional course in Hyderabad: Core HCM, staffing, compensation, security, reports, calculated fields and EIB, with placement support.',
  },
  '/training-placement/workday-finance/': {
    title: 'Workday Finance Course in Hyderabad',
    description:
      'Workday Finance course in Hyderabad: FDM, worktags, general ledger, procure to pay, receivables and month-end close, with hands-on labs and placement support.',
  },
  '/training-placement/workday-integration/': {
    title: 'Workday Integration Course in Hyderabad',
    description:
      'Workday Integration course in Hyderabad: EIB, Core Connectors, Workday Studio, XSLT, SOAP, REST and RaaS, with hands-on projects and placement support.',
  },
  '/training-placement/servicenow-hrsd/': {
    title: 'ServiceNow HRSD Training in Hyderabad',
    description:
      'ServiceNow HRSD training in Hyderabad: HR cases, SLAs, lifecycle events and Employee Center, with CIS-HR exam prep, live classes and placement support.',
  },
  '/training-placement/servicenow-crm/': {
    title: 'ServiceNow CSM Training in Hyderabad',
    description:
      'ServiceNow CSM training in Hyderabad: a ServiceNow CRM course on cases, workspace, portal, Virtual Agent, Now Assist and CIS-CSM prep, with placement support.',
  },
  '/training-placement/servicenow-admin-platform/': {
    title: 'ServiceNow Admin Course in Hyderabad',
    description:
      'ServiceNow admin course in Hyderabad: users, ACLs, incident, problem and change, service catalog and Flow Designer, with CSA exam prep and placement support.',
  },
  '/training-placement/servicenow-itsm-development/': {
    title: 'ServiceNow Developer Course in Hyderabad',
    description:
      'ServiceNow developer course in Hyderabad: JavaScript, Glide API, ITSM scripting, integrations and portals, with CAD and CIS-ITSM prep and placement support.',
  },
  '/training-placement/servicenow-grc/': {
    title: 'ServiceNow GRC Training in Hyderabad',
    description:
      'ServiceNow GRC training in Hyderabad: policy and compliance, risk, audit, continuous monitoring and third-party risk, with CIS-RC prep and placement support.',
  },
  '/training-placement/servicenow-fdse/': {
    title: 'ServiceNow AI Agents Course in Hyderabad',
    description:
      'ServiceNow AI agents course in Hyderabad: build apps, AI skills and agents with AI Agent Studio and AI Skill Kit, with CAD exam prep and placement support.',
  },
  '/training-placement/servicenow-ba/': {
    title: 'ServiceNow Business Analyst Course Hyderabad',
    description:
      'ServiceNow Business Analyst course in Hyderabad: ITSM processes, discovery, user stories and UAT. No coding needed, with CSA practice and placement support.',
  },
  '/training-placement/data-science/': {
    title: 'Data Science Course in Hyderabad',
    description:
      'Data science course in Hyderabad: Python, statistics, machine learning, forecasting and model deployment, with 3 projects, live classes and placement support.',
  },
  '/training-placement/data-engineering/': {
    title: 'Data Engineering Course in Hyderabad',
    description:
      'Data engineering course in Hyderabad: SQL, PySpark, Databricks, Airflow, dbt, Kafka and cloud data services, with Databricks exam prep and placement support.',
  },
  '/training-placement/data-analytics/': {
    title: 'Data Analytics Course in Hyderabad',
    description:
      'Data analytics course in Hyderabad: Excel, SQL, Power BI with DAX, Tableau, Python and Copilot, with PL-300 exam prep, live classes and placement support.',
  },
  '/training-placement/ai-product-owner/': {
    title: 'AI Product Owner Course in Hyderabad',
    description:
      'AI product owner course in Hyderabad: Scrum, AI use cases, backlogs, prototypes, AI metrics and responsible AI. No coding, with PSPO prep and placement support.',
  },
  '/training-placement/python-full-stack/': {
    title: 'Python Full Stack Course in Hyderabad',
    description:
      'Python full stack course in Hyderabad: Django, FastAPI, React, PostgreSQL and AI features with RAG, plus PCAP exam prep, live classes and placement support.',
  },
  '/training-placement/java-full-stack/': {
    title: 'Java Full Stack Course in Hyderabad',
    description:
      'Java full stack course in Hyderabad: Spring Boot, Spring Security, microservices, React and Spring AI, with Oracle Java exam prep and placement support.',
  },
  '/training-placement/business-analyst-genai/': {
    title: 'Business Analyst Course in Hyderabad with AI',
    description:
      'Business analyst course in Hyderabad with GenAI: requirements, BPMN, Agile user stories, SQL, Power BI and AI tools, with ECBA prep and placement support.',
  },
  '/training-placement/salesforce-admin/': {
    title: 'Salesforce Admin Course in Hyderabad',
    description:
      'Salesforce admin course in Hyderabad: security, Flow, Sales and Service Cloud and reports. No coding, with Platform Administrator prep and placement support.',
  },
  '/training-placement/salesforce-fde/': {
    title: 'Salesforce Agentforce Training in Hyderabad',
    description:
      'Agentforce training in Hyderabad for the Salesforce forward deployed engineer role: build agents, prompts, Data 360 and Apex actions, with placement support.',
  },
  '/training-placement/salesforce-ba/': {
    title: 'Salesforce Business Analyst Course Hyderabad',
    description:
      'Salesforce Business Analyst course in Hyderabad: discovery, process mapping, user stories, Sales and Service Cloud and UAT. No coding, with placement support.',
  },
};

/** The search title and description for a page path (with trailing slash), if the sheet has one. */
export const seoFor = (path: string): PageSeo | undefined => pages[path];

/** Home page: also the site-wide fallback in the root layout. */
export const homeSeo = pages['/'];

/**
 * When the site's content last changed in a real way (new copy, titles, pages), as YYYY-MM-DD.
 * It goes into the sitemap as each page's "last modified" date, which Google uses to decide what to
 * re-read first. Change it after a significant content update, not for small fixes or every deploy,
 * or Google learns to ignore it.
 */
export const siteUpdated = '2026-11-24';
