/**
 * Extra content for a training track's page (/training-placement/<track>-courses/), written from the
 * client's page documents and our keyword research. A track without an entry here keeps the short
 * track page (hero, course cards, enquiry form).
 *
 * Workday: from "00-Hub-Workday-Courses.docx" (client, Nov 2026), rewritten for the keywords chosen on
 * 24 Nov 2026 (primary "workday course"; secondary "workday course in hyderabad", "workday training
 * institute in hyderabad", "workday certification course"). Hyderabad is the only location named (client,
 * 24 Nov 2026). The course-specific keywords (Workday HCM, Finance, Integration) belong to the course
 * pages, so this page links to them rather than targeting them.
 */

export type HubCompareRow = {
  slug: string;
  bestFor: string;
  coding: string;
  certifications: string[];
  roles: string[];
};

export type TrackHub = {
  seo: { title: string; description: string };
  /** The H1, with one phrase of it (`accent`) set in the italic accent. */
  hero: { title: string; accent: string; intro: string };
  /** A short paragraph under the course cards: why this skill is worth learning. */
  why: { title: string; text: string };
  compare: HubCompareRow[];
  /** "If you have … start with …" rows: the course slug to start with for each background. */
  chooser: {
    title: string;
    intro: string;
    /** `label`: the short button text in the course finder; `background`: the full sentence. */
    rows: { label: string; background: string; slug: string }[];
    note: string;
  };
  careers: {
    title: string;
    intro: string;
    salaries: { role: string; experience: string; pay: string }[];
    salaryNote: string;
    path: { stage: string; roles: string }[];
  };
  certifications: {
    title: string;
    intro: string;
    /** badge: the official badge image in public/images/certifications/, where the issuer publishes one. */
    /**
     * next: a later step, not an exam the course prepares you for (the course page says so). Listed apart and
     * not counted.
     */
    rows: { name: string; slug: string; badge?: string; next?: boolean }[];
    note: string;
  };
  benefits: { title: string; items: { title: string; text: string }[] };
  faqs: { q: string; a: string }[];
  closing: { title: string; intro: string };
};

const workday: TrackHub = {
  seo: {
    // The site adds " | ARA Solutions" (44 characters in all).
    title: 'Workday Courses in Hyderabad',
    description:
      'Workday courses in Hyderabad: HCM, Financials and Integrations. Live classes, hands-on projects, certification guidance and placement support.',
  },
  hero: {
    title: 'Workday courses in Hyderabad with placement support',
    accent: 'placement support',
    intro:
      'Learn Workday HCM, Financials or Integrations with ARA Solutions in Madhapur, Hyderabad. Every Workday course includes live instructor-led classes, hands-on projects, certification guidance and placement support.',
  },
  why: {
    title: 'Why learn Workday?',
    text: 'Workday runs HR and finance for many large global companies. IT services firms and capability centres in Hyderabad hire Workday consultants to configure how those companies hire, pay and manage people, keep their books and connect Workday to other systems.',
  },
  compare: [
    {
      slug: 'workday-hcm',
      bestFor: 'HR, payroll and HRIS professionals',
      coding: 'No coding needed',
      certifications: ['Workday Pro HCM Core', 'Workday Pro Security', 'Workday Pro HCM Reporting'],
      roles: ['Workday HCM Consultant', 'Workday HRIS Analyst', 'Workday Reporting Analyst'],
    },
    {
      slug: 'workday-finance',
      bestFor: 'Finance and accounting professionals; CA, CMA and commerce graduates',
      coding: 'No coding needed',
      certifications: [
        'Workday Pro Record to Report',
        'Workday Pro Procure to Pay',
        'Workday Pro Contracts to Cash',
      ],
      roles: ['Workday Financials Consultant', 'Workday Finance Analyst', 'Workday AP/AR Specialist'],
    },
    {
      slug: 'workday-integration',
      bestFor: 'Developers, integration engineers and Workday functional consultants',
      coding: 'Taught in the course (XML, XSLT, APIs)',
      certifications: ['Workday Pro Workday Orchestrate Developer'],
      roles: ['Workday Integration Consultant', 'Workday Technical Consultant', 'Workday Studio Developer'],
    },
  ],
  chooser: {
    title: 'How to learn Workday: start from your background',
    intro:
      'Every ARA Workday course starts from the Workday foundations, so you do not need Workday experience. Pick the course that builds on what you already know.',
    rows: [
      {
        label: 'HR, payroll or HRIS',
        background: 'You have an HR, payroll or HRIS background',
        slug: 'workday-hcm',
      },
      {
        label: 'Accounting or finance',
        background: 'You have an accounting or finance background',
        slug: 'workday-finance',
      },
      {
        label: 'Development or integration',
        background: 'You have a development or integration background',
        slug: 'workday-integration',
      },
    ],
    note: 'Freshers with an HR, commerce or technical degree can join the matching course too.',
  },
  careers: {
    title: 'Workday careers and salaries in India',
    intro:
      'Is Workday a good career? Workday consultants are hired by IT services firms and capability centres in Hyderabad, and integration skills are especially scarce. Typical annual salaries in India:',
    salaries: [
      { role: 'Workday HCM Consultant', experience: '2 to 10 years', pay: '₹4 L to ₹15.6 L' },
      { role: 'Workday Integration Consultant (IT services)', experience: 'Varies', pay: '₹4.5 L to ₹20 L' },
    ],
    salaryNote:
      'Annual salary ranges from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
    path: [
      { stage: 'Start (0 to 2 years)', roles: 'Workday HRIS Analyst, Reporting Analyst, Finance Analyst' },
      { stage: 'Grow (2 to 5 years)', roles: 'Workday HCM, Financials or Integration Consultant' },
      { stage: 'Lead (5+ years)', roles: 'Senior Workday Consultant, Workday Architect' },
    ],
  },
  certifications: {
    title: 'Workday certification: what each course prepares you for',
    intro:
      'Workday Pro certifications are open only to people working at Workday customers and partners, so no training institute can certify you directly. Our courses build the hands-on skills those employers test before hiring, and the certification paths listed here are the ones you can take once you join one.',
    rows: [
      { name: 'Workday Pro HCM Core Certification', slug: 'workday-hcm' },
      { name: 'Workday Pro Security Certification', slug: 'workday-hcm' },
      { name: 'Workday Pro HCM Reporting Certification', slug: 'workday-hcm' },
      { name: 'Workday Pro Record to Report Certification', slug: 'workday-finance' },
      { name: 'Workday Pro Procure to Pay Certification', slug: 'workday-finance' },
      { name: 'Workday Pro Contracts to Cash Certification', slug: 'workday-finance' },
      // Workday is retiring the Workday Pro Integrations Certification in favour of Orchestrate Developer
      // (enrolment from 3 Apr 2026); partners take the "Services" version of the same exam.
      { name: 'Workday Pro Workday Orchestrate Developer Certification', slug: 'workday-integration' },
    ],
    note: 'Certification names from Workday’s Workday Pro programme (November 2026). Workday sets the eligibility and exam rules.',
  },
  benefits: {
    title: 'Why learn Workday online with ARA Solutions',
    items: [
      {
        title: 'Training shaped by real hiring',
        text: 'ARA also runs an IT staffing business, so our Workday courses follow what client companies hire for.',
      },
      {
        title: 'Live classes, every class recorded',
        text: 'Instructor-led classes on Zoom, with every class recorded so you can revise or catch up.',
      },
      {
        title: 'Projects and certification guidance',
        text: 'Hands-on projects you can show employers, plus guidance on the Workday Pro certification paths.',
      },
      {
        title: 'Placement support',
        text: 'Resume and LinkedIn help, mock interviews and job referrals. Offers depend on your interview performance.',
      },
    ],
  },
  faqs: [
    {
      q: 'Which Workday course should I choose?',
      a: 'Choose by background: Workday HCM if you come from HR, payroll or HRIS; Workday Financials if you come from accounting or finance; Workday Integrations if you come from development or other technical work. An advisor can help if you are unsure.',
    },
    {
      q: 'How do I learn Workday from scratch?',
      a: 'Start with the course that matches your background, learn the Workday foundations, then practise configuration, reports and data loads through hands-on projects. All three ARA Workday courses start from the basics, so no Workday experience is needed.',
    },
    {
      q: 'Can a Workday certification course get me certified?',
      a: 'Workday Pro certifications are open only to people working at Workday customers and partners, so no institute can certify you directly. Our courses build the skills those employers test, and you take the official exam once you join one of them.',
    },
    {
      q: 'Are the Workday classes live or recorded?',
      a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded for revision. Our advisors are based in Madhapur, Hyderabad.',
    },
    {
      q: 'What are the Workday course fees?',
      a: 'Fees depend on the course and the batch. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch dates.',
    },
    {
      q: 'Do you offer a Workday course with placement support?',
      a: 'Yes. Every Workday course includes resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies. Offers depend on your interview performance.',
    },
    {
      q: 'Are there Workday jobs for freshers?',
      a: 'Yes. Freshers with an HR, commerce or technical degree can join our courses. Entry-level Workday roles include HRIS analyst, reporting analyst and finance analyst, mostly at IT services firms and capability centres.',
    },
    {
      q: 'Is Workday a good career?',
      a: 'Workday consultants are hired by IT services firms and capability centres in Hyderabad, and integration skills are especially scarce. A typical path runs from analyst to consultant to senior consultant or architect.',
    },
    {
      q: 'What is the salary of a Workday consultant in India?',
      a: 'AmbitionBox lists ₹4 L to ₹15.6 L a year for Workday HCM consultants with 2 to 10 years of experience, and ₹4.5 L to ₹20 L for Workday integration consultants at IT services firms (November 2026). Pay depends on the company, city, skills and experience.',
    },
    {
      q: 'Do I need coding for Workday?',
      a: 'Not for Workday HCM or Financials. Workday Integrations uses XML, XSLT and APIs, which are taught in the course.',
    },
  ],
  closing: {
    title: 'Talk to a Workday course advisor',
    intro:
      'Get a course recommendation for your background, the current fees and the next batch dates. Call, WhatsApp or request a callback.',
  },
};

