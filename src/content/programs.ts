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

export type ProgramFamily = 'Enterprise platforms' | 'AI' | 'Data' | 'Security' | 'Development' | 'Business analysis';

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
    name: 'Salesforce Admin & Developer with Agentforce',
    shortName: 'Salesforce',
    tagline: 'Administration, development and Agentforce AI in one career-focused program.',
    summary:
      'Learn to configure, automate and build on the Salesforce Platform, then extend it with Agentforce, Salesforce’s agentic AI. Built around the work Salesforce teams actually hire for.',
    accent: 'sky',
    prerequisites: 'No prior Salesforce experience needed. Basic computer and logical-thinking skills help.',
    highlights: ['Admin + Developer + Agentforce', 'Hands-on org practice', 'Certification preparation'],
    audience: [
      {
        title: 'Graduates & freshers',
        text: 'Start a career in one of the most in-demand enterprise platforms.',
      },
      {
        title: 'Career switchers',
        text: 'Move from support, testing, operations or sales roles into Salesforce.',
      },
      {
        title: 'Working professionals',
        text: 'Add development or Agentforce AI skills to your current Salesforce role.',
      },
    ],
    outcomes: [
      'Design data models with objects, fields and relationships',
      'Secure an org with profiles, permission sets and sharing rules',
      'Automate business processes with Flow',
      'Write Apex triggers and classes with tests',
      'Build Lightning Web Components',
      'Integrate Salesforce with external systems through APIs',
      'Create Agentforce agents with topics, actions and prompts',
      'Prepare for Salesforce certification exams',
    ],
    modules: [
      {
        title: 'Salesforce & CRM foundations',
        summary: 'How Salesforce works and how businesses use it.',
        topics: [
          'Clouds and editions',
          'Org setup and navigation',
          'Standard and custom objects',
          'Fields and relationships',
          'Schema Builder',
        ],
      },
      {
        title: 'Administration & security',
        summary: 'Run a Salesforce org the way an admin does every day.',
        topics: [
          'Users, profiles and permission sets',
          'Role hierarchy and sharing rules',
          'Validation rules',
          'Data import and data quality',
          'Reports and dashboards',
        ],
      },
      {
        title: 'Automation with Flow',
        summary: 'Automate processes without code.',
        topics: [
          'Record-triggered flows',
          'Screen flows',
          'Scheduled flows',
          'Approval processes',
          'Flow debugging and best practices',
        ],
      },
      {
        title: 'Apex programming',
        summary: 'Server-side development on the Salesforce Platform.',
        topics: [
          'Apex classes and triggers',
          'SOQL and SOSL',
          'Governor limits',
          'Asynchronous Apex',
          'Unit testing and deployment',
        ],
      },
      {
        title: 'Lightning Web Components',
        summary: 'Modern user interfaces for Salesforce.',
        topics: [
          'LWC fundamentals',
          'Wire service and Apex calls',
          'Component communication',
          'Lightning App Builder',
          'Salesforce CLI and VS Code',
        ],
      },
      {
        title: 'Integration',
        summary: 'Connect Salesforce with the rest of the business.',
        topics: [
          'REST and SOAP APIs',
          'Named credentials',
          'Platform events',
          'Outbound integrations from Apex',
        ],
      },
      {
        title: 'Agentforce & Einstein AI',
        summary: 'Bring agentic AI into Salesforce.',
        topics: [
          'Agentforce agents',
          'Topics, instructions and actions',
          'Prompt Builder',
          'Grounding with CRM data',
          'Einstein Trust Layer',
        ],
      },
      {
        title: 'Capstone & career readiness',
        summary: 'Put it all together and get interview-ready.',
        topics: [
          'End-to-end capstone project',
          'Certification exam preparation',
          'Resume and LinkedIn review',
          'Mock interviews',
        ],
      },
    ],
    tools: [
      'Salesforce Platform',
      'Sales Cloud',
      'Service Cloud',
      'Flow Builder',
      'Apex',
      'SOQL',
      'Lightning Web Components',
      'Agentforce',
      'Prompt Builder',
      'Salesforce CLI',
      'VS Code',
      'Trailhead',
      'Git',
    ],
    projects: [
      {
        title: 'Service desk with SLA escalations',
        text: 'Case management for a support team, with entitlements and Flow-based escalations.',
        stack: ['Service Cloud', 'Flow', 'Reports'],
      },
      {
        title: 'Lead-to-enrolment pipeline',
        text: 'Custom objects, an Apex trigger and a Lightning Web Component dashboard for an admissions team.',
        stack: ['Apex', 'LWC', 'SOQL'],
      },
      {
        title: 'Agentforce service agent',
        text: 'An AI agent that answers order-status questions from CRM data and hands off to a human.',
        stack: ['Agentforce', 'Prompt Builder', 'Flow'],
      },
    ],
    certifications: [
      {
        name: 'Salesforce Certified Administrator',
        note: 'Covered by the admin, security and automation modules.',
      },
      {
        name: 'Salesforce Certified Platform App Builder',
        note: 'Covered by data modelling, Flow and Lightning App Builder.',
      },
      {
        name: 'Salesforce Certified Platform Developer I',
        note: 'Covered by the Apex and Lightning Web Components modules.',
      },
      {
        name: 'Salesforce Certified Agentforce Specialist',
        note: 'Covered by the Agentforce & Einstein AI module.',
      },
    ],
    roles: [
      { title: 'Salesforce Administrator', text: 'Configure, secure and maintain Salesforce orgs.' },
      { title: 'Salesforce Developer', text: 'Build custom logic and interfaces with Apex and LWC.' },
      { title: 'Salesforce Consultant', text: 'Translate business needs into Salesforce solutions.' },
      { title: 'Agentforce Specialist', text: 'Design and deploy AI agents on Salesforce.' },
    ],
    faqs: [
      {
        q: 'Do I need coding experience to join?',
        a: 'No. The program starts with administration and no-code automation. Programming is introduced step by step in the Apex and LWC modules.',
      },
      {
        q: 'Are certification exams included?',
        a: 'The program prepares you for the exams listed on this page. Exam registration is done with Salesforce directly; an advisor can explain the process and current exam fees.',
      },
      {
        q: 'What is Agentforce?',
        a: 'Agentforce is Salesforce’s platform for building AI agents that work with your CRM data. It is quickly becoming a sought-after skill for Salesforce professionals.',
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
    h1: 'ServiceNow training in Hyderabad: admin, development, HRSD and AI',
    tagline: 'Run, build and extend ServiceNow, then put governed AI agents to work on it.',
    summary:
      'This ServiceNow training in Hyderabad takes you from your first login to building on the ServiceNow AI Platform. You learn administration, development and HR Service Delivery (HRSD), then build Now Assist skills and AI agents and govern them in AI Control Tower.',
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
        'You start by running the platform, move into JavaScript, integrations and custom applications, then deliver HR services and finish by building Now Assist skills and AI agents, governed in AI Control Tower. Every module has a hands-on lab, and the course doubles as ServiceNow certification training for the CSA, CAD and CIS-HR exams and ServiceNow’s AI micro-certifications.',
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
      'Build Now Assist skills and AI agents, and govern them in AI Control Tower',
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
          'Now Assist panel and Now Assist context menu',
          'Now Assist Admin console: activating skills',
          'AI roles and access',
          'AI use cases by workflow',
        ],
        lab: 'Switch on Now Assist skills in the Now Assist Admin console and test them as a user.',
      },
      {
        title: 'Now Assist for ITSM, HRSD and developers',
        summary: 'Put ready-made AI skills to work in the processes you know.',
        topics: [
          'Incident and HR case summarisation',
          'Resolution notes and knowledge article generation',
          'Now Assist in Virtual Agent',
          'Now Assist for Creator: code, flow and catalog generation',
          'Reviewing and testing AI-generated work',
          'Measuring results with Now Assist Analytics',
        ],
        lab: 'Use Now Assist to summarise incidents and HR cases and generate a knowledge article.',
      },
      {
        title: 'Custom AI skills with Now Assist Skill Kit',
        summary: 'Build your own skill when the built-in ones do not fit.',
        topics: [
          'When to build a custom skill',
          'Skill inputs, prompts and output',
          'Writing and refining prompts',
          'Testing skills with instance data',
          'Evaluation datasets with Now Assist Data Kit',
          'Deploying and activating a skill',
        ],
        lab: 'Build a custom skill in Now Assist Skill Kit and test it with a dataset.',
      },
      {
        title: 'AI agents and agentic workflows with AI Agent Studio',
        summary: 'Agents that take a goal, plan the steps and carry out the work.',
        topics: [
          'Now Assist skills vs AI agents',
          'An agent’s role, instructions and tools',
          'Giving agents tools: flows, scripts and skills',
          'Agentic workflows, AI Agent Orchestrator and human approvals',
          'Testing and troubleshooting AI agents',
          'Model Context Protocol (MCP) basics',
        ],
        lab: 'Build an AI agent with tools and combine two agents into an agentic workflow.',
      },
      {
        title: 'AI governance with AI Control Tower',
        summary: 'Keep AI visible, monitored and safe for production.',
        topics: [
          'Why AI governance matters',
          'AI Control Tower: an inventory of agents and skills',
          'Monitoring AI performance and usage',
          'Ownership, approvals and risk tracking',
          'Now Assist Guardian: offensive content and prompt-injection protection',
          'Responsible AI practices for ServiceNow teams',
        ],
        lab: 'Review your agents in AI Control Tower and add a Guardian protection.',
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
      'Now Assist',
      'Now Assist Skill Kit',
      'AI Agent Studio',
      'AI Control Tower',
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
      'Now Assist and AI agents',
      'AI governance with AI Control Tower',
    ],
    projects: [
      {
        title: 'IT service desk with automation',
        problem: 'A growing company’s IT team handles requests by email and cannot track or automate them.',
        text: 'Configure users, ACLs, incident, problem and change, and automate a laptop request from catalog to fulfilment.',
        result: 'A secure service desk where incidents, problems, changes and requests are tracked and automated.',
        stack: ['ITSM', 'Service Catalog', 'Flow Designer'],
      },
      {
        title: 'Custom asset request application',
        problem: 'Teams track asset requests in spreadsheets with no approvals or integration.',
        text: 'Build a scoped app in ServiceNow Studio with an approval flow, scripts, a REST integration and a portal page, then move it with an update set.',
        result: 'Asset requests run through one app with approvals, a live integration and a self-service page, ready to deploy.',
        stack: ['ServiceNow Studio', 'Glide API', 'REST'],
      },
      {
        title: 'HR onboarding with an AI agent',
        problem: 'HR teams are buried in onboarding tasks and repeat questions.',
        text: 'Configure HR services, SLAs and an onboarding lifecycle event, then add an AI agent that triages HR cases.',
        result: 'Onboarding runs automatically and an AI agent triages HR cases, governed in AI Control Tower.',
        stack: ['HRSD', 'AI Agent Studio', 'AI Control Tower'],
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
      { title: 'ServiceNow Administrator (L1/L2)', text: 'Runs the platform day to day.', level: 'Fresher to mid' },
      { title: 'ServiceNow Developer', text: 'Writes scripts, integrations and custom apps.', level: 'Junior to mid' },
      { title: 'ServiceNow Admin/Developer', text: 'Combines administration with scripting.', level: 'Junior to mid' },
      {
        title: 'ServiceNow HRSD Developer',
        text: 'Builds HR cases, services and lifecycle events.',
        level: 'Junior to mid',
      },
      { title: 'ServiceNow Integration Developer', text: 'Connects ServiceNow with other systems.', level: 'Mid' },
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
        title: 'ServiceNow Now Assist Developer',
        text: 'Builds and governs Now Assist skills and AI agents.',
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
        { stage: 'Start (0 to 2 years)', roles: 'ServiceNow Administrator, Admin/Developer, HR Administrator' },
        { stage: 'Grow (2 to 5 years)', roles: 'ServiceNow Developer, HRSD Developer, Integration Developer' },
        { stage: 'Lead (5+ years)', roles: 'Technical Consultant, Now Assist Developer, ServiceNow Architect' },
      ],
    },
    faqs: [
      {
        q: 'What is ServiceNow used for?',
        a: 'Companies use ServiceNow to run service work in one place: IT incidents and requests, HR cases, customer service, approvals and the workflows behind them. It is now called the ServiceNow AI Platform, with generative AI and AI agents built in.',
      },
      {
        q: 'What is the ServiceNow training syllabus?',
        a: '31 modules: administration and ITSM (modules 1 to 10), development with JavaScript, the Glide APIs, integrations and scoped apps (11 to 18), HR Service Delivery (19 to 25), ServiceNow AI with Now Assist, AI agents and AI Control Tower (26 to 30), then certification and career readiness. Every module has a hands-on lab.',
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
        q: 'What will I learn about Now Assist?',
        a: 'Now Assist is ServiceNow’s generative AI. It summarises incidents and HR cases, drafts notes and knowledge articles, and helps developers generate scripts and flows. You switch skills on in the Now Assist Admin console, use them in ITSM and HRSD, and build your own with Now Assist Skill Kit.',
      },
      {
        q: 'How is a Now Assist skill different from an AI agent?',
        a: 'A Now Assist skill suggests and drafts, for example a case summary. An AI agent takes a goal, plans the steps and carries out the work using tools such as flows, scripts and skills, with human approval where you need it.',
      },
      {
        q: 'Why does the course teach AI Control Tower?',
        a: 'AI Control Tower is where companies keep an inventory of their AI agents and skills, monitor how they perform, assign owners and manage risk. Companies let AI run only when they can govern it, so the course ends with governance, not just building.',
      },
      {
        q: 'Why does ServiceNow Masters include HRSD?',
        a: 'HR Service Delivery (HRSD) is the ServiceNow product HR teams use for employee requests, HR cases and processes such as onboarding. HRSD roles are a separate job path, and HRSD work uses the platform skills you learn earlier in the course.',
      },
      {
        q: 'Can I practise ServiceNow, including the AI modules, at home?',
        a: 'Mostly, yes. ServiceNow gives developers a free Personal Developer Instance (PDI), which you set up in module 1 and use for the admin, development and HRSD labs. Now Assist, AI Agent Studio and AI Control Tower are licensed features that a free PDI does not include, so ask an advisor how the AI labs run in your batch.',
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
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09226 for the current fees, EMI options and the next batch date.',
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
    tagline: 'Machine learning and Generative AI, from Python to production-ready LLM applications.',
    summary:
      'Build real AI applications: learn the machine-learning foundations, then work with large language models, retrieval-augmented generation (RAG) and deployment, the way AI engineering teams do.',
    accent: 'violet',
    prerequisites: 'Comfort with basic programming concepts is helpful. Python is taught from the start.',
    highlights: ['ML + Generative AI', 'LLMs, RAG & fine-tuning', 'Portfolio of AI apps'],
    audience: [
      { title: 'Graduates & freshers', text: 'Enter AI engineering with a strong practical portfolio.' },
      { title: 'Software developers', text: 'Add LLM and RAG skills to the applications you already build.' },
      {
        title: 'Data & analytics professionals',
        text: 'Move from reporting into building AI-powered products.',
      },
    ],
    outcomes: [
      'Write clean Python for data and AI work',
      'Train and evaluate classic machine-learning models',
      'Understand transformers and how LLMs work',
      'Design effective prompts and structured outputs',
      'Build RAG systems with embeddings and vector databases',
      'Evaluate and improve LLM applications',
      'Deploy AI apps as APIs with Docker',
      'Apply responsible-AI and data-privacy practices',
    ],
    modules: [
      {
        title: 'Python for AI',
        summary: 'The language of modern AI.',
        topics: [
          'Python fundamentals',
          'NumPy and pandas',
          'Working with APIs and JSON',
          'Notebooks and Git',
        ],
      },
      {
        title: 'Machine-learning foundations',
        summary: 'How models learn from data.',
        topics: [
          'Supervised and unsupervised learning',
          'scikit-learn workflows',
          'Feature engineering',
          'Model evaluation',
        ],
      },
      {
        title: 'Deep learning & transformers',
        summary: 'The architecture behind today’s AI.',
        topics: [
          'Neural networks with PyTorch',
          'Embeddings',
          'Attention and transformers',
          'Hugging Face ecosystem',
        ],
      },
      {
        title: 'LLMs & prompt engineering',
        summary: 'Get reliable results from large language models.',
        topics: ['Working with LLM APIs', 'Prompt design patterns', 'Structured outputs', 'Function calling'],
      },
      {
        title: 'Retrieval-augmented generation (RAG)',
        summary: 'Ground AI answers in your own data.',
        topics: ['Chunking and embeddings', 'Vector databases', 'Retrieval strategies', 'RAG evaluation'],
      },
      {
        title: 'Fine-tuning & evaluation',
        summary: 'Adapt and measure models.',
        topics: [
          'When to fine-tune',
          'Parameter-efficient fine-tuning',
          'Evaluation datasets',
          'Cost and latency trade-offs',
        ],
      },
      {
        title: 'Building & deploying AI apps',
        summary: 'Ship AI to real users.',
        topics: [
          'FastAPI services',
          'Simple AI front ends',
          'Docker',
          'Cloud deployment basics',
          'Responsible AI and privacy',
        ],
      },
      {
        title: 'Capstone & career readiness',
        summary: 'Prove it with a portfolio.',
        topics: [
          'End-to-end AI capstone',
          'GitHub portfolio',
          'Resume and LinkedIn review',
          'Mock interviews',
        ],
      },
    ],
    tools: [
      'Python',
      'NumPy',
      'pandas',
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
    projects: [
      {
        title: 'Document Q&A assistant',
        text: 'Ask questions across a set of company documents, with sources cited in every answer.',
        stack: ['RAG', 'Embeddings', 'Vector DB'],
      },
      {
        title: 'Support-ticket summariser',
        text: 'Summarise and categorise incoming tickets with structured LLM outputs.',
        stack: ['LLM API', 'Structured outputs', 'FastAPI'],
      },
      {
        title: 'Resume screening model',
        text: 'A classic ML classifier compared against an LLM approach, with evaluation metrics.',
        stack: ['scikit-learn', 'Evaluation', 'Python'],
      },
    ],
    roles: [
      { title: 'AI Engineer', text: 'Build and integrate AI features into products.' },
      { title: 'Generative AI Developer', text: 'Create LLM-powered applications and assistants.' },
      { title: 'ML Engineer', text: 'Train, evaluate and deploy machine-learning models.' },
      { title: 'Data Scientist', text: 'Turn data into insights and better decisions.' },
      { title: 'AI Application Developer', text: 'Ship AI apps end to end, from API to interface.' },
    ],
    faqs: [
      {
        q: 'Do I need a strong maths background?',
        a: 'No. The program explains the concepts you need in practical terms and focuses on building working applications.',
      },
      {
        q: 'Which AI models will I work with?',
        a: 'You will work with leading commercial LLM APIs as well as open models from the Hugging Face ecosystem, so your skills are not tied to one provider.',
      },
      {
        q: 'How is this different from the Agentic AI program?',
        a: 'This program builds your AI engineering foundation. Agentic AI builds on it to create autonomous agents that plan, use tools and work together.',
      },
    ],
  },
  {
    slug: 'agentic-ai',
    image: '/images/programs/agentic-ai.jpg',
    family: 'AI',
    name: 'Agentic AI Engineering',
    shortName: 'Agentic AI',
    tagline: 'Design, build and deploy AI agents that plan, use tools and get work done.',
    summary:
      'Go beyond chatbots. Learn to engineer AI agents and multi-agent systems that reason over tasks, call tools and APIs, remember context and operate safely in production.',
    accent: 'rose',
    prerequisites: 'Basic Python. Learners new to AI can start with the AI & Machine Learning program first.',
    highlights: ['Agents, tools & MCP', 'Multi-agent orchestration', 'Guardrails & evaluation'],
    audience: [
      { title: 'Developers', text: 'Build agentic features and automations into real products.' },
      { title: 'AI & ML learners', text: 'Take your LLM skills to the next level with autonomous agents.' },
      {
        title: 'Automation professionals',
        text: 'Replace brittle scripts with intelligent, tool-using agents.',
      },
    ],
    outcomes: [
      'Explain how agents reason, plan and act',
      'Give agents tools through function calling and APIs',
      'Connect agents to systems with the Model Context Protocol (MCP)',
      'Add memory and knowledge with RAG',
      'Orchestrate multi-agent workflows with graph-based frameworks',
      'Keep a human in the loop for important decisions',
      'Evaluate, monitor and add guardrails to agents',
      'Deploy agents as reliable, cost-aware services',
    ],
    modules: [
      {
        title: 'Agent foundations',
        summary: 'What makes an AI system agentic.',
        topics: [
          'LLM reasoning patterns',
          'Tool calling',
          'Structured outputs',
          'The agent loop: plan, act, observe',
        ],
      },
      {
        title: 'Tools, APIs & MCP',
        summary: 'Let agents act in the real world.',
        topics: [
          'Designing good tools',
          'Calling external APIs',
          'Model Context Protocol (MCP) servers',
          'Error handling and retries',
        ],
      },
      {
        title: 'Memory & knowledge',
        summary: 'Agents that remember and know your data.',
        topics: [
          'Short- and long-term memory',
          'RAG for agents',
          'State management',
          'Context window strategies',
        ],
      },
      {
        title: 'Agent frameworks',
        summary: 'Build with the tools teams use.',
        topics: ['LangGraph', 'CrewAI', 'Provider agent SDKs', 'Choosing the right framework'],
      },
      {
        title: 'Multi-agent systems',
        summary: 'Agents that collaborate.',
        topics: [
          'Planner and worker patterns',
          'Supervisor agents',
          'Human-in-the-loop approvals',
          'Workflow orchestration',
        ],
      },
      {
        title: 'Evaluation, guardrails & observability',
        summary: 'Make agents safe and dependable.',
        topics: [
          'Agent evaluation',
          'Guardrails and permissions',
          'Tracing and monitoring',
          'Prompt-injection risks',
        ],
      },
      {
        title: 'Deploying agents',
        summary: 'From prototype to production.',
        topics: [
          'Agents as APIs',
          'Background jobs and queues',
          'Cost and latency control',
          'Docker and cloud deployment',
        ],
      },
      {
        title: 'Capstone & career readiness',
        summary: 'Ship an agent you can demo.',
        topics: [
          'End-to-end agentic capstone',
          'Architecture write-up',
          'Resume and LinkedIn review',
          'Mock interviews',
        ],
      },
    ],
    tools: [
      'Python',
      'LLM APIs',
      'LangGraph',
      'CrewAI',
      'Model Context Protocol',
      'Vector databases',
      'FastAPI',
      'Docker',
      'Observability tools',
      'Git',
    ],
    projects: [
      {
        title: 'Research agent',
        text: 'An agent that searches, reads and summarises sources into a cited brief.',
        stack: ['Tool calling', 'RAG', 'LangGraph'],
      },
      {
        title: 'Multi-agent support desk',
        text: 'Triage, resolver and escalation agents with human approval for refunds.',
        stack: ['Multi-agent', 'Human-in-the-loop', 'FastAPI'],
      },
      {
        title: 'Operations agent with MCP',
        text: 'An internal assistant that works across calendar, tickets and CRM through MCP servers.',
        stack: ['MCP', 'Guardrails', 'Observability'],
      },
    ],
    roles: [
      { title: 'Agentic AI Engineer', text: 'Design and build autonomous AI agents.' },
      { title: 'AI Automation Engineer', text: 'Automate business workflows with intelligent agents.' },
      { title: 'AI Solutions Engineer', text: 'Deliver agentic solutions for clients and teams.' },
      { title: 'LLM Application Developer', text: 'Build production applications on top of LLMs.' },
    ],
    faqs: [
      {
        q: 'Is this program suitable for beginners?',
        a: 'It is designed for learners with basic Python. If you are new to AI, an advisor may suggest starting with AI & Machine Learning.',
      },
      {
        q: 'Which frameworks are covered?',
        a: 'Graph-based orchestration with LangGraph, role-based agents with CrewAI, provider agent SDKs and the Model Context Protocol for connecting agents to tools.',
      },
      {
        q: 'Will I learn to make agents safe?',
        a: 'Yes. Evaluation, guardrails, permissions, monitoring and human-in-the-loop design are covered in their own module.',
      },
    ],
  },
  {
    slug: 'cybersecurity',
    image: '/images/programs/cybersecurity.webp',
    family: 'Security',
    name: 'Cybersecurity Training & Placement',
    shortName: 'Cybersecurity',
    tagline: 'Security fundamentals and role readiness for SOC, cloud security, IAM and GRC careers.',
    summary:
      'Security roles are among the hardest to fill in India. Learn how attackers operate, how to secure networks, cloud and identities, and how security operations teams detect and respond to threats.',
    accent: 'amber',
    prerequisites: 'Basic computer networking knowledge helps. Fundamentals are covered at the start.',
    highlights: ['SOC & SIEM hands-on', 'Cloud & IAM security', 'Certification readiness'],
    audience: [
      { title: 'Graduates & freshers', text: 'Enter one of the fastest-growing areas of IT.' },
      {
        title: 'IT & network professionals',
        text: 'Move from infrastructure or support roles into security.',
      },
      { title: 'Career switchers', text: 'Build a structured path into security operations.' },
    ],
    outcomes: [
      'Explain the threat landscape and attacker methodology',
      'Secure networks and recognise common attack vectors',
      'Apply cloud security baselines on AWS and Azure',
      'Manage identity and access securely',
      'Analyse logs and alerts in a SIEM',
      'Run vulnerability assessments',
      'Follow SOC incident-response playbooks',
    ],
    modules: [
      {
        title: 'Security fundamentals',
        summary: 'Core concepts every security role needs.',
        topics: ['Threat landscape', 'Attacker methodology', 'Security principles and controls'],
      },
      {
        title: 'Network security',
        summary: 'Protect the network layer.',
        topics: [
          'Network security and threat attack vectors',
          'Firewalls and segmentation',
          'Secure protocols',
        ],
      },
      {
        title: 'Cloud security',
        summary: 'Secure modern infrastructure.',
        topics: ['Cloud security baselines', 'AWS and Azure IAM', 'Shared-responsibility model'],
      },
      {
        title: 'Identity & access management',
        summary: 'One of the most consistently hard-to-fill specialisations.',
        topics: ['Authentication and authorisation', 'Least privilege', 'Access reviews'],
      },
      {
        title: 'SIEM & security monitoring',
        summary: 'Detect threats in log data.',
        topics: ['Splunk and Microsoft Sentinel log analysis', 'Alert triage', 'Detection basics'],
      },
      {
        title: 'Vulnerability management',
        summary: 'Find and prioritise weaknesses.',
        topics: [
          'Vulnerability assessment with Qualys and Nessus',
          'Risk-based prioritisation',
          'Remediation tracking',
        ],
      },
      {
        title: 'Incident response',
        summary: 'Respond like a SOC team.',
        topics: ['SOC analyst tier-1 playbooks', 'Containment and escalation', 'Reporting'],
      },
      {
        title: 'Interview & certification readiness',
        summary: 'Prepare for your first security role.',
        topics: [
          'Entry-level security certification preparation',
          'Technical interview practice',
          'Resume review',
        ],
      },
    ],
    tools: ['Splunk', 'Microsoft Sentinel', 'Qualys', 'Nessus', 'AWS IAM', 'Azure IAM', 'Wireshark', 'Linux'],
    projects: [
      {
        title: 'SOC alert triage',
        text: 'Investigate a set of SIEM alerts, separate real threats from noise and write incident tickets.',
        stack: ['SIEM', 'Triage', 'Playbooks'],
      },
      {
        title: 'Cloud security review',
        text: 'Audit a cloud account against security baselines and fix risky IAM permissions.',
        stack: ['AWS / Azure', 'IAM', 'Baselines'],
      },
      {
        title: 'Vulnerability assessment',
        text: 'Scan a lab network, prioritise findings by risk and present a remediation plan.',
        stack: ['Nessus', 'Qualys', 'Reporting'],
      },
    ],
    roles: [
      { title: 'SOC Analyst', text: 'Monitor, detect and respond to security threats.' },
      { title: 'Security Engineer', text: 'Build and strengthen secure infrastructure.' },
      { title: 'IAM Specialist', text: 'Manage identities and access across systems.' },
      { title: 'GRC Analyst', text: 'Support governance, risk and compliance programs.' },
      { title: 'Cloud Security Analyst', text: 'Secure cloud environments and workloads.' },
    ],
    faqs: [
      {
        q: 'Do I need a networking background?',
        a: 'It helps but is not required. The program starts with security and networking fundamentals.',
      },
      {
        q: 'Which certifications does it prepare me for?',
        a: 'It includes structured preparation for entry-level security certifications. An advisor can recommend the right one for your goals.',
      },
    ],
  },
  {
    slug: 'full-stack-ai',
    image: '/images/programs/full-stack-ai.jpg',
    family: 'Development',
    name: 'Full Stack Development with AI',
    shortName: 'Full Stack with AI',
    tagline: 'Build complete web applications, from React front ends to APIs, databases and AI features.',
    summary:
      'Companies want developers who can own a feature end to end and use AI well. Learn React, Node.js and databases, add AI features to your apps, and code faster with AI tools while understanding what you ship.',
    accent: 'indigo',
    prerequisites:
      'No prior web development experience needed. Logical thinking and enthusiasm to code help.',
    highlights: ['React + Node.js + databases', 'AI-powered apps', 'Deployed projects'],
    audience: [
      {
        title: 'Graduates & freshers',
        text: 'Start a software career with an in-demand, versatile skill set.',
      },
      { title: 'Career switchers', text: 'Move into development with a clear, project-based path.' },
      { title: 'Junior developers', text: 'Add back-end, database and AI skills to your front-end work.' },
    ],
    outcomes: [
      'Build responsive interfaces with React and Next.js',
      'Create REST APIs with Node.js and Express',
      'Model data with SQL and MongoDB',
      'Add authentication and secure server-side code',
      'Integrate AI features such as chat assistants and smart search',
      'Use AI coding tools effectively and review their output',
      'Deploy applications with Git, Docker and the cloud',
    ],
    modules: [
      {
        title: 'Front end with React',
        summary: 'Fast, responsive user interfaces.',
        topics: ['HTML, CSS and JavaScript', 'React fundamentals', 'Next.js', 'Responsive design'],
      },
      {
        title: 'Back end & APIs',
        summary: 'Server-side development.',
        topics: ['Node.js and Express', 'REST API design', 'Authentication', 'Secure server-side code'],
      },
      {
        title: 'Databases',
        summary: 'Store and query data.',
        topics: ['SQL data modelling', 'MongoDB', 'Connecting databases to APIs'],
      },
      {
        title: 'AI features in apps',
        summary: 'Make your applications intelligent.',
        topics: [
          'Working with LLM APIs',
          'Chat assistants',
          'Smart search with RAG',
          'Content generation features',
        ],
      },
      {
        title: 'AI-assisted development',
        summary: 'Code faster without losing understanding.',
        topics: ['AI coding tools', 'Debugging and testing with AI', 'Reviewing generated code'],
      },
      {
        title: 'Deployment & interview readiness',
        summary: 'Ship it and get hired.',
        topics: ['Git and GitHub', 'Docker', 'Cloud deployment', 'Portfolio and mock interviews'],
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
      'SQL',
      'MongoDB',
      'LLM APIs',
      'Git',
      'Docker',
    ],
    projects: [
      {
        title: 'Job search portal',
        text: 'A full-stack app with listings, search and applications, from database to UI.',
        stack: ['React', 'Node.js', 'MongoDB'],
      },
      {
        title: 'AI study assistant',
        text: 'A chat assistant that answers questions from uploaded notes using RAG.',
        stack: ['LLM API', 'RAG', 'Next.js'],
      },
      {
        title: 'Deployed capstone',
        text: 'Your own product idea, built, tested and deployed to the cloud.',
        stack: ['Docker', 'CI', 'Cloud'],
      },
    ],
    roles: [
      { title: 'Full Stack Developer', text: 'Build complete web applications, front end to database.' },
      { title: 'Front End (React) Developer', text: 'Create fast, polished user interfaces.' },
      { title: 'Back End / API Developer', text: 'Design the APIs, data and services behind applications.' },
      {
        title: 'AI Application Developer',
        text: 'Add AI features such as assistants and smart search to products.',
      },
    ],
    faqs: [
      {
        q: 'Do I need to know how to code?',
        a: 'No. The program starts with web fundamentals and builds up to full applications.',
      },
      {
        q: 'Will I rely on AI to write my code?',
        a: 'You will learn to use AI tools to work faster, and to review and understand everything they produce, which is what employers expect.',
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
