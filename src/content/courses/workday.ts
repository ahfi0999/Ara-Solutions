import type { Program } from '../programs';

export type WorkdayCourseSlug = 'workday-hcm' | 'workday-finance' | 'workday-integration';

/**
 * Shared by every Workday course page. No `certifications` here: Workday certifies only people at its
 * customers and partners, so the pages say that in an FAQ instead of promising exam preparation.
 */
const workday = {
  family: 'Enterprise platforms',
  accent: 'amber',
  heroImage: '/videos/why-meeting.jpg',
} as const;

const CERTIFICATION_FAQ = {
  q: 'Can I get Workday certified?',
  a: 'Workday certifications are available only through Workday, to people working at its customers and partners. This course builds the skills those roles need; an advisor can explain the usual paths into them.',
};

export const workdayCourses: Program<WorkdayCourseSlug>[] = [
  {
    ...workday,
    slug: 'workday-hcm',
    name: 'Workday HCM Techno-Functional',
    shortName: 'Workday HCM',
    tagline: 'Configure Workday HCM and support it with security, reports and data loads.',
    summary:
      'Learn Workday Human Capital Management from both sides: the functional setup of organisations, staffing, compensation and business processes, and the technical work that supports it, such as security, calculated fields, reports and EIB data loads.',
    prerequisites: 'No prior Workday experience needed. HR, payroll or IT experience helps.',
    highlights: ['Core HCM configuration', 'Reports & calculated fields', 'Security & EIB'],
    audience: [
      { title: 'HR & HRIS professionals', text: 'Move from HR operations into Workday roles.' },
      { title: 'IT & ERP professionals', text: 'Add Workday to SAP, Oracle or other HR system experience.' },
      { title: 'Graduates', text: 'Start a career on an HR platform used by many large companies.' },
    ],
    outcomes: [
      'Explain Workday’s object model and tenant setup',
      'Configure supervisory organisations, job profiles and positions',
      'Set up staffing models and hire-to-retire business processes',
      'Configure compensation and absence basics',
      'Design security groups and domain security',
      'Build reports with calculated fields',
      'Load data with EIB',
      'Support HCM changes after go-live',
    ],
    modules: [
      {
        title: 'Workday foundations',
        summary: 'How Workday is built.',
        topics: ['Workday objects and navigation', 'Tenants and the release cycle', 'Business objects and fields', 'Worker data'],
      },
      {
        title: 'Core HCM',
        summary: 'The organisation and its jobs.',
        topics: [
          'Supervisory organisations',
          'Job profiles and job families',
          'Position and job management',
          'Locations and cost centres',
        ],
      },
      {
        title: 'Staffing & business processes',
        summary: 'Hire to retire.',
        topics: ['Hire, transfer and terminate', 'Business process framework', 'Approvals and conditions', 'Notifications'],
      },
      {
        title: 'Compensation & absence',
        summary: 'Pay and time off.',
        topics: ['Compensation plans and grades', 'Eligibility rules', 'Absence plans', 'Time-off configuration'],
      },
      {
        title: 'Security',
        summary: 'Who can see and do what.',
        topics: ['Security groups', 'Domain and business process security', 'Role-based security', 'Security audits'],
      },
      {
        title: 'Reports & calculated fields',
        summary: 'Turn HR data into answers.',
        topics: ['Simple, advanced and matrix reports', 'Calculated fields', 'Dashboards', 'Report data sources'],
      },
      {
        title: 'Data & integrations',
        summary: 'Load and move HR data.',
        topics: ['EIB data loads', 'Data conversion during implementation', 'Integration basics', 'Mass updates'],
      },
      {
        title: 'Career readiness',
        summary: 'Get interview-ready.',
        topics: [
          'End-to-end configuration project',
          'Implementation and support scenarios',
          'Resume and mock interviews',
        ],
      },
    ],
    tools: [
      'Workday HCM',
      'Business process framework',
      'Workday security',
      'Workday Report Writer',
      'Calculated fields',
      'Dashboards',
      'EIB',
      'Excel',
    ],
    projects: [
      {
        title: 'Organisation and staffing setup',
        text: 'Supervisory organisations, job profiles and a position-managed staffing model for a company.',
        stack: ['Core HCM', 'Staffing', 'Organisations'],
      },
      {
        title: 'Hire business process',
        text: 'A hire process with approvals, conditions and notifications, secured for HR partners and managers.',
        stack: ['Business processes', 'Security', 'Notifications'],
      },
      {
        title: 'Headcount report pack',
        text: 'Reports and calculated fields for headcount, attrition and time off, with test data loaded through EIB.',
        stack: ['Reports', 'Calculated fields', 'EIB'],
      },
    ],
    roles: [
      { title: 'Workday HCM Consultant', text: 'Configure Workday HCM for clients.' },
      { title: 'Workday HRIS Analyst', text: 'Support and improve Workday for an HR team.' },
      { title: 'Workday Reporting Analyst', text: 'Build reports and dashboards from HR data.' },
      { title: 'Workday Security Analyst', text: 'Design and maintain Workday security.' },
    ],
    faqs: [
      {
        q: 'What does techno-functional mean?',
        a: 'You learn both the functional setup (how HR processes are configured) and the technical work that supports it (security, reports, calculated fields and data loads). Employers value people who can do both.',
      },
      CERTIFICATION_FAQ,
    ],
  },
  {
    ...workday,
    slug: 'workday-finance',
    name: 'Workday Financials',
    shortName: 'Workday Finance',
    tagline: 'Configure Workday Financial Management: ledgers, payables, receivables and close.',
    summary:
      'Learn Workday Financial Management: the Foundation Data Model and worktags, the general ledger and journals, suppliers and payables, customers and receivables, banking, assets and the period-end close, with the reports finance teams depend on.',
    prerequisites:
      'No prior Workday experience needed. Accounting or finance knowledge (commerce, CA, CMA or finance roles) helps.',
    highlights: ['Ledger, AP & AR', 'Worktags & Foundation Data Model', 'Close & financial reporting'],
    audience: [
      { title: 'Finance & accounting professionals', text: 'Move from finance operations into Workday roles.' },
      { title: 'ERP consultants', text: 'Add Workday to SAP, Oracle or other ERP experience.' },
      { title: 'Commerce & finance graduates', text: 'Start a career on a finance platform used by large companies.' },
    ],
    outcomes: [
      'Explain the Foundation Data Model and worktags',
      'Set up companies, ledger accounts and account posting rules',
      'Create and post journals',
      'Configure suppliers, supplier invoices and payments',
      'Configure customers, customer invoices and payment application',
      'Handle banking, settlement and business assets',
      'Run the period-end close',
      'Build financial reports',
    ],
    modules: [
      {
        title: 'Workday Financials foundations',
        summary: 'How finance works in Workday.',
        topics: ['Financial Management overview', 'Companies and hierarchies', 'Foundation Data Model', 'Worktags'],
      },
      {
        title: 'General ledger',
        summary: 'The heart of the books.',
        topics: ['Ledger accounts and account sets', 'Account posting rules', 'Journals and recurring journals', 'Intercompany'],
      },
      {
        title: 'Procurement & payables',
        summary: 'From purchase to payment.',
        topics: ['Suppliers', 'Requisitions and purchase orders', 'Supplier invoices', 'Payments and settlement'],
      },
      {
        title: 'Customers & receivables',
        summary: 'From invoice to cash.',
        topics: ['Customers and contracts', 'Customer invoices', 'Payment application', 'Collections'],
      },
      {
        title: 'Banking, assets & expenses',
        summary: 'Cash, assets and spend.',
        topics: ['Bank accounts and reconciliation', 'Business assets and depreciation', 'Expense reports', 'Spend categories'],
      },
      {
        title: 'Close & reporting',
        summary: 'Close the books and report on them.',
        topics: ['Period-end close', 'Consolidation basics', 'Financial statements', 'Reports and calculated fields'],
      },
      {
        title: 'Business processes & security',
        summary: 'The controls finance teams need.',
        topics: [
          'Business process configuration',
          'Approvals and segregation of duties',
          'Finance security groups',
          'EIB data loads',
        ],
      },
      {
        title: 'Career readiness',
        summary: 'Get interview-ready.',
        topics: [
          'End-to-end finance configuration project',
          'Implementation and support scenarios',
          'Resume and mock interviews',
        ],
      },
    ],
    tools: [
      'Workday Financial Management',
      'Foundation Data Model',
      'Worktags',
      'General ledger',
      'Procurement',
      'Business assets',
      'Workday Report Writer',
      'EIB',
      'Excel',
    ],
    projects: [
      {
        title: 'Chart of accounts and FDM',
        text: 'Ledger accounts, worktags and account posting rules for a company with several cost centres.',
        stack: ['FDM', 'Worktags', 'Ledger'],
      },
      {
        title: 'Procure-to-pay process',
        text: 'Suppliers, purchase orders, supplier invoices and payments, with approvals and segregation of duties.',
        stack: ['Procurement', 'Payables', 'Approvals'],
      },
      {
        title: 'Month-end close pack',
        text: 'Journals, reconciliations and reports for a month-end close, with a trial balance and income statement.',
        stack: ['Journals', 'Close', 'Reports'],
      },
    ],
    roles: [
      { title: 'Workday Financials Consultant', text: 'Configure Workday Financial Management for clients.' },
      { title: 'Workday Finance Analyst', text: 'Support and improve Workday for a finance team.' },
      { title: 'Workday AP/AR Specialist', text: 'Run payables or receivables processes in Workday.' },
      { title: 'Financial Systems Analyst', text: 'Connect finance processes, data and reporting.' },
    ],
    faqs: [
      {
        q: 'Do I need an accounting background?',
        a: 'It helps, because the course configures real accounting processes. Commerce and finance graduates and finance professionals pick it up fastest; an advisor can tell you whether it suits your background.',
      },
      CERTIFICATION_FAQ,
    ],
  },
  {
    ...workday,
    slug: 'workday-integration',
    name: 'Workday Integrations',
    shortName: 'Workday Integration',
    tagline: 'Connect Workday with payroll, finance and other systems using EIB, Studio and APIs.',
    summary:
      'Learn to build and support Workday integrations: EIB, Core Connectors, document transformation, Workday Studio, web services and REST APIs, reports as a service and integration security, for the technical roles every Workday customer needs.',
    prerequisites:
      'Some technical background helps, such as XML, SQL or programming basics. No prior Workday experience needed.',
    highlights: ['EIB, Studio & Core Connectors', 'SOAP, REST & RaaS', 'XML & XSLT'],
    audience: [
      { title: 'Developers & integration engineers', text: 'Specialise in Workday integrations.' },
      {
        title: 'Workday functional professionals',
        text: 'Add the technical side to your HCM or Financials skills.',
      },
      {
        title: 'ERP technical consultants',
        text: 'Bring integration experience from SAP, Oracle or middleware to Workday.',
      },
    ],
    outcomes: [
      'Choose the right integration tool for each need',
      'Build inbound and outbound EIBs',
      'Configure Core Connectors and Cloud Connect integrations',
      'Transform data with XSLT and Document Transformation',
      'Build integrations in Workday Studio',
      'Call Workday SOAP and REST APIs',
      'Expose custom reports as web services (RaaS)',
      'Secure, schedule and monitor integrations',
    ],
    modules: [
      {
        title: 'Integration foundations',
        summary: 'How data moves in and out of Workday.',
        topics: [
          'Integration types and tools',
          'Integration system users and security',
          'Business objects for integrations',
          'Launching and scheduling',
        ],
      },
      {
        title: 'EIB',
        summary: 'Enterprise Interface Builder for simple loads and extracts.',
        topics: ['Inbound EIBs', 'Outbound EIBs', 'Spreadsheet templates', 'Transformation options'],
      },
      {
        title: 'Core Connectors & Cloud Connect',
        summary: 'Pre-built integrations, configured.',
        topics: [
          'Core Connector: Worker',
          'Integration maps and services',
          'Cloud Connect for benefits and payroll',
          'Change detection',
        ],
      },
      {
        title: 'XML, XSLT & document transformation',
        summary: 'Shape data for other systems.',
        topics: ['XML and XPath', 'XSLT', 'Document Transformation', 'CSV, fixed-width and JSON files'],
      },
      {
        title: 'Workday Studio',
        summary: 'Complex integrations, built in code.',
        topics: ['Studio components', 'Assemblies and steps', 'Error handling', 'Deploying Studio integrations'],
      },
      {
        title: 'Web services & APIs',
        summary: 'Connect in real time.',
        topics: ['Workday Web Services (SOAP)', 'REST API', 'Reports as a Service (RaaS)', 'Authentication and OAuth'],
      },
      {
        title: 'Orchestration & support',
        summary: 'Run integrations in production.',
        topics: [
          'Workday Orchestrate overview',
          'Monitoring and error handling',
          'Integration events and audits',
          'Supporting integrations after go-live',
        ],
      },
      {
        title: 'Career readiness',
        summary: 'Get interview-ready.',
        topics: ['End-to-end payroll integration project', 'Troubleshooting scenarios', 'Resume and mock interviews'],
      },
    ],
    tools: [
      'Workday EIB',
      'Core Connectors',
      'Cloud Connect',
      'Workday Studio',
      'Document Transformation',
      'Workday Web Services',
      'Workday REST API',
      'Reports as a Service',
      'XML, XSLT & XPath',
      'Workday Orchestrate',
      'Postman',
    ],
    projects: [
      {
        title: 'Worker data load',
        text: 'An inbound EIB that loads new hires from a spreadsheet, with validation and error handling.',
        stack: ['EIB', 'Templates', 'Validation'],
      },
      {
        title: 'Payroll provider feed',
        text: 'An outbound integration to a third-party payroll provider, with change detection and an XSLT transformation.',
        stack: ['Core Connector', 'XSLT', 'Scheduling'],
      },
      {
        title: 'Real-time employee API',
        text: 'A custom report exposed as a web service and called from an external app.',
        stack: ['RaaS', 'REST', 'Postman'],
      },
    ],
    roles: [
      { title: 'Workday Integration Consultant', text: 'Design and build integrations for clients.' },
      { title: 'Workday Technical Consultant', text: 'Handle integrations, data loads and reports.' },
      { title: 'Workday Studio Developer', text: 'Build complex integrations in Studio.' },
      { title: 'HRIS Integration Analyst', text: 'Run and support integrations for a business.' },
    ],
    faqs: [
      {
        q: 'Do I need to know programming?',
        a: 'Basic technical knowledge helps. The course teaches XML, XSLT and the Workday tools from the start, and Workday Studio builds on them later.',
      },
      CERTIFICATION_FAQ,
    ],
  },
];