const servicenow: TrackHub = {
  seo: {
    // The site adds " | ARA Solutions" (47 characters in all).
    title: 'ServiceNow Courses in Hyderabad',
    description:
      'ServiceNow courses in Hyderabad: Admin, ITSM Development, Masters, HRSD, CRM, GRC, FDSE and BA. Live classes, projects, CSA/CIS prep and placement support.',
  },
  hero: {
    title: 'ServiceNow courses in Hyderabad, from admin to AI',
    accent: 'from admin to AI',
    intro:
      'Choose from eight ServiceNow courses in Hyderabad at ARA Solutions, Madhapur: ServiceNow Admin, ITSM Development, Masters, HRSD, CRM, GRC, Forward Deployed Software Engineer (FDSE) and Business Analyst. Every course has live instructor-led classes, hands-on labs, real projects, certification guidance and placement support.',
  },
  why: {
    title: 'Why learn ServiceNow?',
    text: 'ServiceNow runs IT, HR, customer service and risk workflows for many large companies. IT services firms and capability centres in Hyderabad hire ServiceNow administrators, developers and consultants to set up and run those workflows, and ServiceNow Otto (formerly Now Assist) and AI agents have added new AI work on the platform.',
  },
  compare: [
    {
      slug: 'servicenow-admin-platform',
      bestFor: 'Freshers and graduates; IT support and help desk staff',
      coding: 'No coding needed',
      certifications: ['CSA'],
      roles: [
        'ServiceNow Administrator',
        'ServiceNow ITSM Support Specialist',
        'ServiceNow Platform Support Analyst',
      ],
    },
    {
      slug: 'servicenow-itsm-development',
      bestFor: 'ServiceNow administrators and software developers',
      coding: 'Taught in the course (JavaScript, Glide APIs)',
      certifications: ['CAD', 'CIS-ITSM'],
      roles: ['ServiceNow Developer', 'ServiceNow ITSM Developer', 'ServiceNow Integration Developer'],
    },
    {
      slug: 'servicenow',
      bestFor:
        'Freshers, graduates and IT support staff who want admin, development, HRSD and AI in one course',
      coding: 'Taught from the basics (JavaScript)',
      certifications: [
        'CSA',
        'CAD',
        'CIS-HR',
        'Now Assist Executive Micro-Certification',
        'Agentic AI Executive Micro-Certification',
      ],
      roles: ['ServiceNow Administrator', 'ServiceNow Developer', 'ServiceNow HRSD Developer'],
    },
    {
      slug: 'servicenow-hrsd',
      bestFor: 'HR professionals and ServiceNow administrators',
      coding: 'No coding needed',
      certifications: ['CIS-HR'],
      roles: [
        'ServiceNow HRSD Consultant',
        'ServiceNow HRSD Developer',
        'ServiceNow HRSD Technical Consultant',
      ],
    },
    {
      slug: 'servicenow-crm',
      bestFor: 'Customer service and CRM professionals; ServiceNow administrators',
      coding: 'No coding needed',
      certifications: ['CIS-CSM'],
      roles: ['ServiceNow CSM Consultant', 'ServiceNow CSM Developer', 'ServiceNow CRM Analyst'],
    },
    {
      slug: 'servicenow-grc',
      bestFor: 'Audit, risk and compliance professionals; ServiceNow administrators',
      coding: 'No coding needed',
      certifications: ['CIS-RC'],
      roles: ['ServiceNow GRC Consultant', 'ServiceNow GRC Developer', 'ServiceNow IRM Analyst'],
    },
    {
      slug: 'servicenow-fdse',
      bestFor: 'ServiceNow developers and software developers',
      coding: 'Coding required; programming experience recommended',
      certifications: ['CAD'],
      roles: ['Forward Deployed Software Engineer', 'ServiceNow AI Agent Developer', 'ServiceNow Developer'],
    },
    {
      slug: 'servicenow-ba',
      bestFor: 'Business analysts, business graduates and service desk staff',
      coding: 'No coding needed',
      certifications: ['CSA'],
      roles: ['ServiceNow Business Analyst', 'ServiceNow Functional Consultant', 'ITSM Business Analyst'],
    },
  ],
  chooser: {
    title: 'How to learn ServiceNow: start from your background',
    intro:
      'Pick the course that builds on what you already know. HRSD, CRM and GRC are easier with ServiceNow admin basics, so an advisor can tell you whether to take ServiceNow Admin first.',
    rows: [
      {
        label: 'New to ServiceNow',
        background: 'You are new to ServiceNow and want one focused course',
        slug: 'servicenow-admin-platform',
      },
      {
        label: 'Everything in one course',
        background: 'You want admin, development, HRSD and AI in one course',
        slug: 'servicenow',
      },
      {
        label: 'Know admin, want to code',
        background: 'You know ServiceNow admin and want to code',
        slug: 'servicenow-itsm-development',
      },
      { label: 'HR', background: 'You have an HR background', slug: 'servicenow-hrsd' },
      {
        label: 'Customer service or CRM',
        background: 'You work in customer service or CRM',
        slug: 'servicenow-crm',
      },
      {
        label: 'Audit, risk or compliance',
        background: 'You work in audit, risk or compliance',
        slug: 'servicenow-grc',
      },
      {
        label: 'Developer, into AI agents',
        background: 'You are a developer and want to build AI agents',
        slug: 'servicenow-fdse',
      },
      {
        label: 'Analysis and requirements',
        background: 'You prefer requirements and analysis to configuration',
        slug: 'servicenow-ba',
      },
    ],
    note: 'Freshers and graduates can start with ServiceNow Admin, ServiceNow Masters or ServiceNow Business Analyst. No ServiceNow experience is needed for these three.',
  },
  careers: {
    title: 'ServiceNow careers and salaries in India',
    intro:
      'Is ServiceNow a good career? Most ServiceNow careers start in administration or analysis, then grow into development, a module such as HRSD, CSM or GRC, or AI work on the platform. Typical annual salaries in India:',
    salaries: [
      { role: 'ServiceNow Administrator', experience: '1 to 7 years', pay: '₹2.7 L to ₹10 L' },
      { role: 'ServiceNow Developer', experience: '1 to 3 years', pay: '₹5.5 L to ₹13.6 L' },
      { role: 'ServiceNow Developer (experienced)', experience: '3 to 6 years', pay: '₹7.8 L to ₹21.2 L' },
    ],
    salaryNote:
      'Annual salary ranges from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
    path: [
      {
        stage: 'Start (0 to 2 years)',
        roles: 'ServiceNow Administrator, HRSD Administrator, ServiceNow Business Analyst',
      },
      { stage: 'Grow (2 to 5 years)', roles: 'ServiceNow Developer; HRSD, CSM or GRC Developer' },
      {
        stage: 'Lead (5+ years)',
        roles: 'ServiceNow Technical Consultant, AI Agent Developer, ServiceNow Architect',
      },
    ],
  },
  certifications: {
    title: 'ServiceNow certification path: what each course prepares you for',
    intro:
      'Most people start with the Certified System Administrator (CSA) exam, which ServiceNow suggests before its implementation specialist (CIS) exams. They then add the developer exam (CAD) or the CIS exam for their module. Our courses prepare you for these exams, and you book them yourself through ServiceNow University.',
    rows: [
      {
        name: 'ServiceNow Certified System Administrator (CSA)',
        slug: 'servicenow-admin-platform',
        badge: '/images/certifications/csa.png',
      },
      {
        name: 'ServiceNow Certified Application Developer (CAD)',
        slug: 'servicenow-itsm-development',
        badge: '/images/certifications/cad.png',
      },
      {
        name: 'ServiceNow Certified Implementation Specialist – IT Service Management (CIS-ITSM)',
        slug: 'servicenow-itsm-development',
        badge: '/images/certifications/cis-itsm.png',
      },
      {
        name: 'ServiceNow Certified Implementation Specialist – Human Resources (CIS-HR)',
        slug: 'servicenow-hrsd',
        badge: '/images/certifications/cis-hr.png',
      },
      {
        name: 'ServiceNow Certified Implementation Specialist – Customer Service Management (CIS-CSM)',
        slug: 'servicenow-crm',
        badge: '/images/certifications/cis-csm.png',
      },
      {
        name: 'ServiceNow Certified Implementation Specialist – Risk and Compliance (CIS-RC)',
        slug: 'servicenow-grc',
        badge: '/images/certifications/cis-rc.png',
      },
      {
        name: 'ServiceNow Certified Implementation Specialist – Third-Party Risk Management (CIS-TPRM)',
        slug: 'servicenow-grc',
        badge: '/images/certifications/cis-tprm.png',
        next: true,
      },
      { name: 'Now Assist Executive Micro-Certification', slug: 'servicenow' },
      { name: 'Agentic AI Executive Micro-Certification', slug: 'servicenow' },
      {
        name: 'IIBA Entry Certificate in Business Analysis (ECBA)',
        slug: 'servicenow-ba',
        badge: '/images/certifications/ecba.png',
        next: true,
      },
    ],
    note: 'Names from ServiceNow University and IIBA (November 2026). Each row shows the course that prepares you for the exam or leads on to it. ServiceNow sets the eligibility, prerequisites and fees: CIS-ITSM, for example, now also needs the CIS – Data Foundations (CMDB and CSDM) certification. ServiceNow has no full AI certification yet; its AI credentials are short executive micro-certifications.',
  },
  benefits: {
    title: 'Why choose ARA as your ServiceNow training institute',
    items: [
      {
        title: 'Training shaped by real hiring',
        text: 'ARA also runs an IT staffing business, so our ServiceNow courses follow what client companies hire for.',
      },
      {
        title: 'Live classes, every class recorded',
        text: 'Instructor-led classes on Zoom, with every class recorded so you can revise or catch up.',
      },
      {
        title: 'Labs, projects and certification guidance',
        text: 'Hands-on labs on a ServiceNow instance, projects you can show employers, and practice questions for the CSA, CAD and CIS exams.',
      },
      {
        title: 'Placement support',
        text: 'Resume and LinkedIn help, mock interviews and job referrals. Offers depend on your interview performance.',
      },
    ],
  },
  faqs: [
    {
      q: 'Which ServiceNow course is best for me?',
      a: 'It depends on your background. Of our ServiceNow courses in Hyderabad, ServiceNow Admin and ServiceNow Masters suit people new to ServiceNow, and ITSM Development suits admins who want to code. HRSD, CRM and GRC suit HR, customer service and risk professionals, FDSE suits developers, and Business Analyst suits people who prefer requirements to configuration. An advisor can help you choose.',
    },
    {
      q: 'How do I learn ServiceNow from scratch?',
      a: 'Start with the platform basics: users and roles, tables and forms, ITSM processes and the service catalog. Then practise on a free Personal Developer Instance (PDI) from the ServiceNow Developer Program and build projects. ServiceNow Admin and ServiceNow Masters both start from scratch, so no ServiceNow experience is needed.',
    },
    {
      q: 'Is there a ServiceNow course in Hyderabad for freshers?',
      a: 'Yes. ServiceNow Admin, ServiceNow Masters and ServiceNow Business Analyst all suit freshers and graduates. Entry-level roles include ServiceNow administrator, platform support analyst and ServiceNow business analyst.',
    },
    {
      q: 'What is the difference between ServiceNow ITSM, HRSD, CSM and GRC?',
      a: 'They are ServiceNow products for different teams. ITSM handles IT incidents, requests and changes; HRSD handles employees’ HR requests; CSM (Customer Service Management) handles cases from external customers; and GRC (ServiceNow Integrated Risk Management) manages risks, policies, controls and audits. All four run on the same core platform.',
    },
    {
      q: 'Which ServiceNow module is in demand?',
      a: 'ITSM is ServiceNow’s core product and the one most companies start with, so most ServiceNow roles involve it. HRSD, CSM and GRC are specialisms for HR, customer service and risk work, and suit people with experience in those areas. Every ARA ServiceNow course builds on the same core platform.',
    },
    {
      q: 'Which ServiceNow certification should I take first?',
      a: 'Usually the Certified System Administrator (CSA), which ServiceNow suggests before its implementation specialist (CIS) exams. Developers then add CAD, and module specialists add the CIS exam for their area, such as CIS-HR, CIS-CSM or CIS-RC. CIS-ITSM now also needs the CIS – Data Foundations (CMDB and CSDM) certification.',
    },
    {
      q: 'Is ServiceNow a good career?',
      a: 'ServiceNow is used by many large companies, and IT services firms and capability centres in Hyderabad hire administrators, developers and consultants for it. A typical ServiceNow career path runs from administrator or analyst to developer or module specialist, then to technical consultant or architect. AmbitionBox lists ₹2.7 L to ₹10 L a year in India for ServiceNow administrators with 1 to 7 years of experience (November 2026).',
    },
    {
      q: 'What are the ServiceNow course fees in Hyderabad?',
      a: 'Fees depend on the course and the batch. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch dates.',
    },
    {
      q: 'Do the ServiceNow courses include placement support?',
      a: 'Yes. Every ServiceNow course includes resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies. Offers depend on your interview performance.',
    },
    {
      q: 'How do I choose a ServiceNow training institute in Hyderabad?',
      a: 'Check that classes are live and recorded, that you practise on a real ServiceNow instance, that you build projects you can show employers, and exactly what the placement support includes. Ask for the full syllabus before you join: each ARA course page lists its modules, projects, certifications and roles.',
    },
  ],
  closing: {
    title: 'Talk to a ServiceNow course advisor',
    intro:
      'Get a course recommendation for your background, the current fees and the next batch dates. Call, WhatsApp or request a callback.',
  },
};

