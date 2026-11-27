import type { Program } from '../programs';

export type WorkdayCourseSlug = 'workday-hcm' | 'workday-finance' | 'workday-integration';

/**
 * Shared by every Workday course page. Content from the client's page documents (Nov 2026), rewritten
 * for our keyword research. Workday certifies only people at its customers and partners, so each course
 * lists the Workday Pro certifications it prepares for with that condition stated.
 */
const workday = {
  family: 'Enterprise platforms',
  accent: 'amber',
  heroImage: '/videos/why-meeting.jpg',
} as const;

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
      location: 'Hyderabad',
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
      {
        title: 'HR & payroll professionals',
        text: 'Move from HR operations into Workday roles that pay more.',
      },
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
      'Workday certifications are issued only by Workday, to people working at Workday customers and partners, so no training institute can certify you directly. This course builds the skills these Workday HCM certifications test, and you take the exams once you work at a customer or partner.',
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
      {
        title: 'Workday HCM Consultant',
        text: 'Configures Workday HCM for clients.',
        level: 'Fresher to mid',
      },
      {
        title: 'Workday HRIS Analyst',
        text: 'Supports and improves Workday for an HR team.',
        level: 'Fresher to mid',
      },
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
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Hyderabad.',
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
        a: 'Yes. Entry roles such as Workday HRIS analyst or reporting analyst suit freshers with HR, MBA or technical degrees.',
      },
      {
        q: 'Is Workday HCM a good career?',
        a: 'Workday is used by many large global companies, and Workday HCM consultants are hired by IT services firms and capability centres in Hyderabad.',
      },
      {
        q: 'What can I learn after Workday HCM?',
        a: 'Workday Integration, Workday Finance or advanced HCM areas such as compensation and recruiting.',
      },
      {
        q: 'What is the Workday HCM course fee?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch date.',
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
    // From the client's page document (Nov 2026), written for the keywords chosen on 24 Nov 2026:
    // primary "workday finance course"; secondary "workday finance training in hyderabad", "workday finance
    // jobs in hyderabad", "workday finance certification". Hyderabad is the only location named.
    h1: 'Workday Finance Course in Hyderabad',
    tagline: 'Configure Workday Financial Management: ledgers, payables, receivables and close.',
    summary:
      'A Workday Financials consultant sets up the system large companies use to keep their books. This Workday Finance training in Hyderabad goes beyond walking through accounting screens: you design the Foundation Data Model, pay a supplier, invoice a customer, post journals and close the month with the reports finance teams depend on.',
    prerequisites:
      'No prior Workday experience needed. Accounting or finance knowledge (commerce, CA, CMA or finance roles) helps.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'No coding needed',
      location: 'Hyderabad',
    },
    highlights: [
      'Foundation Data Model & worktags',
      'Procure-to-pay & receivables',
      'Month-end close & reporting',
    ],
    about: {
      paragraphs: [
        'Our Workday Finance course prepares you for finance systems roles on Workday Financial Management, often called Workday Financials. Workday Financials consultants set up how companies record transactions, buy and pay, bill and collect, and close their books each month.',
        'You design the Foundation Data Model (FDM) and worktags, configure the general ledger, procure-to-pay, receivables, banking, assets and expenses, run the period-end close and secure finance business processes. Classes are live and instructor-led, and the course suits commerce, CA, CMA and finance professionals moving into technology.',
      ],
      whyTitle: 'Why learn Workday Finance in 2026',
      why: [
        'Accounting knowledge plus Workday configuration skills is a less common combination.',
        'Workday Financials consultants are hired by IT services firms and capability centres in Hyderabad.',
        'A natural next step for SAP or Oracle finance professionals.',
      ],
    },
    audience: [
      {
        title: 'Finance & accounting professionals',
        text: 'Move from finance operations into Workday roles.',
      },
      {
        title: 'CA, CMA & commerce graduates',
        text: 'Use your accounting knowledge as a Workday Finance consultant.',
      },
      { title: 'ERP consultants', text: 'Add Workday Financials to your SAP or Oracle experience.' },
    ],
    outcomes: [
      'Explain Workday Financials and the Foundation Data Model',
      'Design companies, cost centres and worktags',
      'Set up ledger accounts, posting rules and journals',
      'Configure suppliers, purchase orders, supplier invoices and payments',
      'Configure customers, customer invoices and payments',
      'Reconcile bank accounts and depreciate business assets',
      'Run the period-end close and build financial statements',
      'Secure finance processes with approvals and segregation of duties',
    ],
    modules: [
      {
        title: 'Workday Financials foundations',
        summary: 'How Workday Financials works, and the Foundation Data Model behind every transaction.',
        topics: [
          'Workday Financials overview',
          'Foundation Data Model (FDM)',
          'Worktags',
          'Companies and hierarchies',
          'Navigation',
          'Ledger accounts vs worktags',
        ],
        lab: 'Design an FDM with companies, cost centres and worktags.',
      },
      {
        title: 'General ledger',
        summary: 'The heart of the books: ledger accounts, posting rules and journals.',
        topics: [
          'Ledger accounts and account sets',
          'Account posting rules',
          'Journals and recurring journals',
          'Journal approvals',
          'Intercompany',
          'Ledger reports',
        ],
        lab: 'Set up ledger accounts, posting rules and a recurring journal.',
      },
      {
        title: 'Procurement & payables',
        summary: 'How companies buy and pay: the procure-to-pay process.',
        topics: [
          'Suppliers',
          'Supplier contracts',
          'Requisitions and purchase orders',
          'Supplier invoices',
          'Payments and settlement',
          'Procurement approvals',
        ],
        lab: 'Create a supplier, a purchase order, a supplier invoice and a payment.',
      },
      {
        title: 'Customers & receivables',
        summary: 'How companies bill and collect.',
        topics: [
          'Customers',
          'Customer contracts',
          'Customer invoices and billing',
          'Customer payments',
          'Collections',
          'Receivables reports',
        ],
        lab: 'Create a customer and an invoice, then record the payment.',
      },
      {
        title: 'Banking, assets & expenses',
        summary: 'Cash, business assets and employee expenses.',
        topics: [
          'Bank accounts and reconciliation',
          'Cash management',
          'Business assets and depreciation',
          'Expense reports',
          'Expense policies',
          'Expense audits',
        ],
        lab: 'Reconcile a bank account and depreciate an asset.',
      },
      {
        title: 'Close & reporting',
        summary: 'Run the month-end close and build financial reports.',
        topics: [
          'Period close tasks',
          'Accruals and adjustments',
          'Consolidation basics',
          'Financial statements',
          'Report Writer for finance',
          'Dashboards',
        ],
        lab: 'Run month-end accruals and close the period.',
      },
      {
        title: 'Business processes & security',
        summary: 'The approvals and controls finance teams need.',
        topics: [
          'Finance business processes',
          'Approval chains',
          'Segregation of duties',
          'Security groups and domains',
          'Audit trail and audit readiness',
        ],
        lab: 'Configure approvals and segregation of duties.',
      },
      {
        title: 'Career readiness',
        summary: 'Prepare for Workday Finance interviews and consulting work.',
        topics: [
          'Financials consultant interview questions',
          'Workday Financials project scenarios',
          'Resume and LinkedIn',
          'Workday Finance career paths',
          'Mock interviews',
          'Consulting communication',
        ],
        lab: 'Answer mock client scenarios in a consultant interview.',
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
    skills: [
      'Foundation Data Model',
      'Worktags',
      'General ledger',
      'Procure-to-pay',
      'Receivables and billing',
      'Banking and reconciliation',
      'Business assets',
      'Expenses',
      'Period-end close',
      'Finance security',
    ],
    projects: [
      {
        title: 'Chart of accounts and FDM',
        problem: 'A company’s chart of accounts is too complex to report on.',
        text: 'Design the Foundation Data Model, worktags and ledger accounts for a company.',
        result: 'A clean Foundation Data Model with worktags for reporting.',
        stack: ['FDM', 'Worktags', 'General ledger'],
      },
      {
        title: 'Procure-to-pay process',
        problem: 'Supplier invoices are paid late and without proper approvals.',
        text: 'Configure suppliers, purchase orders, supplier invoices and payments with approvals.',
        result: 'A controlled procure-to-pay process with approvals.',
        stack: ['Procurement', 'Payables'],
      },
      {
        title: 'Month-end close pack',
        problem: 'The month-end close takes too long and the numbers are unreliable.',
        text: 'Run accruals, close the period and produce the financial statements.',
        result: 'A repeatable close with accruals and financial statements.',
        stack: ['General ledger', 'Report Writer'],
      },
    ],
    capstone:
      'Configure Workday Financials for a sample company: FDM, ledger, procure-to-pay, receivables, close and reporting, presented to a mock finance team.',
    certificationIntro:
      'Workday certifications are issued only by Workday, to people working at Workday customers and partners, so no training institute can certify you directly. This course builds the core skills these Workday Financial Management certifications test, and you take the exams once you work at a customer or partner. The exams also cover advanced areas such as revenue recognition and allocations, which Workday teaches in the courses it recommends for each exam.',
    certifications: [
      {
        name: 'Workday Pro Record to Report Certification',
        note: 'Shows accounting, period close and financial reporting skills. Taken after you join a Workday customer or partner.',
      },
      {
        name: 'Workday Pro Procure to Pay Certification',
        note: 'Shows procurement, supplier invoice and payment skills. Taken after you join a Workday customer or partner.',
      },
      {
        name: 'Workday Pro Contracts to Cash Certification',
        note: 'Shows customer contract, billing and receivables skills. Taken after you join a Workday customer or partner.',
      },
    ],
    roles: [
      {
        title: 'Workday Financials Consultant',
        text: 'Configures Workday Financials for clients.',
        level: 'Fresher to mid',
      },
      {
        title: 'Workday Finance Analyst',
        text: 'Supports and improves Workday for a finance team.',
        level: 'Fresher to mid',
      },
      {
        title: 'Workday AP/AR Specialist',
        text: 'Runs payables and receivables in Workday.',
        level: 'Fresher to mid',
      },
      {
        title: 'Workday Financials Reporting Analyst',
        text: 'Builds finance reports and dashboards.',
        level: 'Fresher to mid',
      },
      { title: 'Financial Systems Analyst', text: 'Maintains and improves finance systems.', level: 'Mid' },
      {
        title: 'Workday Accounting Center Consultant',
        text: 'Configures accounting and posting rules.',
        level: 'Mid',
      },
    ],
    faqs: [
      {
        q: 'What is Workday Financials?',
        a: 'Workday Financial Management, often called Workday Financials or Workday Finance, is a cloud system companies use for accounting, procurement, billing and financial reporting. A Workday Financials consultant configures it for each company.',
      },
      {
        q: 'What are the Workday Finance modules?',
        a: 'The main finance areas in Workday include the general ledger, procurement and supplier accounts, customer accounts and contracts, banking, business assets, expenses and financial reporting. This Workday Finance course covers them in eight modules: Workday Financials foundations, general ledger, procurement and payables, customers and receivables, banking, assets and expenses, close and reporting, business processes and security, and career readiness. Every module has a hands-on lab.',
      },
      {
        q: 'What is the Foundation Data Model in Workday?',
        a: 'The Foundation Data Model (FDM) is how Workday structures financial data: a short list of ledger accounts plus worktags such as company, cost centre and project, instead of long account codes. Module 1 and the first project are built around FDM design.',
      },
      {
        q: 'What are worktags in Workday?',
        a: 'Labels such as cost centre, project or region attached to transactions, used for reporting and posting.',
      },
      {
        q: 'What is the procure-to-pay process in Workday?',
        a: 'The process from requesting a purchase to paying the supplier: requisition, purchase order, receipt, supplier invoice and payment. You configure it end to end in module 3 and the procure-to-pay project.',
      },
      {
        q: 'Is Workday Finance good for CA, CMA or commerce students?',
        a: 'Yes. Accounting knowledge is a big advantage, because the course configures real accounting processes such as journals, payables and the month-end close. It is not required, and an advisor can tell you whether the course suits your background.',
      },
      {
        q: 'How is Workday Financials different from SAP or Oracle?',
        a: 'Workday is cloud-only, structures data with the Foundation Data Model and worktags, and gets two major updates a year. SAP or Oracle finance experience still helps, because the accounting processes are similar.',
      },
      {
        q: 'Can I get a Workday Finance certification after this course?',
        a: 'Workday certifies only people at Workday customers and partners. This course builds the skills the Workday Pro Record to Report, Procure to Pay and Contracts to Cash certifications test, and you take the exam after joining one.',
      },
      {
        q: 'Are the Workday Finance classes live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Hyderabad.',
      },
      {
        q: 'Will I practise Workday Finance on a tenant?',
        a: 'Ask an advisor about practice tenant access for your batch.',
      },
      {
        q: 'What projects will I build in the Workday Finance course?',
        a: 'A chart of accounts and FDM design, a procure-to-pay process and a month-end close pack, plus a capstone that configures Workday Financials for a sample company.',
      },
      {
        q: 'How do I become a Workday Finance consultant?',
        a: 'Learn Workday Financials configuration on top of your accounting knowledge, build projects you can show, then start in a role such as Workday finance analyst or AP/AR specialist. A typical path leads to Workday Financials consultant or financial systems analyst in 2 to 5 years, and to senior Financials consultant or finance solution architect after 5 years.',
      },
      {
        q: 'Can freshers get Workday Finance jobs in Hyderabad?',
        a: 'Yes. IT services firms and capability centres in Hyderabad hire for entry roles such as Workday finance analyst, AP/AR specialist and Financials reporting analyst, which suit freshers with a commerce, CA or CMA background.',
      },
      {
        q: 'What can I learn after Workday Finance?',
        a: 'Workday Integration, Workday Adaptive Planning or advanced Financials areas.',
      },
      {
        q: 'What is the Workday Finance course fee in Hyderabad?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Is this a Workday Finance course with placement support?',
        a: 'Yes. It includes resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
      },
    ],
  },
  {
    ...workday,
    slug: 'workday-integration',
    name: 'Workday Integration',
    shortName: 'Workday Integration',
    // From the client's page document (Nov 2026), written for the keywords chosen on 24 Nov 2026:
    // primary "workday integration course"; secondary "workday integration training in hyderabad",
    // "workday studio training", "workday integration consultant". Hyderabad is the only location named.
    h1: 'Workday Integration Course in Hyderabad',
    tagline: 'Connect Workday with payroll, finance and other systems using EIB, Studio and APIs.',
    summary:
      'A Workday integration consultant builds the connections that move worker and finance data between Workday and the other systems a company runs. This Workday Integration training in Hyderabad goes beyond EIB uploads: you build a payroll feed with Core Connectors, transform data with XSLT, develop a Workday Studio integration and expose live employee data through Workday APIs.',
    prerequisites:
      'Some technical background helps, such as XML, SQL or programming basics. No prior Workday experience needed.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'Taught in the course (XML, XSLT, APIs)',
      location: 'Hyderabad',
    },
    highlights: ['EIB, Core Connectors & Studio', 'XML, XSLT & Document Transformation', 'SOAP, REST & RaaS'],
    about: {
      paragraphs: [
        'Our Workday Integration course prepares you for technical roles that connect Workday with payroll, benefits, finance and other systems. Every Workday customer runs integrations, and fewer people have the technical skills to build them than the functional skills to configure Workday.',
        'You build EIB loads, Core Connectors and Cloud Connect feeds, transform data with XML and XSLT, develop Workday Studio integrations, call Workday web services and REST APIs, expose reports as a service (RaaS) and get started with Workday Orchestrate. Classes are live and instructor-led, and every module includes a hands-on build.',
      ],
      whyTitle: 'Why learn Workday Integration in 2026',
      why: [
        'Integration skills are scarcer than functional Workday skills.',
        'Every Workday customer needs integrations, and support for them after go-live.',
        'Builds on technical skills you may already have, such as SQL, XML or ETL.',
      ],
    },
    audience: [
      {
        title: 'Developers & integration engineers',
        text: 'Specialise in Workday, where integration skills are scarce.',
      },
      {
        title: 'Workday HCM or Finance consultants',
        text: 'Add the technical side to your functional Workday skills.',
      },
      { title: 'ETL & middleware professionals', text: 'Bring your data and integration skills to Workday.' },
    ],
    outcomes: [
      'Choose the right Workday integration tool for each need',
      'Set up integration system users and security',
      'Build inbound and outbound EIBs',
      'Configure Core Connector: Worker with change detection',
      'Transform Workday XML with XSLT and Document Transformation',
      'Build and debug integrations in Workday Studio',
      'Call Workday SOAP and REST APIs and expose reports as a service',
      'Monitor integrations and fix failed runs',
    ],
    modules: [
      {
        title: 'Integration foundations',
        summary: 'How Workday connects to other systems, and which tool fits each job.',
        topics: [
          'Workday integration landscape',
          'Integration types',
          'Choosing the right tool',
          'Integration system users and security',
          'Integration events',
        ],
        lab: 'Set up an integration system user and its security.',
      },
      {
        title: 'EIB',
        summary: 'Enterprise Interface Builder: the simplest and most used Workday integrations.',
        topics: [
          'Inbound EIB',
          'Outbound EIB',
          'Data templates',
          'EIB transformations',
          'Scheduling',
          'Error handling',
        ],
        lab: 'Build an outbound EIB that extracts data from a custom report.',
      },
      {
        title: 'Core Connectors & Cloud Connect',
        summary: 'Workday’s pre-built connectors for payroll, benefits and other common needs.',
        topics: [
          'Core Connector: Worker',
          'Change detection',
          'Integration services',
          'Connector field mapping',
          'Field overrides',
          'Cloud Connect for Benefits and Third-Party Payroll',
        ],
        lab: 'Configure Core Connector: Worker with change detection.',
      },
      {
        title: 'XML, XSLT & Document Transformation',
        summary: 'Turn Workday data into the formats other systems need.',
        topics: [
          'XML and XPath',
          'XPath functions',
          'XSLT basics',
          'Document Transformation',
          'Output formats: CSV and fixed width',
          'Testing transformations',
        ],
        lab: 'Transform worker XML into a fixed-width file with XSLT.',
      },
      {
        title: 'Workday Studio',
        summary: 'Complex integrations, built in Workday’s integration development tool.',
        topics: [
          'Studio environment',
          'Assemblies and components',
          'Splitting and aggregating',
          'Error handling',
          'Studio debugging',
          'Deploying Studio integrations',
        ],
        lab: 'Build a Studio integration with error handling.',
      },
      {
        title: 'Web services & APIs',
        summary: 'Call Workday’s SOAP and REST APIs and expose reports as services.',
        topics: [
          'Workday Web Services (SOAP)',
          'Workday REST API',
          'Reports as a Service (RaaS)',
          'Authentication and OAuth',
          'Testing with Postman',
        ],
        lab: 'Call a Workday web service and a REST endpoint from Postman.',
      },
      {
        title: 'Orchestration & support',
        summary: 'Build orchestrations and support integrations after go-live.',
        topics: [
          'Workday Orchestrate',
          'Integration monitoring',
          'Troubleshooting failures',
          'Release impact and testing',
          'Documentation',
        ],
        lab: 'Monitor an integration run and fix a failed event.',
      },
      {
        title: 'Career readiness',
        summary: 'Prepare for Workday integration interviews and solution design.',
        topics: [
          'Integration consultant interview questions',
          'Scenario design questions',
          'Solution design',
          'Resume and LinkedIn',
          'Workday integration career paths',
          'Mock interviews',
        ],
        lab: 'Design an integration for a mock client scenario.',
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
      'Reports as a Service (RaaS)',
      'XML, XSLT & XPath',
      'Workday Orchestrate',
      'Postman',
    ],
    skills: [
      'EIB',
      'Core Connectors',
      'Cloud Connect',
      'XML and XPath',
      'XSLT',
      'Workday Studio',
      'Workday Web Services (SOAP)',
      'Workday REST API',
      'Reports as a Service',
      'Integration monitoring',
    ],
    projects: [
      {
        title: 'Worker data load',
        problem: 'HR loads worker data by hand, causing errors.',
        text: 'Load and update worker data with an inbound EIB and validation.',
        result: 'Clean bulk loads with EIB and validation.',
        stack: ['EIB'],
      },
      {
        title: 'Payroll provider feed',
        problem: 'A payroll provider needs accurate worker changes every pay cycle.',
        text: 'Build a payroll feed with Core Connector: Worker and an XSLT transformation.',
        result: 'An automated payroll feed with Core Connectors and XSLT.',
        stack: ['Core Connectors', 'XSLT'],
      },
      {
        title: 'Real-time employee API',
        problem: 'Another app needs live employee data from Workday.',
        text: 'Expose employee data through RaaS and the Workday REST API for another app.',
        result: 'Real-time employee data through RaaS and REST.',
        stack: ['RaaS', 'REST API', 'Postman'],
      },
    ],
    capstone:
      'Design and build a set of integrations for a sample company: an inbound load, a payroll feed and an API, with monitoring and documentation.',
    certificationIntro:
      'Workday certifications are issued only by Workday, to people working at Workday customers and partners, so no training institute can certify you directly. Workday is retiring the Workday Pro Integrations Certification and replacing it with the Workday Pro Workday Orchestrate Developer Certification. This course covers the integration foundations and introduces Workday Orchestrate; the exam goes deeper into Orchestrate, which Workday teaches in the courses it recommends. You take the exam once you work at a customer or partner.',
    certifications: [
      {
        name: 'Workday Pro Workday Orchestrate Developer Certification',
        note: 'Shows you can build and maintain integrations between Workday and other systems. Taken after you join a Workday customer.',
      },
      {
        name: 'Workday Pro Workday Orchestrate Developer Services Certification',
        note: 'The partner version of the same certification. Taken after you join a Workday partner.',
      },
    ],
    roles: [
      {
        title: 'Workday Integration Consultant',
        text: 'Builds and supports Workday integrations.',
        level: 'Fresher to mid',
      },
      {
        title: 'HRIS Integration Analyst',
        text: 'Supports integrations for an HR systems team.',
        level: 'Fresher to mid',
      },
      {
        title: 'Workday Technical Consultant',
        text: 'Handles integrations, reports and data loads.',
        level: 'Mid',
      },
      { title: 'Workday Studio Developer', text: 'Builds complex Studio integrations.', level: 'Mid' },
      {
        title: 'Middleware Developer (Workday)',
        text: 'Connects Workday through middleware such as MuleSoft or Boomi.',
        level: 'Mid',
      },
      { title: 'Workday Integration Architect', text: 'Designs integration strategy.', level: 'Experienced' },
    ],
    careers: {
      salaries: [
        {
          role: 'Workday Integration Consultant (IT services)',
          experience: 'Varies',
          pay: '₹4.5 L to ₹20 L',
        },
      ],
      salaryNote:
        'Annual salary range from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
      path: [
        { stage: 'Start (0 to 2 years)', roles: 'HRIS Integration Analyst, Junior Integration Consultant' },
        { stage: 'Grow (2 to 5 years)', roles: 'Workday Integration Consultant, Studio Developer' },
        { stage: 'Lead (5+ years)', roles: 'Workday Technical Lead, Integration Architect' },
      ],
    },
    faqs: [
      {
        q: 'What is a Workday integration?',
        a: 'A connection that moves data between Workday and another system, such as a payroll provider, a benefits provider or a finance system. A Workday integration consultant builds, secures and supports these connections.',
      },
      {
        q: 'What are the types of Workday integrations?',
        a: 'EIB for simple loads and extracts, Core Connectors and Cloud Connect for pre-built feeds such as payroll and benefits, Workday Studio for complex integrations, web services and REST APIs for real-time access, and Workday Orchestrate, Workday’s newer tool for building integrations. This Workday Integration course covers each of them.',
      },
      {
        q: 'What is the difference between EIB and Core Connectors in Workday?',
        a: 'EIB (Enterprise Interface Builder) handles simple loads and extracts with spreadsheets or reports. Core Connectors are pre-built integrations for common needs, such as Core Connector: Worker for payroll feeds, and can send only the changes since the last run.',
      },
      {
        q: 'What is Workday Studio?',
        a: 'Workday’s development tool for complex integrations that need more logic than EIB or Core Connectors allow, such as splitting large files or custom error handling. Module 5 is Workday Studio training: assemblies, components, debugging and deployment.',
      },
      {
        q: 'What is XSLT used for in Workday?',
        a: 'XSLT transforms Workday’s XML output into the format another system expects, such as CSV or a fixed-width file. You practise XSLT transformation in module 4 and the payroll feed project.',
      },
      {
        q: 'What is RaaS in Workday?',
        a: 'Reports as a Service: a Workday custom report exposed as a web service that other systems can call.',
      },
      {
        q: 'Do I need coding experience for Workday Integration?',
        a: 'Some technical background helps. XML, XSLT and API basics are taught in the course, and Workday Studio builds on them later.',
      },
      {
        q: 'Can I get a Workday Integration certification after this course?',
        a: 'Workday certifies only people at Workday customers and partners. Its integrations certification is now the Workday Pro Workday Orchestrate Developer Certification, which replaces the retiring Workday Pro Integrations Certification. This course builds the foundations it tests, and you take the exam after joining a customer or partner.',
      },
      {
        q: 'Are the Workday Integration classes live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Hyderabad.',
      },
      {
        q: 'Will I practise Workday Studio on a tenant?',
        a: 'Ask an advisor about practice tenant access for your batch, including Workday Studio.',
      },
      {
        q: 'What projects will I build in the Workday Integration course?',
        a: 'A worker data load with EIB, a payroll provider feed with Core Connectors and XSLT, and a real-time employee API with RaaS and REST, plus a capstone that brings them together with monitoring and documentation.',
      },
      {
        q: 'What does a Workday integration consultant do?',
        a: 'Designs, builds and supports the integrations between Workday and other systems, such as payroll feeds, benefits files, finance interfaces and APIs, and monitors them and fixes failures after go-live.',
      },
      {
        q: 'What is the Workday integration consultant salary?',
        a: 'AmbitionBox lists ₹4.5 L to ₹20 L a year for Workday integration consultants at IT services firms in India (November 2026). Pay depends on the company, city, skills and experience.',
      },
      {
        q: 'Are there Workday integration jobs in Hyderabad?',
        a: 'Yes. IT services firms and capability centres in Hyderabad hire Workday integration consultants, HRIS integration analysts and Studio developers. Entry roles such as HRIS integration analyst suit freshers with a technical degree.',
      },
      {
        q: 'What can I learn after Workday Integration?',
        a: 'Workday Extend, for building custom apps on Workday (Workday offers the Workday Pro Workday Extend Developer I Certification for it), or a functional area such as Workday HCM or Financials.',
      },
      {
        q: 'What is the Workday Integration course fee in Hyderabad?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Is this a Workday Integration course with placement support?',
        a: 'Yes. It includes resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
      },
    ],
  },
];
