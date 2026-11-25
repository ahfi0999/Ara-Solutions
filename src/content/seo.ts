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
      'Join IT training programs in Hyderabad at ARA Solutions. Learn ServiceNow, Salesforce, AI/ML, Cybersecurity & Full Stack with hands-on projects and placement support.',
  },
  '/training-placement/salesforce/': {
    title: 'Salesforce Training in Hyderabad',
    description:
      'Join Salesforce training in Hyderabad at ARA Solutions. Learn Salesforce Admin, Developer, Apex & Agentforce AI with hands-on projects and placement assistance.',
  },
  '/training-placement/servicenow/': {
    title: 'ServiceNow Training & Placement in Hyderabad',
    description:
      'ServiceNow training in Hyderabad covering admin, development, HRSD and AI: 31 modules with hands-on labs, CSA, CAD and CIS-HR exam prep and placement support.',
  },
  '/training-placement/ai-ml/': {
    title: 'AI & Machine Learning Course in Hyderabad',
    description:
      'Learn AI & Machine Learning in Hyderabad with Python, ML, Generative AI, LLMs and RAG. Build practical projects with hands-on training and placement assistance.',
  },
  '/training-placement/agentic-ai/': {
    title: 'Agentic AI Training in Hyderabad',
    description:
      'Learn Agentic AI in Hyderabad with Python, LLMs, MCP, RAG, LangGraph and CrewAI. Build practical AI agents through hands-on projects and placement assistance.',
  },
  '/training-placement/cybersecurity/': {
    title: 'Cybersecurity Training in Hyderabad',
    description:
      'Learn cybersecurity in Hyderabad with SOC, SIEM, cloud security, IAM and vulnerability assessment through hands-on labs and placement assistance.',
  },
  '/training-placement/full-stack-ai/': {
    title: 'Full Stack Development Course in Hyderabad',
    description:
      'Learn full stack development with React, Node.js, SQL, MongoDB and AI integration. Build and deploy practical projects with placement assistance in Hyderabad.',
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
