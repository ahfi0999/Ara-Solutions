/**
 * ARA Solutions training programs: Salesforce, ServiceNow, AI & Machine Learning, Agentic AI,
 * Cybersecurity and Full Stack with AI. ServiceNow, Cybersecurity, AI & ML and Full Stack content
 * follows ARA's existing website.
 *
 * The other courses in each training track have the same kind of page; their content is in courses/.
 *
 * Fees, durations and batch dates are intentionally NOT listed: visitors are asked to speak
 * with an advisor. Add them to `details` once confirmed and they will appear on the page.
 */

import { courses, type CourseSlug } from './courses';

/** The six flagship programs: the ones on the home page, the Training page and in the site's counts. */
export type ProgramSlug =
  'salesforce' | 'servicenow' | 'ai-ml' | 'agentic-ai' | 'cybersecurity' | 'full-stack-ai';

/** Any page under /training-placement/<slug>/ with a full syllabus: a flagship program or a course. */
export type PageSlug = ProgramSlug | CourseSlug;

export type Module = {
  title: string;
  summary: string;
  topics: string[];
  /** Optional hands-on lab for the module (from a trainer or client course document). */
  lab?: string;
};

export type ProgramFamily =
  'Enterprise platforms' | 'AI' | 'Data' | 'Security' | 'Development' | 'Business analysis';

export type Program<Slug extends string = PageSlug> = {
  slug: Slug;
  family: ProgramFamily;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  accent: 'sky' | 'violet' | 'rose' | 'emerald' | 'amber' | 'indigo';
  prerequisites: string;
  /** Optional confirmed details. Leave undefined to show "Ask an advisor". */
  details?: {
    duration?: string;
    mode?: string;
    fees?: string;
    nextBatch?: string;
    /** Shown in "at a glance" only when set. */
    coding?: string;
    location?: string;
  };
  /**
   * Optional page heading (H1) written for search, e.g. "Workday HCM Course: …". Defaults to `name`.
   * The fields below it, also optional, come from the client's page documents; a page shows each
   * section only when it is set.
   */
  h1?: string;
  /** "About the course": paragraphs, plus an optional "why learn it" list. */
  about?: { paragraphs: string[]; whyTitle?: string; why?: string[] };
  skills?: string[];
  /** A final project that brings the course together, shown after the projects. */
  capstone?: string;
  /** Shown above the certification list, e.g. who can take the exams. */
  certificationIntro?: string;
  /** Salaries (with their source) and a career path, shown with the roles. */
  careers?: {
    salaries: { role: string; experience: string; pay: string }[];
    salaryNote: string;
    path: { stage: string; roles: string }[];
  };
  /** Optional official product logo (path under /public) shown on the program card banner. */
  logo?: string;
  /** Optional photo (path under /public) shown as the program card banner and behind the page hero. */
  image?: string;
  /** Optional photo behind the page hero only (the card keeps its coloured banner with the course name). */
  heroImage?: string;
  highlights: string[];
  audience: { title: string; text: string }[];
  outcomes: string[];
  modules: Module[];
  tools: string[];
  /** `text` is what you build; `problem` and `result`, when set, frame it as a client brief. */
  projects: { title: string; text: string; stack: string[]; problem?: string; result?: string }[];
  certifications?: { name: string; note: string }[];
  roles: { title: string; text: string; level?: string }[];
  faqs: { q: string; a: string }[];
};

