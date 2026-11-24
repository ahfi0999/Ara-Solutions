import type { Program } from '../programs';

export type WorkdayCourseSlug = 'workday-hcm' | 'workday-finance' | 'workday-integration';

/**
 * Shared by every Workday course page. Workday certifies only people at its customers and partners:
 * Workday HCM (from the client's page document) lists the certifications it prepares for with that
 * condition stated; the other two say it in an FAQ until their documents arrive.
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
    // From the client's page document (Nov 2026), written for the keywords chosen on 24 Nov 2026:
    // primary "workday hcm course"; secondary "workday hcm training in hyderabad", "workday hcm jobs in
    // hyderabad", "workday techno functional course". Hyderabad is the only location named.
    h1: 'Workday HCM Techno-Functional Course in Hyderabad',
    tagline: 'Configure Workday HCM and support it with security, reports and data loads.',
    summary:
      'A Workday HCM consultant sets up the system large companies use to hire, pay and manage their people. This Workday HCM training in Hyderabad goes beyond walking through screens: you build an organisation, configure a hire business process, secure it, load workers with EIB and deliver the headcount reports HR leaders use.',
    prerequisites: 'No prior Workday experience needed. HR, payroll or IT experience helps.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'No coding needed',
      location: 'Madhapur, Hyderabad',
    },
    highlights: ['Core HCM configuration', 'Reports & calculated fields', 'Security & EIB'],
    about: {
      paragraphs: [
        'Our Workday HCM course prepares you for techno-functional roles on one of the most widely used HR cloud platforms. Workday HCM consultants set up how companies hire, organise, pay and support their people, and keep the system secure and reporting correctly.',
        'You configure supervisory organisations, jobs and staffing, hire and transfer business processes, compensation and absence, security, reports with calculated fields and data loads with EIB. Classes are live and instructor-led, and the course builds the hands-on skills Workday customers and partners test before they hire.',
      ],
      whyTitle: 'Why learn Workday HCM in 2026',
      why: [
        'Workday runs HR for many global companies, several with large teams in Hyderabad.',
        'Techno-functional consultants are in demand: configuration plus reports and data loads.',
        'A strong move for HR and payroll professionals into better-paid technology roles.',
      ],
    },
    audience: [
      { title: 'HR & payroll professionals', text: 'Move from HR operations into Workday roles that pay more.' },
      { title: 'IT & HRIS professionals', text: 'Add Workday, a leading HR cloud platform, to your skills.' },
      { title: 'Freshers with an HR or MBA background', text: 'Start a career in HR technology.' },
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
        summary: 'How Workday works and how companies use it.',
        topics: [
          'Workday HCM overview',
          'Navigation and search',
          'Business objects',
          'Tenants and releases',
          'How Workday projects run',
          'Workday release cycles',
        ],
        lab: 'Navigate Workday and find workers, organisations and business processes.',
      },
      {
        title: 'Core HCM',
        summary: 'The organisations, jobs and locations every Workday customer needs.',
        topics: [
          'Supervisory organisations',
          'Job profiles and job families',
          'Locations and cost centres',
          'Worker data',
          'Organisation hierarchies',
          'Organisation types',
        ],
        lab: 'Build supervisory organisations, job profiles and locations.',
      },
      {
        title: 'Staffing & business processes',
        summary: 'How people join, move and leave.',
        topics: [
          'Staffing models: positions and headcount',
          'Hire, transfer and termination',
          'Business process framework',
          'Approvals and conditions',
          'Notifications',
          'Business process conditions',
        ],
        lab: 'Configure a hire business process with approvals and notifications.',
      },
      {
        title: 'Compensation & absence',
        summary: 'How people are paid and take leave.',
        topics: [
          'Compensation packages and grades',
          'Compensation plans',
          'Merit and bonus basics',
          'Absence plans and time off',
          'Accruals',
          'Eligibility rules',
        ],
        lab: 'Set up a compensation plan and an absence plan.',
      },
      {
        title: 'Security',
        summary: 'Who can see and do what.',
        topics: [
          'Security groups',
          'Domain security policies',
          'Business process security',
          'Role-based security',
          'Security audits',
          'Security troubleshooting',
        ],
        lab: 'Create a security group and grant domain access.',
      },
      {
        title: 'Reports & calculated fields',
        summary: 'The reports HR depends on, and the calculated fields behind them.',
        topics: [
          'Workday Report Writer',
          'Simple, advanced and matrix reports',
          'Calculated fields',
          'Dashboards',
          'Report sharing and scheduling',
          'Report data sources',
        ],
        lab: 'Build an advanced report with a calculated field.',
      },
      {
        title: 'Data & integrations',
        summary: 'Load and update data the way projects do.',
        topics: [
          'EIB inbound and outbound',
          'Data templates',
          'Data validation',
          'Integration overview',
          'Mass data changes',
          'Integration events',
        ],
        lab: 'Load workers with an inbound EIB and fix validation errors.',
      },
      {
        title: 'Career readiness',
        summary: 'Prepare for Workday interviews and consulting work.',
        topics: [
          'HCM consultant interview questions',
          'Workday project scenarios',
          'Resume and LinkedIn',
          'Workday career paths',
          'Mock interviews',
          'Consulting communication',
        ],
        lab: 'Answer mock client scenarios in a consultant interview.',
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
    skills: [
      'Core HCM configuration',
      'Supervisory organisations',
      'Staffing models',
      'Business process framework',
      'Compensation',
      'Absence',
      'Workday security',
      'Report Writer',
      'Calculated fields',
      'EIB data loads',
    ],
    projects: [
      {
        title: 'Organisation and staffing setup',
        problem: 'A growing company has no clear organisation structure or position control.',
        text: 'Build supervisory organisations, jobs and a position-based staffing model.',
        result: 'A clean organisation and position-based staffing model.',
        stack: ['Core HCM'],
      },
      {
        title: 'Hire business process',
        problem: 'Hiring involves emails and manual approvals that slow new joiners down.',
        text: 'Configure a hire process with approvals, conditions and security.',
        result: 'A configured hire process with automatic approvals and notifications.',
        stack: ['Business process framework'],
      },
      {
        title: 'Headcount report pack',
        problem: 'HR leaders cannot get accurate headcount and attrition numbers.',
        text: 'Build headcount and attrition reports with calculated fields.',
        result: 'A headcount report pack built on calculated fields.',
        stack: ['Report Writer', 'Calculated fields'],
      },
    ],
    capstone:
      'Configure Workday HCM for a sample company: organisations, staffing, a hire process, compensation, security, reports and a data load, presented as a client walkthrough.',
    certificationIntro:
      'Workday certifications are issued only by Workday, to people working at Workday customers and partners, so no training institute can certify you directly. This course prepares you for the skills these Workday HCM certifications test, and you take the exam once you work at a customer or partner.',
    certifications: [
      {
        name: 'Workday Pro HCM Core Certification',
        note: 'Shows Core HCM configuration skills. Taken after you join a Workday customer or partner.',
      },
      {
        name: 'Workday Pro Security Certification',
        note: 'Shows Workday security configuration skills. Taken after you join a Workday customer or partner.',
      },
      {
        name: 'Workday Pro HCM Reporting Certification',
        note: 'Shows Workday HCM reporting skills. Taken after you join a Workday customer or partner.',
      },
    ],
    roles: [
      { title: 'Workday HCM Consultant', text: 'Configures Workday HCM for clients.', level: 'Fresher to mid' },
      { title: 'Workday HRIS Analyst', text: 'Supports and improves Workday for an HR team.', level: 'Fresher to mid' },
      { title: 'Workday Reporting Analyst', text: 'Builds reports and dashboards.', level: 'Fresher to mid' },
      { title: 'Workday Security Analyst', text: 'Manages Workday security.', level: 'Mid' },
      {
        title: 'Workday Techno-Functional Consultant',
        text: 'Combines configuration with reports and data loads.',
        level: 'Mid',
      },
      { title: 'Workday Compensation Analyst', text: 'Configures and supports compensation.', level: 'Mid' },
    ],
    careers: {
      salaries: [{ role: 'Workday HCM Consultant', experience: '2 to 10 years', pay: '₹4 L to ₹15.6 L' }],
      salaryNote:
        'Annual salary range from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
      path: [
        { stage: 'Start (0 to 2 years)', roles: 'Workday HRIS Analyst, Reporting Analyst' },
        { stage: 'Grow (2 to 5 years)', roles: 'Workday HCM Consultant, Security Analyst' },
        { stage: 'Lead (5+ years)', roles: 'Senior Workday Consultant, Workday Solution Architect' },
      ],
    },
    faqs: [
      {
        q: 'What is Workday HCM?',
        a: 'Workday Human Capital Management (HCM) is a cloud system companies use to manage hiring, pay, time off and employee data. A Workday HCM consultant configures it for each company.',
      },
      {
        q: 'What is the Workday HCM syllabus?',
        a: 'Eight modules: Workday foundations, Core HCM, staffing and business processes, compensation and absence, security, reports and calculated fields, data and integrations with EIB, and career readiness. Every module has a hands-on lab.',
      },
      {
        q: 'What does techno-functional mean?',
        a: 'A role that combines configuration (functional) with reports, calculated fields and data loads (technical). This Workday techno-functional course teaches both.',
      },
      {
        q: 'Are the Workday HCM classes live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Madhapur, Hyderabad.',
      },
      {
        q: 'Do I need HR experience?',
        a: 'It helps but is not required. The course explains HR processes as it configures them.',
      },
      {
        q: 'Can I get a Workday HCM certification after this course?',
        a: 'Workday certifies only people at Workday customers and partners. This course builds the skills the Workday Pro HCM certifications test, and you take the exam after joining one.',
      },
      {
        q: 'Will I practise on a Workday tenant?',
        a: 'Ask an advisor about practice tenant access for your batch.',
      },
      {
        q: 'What is a business process in Workday?',
        a: 'A set of steps, approvals and notifications for an event such as a hire or a transfer.',
      },
      {
        q: 'What is EIB in Workday?',
        a: 'Enterprise Interface Builder, Workday’s tool for loading and extracting data with spreadsheets.',
      },
      {
        q: 'What are calculated fields?',
        a: 'Fields that compute values from other data, used in reports and business processes.',
      },
      {
        q: 'Can freshers get Workday HCM jobs?',
        a: 'Yes. Entry roles such as Workday HRIS Analyst or Reporting Analyst suit freshers with HR, MBA or technical degrees.',
      },
      {
        q: 'Is Workday HCM a good career?',
        a: 'Workday is used by many large global companies, and Workday HCM consultants are hired by IT services firms and capability centres in Hyderabad.',
      },
      {
        q: 'What can I learn after Workday HCM?',
        a: 'Workday Integrations, Workday Financials, or advanced HCM areas such as compensation and recruiting.',
      },
      {
        q: 'What is the Workday HCM course fee?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09226 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Is this a Workday HCM course with placement support?',
        a: 'Yes. It includes resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
      },
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