// Salesforce: from "00-Hub-Salesforce-Courses.docx" (client, Nov 2026), rewritten for the keywords chosen on
// 26 Nov 2026 (primary "salesforce courses in hyderabad"; secondary "salesforce training institute in hyderabad",
// "salesforce course fees in hyderabad", "which salesforce course is best"). Hyderabad is the only location named.
// "Salesforce training in Hyderabad" and the admin and developer course keywords belong to the flagship page
// (/salesforce/); admin, FDE and BA keywords belong to their course pages, so this page links to them.
// Certification names checked on trailhead.salesforce.com (26 Nov 2026).
const salesforce: TrackHub = {
  seo: {
    // The site adds " | ARA Solutions" (47 characters in all).
    title: 'Salesforce Courses in Hyderabad',
    description:
      'Salesforce courses in Hyderabad: Admin, Admin & Developer with Agentforce, FDE and Business Analyst. Live classes, projects, exam prep and placement support.',
  },
  hero: {
    title: 'Salesforce courses in Hyderabad, from admin to Agentforce',
    accent: 'from admin to Agentforce',
    intro:
      'Choose from four Salesforce courses in Hyderabad at ARA Solutions, Madhapur: Salesforce Admin, Salesforce Admin & Developer with Agentforce, Salesforce Forward Deployed Engineer (FDE) and Salesforce Business Analyst. Every course has live instructor-led classes, hands-on labs in your own Salesforce org, real projects, certification guidance and placement support.',
  },
  why: {
    title: 'Why learn Salesforce?',
    text: 'Salesforce is one of the most widely used CRM platforms: companies of every size run sales, customer service and marketing on it. With Agentforce, Salesforce has added AI agents to the platform, creating new AI roles alongside administrator, developer and business analyst jobs.',
  },
  compare: [
    {
      slug: 'salesforce-admin',
      bestFor: 'Freshers and graduates; sales, support and operations staff',
      coding: 'No coding needed',
      certifications: ['Platform Administrator', 'Platform App Builder'],
      roles: ['Salesforce Administrator', 'Salesforce Support Analyst', 'CRM Analyst'],
    },
    {
      slug: 'salesforce',
      bestFor:
        'Freshers, graduates and career switchers who want admin, development and Agentforce in one course',
      coding: 'Taught from the basics (Apex, LWC)',
      certifications: ['Platform Administrator', 'Platform Developer', 'Agentforce Specialist'],
      roles: ['Salesforce Administrator', 'Salesforce Developer', 'Salesforce Admin/Developer'],
    },
    {
      slug: 'salesforce-fde',
      bestFor: 'Salesforce developers, experienced admins and consultants, and software developers',
      coding: 'Coding required; programming experience recommended',
      certifications: ['Agentforce Specialist'],
      roles: ['Forward Deployed Engineer', 'Agentforce Developer', 'Salesforce AI Engineer'],
    },
    {
      slug: 'salesforce-ba',
      bestFor: 'Business and operations professionals; MBA, BBA and BCom graduates; Salesforce admins',
      coding: 'No coding needed',
      certifications: ['Business Analyst'],
      roles: ['Salesforce Business Analyst', 'Salesforce Functional Consultant', 'CRM Business Analyst'],
    },
  ],
  chooser: {
    title: 'How to learn Salesforce: start from your background',
    intro:
      'Not sure which Salesforce course is best for you? Pick the one that builds on what you already know. Salesforce Admin, Admin & Developer with Agentforce and Business Analyst start from the basics; Salesforce FDE expects coding or Salesforce experience.',
    rows: [
      {
        label: 'New, no coding',
        background: 'You are new to Salesforce and want a no-coding start',
        slug: 'salesforce-admin',
      },
      {
        label: 'Admin and coding together',
        background: 'You want admin, development and Agentforce in one course',
        slug: 'salesforce',
      },
      {
        label: 'Developer, into AI agents',
        background: 'You already code or work on Salesforce and want to build AI agents',
        slug: 'salesforce-fde',
      },
      {
        label: 'Business or operations role',
        background: 'You come from a business, sales or operations role and prefer analysis to configuration',
        slug: 'salesforce-ba',
      },
    ],
    note: 'Freshers and graduates can start with Salesforce Admin, Salesforce Admin & Developer with Agentforce or Salesforce Business Analyst. No Salesforce experience is needed for these three.',
  },
  careers: {
    title: 'Salesforce careers and salaries in India',
    intro:
      'Is Salesforce a good career? Salesforce roles range from no-coding admin and analyst jobs to developer, AI and architect jobs, and IT services firms, product companies and capability centres hire for them. Typical annual salaries in India:',
    salaries: [
      { role: 'Salesforce Administrator', experience: '1 to 6 years', pay: '₹2.5 L to ₹12 L' },
      { role: 'Senior Salesforce Administrator', experience: '3 to 9 years', pay: '₹5.1 L to ₹25 L' },
      { role: 'Salesforce Engineer / Developer', experience: '1 to 6 years', pay: '₹3 L to ₹23.2 L' },
      { role: 'Salesforce Architect', experience: '8 to 18 years', pay: '₹19.9 L to ₹63 L' },
    ],
    salaryNote:
      'Annual salary ranges from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
    path: [
      {
        stage: 'Start (0 to 2 years)',
        roles: 'Salesforce Administrator, Junior Salesforce Developer, Salesforce Business Analyst',
      },
      {
        stage: 'Grow (2 to 5 years)',
        roles: 'Salesforce Developer, Agentforce Developer, Salesforce Consultant',
      },
      { stage: 'Lead (5+ years)', roles: 'Technical Lead, Forward Deployed Engineer, Salesforce Architect' },
    ],
  },
  certifications: {
    title: 'Salesforce certification path: what each course prepares you for',
    intro:
      'Most people start with Salesforce Certified Platform Administrator, then add Platform App Builder, Platform Developer, Agentforce Specialist or Business Analyst for the role they want. Our courses prepare you for these exams, and you register and pay for each one yourself through Salesforce’s Trailhead Academy.',
    // Salesforce exams have no short codes, so an exam that two courses prepare you for is listed once under each
    // course (as in the client's table); each card then shows every exam its course covers.
    rows: [
      { name: 'Salesforce Certified Platform Administrator', slug: 'salesforce-admin' },
      { name: 'Salesforce Certified Platform App Builder', slug: 'salesforce-admin' },
      { name: 'Salesforce Certified Platform Administrator II', slug: 'salesforce-admin', next: true },
      { name: 'Salesforce Certified Platform Administrator', slug: 'salesforce' },
      { name: 'Salesforce Certified Platform Developer', slug: 'salesforce' },
      { name: 'Salesforce Certified Agentforce Specialist', slug: 'salesforce' },
      { name: 'Salesforce Certified Agentforce Specialist', slug: 'salesforce-fde' },
      { name: 'Salesforce Certified Platform Developer', slug: 'salesforce-fde', next: true },
      { name: 'Salesforce Certified Data 360 Consultant', slug: 'salesforce-fde', next: true },
      { name: 'Salesforce Certified Business Analyst', slug: 'salesforce-ba' },
      { name: 'IIBA Entry Certificate in Business Analysis (ECBA)', slug: 'salesforce-ba', next: true },
    ],
    note: 'Names from Salesforce Trailhead and IIBA (November 2026). Salesforce renamed Administrator to Platform Administrator and Platform Developer I to Platform Developer in July 2025, and Data Cloud Consultant is now Data 360 Consultant. Platform Administrator II and ECBA are next steps after the Admin and BA courses. Salesforce sets the exam rules and fees: Platform Administrator II needs Platform Administrator first.',
  },
  benefits: {
    title: 'Why choose ARA as your Salesforce training institute',
    items: [
      {
        title: 'Training shaped by real hiring',
        text: 'ARA also runs an IT staffing business, so our Salesforce courses follow what client companies hire for.',
      },
      {
        title: 'Live classes, every class recorded',
        text: 'Instructor-led classes on Zoom, with every class recorded so you can revise or catch up.',
      },
      {
        title: 'Labs, projects and certification guidance',
        text: 'Hands-on labs in a free Salesforce Developer Edition org, projects you can show employers, and practice questions for the Salesforce exams.',
      },
      {
        title: 'Placement support',
        text: 'Resume and LinkedIn help, mock interviews and job referrals. Offers depend on your interview performance.',
      },
    ],
  },
  faqs: [
    {
      q: 'Which Salesforce course should I choose?',
      a: 'It depends on your background. Of our Salesforce courses in Hyderabad, Salesforce Admin suits people new to Salesforce who want a no-coding start, and Salesforce Admin & Developer with Agentforce suits those who want admin, coding and AI in one course. Salesforce FDE suits developers and experienced Salesforce professionals moving into AI agents, and Salesforce Business Analyst suits people from business, sales or operations roles. An advisor can help you choose.',
    },
    {
      q: 'Which Salesforce courses suit freshers?',
      a: 'Salesforce Admin, Salesforce Admin & Developer with Agentforce and Salesforce Business Analyst all suit freshers and graduates. Entry-level roles include Salesforce administrator, junior Salesforce developer and Salesforce business analyst. Salesforce FDE is for people who already code or work on Salesforce.',
    },
    {
      q: 'How do I learn Salesforce from scratch?',
      a: 'Start with the platform basics: objects and fields, users and security, Flow automation and reports. Practise in a free Salesforce Developer Edition org and on Trailhead, then build projects you can show employers. Salesforce Admin and Salesforce Admin & Developer with Agentforce both start from scratch, so no Salesforce experience is needed.',
    },
    {
      q: 'Does Salesforce require coding?',
      a: 'Not for every role. Salesforce Admin and Salesforce Business Analyst need no coding: admins work with clicks, Flow and reports. Developer roles use Apex and Lightning Web Components (LWC), which Salesforce Admin & Developer with Agentforce teaches from the basics. Salesforce FDE expects some programming experience.',
    },
    {
      q: 'Admin, developer or business analyst: which Salesforce role suits me?',
      a: 'Admins configure and run Salesforce with clicks. Developers build what clicks cannot, with Apex and LWC. Business analysts work out what should be built and why, then check that it works for users. Choose admin if you like setting things up, developer if you enjoy coding, and business analyst if you enjoy talking to people and analysing processes.',
    },
    {
      q: 'What is Agentforce, and which courses teach it?',
      a: 'Agentforce is Salesforce’s platform for AI agents that answer questions and take actions, such as updating records or creating cases, using a company’s Salesforce data. Salesforce Admin covers the basics, Salesforce Admin & Developer with Agentforce teaches you to build an agent, and Salesforce FDE goes deepest, with custom actions, grounding in Data 360 (formerly Data Cloud) and testing.',
    },
    {
      q: 'Which Salesforce certification should I get first?',
      a: 'Usually Salesforce Certified Platform Administrator, called Salesforce Certified Administrator until July 2025. Developers then add Platform Developer (formerly Platform Developer I), app builders add Platform App Builder and AI specialists add Agentforce Specialist. Business analysts can start with Salesforce Certified Business Analyst. Of the exams on this page, only Platform Administrator II needs another certification first.',
    },
    {
      q: 'Is Salesforce a good career?',
      a: 'Salesforce skills are in steady demand at IT services firms, product companies and capability centres, and Agentforce has added new AI roles. A typical Salesforce career path runs from administrator, junior developer or business analyst to developer or consultant, then to technical lead or architect.',
    },
    {
      q: 'What are the main Salesforce job roles and salaries?',
      a: 'Common roles are Salesforce administrator, developer, business analyst, consultant and architect, plus newer AI roles such as Agentforce developer and forward deployed engineer. AmbitionBox lists ₹2.5 L to ₹12 L a year in India for Salesforce administrators with 1 to 6 years of experience, ₹3 L to ₹23.2 L for Salesforce engineers and developers with 1 to 6 years, and ₹19.9 L to ₹63 L for architects with 8 to 18 years (November 2026). Pay depends on the company, city, skills and experience.',
    },
    {
      q: 'What are the Salesforce course fees in Hyderabad?',
      a: 'Fees depend on the course and the batch. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch dates.',
    },
    {
      q: 'Do the Salesforce courses include placement support?',
      a: 'Yes. Every Salesforce course includes resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies. Offers depend on your interview performance.',
    },
    {
      q: 'How do I choose a Salesforce training institute in Hyderabad?',
      a: 'Check that classes are live and recorded, that you practise in your own Salesforce org, that you build projects you can show employers, and exactly what the placement support includes. Check that the course uses Salesforce’s current certification names, as many changed in 2025. Each ARA course page lists its modules, projects, certifications and roles.',
    },
  ],
  closing: {
    title: 'Talk to a Salesforce course advisor',
    intro:
      'Get a course recommendation for your background, the current fees and the next batch dates. Call, WhatsApp or request a callback.',
  },
};

