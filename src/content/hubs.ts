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
  chooser: { title: string; intro: string; rows: { background: string; slug: string }[]; note: string };
  careers: {
    title: string;
    intro: string;
    salaries: { role: string; experience: string; pay: string }[];
    salaryNote: string;
    path: { stage: string; roles: string }[];
  };
  certifications: { title: string; intro: string; rows: { name: string; slug: string }[]; note: string };
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
      certifications: ['Workday Pro HCM Core', 'Workday Pro Security'],
      roles: ['Workday HCM Consultant', 'Workday HRIS Analyst', 'Workday Reporting Analyst'],
    },
    {
      slug: 'workday-finance',
      bestFor: 'Finance and accounting professionals; CA, CMA and commerce graduates',
      coding: 'No coding needed',
      certifications: ['Workday Pro Record to Report', 'Workday Pro Procure to Pay'],
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
      { background: 'You have an HR, payroll or HRIS background', slug: 'workday-hcm' },
      { background: 'You have an accounting or finance background', slug: 'workday-finance' },
      { background: 'You have a development or integration background', slug: 'workday-integration' },
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
      a: 'Fees depend on the course and the batch. Call or WhatsApp +91 90100 09226 for the current fees, EMI options and the next batch dates.',
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
    {
      q: 'Can I learn Workday HCM and Integrations together?',
      a: 'Yes. Many Workday consultants combine a functional area such as HCM with integrations, and integration roles often pay more because fewer people have the technical skills.',
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
      'ServiceNow courses in Hyderabad: Admin, ITSM Development, Masters & AI, HRSD, CRM, GRC, FDSE and BA. Live classes, projects, CSA/CIS prep and placement support.',
  },
  hero: {
    title: 'ServiceNow courses in Hyderabad, from admin to AI',
    accent: 'from admin to AI',
    intro:
      'Choose from eight ServiceNow courses in Hyderabad at ARA Solutions, Madhapur: ServiceNow Admin, ITSM Development, Masters & AI, HRSD, CRM, GRC, Forward Deployed Software Engineer (FDSE) and Business Analyst. Every course has live instructor-led classes, hands-on labs, real projects, certification guidance and placement support.',
  },
  why: {
    title: 'Why learn ServiceNow?',
    text: 'ServiceNow runs IT, HR, customer service and risk workflows for many large companies. IT services firms and capability centres in Hyderabad hire ServiceNow administrators, developers and consultants to set up and run those workflows, and Now Assist and AI agents have added new AI work on the platform.',
  },
  compare: [
    {
      slug: 'servicenow-admin-platform',
      bestFor: 'Freshers and graduates; IT support and help desk staff',
      coding: 'No coding needed',
      certifications: ['CSA'],
      roles: ['ServiceNow Administrator', 'ServiceNow ITSM Support Specialist', 'ServiceNow Platform Support Analyst'],
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
      bestFor: 'Freshers, graduates and IT support staff who want admin, development, HRSD and AI in one course',
      coding: 'Taught from the basics (JavaScript)',
      certifications: ['CSA', 'CAD', 'CIS-HR', 'Now Assist and Agentic AI executive micro-certifications'],
      roles: ['ServiceNow Administrator', 'ServiceNow Developer', 'ServiceNow HRSD Developer'],
    },
    {
      slug: 'servicenow-hrsd',
      bestFor: 'HR professionals and ServiceNow administrators',
      coding: 'No coding needed',
      certifications: ['CIS-HR'],
      roles: ['ServiceNow HRSD Consultant', 'ServiceNow HRSD Developer', 'ServiceNow HRSD Technical Consultant'],
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
      certifications: ['CAD', 'Agentic AI executive micro-certification'],
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
      { background: 'You are new to ServiceNow and want one focused course', slug: 'servicenow-admin-platform' },
      { background: 'You want admin, development, HRSD and AI in one course', slug: 'servicenow' },
      { background: 'You know ServiceNow admin and want to code', slug: 'servicenow-itsm-development' },
      { background: 'You have an HR background', slug: 'servicenow-hrsd' },
      { background: 'You work in customer service or CRM', slug: 'servicenow-crm' },
      { background: 'You work in audit, risk or compliance', slug: 'servicenow-grc' },
      { background: 'You are a developer and want to build AI agents', slug: 'servicenow-fdse' },
      { background: 'You prefer requirements and analysis to configuration', slug: 'servicenow-ba' },
    ],
    note: 'Freshers and graduates can start with ServiceNow Admin, ServiceNow Masters & AI or ServiceNow Business Analyst. No ServiceNow experience is needed for these three.',
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
      { name: 'ServiceNow Certified System Administrator (CSA)', slug: 'servicenow-admin-platform' },
      { name: 'ServiceNow Certified Application Developer (CAD)', slug: 'servicenow-itsm-development' },
      {
        name: 'ServiceNow Certified Implementation Specialist – IT Service Management (CIS-ITSM)',
        slug: 'servicenow-itsm-development',
      },
      {
        name: 'ServiceNow Certified Implementation Specialist – Human Resources (CIS-HR)',
        slug: 'servicenow-hrsd',
      },
      {
        name: 'ServiceNow Certified Implementation Specialist – Customer Service Management (CIS-CSM)',
        slug: 'servicenow-crm',
      },
      {
        name: 'ServiceNow Certified Implementation Specialist – Risk and Compliance (CIS-RC)',
        slug: 'servicenow-grc',
      },
      {
        name: 'ServiceNow Certified Implementation Specialist – Third-Party Risk Management (CIS-TPRM)',
        slug: 'servicenow-grc',
      },
      { name: 'Now Assist Executive Micro-Certification', slug: 'servicenow' },
      { name: 'Agentic AI Executive Micro-Certification', slug: 'servicenow-fdse' },
      { name: 'IIBA Entry Certificate in Business Analysis (ECBA)', slug: 'servicenow-ba' },
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
      a: 'It depends on your background. Of our ServiceNow courses in Hyderabad, ServiceNow Admin and ServiceNow Masters & AI suit people new to ServiceNow, and ITSM Development suits admins who want to code. HRSD, CRM and GRC suit HR, customer service and risk professionals, FDSE suits developers, and Business Analyst suits people who prefer requirements to configuration. An advisor can help you choose.',
    },
    {
      q: 'ServiceNow Admin or ServiceNow Masters & AI: which should I take?',
      a: 'Take ServiceNow Admin if you want one focused course that leads to an administrator role and the CSA exam. Take ServiceNow Masters & AI if you want admin, development, HRSD and AI in one longer course, for a wider range of roles and the CSA, CAD and CIS-HR exams.',
    },
    {
      q: 'How do I learn ServiceNow from scratch?',
      a: 'Start with the platform basics: users and roles, tables and forms, ITSM processes and the service catalog. Then practise on a free Personal Developer Instance (PDI) from the ServiceNow Developer Program and build projects. ServiceNow Admin and ServiceNow Masters & AI both start from scratch, so no ServiceNow experience is needed.',
    },
    {
      q: 'Is there a ServiceNow course in Hyderabad for freshers?',
      a: 'Yes. ServiceNow Admin, ServiceNow Masters & AI and ServiceNow Business Analyst all suit freshers and graduates. Entry-level roles include ServiceNow administrator, platform support analyst and ServiceNow business analyst.',
    },
    {
      q: 'Which ServiceNow courses need coding?',
      a: 'ServiceNow Admin, HRSD, CRM, GRC and Business Analyst need no coding. ITSM Development teaches JavaScript and the Glide APIs, and ServiceNow Masters & AI teaches coding from the basics. FDSE is for people who can already program.',
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
      q: 'Which ServiceNow courses cover Now Assist and AI agents?',
      a: 'ServiceNow Masters & AI and ServiceNow FDSE go deepest, with Now Assist skills, AI agents and AI Control Tower. ServiceNow CRM covers Now Assist for customer service, and ServiceNow Business Analyst covers Now Assist for analysts. ServiceNow has no full AI certification yet, only short executive micro-certifications.',
    },
    {
      q: 'Is ServiceNow a good career?',
      a: 'ServiceNow is used by many large companies, and IT services firms and capability centres in Hyderabad hire administrators, developers and consultants for it. A typical ServiceNow career path runs from administrator or analyst to developer or module specialist, then to technical consultant or architect. AmbitionBox lists ₹2.7 L to ₹10 L a year in India for ServiceNow administrators with 1 to 7 years of experience (November 2026).',
    },
    {
      q: 'What are the ServiceNow course fees in Hyderabad?',
      a: 'Fees depend on the course and the batch. Call or WhatsApp +91 90100 09226 for the current fees, EMI options and the next batch dates.',
    },
    {
      q: 'Are all ServiceNow courses taught live?',
      a: 'Yes. Every ServiceNow course is taught live by an instructor on Zoom, and every class is recorded so you can revise or catch up. Our advisors are based in Madhapur, Hyderabad.',
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

const hubs: Record<string, TrackHub> = { 'workday-courses': workday, 'servicenow-courses': servicenow };

export const getHub = (trackSlug: string): TrackHub | undefined => hubs[trackSlug];