export const programs: Program<ProgramSlug>[] = [
  {
    slug: 'salesforce',
    image: '/images/programs/salesforce.jpg',
    logo: '/logos/programs/salesforce.svg',
    family: 'Enterprise platforms',
    // Name and short name kept. The client's page document calls the course "Salesforce Masters" in its headings,
    // which is also the name of another Hyderabad training institute (salesforcemasters.in): to confirm with the client.
    name: 'Salesforce Admin & Developer with Agentforce',
    shortName: 'Salesforce Admin & Developer',
    // From the client's page document "Salesforce Admin & Developer with Agentforce" (Nov 2026), written for the
    // keywords chosen on 26 Nov 2026: primary "salesforce training in hyderabad"; secondary "salesforce training in
    // hyderabad with placement", "salesforce admin and developer course", "salesforce developer course". Hyderabad
    // is the only location named. "Salesforce courses" belongs to the track page; admin-only, FDE (Agentforce
    // developer) and BA keywords belong to their course pages. Certification names checked on Trailhead.
    h1: 'Salesforce training in Hyderabad: admin, developer and Agentforce',
    tagline: 'Configure, code and extend Salesforce, then put Agentforce AI agents to work on it.',
    summary:
      'This Salesforce training in Hyderabad takes you from your first login to building AI agents with Agentforce. You learn to configure and secure an org, automate it with Flow, write Apex and Lightning Web Components, connect it to other systems and launch an Agentforce agent.',
    accent: 'sky',
    prerequisites:
      'No prior Salesforce experience needed. Basic computer skills help, and any exposure to programming makes the developer modules easier.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'Apex and LWC taught from the basics',
      location: 'Madhapur, Hyderabad',
    },
    highlights: ['Admin, Apex, LWC & Agentforce', 'Prep for 3 Salesforce exams', 'Placement support'],
    about: {
      paragraphs: [
        'Salesforce Admin & Developer with Agentforce is our complete Salesforce training and placement course in Hyderabad. It is a Salesforce admin and developer course in one: you learn to configure the platform as an administrator and to extend it with code as a developer, two skills many Salesforce job postings ask for together, then add Agentforce, Salesforce’s AI agents.',
        'You start with CRM basics, security and Flow automation, move into Apex, SOQL and Lightning Web Components (LWC), connect Salesforce to other systems and finish by launching an Agentforce agent. Every module ends with a hands-on lab in your own free Salesforce Developer Edition org, and the course doubles as Salesforce certification training for the Platform Administrator, Platform Developer and Agentforce Specialist exams.',
        'Classes are live and instructor-led on Zoom, and every class is recorded. Placement support covers your resume and LinkedIn, mock interviews and job referrals through ARA’s IT staffing clients and partner companies. Offers depend on your interview performance.',
      ],
      whyTitle: 'Why learn Salesforce with AI in 2026',
      why: [
        'Admin and developer skills together: many Salesforce roles ask for both, so one course opens more job options.',
        'Agentforce has created new AI roles on top of classic admin and developer jobs.',
        'A clear certification path: Platform Administrator, Platform Developer and Agentforce Specialist are official Salesforce certifications that employers look for.',
      ],
    },
    audience: [
      {
        title: 'Freshers and graduates',
        text: 'Learn both sides of Salesforce, admin and developer, which many job postings ask for together.',
      },
      {
        title: 'Working professionals switching careers',
        text: 'Move from support, testing or non-IT work into Salesforce admin and developer roles.',
      },
      {
        title: 'Salesforce admins',
        text: 'Add Apex, LWC and Agentforce to grow from admin into developer and AI roles.',
      },
    ],
    outcomes: [
      'Set up a Salesforce org with apps, objects, fields and records',
      'Secure data with profiles, permission sets, roles and sharing rules',
      'Automate business processes with Flow and approval processes',
      'Write bulk-safe Apex triggers, SOQL queries and test classes',
      'Build Lightning Web Components connected to Apex and Salesforce data',
      'Integrate Salesforce with external systems through REST APIs and Named Credentials',
      'Build Agentforce agents with subagents, actions and Prompt Builder prompts',
      'Deploy changes with Salesforce CLI',
      'Prepare for the Platform Administrator, Platform Developer and Agentforce Specialist exams',
    ],
    modules: [
      {
        title: 'Salesforce and CRM foundations',
        summary: 'What CRM is, why companies run on Salesforce and how an org is organised.',
        topics: [
          'CRM concepts and Salesforce clouds',
          'Orgs, editions and sandboxes',
          'Objects, fields and records',
          'Apps, tabs and Lightning Experience',
          'Setting up a free Developer Edition org',
          'The Salesforce ecosystem and job roles',
        ],
        lab: 'Create a Developer Edition org, build a custom app with tabs and find your way around Lightning Experience.',
      },
      {
        title: 'Administration and security',
        summary: 'Who can see and do what, and how to import data safely.',
        topics: [
          'Users, profiles and permission sets',
          'Permission set groups',
          'Roles and the role hierarchy',
          'Org-wide defaults and sharing rules',
          'Field-level security',
          'Data Import Wizard and Data Loader',
        ],
        lab: 'Set up users, profiles, permission sets and sharing so sales reps see only their own deals.',
      },
      {
        title: 'Automation with Flow',
        summary: 'Replace manual steps with Flow, Salesforce’s main automation tool.',
        topics: [
          'Record-triggered flows',
          'Screen flows',
          'Scheduled and autolaunched flows',
          'Approval processes',
          'Debugging and testing flows',
          'Flow best practices and limits',
        ],
        lab: 'Build a record-triggered flow that assigns leads and an approval process for discounts.',
      },
      {
        title: 'Apex programming',
        summary: 'Write Apex, Salesforce’s programming language, for logic Flow cannot handle.',
        topics: [
          'Apex syntax, classes and methods',
          'SOQL and SOSL',
          'Triggers and the trigger handler pattern',
          'Governor limits and bulkification',
          'Test classes and code coverage',
          'Asynchronous Apex: future, queueable and batch',
        ],
        lab: 'Write a bulk-safe trigger with a handler class and a test class above 75% code coverage.',
      },
      {
        title: 'Lightning Web Components',
        summary: 'Build custom user interfaces connected to Apex and Salesforce data.',
        topics: [
          'LWC structure: HTML, JavaScript and CSS',
          'Data with the wire service and Apex',
          'Component communication and events',
          'Lightning Data Service',
          'Adding components to Lightning pages',
          'LWC testing basics',
        ],
        lab: 'Build an LWC that shows related opportunities on an account page using Apex.',
      },
      {
        title: 'Integration',
        summary: 'Connect Salesforce to the other systems a company runs, securely.',
        topics: [
          'REST and SOAP basics',
          'Apex callouts',
          'Named and external credentials',
          'Salesforce REST API',
          'Platform events',
          'Integration patterns',
        ],
        lab: 'Call a public REST API from Apex using a Named Credential and store the response.',
      },
      {
        title: 'Agentforce AI agents',
        summary: 'Build AI agents that answer questions and take actions, and keep data safe.',
        topics: [
          'Agentforce Studio and Agentforce Builder',
          'Subagents (formerly topics), instructions and actions',
          'Prompt Builder and grounding in Salesforce data',
          'Einstein Trust Layer',
          'Testing agents in Agentforce Testing Center',
          'Monitoring agents and user feedback',
        ],
        lab: 'Build an Agentforce agent with two subagents and a custom Flow action.',
      },
      {
        title: 'Capstone and career readiness',
        summary: 'Deliver an end-to-end solution, then prepare for exams and interviews.',
        topics: [
          'Capstone project delivery',
          'Salesforce CLI and deployment',
          'Code review and best practices',
          'Certification practice questions',
          'Resume, LinkedIn and Trailhead profile',
          'Mock interviews',
        ],
        lab: 'Deploy your capstone from one org to another with Salesforce CLI.',
      },
    ],
    tools: [
      'Salesforce Platform',
      'Sales Cloud',
      'Service Cloud',
      'Flow Builder',
      'Data Loader',
      'Apex',
      'SOQL',
      'Lightning Web Components',
      'Agentforce',
      'Agentforce Builder',
      'Prompt Builder',
      'Salesforce CLI',
      'VS Code',
      'Trailhead',
      'Git',
    ],
    skills: [
      'Salesforce org configuration',
      'Security and sharing model design',
      'Flow automation',
      'Apex programming and triggers',
      'SOQL and SOSL',
      'Lightning Web Components',
      'REST integrations',
      'Agentforce agents and Prompt Builder',
      'Testing and deployment with Salesforce CLI',
      'Reports and dashboards',
    ],
    projects: [
      {
        title: 'Service desk with SLA escalations',
        problem:
          'A support team misses response deadlines because cases are not routed or escalated in time.',
        text: 'Set up case management with queues, entitlements and escalation flows for a support team.',
        result:
          'Cases reach the right queue automatically, and overdue cases escalate before the SLA is breached.',
        stack: ['Service Cloud', 'Flow'],
      },
      {
        title: 'Lead-to-enrolment pipeline',
        problem:
          'Leads from the website are lost or followed up late, and managers cannot see the pipeline clearly.',
        text: 'Build a sales process from web lead to enrolment, with Apex triggers and an LWC dashboard.',
        result:
          'Every web lead is captured, scored and assigned, with a live LWC pipeline view for managers.',
        stack: ['Sales Cloud', 'Apex', 'LWC'],
      },
      {
        title: 'Agentforce service agent',
        problem: 'Customers wait in a queue to ask simple order questions.',
        text: 'Launch an AI agent that answers order questions and creates cases, with prompts grounded in org data.',
        result:
          'The agent answers routine order questions straight away and opens a case when a person is needed.',
        stack: ['Agentforce', 'Prompt Builder'],
      },
    ],
    capstone:
      'Design and deliver a complete Salesforce solution for a sample company: data model, security, automation, Apex and LWC customisation, an integration and an Agentforce agent. Present it as you would to a client and deploy it with Salesforce CLI.',
    certificationIntro:
      'Salesforce runs its own certification exams. This course prepares you for the exams below: you register and pay for each exam yourself through Salesforce’s Trailhead Academy, and Pearson VUE delivers it online or at a test centre. None of these exams needs another certification first. Salesforce renamed several credentials in July 2025, so older material may still say "Administrator" or "Platform Developer I".',
    certifications: [
      {
        name: 'Salesforce Certified Platform Administrator',
        note: 'Shows you can configure and manage a Salesforce org. Formerly Salesforce Certified Administrator. Covered by modules 1 to 3, with Agentforce basics in module 7 and exam practice in module 8.',
      },
      {
        name: 'Salesforce Certified Platform Developer',
        note: 'Shows you can build custom logic and interfaces with Apex and LWC. Formerly Platform Developer I. Covered by modules 4 to 6, with exam practice in module 8.',
      },
      {
        name: 'Salesforce Certified Agentforce Specialist',
        note: 'Shows you can configure and manage Agentforce agents. Covered by module 7. The exam also tests Data 360 (formerly Data Cloud) basics, which this course introduces through grounding.',
      },
      {
        name: 'Salesforce Certified Platform App Builder',
        note: 'A natural next step: building custom apps with clicks. Modules 1 to 3 give you a head start.',
      },
    ],
    roles: [
      {
        title: 'Salesforce Administrator',
        text: 'Manages users, security, automation and reports for a company’s org.',
        level: 'Fresher to mid',
      },
      { title: 'Salesforce Developer', text: 'Builds Apex, LWC and integrations.', level: 'Junior to mid' },
      {
        title: 'Salesforce Admin/Developer',
        text: 'Combines admin work with development, common in support teams.',
        level: 'Junior to mid',
      },
      {
        title: 'Agentforce Developer',
        text: 'Builds and tunes Agentforce agents, actions and prompts.',
        level: 'Mid',
      },
      {
        title: 'Salesforce Consultant',
        text: 'Gathers requirements and configures Salesforce for clients.',
        level: 'Mid',
      },
      {
        title: 'Salesforce Integration Developer',
        text: 'Connects Salesforce with ERP, payment and marketing systems.',
        level: 'Mid',
      },
      {
        title: 'Salesforce Technical Lead',
        text: 'Leads design and code quality on Salesforce projects.',
        level: 'Experienced',
      },
    ],
    careers: {
      salaries: [
        { role: 'Salesforce Administrator', experience: '1 to 6 years', pay: '₹2.5 L to ₹12 L' },
        { role: 'Salesforce Engineer / Developer', experience: '1 to 6 years', pay: '₹3 L to ₹23.2 L' },
        { role: 'Senior Salesforce Administrator', experience: '3 to 9 years', pay: '₹5.1 L to ₹25 L' },
        { role: 'Salesforce Architect', experience: '8 to 18 years', pay: '₹19.9 L to ₹63 L' },
      ],
      salaryNote:
        'Annual salary ranges from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
      path: [
        {
          stage: 'Start (0 to 2 years)',
          roles: 'Salesforce Administrator, Junior Salesforce Developer, Admin/Developer',
        },
        {
          stage: 'Grow (2 to 5 years)',
          roles: 'Salesforce Developer, Agentforce Developer, Salesforce Consultant',
        },
        { stage: 'Lead (5+ years)', roles: 'Technical Lead, Salesforce Architect, Solution Architect' },
      ],
    },
    faqs: [
      {
        q: 'What is Salesforce used for?',
        a: 'Salesforce is one of the most widely used CRM (customer relationship management) platforms. Companies use it to manage sales, customer service, marketing and the customer data behind them in one cloud platform, and now to run AI agents with Agentforce.',
      },
      {
        q: 'What is the Salesforce training syllabus?',
        a: '8 modules: CRM foundations, administration and security, Flow automation, Apex programming, Lightning Web Components, integration, Agentforce AI agents, and a capstone with career readiness. Every module ends with a hands-on lab, and you build three projects and a capstone.',
      },
      {
        q: 'Is this a Salesforce developer course as well as an admin course?',
        a: 'Yes. Modules 1 to 3 cover administration: security, sharing and Flow, all done with clicks. Modules 4 to 6 are the Salesforce developer course: Apex, SOQL, Lightning Web Components and integration, for what clicks cannot do. Module 7 then adds Agentforce on top of both.',
      },
      {
        q: 'Do I need coding experience for Salesforce Admin & Developer with Agentforce?',
        a: 'No. The admin modules need no code, and Apex and LWC are taught from the basics in modules 4 and 5. Earlier programming exposure makes the developer modules easier but is not required.',
      },
      {
        q: 'What will I learn about Apex and LWC?',
        a: 'Apex is Salesforce’s programming language, similar to Java, used for triggers, complex business logic and integrations. Lightning Web Components (LWC) is Salesforce’s framework for custom user interfaces, built with HTML, JavaScript and CSS. You write triggers, SOQL queries, test classes and asynchronous Apex, then build LWCs that read Salesforce data through Apex and the wire service.',
      },
      {
        q: 'What will I learn about Agentforce in this course?',
        a: 'Agentforce is Salesforce’s platform for AI agents that answer questions and take actions, such as updating records or creating cases, using your Salesforce data. In module 7 you build an agent in Agentforce Builder with subagents (formerly called topics) and a custom Flow action, write prompts in Prompt Builder, learn how the Einstein Trust Layer protects data, and test the agent. Salesforce FDE goes deeper into AI agents.',
      },
      {
        q: 'Which Salesforce certifications does this training prepare me for?',
        a: 'Salesforce Certified Platform Administrator, Platform Developer and Agentforce Specialist, with Platform App Builder as a next step. Salesforce renamed Administrator to Platform Administrator and Platform Developer I to Platform Developer in July 2025. You register and pay for each exam yourself through Trailhead Academy.',
      },
      {
        q: 'Can I practise Salesforce admin, Apex and Agentforce for free?',
        a: 'Yes. You work in your own free Salesforce Developer Edition org, which now includes Agentforce and Data 360 (formerly Data Cloud), and in Trailhead playgrounds. You set up your org in module 1 and use it for every lab.',
      },
      {
        q: 'What projects will I build in Salesforce Admin & Developer with Agentforce?',
        a: 'A service desk with SLA escalations in Service Cloud, a lead-to-enrolment pipeline with Apex triggers and an LWC dashboard, and an Agentforce service agent grounded in org data. A capstone brings them together as a complete solution you present and deploy.',
      },
      {
        q: 'Which Salesforce developer jobs can freshers apply for after this course?',
        a: 'Freshers usually start as a Salesforce Administrator, Junior Salesforce Developer or Admin/Developer. With experience you can move to Salesforce Developer, Agentforce Developer, Integration Developer or Consultant, and later to Technical Lead or Architect. IT services firms, product companies and capability centres hire for these roles.',
      },
      {
        q: 'What should I learn after Salesforce Admin & Developer with Agentforce?',
        a: 'Many learners add Platform App Builder, Data 360 (formerly Data Cloud) or a cloud such as Service Cloud, or move on to our Salesforce FDE course to build AI agents with customers.',
      },
      {
        q: 'How is Salesforce Admin & Developer with Agentforce different from Salesforce Admin?',
        a: 'Salesforce Admin covers administration only, with no coding. This course adds Apex, LWC, integration and Agentforce, so it prepares you for admin, developer and Admin/Developer roles. Salesforce FDE is for people who already code and want to build AI agents with customers.',
      },
      {
        q: 'How long does it take to learn Salesforce admin and development?',
        a: 'It depends on the batch format and your practice time. An advisor can share the exact duration and weekly schedule of upcoming batches.',
      },
      {
        q: 'What is the Salesforce training fee in Hyderabad?',
        a: 'The cost of Salesforce training in Hyderabad at ARA depends on the batch and payment option. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Is the Salesforce training in Hyderabad live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Madhapur, Hyderabad.',
      },
      {
        q: 'What does Salesforce training with placement in Hyderabad include?',
        a: 'Alongside the training you get resume and LinkedIn help, technical and HR mock interviews, and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
      },
    ],
  },
  {
    slug: 'servicenow',
    image: '/images/programs/servicenow.webp',
    logo: '/logos/programs/servicenow.svg',
    family: 'Enterprise platforms',
    // Renamed from "ServiceNow Training & Placement" / "ServiceNow" to the client's course name (page document and
    // the track menu label "ServiceNow Masters & AI"): to confirm with the client.
    name: 'ServiceNow Masters: Admin, Development, HRSD & AI',
    shortName: 'ServiceNow Masters',
    // From the client's page document "ServiceNow Masters" (Nov 2026), written for the keywords chosen on 24 Nov 2026:
    // primary "servicenow training in hyderabad"; secondary "servicenow training and placement in hyderabad",
    // "servicenow admin and developer training", "servicenow certification training". Hyderabad is the only
    // location named. "ServiceNow courses" belongs to the track page and AI agent developer keywords to FDSE.
    h1: 'ServiceNow Masters training in Hyderabad: admin, development, HRSD and AI',
    tagline: 'Run, build and extend ServiceNow, then put governed AI agents to work on it.',
    summary:
      'This ServiceNow training in Hyderabad takes you from your first login to building on the ServiceNow AI Platform. You learn administration, development and HR Service Delivery (HRSD), then build ServiceNow Otto (formerly Now Assist) skills and AI agents and govern them in Super Intelligence Control Tower.',
    accent: 'emerald',
    prerequisites:
      'No prior ServiceNow experience needed. A basic understanding of IT concepts helps, and any exposure to programming makes the development modules easier.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'JavaScript taught from the basics',
      location: 'Madhapur, Hyderabad',
    },
    highlights: ['Admin, development, HRSD & AI', 'CSA, CAD & CIS-HR prep', 'Placement support'],
    about: {
      paragraphs: [
        'ServiceNow Masters is our complete ServiceNow training and placement course in Hyderabad. It is ServiceNow admin and developer training, extended with HR Service Delivery (HRSD) and AI: four courses in one, so you can apply for administrator, developer, HRSD and AI roles from a single course.',
        'You start by running the platform, move into JavaScript, integrations and custom applications, then deliver HR services and finish by building ServiceNow Otto skills and AI agents, governed in Super Intelligence Control Tower (formerly AI Control Tower). Every module has a hands-on lab, and the course doubles as ServiceNow certification training for the CSA, CAD and CIS-HR exams and ServiceNow’s AI micro-certifications.',
        'Classes are live and instructor-led on Zoom, and every class is recorded. Placement support covers your resume and LinkedIn, mock interviews and job referrals through ARA’s IT staffing clients and partner companies. Offers depend on your interview performance.',
      ],
      whyTitle: 'Why learn ServiceNow with AI in 2026',
      why: [
        'One course, four job paths: admin, developer, HRSD and AI skills together make a stronger profile.',
        'AI agents arrived on ServiceNow in 2025, so hands-on experience building and governing them still stands out.',
        'IT services firms and global capability centres in Hyderabad hire ServiceNow administrators, developers and HRSD consultants.',
      ],
    },
    audience: [
      {
        title: 'Freshers and graduates',
        text: 'Get the full ServiceNow skill set employers ask for, from admin basics to coding, HRSD and AI.',
      },
      {
        title: 'IT support and help desk staff',
        text: 'Move from handling tickets to configuring, scripting and building on the platform.',
      },
      {
        title: 'ServiceNow admins and HR professionals',
        text: 'Admins grow into developer and AI roles; HR professionals move into HR technology.',
      },
    ],
    outcomes: [
      'Administer the platform: users, groups, roles and access controls',
      'Configure incident, problem, change and the service catalog',
      'Automate work with Flow Designer, without code',
      'Write client scripts, business rules and script includes with the Glide APIs',
      'Integrate ServiceNow with REST APIs and import data',
      'Build a scoped application and a Service Portal widget',
      'Configure HRSD: HR cases, services, SLAs and lifecycle events',
      'Build ServiceNow Otto skills and AI agents, and govern them in Super Intelligence Control Tower',
      'Prepare for the CSA, CAD and CIS-HR exams',
    ],
    modules: [
      {
        title: 'Introduction to ServiceNow',
        summary: 'What ServiceNow is, how companies use it and your practice instance.',
        topics: [
          'What ServiceNow is: the ServiceNow AI Platform',
          'How companies use ServiceNow: IT, HR, customer service and more',
          'IT service management (ITSM) basics',
          'Instances, releases and upgrades',
          'Your Personal Developer Instance (PDI)',
          'ServiceNow job roles and career paths',
        ],
        lab: 'Create your PDI, explore the instance and log your first incident.',
      },
      {
        title: 'The ServiceNow user interface',
        summary: 'Find your way around menus, lists, forms and dashboards.',
        topics: [
          'Next Experience UI: All menu, Favorites and History',
          'Global search and the application navigator',
          'Lists: filters, sorting, grouping and breadcrumbs',
          'Forms, form sections and related lists',
          'Personalising lists and forms',
          'Dashboards and simple reports',
        ],
        lab: 'Personalise lists and forms and build a dashboard of open incidents by priority.',
      },
      {
        title: 'Data and platform architecture',
        summary: 'How tables, fields and records fit together.',
        topics: [
          'Tables, fields and records',
          'Table hierarchy and extended tables such as Task',
          'Field types, the dictionary and reference fields',
          'Creating a custom table and fields',
          'Schema map and table relationships',
          'Import sets: an overview',
        ],
        lab: 'Create a custom table that extends Task, add fields and view it in the schema map.',
      },
      {
        title: 'User administration',
        summary: 'Who can use ServiceNow and what they are allowed to do.',
        topics: [
          'Creating and managing users',
          'Groups and group membership',
          'Roles and role inheritance',
          'Assigning roles to users and groups',
          'Impersonating users for testing',
          'Departments, locations and companies',
        ],
        lab: 'Create users, groups and roles for a service desk and test with impersonation.',
      },
      {
        title: 'Access control lists (ACLs)',
        summary: 'Protect data so people see only what they should.',
        topics: [
          'How ACLs work and the order they are evaluated',
          'Table-level and field-level ACLs',
          'Read, write, create and delete operations',
          'Roles and conditions in ACLs',
          'Testing access with impersonation',
          'Debugging and troubleshooting access',
        ],
        lab: 'Write table and field ACLs so only managers can see a sensitive field.',
      },
      {
        title: 'Incident management',
        summary: 'Take an incident from report to resolution.',
        topics: [
          'The incident lifecycle',
          'Logging incidents from the form and the portal',
          'Categories, subcategories and assignment groups',
          'Priority from impact and urgency',
          'Assignment rules and notifications',
          'Resolving, closing and major incidents',
        ],
        lab: 'Configure categories, assignment rules and priority for incidents.',
      },
      {
        title: 'Problem management',
        summary: 'Find and fix the root cause of repeat issues.',
        topics: [
          'Incidents vs problems',
          'Creating a problem from incidents',
          'Problem lifecycle and states',
          'Root-cause analysis',
          'Known errors and workarounds',
          'Linking problems to changes',
        ],
        lab: 'Create a problem from three repeat incidents and record a known error.',
      },
      {
        title: 'Change management',
        summary: 'Control changes to IT systems safely.',
        topics: [
          'Standard, normal and emergency changes',
          'Change lifecycle and states',
          'Risk and impact assessment',
          'Approvals and the Change Advisory Board (CAB)',
          'Change schedules and conflict detection',
          'Post-implementation review',
        ],
        lab: 'Raise a normal change, route it through CAB approval and close it.',
      },
      {
        title: 'Service catalog',
        summary: 'Build the online shop where employees request what they need.',
        topics: [
          'Catalogs and categories',
          'Creating catalog items',
          'Variables and variable sets',
          'Requests, requested items (RITM) and catalog tasks',
          'Record producers',
          'Catalog UI policies',
        ],
        lab: 'Build a catalog item with variables, a variable set and fulfilment tasks.',
      },
      {
        title: 'Automation with Flow Designer',
        summary: 'Automate work without writing code.',
        topics: [
          'Flow Designer in Workflow Studio',
          'Triggers: record created, updated or scheduled',
          'Actions, conditions and data pills',
          'Approval steps in flows',
          'Flows and subflows for catalog items',
          'Testing and debugging flows',
        ],
        lab: 'Build a flow that approves and fulfils the catalog item automatically.',
      },
      {
        title: 'JavaScript fundamentals for ServiceNow',
        summary: 'The coding basics you need, even if you have never coded.',
        topics: [
          'Variables, data types and operators',
          'Conditions and loops',
          'Functions and objects',
          'Arrays and strings',
          'Running code in background scripts',
          'Debugging with logs',
        ],
        lab: 'Write background scripts that query and update incidents.',
      },
      {
        title: 'Client-side scripting',
        summary: 'Make forms smarter in the user’s browser.',
        topics: [
          'Client scripts: onLoad, onChange and onSubmit',
          'GlideForm (g_form) and GlideUser (g_user)',
          'UI policies and UI policy actions',
          'Data policies',
          'Client script or UI policy: when to use which',
          'Browser debugging and form performance',
        ],
        lab: 'Write a client script that makes a field mandatory based on category.',
      },
      {
        title: 'Server-side scripting and business rules',
        summary: 'Work with data on the server: the core developer skill.',
        topics: [
          'Business rules: before, after, async and display',
          'GlideRecord: query, insert, update and delete',
          'GlideSystem (gs) methods',
          'Dot-walking through reference fields',
          'Writing efficient queries',
          'Server-side debugging',
        ],
        lab: 'Write a business rule that sets priority and logs changes.',
      },
      {
        title: 'Script includes and GlideAjax',
        summary: 'Write reusable code and call the server from forms.',
        topics: [
          'What script includes are and why to use them',
          'Classless and class-based script includes',
          'Calling script includes from server scripts',
          'GlideAjax: calling the server from client scripts',
          'Client-callable script includes',
          'Reusable utility functions',
        ],
        lab: 'Build a script include called from a client script with GlideAjax.',
      },
      {
        title: 'UI actions, notifications, events and scheduled jobs',
        summary: 'Add buttons, send messages and run work in the background.',
        topics: [
          'UI actions: form buttons, list links and context menus',
          'Email notifications and templates',
          'Registering and firing events',
          'Script actions that respond to events',
          'Scheduled jobs',
          'Scheduled reports',
        ],
        lab: 'Create a UI action, an email notification and a scheduled job.',
      },
      {
        title: 'Integrations with REST APIs and data imports',
        summary: 'Connect ServiceNow to other systems and bring data in.',
        topics: [
          'REST basics: endpoints, methods and JSON',
          'Outbound REST messages',
          'ServiceNow REST APIs and the REST API Explorer',
          'Scripted REST APIs',
          'Import sets, transform maps and coalesce',
          'Integration error handling',
        ],
        lab: 'Call an external REST API and import a CSV with a transform map.',
      },
      {
        title: 'Service Portal and widgets',
        summary: 'Build the self-service website employees use to get help.',
        topics: [
          'Portals, pages and themes',
          'Page Designer',
          'Widget HTML, CSS and client script',
          'Widget server script and data',
          'Cloning, customising and configuring widgets',
          'Portal menus and branding',
        ],
        lab: 'Build a Service Portal widget that shows a user’s open requests.',
      },
      {
        title: 'Scoped applications, update sets and testing',
        summary: 'Build and ship a custom app the way real projects do.',
        topics: [
          'Scoped vs global applications',
          'Building an app in ServiceNow Studio',
          'Tables, forms and modules for a custom app',
          'Update sets: capture, preview and commit',
          'Automated Test Framework (ATF) basics',
          'Development best practices and instance scan',
        ],
        lab: 'Build a scoped app in ServiceNow Studio and move it with an update set.',
      },
      {
        title: 'HRSD foundations and HR roles',
        summary: 'How HR teams use ServiceNow, and who can see HR data.',
        topics: [
          'What HR Service Delivery (HRSD) is and the problems it solves',
          'HRSD applications and navigation',
          'HR roles: HR agent, HR manager, HR admin and more',
          'HR data privacy basics',
          'Activating HRSD on a practice instance',
        ],
        lab: 'Activate HRSD on your PDI and assign HR roles to test users.',
      },
      {
        title: 'HR profiles and case creation',
        summary: 'The employee record and the HR case, the core of HRSD.',
        topics: [
          'HR profiles and employee data',
          'Creating HR cases',
          'Case fields, states and assignment',
          'Opening cases on behalf of employees',
          'Work notes and employee communication',
          'Case templates',
        ],
        lab: 'Create HR profiles and open HR cases on behalf of employees.',
      },
      {
        title: 'Centers of Excellence and HR services',
        summary: 'Organise HR work and the services employees can ask for.',
        topics: [
          'HR Centers of Excellence (COE)',
          'HR service configuration',
          'Service categories and topic details',
          'Linking HR services to COEs',
          'Templates for HR services',
          'HR knowledge articles',
        ],
        lab: 'Set up a Payroll COE with three HR services.',
      },
      {
        title: 'HR case and SLA configuration',
        summary: 'Route HR cases to the right team and keep to deadlines.',
        topics: [
          'HR case configuration',
          'Assignment and routing rules',
          'SLA definitions: start, pause and stop conditions',
          'SLA timers and breach warnings',
          'Escalating overdue cases',
          'SLA reports',
        ],
        lab: 'Configure assignment rules and an SLA for HR cases with a breach warning.',
      },
      {
        title: 'HR criteria, record producers and service activities',
        summary: 'Control who sees which HR service and how it is delivered.',
        topics: [
          'HR criteria and user criteria',
          'Record producers for HR services',
          'Mapping record producers to HR services',
          'Defining service activities',
          'Testing visibility with impersonation',
        ],
        lab: 'Build HR criteria and a record producer for one country’s employees.',
      },
      {
        title: 'HR lifecycle events',
        summary: 'Run onboarding and offboarding across HR, IT and managers.',
        topics: [
          'Lifecycle event types',
          'Activity sets and their order',
          'Onboarding and offboarding events',
          'Tasks for HR, IT and managers',
          'Tracking lifecycle event progress',
        ],
        lab: 'Build an onboarding lifecycle event with HR, IT and manager activities.',
      },
      {
        title: 'HR case management and Employee Center',
        summary: 'Close the loop from employee request to closed case.',
        topics: [
          'Service activities inside HR cases',
          'Managing, transferring and closing HR cases',
          'Employee Center setup',
          'Publishing HR services on the portal',
          'Employee Center and the older Employee Service Center',
          'Testing the end-to-end employee journey',
        ],
        lab: 'Configure Employee Center and test the full employee journey.',
      },
      {
        title: 'AI on the ServiceNow AI Platform',
        summary: 'Predictive, generative and agentic AI, and where each fits.',
        topics: [
          'Predictive, generative and agentic AI on ServiceNow',
          'Large language models (LLMs) and how ServiceNow uses them',
          'The ServiceNow Otto panel and context menu',
          'Activating skills in the admin console',
          'AI roles and access',
          'AI use cases by workflow',
        ],
        lab: 'Switch on ServiceNow Otto skills in the admin console and test them as a user.',
      },
      {
        title: 'ServiceNow Otto for ITSM, HRSD and developers',
        summary: 'Put ready-made AI skills to work in the processes you know.',
        topics: [
          'Incident and HR case summarisation',
          'Resolution notes and knowledge article generation',
          'Otto in Virtual Agent',
          'Generating code, flows and catalog items with Otto',
          'Reviewing and testing AI-generated work',
          'Measuring the results of AI skills',
        ],
        lab: 'Use Otto to summarise incidents and HR cases and generate a knowledge article.',
      },
      {
        title: 'Custom AI skills with AI Skill Kit',
        summary: 'Build your own skill when the built-in ones do not fit.',
        topics: [
          'When to build a custom skill',
          'Skill inputs, prompts and output',
          'Writing and refining prompts',
          'Testing skills with instance data',
          'Evaluation datasets with AI Data Kit',
          'Deploying and activating a skill',
        ],
        lab: 'Build a custom skill in AI Skill Kit and test it with a dataset.',
      },
      {
        title: 'AI agents and agentic workflows with AI Agent Studio',
        summary: 'Agents that take a goal, plan the steps and carry out the work.',
        topics: [
          'AI skills vs AI agents',
          'An agent’s role, instructions and tools',
          'Giving agents tools: flows, scripts and skills',
          'Agentic workflows, AI Agent Orchestrator and human approvals',
          'Testing and troubleshooting AI agents',
          'Model Context Protocol (MCP) basics',
        ],
        lab: 'Build an AI agent with tools and combine two agents into an agentic workflow.',
      },
      {
        title: 'AI governance with Super Intelligence Control Tower',
        summary: 'Keep AI visible, monitored and safe for production.',
        topics: [
          'Why AI governance matters',
          'Super Intelligence Control Tower (formerly AI Control Tower): an inventory of agents and skills',
          'Monitoring AI performance and usage',
          'Ownership, approvals and risk tracking',
          'Guardian: offensive content and prompt-injection protection',
          'Responsible AI practices for ServiceNow teams',
        ],
        lab: 'Review your agents in Super Intelligence Control Tower and add a Guardian protection.',
      },
      {
        title: 'Certification and career readiness',
        summary: 'Prepare for your ServiceNow exams and job interviews.',
        topics: [
          'CSA, CAD and CIS-HR exam topic review',
          'Practice questions and timed mock tests',
          'AI micro-certification learning paths',
          'Admin, developer, HRSD and AI interview questions',
          'Resume and LinkedIn for ServiceNow roles',
          'Technical and HR mock interviews',
        ],
        lab: 'Take timed CSA, CAD and CIS-HR practice tests and a mock interview.',
      },
    ],
    tools: [
      'ServiceNow AI Platform',
      'Personal Developer Instance (PDI)',
      'Flow Designer',
      'JavaScript',
      'Glide APIs',
      'ServiceNow Studio',
      'REST API Explorer',
      'Service Portal',
      'Update sets',
      'HR Service Delivery (HRSD)',
      'ServiceNow Otto (formerly Now Assist)',
      'AI Skill Kit (formerly Now Assist Skill Kit)',
      'AI Agent Studio',
      'Super Intelligence Control Tower',
    ],
    skills: [
      'Platform administration and security',
      'ITSM process configuration',
      'Flow Designer automation',
      'JavaScript and the Glide APIs',
      'REST integrations',
      'Scoped application development',
      'Service Portal widgets',
      'HRSD configuration',
      'ServiceNow Otto and AI agents',
      'AI governance with Super Intelligence Control Tower',
    ],
    projects: [
      {
        title: 'IT service desk with automation',
        problem: 'A growing company’s IT team handles requests by email and cannot track or automate them.',
        text: 'Configure users, ACLs, incident, problem and change, and automate a laptop request from catalog to fulfilment.',
        result:
          'A secure service desk where incidents, problems, changes and requests are tracked and automated.',
        stack: ['ITSM', 'Service Catalog', 'Flow Designer'],
      },
      {
        title: 'Custom asset request application',
        problem: 'Teams track asset requests in spreadsheets with no approvals or integration.',
        text: 'Build a scoped app in ServiceNow Studio with an approval flow, scripts, a REST integration and a portal page, then move it with an update set.',
        result:
          'Asset requests run through one app with approvals, a live integration and a self-service page, ready to deploy.',
        stack: ['ServiceNow Studio', 'Glide API', 'REST'],
      },
      {
        title: 'HR onboarding with an AI agent',
        problem: 'HR teams are buried in onboarding tasks and repeat questions.',
        text: 'Configure HR services, SLAs and an onboarding lifecycle event, then add an AI agent that triages HR cases.',
        result:
          'Onboarding runs automatically and an AI agent triages HR cases, governed in Super Intelligence Control Tower.',
        stack: ['HRSD', 'AI Agent Studio', 'Super Intelligence Control Tower'],
      },
    ],
    capstone:
      'Deliver an end-to-end ServiceNow solution for a sample company: ITSM processes, a custom app with integrations, HRSD onboarding and an AI agent with governance, presented as a client walkthrough.',
    certificationIntro:
      'ServiceNow runs its own exams through ServiceNow University. This course prepares you for the exams below: you check each exam’s current prerequisites on ServiceNow University, complete any training ServiceNow requires, then register and pay for the exam with ServiceNow. ServiceNow has no separate mainline AI certification yet (November 2026); its AI credentials are short micro-certifications.',
    certifications: [
      {
        name: 'ServiceNow Certified System Administrator (CSA)',
        note: 'Shows you can administer and configure the platform. Covered by modules 1 to 10, with exam practice in module 31.',
      },
      {
        name: 'ServiceNow Certified Application Developer (CAD)',
        note: 'Shows you can build and script applications. Covered by modules 11 to 18. ServiceNow recommends hands-on development experience before the exam.',
      },
      {
        name: 'ServiceNow Certified Implementation Specialist – Human Resources (CIS-HR)',
        note: 'Shows you can implement HR Service Delivery. Covered by modules 19 to 25. ServiceNow lists HR training courses to complete first, and most people take CSA before it.',
      },
      {
        name: 'Now Assist Executive Micro-Certification',
        note: 'A short introductory micro-certification on generative AI in ServiceNow. Covered by modules 26 and 27.',
      },
      {
        name: 'Agentic AI Executive Micro-Certification',
        note: 'A short introductory micro-certification on AI agents and agentic workflows. Covered by modules 29 and 30.',
      },
    ],
    roles: [
      {
        title: 'ServiceNow Administrator (L1/L2)',
        text: 'Runs the platform day to day.',
        level: 'Fresher to mid',
      },
      {
        title: 'ServiceNow Developer',
        text: 'Writes scripts, integrations and custom apps.',
        level: 'Junior to mid',
      },
      {
        title: 'ServiceNow Admin/Developer',
        text: 'Combines administration with scripting.',
        level: 'Junior to mid',
      },
      {
        title: 'ServiceNow HRSD Developer',
        text: 'Builds HR cases, services and lifecycle events.',
        level: 'Junior to mid',
      },
      {
        title: 'ServiceNow Integration Developer',
        text: 'Connects ServiceNow with other systems.',
        level: 'Mid',
      },
      {
        title: 'ServiceNow Technical Consultant',
        text: 'Designs and builds solutions for clients.',
        level: 'Experienced',
      },
      {
        title: 'ServiceNow ITSM Process Consultant',
        text: 'Improves ITSM processes for a business.',
        level: 'Experienced',
      },
      {
        title: 'ServiceNow AI Developer',
        text: 'Builds and governs ServiceNow Otto (formerly Now Assist) skills and AI agents.',
        level: 'Experienced',
      },
    ],
    careers: {
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
          roles: 'ServiceNow Administrator, Admin/Developer, HR Administrator',
        },
        {
          stage: 'Grow (2 to 5 years)',
          roles: 'ServiceNow Developer, HRSD Developer, Integration Developer',
        },
        {
          stage: 'Lead (5+ years)',
          roles: 'Technical Consultant, ServiceNow AI Developer, ServiceNow Architect',
        },
      ],
    },
    faqs: [
      {
        q: 'What is ServiceNow used for?',
        a: 'Companies use ServiceNow to run service work in one place: IT incidents and requests, HR cases, customer service, approvals and the workflows behind them. It is now called the ServiceNow AI Platform, with generative AI and AI agents built in.',
      },
      {
        q: 'What is the ServiceNow training syllabus?',
        a: '31 modules: administration and ITSM (modules 1 to 10), development with JavaScript, the Glide APIs, integrations and scoped apps (11 to 18), HR Service Delivery (19 to 25), ServiceNow AI with ServiceNow Otto (formerly Now Assist), AI agents and Super Intelligence Control Tower (26 to 30), then certification and career readiness. Every module has a hands-on lab.',
      },
      {
        q: 'Does ServiceNow Masters include admin and developer training?',
        a: 'Yes. It is ServiceNow admin and developer training in one course: ten modules cover administration and ITSM, and eight cover scripting, integrations and custom apps. The HRSD and AI modules then build on both.',
      },
      {
        q: 'Is this ServiceNow training suitable for freshers?',
        a: 'Yes. The course starts from what ServiceNow is and how to set up a free practice instance, and JavaScript is taught from the basics. Graduates with a basic understanding of IT concepts can join.',
      },
      {
        q: 'Do I need coding experience for ServiceNow Masters?',
        a: 'No. Development starts with JavaScript basics in module 11, once you know the platform. Earlier programming exposure makes it easier but is not required.',
      },
      {
        q: 'Which ServiceNow certifications does this training prepare me for?',
        a: 'Certified System Administrator (CSA), Certified Application Developer (CAD) and Certified Implementation Specialist – Human Resources (CIS-HR), plus the Now Assist and Agentic AI executive micro-certifications. ServiceNow runs the exams through ServiceNow University: you complete any training ServiceNow requires, then register and pay for each exam with ServiceNow.',
      },
      {
        q: 'What will I learn about ServiceNow Otto (formerly Now Assist)?',
        a: 'ServiceNow Otto (formerly Now Assist) is ServiceNow’s generative AI. It summarises incidents and HR cases, drafts notes and knowledge articles, and helps developers generate scripts and flows. You switch skills on in the admin console, use them in ITSM and HRSD, and build your own with AI Skill Kit (formerly Now Assist Skill Kit).',
      },
      {
        q: 'How is an AI skill different from an AI agent in ServiceNow?',
        a: 'An AI skill suggests and drafts, for example a case summary. An AI agent takes a goal, plans the steps and carries out the work using tools such as flows, scripts and skills, with human approval where you need it.',
      },
      {
        q: 'Why does the course teach Super Intelligence Control Tower?',
        a: 'Super Intelligence Control Tower (formerly AI Control Tower) is where companies keep an inventory of their AI agents and skills, monitor how they perform, assign owners and manage risk. Companies let AI run only when they can govern it, so the course ends with governance, not just building.',
      },
      {
        q: 'Why does ServiceNow Masters include HRSD?',
        a: 'HR Service Delivery (HRSD) is the ServiceNow product HR teams use for employee requests, HR cases and processes such as onboarding. HRSD roles are a separate job path, and HRSD work uses the platform skills you learn earlier in the course.',
      },
      {
        q: 'Can I practise ServiceNow, including the AI modules, at home?',
        a: 'Mostly, yes. ServiceNow gives developers a free Personal Developer Instance (PDI), which you set up in module 1 and use for the admin, development and HRSD labs. ServiceNow Otto, AI Agent Studio and Super Intelligence Control Tower are licensed features that a free PDI does not include, so ask an advisor how the AI labs run in your batch.',
      },
      {
        q: 'What projects will I build in ServiceNow Masters?',
        a: 'An IT service desk with automation, a custom asset request app with a REST integration, and HR onboarding with an AI agent that triages HR cases. A capstone brings them together as a client walkthrough.',
      },
      {
        q: 'What ServiceNow admin and developer jobs can I apply for?',
        a: 'Freshers usually start as a ServiceNow Administrator (L1/L2) or Admin/Developer. With experience you can move to ServiceNow Developer, HRSD Developer or Integration Developer, and later to Technical Consultant or ServiceNow Architect. IT services firms and capability centres in Hyderabad hire for these roles.',
      },
      {
        q: 'What is the ServiceNow training fee in Hyderabad?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Is the ServiceNow training in Hyderabad live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Madhapur, Hyderabad.',
      },
      {
        q: 'What does ServiceNow training and placement in Hyderabad include?',
        a: 'Alongside the training you get resume and LinkedIn help, technical and HR mock interviews, and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
      },
      {
        q: 'How is ServiceNow Masters different from ServiceNow Admin?',
        a: 'ServiceNow Admin covers platform administration. Masters adds development, HRSD and AI, so it prepares you for a wider range of roles.',
      },
    ],
  },
  {
    slug: 'ai-ml',
    image: '/images/programs/ai-ml.jpg',
    family: 'AI',
    name: 'AI & Machine Learning',
    shortName: 'AI & ML',
    // From the client's page document "AI & Machine Learning" (Nov 2026), written for the keywords chosen on
    // 26 Nov 2026: primary "ai and machine learning course in hyderabad"; secondary "machine learning course
    // in hyderabad", "generative ai course in hyderabad", "ai ml course with placement in hyderabad".
    // Hyderabad is the only location named. "AI courses" belongs to the AI & Data track page, and the AI
    // agents and AI engineering keywords to Agentic AI.
    h1: 'AI and machine learning course in Hyderabad, from ML to generative AI',
    tagline: 'From Python and machine learning to LLMs, RAG and deployed AI apps.',
    summary:
      'This AI and machine learning course in Hyderabad takes you from Python basics to AI apps people can use. You train classic machine learning models, build a retrieval-augmented generation (RAG) app on a large language model, fine-tune and evaluate a model, and deploy it as an API.',
    accent: 'violet',
    prerequisites:
      'Basic programming helps, but Python is taught from the essentials. School-level maths is enough to start.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'Python taught from the basics',
      location: 'Madhapur, Hyderabad',
    },
    highlights: ['Machine learning + generative AI', 'LLMs, RAG & fine-tuning', 'Placement support'],
    about: {
      paragraphs: [
        'Our AI and machine learning course in Hyderabad takes you from Python basics to building and deploying AI applications. You learn classic machine learning, which predicts outcomes from data, and generative AI with large language models (LLMs), which many new AI roles now ask for.',
        'You train models with scikit-learn and PyTorch, see how transformers work, build RAG apps with LangChain and a vector database, fine-tune and evaluate a model, and deploy it as an API with FastAPI and Docker. Every module has a hands-on lab, and the course builds the machine learning and generative AI skills tested in the AWS Machine Learning Engineer and Microsoft AI-103 exams.',
        'Classes are live and instructor-led on Zoom, and every class is recorded. Placement support covers your resume and LinkedIn, mock interviews and job referrals through ARA’s IT staffing clients and partner companies. Offers depend on your interview performance.',
      ],
      whyTitle: 'Why learn AI and machine learning in 2026',
      why: [
        'AI skills are now asked for across IT roles, not only in research teams.',
        'Generative AI has created new roles, such as generative AI developer and AI engineer.',
        'Deployed projects stand out: employers want proof that you can ship a model, not only train one.',
      ],
    },
    audience: [
      {
        title: 'Graduates and freshers',
        text: 'Build AI skills from Python up, with projects to show employers.',
      },
      {
        title: 'Software developers',
        text: 'Add machine learning and LLM development to your coding skills.',
      },
      {
        title: 'Data and analytics professionals',
        text: 'Move from reporting into predictive and generative AI.',
      },
    ],
    outcomes: [
      'Write Python for data and AI with NumPy and pandas',
      'Train and evaluate machine learning models with scikit-learn',
      'Build and train neural networks in PyTorch',
      'Explain how transformers and large language models work',
      'Write prompts that return reliable, structured output',
      'Build RAG apps with embeddings and a vector database',
      'Fine-tune a model and check it for quality, bias and hallucinations',
      'Deploy a model as an API with FastAPI and Docker',
      'Prepare for AWS and Microsoft AI certification exams',
    ],
    modules: [
      {
        title: 'Python for AI',
        summary: 'The Python base every AI role needs: working with data and visualising it.',
        topics: [
          'Python essentials',
          'NumPy arrays',
          'pandas DataFrames',
          'Data visualisation',
          'Jupyter notebooks',
          'Python for data pipelines',
        ],
        lab: 'Clean and explore a real dataset with pandas.',
      },
      {
        title: 'Machine learning foundations',
        summary: 'Train classic models for business problems and judge whether a model is good.',
        topics: [
          'Supervised and unsupervised learning',
          'Regression and classification',
          'Decision trees and ensembles',
          'Feature engineering',
          'scikit-learn pipelines',
          'Model evaluation metrics',
        ],
        lab: 'Train three classifiers and compare them with cross-validation.',
      },
      {
        title: 'Deep learning and transformers',
        summary: 'Build neural networks with PyTorch and see how transformers power modern AI.',
        topics: [
          'Neural network basics',
          'PyTorch training loops',
          'CNNs and sequence models',
          'Attention and transformers',
          'Hugging Face models',
          'Transfer learning',
        ],
        lab: 'Train a neural network in PyTorch and fine-tune a Hugging Face model.',
      },
      {
        title: 'LLMs and prompt engineering',
        summary: 'Use large language models through APIs and write prompts that give reliable results.',
        topics: [
          'How LLMs work',
          'LLM APIs',
          'Prompt patterns',
          'Structured outputs',
          'Cost and latency',
          'Prompt injection risks',
        ],
        lab: 'Build a prompt library and get structured JSON output from an LLM.',
      },
      {
        title: 'Retrieval-augmented generation (RAG)',
        summary: 'Connect LLMs to company documents so answers are accurate and current.',
        topics: [
          'Embeddings',
          'Vector databases',
          'Chunking and retrieval',
          'Hybrid search',
          'RAG pipelines with LangChain',
          'Evaluating RAG answers',
        ],
        lab: 'Build a RAG app over PDFs with a vector database.',
      },
      {
        title: 'Fine-tuning and evaluation',
        summary: 'Adapt models to a specific task and measure quality before release.',
        topics: [
          'When to fine-tune',
          'Parameter-efficient fine-tuning',
          'Evaluation datasets',
          'LLM evaluation methods',
          'Hallucination checks',
          'Safety and bias checks',
        ],
        lab: 'Fine-tune a small model and evaluate it on a test set.',
      },
      {
        title: 'Building and deploying AI apps',
        summary: 'Turn models into apps people can use, served as APIs in containers.',
        topics: [
          'FastAPI services',
          'Docker',
          'Cloud deployment basics',
          'Git workflows and CI for ML',
          'Monitoring models in production',
        ],
        lab: 'Serve a model with FastAPI in a Docker container.',
      },
      {
        title: 'Capstone and career readiness',
        summary: 'Deliver an end-to-end AI project and get ready for interviews and exams.',
        topics: [
          'Capstone project',
          'Portfolio on GitHub',
          'Certification practice questions',
          'AI interview questions and case studies',
          'Technical and HR mock interviews',
        ],
        lab: 'Present your capstone and publish it on GitHub.',
      },
    ],
    tools: [
      'Python',
      'NumPy',
      'pandas',
      'Jupyter',
      'scikit-learn',
      'PyTorch',
      'Hugging Face',
      'LLM APIs',
      'LangChain',
      'Vector databases',
      'FastAPI',
      'Docker',
      'Git',
    ],
    skills: [
      'Python, NumPy and pandas',
      'Machine learning with scikit-learn',
      'Deep learning with PyTorch',
      'Transformers and Hugging Face',
      'Prompt engineering',
      'RAG and vector databases',
      'Fine-tuning',
      'Model evaluation',
      'FastAPI and Docker',
      'Git and GitHub',
    ],
    projects: [
      {
        title: 'Document Q&A assistant',
        problem: 'Staff waste hours searching long documents for answers.',
        text: 'Build a RAG app that answers questions from company PDFs and cites its sources.',
        result: 'An assistant that answers questions from company PDFs, with the source for every answer.',
        stack: ['LangChain', 'Vector database', 'LLM API'],
      },
      {
        title: 'Support-ticket summariser',
        problem: 'Support teams read every ticket in full before acting.',
        text: 'Fine-tune and evaluate a model that summarises and tags support tickets.',
        result:
          'A model that summarises and tags tickets automatically, with its quality measured on a test set.',
        stack: ['Hugging Face', 'PyTorch', 'Evaluation'],
      },
      {
        title: 'Resume screening model',
        problem: 'Recruiters screen hundreds of resumes by hand.',
        text: 'Train a model that ranks resumes for a role, check it for bias and deploy it as an API.',
        result: 'A screening model that ranks resumes, with bias checks, served as an API.',
        stack: ['scikit-learn', 'FastAPI', 'Docker'],
      },
    ],
    capstone:
      'Build and deploy an end-to-end AI application for a real business problem, combining machine learning or LLMs with a clean API, evaluation and documentation.',
    certificationIntro:
      'AWS, Microsoft and Google Cloud run these exams. The course teaches the machine learning and generative AI skills they test, with practice questions in module 8. Each exam also tests the provider’s own cloud services, such as Amazon SageMaker AI or Microsoft Foundry, so plan extra hands-on practice on that platform. You register and pay for each exam with the provider.',
    certifications: [
      {
        name: 'AWS Certified Machine Learning Engineer – Associate',
        note: 'Shows you can build, deploy and monitor machine learning on AWS. Modules 2 to 7 cover the ML skills it tests. AWS is moving the exam to a new version (MLA-C02), in beta from September 2026, and recommends at least a year of hands-on experience with Amazon SageMaker AI.',
      },
      {
        name: 'Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103)',
        note: 'Shows you can build generative AI apps and agents on Azure with Microsoft Foundry. Modules 4 to 7 cover the LLM, RAG and evaluation skills; the exam also covers Azure vision, speech and document services. It took over from AI-102, which Microsoft retired on 30 June 2026.',
      },
      {
        name: 'Google Cloud Professional Machine Learning Engineer',
        note: 'A next step once you have work experience. Google recommends 3+ years of industry experience, including a year or more designing and managing solutions on Google Cloud.',
      },
    ],
    roles: [
      { title: 'AI Engineer', text: 'Builds and deploys AI features and apps.', level: 'Junior to mid' },
      {
        title: 'Generative AI Developer',
        text: 'Builds LLM, RAG and prompt-based apps.',
        level: 'Junior to mid',
      },
      { title: 'Machine Learning Engineer', text: 'Trains, deploys and monitors ML models.', level: 'Mid' },
      {
        title: 'Data Scientist',
        text: 'Builds models that answer business questions.',
        level: 'Junior to mid',
      },
      { title: 'AI Application Developer', text: 'Adds AI to web and business apps.', level: 'Junior' },
      { title: 'NLP Engineer', text: 'Builds language models and text AI.', level: 'Mid' },
      { title: 'MLOps Engineer', text: 'Automates model deployment and monitoring.', level: 'Mid' },
    ],
    careers: {
      salaries: [
        { role: 'AI Engineer', experience: '0 to 6 years', pay: '₹3.5 L to ₹33 L' },
        { role: 'ML Engineer', experience: 'Varies', pay: '₹3.6 L to ₹29 L' },
        { role: 'Data Scientist', experience: '1 to 8 years', pay: '₹3.8 L to ₹27.9 L' },
      ],
      salaryNote:
        'Annual salary ranges from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
      path: [
        {
          stage: 'Start (0 to 2 years)',
          roles: 'AI Application Developer, Junior ML Engineer, Generative AI Developer',
        },
        { stage: 'Grow (2 to 5 years)', roles: 'AI Engineer, ML Engineer, NLP Engineer' },
        { stage: 'Lead (5+ years)', roles: 'Senior AI Engineer, AI Architect, MLOps Lead' },
      ],
    },
    faqs: [
      {
        q: 'What is the AI ML course syllabus?',
        a: '8 modules: Python for AI, machine learning foundations, deep learning and transformers, LLMs and prompt engineering, retrieval-augmented generation (RAG), fine-tuning and evaluation, building and deploying AI apps, then a capstone with career readiness. Every module has a hands-on lab.',
      },
      {
        q: 'Is this AI ML course in Hyderabad suitable for freshers?',
        a: 'Yes. Python is taught from the essentials, school-level maths is enough to start, and you do not need a computer science degree: graduates from science, commerce and engineering join. Basic programming helps, and regular practice matters most.',
      },
      {
        q: 'Do I need maths to learn AI?',
        a: 'School-level maths is enough to start. The course explains the maths behind each model in plain terms as you need it, with the focus on using models well rather than on proofs.',
      },
      {
        q: 'What is the difference between machine learning and generative AI?',
        a: 'Machine learning predicts or classifies from data, for example whether a customer will leave. Generative AI creates new text, images or code using models such as large language models. This course teaches both, in that order.',
      },
      {
        q: 'Does this course cover generative AI and LLMs?',
        a: 'Yes. After a module on transformers, three modules cover generative AI: LLMs and prompt engineering, RAG, and fine-tuning and evaluation. So it works as a generative AI course in Hyderabad that also teaches the machine learning underneath.',
      },
      {
        q: 'What is RAG in AI?',
        a: 'Retrieval-augmented generation (RAG) gives a large language model the relevant documents at question time, so its answers are accurate, current and based on your own data. You build a RAG app with LangChain and a vector database in module 5.',
      },
      {
        q: 'What is fine-tuning?',
        a: 'Training an existing model further on your own examples so it performs better on a specific task. In module 6 you fine-tune a small model and evaluate it on a test set.',
      },
      {
        q: 'Which certifications does the AI & ML course prepare me for?',
        a: 'AWS Certified Machine Learning Engineer – Associate and Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103), with Google Cloud Professional Machine Learning Engineer as a next step. Each exam also tests the provider’s own cloud services, so you add hands-on practice on AWS or Azure, then register and pay for the exam with the provider.',
      },
      {
        q: 'Should I choose AI & ML or Agentic AI Engineering?',
        a: 'Start with AI & ML for the foundations: machine learning, LLMs, RAG and deployment. Agentic AI Engineering builds on them to create AI agents that plan, use tools and work together.',
      },
      {
        q: 'Will I deploy the AI apps I build?',
        a: 'Yes. You serve models as APIs with FastAPI and Docker in module 7, and you deploy your capstone and publish it on GitHub.',
      },
      {
        q: 'What projects will I build in the AI & ML course?',
        a: 'A document Q&A assistant built with RAG, a support-ticket summariser you fine-tune and evaluate, and a resume screening model with bias checks, served as an API. A capstone brings the skills together in one deployed application.',
      },
      {
        q: 'What jobs can I get after an AI and machine learning course?',
        a: 'Freshers usually start as AI application developers, generative AI developers or junior ML engineers. With experience you can move to AI engineer, ML engineer or NLP engineer, and later to senior AI engineer, AI architect or MLOps lead.',
      },
      {
        q: 'What is the AI and machine learning course fee in Hyderabad?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Is the AI and machine learning course in Hyderabad live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Madhapur, Hyderabad.',
      },
      {
        q: 'Is there placement support with this AI ML course in Hyderabad?',
        a: 'Yes. You get resume and LinkedIn help, technical and HR mock interviews, and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
      },
    ],
  },
  {
    slug: 'agentic-ai',
    image: '/images/programs/agentic-ai.jpg',
    family: 'AI',
    name: 'Agentic AI Engineering',
    shortName: 'Agentic AI',
    // From the client's page document "Agentic AI Engineering" (Nov 2026), written for the keywords chosen on
    // 26 Nov 2026: primary "agentic ai course in hyderabad"; secondary "ai agents course", "ai engineering
    // course", "agentic ai course with placement in hyderabad". Hyderabad is the only location named.
    // Generative AI, LLM and RAG course keywords belong to AI & ML, and "AI courses" to the AI & Data track
    // page.
    h1: 'Agentic AI course in Hyderabad: AI agents, MCP and multi-agent systems',
    tagline: 'Build AI agents that plan, use tools and work together, safely and in production.',
    summary:
      'This agentic AI course in Hyderabad teaches you to build AI agents that plan steps, use tools and finish real tasks. Your agents call real systems through the Model Context Protocol (MCP), remember context, work as a team, pass evaluation and guardrail checks and run as production services.',
    accent: 'rose',
    prerequisites:
      'Basic Python needed. The AI & Machine Learning course, or similar experience with LLMs, is recommended.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'Python required (basic level)',
      location: 'Madhapur, Hyderabad',
    },
    highlights: ['Agents, tools & MCP', 'LangGraph, CrewAI & multi-agent', 'Placement support'],
    about: {
      paragraphs: [
        'Our agentic AI course in Hyderabad, Agentic AI Engineering, is an AI engineering course built around AI agents that plan, use tools and complete real tasks. Agents go beyond chatbots: they read data, call APIs, take actions and work together, so companies that build them need engineers who can make them safe and reliable.',
        'You learn agent design, tools and the Model Context Protocol (MCP), memory and retrieval, LangGraph and CrewAI, multi-agent systems, evaluation, guardrails and observability, and how to deploy agents as reliable services. Every module has a hands-on lab, and the course covers the agent, RAG and guardrail skills tested in the AWS Generative AI Developer – Professional and Microsoft AI-103 exams.',
        'Classes are live and instructor-led on Zoom, and every class is recorded. Placement support covers your resume and LinkedIn, mock interviews and job referrals through ARA’s IT staffing clients and partner companies. Offers depend on your interview performance.',
      ],
      whyTitle: 'Why learn agentic AI in 2026',
      why: [
        'Agents are the step after chatbots: they carry out tasks, not only answer questions.',
        'MCP is now an open standard for connecting agents to tools, run by the Agentic AI Foundation under the Linux Foundation.',
        'Building agents that are safe to run takes engineering: evaluation, guardrails and monitoring matter as much as the model.',
      ],
    },
    audience: [
      {
        title: 'Software developers',
        text: 'Move into AI engineering by building agents on top of the code you already write.',
      },
      {
        title: 'AI and ML engineers',
        text: 'Go beyond models to agents that take actions.',
      },
      {
        title: 'Automation and RPA professionals',
        text: 'Upgrade rule-based automation to AI agents.',
      },
    ],
    outcomes: [
      'Explain how agents reason, plan and act, and when not to use one',
      'Give agents tools through function calling and REST APIs',
      'Build an MCP server and connect agents to it',
      'Add memory and RAG so agents remember and look things up',
      'Build agents with LangGraph and CrewAI, and choose between frameworks',
      'Design multi-agent systems with handoffs and human approval steps',
      'Test agents with evaluations, guardrails, tracing and red-teaming',
      'Deploy agents as FastAPI services in Docker',
      'Prepare for AWS and Microsoft generative AI certification exams',
    ],
    modules: [
      {
        title: 'Agent foundations',
        summary: 'What makes an agent different from a chatbot: goals, planning and actions.',
        topics: [
          'LLMs and agents',
          'Reasoning and planning patterns',
          'Function calling',
          'Agent loops',
          'Agent design patterns',
          'When not to use agents',
        ],
        lab: 'Build a simple agent loop with function calling.',
      },
      {
        title: 'Tools, APIs and MCP',
        summary: 'Give agents real abilities through APIs and Model Context Protocol servers.',
        topics: [
          'Tool design',
          'Calling REST APIs',
          'Model Context Protocol (MCP)',
          'Building an MCP server',
          'Tool security and permissions',
        ],
        lab: 'Build an MCP server and connect an agent to it.',
      },
      {
        title: 'Memory and knowledge',
        summary: 'Help agents remember and look things up.',
        topics: [
          'Short- and long-term memory',
          'RAG for agents',
          'Vector databases',
          'Knowledge graph basics',
          'Context management',
          'Memory privacy',
        ],
        lab: 'Add memory and RAG to an agent.',
      },
      {
        title: 'Agent frameworks',
        summary: 'Build agents with popular frameworks and provider SDKs.',
        topics: [
          'LangGraph',
          'CrewAI',
          'Provider agent SDKs',
          'State and control flow',
          'Choosing a framework: the trade-offs',
        ],
        lab: 'Build the same agent in LangGraph and CrewAI and compare them.',
      },
      {
        title: 'Multi-agent systems',
        summary: 'Design teams of agents that share work.',
        topics: [
          'Orchestrator and worker patterns',
          'Agent handoffs and handoff protocols',
          'Shared state',
          'Human-in-the-loop approvals',
          'Failure handling',
        ],
        lab: 'Build a planner-worker multi-agent system with a human approval step.',
      },
      {
        title: 'Evaluation, guardrails and observability',
        summary: 'Make agents safe and measurable.',
        topics: [
          'Agent evaluation methods',
          'Guardrails and policies',
          'Prompt injection defence',
          'Tracing and observability tools',
          'Red-teaming agents',
          'Cost control',
        ],
        lab: 'Add evaluation tests, guardrails and tracing to an agent.',
      },
      {
        title: 'Deploying agents',
        summary: 'Ship agents as reliable services.',
        topics: [
          'FastAPI services',
          'Docker',
          'Queues and long-running tasks',
          'Secrets and access',
          'Rate limits and retries',
          'Monitoring in production',
        ],
        lab: 'Deploy an agent as a FastAPI service in Docker.',
      },
      {
        title: 'Capstone and career readiness',
        summary: 'Deliver a production-style agent and get ready for interviews and exams.',
        topics: [
          'Capstone agent',
          'Portfolio and demo',
          'Certification practice questions',
          'Agentic AI interview questions',
          'Agent system design interviews',
          'Mock interviews',
        ],
        lab: 'Demo your capstone agent and publish it on GitHub.',
      },
    ],
    tools: [
      'Python',
      'LLM APIs',
      'LangGraph',
      'CrewAI',
      'Model Context Protocol (MCP)',
      'Vector databases',
      'FastAPI',
      'Docker',
      'Observability tools',
      'Git',
    ],
    skills: [
      'Agent design',
      'Function calling',
      'Model Context Protocol (MCP)',
      'Memory and retrieval',
      'LangGraph',
      'CrewAI',
      'Multi-agent systems',
      'Evaluation and guardrails',
      'Observability',
      'Deploying agents',
    ],
    projects: [
      {
        title: 'Research agent',
        problem: 'Analysts spend days collecting and summarising research.',
        text: 'Build an agent that searches, reads sources and writes a cited report.',
        result: 'An agent that researches a topic and writes a report with its sources cited.',
        stack: ['LangGraph', 'LLM API', 'Tool calling'],
      },
      {
        title: 'Multi-agent support desk',
        problem: 'Support teams are overwhelmed by ticket volume.',
        text: 'Build a team of agents that triage, answer and escalate support tickets, using RAG to find answers.',
        result: 'A team of agents that triage, answer and escalate tickets.',
        stack: ['CrewAI', 'RAG', 'Multi-agent'],
      },
      {
        title: 'Operations agent with MCP',
        problem: 'Operations teams repeat the same system tasks every day.',
        text: 'Build an agent that acts on business systems through MCP servers, with guardrails on what it may do.',
        result: 'An agent that handles routine system tasks through MCP, within guardrails.',
        stack: ['MCP', 'FastAPI', 'Guardrails'],
      },
    ],
    capstone:
      'Design, build and deploy a production-style agentic system for a business process, with tools, memory, evaluation, guardrails and monitoring.',
    certificationIntro:
      'AWS, Microsoft and NVIDIA run these exams. The course teaches the agent, RAG, evaluation and guardrail skills they test using open tools, with practice questions in module 8. The AWS and Microsoft exams test those skills on their own platforms, Amazon Bedrock and Microsoft Foundry, so plan extra hands-on practice there. You register and pay for each exam with the provider.',
    certifications: [
      {
        name: 'AWS Certified Generative AI Developer – Professional (AIP-C01)',
        note: 'Shows you can put generative AI, including RAG and agents, into production on AWS. It is a professional-level exam: AWS recommends 2+ years of building production applications and a year of hands-on generative AI work first.',
      },
      {
        name: 'Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103)',
        note: 'Shows you can build AI apps and agents on Azure with Microsoft Foundry. Modules 1 to 6 cover the agent, RAG and responsible AI skills; the exam also covers Azure vision, speech and document services.',
      },
      {
        name: 'NVIDIA-Certified Associate: Generative AI LLMs (NCA-GENL)',
        note: 'A next step that shows you understand how LLM applications are built and evaluated. NVIDIA asks for a basic understanding of generative AI and LLMs.',
      },
    ],
    roles: [
      { title: 'Agentic AI Engineer', text: 'Builds AI agents and agentic workflows.', level: 'Mid' },
      {
        title: 'AI Automation Engineer',
        text: 'Automates business processes with AI agents.',
        level: 'Junior to mid',
      },
      { title: 'AI Solutions Engineer', text: 'Designs AI solutions for clients.', level: 'Mid' },
      { title: 'LLM Application Developer', text: 'Builds LLM-powered apps.', level: 'Junior to mid' },
      { title: 'Generative AI Developer', text: 'Builds generative AI features.', level: 'Junior to mid' },
      {
        title: 'AI Platform Engineer',
        text: 'Runs the infrastructure agents depend on.',
        level: 'Mid to senior',
      },
    ],
    careers: {
      salaries: [
        { role: 'AI Engineer', experience: '0 to 6 years', pay: '₹3.5 L to ₹33 L' },
        { role: 'ML Engineer', experience: 'Varies', pay: '₹3.6 L to ₹29 L' },
      ],
      salaryNote:
        'Annual salary ranges for AI and ML engineer roles in general, from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
      path: [
        {
          stage: 'Start (with Python and LLM basics)',
          roles: 'AI Automation Engineer, LLM Application Developer',
        },
        { stage: 'Grow (2 to 5 years)', roles: 'Agentic AI Engineer, AI Solutions Engineer' },
        { stage: 'Lead (5+ years)', roles: 'AI Platform Lead, AI Architect' },
      ],
    },
    faqs: [
      {
        q: 'What is an AI agent?',
        a: 'An AI system that takes a goal, plans the steps, uses tools and completes the task, rather than only answering questions. In this AI agents course you build three of them, plus a capstone agent.',
      },
      {
        q: 'What is the difference between agentic AI and generative AI?',
        a: 'Generative AI creates content such as text, images or code. Agentic AI uses generative models to plan and take actions toward a goal: an agent reads data, calls tools and checks its own results.',
      },
      {
        q: 'What is MCP (Model Context Protocol)?',
        a: 'An open standard for connecting AI agents to tools and data sources. Anthropic released it in 2024, and it is now run by the Agentic AI Foundation under the Linux Foundation. You build an MCP server and connect an agent to it in module 2.',
      },
      {
        q: 'What is the Agentic AI course syllabus?',
        a: '8 modules: agent foundations; tools, APIs and MCP; memory and knowledge; agent frameworks (LangGraph and CrewAI); multi-agent systems; evaluation, guardrails and observability; deploying agents; then a capstone with career readiness. Every module has a hands-on lab.',
      },
      {
        q: 'Which agent frameworks does the course teach?',
        a: 'LangGraph for graph-based agents with state and control flow, and CrewAI for role-based teams of agents, plus an introduction to provider agent SDKs. You build the same agent in LangGraph and CrewAI and compare them.',
      },
      {
        q: 'What is a multi-agent system?',
        a: 'Several agents with different roles working together, for example one that plans and others that carry out tasks. Module 5 covers orchestrator and worker patterns, handoffs, shared state and human approval steps.',
      },
      {
        q: 'What are guardrails for AI agents?',
        a: 'Rules and checks that stop an agent from taking unsafe actions or giving harmful answers, such as limits on which tools it may use and checks for prompt injection. Module 6 covers guardrails with evaluation, tracing and red-teaming.',
      },
      {
        q: 'Do I need to know machine learning before Agentic AI Engineering?',
        a: 'You need basic Python, and LLM knowledge helps. The AI & Machine Learning course, or similar experience with LLM APIs and RAG, is a good first step. You do not need to train models yourself.',
      },
      {
        q: 'Which certifications does the Agentic AI course prepare me for?',
        a: 'AWS Certified Generative AI Developer – Professional (AIP-C01) and Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103), with NVIDIA’s Generative AI LLMs associate certification as a next step. AWS recommends 2+ years of building production applications before its professional exam. You register and pay for each exam with the provider.',
      },
      {
        q: 'What projects will I build in Agentic AI Engineering?',
        a: 'A research agent that writes cited reports, a multi-agent support desk that triages, answers and escalates tickets, and an operations agent that works on business systems through MCP. A capstone brings them together in one deployed agentic system.',
      },
      {
        q: 'What agentic AI jobs can I apply for?',
        a: 'Developers with Python and LLM basics usually start as AI automation engineers or LLM application developers. With experience they move into agentic AI engineer and AI solutions engineer roles, and later AI platform lead or AI architect.',
      },
      {
        q: 'How is this course different from Salesforce FDE or ServiceNow FDSE?',
        a: 'Those courses build AI agents inside one platform: Agentforce on Salesforce, or AI Agent Studio on ServiceNow. This course builds agents with open tools such as LangGraph, CrewAI and MCP that work across any system.',
      },
      {
        q: 'What is the Agentic AI course fee in Hyderabad?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Is the agentic AI course in Hyderabad live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Madhapur, Hyderabad.',
      },
      {
        q: 'Does the agentic AI course in Hyderabad include placement support?',
        a: 'Yes. You get resume and LinkedIn help, technical and HR mock interviews, and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
      },
    ],
  },
  {
    slug: 'cybersecurity',
    image: '/images/programs/cybersecurity.webp',
    family: 'Security',
    name: 'Cybersecurity Training & Placement',
    shortName: 'Cybersecurity',
    // From the client's page document "Cybersecurity" (Nov 2026), written for the keywords chosen on 26 Nov 2026:
    // primary "cyber security course in hyderabad"; secondary "cyber security course in hyderabad with placement",
    // "soc analyst course in hyderabad", "comptia security+ training in hyderabad". The site has no Cybersecurity
    // overview page, so this page owns the broad cyber security keywords. CompTIA launched Security+ SY0-801 on
    // 17 Nov 2026 (SY0-701 retires in English on 11 Jun 2027); "Azure Entra ID" is Microsoft Entra ID.
    h1: 'Cybersecurity Course in Hyderabad with Placement Support',
    tagline: 'Detect, investigate and stop attacks: network, cloud, identity and SOC skills.',
    summary:
      'A cyber security analyst in a security operations centre (SOC) watches a company’s systems for attacks and helps stop them before damage is done. This cyber security course in Hyderabad trains you for that work: you triage alerts in a SIEM, review a cloud account for risks, run a vulnerability assessment and handle an incident from detection to report.',
    accent: 'amber',
    prerequisites: 'No security experience needed. Basic networking and computer skills help.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'No coding needed',
      location: 'Madhapur, Hyderabad',
    },
    highlights: ['SOC, SIEM & incident response', 'Security+, SC-200 & CC prep', 'Placement support'],
    about: {
      paragraphs: [
        'Our Cybersecurity course prepares you for security operations roles that protect companies from attacks. You learn how attacks work, how to detect them in a SIEM and how to respond, with a focus on the defensive (blue team) skills that SOC analysts use every day.',
        'You cover security fundamentals, network and cloud security, identity and access management, SIEM and SOC operations with Splunk and Microsoft Sentinel, vulnerability management and incident response. Every module has a hands-on lab, and the course prepares you for CompTIA Security+, Microsoft SC-200 and ISC2 Certified in Cybersecurity (CC).',
        'Classes are live and instructor-led on Zoom, and every class is recorded. Placement support covers your resume and LinkedIn, mock interviews and job referrals through ARA’s IT staffing clients and partner companies. Offers depend on your interview performance.',
      ],
      whyTitle: 'Why learn cyber security in 2026',
      why: [
        'Every organisation that runs on IT needs security, from banks to start-ups.',
        'SOC Analyst is a clear entry role, with a path to L2, L3 and security engineering.',
        'Recognised certifications such as CompTIA Security+ can help freshers get shortlisted.',
      ],
    },
    audience: [
      {
        title: 'Freshers and graduates',
        text: 'Start in security through a clear entry role: SOC Analyst L1.',
      },
      {
        title: 'Network and system administrators',
        text: 'Move into security with the infrastructure knowledge you already have.',
      },
      {
        title: 'IT support professionals',
        text: 'Use your troubleshooting skills in security operations.',
      },
    ],
    outcomes: [
      'Explain common attacks and the security controls that stop them',
      'Analyse network traffic with Wireshark and secure networks with firewalls and segmentation',
      'Find and fix misconfigurations in AWS and Azure accounts',
      'Enforce MFA and least privilege with AWS IAM and Microsoft Entra ID',
      'Triage alerts and write detections in Splunk and Microsoft Sentinel',
      'Scan for vulnerabilities with Nessus and Qualys and prioritise them by risk',
      'Run an incident response playbook from detection to report',
      'Prepare for CompTIA Security+, Microsoft SC-200 and ISC2 CC',
    ],
    modules: [
      {
        title: 'Security fundamentals',
        summary: 'How attacks work and how companies defend against them.',
        topics: [
          'CIA triad and security controls',
          'Threats, vulnerabilities and risk',
          'Common attack types',
          'Cryptography basics',
          'Security frameworks: an overview',
          'Security policies',
        ],
        lab: 'Map common attacks to the controls that stop them.',
      },
      {
        title: 'Network security',
        summary: 'Secure the network and read its traffic.',
        topics: [
          'Networking refresher: TCP/IP and DNS',
          'Firewalls and segmentation',
          'VPNs and secure access',
          'Traffic analysis with Wireshark',
          'Attack vectors on networks',
          'Zero trust basics',
        ],
        lab: 'Capture and analyse network traffic with Wireshark.',
      },
      {
        title: 'Cloud security',
        summary: 'Secure AWS and Azure accounts.',
        topics: [
          'The shared responsibility model',
          'AWS and Azure security basics',
          'Common cloud misconfigurations',
          'Logging and monitoring in the cloud',
          'Cloud security posture',
        ],
        lab: 'Find misconfigurations in a lab AWS account.',
      },
      {
        title: 'Identity and access management',
        summary: 'Control who can access what.',
        topics: [
          'Authentication and MFA',
          'AWS IAM and Microsoft Entra ID',
          'Least privilege',
          'Privileged access',
          'Identity attacks and threats',
        ],
        lab: 'Enforce MFA and least privilege in Microsoft Entra ID.',
      },
      {
        title: 'SIEM and security monitoring',
        summary: 'Work as a SOC analyst: monitor and triage alerts.',
        topics: [
          'SOC roles and workflow',
          'Splunk searches (SPL)',
          'Microsoft Sentinel and KQL queries',
          'Alert triage',
          'Threat intelligence basics',
          'MITRE ATT&CK',
        ],
        lab: 'Triage alerts and write detections in Splunk and Microsoft Sentinel.',
      },
      {
        title: 'Vulnerability management',
        summary: 'Find and fix weaknesses before attackers do.',
        topics: [
          'Vulnerability scanning with Nessus and Qualys',
          'CVSS scoring',
          'Risk-based prioritisation',
          'Patch management',
          'Vulnerability reporting',
        ],
        lab: 'Scan a lab network with Nessus and prioritise the findings.',
      },
      {
        title: 'Incident response',
        summary: 'Handle incidents from detection to lessons learned.',
        topics: [
          'The incident response lifecycle',
          'Playbooks',
          'Linux forensics basics',
          'Evidence handling',
          'Containment and recovery',
          'Incident reports',
        ],
        lab: 'Run an incident response playbook on a simulated attack.',
      },
      {
        title: 'Certification and career readiness',
        summary: 'Prepare for your certification exams and SOC interviews.',
        topics: [
          'CompTIA Security+ practice tests',
          'SC-200 practice tests',
          'SOC interview questions and scenarios',
          'Resume and LinkedIn',
          'Mock interviews',
        ],
        lab: 'Take timed Security+ and SC-200 practice tests.',
      },
    ],
    tools: [
      'Splunk',
      'Microsoft Sentinel',
      'Qualys',
      'Nessus',
      'AWS IAM',
      'Microsoft Entra ID',
      'Wireshark',
      'Linux',
    ],
    skills: [
      'Security fundamentals',
      'Network security',
      'Cloud security (AWS and Azure)',
      'Identity and access management',
      'SIEM: Splunk and Sentinel',
      'Alert triage',
      'Vulnerability management',
      'Incident response',
      'Linux basics',
      'Security reporting',
    ],
    projects: [
      {
        title: 'SOC alert triage',
        problem: 'A SOC receives hundreds of alerts and cannot tell which ones matter.',
        text: 'Investigate and triage alerts in a SIEM, separate real threats from noise and write up your findings.',
        result: 'Triaged alerts with clear write-ups and escalations.',
        stack: ['Splunk', 'Microsoft Sentinel'],
      },
      {
        title: 'Cloud security review',
        problem: 'A company’s cloud account has risky settings nobody has checked.',
        text: 'Review an AWS account for misconfigurations and risky IAM permissions, and recommend fixes.',
        result: 'A cloud security review with prioritised fixes.',
        stack: ['AWS IAM', 'Cloud logs'],
      },
      {
        title: 'Vulnerability assessment',
        problem: 'A network has never been tested for weaknesses.',
        text: 'Scan a lab network, prioritise the findings by risk and write a report.',
        result: 'A vulnerability report with a remediation plan.',
        stack: ['Nessus', 'Qualys'],
      },
    ],
    capstone:
      'Act as the SOC team for a simulated company: monitor, detect, investigate and respond to an attack, then write the incident report and lessons learned.',
    certificationIntro:
      'CompTIA, Microsoft and ISC2 run their own exams. This course prepares you for the three below: you book and pay for each exam with the vendor. CompTIA launched a new Security+ exam, SY0-801, on 17 November 2026, and the English SY0-701 exam stays available until 11 June 2027. An advisor can help you choose the version and the order.',
    certifications: [
      {
        name: 'CompTIA Security+ (SY0-701 / SY0-801)',
        note: 'Shows you know the core security skills employers expect. Covered by modules 1 to 7, with practice tests in module 8. There is no formal prerequisite; CompTIA recommends about two years of hands-on experience.',
      },
      {
        name: 'Microsoft Certified: Security Operations Analyst Associate (SC-200)',
        note: 'Shows you can detect and respond to threats with Microsoft tools. Microsoft Sentinel and Entra ID are covered in modules 4, 5 and 7, with practice tests in module 8. The exam also tests Microsoft Defender XDR, which needs extra study beyond this syllabus.',
      },
      {
        name: 'ISC2 Certified in Cybersecurity (CC)',
        note: 'An entry-level certification with no work experience required. Its domains (security principles, governance, identity, network and cloud security, and security operations) are covered by modules 1 to 7. ISC2’s free exam offer closed to new learners in May 2026.',
      },
      {
        name: 'CompTIA Cybersecurity Analyst (CySA+), CS0-004',
        note: 'A next step once you work in a SOC. CompTIA recommends about four years in a SOC or vulnerability analyst role before this exam.',
      },
    ],
    roles: [
      {
        title: 'SOC Analyst (L1/L2)',
        text: 'Monitors alerts and investigates threats.',
        level: 'Fresher to mid',
      },
      { title: 'Security Engineer', text: 'Builds and runs security controls.', level: 'Mid' },
      { title: 'IAM Specialist', text: 'Manages identities and access.', level: 'Junior to mid' },
      { title: 'GRC Analyst', text: 'Supports risk and compliance work.', level: 'Fresher to mid' },
      { title: 'Cloud Security Analyst', text: 'Secures cloud accounts.', level: 'Junior to mid' },
      {
        title: 'Vulnerability Management Analyst',
        text: 'Finds and tracks vulnerabilities.',
        level: 'Fresher to mid',
      },
      { title: 'Incident Responder', text: 'Handles security incidents.', level: 'Mid' },
    ],
    careers: {
      salaries: [{ role: 'SOC Analyst', experience: '1 to 5 years', pay: '₹3 L to ₹8.9 L' }],
      salaryNote:
        'Annual salary range from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
      path: [
        { stage: 'Start (0 to 2 years)', roles: 'SOC Analyst L1, Vulnerability Analyst' },
        {
          stage: 'Grow (2 to 5 years)',
          roles: 'SOC Analyst L2/L3, Security Engineer, Cloud Security Analyst',
        },
        { stage: 'Lead (5+ years)', roles: 'Security Architect, SOC Manager' },
      ],
    },
    faqs: [
      {
        q: 'What does a SOC analyst do?',
        a: 'A SOC analyst works in a security operations centre, watching security alerts, investigating suspicious activity and escalating real threats. L1 analysts triage alerts; L2 and L3 analysts investigate further and lead the response.',
      },
      {
        q: 'Is this a SOC analyst course?',
        a: 'Yes. It works as a SOC analyst course in Hyderabad: module 5 trains you in monitoring and alert triage, module 6 in vulnerability management and module 7 in incident response, and module 8 covers SOC interview questions. The capstone puts you in a simulated SOC.',
      },
      {
        q: 'What is the cyber security course syllabus?',
        a: 'Eight modules, each with a hands-on lab: security fundamentals, network security, cloud security, identity and access management, SIEM and security monitoring, vulnerability management, incident response, and certification and career readiness. Three projects and a SOC capstone bring them together.',
      },
      {
        q: 'Is this cyber security course in Hyderabad suitable for freshers?',
        a: 'Yes. No security experience is needed, and the course starts with the fundamentals; basic networking and computer skills help. SOC Analyst L1 roles hire freshers, and strong labs plus a certification such as Security+ can help you get shortlisted.',
      },
      {
        q: 'Does cyber security require coding?',
        a: 'Not for SOC and analyst roles. You write search queries in Splunk and Microsoft Sentinel and use basic Linux commands, but no programming. Scripting helps later if you move into security engineering.',
      },
      {
        q: 'Do I need networking knowledge before I join?',
        a: 'Basics help but are not required. Module 2 refreshes TCP/IP and DNS before moving on to firewalls, VPNs and traffic analysis with Wireshark.',
      },
      {
        q: 'Is cyber security a good career?',
        a: 'For people who enjoy investigation and problem-solving, yes. Every organisation that runs on IT needs security, and there is a clear path from SOC Analyst L1 to L2 and L3, security engineer and security architect. AmbitionBox lists SOC analyst salaries of ₹3 L to ₹8.9 L a year for 1 to 5 years of experience.',
      },
      {
        q: 'Which certifications does this cyber security course prepare me for?',
        a: 'CompTIA Security+, Microsoft SC-200 (Security Operations Analyst Associate) and ISC2 Certified in Cybersecurity (CC), with CompTIA CySA+ as a next step once you have SOC experience. You book and pay for each exam with CompTIA, Microsoft or ISC2.',
      },
      {
        q: 'Does this course include CompTIA Security+ training?',
        a: 'Yes. Modules 1 to 7 cover the Security+ topics and module 8 adds timed practice tests. CompTIA launched the new SY0-801 exam on 17 November 2026, and the English SY0-701 exam stays available until 11 June 2027, so ask your trainer which version your batch practises for.',
      },
      {
        q: 'What is a SIEM?',
        a: 'Security information and event management: a tool, such as Splunk or Microsoft Sentinel, that collects logs from across a company and raises alerts on suspicious activity. SOC analysts work in one every day.',
      },
      {
        q: 'Is this an ethical hacking course?',
        a: 'No. It focuses on defence (blue team). You learn how attacks work so you can detect and stop them, but the course does not prepare you for offensive certifications such as EC-Council’s Certified Ethical Hacker (CEH).',
      },
      {
        q: 'What projects will I build in the Cybersecurity course?',
        a: 'A SOC alert triage in a SIEM, a cloud security review of an AWS account and a vulnerability assessment of a lab network. In the capstone you act as the SOC team for a simulated company and handle an attack from detection to the incident report.',
      },
      {
        q: 'What can I learn after the Cybersecurity course?',
        a: 'Cloud security in more depth, ServiceNow GRC for governance, risk and compliance roles, or a next-step certification such as CompTIA CySA+ once you have SOC experience.',
      },
      {
        q: 'What is the cyber security course fee in Hyderabad?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Are the cyber security classes live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Madhapur, Hyderabad.',
      },
      {
        q: 'Does the cyber security course include placement support?',
        a: 'Yes. Alongside the training you get resume and LinkedIn help, technical and HR mock interviews, and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
      },
    ],
  },
  {
    slug: 'full-stack-ai',
    image: '/images/programs/full-stack-ai.jpg',
    family: 'Development',
    // Names from the client's page documents (Nov 2026): the short name no longer repeats the track's name.
    name: 'Full Stack Development with AI (MERN)',
    shortName: 'MERN Full Stack with AI',
    // From the client's page document "Full Stack Development with AI (MERN)" (Nov 2026), written for the keywords
    // chosen on 26 Nov 2026: primary "mern stack course in hyderabad"; secondary "mern stack course with placement",
    // "react and node js course", "full stack development with ai course". Hyderabad is the only location named.
    // "Full stack developer course in Hyderabad" belongs to the track page, and the Python and Java full stack
    // keywords to their own pages.
    h1: 'MERN stack course in Hyderabad: full stack development with AI',
    tagline: 'Build and ship full stack web apps with React, Node.js and MongoDB, with AI built in.',
    summary:
      'This MERN stack course in Hyderabad teaches you to build complete web apps in JavaScript: React and Next.js on the front end, Node.js and Express on the back end and MongoDB for data. You add AI features with LLM APIs, learn to use AI coding tools well and deploy your apps live with Docker and CI.',
    accent: 'indigo',
    prerequisites:
      'No prior coding experience needed. Logical thinking and regular practice matter more than your background.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'Taught from the basics (JavaScript)',
      location: 'Madhapur, Hyderabad',
    },
    highlights: ['React, Node.js & MongoDB', 'AI features & deployed apps', 'Placement support'],
    about: {
      paragraphs: [
        'Our MERN stack course in Hyderabad teaches full stack development with AI in one language, JavaScript. You build front ends with React and Next.js, servers and REST APIs with Node.js and Express, and store data in MongoDB, with SQL basics so you can work with both kinds of database. It is a React and Node.js course from the first lab to the last project.',
        'Along the way you add AI features to your apps, such as chat, summaries and answers from your own documents (RAG), and learn to use AI coding assistants while checking what they produce. You deploy your apps with Docker and GitHub Actions so employers can try them, and finish with three projects and a capstone. The course also prepares you for the MongoDB Associate Developer exam in its Node.js version.',
        'Classes are live and instructor-led on Zoom, and every class is recorded. Placement support covers your resume and LinkedIn, mock interviews and job referrals through ARA’s IT staffing clients and partner companies. Offers depend on your interview performance.',
      ],
      whyTitle: 'Why learn the MERN stack with AI in 2026',
      why: [
        'JavaScript runs the whole stack, so one language takes you from the front end to the back end.',
        'Startups and product companies often build with React and Node.js, so MERN skills match many developer job posts.',
        'Employers increasingly expect developers to build AI features and use AI coding tools well, and this course teaches both.',
      ],
    },
    audience: [
      {
        title: 'Freshers and graduates',
        text: 'Start a developer career with JavaScript, the language of the web, from the front end to the back end.',
      },
      {
        title: 'Front-end or back-end developers',
        text: 'Learn the half of the stack you do not know yet, and add AI features to your apps.',
      },
      {
        title: 'Career switchers',
        text: 'Build a portfolio of deployed apps that employers can open and try.',
      },
    ],
    outcomes: [
      'Build responsive, accessible pages with HTML, CSS and JavaScript',
      'Build interactive interfaces with React and production apps with Next.js',
      'Create REST APIs with Node.js and Express, with JWT login and validation',
      'Model and query data in MongoDB with Mongoose, and write basic SQL',
      'Add AI features: chat, summaries, streaming responses and RAG with vector search',
      'Use AI coding assistants to build, test and review code',
      'Deploy apps with Docker, GitHub Actions and cloud hosting',
      'Prepare for the MongoDB Associate Developer exam (Node.js)',
    ],
    modules: [
      {
        title: 'Web foundations and JavaScript',
        summary: 'The base of every web app.',
        topics: [
          'HTML and CSS',
          'Responsive design',
          'JavaScript essentials',
          'The DOM and events',
          'Git and GitHub',
          'Accessibility basics',
        ],
        lab: 'Build a responsive landing page and push it to GitHub.',
      },
      {
        title: 'Front end with React',
        summary: 'Build interactive interfaces with React.',
        topics: [
          'Components and props',
          'State and hooks',
          'Forms',
          'Routing',
          'Calling APIs',
          'React performance',
        ],
        lab: 'Build a React app with routing and forms.',
      },
      {
        title: 'Production React with Next.js',
        summary: 'Build React apps that are ready for real users and search engines.',
        topics: [
          'Pages and the App Router',
          'Server and client components',
          'Data fetching',
          'SEO basics',
          'Image optimisation',
          'Deployment on Vercel',
        ],
        lab: 'Build a Next.js site with server components and SEO tags.',
      },
      {
        title: 'Back end and APIs with Node.js and Express',
        summary: 'Build the servers and REST APIs behind your apps.',
        topics: [
          'Node.js basics',
          'Express routes',
          'REST API design',
          'Authentication with JWT',
          'Validation and error handling',
          'Rate limiting',
        ],
        lab: 'Build a REST API with Express and JWT login.',
      },
      {
        title: 'Databases: MongoDB and SQL',
        summary: 'Store and query data with MongoDB, plus the SQL basics every developer needs.',
        topics: [
          'MongoDB and Mongoose',
          'Data modelling',
          'Indexes',
          'SQL basics',
          'Choosing a database',
          'Database security',
        ],
        lab: 'Model data in MongoDB and query it with Mongoose.',
      },
      {
        title: 'AI features in apps',
        summary: 'Add AI to the apps you build.',
        topics: [
          'LLM APIs',
          'Prompt design for apps',
          'Chat and summarisation features',
          'Streaming responses',
          'RAG with vector search',
          'AI safety basics',
        ],
        lab: 'Add an AI chat feature with streaming responses.',
      },
      {
        title: 'AI-assisted development',
        summary: 'Use AI coding tools to work faster, and check what they produce.',
        topics: [
          'AI coding assistants',
          'Prompting for code',
          'Reviewing AI-generated code',
          'Writing tests with AI help',
          'Security of AI-generated code',
        ],
        lab: 'Build a feature with an AI coding assistant and review the code.',
      },
      {
        title: 'Deployment and interview readiness',
        summary: 'Ship your apps and prepare for interviews.',
        topics: [
          'Docker',
          'CI/CD with GitHub Actions',
          'Cloud hosting',
          'Monitoring in production',
          'Your developer portfolio',
          'Coding interviews and mock interviews',
        ],
        lab: 'Deploy an app with Docker and GitHub Actions.',
      },
    ],
    tools: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'SQL',
      'LLM APIs',
      'Git and GitHub',
      'Docker',
      'GitHub Actions',
      'Vercel',
    ],
    skills: [
      'HTML, CSS and JavaScript',
      'React',
      'Next.js',
      'Node.js and Express',
      'REST API design',
      'MongoDB',
      'Authentication',
      'AI features with LLM APIs',
      'AI-assisted coding',
      'Docker and CI/CD',
    ],
    projects: [
      {
        title: 'Job search portal',
        problem: 'Job seekers and recruiters need one simple place to meet.',
        text: 'Build a job portal with job search, applications and user accounts, from the MongoDB database to the React interface.',
        result: 'A working job portal where recruiters post jobs and candidates search, sign in and apply.',
        stack: ['React', 'Node.js', 'Express', 'MongoDB'],
      },
      {
        title: 'AI study assistant',
        problem: 'Students struggle to find answers in their own notes.',
        text: 'Build a Next.js app that answers questions from uploaded study notes, using RAG and an LLM API.',
        result: 'An AI assistant that answers a student’s questions from their own notes.',
        stack: ['Next.js', 'LLM API', 'RAG'],
      },
      {
        title: 'Live deployment with CI/CD',
        problem: 'Employers want proof you can ship an app, not just run it on a laptop.',
        text: 'Deploy a full app with Docker and a GitHub Actions pipeline that tests and ships each change to the cloud.',
        result: 'A live app with continuous integration that employers can open and try.',
        stack: ['Docker', 'GitHub Actions', 'Cloud hosting'],
      },
    ],
    capstone:
      'Build and deploy a product of your choice with React or Next.js, Node.js, a database and an AI feature, and present it as a portfolio piece.',
    certificationIntro:
      'MongoDB runs its own exams through MongoDB University. This course prepares you for the MongoDB Associate Developer exam, which you take in its Node.js version: you register and pay for it with MongoDB and sit it online with a remote proctor. MongoDB University’s free Node.js learning path is a useful extra, and completing it earns a discount on the exam.',
    certifications: [
      {
        name: 'MongoDB Associate Developer (Node.js)',
        note: 'Shows you can build applications with MongoDB and Node.js: the document model, CRUD, indexes and data modelling. Covered by modules 4 and 5.',
      },
      {
        name: 'Meta Front-End Developer Professional Certificate',
        note: 'Optional, and earned on Coursera, not by an exam: you complete Meta’s nine-course series there. Modules 1 and 2 cover much of its HTML, CSS, JavaScript, Git and React content.',
      },
      {
        name: 'AWS Certified Developer – Associate',
        note: 'A next step once you build on AWS: AWS recommends at least a year of hands-on AWS experience. Its new version, DVA-C03, replaces DVA-C02 from 1 December 2026.',
      },
    ],
    roles: [
      {
        title: 'Full Stack Developer',
        text: 'Builds the front end and back end of web apps.',
        level: 'Fresher to mid',
      },
      {
        title: 'MERN Stack Developer',
        text: 'Builds apps with MongoDB, Express, React and Node.js.',
        level: 'Fresher to mid',
      },
      {
        title: 'Front End (React) Developer',
        text: 'Builds user interfaces with React.',
        level: 'Fresher to mid',
      },
      { title: 'Back End / API Developer', text: 'Builds APIs and server logic.', level: 'Fresher to mid' },
      { title: 'AI Application Developer', text: 'Adds AI features to apps.', level: 'Junior' },
      {
        title: 'Next.js Developer',
        text: 'Builds production React apps with Next.js.',
        level: 'Junior to mid',
      },
    ],
    careers: {
      salaries: [
        { role: 'Full Stack Developer', experience: '0 to 7 years', pay: '₹1.8 L to ₹15.4 L' },
        { role: 'Full Stack Developer (Hyderabad)', experience: 'Varies', pay: '₹2 L to ₹14.5 L' },
      ],
      salaryNote:
        'Annual salary ranges from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
      path: [
        { stage: 'Start (0 to 2 years)', roles: 'Junior Full Stack Developer, React Developer' },
        { stage: 'Grow (2 to 5 years)', roles: 'Full Stack Developer, Next.js Developer' },
        { stage: 'Lead (5+ years)', roles: 'Senior Full Stack Developer, Tech Lead' },
      ],
    },
    faqs: [
      {
        q: 'What is the MERN stack?',
        a: 'MERN stands for MongoDB, Express, React and Node.js: four JavaScript technologies for building complete web apps. React builds the interface, Express and Node.js run the server and APIs, and MongoDB stores the data.',
      },
      {
        q: 'Do I need coding experience for the MERN stack course?',
        a: 'No. The course starts with HTML, CSS and JavaScript and builds up to complete apps. Logical thinking and regular practice matter more than your background.',
      },
      {
        q: 'What is the MERN stack course syllabus?',
        a: 'Eight modules, each with a hands-on lab: web foundations and JavaScript, React, Next.js, back end and APIs with Node.js and Express, MongoDB and SQL, AI features in apps, AI-assisted development, and deployment with interview preparation.',
      },
      {
        q: 'Is this a React and Node.js course?',
        a: 'Yes. React and Node.js are the core of the course: React and Next.js for the front end, Node.js and Express for the back end, and MongoDB for data. You use them together in every project.',
      },
      {
        q: 'What does full stack development with AI mean in this course?',
        a: 'Two things. You build AI features into your apps, such as chat, summaries and answers from documents with RAG. And you learn to use AI coding assistants while reviewing and testing what they produce. Employers increasingly expect both.',
      },
      {
        q: 'Will AI coding tools replace developers?',
        a: 'They make developers faster, but someone still has to design the app, check the code and fix what the tool gets wrong. Employers want developers who use these tools well and can check their output.',
      },
      {
        q: 'What is Next.js, and why learn it with MERN?',
        a: 'Next.js is a React framework for production apps, with routing, server rendering and built-in SEO features. Many teams build their React apps with it, so the course teaches it alongside the core MERN stack.',
      },
      {
        q: 'Does the course prepare me for the MongoDB Associate Developer certification?',
        a: 'Yes. Modules 4 and 5 cover what the MongoDB Associate Developer exam tests, and you take the Node.js version. You register and pay for the exam with MongoDB University and sit it online. AWS Certified Developer – Associate is a later step once you have built on AWS.',
      },
      {
        q: 'What MERN stack projects will I build for my resume?',
        a: 'A job search portal with React, Node.js and MongoDB, an AI study assistant with Next.js and RAG, and a live deployment with Docker and GitHub Actions. A capstone of your own choice completes your portfolio.',
      },
      {
        q: 'Will my apps be live for employers to try?',
        a: 'Yes. You deploy them with Docker, GitHub Actions and cloud hosting, so you can share a working link as well as your code on GitHub.',
      },
      {
        q: 'Is the MERN stack still in demand?',
        a: 'Yes. React and Node.js are widely used, and startups, product companies and IT services firms hire MERN and full stack developers, including freshers. Developers who can also add AI features and deploy their own apps stand out.',
      },
      {
        q: 'Should I learn MERN or another stack?',
        a: 'Choose MERN if you want one language, JavaScript, from the front end to the back end; it suits startups and product companies. If you would rather work in Python or Java, compare all our Full Stack with AI courses on the track page, or ask an advisor.',
      },
      {
        q: 'What can I learn after the MERN stack course?',
        a: 'You can go deeper into AI with our Agentic AI Engineering course, work towards AWS Certified Developer – Associate, or move into mobile development.',
      },
      {
        q: 'What is the MERN stack course fee in Hyderabad?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Is the MERN stack course in Hyderabad live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Madhapur, Hyderabad.',
      },
      {
        q: 'Does the MERN stack course include placement support?',
        a: 'Yes. You get resume and LinkedIn help, technical and HR mock interviews, and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
      },
    ],
  },
];

/** Every page with a full syllabus: the flagship programs, then the courses in each track (courses/). */
export const allPrograms: Program[] = [...programs, ...courses];

export const getProgram = (slug: string) => allPrograms.find((program) => program.slug === slug);

/** Most programs listed in compact places: menus, footer, homepage cards and the hero orbit. */
export const LIST_LIMIT = 6;

/**
 * Programs for a compact list. When there are more than `limit`, one slot is used for a
 * "+ N more programs" link, so the list never grows past `limit` rows.
 */
export function programPreview(limit = LIST_LIMIT) {
  const shown = programs.length > limit ? programs.slice(0, limit - 1) : programs;
  return { shown, more: programs.length - shown.length, total: programs.length };
}