/**
 * AI & Data: from "00-Hub-AI-and-Data-Courses.docx" (client, Nov 2026), rewritten for the keywords chosen on
 * 26 Nov 2026 (primary "ai and data courses in hyderabad"; secondary "ai courses in hyderabad", "ai and data
 * science course in hyderabad", "ai training institute in hyderabad"). Hyderabad is the only location named.
 * The course keywords (AI & ML, Agentic AI, Data Science, Data Engineering, Data Analytics, AI Product Owner)
 * belong to the course pages, so this page links to them rather than targeting them.
 */
const aiData: TrackHub = {
  seo: {
    // The site adds " | ARA Solutions" (48 characters in all).
    title: 'AI and Data Courses in Hyderabad',
    description:
      'AI and data courses in Hyderabad: AI & ML, Agentic AI, Data Science, Data Engineering, Data Analytics and AI Product Owner. Live classes and placement support.',
  },
  hero: {
    title: 'AI and data courses in Hyderabad, from analytics to AI agents',
    accent: 'from analytics to AI agents',
    intro:
      'Choose from six AI and data courses in Hyderabad at ARA Solutions, Madhapur: AI & Machine Learning, Agentic AI Engineering, Data Science, Data Engineering, Data Analytics and AI Product Owner. Every course has live instructor-led classes, hands-on projects, certification guidance and placement support.',
  },
  why: {
    title: 'Why learn AI and data skills?',
    text: 'AI and data skills are now expected across IT, from dashboards and analytics to machine learning, data pipelines and AI agents. IT services firms and global capability centres in Hyderabad hire data analysts, data engineers, data scientists and AI engineers, and newer roles focus on generative AI and AI agents.',
  },
  compare: [
    {
      slug: 'ai-ml',
      bestFor: 'Graduates and freshers; software developers',
      coding: 'Taught in the course (Python)',
      certifications: ['AWS Certified Machine Learning Engineer – Associate', 'AI-103'],
      roles: ['AI Engineer', 'Generative AI Developer', 'Machine Learning Engineer'],
    },
    {
      slug: 'data-science',
      bestFor: 'Graduates in science, maths, engineering or commerce; data and business analysts',
      coding: 'Taught in the course (Python)',
      certifications: ['AWS Certified Machine Learning Engineer – Associate', 'AI-300'],
      roles: ['Data Scientist', 'Junior Machine Learning Engineer', 'Data Analyst'],
    },
    {
      slug: 'data-engineering',
      bestFor: 'Graduates with programming basics; SQL, ETL and BI developers',
      coding: 'Taught in the course (SQL, Python)',
      certifications: ['Databricks Certified Data Engineer Associate'],
      roles: ['Data Engineer', 'Big Data Engineer', 'ETL Developer'],
    },
    {
      slug: 'data-analytics',
      bestFor: 'Freshers from any degree; Excel and MIS professionals',
      coding: 'Taught in the course (SQL, Python)',
      certifications: ['PL-300', 'Salesforce Certified Tableau Data Analyst'],
      roles: ['Data Analyst', 'Business Intelligence Analyst', 'Power BI Developer'],
    },
    {
      slug: 'agentic-ai',
      bestFor: 'Software developers; AI and ML engineers',
      coding: 'Coding required (basic Python)',
      certifications: ['AI-103'],
      roles: ['Agentic AI Engineer', 'AI Automation Engineer', 'AI Solutions Engineer'],
    },
    {
      slug: 'ai-product-owner',
      bestFor: 'Business analysts and product owners; project managers',
      coding: 'No coding needed',
      certifications: ['PSPO I', 'PSPO-AI Essentials'],
      roles: ['AI Product Owner', 'AI Product Manager', 'AI Business Analyst'],
    },
  ],
  chooser: {
    title: 'Which AI course is best for you? Start from your background',
    intro:
      'Pick the course that builds on what you already know. Agentic AI Engineering builds on AI & Machine Learning, so an advisor can tell you whether to take AI & ML first.',
    rows: [
      {
        label: 'No coding background',
        background: 'You have no coding background and want a quick route into a data job',
        slug: 'data-analytics',
      },
      {
        label: 'Predict with data',
        background: 'You want to find patterns in data and predict what will happen',
        slug: 'data-science',
      },
      {
        label: 'Build data pipelines',
        background: 'You like building systems and data pipelines',
        slug: 'data-engineering',
      },
      {
        label: 'Build AI apps',
        background: 'You want to build AI apps with machine learning and LLMs',
        slug: 'ai-ml',
      },
      {
        label: 'Know LLMs, want agents',
        background: 'You already know Python and LLMs and want to build AI agents',
        slug: 'agentic-ai',
      },
      {
        label: 'Product, BA or project roles',
        background: 'You come from product, business analysis or project roles',
        slug: 'ai-product-owner',
      },
    ],
    note: 'Freshers and graduates can start with Data Analytics, Data Science, Data Engineering or AI & Machine Learning. Agentic AI Engineering needs basic Python, and AI Product Owner suits people with business or project experience.',
  },
  careers: {
    title: 'AI and data careers and salaries in India',
    intro:
      'Is AI a good career? Most people start as a data analyst or a junior engineer, then grow into data science, data engineering or AI engineering. Newer roles focus on generative AI and AI agents. Typical annual salaries in India:',
    salaries: [
      { role: 'Data Analyst', experience: '0 to 6 years', pay: '₹2 L to ₹13.9 L' },
      { role: 'Data Scientist', experience: '1 to 8 years', pay: '₹3.8 L to ₹27.9 L' },
      { role: 'Data Engineer', experience: 'Varies', pay: '₹3.9 L to ₹22 L' },
      { role: 'ML Engineer', experience: 'Varies', pay: '₹3.6 L to ₹29 L' },
      { role: 'AI Engineer', experience: '0 to 6 years', pay: '₹3.5 L to ₹33 L' },
    ],
    salaryNote:
      'Annual salary ranges from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
    path: [
      { stage: 'Start (0 to 2 years)', roles: 'Data Analyst, Junior Data Engineer, Junior Data Scientist' },
      { stage: 'Grow (2 to 5 years)', roles: 'Data Scientist, Data Engineer, AI Engineer' },
      { stage: 'Lead (5+ years)', roles: 'Senior AI Engineer, Data Architect, AI Product Manager' },
    ],
  },
  certifications: {
    title: 'AI and data certifications: what each course prepares you for',
    intro:
      'Microsoft, AWS, Databricks, Salesforce (for Tableau) and Scrum.org run the exams our courses prepare you for, and you book and pay for each exam yourself with the issuer. Cloud exams also test the provider’s own services, so plan some hands-on practice on AWS or Azure as well. Microsoft retired AI-102 and DP-100 in 2026, and our courses prepare you for the current AI-103 and AI-300 exams.',
    rows: [
      { name: 'AWS Certified Machine Learning Engineer – Associate', slug: 'ai-ml' },
      { name: 'Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103)', slug: 'ai-ml' },
      { name: 'Google Cloud Professional Machine Learning Engineer', slug: 'ai-ml', next: true },
      // Listed again so it also shows on the Data Science card (cards group rows by course).
      { name: 'AWS Certified Machine Learning Engineer – Associate', slug: 'data-science' },
      {
        name: 'Microsoft Certified: Machine Learning Operations Engineer Associate (AI-300)',
        slug: 'data-science',
      },
      { name: 'Databricks Certified Data Engineer Associate', slug: 'data-engineering' },
      {
        name: 'Microsoft Certified: Fabric Data Engineer Associate (DP-700)',
        slug: 'data-engineering',
        next: true,
      },
      { name: 'AWS Certified Data Engineer – Associate', slug: 'data-engineering', next: true },
      { name: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)', slug: 'data-analytics' },
      { name: 'Salesforce Certified Tableau Data Analyst', slug: 'data-analytics' },
      // AI-103 is added to the Agentic AI card from its compare row.
      { name: 'AWS Certified Generative AI Developer – Professional', slug: 'agentic-ai', next: true },
      { name: 'NVIDIA-Certified Associate: Generative AI LLMs (NCA-GENL)', slug: 'agentic-ai', next: true },
      { name: 'Scrum.org Professional Scrum Product Owner I (PSPO I)', slug: 'ai-product-owner' },
      {
        name: 'AI-Empowered SAFe Product Owner/Product Manager (POPM)',
        slug: 'ai-product-owner',
        next: true,
      },
      {
        name: 'Scrum.org Professional Scrum Product Owner – AI Essentials (PSPO-AI Essentials)',
        slug: 'ai-product-owner',
      },
    ],
    note: 'Names from Microsoft Learn, AWS, Google Cloud, NVIDIA, Databricks, Salesforce Trailhead, Scrum.org and Scaled Agile (November 2026). Each card shows the course that prepares you for the exam or leads on to it. The issuers set the eligibility and exam rules: AWS and Google Cloud recommend hands-on experience before their professional exams, and AWS is moving the Machine Learning Engineer – Associate exam to a new version (MLA-C02), in beta from September 2026.',
  },
  benefits: {
    title: 'Why choose ARA as your AI training institute in Hyderabad',
    items: [
      {
        title: 'Training shaped by real hiring',
        text: 'ARA also runs an IT staffing business, so our AI and data courses follow what client companies hire for.',
      },
      {
        title: 'Live classes, every class recorded',
        text: 'Instructor-led classes on Zoom, with every class recorded so you can revise or catch up.',
      },
      {
        title: 'Projects and certification guidance',
        text: 'Hands-on labs, projects you can show employers, and practice questions for the Microsoft, AWS, Databricks and Scrum.org exams.',
      },
      {
        title: 'Placement support',
        text: 'Resume and LinkedIn help, mock interviews and job referrals. Offers depend on your interview performance.',
      },
    ],
  },
  faqs: [
    {
      q: 'Which AI course is best for getting a job?',
      a: 'The one that matches your background and the role you want. Data Analytics is the quickest start and needs no coding experience. Data Science suits people who want to predict with data, and Data Engineering suits people who like building systems. AI & Machine Learning suits those who want to build AI apps, Agentic AI Engineering suits developers who already know LLMs, and AI Product Owner suits people from product, business analysis or project roles. An advisor can help you choose.',
    },
    {
      q: 'Are there AI courses in Hyderabad for freshers?',
      a: 'Yes. Of our AI and data courses in Hyderabad, Data Analytics needs no coding experience, and AI & Machine Learning, Data Science and Data Engineering teach Python from the basics. School-level maths is enough to start. Agentic AI Engineering needs basic Python, and AI Product Owner suits people with some business or project experience.',
    },
    {
      q: 'What is the difference between data analytics, data science and data engineering?',
      a: 'Data analytics explains what happened, with reports and dashboards. Data science predicts what will happen, with statistics and machine learning. Data engineering builds the pipelines and platforms that both depend on. Each has its own course and its own first job: data analyst, junior data scientist or junior data engineer.',
    },
    {
      q: 'Should I choose an AI course or a data science course?',
      a: 'Choose Data Science if you enjoy statistics and want to answer business questions with data. Choose AI & Machine Learning if you want to build applications with machine learning and large language models. Both of these AI and data science courses in Hyderabad start Python from the basics, and the skills overlap, so you can add the other later.',
    },
    {
      q: 'In what order should I take the AI courses?',
      a: 'AI & Machine Learning comes first: it teaches the machine learning, LLM and RAG foundations. Agentic AI Engineering builds on them to create AI agents that plan, use tools and work together. Data Analytics, Data Science and Data Engineering each stand alone, and AI Product Owner needs no coding.',
    },
    {
      q: 'Is AI a good career?',
      a: 'IT services firms and global capability centres in Hyderabad hire data analysts, data engineers, data scientists and AI engineers, and newer roles focus on generative AI and AI agents. A typical path runs from data analyst or junior engineer to data scientist, data engineer or AI engineer, then to senior AI engineer, data architect or AI product manager. AmbitionBox lists ₹3.5 L to ₹33 L a year in India for AI engineers with 0 to 6 years of experience (November 2026).',
    },
    {
      q: 'Which AI and data certifications are worth getting?',
      a: 'The one that matches the job you want: Microsoft PL-300 for data analysts, Databricks Certified Data Engineer Associate for data engineers, AWS Certified Machine Learning Engineer – Associate or Microsoft AI-103 for ML and AI engineers, and Scrum.org PSPO I for product owners. Microsoft retired AI-102 and DP-100 in 2026, so check that a course prepares you for the current exams.',
    },
    {
      q: 'Will AI replace data analyst and data scientist jobs?',
      a: 'AI is changing data jobs: analysts and data scientists now use AI assistants to clean data, write queries and draft reports, and employers expect them to check that output. Our courses teach you to use AI tools in your work and to judge when their answers are wrong.',
    },
    {
      q: 'Can I join without a computer science or IT degree?',
      a: 'Yes. Graduates from science, commerce, maths and engineering join our AI and data courses. You need regular practice and school-level maths; the Python and statistics you need are taught.',
    },
    {
      q: 'Can working professionals join the AI and data courses?',
      a: 'Yes. Classes are live on Zoom and every class is recorded, so you can catch up on one you miss. Ask an advisor about batch timings that suit working professionals.',
    },
    {
      q: 'What are the AI course fees in Hyderabad?',
      a: 'Fees depend on the course and the batch. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch dates.',
    },
    {
      q: 'Do the AI and data courses include placement support?',
      a: 'Yes. Every course includes resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies. Offers depend on your interview performance.',
    },
    {
      q: 'How do I choose an AI training institute in Hyderabad?',
      a: 'Check that classes are live and recorded, that you build and deploy projects you can show employers, that the course prepares you for current certification exams, and exactly what the placement support includes. Ask for the full syllabus before you join: each ARA course page lists its modules, tools, projects, certifications and roles.',
    },
  ],
  closing: {
    title: 'Talk to an AI and data course advisor',
    intro:
      'Get a course recommendation for your background, the current fees and the next batch dates. Call, WhatsApp or request a callback.',
  },
};

