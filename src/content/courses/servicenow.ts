import type { Program } from '../programs';

export type ServiceNowCourseSlug =
  | 'servicenow-admin-platform'
  | 'servicenow-itsm-development'
  | 'servicenow-hrsd'
  | 'servicenow-crm'
  | 'servicenow-grc'
  | 'servicenow-fdse'
  | 'servicenow-ba';

/** Shared by every ServiceNow course page. */
const servicenow = {
  family: 'Enterprise platforms',
  accent: 'emerald',
  logo: '/logos/programs/servicenow.svg',
  heroImage: '/images/programs/servicenow.webp',
} as const;

const NEEDS_CSA = (exam: string) =>
  `The ${exam} exam requires the ServiceNow CSA certification first. If you are new to ServiceNow, start with ServiceNow Platform Administration; an advisor can help you plan both.`;

export const servicenowCourses: Program<ServiceNowCourseSlug>[] = [
  {
    ...servicenow,
    slug: 'servicenow-admin-platform',
    name: 'ServiceNow Platform Administration',
    shortName: 'ServiceNow Admin',
    // From the client's page document (Nov 2026), written for the keywords chosen on 24 Nov 2026:
    // primary "servicenow admin course in hyderabad"; secondary "servicenow administrator course",
    // "servicenow csa certification", "servicenow admin jobs for freshers". Hyderabad is the only location named.
    // The document's URL is /servicenow-admin/; the page keeps its existing slug.
    h1: 'ServiceNow Admin Course in Hyderabad',
    tagline: 'Administer the ServiceNow platform: users, security, ITSM processes, the service catalog and flows.',
    summary:
      'A ServiceNow administrator keeps the platform running for the whole company: users, security, IT processes and the requests employees raise every day. This ServiceNow administrator course goes beyond lists and forms: you secure data with ACLs, run incident, problem and change end to end, and automate a catalog request with Flow Designer, the skills the CSA exam and employers test.',
    prerequisites:
      'No prior ServiceNow experience needed. A basic understanding of IT concepts, such as databases and help desk work, helps.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'No coding needed',
      location: 'Madhapur, Hyderabad',
    },
    highlights: ['Users, roles & ACLs', 'Incident, problem & change', 'CSA certification prep'],
    about: {
      paragraphs: [
        'Our ServiceNow admin course in Hyderabad prepares you for a common way into enterprise IT: the ServiceNow administrator role. ServiceNow administrators keep the platform running. They manage users and access, secure data, configure IT service processes and automate the requests employees raise every day.',
        'You practise on your own free ServiceNow Personal Developer Instance (PDI), from navigation and the data model to ACLs, incident, problem and change management, the service catalog and Flow Designer. Classes are live and instructor-led, and the course prepares you for the ServiceNow Certified System Administrator (CSA) exam.',
      ],
      whyTitle: 'Why learn ServiceNow administration in 2026',
      why: [
        'CSA is ServiceNow’s core administrator certification, and many ServiceNow job posts ask for it.',
        'No coding needed: a practical way into IT for graduates and support professionals.',
        'ServiceNow partners and global capability centres in Hyderabad hire ServiceNow administrators.',
      ],
    },
    audience: [
      {
        title: 'Freshers & graduates',
        text: 'Start an IT career on a widely used enterprise platform, with no coding needed.',
      },
      {
        title: 'IT support & help desk staff',
        text: 'Move from working on ServiceNow tickets to configuring and running the platform.',
      },
      {
        title: 'Career switchers',
        text: 'Testers and non-IT professionals can build a platform skill with clear entry-level roles.',
      },
    ],
    outcomes: [
      'Navigate ServiceNow and personalise lists, forms and dashboards',
      'Create tables and fields and read the schema map',
      'Manage users, groups and roles, and test access with impersonation',
      'Secure records and fields with access control lists (ACLs)',
      'Configure incident, problem and change management',
      'Build service catalog items with variables and fulfilment tasks',
      'Automate approvals and fulfilment with Flow Designer, without code',
      'Prepare for the ServiceNow CSA exam',
    ],
    modules: [
      {
        title: 'Introduction to ServiceNow',
        summary: 'What ServiceNow is and how companies use it.',
        topics: [
          'What ServiceNow is and how the platform works',
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
        summary: 'Find your way around ServiceNow with confidence.',
        topics: [
          'Next Experience UI: All, Favorites and History menus',
          'Global search and the Application Navigator',
          'Lists: filters, sorting, grouping and breadcrumbs',
          'Forms, form sections and related lists',
          'Personalising lists and forms',
          'Dashboards and simple reports',
        ],
        lab: 'Personalise lists and forms and build a dashboard of open incidents by priority.',
      },
      {
        title: 'Data model & architecture',
        summary: 'How ServiceNow stores information in tables.',
        topics: [
          'Tables, fields and records',
          'Table hierarchy and extended tables, such as Task',
          'Field types, the dictionary and reference fields',
          'Creating a custom table and fields',
          'Schema map and table relationships',
          'Importing data with import sets: an overview',
        ],
        lab: 'Create a custom table that extends Task, add fields and view it in the schema map.',
      },
      {
        title: 'User administration',
        summary: 'Who can use ServiceNow and what they can do.',
        topics: [
          'Creating and managing user records',
          'Groups and group membership',
          'Roles, role inheritance and role assignment',
          'Impersonating users for testing',
          'Departments, locations and companies',
          'Delegated administration',
        ],
        lab: 'Create users, groups and roles for a service desk and test them with impersonation.',
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
          'Troubleshooting and debugging access',
        ],
        lab: 'Write table and field ACLs so only managers can see a sensitive field.',
      },
      {
        title: 'Incident management',
        summary: 'Restore service fast, from report to closure.',
        topics: [
          'The incident lifecycle',
          'Logging incidents from the form and the portal',
          'Categories, subcategories and assignment groups',
          'Priority from impact and urgency',
          'Assignment rules and notifications',
          'Resolving and closing incidents, and major incident basics',
        ],
        lab: 'Configure categories, assignment rules and priority for incidents.',
      },
      {
        title: 'Problem management',
        summary: 'Find the root cause of repeat issues.',
        topics: [
          'Incidents versus problems',
          'Creating a problem from incidents',
          'The problem lifecycle and states',
          'Root-cause analysis',
          'Known errors and workarounds',
          'Linking problems to changes',
        ],
        lab: 'Create a problem from three repeat incidents and record a known error.',
      },
      {
        title: 'Change management',
        summary: 'Make changes safely, with approvals.',
        topics: [
          'Standard, normal and emergency changes',
          'The change lifecycle and states',
          'Risk and impact assessment',
          'Approvals and the Change Advisory Board (CAB)',
          'Change calendar and conflict detection',
          'Post-implementation review',
        ],
        lab: 'Raise a normal change, route it through CAB approval and close it.',
      },
      {
        title: 'Service catalog',
        summary: 'The self-service shop where employees request what they need.',
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
        title: 'Flow Designer',
        summary: 'Automate work without writing code.',
        topics: [
          'Flow Designer basics in Workflow Studio',
          'Triggers: record created, updated or scheduled',
          'Actions, conditions and data pills',
          'Approval steps in flows',
          'Flows and subflows for catalog items',
          'Testing and debugging flows',
        ],
        lab: 'Build a flow that approves and fulfils the catalog item automatically.',
      },
      {
        title: 'Certification & career readiness',
        summary: 'Get ready for the CSA exam and job interviews.',
        topics: [
          'CSA exam structure and topic review',
          'Practice questions and mock tests',
          'Exam-day strategy',
          'ServiceNow admin interview questions',
          'Resume and LinkedIn for ServiceNow roles',
          'Mock interview',
        ],
        lab: 'Take a timed CSA practice test and review weak areas.',
      },
    ],
    tools: [
      'ServiceNow platform',
      'Personal Developer Instance (PDI)',
      'Next Experience UI',
      'Application Navigator',
      'Lists and forms',
      'Schema map',
      'Access control lists (ACLs)',
      'Incident Management',
      'Problem Management',
      'Change Management',
      'Service Catalog',
      'Flow Designer',
    ],
    skills: [
      'Platform navigation',
      'Tables and data model',
      'User and group administration',
      'Access control (ACLs)',
      'Incident management',
      'Problem management',
      'Change management',
      'Service catalog',
      'Flow Designer',
      'Dashboards and reports',
    ],
    projects: [
      {
        title: 'IT service desk setup',
        problem: 'A service desk has no clear ownership of tickets, and sensitive data is visible to everyone.',
        text: 'Set up users, groups and roles, configure incident assignment and secure records with ACLs.',
        result: 'Tickets reach the right group, and data is secured by role.',
        stack: ['User administration', 'ACLs', 'Incident Management'],
      },
      {
        title: 'Problem and change process',
        problem: 'The same outage keeps returning, and fixes go live without approval.',
        text: 'Link repeat incidents to a problem, record a known error and raise a change with CAB approval.',
        result: 'Root causes are tracked, and every fix goes through a controlled change.',
        stack: ['Problem Management', 'Change Management'],
      },
      {
        title: 'Laptop request catalog item',
        problem: 'Employees request laptops by email and wait days for approvals.',
        text: 'Build a catalog item with variables and a flow for approval and fulfilment tasks.',
        result: 'A self-service catalog item with automatic approval and fulfilment.',
        stack: ['Service Catalog', 'Flow Designer'],
      },
    ],
    capstone:
      'Set up ServiceNow for a sample IT team end to end: users and security, incident, problem and change, a service catalog and automated flows, then present your instance.',
    certificationIntro:
      'ServiceNow runs its own certification exams. You register and pay for an exam on ServiceNow University, ServiceNow’s learning site, and sit it with Pearson VUE, remotely or at a test centre; the exam fee is paid to ServiceNow. For CSA, ServiceNow suggests its Welcome to ServiceNow and ServiceNow Administration Fundamentals courses first. Check the exam page on ServiceNow University for the current rules before you book. This course prepares you for the CSA exam; CIS-ITSM and CAD are the usual next steps.',
    certifications: [
      {
        name: 'ServiceNow Certified System Administrator (CSA)',
        note: 'Prepared in this course, with a topic review and mock tests in module 11. Shows you can administer and configure the platform.',
      },
      {
        name: 'ServiceNow Certified Implementation Specialist – IT Service Management (CIS-ITSM)',
        note: 'A next step, prepared in our ServiceNow ITSM Development course. ServiceNow requires the CIS – Data Foundations (CMDB and CSDM) certification before this exam and suggests CSA first.',
      },
      {
        name: 'ServiceNow Certified Application Developer (CAD)',
        note: 'A next step for scripting and building applications, prepared in our ServiceNow ITSM Development course.',
      },
    ],
    roles: [
      {
        title: 'ServiceNow Administrator (L1/L2)',
        text: 'Runs the platform: users, roles, ACLs, forms and catalog items.',
        level: 'Fresher to mid',
      },
      {
        title: 'ServiceNow Admin & Support Specialist (ITSM)',
        text: 'Handles platform tickets and keeps ITSM processes running.',
        level: 'Fresher to mid',
      },
      {
        title: 'ServiceNow Platform Support Analyst',
        text: 'Fixes platform issues and finds root causes.',
        level: 'Fresher to mid',
      },
      { title: 'Junior ServiceNow Consultant', text: 'Configures ServiceNow for clients.', level: 'Fresher to mid' },
      {
        title: 'ServiceNow ITSM Process Consultant',
        text: 'Improves incident, problem, change and catalog processes.',
        level: 'Experienced',
      },
      {
        title: 'ServiceNow Developer (next step)',
        text: 'Builds custom features with scripting.',
        level: 'After further training',
      },
    ],
    careers: {
      salaries: [{ role: 'ServiceNow Administrator', experience: '1 to 7 years', pay: '₹2.7 L to ₹10 L' }],
      salaryNote:
        'Annual salary range from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
      path: [
        { stage: 'Start (0 to 2 years)', roles: 'ServiceNow Administrator L1/L2, Platform Support Analyst' },
        { stage: 'Grow (2 to 5 years)', roles: 'Senior Administrator, ITSM Process Consultant, ServiceNow Developer' },
        { stage: 'Lead (5+ years)', roles: 'Platform Owner, ServiceNow Architect' },
      ],
    },
    faqs: [
      {
        q: 'What does a ServiceNow admin do?',
        a: 'A ServiceNow admin manages users, groups and roles, secures data with ACLs, configures lists and forms, and sets up catalog items, flows and IT processes such as incident, problem and change.',
      },
      {
        q: 'What is the ServiceNow admin course syllabus?',
        a: 'Eleven modules: introduction to ServiceNow, the user interface, data model and architecture, user administration, ACLs, incident management, problem management, change management, the service catalog, Flow Designer, and certification and career readiness. Every module has a hands-on lab.',
      },
      {
        q: 'Does ServiceNow admin work require coding?',
        a: 'No. Admin work is configuration, and flows are built in Flow Designer without code. If you want to code later, our ServiceNow ITSM Development course teaches JavaScript and scripting.',
      },
      {
        q: 'ServiceNow admin vs developer: what is the difference?',
        a: 'Admins configure the platform: users, security, forms, catalog items and flows. Developers write scripts and build custom applications and integrations. Most developers start as admins.',
      },
      {
        q: 'Does this course prepare me for the ServiceNow CSA certification?',
        a: 'Yes. It prepares you for the ServiceNow Certified System Administrator (CSA) exam, with a topic review, practice questions and a timed mock test in the final module. You register and pay for the exam with ServiceNow on ServiceNow University.',
      },
      {
        q: 'Can freshers get ServiceNow admin jobs?',
        a: 'Yes. Entry roles such as ServiceNow Administrator L1/L2 and Platform Support Analyst suit freshers who know the platform. The CSA certification and the projects you build in this course make your profile stronger.',
      },
      {
        q: 'Is ServiceNow admin a good career?',
        a: 'Many large companies run IT and business workflows on ServiceNow, and ServiceNow partners and capability centres in Hyderabad hire administrators. AmbitionBox lists ServiceNow Administrator salaries of ₹2.7 L to ₹10 L a year in India for 1 to 7 years of experience (November 2026). From admin you can grow into development, consulting or architecture.',
      },
      {
        q: 'Can non-IT graduates learn ServiceNow administration?',
        a: 'Yes. The course starts from the basics. Comfort with computers and logical thinking matter more than your degree.',
      },
      {
        q: 'Do I need to know ITIL for ServiceNow admin?',
        a: 'No. The course explains incident, problem and change from the start. ITIL knowledge helps, but no ITIL certificate is needed.',
      },
      {
        q: 'What is the difference between incident, problem and change?',
        a: 'An incident restores service fast, a problem finds the root cause, and a change makes the fix safely, with approvals.',
      },
      {
        q: 'Can I practise ServiceNow at home?',
        a: 'Yes. ServiceNow offers a free Personal Developer Instance (PDI) through its developer program. You set it up in module 1 and use it for every lab.',
      },
      {
        q: 'Are the ServiceNow admin classes live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Madhapur, Hyderabad.',
      },
      {
        q: 'What can I learn after the ServiceNow admin course?',
        a: 'ServiceNow ITSM Development for scripting, a product course such as HRSD, CRM or GRC, or the full ServiceNow Masters & AI program.',
      },
      {
        q: 'What is the ServiceNow admin course fee in Hyderabad?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09226 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Does the ServiceNow admin course include placement support?',
        a: 'Yes. It includes resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
      },
    ],
  },
  {
    ...servicenow,
    slug: 'servicenow-itsm-development',
    name: 'ServiceNow ITSM Development',
    shortName: 'ServiceNow ITSM Development',
    // From the client's page document (Nov 2026), written for the keywords chosen on 24 Nov 2026:
    // primary "servicenow developer course in hyderabad"; secondary "servicenow itsm developer course",
    // "servicenow scripting course", "servicenow cad certification". Hyderabad is the only location named.
    // CIS-ITSM: ServiceNow University lists CIS – Data Foundations (CMDB and CSDM) as the required certification
    // and CSA only as suggested, so this page does not use NEEDS_CSA.
    h1: 'ServiceNow Developer Course in Hyderabad: ITSM Development',
    tagline: 'Script, extend and integrate ServiceNow ITSM the way enterprise developers do.',
    summary:
      'A ServiceNow ITSM developer builds the scripts, integrations and automations that make incident, problem and change work at enterprise scale. This ServiceNow ITSM developer course goes beyond scripting in isolation: your code runs inside real ITSM processes, from auto-assignment and major incidents to change risk checks and monitoring integrations.',
    prerequisites:
      'ServiceNow admin knowledge (CSA level) is recommended. Basic programming helps; JavaScript is taught from the essentials.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'Coding required, taught from the essentials',
      location: 'Madhapur, Hyderabad',
    },
    highlights: ['JavaScript & Glide API', 'ITSM automation & integrations', 'CAD and CIS-ITSM prep'],
    about: {
      paragraphs: [
        'Our ServiceNow developer course in Hyderabad is the next step for ServiceNow admins and developers who want to build, not just configure. You learn to write the JavaScript, integrations and automations that make IT service management work at enterprise scale.',
        'You script client and server logic for incident, problem and change with the Glide API, automate assignment and escalation, connect ServiceNow to monitoring and DevOps tools, build Service Portal widgets and move changes safely with update sets and automated tests. Classes are live and instructor-led, and the course prepares you for the CAD and CIS-ITSM certifications.',
      ],
      whyTitle: 'Why learn ServiceNow ITSM development in 2026',
      why: [
        'Developer roles pay more than admin roles, according to AmbitionBox salary data for ServiceNow jobs.',
        'ITSM is ServiceNow’s core product, so ITSM development skills are in steady demand.',
        'Integrations are in demand: companies connect ServiceNow to monitoring, chat and DevOps tools.',
      ],
    },
    audience: [
      {
        title: 'ServiceNow administrators',
        text: 'Move from configuration into development, the next step most admins take.',
      },
      {
        title: 'Software developers',
        text: 'Bring your coding skills to a widely used enterprise platform.',
      },
      {
        title: 'ITSM process specialists',
        text: 'Learn to build the automations your processes need.',
      },
    ],
    outcomes: [
      'Work with the Task table and the ITSM data model',
      'Write JavaScript with GlideRecord and GlideSystem',
      'Write client scripts and UI policies for ITSM forms',
      'Build business rules, script includes and GlideAjax calls',
      'Automate major incidents, problem creation and change risk checks',
      'Integrate ServiceNow with REST APIs and IntegrationHub',
      'Build Service Portal widgets',
      'Test with ATF and move work with update sets',
    ],
    modules: [
      {
        title: 'ITSM processes for developers',
        summary: 'The tables, states and relationships your code works with.',
        topics: [
          'The Task table and task-based ITSM tables',
          'Incident, problem and change lifecycles',
          'Request and RITM structure',
          'CMDB basics',
          'Where code is needed in ITSM',
        ],
        lab: 'Map ITSM tables and relationships in the schema map.',
      },
      {
        title: 'JavaScript & Glide API',
        summary: 'The coding base for ServiceNow.',
        topics: [
          'JavaScript essentials',
          'GlideRecord queries and updates',
          'GlideSystem methods',
          'Background scripts',
          'Script debugging and logs',
        ],
        lab: 'Write GlideRecord scripts that report open incidents by group.',
      },
      {
        title: 'Client-side scripting for ITSM forms',
        summary: 'Guide agents as they log and update tickets.',
        topics: [
          'onLoad, onChange and onSubmit client scripts',
          'g_form and g_user',
          'UI policies and data policies',
          'Catalog client scripts',
          'Client script performance',
        ],
        lab: 'Write client scripts that guide agents when logging incidents.',
      },
      {
        title: 'Server-side scripting & automation',
        summary: 'The server logic behind ITSM.',
        topics: [
          'Business rules: before, after and async',
          'Script includes and GlideAjax',
          'Assignment and escalation logic',
          'Scheduled jobs',
          'Events and event-driven notifications',
        ],
        lab: 'Build assignment logic in a script include and call it from a business rule.',
      },
      {
        title: 'Incident, problem & change automation',
        summary: 'Automate the key ITSM scenarios.',
        topics: [
          'Major incident automation',
          'Auto-creating problems from repeat incidents',
          'Change risk calculation and conflict checks',
          'SLA definitions and scripting',
          'Flow Designer with script steps',
        ],
        lab: 'Automate major incident creation and change conflict checks.',
      },
      {
        title: 'Integrations',
        summary: 'Connect ServiceNow to monitoring, chat and DevOps tools.',
        topics: [
          'Outbound REST messages',
          'Scripted REST APIs',
          'IntegrationHub spokes',
          'Import sets and transform maps',
          'Inbound email actions',
          'Authentication for APIs',
        ],
        lab: 'Create incidents from a monitoring alert through a scripted REST API.',
      },
      {
        title: 'Service Portal & self-service',
        summary: 'The self-service experience employees use to raise tickets.',
        topics: [
          'Service Portal structure',
          'Widget development',
          'Catalog items and record producers',
          'Knowledge in the portal',
          'Virtual Agent basics',
          'Portal performance',
        ],
        lab: 'Build a portal widget that shows a user’s open tickets.',
      },
      {
        title: 'Delivery, testing & career readiness',
        summary: 'Move code safely, then prepare for certification and interviews.',
        topics: [
          'Update sets and scoped apps',
          'Automated Test Framework (ATF)',
          'Instance Scan',
          'CAD and CIS-ITSM exam practice',
          'Developer interview questions',
          'Mock interviews',
        ],
        lab: 'Write ATF tests and move your work with an update set.',
      },
    ],
    tools: [
      'ServiceNow platform',
      'Personal Developer Instance (PDI)',
      'JavaScript',
      'Glide API',
      'Business rules',
      'Script includes',
      'Flow Designer',
      'IntegrationHub',
      'REST API Explorer',
      'Service Portal',
      'Update sets',
      'Automated Test Framework (ATF)',
    ],
    skills: [
      'JavaScript for ServiceNow',
      'Glide API',
      'Client scripts and UI policies',
      'Business rules and script includes',
      'GlideAjax',
      'ITSM automation',
      'Scripted REST APIs',
      'IntegrationHub',
      'Service Portal widgets',
      'ATF and update sets',
    ],
    projects: [
      {
        title: 'Smart incident assignment',
        problem: 'Incidents sit unassigned, and the right team finds out too late.',
        text: 'Script auto-assignment and escalation for incidents based on category, CI and workload.',
        result: 'Incidents are assigned and escalated automatically by category, CI and workload.',
        stack: ['Business rules', 'Script includes'],
      },
      {
        title: 'Monitoring tool integration',
        problem: 'Monitoring alerts arrive by email, and engineers create tickets by hand.',
        text: 'Create incidents automatically from monitoring alerts through a scripted REST API.',
        result: 'Alerts create incidents automatically through an API.',
        stack: ['Scripted REST API', 'IntegrationHub'],
      },
      {
        title: 'Change risk checker',
        problem: 'Risky changes go live without checks, causing outages.',
        text: 'Build a change risk score and conflict check, with a portal view for approvers.',
        result: 'Every change gets a risk score and conflict check before approval.',
        stack: ['Script includes', 'Service Portal'],
      },
    ],
    capstone:
      'Build and hand over a set of ITSM enhancements for a sample company: scripts, an integration, a portal widget and ATF tests, packaged in an update set.',
    certificationIntro:
      'ServiceNow runs its own certification exams. You register and pay for an exam on ServiceNow University and sit it with Pearson VUE, remotely or at a test centre; the exam fee is paid to ServiceNow. For CAD, ServiceNow suggests its Welcome to ServiceNow, Scripting in ServiceNow Fundamentals and Application Development Fundamentals courses; CSA is not a listed prerequisite. For CIS-ITSM, ServiceNow requires the CIS – Data Foundations (CMDB and CSDM) certification first and suggests CSA-level administration knowledge, which this course assumes. Check each exam page on ServiceNow University before you book.',
    certifications: [
      {
        name: 'ServiceNow Certified Application Developer (CAD)',
        note: 'Prepared in this course: scripting, integrations, scoped apps and testing, with exam practice in module 8.',
      },
      {
        name: 'ServiceNow Certified Implementation Specialist – IT Service Management (CIS-ITSM)',
        note: 'Prepared in the ITSM modules, with exam practice in module 8. ServiceNow requires the CIS – Data Foundations (CMDB and CSDM) certification first, which this course does not cover in full.',
      },
    ],
    roles: [
      { title: 'ServiceNow Developer', text: 'Writes scripts and integrations for ITSM.', level: 'Junior to mid' },
      { title: 'ServiceNow ITSM Developer', text: 'Builds and maintains ITSM automations.', level: 'Junior to mid' },
      { title: 'ServiceNow Admin/Developer', text: 'Combines admin and development work.', level: 'Junior to mid' },
      {
        title: 'ServiceNow Integration Developer',
        text: 'Connects ServiceNow with other systems.',
        level: 'Mid',
      },
      {
        title: 'ServiceNow Platform Engineer',
        text: 'Keeps instance code, upgrades and performance healthy.',
        level: 'Mid',
      },
      {
        title: 'ServiceNow Technical Consultant',
        text: 'Designs and builds ITSM solutions for clients.',
        level: 'Experienced',
      },
    ],
    careers: {
      // Two rows for the same AmbitionBox role: the second is labelled "(experienced)" because the table uses role as its key.
      salaries: [
        { role: 'ServiceNow Developer', experience: '1 to 3 years', pay: '₹5.5 L to ₹13.6 L' },
        { role: 'ServiceNow Developer (experienced)', experience: '3 to 6 years', pay: '₹7.8 L to ₹21.2 L' },
      ],
      salaryNote:
        'Annual salary ranges from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
      path: [
        { stage: 'Start (with admin skills)', roles: 'ServiceNow Developer, Admin/Developer' },
        { stage: 'Grow (2 to 5 years)', roles: 'ITSM Developer, Integration Developer' },
        { stage: 'Lead (5+ years)', roles: 'Technical Consultant, ServiceNow Architect' },
      ],
    },
    faqs: [
      {
        q: 'Do I need to be a ServiceNow admin before this course?',
        a: 'It is recommended. CSA-level knowledge of tables, forms and roles makes development much easier. If you are new to ServiceNow, start with our ServiceNow Admin course; module 1 here also recaps the ITSM tables.',
      },
      {
        q: 'What is the ServiceNow developer course syllabus?',
        a: 'Eight modules: ITSM processes for developers, JavaScript and the Glide API, client-side scripting, server-side scripting, incident, problem and change automation, integrations, Service Portal, and testing with career readiness. Every module has a hands-on lab.',
      },
      {
        q: 'Which language is used for ServiceNow scripting?',
        a: 'JavaScript, together with ServiceNow’s Glide APIs such as GlideRecord, GlideSystem and GlideForm. This ServiceNow scripting course teaches JavaScript from the essentials.',
      },
      {
        q: 'What is the Glide API in ServiceNow?',
        a: 'A set of ServiceNow JavaScript classes for working with the platform. GlideRecord reads and changes records, GlideSystem gives system functions and logging, and GlideForm (g_form) controls forms in the browser.',
      },
      {
        q: 'What is the difference between a client script and a business rule?',
        a: 'Client scripts run in the user’s browser on forms. Business rules run on the server when records are saved, deleted or queried.',
      },
      {
        q: 'What is a script include?',
        a: 'Reusable server-side code that other scripts can call, so logic is written once.',
      },
      {
        q: 'What is IntegrationHub?',
        a: 'ServiceNow’s tool for connecting to other systems with ready-made spokes and flow actions.',
      },
      {
        q: 'Does this course prepare me for the ServiceNow CAD certification?',
        a: 'Yes. The scripting, integration and testing modules build the skills the ServiceNow Certified Application Developer (CAD) exam tests, with exam practice in module 8. CSA is not a listed prerequisite for CAD. ServiceNow suggests its own fundamentals courses, and you register and pay for the exam on ServiceNow University.',
      },
      {
        q: 'What do I need before the ServiceNow CIS-ITSM certification exam?',
        a: 'ServiceNow requires the CIS – Data Foundations (CMDB and CSDM) certification before CIS-ITSM, and its learning path suggests CSA-level administration knowledge first. This course assumes that knowledge but does not cover CIS – Data Foundations in full. Check the CIS-ITSM page on ServiceNow University before you book.',
      },
      {
        q: 'What is ATF in ServiceNow?',
        a: 'The Automated Test Framework, ServiceNow’s tool for automated testing of forms, scripts and flows.',
      },
      {
        q: 'Are there ServiceNow developer jobs in Hyderabad?',
        a: 'Yes. IT services firms and global capability centres in Hyderabad hire ServiceNow developers. Entry roles such as ServiceNow Developer or Admin/Developer suit people with admin skills who can script.',
      },
      {
        q: 'Is ServiceNow developer a good career?',
        a: 'Developer roles pay more than admin roles. AmbitionBox lists ServiceNow Developer salaries of ₹5.5 L to ₹13.6 L a year in India for 1 to 3 years of experience, and ₹7.8 L to ₹21.2 L for 3 to 6 years (November 2026). You can grow into integration, technical consulting or architect roles.',
      },
      {
        q: 'What can I learn after ServiceNow ITSM Development?',
        a: 'A product course such as HRSD, CRM or GRC, ServiceNow FDSE for AI agents, or the full ServiceNow Masters & AI program.',
      },
      {
        q: 'Are the ServiceNow developer classes live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Madhapur, Hyderabad.',
      },
      {
        q: 'What is the ServiceNow developer course fee in Hyderabad?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09226 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Does the ServiceNow developer course include placement support?',
        a: 'Yes. It includes resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
      },
    ],
  },
  {
    ...servicenow,
    slug: 'servicenow-hrsd',
    name: 'ServiceNow HR Service Delivery (HRSD)',
    shortName: 'ServiceNow HRSD',
    // From the client's page document (Nov 2026), written for the keywords chosen on 24 Nov 2026: primary
    // "servicenow hrsd training in hyderabad"; secondary "servicenow hrsd course", "servicenow hrsd
    // certification", "servicenow hrsd jobs in hyderabad". The 11 modules and their topics are the trainer's
    // syllabus, kept as they were (10 modules, then certification & career); a lab is added only where one of
    // the document's labs matches the module. ServiceNow renamed the Employee Service Center "Employee Center"
    // (Rome release, 2021); the module keeps the trainer's name and an FAQ explains the change.
    h1: 'ServiceNow HRSD Training in Hyderabad',
    tagline: 'Configure ServiceNow HRSD: HR cases, SLAs, lifecycle events and the Employee Center portal.',
    summary:
      'A ServiceNow HRSD developer builds the HR help desk employees use for everything from salary letters to onboarding. This ServiceNow HRSD training in Hyderabad takes you through a full employee journey: HR services routed to the right Center of Excellence, SLAs that keep HR on time, an onboarding lifecycle event and the employee portal that ties it together.',
    prerequisites:
      'ServiceNow administration knowledge (CSA level) is recommended, because HRSD is built on the core platform. A basic understanding of IT concepts helps.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'No coding needed',
      location: 'Madhapur, Hyderabad',
    },
    highlights: ['HR cases & SLAs', 'Lifecycle events & onboarding', 'CIS-HR exam preparation'],
    about: {
      paragraphs: [
        'Our ServiceNow HRSD training in Hyderabad teaches you to set up the HR help desk large companies use for employee requests, HR cases and onboarding. HR Service Delivery (HRSD) brings HR services, HR cases and the employee portal together in one place on ServiceNow.',
        'The ServiceNow HRSD course follows the trainer’s syllabus: ten modules on HR roles and profiles, HR cases and SLAs, Centers of Excellence and HR services, HR criteria and record producers, service activities, lifecycle events and the Employee Service Center, then a final module for the CIS-HR exam and interviews. Classes are live and instructor-led, and you practise on your own ServiceNow Personal Developer Instance (PDI).',
      ],
      whyTitle: 'Why learn ServiceNow HRSD in 2026',
      why: [
        'HRSD is a specialist ServiceNow skill: companies that run HR on ServiceNow need people who can configure it.',
        'A good fit for HR professionals moving into HR technology.',
        'A clear certification goal: CIS-HR is ServiceNow’s certification for implementing HR Service Delivery.',
      ],
    },
    audience: [
      {
        title: 'ServiceNow administrators',
        text: 'Add HR Service Delivery, a specialist ServiceNow product, to your platform skills.',
      },
      {
        title: 'HR professionals',
        text: 'Use your knowledge of HR processes to move into HR technology roles.',
      },
      {
        title: 'Freshers and IT support professionals',
        text: 'Start a ServiceNow career in a focused product with clear job roles.',
      },
    ],
    outcomes: [
      'Configure HR roles and HR profiles to control access to HR data',
      'Create and manage HR cases from request to closure',
      'Set up Centers of Excellence and HR services that employees can request',
      'Configure SLAs so HR cases are handled on time',
      'Build HR criteria and record producers to control who sees which service',
      'Design service activities that complete an HR service step by step',
      'Build lifecycle events such as employee onboarding',
      'Configure Employee Center (formerly the Employee Service Center) so employees can find HR services and raise requests',
    ],
    modules: [
      {
        title: 'HRSD foundations & HR roles',
        summary: 'What HRSD is and who can do what in it.',
        topics: [
          'HRSD overview and HR teams on ServiceNow',
          'HR roles and permissions',
          'HR application navigation',
          'HR data security basics',
        ],
        lab: 'Activate HRSD on your PDI and assign HR roles to test users.',
      },
      {
        title: 'HR profiles & case creation',
        summary: 'The employee record and the HR case.',
        topics: [
          'HR profiles and employee data',
          'Creating HR cases',
          'Case fields, states and assignment',
          'Opening cases on behalf of employees',
        ],
        lab: 'Create HR profiles and open HR cases on behalf of employees.',
      },
      {
        title: 'Centers of Excellence',
        summary: 'How HR work is organised.',
        topics: ['HR Centers of Excellence (COE)', 'Linking services to COEs'],
      },
      {
        title: 'HR case & SLA configuration',
        summary: 'Making sure requests are handled on time.',
        topics: [
          'HR case configuration',
          'Assignment and routing',
          'SLA definitions and conditions',
          'SLA breaches and escalation',
        ],
        lab: 'Configure assignment rules and an SLA for HR cases with a breach warning.',
      },
      {
        title: 'HR services',
        summary: 'How HR work is offered to employees.',
        topics: ['HR service configuration', 'Service categories and topic details'],
        lab: 'Set up a Payroll COE with three HR services.',
      },
      {
        title: 'HR lifecycle events',
        summary: 'Running multi-step HR processes.',
        topics: [
          'Lifecycle event types',
          'Activity sets and order',
          'Onboarding and offboarding examples',
          'Tracking event progress',
        ],
        lab: 'Build an onboarding lifecycle event with HR, IT and manager activities.',
      },
      {
        title: 'HR criteria & record producers',
        summary: 'Controlling who sees which service.',
        topics: [
          'HR criteria and user criteria',
          'Record producers for HR services',
          'Mapping producers to services',
        ],
        lab: 'Build HR criteria and a record producer for one country’s employees.',
      },
      {
        title: 'Service activities',
        summary: 'Turning requests into work.',
        topics: ['Defining service activities'],
      },
      {
        title: 'HR case management',
        summary: 'Working cases end to end.',
        topics: ['Service activities inside cases', 'Managing and closing HR cases'],
      },
      {
        title: 'Employee Service Center',
        summary: 'The employee portal.',
        topics: ['Employee Service Center setup', 'HR services on the portal'],
        lab: 'Configure the Employee Service Center and test the full employee journey.',
      },
      {
        title: 'Certification & career readiness',
        summary: 'Preparing for the CIS-HR exam and job interviews.',
        topics: [
          'CIS-HR exam topics and practice questions',
          'HRSD interview questions',
          'Resume and LinkedIn for HRSD roles',
          'Mock interview',
        ],
        lab: 'Take a timed CIS-HR practice test and review weak areas.',
      },
    ],
    tools: [
      'ServiceNow Platform',
      'HR Service Delivery (HRSD)',
      'HR Case Management',
      'HR Services',
      'HR Criteria',
      'Record Producers',
      'Lifecycle Events',
      'Service Level Agreements (SLA)',
      'Employee Center (formerly Employee Service Center)',
      'Personal Developer Instance (PDI)',
    ],
    skills: [
      'HR roles and data privacy',
      'HR case management',
      'Centers of Excellence',
      'HR service configuration',
      'SLAs for HR',
      'HR criteria',
      'Record producers',
      'Lifecycle events',
      'Employee Center portal',
      'CIS-HR exam readiness',
    ],
    projects: [
      {
        title: 'Employee onboarding lifecycle',
        problem: 'New joiners wait for laptops, access and HR tasks because nothing is coordinated.',
        text: 'Configure onboarding with ordered activities for HR, IT and the manager.',
        result: 'Onboarding runs in order, with every task assigned to HR, IT or the manager.',
        stack: ['Lifecycle Events', 'HR Services', 'Service Activities'],
      },
      {
        title: 'HR case management system',
        problem: 'HR requests arrive by email and nobody knows which are overdue.',
        text: 'Build case creation, routing to Centers of Excellence, SLAs and escalation.',
        result: 'HR cases are routed to the right COE, with SLAs and escalation.',
        stack: ['HR Case Management', 'SLA', 'Centers of Excellence'],
      },
      {
        title: 'Employee Center portal',
        problem: 'Employees cannot find HR information and raise duplicate requests.',
        text: 'Set up the portal where employees find HR services and raise requests.',
        result: 'A self-service portal where employees find answers and raise the right request.',
        stack: ['Employee Center', 'Record Producers', 'HR Criteria'],
      },
    ],
    capstone:
      'Set up HRSD for a sample company: HR roles, Centers of Excellence and HR services, SLAs, an onboarding lifecycle event and the Employee Center portal, demonstrated end to end.',
    certificationIntro:
      'ServiceNow certifications are issued only by ServiceNow, so no training institute can certify you directly. This course prepares you for the topics of the CIS-HR exam. You book and pay for the exam yourself on ServiceNow University, which sets its own eligibility rules, and ServiceNow recommends three to six months of experience on ServiceNow projects, including at least one HR project. An advisor can explain the current steps.',
    certifications: [
      {
        name: 'ServiceNow Certified Implementation Specialist – Human Resources (CIS-HR)',
        note: 'Covered across modules 1 to 10, with exam preparation in module 11.',
      },
      {
        name: 'ServiceNow Certified System Administrator (CSA)',
        note: 'Not covered by this course. Learners usually pass CSA before taking CIS-HR.',
      },
    ],
    roles: [
      {
        title: 'ServiceNow HRSD Developer',
        text: 'Builds HR cases, services, record producers and lifecycle events.',
        level: 'Junior to mid',
      },
      {
        title: 'ServiceNow HRSD Technical Consultant',
        text: 'Designs and builds HRSD solutions for clients.',
        level: 'Experienced',
      },
      { title: 'ServiceNow HRSD Consultant', text: 'Maps client HR processes to HRSD.', level: 'Mid to senior' },
      {
        title: 'ServiceNow HRSD Implementation Specialist',
        text: 'Sets up HRSD from Centers of Excellence to the employee portal.',
        level: 'Mid',
      },
      { title: 'ServiceNow HR Administrator', text: 'Runs HRSD day to day.', level: 'Fresher to mid' },
      {
        title: 'Employee Center (ESC) Developer',
        text: 'Builds and maintains the employee portal.',
        level: 'Junior to mid',
      },
    ],
    careers: {
      salaries: [
        { role: 'ServiceNow Administrator', experience: '1 to 7 years', pay: '₹2.7 L to ₹10 L' },
        { role: 'ServiceNow Developer', experience: '1 to 3 years', pay: '₹5.5 L to ₹13.6 L' },
      ],
      salaryNote:
        'Annual salary ranges for ServiceNow roles in general, from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
      path: [
        { stage: 'Start (0 to 2 years)', roles: 'ServiceNow HR Administrator, Junior HRSD Developer' },
        { stage: 'Grow (2 to 5 years)', roles: 'HRSD Developer, HRSD Implementation Specialist' },
        { stage: 'Lead (5+ years)', roles: 'HRSD Technical Consultant, HRSD Architect' },
      ],
    },
    faqs: [
      {
        q: 'What is ServiceNow HRSD?',
        a: 'ServiceNow HR Service Delivery (HRSD) is the ServiceNow product HR teams use to handle employee requests, HR cases and processes such as onboarding in one place. HRSD developers and consultants configure it for each company.',
      },
      {
        q: 'What is the ServiceNow HRSD syllabus?',
        a: 'Eleven modules: HRSD foundations and HR roles, HR profiles and case creation, Centers of Excellence, HR case and SLA configuration, HR services, HR lifecycle events, HR criteria and record producers, service activities, HR case management, the Employee Service Center, and certification and career readiness. Most modules include a hands-on lab.',
      },
      {
        q: 'Which ServiceNow HRSD certification does this course prepare me for?',
        a: 'The ServiceNow Certified Implementation Specialist – Human Resources (CIS-HR), ServiceNow’s HRSD certification, with practice tests in module 11. You book and pay for the exam on ServiceNow University. CSA is not covered here; most learners pass it before CIS-HR.',
      },
      {
        q: 'Do I need ServiceNow admin experience before the HRSD course?',
        a: 'It is recommended. HRSD runs on the core ServiceNow platform, so CSA-level knowledge of tables, forms and roles makes the course much easier to follow. If you are new to ServiceNow, start with ServiceNow Platform Administration; an advisor can help you plan both.',
      },
      {
        q: 'Can HR professionals without coding learn HRSD?',
        a: 'Yes. Most HRSD work is configuration, so it needs much less coding than ServiceNow development. Your knowledge of HR processes such as onboarding and case handling is a real advantage.',
      },
      {
        q: 'Are the ServiceNow HRSD classes live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Madhapur, Hyderabad.',
      },
      {
        q: 'How is ServiceNow HRSD different from ITSM?',
        a: 'ITSM handles IT requests and incidents. HRSD handles employee HR requests, with extra privacy controls for HR data, Centers of Excellence and lifecycle events such as onboarding.',
      },
      {
        q: 'What is an HR Center of Excellence in ServiceNow?',
        a: 'A Center of Excellence (COE) groups HR services by area, such as payroll or benefits, so each request reaches the HR team that owns it.',
      },
      {
        q: 'What is a lifecycle event in ServiceNow HRSD?',
        a: 'A multi-step HR process, such as onboarding or offboarding, where activities for HR, IT and the manager run in order and progress is tracked in one place.',
      },
      {
        q: 'Is the Employee Service Center the same as Employee Center?',
        a: 'Yes, it is the same HR portal under a newer name. From the Rome release (2021), ServiceNow renamed and extended the Employee Service Center as Employee Center, on the same /esc portal. Employees use it to find HR information and raise requests that become HR cases.',
      },
      {
        q: 'What does a ServiceNow HRSD developer do?',
        a: 'An HRSD developer builds and configures HR cases, HR services, record producers and lifecycle events, and keeps the employee portal working. Many start as a ServiceNow HR Administrator or junior HRSD developer and grow into consultant roles.',
      },
      {
        q: 'Are there ServiceNow HRSD jobs in Hyderabad?',
        a: 'Yes. IT services firms and consultancies in Hyderabad post ServiceNow HRSD developer, consultant and architect roles. Many ask for a few years of ServiceNow experience, so freshers usually start as an HR administrator or junior HRSD developer.',
      },
      {
        q: 'What ServiceNow HRSD interview questions should I prepare for?',
        a: 'Expect questions on HR cases and their states, Centers of Excellence and HR services, HR criteria and user criteria, record producers, lifecycle events, SLAs and HR data security. Module 11 covers common HRSD interview questions and ends with a mock interview.',
      },
      {
        q: 'What is the ServiceNow HRSD course fee in Hyderabad?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09226 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Does the ServiceNow HRSD training in Hyderabad include placement support?',
        a: 'Yes. It includes resume and LinkedIn help for HRSD roles, mock interviews and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
      },
    ],
  },
  {
    ...servicenow,
    slug: 'servicenow-crm',
    name: 'ServiceNow CRM & Customer Service Management',
    shortName: 'ServiceNow CRM',
    // From the client's page document (Nov 2026), written for the keywords chosen on 24 Nov 2026: primary
    // "servicenow csm training"; secondary "servicenow crm course", "servicenow cis-csm certification",
    // "servicenow csm jobs in hyderabad". The document's syllabus covers Customer Service Management only
    // (Field Service and Sales and Order Management are no longer listed). CSA is recommended, not required,
    // before CIS-CSM, so this page does not use NEEDS_CSA.
    h1: 'ServiceNow CSM Training in Hyderabad',
    tagline: 'Run customer service on ServiceNow: cases, agents, portals and AI.',
    summary:
      'A ServiceNow CSM specialist builds the customer service operation companies use to resolve customer issues by email, chat and portal. This ServiceNow CSM training in Hyderabad goes beyond case forms: you route cases to the right agent, give customers a working self-service portal and use Now Assist to summarise cases and draft resolution notes.',
    prerequisites:
      'ServiceNow admin knowledge (CSA level) is recommended. Customer service or CRM experience helps.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'No coding needed',
      location: 'Madhapur, Hyderabad',
    },
    highlights: ['Case management & routing', 'Agent workspace & customer portal', 'CIS-CSM exam preparation'],
    about: {
      paragraphs: [
        'Our ServiceNow CRM course in Hyderabad focuses on Customer Service Management (CSM), the ServiceNow product companies use to serve their own customers. CSM brings customer cases, agents, portals and channels together on one platform.',
        'You configure the customer data model, case management and routing, the agent workspace, a customer self-service portal, omnichannel and Virtual Agent, entitlements and SLAs, and Now Assist features that summarise cases and draft resolution notes. Classes are live and instructor-led, and the course prepares you for the ServiceNow CIS-CSM certification exam.',
      ],
      whyTitle: 'Why learn ServiceNow CRM in 2026',
      why: [
        'Companies that run customer service on ServiceNow need people who can configure CSM.',
        'Customer service skills transfer: CRM, support and Salesforce experience all help.',
        'AI is built in: the course covers Now Assist for CSM, ServiceNow’s generative AI for service agents.',
      ],
    },
    audience: [
      {
        title: 'ServiceNow administrators',
        text: 'Add CSM, ServiceNow’s customer service product, to your platform skills.',
      },
      {
        title: 'CRM and customer service professionals',
        text: 'Move from running service teams to configuring the platform.',
      },
      {
        title: 'Salesforce or Dynamics professionals',
        text: 'Add ServiceNow CRM to your CRM experience.',
      },
    ],
    outcomes: [
      'Explain how CSM differs from ITSM and set up CSM roles',
      'Model B2B and B2C customers with accounts, contacts, consumers and assets',
      'Configure case types, states, assignment and escalations',
      'Route cases and chats with Advanced Work Assignment',
      'Set up the CSM Configurable Workspace with playbooks',
      'Build a customer self-service portal with knowledge and catalog items',
      'Connect email, chat and Virtual Agent channels',
      'Configure entitlements and SLAs, and use Now Assist for case summaries',
    ],
    modules: [
      {
        title: 'CSM foundations',
        summary: 'How ServiceNow CSM runs customer service.',
        topics: [
          'What CSM and ServiceNow CRM are',
          'B2B and B2C service models',
          'CSM applications and roles',
          'CSM vs ITSM',
          'Activating CSM',
        ],
        lab: 'Activate CSM on your PDI and explore CSM roles.',
      },
      {
        title: 'Customer data model',
        summary: 'Who the customers are and what they own.',
        topics: [
          'Accounts and contacts',
          'Consumers for B2C',
          'Products, assets and install base',
          'Account relationships',
          'Customer data security',
          'Asset-based service',
        ],
        lab: 'Create accounts, contacts, consumers and assets.',
      },
      {
        title: 'Case management',
        summary: 'How customer cases are created, worked and closed.',
        topics: [
          'Case lifecycle and states',
          'Case types and templates',
          'Assignment and Advanced Work Assignment',
          'Escalations',
          'Case tasks',
        ],
        lab: 'Configure case types, states and assignment with Advanced Work Assignment.',
      },
      {
        title: 'Agent workspace',
        summary: 'The workspace service agents use every day.',
        topics: [
          'CSM Configurable Workspace',
          'Playbooks',
          'Agent assist and recommended actions',
          'Interaction records',
          'Workspace configuration',
          'Agent productivity metrics',
        ],
        lab: 'Set up the CSM Configurable Workspace with a playbook.',
      },
      {
        title: 'Customer portal & self-service',
        summary: 'Where customers find answers and raise cases.',
        topics: [
          'Customer Service Portal',
          'Knowledge management',
          'Catalog items for customers',
          'Communities basics',
          'Portal security',
          'Portal branding',
        ],
        lab: 'Build a customer portal with knowledge and case creation.',
      },
      {
        title: 'Omnichannel & Virtual Agent',
        summary: 'Connect the channels customers use.',
        topics: [
          'Email and web channels',
          'Chat and messaging',
          'Virtual Agent topics',
          'Channel routing',
          'Interaction management',
          'Channel analytics',
        ],
        lab: 'Build a Virtual Agent topic and route a chat to an agent.',
      },
      {
        title: 'Entitlements, SLAs & AI',
        summary: 'Make service measurable, with Now Assist to help agents.',
        topics: [
          'Entitlements and contracts',
          'SLAs for customer cases',
          'Now Assist case summarisation',
          'Resolution notes and knowledge generation',
          'Service reports and dashboards',
        ],
        lab: 'Configure an entitlement and SLA and test Now Assist case summaries.',
      },
      {
        title: 'Certification & career readiness',
        summary: 'Get CIS-CSM ready and interview-ready.',
        topics: [
          'CIS-CSM exam practice',
          'CSM interview questions',
          'Capstone review',
          'Resume and LinkedIn',
          'Mock interviews',
          'Exam-day strategy',
        ],
        lab: 'Take a timed CIS-CSM practice test and review weak areas.',
      },
    ],
    tools: [
      'ServiceNow Platform',
      'Customer Service Management (CSM)',
      'CSM Configurable Workspace',
      'Advanced Work Assignment',
      'Customer Service Portal',
      'Knowledge Management',
      'Virtual Agent',
      'Playbooks',
      'Service Level Agreements (SLA)',
      'Now Assist for CSM',
      'Performance Analytics',
      'Personal Developer Instance (PDI)',
    ],
    skills: [
      'CSM data model',
      'Case management',
      'Advanced Work Assignment',
      'Agent workspace',
      'Customer portal',
      'Knowledge management',
      'Virtual Agent',
      'Entitlements and SLAs',
      'Now Assist for CSM',
      'Service reporting',
    ],
    projects: [
      {
        title: 'B2B case management setup',
        problem: 'A B2B company’s support cases reach the wrong team and contracts are not checked.',
        text: 'Configure accounts, contacts, case routing and entitlements for a B2B company.',
        result: 'Cases are routed by skill and checked against customer entitlements.',
        stack: ['CSM', 'Advanced Work Assignment', 'Entitlements'],
      },
      {
        title: 'Customer self-service portal',
        problem: 'Customers call support for answers that already exist.',
        text: 'Build a portal with knowledge, catalog items and case creation.',
        result: 'A self-service portal that answers routine questions and creates cases when needed.',
        stack: ['Customer Service Portal', 'Knowledge'],
      },
      {
        title: 'AI-assisted service desk',
        problem: 'Agents spend too long reading case history.',
        text: 'Add a Virtual Agent topic and Now Assist case summaries to the agent workspace.',
        result: 'Agents read a short case summary instead of the full history, and Virtual Agent handles routine chats.',
        stack: ['Virtual Agent', 'Now Assist', 'Configurable Workspace'],
      },
    ],
    capstone:
      'Set up customer service for a sample company: data model, case routing, agent workspace, portal, Virtual Agent, entitlements and AI features, demonstrated end to end.',
    certificationIntro:
      'ServiceNow certifications are issued only by ServiceNow, so no training institute can certify you directly. This course prepares you for the topics of the CIS-CSM exam. You book and pay for the exam yourself on ServiceNow University, which sets its own eligibility rules. CSA-level platform knowledge is recommended first. An advisor can explain the current steps.',
    certifications: [
      {
        name: 'ServiceNow Certified Implementation Specialist – Customer Service Management (CIS-CSM)',
        note: 'Covered across modules 1 to 7, with timed practice tests in module 8.',
      },
      {
        name: 'ServiceNow Certified System Administrator (CSA)',
        note: 'Not covered by this course. Recommended before CIS-CSM; if you are new to ServiceNow, start with ServiceNow Platform Administration.',
      },
    ],
    roles: [
      {
        title: 'ServiceNow CSM Developer',
        text: 'Builds and configures CSM cases, workspace and portal.',
        level: 'Junior to mid',
      },
      { title: 'ServiceNow CSM Consultant', text: 'Designs CSM solutions for clients.', level: 'Mid to senior' },
      {
        title: 'ServiceNow CRM Analyst',
        text: 'Supports and improves customer service on ServiceNow.',
        level: 'Fresher to mid',
      },
      { title: 'ServiceNow CSM Implementation Specialist', text: 'Sets up CSM for a company.', level: 'Mid' },
      {
        title: 'Customer Service Platform Administrator',
        text: 'Runs the CSM platform day to day.',
        level: 'Fresher to mid',
      },
      {
        title: 'Virtual Agent Developer',
        text: 'Builds chatbot conversations for customers.',
        level: 'Junior to mid',
      },
    ],
    careers: {
      salaries: [
        { role: 'ServiceNow Administrator', experience: '1 to 7 years', pay: '₹2.7 L to ₹10 L' },
        { role: 'ServiceNow Developer', experience: '1 to 3 years', pay: '₹5.5 L to ₹13.6 L' },
      ],
      salaryNote:
        'Annual salary ranges for ServiceNow roles in general, from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
      path: [
        { stage: 'Start (0 to 2 years)', roles: 'CSM Administrator, ServiceNow CRM Analyst' },
        { stage: 'Grow (2 to 5 years)', roles: 'CSM Developer, CSM Implementation Specialist' },
        { stage: 'Lead (5+ years)', roles: 'CSM Consultant, CRM Solution Architect' },
      ],
    },
    faqs: [
      {
        q: 'What is ServiceNow CSM?',
        a: 'Customer Service Management (CSM) is ServiceNow’s product for running customer service: cases, agents, portals and channels on one platform. CSM specialists configure it so each customer issue reaches the right agent and gets resolved.',
      },
      {
        q: 'Is ServiceNow CRM the same as CSM?',
        a: 'CSM is the core of ServiceNow’s CRM offering for customer service. ServiceNow also offers sales and order management on the same platform; this course focuses on CSM.',
      },
      {
        q: 'What is the ServiceNow CSM syllabus?',
        a: 'Eight modules: CSM foundations, the customer data model, case management, the agent workspace, the customer portal and self-service, omnichannel and Virtual Agent, entitlements, SLAs and AI, and certification and career readiness. Every module has a hands-on lab.',
      },
      {
        q: 'Which certification does the ServiceNow CSM course prepare me for?',
        a: 'The ServiceNow Certified Implementation Specialist – Customer Service Management (CIS-CSM), with timed practice tests in module 8. You book and pay for the exam on ServiceNow University. CSA is recommended first but is not covered in this course.',
      },
      {
        q: 'Do I need ServiceNow admin experience for the CSM course?',
        a: 'It is recommended. CSA-level knowledge of tables, forms and roles makes CSM much easier to configure. If you are new to ServiceNow, start with ServiceNow Platform Administration; an advisor can help you plan both.',
      },
      {
        q: 'Are the ServiceNow CSM classes live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Madhapur, Hyderabad.',
      },
      {
        q: 'How is ServiceNow CSM different from ITSM?',
        a: 'ITSM serves employees with IT issues. CSM serves a company’s external customers, with accounts, contacts, entitlements and customer portals.',
      },
      {
        q: 'How does ServiceNow CRM compare with Salesforce?',
        a: 'Both are used to run customer service. ServiceNow CSM is built to connect customer cases with the teams that fix the underlying issue, such as IT and operations, on the same platform. If you know Salesforce, your CRM knowledge transfers, and the course shows how ServiceNow handles the same processes.',
      },
      {
        q: 'What is Advanced Work Assignment?',
        a: 'A ServiceNow feature that routes cases and chats to an available agent with the right skills and capacity.',
      },
      {
        q: 'What is the CSM Configurable Workspace?',
        a: 'The agent workspace where service agents see cases, customer details and recommended actions in one place.',
      },
      {
        q: 'Does the course cover Now Assist for CSM?',
        a: 'Yes. Module 7 uses Now Assist for CSM to summarise cases, draft resolution notes and create knowledge articles from cases.',
      },
      {
        q: 'What does a ServiceNow CSM developer do?',
        a: 'A CSM developer builds and configures customer cases, the agent workspace, the customer portal and Virtual Agent conversations. Many start as a ServiceNow CRM Analyst or customer service platform administrator and grow into CSM developer roles.',
      },
      {
        q: 'Are there ServiceNow CSM jobs in Hyderabad?',
        a: 'Yes. IT services firms and consultancies in Hyderabad post ServiceNow CSM developer and consultant roles, often together with ITSM. Many ask for a few years of ServiceNow experience, so freshers usually start as a CRM analyst or CSM administrator.',
      },
      {
        q: 'What ServiceNow CSM interview questions should I prepare for?',
        a: 'Expect questions on accounts, contacts and consumers, case states and assignment, Advanced Work Assignment, entitlements and SLAs, the Configurable Workspace and the customer portal. Module 8 covers common CSM interview questions and ends with mock interviews.',
      },
      {
        q: 'What is the ServiceNow CRM course fee in Hyderabad?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09226 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Does the ServiceNow CSM training include placement support?',
        a: 'Yes. It includes resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
      },
    ],
  },
  {
    ...servicenow,
    slug: 'servicenow-grc',
    name: 'ServiceNow Governance, Risk & Compliance (GRC)',
    shortName: 'ServiceNow GRC',
    tagline: 'Risk, compliance, audit and vendor risk on ServiceNow Integrated Risk Management.',
    summary:
      'Learn to implement ServiceNow GRC, known as Integrated Risk Management: policies and controls, risk assessments, audits, vendor risk and business continuity, connected to the IT and business processes they protect.',
    prerequisites:
      'ServiceNow administration basics (CSA level) recommended. Risk, audit or compliance experience helps but is not required.',
    highlights: ['Policy, risk & audit', 'Vendor risk & continuity', 'CIS-RC prep'],
    audience: [
      { title: 'ServiceNow professionals', text: 'Specialise in governance, risk and compliance.' },
      {
        title: 'Risk, audit & compliance professionals',
        text: 'Bring your domain knowledge to the platform many enterprises use for GRC.',
      },
      { title: 'Security analysts', text: 'Connect security work with risk and compliance programs.' },
    ],
    outcomes: [
      'Explain the GRC data model: entities, policies, controls and risks',
      'Import authority documents and map citations to controls',
      'Run control attestations and indicators',
      'Configure risk assessments and risk registers',
      'Plan and run audit engagements',
      'Set up third-party (vendor) risk assessments',
      'Build GRC dashboards for leadership',
      'Prepare for the CIS-RC exam',
    ],
    modules: [
      {
        title: 'GRC foundations',
        summary: 'Governance, risk and compliance on ServiceNow.',
        topics: [
          'GRC concepts and frameworks',
          'Integrated Risk Management applications',
          'Entities and entity types',
          'Profiles and scoping',
        ],
      },
      {
        title: 'Policy & compliance management',
        summary: 'Turn regulations into controls.',
        topics: [
          'Authority documents and citations',
          'Policies and policy statements',
          'Controls and control objectives',
          'Attestations',
        ],
      },
      {
        title: 'Risk management',
        summary: 'Identify, assess and treat risk.',
        topics: ['Risk framework and statements', 'Risk assessments', 'Risk register', 'Risk responses'],
      },
      {
        title: 'Audit management',
        summary: 'Plan and run internal audits.',
        topics: [
          'Audit plans and engagements',
          'Audit tasks and tests',
          'Findings and issues',
          'Remediation tracking',
        ],
      },
      {
        title: 'Continuous monitoring',
        summary: 'Check controls automatically.',
        topics: ['Indicators', 'Indicator templates', 'Issues and remediation', 'Evidence collection'],
      },
      {
        title: 'Vendor risk & business continuity',
        summary: 'Third parties and resilience.',
        topics: [
          'Third-party risk management',
          'Vendor assessments and questionnaires',
          'Business continuity plans',
          'Business impact analysis',
        ],
      },
      {
        title: 'Reporting & AI',
        summary: 'Show leadership where risk sits.',
        topics: [
          'GRC workspaces',
          'Dashboards and reports',
          'Now Assist for GRC',
          'Regulatory change management',
        ],
      },
      {
        title: 'Certification & career readiness',
        summary: 'Get CIS-RC ready and interview-ready.',
        topics: ['CIS-RC exam preparation', 'Capstone project', 'Resume and mock interviews'],
      },
    ],
    tools: [
      'ServiceNow Integrated Risk Management',
      'Policy and Compliance',
      'Risk Management',
      'Audit Management',
      'Third-party Risk Management',
      'Business Continuity Management',
      'Indicators',
      'GRC workspaces',
      'Now Assist',
    ],
    projects: [
      {
        title: 'ISO 27001 compliance program',
        text: 'Policies and controls mapped to ISO 27001, with attestations sent to control owners.',
        stack: ['Policy & Compliance', 'Attestations', 'Controls'],
      },
      {
        title: 'Enterprise risk register',
        text: 'Risk statements, assessments and a risk register with dashboards for the leadership team.',
        stack: ['Risk Management', 'Assessments', 'Dashboards'],
      },
      {
        title: 'Vendor onboarding assessment',
        text: 'A third-party risk assessment with questionnaires, scoring and issues for high-risk vendors.',
        stack: ['Third-party Risk', 'Questionnaires', 'Issues'],
      },
    ],
    certifications: [
      {
        name: 'ServiceNow Certified Implementation Specialist – Risk and Compliance (CIS-RC)',
        note: 'Covered by the policy, risk and audit modules, with exam practice in the final module.',
      },
    ],
    roles: [
      { title: 'GRC Consultant', text: 'Implement risk and compliance solutions for clients.' },
      { title: 'IRM Developer', text: 'Build and customise GRC applications.' },
      { title: 'GRC Analyst', text: 'Run compliance and risk programs on the platform.' },
      { title: 'IT Risk & Compliance Specialist', text: 'Connect IT controls with company-wide risk.' },
    ],
    faqs: [
      {
        q: 'Is ServiceNow GRC the same as IRM?',
        a: 'Yes. ServiceNow calls its GRC products Integrated Risk Management (IRM). The course covers the main IRM applications.',
      },
      { q: 'Do I need the CSA certification first?', a: NEEDS_CSA('CIS-RC') },
    ],
  },
  {
    ...servicenow,
    slug: 'servicenow-fdse',
    name: 'ServiceNow Forward Deployed Software Engineer (FDSE)',
    shortName: 'ServiceNow FDSE',
    tagline: 'Build and launch AI agents and workflows on ServiceNow, side by side with the customer.',
    summary:
      'Train for the forward deployed engineer role: an engineer who works with customer teams to build, integrate and launch ServiceNow solutions with AI agents, Now Assist, App Engine and integrations, from the first workshop to production.',
    prerequisites:
      'Programming experience (JavaScript or another language) and ServiceNow basics recommended. Suits developers and experienced ServiceNow professionals.',
    highlights: ['AI agents & Now Assist', 'Apps, integrations & data', 'Customer-facing delivery'],
    audience: [
      { title: 'ServiceNow developers', text: 'Step up to customer-facing engineering on AI projects.' },
      { title: 'Software engineers', text: 'Bring your engineering skills to enterprise AI on ServiceNow.' },
      { title: 'Technical consultants', text: 'Combine solution design with hands-on building.' },
    ],
    outcomes: [
      'Run discovery with customer teams and turn needs into a solution design',
      'Build scoped applications with App Engine and ServiceNow Studio',
      'Create AI agents and agentic workflows',
      'Configure Now Assist skills and build custom ones',
      'Integrate external systems with IntegrationHub and REST APIs',
      'Work with enterprise data through Workflow Data Fabric',
      'Test, deploy and support solutions in production',
      'Present working prototypes to customer stakeholders',
    ],
    modules: [
      {
        title: 'The forward deployed role',
        summary: 'What forward deployed engineers do and how they work with customers.',
        topics: [
          'Discovery workshops',
          'From use case to solution design',
          'Rapid prototyping',
          'Working in customer teams',
        ],
      },
      {
        title: 'Now Platform engineering',
        summary: 'Build applications on ServiceNow.',
        topics: [
          'Scoped applications',
          'ServiceNow Studio and App Engine',
          'Server and client scripting',
          'Source control with Git',
        ],
      },
      {
        title: 'Generative AI on ServiceNow',
        summary: 'Put Now Assist to work.',
        topics: [
          'Now Assist skills',
          'Now Assist Skill Kit',
          'Prompt design and grounding',
          'Generative AI Controller',
        ],
      },
      {
        title: 'AI agents',
        summary: 'Agents that take action across workflows.',
        topics: [
          'AI Agent Studio',
          'Agent instructions and tools',
          'Agentic workflows',
          'Human in the loop and guardrails',
        ],
      },
      {
        title: 'Integration & data',
        summary: 'Connect the systems the customer already has.',
        topics: [
          'IntegrationHub and spokes',
          'Scripted REST APIs',
          'Workflow Data Fabric',
          'External data connections',
        ],
      },
      {
        title: 'Quality, security & deployment',
        summary: 'Take a prototype to production.',
        topics: [
          'Automated Test Framework',
          'Access controls and data privacy',
          'Instance pipelines and deployment',
          'Monitoring after go-live',
        ],
      },
      {
        title: 'Capstone & career readiness',
        summary: 'Build from a customer brief, then get interview-ready.',
        topics: [
          'End-to-end customer capstone',
          'Solution presentation',
          'CAD exam preparation',
          'Resume and mock interviews',
        ],
      },
    ],
    tools: [
      'ServiceNow Now Platform',
      'App Engine',
      'ServiceNow Studio',
      'AI Agent Studio',
      'Now Assist',
      'Now Assist Skill Kit',
      'IntegrationHub',
      'Scripted REST APIs',
      'Workflow Data Fabric',
      'Automated Test Framework',
      'JavaScript',
      'Git',
    ],
    projects: [
      {
        title: 'IT support AI agent',
        text: 'An AI agent that investigates incidents, suggests fixes and hands over to a person when it should.',
        stack: ['AI Agent Studio', 'Now Assist', 'ITSM'],
      },
      {
        title: 'Custom Now Assist skill',
        text: 'A generative AI skill that drafts customer replies from case history and knowledge articles.',
        stack: ['Skill Kit', 'Prompts', 'Grounding'],
      },
      {
        title: 'Customer pilot app',
        text: 'A scoped app with integrations and tests, built from a customer brief and demoed to stakeholders.',
        stack: ['App Engine', 'IntegrationHub', 'ATF'],
      },
    ],
    certifications: [
      {
        name: 'ServiceNow Certified Application Developer (CAD)',
        note: 'Covered by the platform engineering and integration modules.',
      },
    ],
    roles: [
      {
        title: 'Forward Deployed Engineer',
        text: 'Build and launch ServiceNow AI solutions with customers.',
      },
      { title: 'ServiceNow AI Engineer', text: 'Design and build AI agents and Now Assist skills.' },
      { title: 'Senior ServiceNow Developer', text: 'Lead complex builds and integrations.' },
      {
        title: 'Technical Solution Consultant',
        text: 'Shape solutions with customers and prove them with prototypes.',
      },
    ],
    faqs: [
      {
        q: 'What does forward deployed mean?',
        a: 'A forward deployed engineer works directly with a customer’s team, often on site, to build and launch a solution, rather than building in isolation from a backlog. The role mixes engineering, problem solving and communication.',
      },
      {
        q: 'Is this course for beginners?',
        a: 'It is best for people who already code or know ServiceNow. If you are new to the platform, start with ServiceNow Platform Administration or ServiceNow ITSM Development; an advisor can suggest a path.',
      },
    ],
  },
  {
    ...servicenow,
    slug: 'servicenow-ba',
    name: 'ServiceNow Business Analyst',
    shortName: 'ServiceNow BA',
    tagline: 'Turn business needs into ServiceNow solutions that work out of the box.',
    summary:
      'Learn the business analyst’s side of ServiceNow projects: running workshops, writing user stories, fit-gap analysis against out-of-the-box features, process design across ITSM, HR and customer service, and testing with users.',
    prerequisites: 'No coding needed. Experience in IT, operations, support or business roles helps.',
    highlights: ['Requirements & user stories', 'Fit-gap on ServiceNow', 'ITSM, HRSD & CSM processes'],
    audience: [
      { title: 'Business analysts', text: 'Specialise in ServiceNow projects.' },
      {
        title: 'IT & operations professionals',
        text: 'Move into analyst roles on the platform you already use.',
      },
      { title: 'Graduates', text: 'Start a ServiceNow career on the business side, without coding.' },
    ],
    outcomes: [
      'Run discovery workshops and requirement sessions',
      'Write epics, user stories and acceptance criteria',
      'Do fit-gap analysis against out-of-the-box ServiceNow',
      'Map processes with ITIL 4 practices',
      'Understand ITSM, HRSD and CSM well enough to design solutions',
      'Plan and run user acceptance testing',
      'Define reports and Performance Analytics indicators',
      'Support adoption and change management',
    ],
    modules: [
      {
        title: 'BA on ServiceNow projects',
        summary: 'The analyst’s role from kickoff to go-live.',
        topics: [
          'Project phases and roles',
          'Agile delivery on ServiceNow',
          'Working with developers and architects',
          'Configure versus customise',
        ],
      },
      {
        title: 'Platform knowledge for analysts',
        summary: 'Know what ServiceNow does out of the box.',
        topics: [
          'Now Platform basics',
          'Tables, forms and workflows',
          'Service catalog',
          'Flow Designer from a BA’s view',
        ],
      },
      {
        title: 'Requirements & user stories',
        summary: 'Capture what the business needs.',
        topics: [
          'Discovery workshops',
          'Epics and user stories',
          'Acceptance criteria',
          'Backlog refinement',
        ],
      },
      {
        title: 'Process design',
        summary: 'Design processes the platform supports.',
        topics: ['ITIL 4 practices', 'Process mapping', 'Fit-gap analysis', 'Process Mining overview'],
      },
      {
        title: 'Product knowledge',
        summary: 'The products clients ask for most.',
        topics: [
          'IT Service Management',
          'HR Service Delivery',
          'Customer Service Management',
          'Strategic Portfolio Management basics',
        ],
      },
      {
        title: 'Testing & data',
        summary: 'Prove it works for users.',
        topics: [
          'Test scenarios and UAT',
          'Automated Test Framework basics',
          'Reports and dashboards',
          'Performance Analytics',
        ],
      },
      {
        title: 'Adoption & career readiness',
        summary: 'Land the change and get interview-ready.',
        topics: [
          'Training and change management',
          'Now Assist use cases for the business',
          'Capstone project',
          'Resume and mock interviews',
        ],
      },
    ],
    tools: [
      'ServiceNow Now Platform',
      'Strategic Portfolio Management',
      'Service Catalog',
      'Flow Designer',
      'Process Mining',
      'Performance Analytics',
      'Jira',
      'Confluence',
      'Visio',
      'Excel',
    ],
    projects: [
      {
        title: 'Service desk process redesign',
        text: 'Workshops, a fit-gap analysis and user stories to move a service desk onto ServiceNow ITSM.',
        stack: ['ITSM', 'Fit-gap', 'User stories'],
      },
      {
        title: 'HR onboarding requirements',
        text: 'Process maps and acceptance criteria for an onboarding journey in HR Service Delivery.',
        stack: ['HRSD', 'Process maps', 'Acceptance criteria'],
      },
      {
        title: 'UAT plan and KPI dashboard',
        text: 'Test scenarios for go-live and a dashboard that tracks the KPIs the business cares about.',
        stack: ['UAT', 'Reports', 'Performance Analytics'],
      },
    ],
    certifications: [
      {
        name: 'ServiceNow Certified System Administrator (CSA)',
        note: 'The platform knowledge analysts are expected to have, covered by the platform modules.',
      },
      {
        name: 'ITIL 4 Foundation',
        note: 'The service management practices covered in the process design module.',
      },
    ],
    roles: [
      {
        title: 'ServiceNow Business Analyst',
        text: 'Gather requirements and design solutions on ServiceNow.',
      },
      {
        title: 'ServiceNow Functional Consultant',
        text: 'Configure and advise on ServiceNow products for clients.',
      },
      { title: 'Process Consultant', text: 'Design IT and business processes on the platform.' },
      { title: 'Product Owner', text: 'Own the ServiceNow backlog for a business.' },
    ],
    faqs: [
      {
        q: 'Do I need to code?',
        a: 'No. Business analysts work with requirements, processes and testing. Knowing what the platform can do without code is part of the course.',
      },
      {
        q: 'What is fit-gap analysis?',
        a: 'Comparing what the business needs with what ServiceNow already does out of the box, so the team only builds what is truly missing. Clients value analysts who keep customisation low.',
      },
    ],
  },
];