const fullStack: TrackHub = {
  seo: {
    // The site adds " | ARA Solutions" (56 characters in all).
    title: 'Full Stack Developer Course in Hyderabad',
    description:
      'Full stack developer course in Hyderabad: MERN, Python or Java with AI, plus Business Analyst with GenAI. Live classes, real projects and placement support.',
  },
  hero: {
    title: 'Full stack developer course in Hyderabad: MERN, Python or Java',
    accent: 'MERN, Python or Java',
    intro:
      'Choose a full stack developer course in Hyderabad in the stack you want to work in: JavaScript (MERN), Python or Java, each with AI features built in. ARA Solutions in Madhapur also offers Business Analyst with GenAI for people who want to work on software projects without coding. Every course has live instructor-led classes, hands-on labs, three projects and a capstone, certification preparation and placement support.',
  },
  why: {
    title: 'Why learn full stack development?',
    text: 'Full stack developers build both what users see and the servers and databases behind it. Startups, product companies and IT services firms in Hyderabad hire them, and employers now also expect developers to add AI features to their apps and to use AI coding tools well.',
  },
  compare: [
    {
      slug: 'python-full-stack',
      bestFor: 'Freshers and graduates; data or AI learners who want to build web apps',
      coding: 'Taught from the basics (Python and JavaScript)',
      certifications: ['PCAP', 'GitHub Foundations'],
      roles: ['Python Full Stack Developer', 'Python Developer', 'Django Developer'],
    },
    {
      slug: 'java-full-stack',
      bestFor: 'Freshers and graduates; Java developers who want Spring Boot, React and AI',
      coding: 'Taught from the basics (Java and JavaScript)',
      certifications: ['1Z0-830'],
      roles: ['Java Full Stack Developer', 'Java Developer', 'Spring Boot Developer'],
    },
    {
      slug: 'full-stack-ai',
      bestFor: 'Freshers and graduates; front-end or back-end developers who want to go full stack',
      coding: 'Taught from the basics (JavaScript)',
      certifications: ['MongoDB Associate Developer'],
      roles: ['Full Stack Developer', 'MERN Stack Developer', 'Front End (React) Developer'],
    },
    {
      slug: 'business-analyst-genai',
      bestFor: 'Graduates from any field and working professionals who prefer analysis to coding',
      coding: 'No coding needed',
      certifications: ['ECBA'],
      roles: ['Business Analyst', 'IT Business Analyst', 'Product Analyst'],
    },
  ],
  chooser: {
    title: 'Which full stack course is best for you?',
    intro:
      'All three developer courses start from the basics, so you do not need coding experience. Pick the stack that fits the work you want to do, or Business Analyst with GenAI if you would rather not code.',
    rows: [
      {
        label: 'Web apps and AI',
        background: 'You want to build web apps and work towards AI',
        slug: 'python-full-stack',
      },
      {
        label: 'Enterprise systems',
        background: 'You want to build large enterprise systems for banks and IT services firms',
        slug: 'java-full-stack',
      },
      {
        label: 'One language, front to back',
        background: 'You want one language, JavaScript, for the front end and the back end',
        slug: 'full-stack-ai',
      },
      {
        label: 'Analysis, not coding',
        background: 'You prefer analysis and working with people to coding',
        slug: 'business-analyst-genai',
      },
    ],
    note: 'Freshers and graduates can start with any of the three developer courses. Business Analyst with GenAI suits graduates from any field.',
  },
  careers: {
    title: 'Full stack developer careers and salaries',
    intro:
      'Is full stack developer a good career? Startups, product companies and IT services firms hire full stack developers at every level, and developers who can add AI features and deploy their own apps stand out. Typical annual salaries from AmbitionBox, for India and for Hyderabad:',
    salaries: [
      { role: 'Full Stack Developer', experience: '0 to 7 years', pay: '₹1.8 L to ₹15.4 L' },
      { role: 'Full Stack Developer (Hyderabad)', experience: 'Varies', pay: '₹2 L to ₹14.5 L' },
      { role: 'Business Analyst', experience: '1+ years', pay: '₹3 L to ₹17 L' },
    ],
    salaryNote:
      'Annual salary ranges from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
    path: [
      {
        stage: 'Start (0 to 2 years)',
        roles: 'Junior Full Stack Developer, Java or Python Developer, Business Analyst',
      },
      {
        stage: 'Grow (2 to 5 years)',
        roles: 'Full Stack Developer, Spring Boot or Django Developer, Senior BA',
      },
      { stage: 'Lead (5+ years)', roles: 'Senior Engineer, Tech Lead, Solution Architect' },
    ],
  },
  certifications: {
    title: 'Full stack certifications: what each course prepares you for',
    intro:
      'Each course prepares you for the exams below. You register and pay for each exam with the organisation that runs it: MongoDB, Python Institute, GitHub (through Microsoft Learn), Oracle, IIBA or Scrum.org. Each issuer sets its own rules, so check the current requirements on its site before you book.',
    rows: [
      { name: 'Python Institute Certified Associate Python Programmer (PCAP)', slug: 'python-full-stack' },
      { name: 'GitHub Foundations', slug: 'python-full-stack' },
      { name: 'Oracle Certified Professional: Java SE 21 Developer (1Z0-830)', slug: 'java-full-stack' },
      { name: 'MongoDB Associate Developer (Node.js)', slug: 'full-stack-ai' },
      { name: 'IIBA Entry Certificate in Business Analysis (ECBA)', slug: 'business-analyst-genai' },
      {
        name: 'Scrum.org Professional Scrum Product Owner I (PSPO I)',
        slug: 'business-analyst-genai',
        next: true,
      },
    ],
    note: 'Names from each issuer’s site (November 2026). The Java course page also covers Oracle’s newer Java SE 25 Developer exam (1Z0-831). Later steps: AWS Certified Developer – Associate after any developer course (AWS recommends a year of hands-on AWS experience; its new version, DVA-C03, replaces DVA-C02 from 1 December 2026); Spring Certified Professional 2024 (2V0-72.22) after the Java course (Broadcom also requires one of its approved Spring courses); and IIBA CCBA once you have 3,750 hours (two to three years) of business analysis work. The MERN course also covers much of the HTML, CSS, JavaScript and React in Meta’s Front-End Developer Professional Certificate, which you earn by completing Meta’s courses on Coursera.',
  },
  benefits: {
    title: 'Why choose ARA as your full stack training institute',
    items: [
      {
        title: 'Training shaped by real hiring',
        text: 'ARA also runs an IT staffing business, so our full stack courses follow what client companies hire for.',
      },
      {
        title: 'Live classes, every class recorded',
        text: 'Instructor-led classes on Zoom, with every class recorded so you can revise or catch up.',
      },
      {
        title: 'Projects and certification preparation',
        text: 'Hands-on labs, three projects and a capstone you can show employers, plus practice for the certifications above.',
      },
      {
        title: 'Placement support',
        text: 'Resume and LinkedIn help, mock interviews and job referrals. Offers depend on your interview performance.',
      },
    ],
  },
  faqs: [
    {
      q: 'Which full stack course is best for me: MERN, Python or Java?',
      a: 'Choose by the work you want to do. MERN uses JavaScript from front end to back end and suits startups and product companies. Python suits web apps that lean on AI and data. Java suits large enterprise systems at banks, insurers and IT services firms. If you prefer analysis to coding, choose Business Analyst with GenAI. An advisor can help you decide.',
    },
    {
      q: 'Can I join a full stack developer course without coding experience?',
      a: 'Yes. The MERN, Python and Java courses all start from the basics, so you need no coding background. Logical thinking and regular practice matter more. Business Analyst with GenAI needs no coding at all.',
    },
    {
      q: 'How do I become a full stack developer?',
      a: 'Learn the web basics (HTML, CSS and JavaScript), then one front-end framework such as React, one back-end language and framework, and a database. Build and deploy real projects, put them on GitHub and prepare for interviews. Each ARA full stack course follows this route in one stack, with AI features added.',
    },
    {
      q: 'Why do the full stack courses include AI?',
      a: 'Employers now expect developers to build AI features, such as chat assistants and answers from documents, and to use AI coding tools while checking what they produce. Each course teaches both in its own stack.',
    },
    {
      q: 'Which certifications do the full stack courses lead to?',
      a: 'MongoDB Associate Developer (MERN), Python Institute PCAP and GitHub Foundations (Python), Oracle Certified Professional: Java SE 21 Developer (Java), and IIBA ECBA and Scrum.org PSPO I (Business Analyst with GenAI). You register and pay for each exam with its issuer. AWS Certified Developer – Associate and Spring Certified Professional are later steps.',
    },
    {
      q: 'Python or Java full stack: which is better for freshers?',
      a: 'Both suit freshers, and both courses start from the basics. Python is quicker to pick up and is also the main language of AI and data work. Java takes more practice but is widely used in large enterprise systems at banks, insurers and IT services firms. Choose by the kind of company you want to work for, or ask an advisor.',
    },
    {
      q: 'Are there full stack developer jobs for freshers?',
      a: 'Yes. Startups, product companies and IT services firms hire freshers as junior full stack, React, Java or Python developers. Deployed projects and a GitHub portfolio help a fresher stand out.',
    },
    {
      q: 'Is full stack developer a good career?',
      a: 'It can be. Full stack developers are hired at every level, from startups to large IT services firms, and can grow into senior engineer, tech lead or solution architect roles. Adding AI skills and deployment experience makes a stronger profile.',
    },
    {
      q: 'What is the salary of a full stack developer in Hyderabad?',
      a: 'AmbitionBox lists ₹2 L to ₹14.5 L a year for full stack developers in Hyderabad, and ₹1.8 L to ₹15.4 L in India for 0 to 7 years of experience (November 2026). Pay depends on the company, skills and experience.',
    },
    {
      q: 'Why is Business Analyst with GenAI part of the Full Stack with AI track?',
      a: 'It suits people who want to work on software projects without coding. Business analysts work alongside full stack developers, turning business needs into requirements and user stories that developers build.',
    },
    {
      q: 'How many projects do the full stack courses include?',
      a: 'Each course includes three real-world projects and a capstone. In the developer courses you deploy your apps, so employers can try them and see your code on GitHub.',
    },
    {
      q: 'What are the full stack developer course fees in Hyderabad?',
      a: 'Fees depend on the course and the batch. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch dates. Advisors can also suggest batch timings that suit working professionals.',
    },
    {
      q: 'Is there a full stack developer course in Hyderabad with placement support?',
      a: 'Yes. Every course in this track includes resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies. Offers depend on your interview performance.',
    },
    {
      q: 'How do I choose a full stack training institute in Hyderabad?',
      a: 'Check that classes are live and recorded, that you build and deploy projects you can show employers, which certifications the course prepares you for, and exactly what the placement support includes. Ask for the full syllabus before you join: each ARA course page lists its modules, projects, certifications and roles.',
    },
  ],
  closing: {
    title: 'Talk to a full stack course advisor',
    intro:
      'Get a course recommendation for your goals, the current fees and the next batch dates. Call, WhatsApp or request a callback.',
  },
};

const hubs: Record<string, TrackHub> = {
  'workday-courses': workday,
  'servicenow-courses': servicenow,
  'salesforce-courses': salesforce,
  'ai-and-data-courses': aiData,
  'full-stack-courses': fullStack,
};

export const getHub = (trackSlug: string): TrackHub | undefined => hubs[trackSlug];
