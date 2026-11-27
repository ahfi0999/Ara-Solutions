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
    tagline:
      'Administer the ServiceNow platform: users, security, ITSM processes, the service catalog and flows.',
    summary:
      'A ServiceNow administrator keeps the platform running for the whole company: users, security, IT processes and the requests employees raise every day. This ServiceNow administrator course goes beyond lists and forms: you secure data with ACLs, run incident, problem and change end to end, and automate a catalog request with Flow Designer, the skills the CSA exam and employers test.',
    prerequisites:
      'No prior ServiceNow experience needed. A basic understanding of IT concepts, such as databases and help desk work, helps.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'No coding needed',
      location: 'Hyderabad',
    },
    highlights: ['Users, roles & ACLs', 'Incident, problem & change', 'CSA certification prep'],
    about: {
      paragraphs: [
        'Our ServiceNow Admin course in Hyderabad prepares you for a common way into enterprise IT: the ServiceNow administrator role. ServiceNow administrators keep the platform running. They manage users and access, secure data, configure IT service processes and automate the requests employees raise every day.',
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
          'How ACLs work and the order in which they are evaluated',
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
      'ServiceNow Platform',
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
        problem:
          'A service desk has no clear ownership of tickets, and sensitive data is visible to everyone.',
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
      {
        title: 'Junior ServiceNow Consultant',
        text: 'Configures ServiceNow for clients.',
        level: 'Fresher to mid',
      },
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
        {
          stage: 'Grow (2 to 5 years)',
          roles: 'Senior Administrator, ITSM Process Consultant, ServiceNow Developer',
        },
        { stage: 'Lead (5+ years)', roles: 'Platform Owner, ServiceNow Architect' },
      ],
    },
    faqs: [
      {
        q: 'What does a ServiceNow admin do?',
        a: 'A ServiceNow admin manages users, groups and roles, secures data with ACLs, configures lists and forms, and sets up catalog items, flows and IT processes such as incident, problem and change.',
      },
      {
        q: 'What is the ServiceNow Admin course syllabus?',
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
        a: 'Yes. Entry roles such as ServiceNow administrator L1/L2 and platform support analyst suit freshers who know the platform. The CSA certification and the projects you build in this course make your profile stronger.',
      },
      {
        q: 'Is ServiceNow administration a good career?',
        a: 'Many large companies run IT and business workflows on ServiceNow, and ServiceNow partners and capability centres in Hyderabad hire administrators. AmbitionBox lists ServiceNow administrator salaries of ₹2.7 L to ₹10 L a year in India for 1 to 7 years of experience (November 2026). From admin you can grow into development, consulting or architecture.',
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
        q: 'Are the ServiceNow Admin classes live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Hyderabad.',
      },
      {
        q: 'What can I learn after the ServiceNow Admin course?',
        a: 'ServiceNow ITSM Development for scripting, a product course such as HRSD, CSM or GRC, or the full ServiceNow Masters program.',
      },
      {
        q: 'What is the ServiceNow Admin course fee in Hyderabad?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Does the ServiceNow Admin course include placement support?',
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
    // and CSA only as suggested.
    h1: 'ServiceNow Developer Course in Hyderabad: ITSM Development',
    tagline: 'Script, extend and integrate ServiceNow ITSM the way enterprise developers do.',
    summary:
      'A ServiceNow ITSM developer builds the scripts, integrations and automations that make incident, problem and change work at enterprise scale. This ServiceNow ITSM developer course goes beyond scripting in isolation: your code runs inside real ITSM processes, from auto-assignment and major incidents to change risk checks and monitoring integrations.',
    prerequisites:
      'ServiceNow admin knowledge (CSA level) is recommended. Basic programming helps; JavaScript is taught from the essentials.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'Coding required, taught from the essentials',
      location: 'Hyderabad',
    },
    highlights: ['JavaScript & Glide API', 'ITSM automation & integrations', 'CAD and CIS-ITSM prep'],
    about: {
      paragraphs: [
        'Our ServiceNow Developer course in Hyderabad is the next step for ServiceNow admins and developers who want to build, not just configure. You learn to write the JavaScript, integrations and automations that make IT service management work at enterprise scale.',
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
      'ServiceNow Platform',
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
      {
        title: 'ServiceNow Developer',
        text: 'Writes scripts and integrations for ITSM.',
        level: 'Junior to mid',
      },
      {
        title: 'ServiceNow ITSM Developer',
        text: 'Builds and maintains ITSM automations.',
        level: 'Junior to mid',
      },
      {
        title: 'ServiceNow Admin/Developer',
        text: 'Combines admin and development work.',
        level: 'Junior to mid',
      },
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
        q: 'What is the ServiceNow Developer course syllabus?',
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
        a: 'Yes. IT services firms and global capability centres in Hyderabad hire ServiceNow developers. Entry roles such as ServiceNow developer or admin/developer suit people with admin skills who can script.',
      },
      {
        q: 'Is ServiceNow development a good career?',
        a: 'Developer roles pay more than admin roles. AmbitionBox lists ServiceNow developer salaries of ₹5.5 L to ₹13.6 L a year in India for 1 to 3 years of experience, and ₹7.8 L to ₹21.2 L for 3 to 6 years (November 2026). You can grow into integration, technical consulting or architect roles.',
      },
      {
        q: 'What can I learn after ServiceNow ITSM Development?',
        a: 'A product course such as HRSD, CSM or GRC, ServiceNow FDSE for AI agents, or the full ServiceNow Masters program.',
      },
      {
        q: 'Are the ServiceNow Developer classes live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Hyderabad.',
      },
      {
        q: 'What is the ServiceNow Developer course fee in Hyderabad?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Does the ServiceNow Developer course include placement support?',
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
      location: 'Hyderabad',
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
      'HR services',
      'HR criteria',
      'Record producers',
      'Lifecycle events',
      'Service level agreements (SLAs)',
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
        stack: ['Lifecycle events', 'HR services', 'Service activities'],
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
        problem: 'Employees cannot find HR information, so they raise duplicate requests.',
        text: 'Set up the portal where employees find HR services and raise requests.',
        result: 'A self-service portal where employees find answers and raise the right request.',
        stack: ['Employee Center', 'Record producers', 'HR criteria'],
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
      {
        title: 'ServiceNow HRSD Consultant',
        text: 'Maps client HR processes to HRSD.',
        level: 'Mid to senior',
      },
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
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Hyderabad.',
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
        a: 'An HRSD developer builds and configures HR cases, HR services, record producers and lifecycle events, and keeps the employee portal working. Many start as a ServiceNow HR administrator or junior HRSD developer and grow into consultant roles.',
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
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch date.',
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
    name: 'ServiceNow CSM (Customer Service Management)',
    shortName: 'ServiceNow CSM',
    // Named CSM everywhere a visitor sees the course (menu, breadcrumb, heading); "CRM" stays in the text as
    // the other name people search for, and in the address (/servicenow-crm/) so existing links keep working.
    // From the client's page document (Nov 2026), written for the keywords chosen on 24 Nov 2026: primary
    // "servicenow csm training"; secondary "servicenow crm course", "servicenow cis-csm certification",
    // "servicenow csm jobs in hyderabad". The document's syllabus covers Customer Service Management only
    // (Field Service and Sales and Order Management are no longer listed). CSA is recommended, not required,
    // before CIS-CSM.
    h1: 'ServiceNow CSM Training in Hyderabad',
    tagline: 'Run customer service on ServiceNow: cases, agents, portals and AI.',
    summary:
      'A ServiceNow CSM specialist builds the customer service operation companies use to resolve customer issues by email, chat and portal. This ServiceNow CSM training in Hyderabad goes beyond case forms: you route cases to the right agent, give customers a working self-service portal and use ServiceNow Otto (formerly Now Assist) to summarise cases and draft resolution notes.',
    prerequisites:
      'ServiceNow admin knowledge (CSA level) is recommended. Customer service or CRM experience helps.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'No coding needed',
      location: 'Hyderabad',
    },
    highlights: [
      'Case management & routing',
      'Agent workspace & customer portal',
      'CIS-CSM exam preparation',
    ],
    about: {
      paragraphs: [
        'Our ServiceNow CRM course in Hyderabad focuses on Customer Service Management (CSM), the ServiceNow product companies use to serve their own customers. CSM brings customer cases, agents, portals and channels together on one platform.',
        'You configure the customer data model, case management and routing, the agent workspace, a customer self-service portal, omnichannel and Virtual Agent, entitlements and SLAs, and ServiceNow Otto features that summarise cases and draft resolution notes. Classes are live and instructor-led, and the course prepares you for the ServiceNow CIS-CSM certification exam.',
      ],
      whyTitle: 'Why learn ServiceNow CSM in 2026',
      why: [
        'Companies that run customer service on ServiceNow need people who can configure CSM.',
        'Customer service skills transfer: CRM, support and Salesforce experience all help.',
        'AI is built in: the course covers ServiceNow Otto (formerly Now Assist) in CSM, ServiceNow’s generative AI for service agents.',
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
      'Configure entitlements and SLAs, and use ServiceNow Otto for case summaries',
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
        summary: 'Make service measurable, with ServiceNow Otto to help agents.',
        topics: [
          'Entitlements and contracts',
          'SLAs for customer cases',
          'Case summaries with ServiceNow Otto',
          'Resolution notes and knowledge generation',
          'Service reports and dashboards',
        ],
        lab: 'Configure an entitlement and SLA and test ServiceNow Otto case summaries.',
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
      'Service level agreements (SLAs)',
      'ServiceNow Otto (formerly Now Assist)',
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
      'ServiceNow Otto (formerly Now Assist)',
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
        text: 'Add a Virtual Agent topic and ServiceNow Otto case summaries to the agent workspace.',
        result:
          'Agents read a short case summary instead of the full history, and Virtual Agent handles routine chats.',
        stack: ['Virtual Agent', 'ServiceNow Otto', 'Configurable Workspace'],
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
      {
        title: 'ServiceNow CSM Consultant',
        text: 'Designs CSM solutions for clients.',
        level: 'Mid to senior',
      },
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
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Hyderabad.',
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
        q: 'Does the course cover ServiceNow Otto (formerly Now Assist) in CSM?',
        a: 'Yes. Module 7 uses ServiceNow Otto to summarise cases, draft resolution notes and create knowledge articles from cases.',
      },
      {
        q: 'What does a ServiceNow CSM developer do?',
        a: 'A CSM developer builds and configures customer cases, the agent workspace, the customer portal and Virtual Agent conversations. Many start as a ServiceNow CRM analyst or customer service platform administrator and grow into CSM developer roles.',
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
        q: 'What is the ServiceNow CSM course fee in Hyderabad?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch date.',
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
    // From the client's page document (Nov 2026), written for the keywords chosen on 24 Nov 2026: primary
    // "servicenow grc training in hyderabad"; secondary "servicenow grc course", "servicenow grc certification",
    // "servicenow grc jobs". ServiceNow renamed Vendor Risk Management to Third-party Risk Management (TPRM),
    // so module 7 uses the new name. ServiceNow University lists CSA as a suggested prerequisite for CIS-RC,
    // not a requirement.
    h1: 'ServiceNow GRC Training in Hyderabad',
    tagline: 'Run governance, risk and compliance on ServiceNow: policies, controls, risks and audits.',
    summary:
      'A ServiceNow GRC specialist builds the system companies use to prove they follow the rules. This ServiceNow GRC training in Hyderabad goes beyond frameworks on slides: you configure entities, controls and risk assessments, run an audit engagement and set up continuous monitoring that flags failing controls automatically.',
    prerequisites:
      'ServiceNow admin knowledge (CSA level) is recommended. Audit, risk or compliance experience helps but is not required.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'No coding needed',
      location: 'Hyderabad',
    },
    highlights: [
      'Policy, risk & audit',
      'Continuous monitoring & third-party risk',
      'CIS-RC exam preparation',
    ],
    about: {
      paragraphs: [
        'Our ServiceNow GRC training in Hyderabad teaches Governance, Risk, and Compliance on ServiceNow, which ServiceNow also sells as Integrated Risk Management (IRM). Companies use it to manage policies, controls, risks and audits in one place, and GRC specialists help banks, insurers and other regulated firms prove they follow laws and standards.',
        'The ServiceNow GRC course covers the entity framework, policy and compliance, risk frameworks and assessments, audit engagements, continuous monitoring and third-party risk. Classes are live and instructor-led, you practise on your own ServiceNow Personal Developer Instance (PDI), and the course prepares you for the CIS-RC (Risk and Compliance) exam.',
      ],
      whyTitle: 'Why learn ServiceNow GRC in 2026',
      why: [
        'GRC is a specialist ServiceNow skill that sets you apart from general administrators.',
        'Companies face more regulation every year and need tools that prove they comply.',
        'A strong move for audit, risk and compliance professionals into technology roles.',
      ],
    },
    audience: [
      {
        title: 'ServiceNow administrators',
        text: 'Add GRC, a specialist ServiceNow product, to your platform skills.',
      },
      {
        title: 'Audit, risk & compliance professionals',
        text: 'Move into GRC technology roles using your domain knowledge.',
      },
      { title: 'Security professionals', text: 'Connect security work to risk and compliance.' },
    ],
    outcomes: [
      'Explain how ServiceNow GRC supports the three lines of defence',
      'Configure entity types, entity classes and scoping',
      'Load authority documents and turn citations into controls',
      'Run control attestations and track compliance',
      'Build a risk framework and run scored risk assessments',
      'Plan and run an audit engagement with tests and findings',
      'Set up indicators that test controls automatically',
      'Tier third parties and send them risk assessments',
    ],
    modules: [
      {
        title: 'GRC foundations',
        summary: 'What GRC means and how ServiceNow supports it.',
        topics: [
          'GRC concepts',
          'Three lines of defence',
          'ServiceNow GRC (IRM) applications',
          'GRC roles',
          'GRC architecture',
          'Activating GRC on a practice instance',
        ],
        lab: 'Activate GRC on your PDI and assign GRC roles.',
      },
      {
        title: 'Entity framework',
        summary: 'Everything in GRC hangs off entities: the things a company must govern.',
        topics: [
          'Entities and entity types',
          'Entity classes',
          'Scoping',
          'Entity owners',
          'Entity filters',
          'Entity hierarchies',
        ],
        lab: 'Create entity types and classes, then scope entities.',
      },
      {
        title: 'Policy & compliance',
        summary: 'How rules turn into controls.',
        topics: [
          'Authority documents and citations',
          'Policies and policy statements',
          'Control objectives and controls',
          'Policy lifecycle',
          'Control attestations',
          'Compliance dashboards',
        ],
        lab: 'Load an authority document and generate controls.',
      },
      {
        title: 'Risk management',
        summary: 'How risks are identified, scored and tracked.',
        topics: [
          'Risk framework and risk statements',
          'Risk library',
          'Risk scoring and criteria',
          'Risk assessments',
          'Risk appetite',
          'Risk dashboards',
        ],
        lab: 'Build a risk framework and run a risk assessment.',
      },
      {
        title: 'Audit management',
        summary: 'Plan and run audits in ServiceNow.',
        topics: [
          'Audit planning',
          'Audit engagements',
          'Audit tasks and testing',
          'Findings and issues',
          'Remediation',
          'Audit reports',
        ],
        lab: 'Run an audit engagement with tests and findings.',
      },
      {
        title: 'Continuous monitoring & issues',
        summary: 'Check controls automatically and manage what fails.',
        topics: [
          'Indicators and indicator templates',
          'Automated control testing',
          'Issue management and issue workflows',
          'Remediation tasks',
        ],
        lab: 'Create an indicator that tests a control automatically.',
      },
      {
        title: 'Third-party risk management',
        summary: 'Manage the risk that suppliers bring.',
        topics: [
          'Third-party portfolio and tiering',
          'Third-party assessments and questionnaires',
          'Third-party issues',
          'Third-party risk reporting',
          'Third-party portal',
        ],
        lab: 'Tier vendors and send a third-party risk assessment.',
      },
      {
        title: 'Certification & career readiness',
        summary: 'Prepare for the CIS-RC exam and GRC interviews.',
        topics: [
          'CIS-RC exam practice',
          'Exam-day strategy',
          'ServiceNow GRC interview questions',
          'Capstone review',
          'Resume and LinkedIn',
          'Mock interviews',
        ],
        lab: 'Take a timed CIS-RC practice test and review weak areas.',
      },
    ],
    tools: [
      'ServiceNow Platform',
      'Governance, Risk, and Compliance (GRC)',
      'Integrated Risk Management (IRM)',
      'Policy and Compliance Management',
      'Risk Management',
      'Audit Management',
      'Indicators (continuous monitoring)',
      'Third-party Risk Management (TPRM)',
      'Entity framework',
      'Performance Analytics',
      'Personal Developer Instance (PDI)',
    ],
    skills: [
      'GRC concepts',
      'Entity framework',
      'Policy and compliance',
      'Control management',
      'Risk frameworks and scoring',
      'Audit management',
      'Continuous monitoring',
      'Issue management',
      'Third-party risk',
      'CIS-RC exam readiness',
    ],
    projects: [
      {
        title: 'ISO 27001 compliance setup',
        problem: 'A company must prove ISO 27001 compliance but tracks its controls in spreadsheets.',
        text: 'Load an authority document, create controls and run attestations for a business unit.',
        result: 'Controls are tracked, attested and reported in one system.',
        stack: ['Policy and Compliance', 'Controls', 'Attestations'],
      },
      {
        title: 'Enterprise risk register',
        problem: 'Leaders cannot see the company’s top risks in one place.',
        text: 'Build a risk framework, risk statements and scored assessments with a dashboard.',
        result: 'A scored risk register with a dashboard for leadership.',
        stack: ['Risk Management', 'Risk assessments', 'Dashboards'],
      },
      {
        title: 'Internal audit engagement',
        problem: 'Internal audits are slow and findings are not followed up.',
        text: 'Run an audit with tests, findings and remediation tracking.',
        result: 'Audits, findings and remediation are tracked to closure.',
        stack: ['Audit Management', 'Findings', 'Remediation'],
      },
    ],
    capstone:
      'Set up GRC for a sample bank: entities, policies and controls, a risk register, an audit engagement, continuous monitoring and third-party risk, demonstrated end to end.',
    certificationIntro:
      'ServiceNow certifications are issued only by ServiceNow, so no training institute can certify you directly. This course prepares you for the topics of the CIS-RC exam. You book and pay for the exam yourself on ServiceNow University, which sets its own eligibility rules and links exam eligibility to its GRC: Integrated Risk Management (IRM) Implementation course. ServiceNow suggests CSA-level platform knowledge first and recommends about six months of hands-on experience on ServiceNow projects. An advisor can explain the current steps.',
    certifications: [
      {
        name: 'ServiceNow Certified Implementation Specialist – Risk and Compliance (CIS-RC)',
        note: 'Covers policy and compliance, risk, audit and the entity framework: modules 1 to 6, with timed practice tests in module 8.',
      },
      {
        name: 'ServiceNow Certified System Administrator (CSA)',
        note: 'Not covered by this course. Recommended before CIS-RC; if you are new to ServiceNow, start with ServiceNow Platform Administration.',
      },
      {
        name: 'ServiceNow Certified Implementation Specialist – Third-party Risk Management (CIS-TPRM)',
        note: 'A next step. Module 7 introduces Third-party Risk Management; this separate exam goes deeper into implementing it.',
      },
    ],
    roles: [
      {
        title: 'ServiceNow GRC Developer',
        text: 'Configures GRC applications and automations.',
        level: 'Junior to mid',
      },
      {
        title: 'ServiceNow GRC Consultant',
        text: 'Designs GRC solutions for clients.',
        level: 'Mid to senior',
      },
      {
        title: 'ServiceNow IRM Analyst',
        text: 'Supports and improves risk and compliance processes.',
        level: 'Fresher to mid',
      },
      { title: 'GRC Implementation Specialist', text: 'Sets up GRC for a company.', level: 'Mid' },
      {
        title: 'Risk and Compliance Analyst',
        text: 'Runs risk assessments and compliance checks.',
        level: 'Fresher to mid',
      },
      {
        title: 'Vendor Risk Analyst',
        text: 'Assesses the risk that suppliers bring.',
        level: 'Fresher to mid',
      },
    ],
    careers: {
      salaries: [
        { role: 'ServiceNow Administrator', experience: '1 to 7 years', pay: '₹2.7 L to ₹10 L' },
        { role: 'ServiceNow Developer', experience: '1 to 3 years', pay: '₹5.5 L to ₹13.6 L' },
      ],
      salaryNote:
        'Annual salary ranges for ServiceNow roles in general, not GRC roles specifically, from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
      path: [
        { stage: 'Start (0 to 2 years)', roles: 'IRM Analyst, Risk and Compliance Analyst' },
        { stage: 'Grow (2 to 5 years)', roles: 'GRC Developer, GRC Implementation Specialist' },
        { stage: 'Lead (5+ years)', roles: 'GRC Consultant, IRM Architect' },
      ],
    },
    faqs: [
      {
        q: 'What is ServiceNow GRC?',
        a: 'ServiceNow Governance, Risk, and Compliance (GRC) is the ServiceNow product companies use to set rules, manage risks and prove they follow laws and standards, with policies, controls, risks and audits in one place.',
      },
      {
        q: 'Is ServiceNow GRC the same as IRM?',
        a: 'Yes, in practice. ServiceNow calls the product line Governance, Risk, and Compliance and sells it in Integrated Risk Management (IRM) packages, so job posts and documentation use both names.',
      },
      {
        q: 'Who should join this ServiceNow GRC course?',
        a: 'ServiceNow administrators, audit, risk and compliance professionals, and security professionals. CSA-level platform knowledge is recommended. Audit or risk experience helps but is not required, because the course explains GRC concepts before configuring them.',
      },
      {
        q: 'Which ServiceNow GRC modules does the course cover?',
        a: 'Policy and Compliance Management, Risk Management, Audit Management, continuous monitoring with indicators and Third-party Risk Management, all built on the entity framework. The eight modules end with certification and career readiness, and every module has a hands-on lab.',
      },
      {
        q: 'Which ServiceNow GRC certification does this course prepare me for?',
        a: 'The ServiceNow Certified Implementation Specialist – Risk and Compliance (CIS-RC), with timed practice tests in module 8. You book and pay for the exam on ServiceNow University. CIS-TPRM, for third-party risk, is a separate exam and a good next step.',
      },
      {
        q: 'Do I need the CSA certification before CIS-RC?',
        a: 'ServiceNow University lists CSA-level knowledge as a suggested prerequisite, not a requirement. It makes GRC much easier to learn. If you are new to ServiceNow, start with ServiceNow Platform Administration; an advisor can help you plan both.',
      },
      {
        q: 'What is an entity in ServiceNow GRC?',
        a: 'Anything the company must govern, such as a business unit, an application or a location. Controls and risks are linked to entities, so the entity framework decides what each policy and risk applies to.',
      },
      {
        q: 'What is Policy and Compliance Management in ServiceNow?',
        a: 'The GRC application that turns laws and standards into controls. You load authority documents, link their citations to control objectives and ask control owners to attest that each control works.',
      },
      {
        q: 'What is Third-party Risk Management in ServiceNow?',
        a: 'The GRC application for supplier risk: tiering third parties, sending them risk assessments and tracking issues. It replaced ServiceNow’s older Vendor Risk Management, and module 7 covers it.',
      },
      {
        q: 'What is continuous monitoring in ServiceNow GRC?',
        a: 'Automated checks, called indicators, that test controls regularly and raise issues when something fails.',
      },
      {
        q: 'What ServiceNow GRC jobs can I apply for after the course?',
        a: 'Entry roles include IRM analyst, risk and compliance analyst and vendor risk analyst. With experience come GRC developer, GRC implementation specialist and GRC consultant roles. Banks, insurers, consulting firms and IT services companies that implement ServiceNow for regulated clients hire for them.',
      },
      {
        q: 'What ServiceNow GRC interview questions should I prepare for?',
        a: 'Expect questions on the entity framework, authority documents and citations, controls and attestations, risk scoring, audit engagements, indicators and third-party risk. Module 8 covers common GRC interview questions and ends with mock interviews.',
      },
      {
        q: 'Are the ServiceNow GRC classes live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Hyderabad.',
      },
      {
        q: 'What is the ServiceNow GRC course fee in Hyderabad?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Does the ServiceNow GRC training in Hyderabad include placement support?',
        a: 'Yes. It includes resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
      },
    ],
  },
  {
    ...servicenow,
    slug: 'servicenow-fdse',
    name: 'ServiceNow Forward Deployed Software Engineer (FDSE)',
    // Menu and breadcrumb name starts with the heading's words, so the page a visitor lands on matches the link.
    shortName: 'ServiceNow AI Agents (FDSE)',
    // From the client's page document (Nov 2026), written for the keywords chosen on 24 Nov 2026: primary
    // "servicenow ai agents course"; secondary "servicenow ai agent developer", "servicenow forward deployed
    // engineer", "servicenow ai certification". "servicenow cad certification" belongs to the ITSM Development
    // page. Product names follow ServiceNow's 2026 renames: Now Assist is now ServiceNow Otto, Now Assist Skill
    // Kit is AI Skill Kit, Now Assist Data Kit is AI Data Kit and AI Control Tower is Super Intelligence Control
    // Tower. ServiceNow has no full AI certification; its AI micro-certifications are for executive sponsors.
    h1: 'ServiceNow AI Agents Course in Hyderabad (FDSE)',
    tagline: 'Build apps, AI skills and agents on ServiceNow, side by side with customers.',
    summary:
      'A ServiceNow forward deployed software engineer works with customers to turn their problems into working apps and AI agents on the ServiceNow AI Platform. This course goes past switching on ServiceNow Otto: you build a custom app, a custom AI skill and an agentic workflow, connect them to outside systems and govern them in Super Intelligence Control Tower.',
    prerequisites:
      'Programming experience (JavaScript or another language) and ServiceNow basics are recommended. The course suits developers and experienced ServiceNow professionals.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'Coding required (JavaScript)',
      location: 'Hyderabad',
    },
    highlights: ['AI Agent Studio & AI Skill Kit', 'Apps & integrations', 'CAD exam preparation'],
    about: {
      paragraphs: [
        'Our ServiceNow AI Agents course is for developers who want to build apps and AI solutions directly with customers, the way a ServiceNow forward deployed engineer does. Forward deployed software engineers (FDSEs) turn a customer’s problem into a working ServiceNow solution quickly, from custom apps to AI agents.',
        'You run discovery, build scoped apps in ServiceNow Studio, integrate outside systems, create custom skills in AI Skill Kit (formerly Now Assist Skill Kit), build agentic workflows in AI Agent Studio and govern them in Super Intelligence Control Tower (formerly AI Control Tower). Classes are live and instructor-led, and the course prepares you for the Certified Application Developer (CAD) exam.',
      ],
      whyTitle: 'Why learn ServiceNow AI agents in 2026',
      why: [
        'ServiceNow is bringing AI agents to all its products under the ServiceNow Otto name.',
        'Forward deployed roles combine coding with direct impact on customers.',
        'It builds on the developer skills you already have.',
      ],
    },
    audience: [
      { title: 'ServiceNow developers', text: 'Move into AI agent and solution engineering roles.' },
      { title: 'Software developers', text: 'Bring your coding skills to the ServiceNow AI Platform.' },
      {
        title: 'Experienced ServiceNow consultants',
        text: 'Add hands-on build skills for customer-facing delivery.',
      },
    ],
    outcomes: [
      'Run customer discovery and scope a pilot with success metrics',
      'Build scoped apps in ServiceNow Studio and App Engine',
      'Write server and client code with the Glide API and UI Builder',
      'Connect outside systems with REST, IntegrationHub and MCP',
      'Build and test custom AI skills in AI Skill Kit',
      'Build AI agents and agentic workflows in AI Agent Studio',
      'Govern agents and skills in Super Intelligence Control Tower',
      'Test with ATF, deploy and hand a solution over to the customer',
    ],
    modules: [
      {
        title: 'The forward deployed role',
        summary: 'How FDSEs work with customers to deliver value fast.',
        topics: [
          'What an FDSE does',
          'Customer discovery',
          'Scoping a pilot',
          'Success metrics',
          'Working with customer teams',
          'Writing a pilot proposal',
        ],
        lab: 'Run a mock discovery and write a pilot scope.',
      },
      {
        title: 'Building apps in ServiceNow Studio',
        summary: 'Scoped applications, built the way real projects are delivered.',
        topics: [
          'Scoped applications',
          'ServiceNow Studio',
          'Tables, forms and modules',
          'App Engine basics',
          'Application roles and access',
          'Source control',
        ],
        lab: 'Build a scoped app with tables, forms and modules in ServiceNow Studio.',
      },
      {
        title: 'Server & client development',
        summary: 'The code behind custom apps.',
        topics: [
          'Glide API',
          'Business rules and script includes',
          'Client scripts and UI policies',
          'UI Builder basics',
          'Debugging',
          'Code review',
        ],
        lab: 'Write business rules, script includes and a UI Builder page.',
      },
      {
        title: 'Integrations',
        summary: 'Connect the systems a customer already has.',
        topics: [
          'Outbound and scripted REST',
          'IntegrationHub spokes',
          'Import sets',
          'MCP client in AI Agent Studio',
          'API authentication',
          'Error handling',
        ],
        lab: 'Connect to an outside API with IntegrationHub and handle errors.',
      },
      {
        title: 'Custom AI skills with AI Skill Kit',
        summary: 'Build your own generative AI skills.',
        topics: [
          'ServiceNow Otto (formerly Now Assist) and skills',
          'AI Skill Kit (formerly Now Assist Skill Kit)',
          'Prompt design',
          'Testing with AI Data Kit',
          'Prompt versioning',
          'Deploying skills',
        ],
        lab: 'Build and test a custom skill in AI Skill Kit.',
      },
      {
        title: 'AI agents & agentic workflows',
        summary: 'Agents that plan and act.',
        topics: [
          'AI Agent Studio',
          'Agent roles, instructions and tools',
          'Agentic workflows',
          'Orchestrating several agents',
          'Testing agents',
          'Human approval steps',
        ],
        lab: 'Build two agents and an agentic workflow in AI Agent Studio.',
      },
      {
        title: 'Governance, testing & deployment',
        summary: 'Make AI safe for production.',
        topics: [
          'Super Intelligence Control Tower (formerly AI Control Tower)',
          'Guardian content checks',
          'Automated Test Framework (ATF)',
          'Update sets and the app repository',
          'Handover documentation',
          'Production readiness',
        ],
        lab: 'Review agents in Super Intelligence Control Tower and add ATF tests.',
      },
      {
        title: 'Capstone & career readiness',
        summary: 'Deliver a full customer solution and get interview-ready.',
        topics: [
          'Capstone pilot delivery',
          'Presenting to stakeholders',
          'CAD exam practice',
          'ServiceNow AI learning paths',
          'ServiceNow AI agent interview questions',
          'Mock interviews',
        ],
        lab: 'Deliver the capstone pilot with a handover pack.',
      },
    ],
    tools: [
      'ServiceNow AI Platform',
      'ServiceNow Studio',
      'App Engine',
      'UI Builder',
      'JavaScript & Glide API',
      'IntegrationHub',
      'Model Context Protocol (MCP)',
      'ServiceNow Otto (formerly Now Assist)',
      'AI Skill Kit',
      'AI Data Kit',
      'AI Agent Studio',
      'Super Intelligence Control Tower',
      'Automated Test Framework',
    ],
    skills: [
      'Customer discovery',
      'Scoped app development',
      'Glide API and UI Builder',
      'IntegrationHub and REST',
      'AI Skill Kit',
      'AI Agent Studio',
      'Agentic workflows',
      'AI governance',
      'Automated testing',
      'Solution delivery',
    ],
    projects: [
      {
        title: 'Customer intake app',
        problem: 'A customer runs a key process on email and spreadsheets.',
        text: 'Build a scoped app for the process with forms, logic and a REST integration.',
        result: 'A scoped app with forms, logic and an integration replaces the manual process.',
        stack: ['ServiceNow Studio', 'IntegrationHub', 'REST'],
      },
      {
        title: 'Custom AI skill',
        problem: 'Agents write the same responses again and again.',
        text: 'Build a skill in AI Skill Kit that drafts responses from app data, and test it with a dataset in AI Data Kit.',
        result: 'A custom AI skill drafts responses from app data.',
        stack: ['AI Skill Kit', 'AI Data Kit'],
      },
      {
        title: 'Agentic workflow pilot',
        problem: 'A customer wants proof that AI agents can resolve requests safely.',
        text: 'Build agents that triage and resolve requests, with a human approval step, governed in Super Intelligence Control Tower.',
        result: 'A governed agentic workflow pilot with measured results.',
        stack: ['AI Agent Studio', 'Super Intelligence Control Tower'],
      },
    ],
    capstone:
      'Run a complete forward deployed engagement for a sample customer: discovery, a custom app, an AI skill, an agentic workflow and governance, presented as a pilot result.',
    certificationIntro:
      'ServiceNow certifications are issued only by ServiceNow, so no training institute can certify you directly. ServiceNow has no full certification for AI agents yet: its AI micro-certifications, such as the Agentic AI Executive Micro-Certification, are short courses for executive sponsors, not developer credentials. For developers, the main exam is the Certified Application Developer (CAD), which this course prepares you for. You book and pay for it yourself on ServiceNow University. An advisor can explain the current steps.',
    certifications: [
      {
        name: 'ServiceNow Certified Application Developer (CAD)',
        note: 'Covered by the app, scripting and integration modules, with practice tests in module 8. ServiceNow recommends about six months of hands-on app development before the exam.',
      },
      {
        name: 'ServiceNow Certified System Administrator (CSA)',
        note: 'Not required for CAD and not covered by this course, but useful platform knowledge. ServiceNow Platform Administration prepares you for it.',
      },
    ],
    roles: [
      {
        title: 'Forward Deployed Software Engineer',
        text: 'Builds solutions directly with customers.',
        level: 'Experienced',
      },
      {
        title: 'ServiceNow AI Agent Developer',
        text: 'Builds and governs AI agents and skills.',
        level: 'Mid to senior',
      },
      { title: 'ServiceNow Developer', text: 'Builds apps and integrations.', level: 'Junior to mid' },
      { title: 'ServiceNow Solution Engineer', text: 'Prototypes and demos solutions.', level: 'Mid' },
      {
        title: 'ServiceNow Technical Consultant',
        text: 'Designs and builds client solutions.',
        level: 'Experienced',
      },
      {
        title: 'App Engine Developer',
        text: 'Builds custom low-code and pro-code apps.',
        level: 'Junior to mid',
      },
    ],
    careers: {
      salaries: [
        { role: 'ServiceNow Developer', experience: '1 to 3 years', pay: '₹5.5 L to ₹13.6 L' },
        { role: 'Experienced ServiceNow Developer', experience: '3 to 6 years', pay: '₹7.8 L to ₹21.2 L' },
      ],
      salaryNote:
        'Annual salary ranges for ServiceNow developers in general, not forward deployed or AI agent roles specifically, from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
      path: [
        { stage: 'Entry (with developer experience)', roles: 'ServiceNow Developer, App Engine Developer' },
        { stage: 'Grow (2 to 5 years)', roles: 'AI Agent Developer, Forward Deployed Software Engineer' },
        { stage: 'Lead (5+ years)', roles: 'Solution Engineer, ServiceNow AI Architect' },
      ],
    },
    faqs: [
      {
        q: 'What does a ServiceNow forward deployed engineer do?',
        a: 'A forward deployed software engineer (FDSE) works directly with a customer’s team to turn a problem into a working ServiceNow solution quickly, from a custom app to AI agents. The role mixes coding, problem solving and customer communication.',
      },
      {
        q: 'Who is this ServiceNow AI Agents course for?',
        a: 'Developers and experienced ServiceNow professionals. It is not a first ServiceNow course: if you are new to the platform, start with ServiceNow Platform Administration; an advisor can suggest a path.',
      },
      {
        q: 'What does a ServiceNow AI agent developer do?',
        a: 'Builds, tests and governs AI agents and AI skills on ServiceNow: what each agent does, which tools it can use, when a person must approve, and how it is monitored once it is live.',
      },
      {
        q: 'What is AI Agent Studio in ServiceNow?',
        a: 'ServiceNow’s tool for building AI agents. You define each agent’s role, instructions and the tools it can use, then combine agents into agentic workflows. Module 6 is built around it.',
      },
      {
        q: 'What is AI Skill Kit (formerly Now Assist Skill Kit) in ServiceNow?',
        a: 'ServiceNow’s tool for building custom generative AI skills, now called AI Skill Kit. You set the inputs, the prompt and where the output appears, then test the skill before deploying it. Module 5 covers it.',
      },
      {
        q: 'What is Super Intelligence Control Tower (formerly AI Control Tower)?',
        a: 'ServiceNow’s hub for tracking and governing the AI agents, models and skills a company runs. ServiceNow now calls it Super Intelligence Control Tower, and module 7 uses it to review agents before go-live.',
      },
      {
        q: 'Is there a ServiceNow AI certification?',
        a: 'Not a full one yet. ServiceNow’s AI micro-certifications, such as the Agentic AI Executive Micro-Certification, are short courses for executive sponsors. For developers, the main exam is CAD, which this course prepares you for.',
      },
      {
        q: 'Does the course cover ServiceNow App Engine?',
        a: 'Yes. Module 2 builds scoped apps with ServiceNow Studio and App Engine, and the customer intake project turns a manual process into an app.',
      },
      {
        q: 'Which ServiceNow agentic AI use cases will I build?',
        a: 'An AI skill that drafts responses from app data, and an agentic workflow where agents triage and resolve requests with a human approval step, alongside a customer intake app. The capstone brings them together as a customer pilot.',
      },
      {
        q: 'Do I need JavaScript for the FDSE course?',
        a: 'Yes, basic JavaScript helps. Module 3 covers the ServiceNow coding you need, and you need no previous AI experience: the AI modules start from the basics.',
      },
      {
        q: 'Can I practise AI Agent Studio on a free developer instance?',
        a: 'ServiceNow’s free Personal Developer Instances have limited or no access to its generative AI features. Ask an advisor how AI lab access works for your batch.',
      },
      {
        q: 'Are the ServiceNow FDSE classes live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Hyderabad.',
      },
      {
        q: 'What is the ServiceNow FDSE course fee in Hyderabad?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Does the ServiceNow FDSE course include placement support?',
        a: 'Yes. It includes resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
      },
    ],
  },
  {
    ...servicenow,
    slug: 'servicenow-ba',
    name: 'ServiceNow Business Analyst',
    shortName: 'ServiceNow BA',
    // From the client's page document (Nov 2026), written for the keywords chosen on 24 Nov 2026: primary
    // "servicenow business analyst course"; secondary "servicenow business analyst jobs in hyderabad",
    // "servicenow functional consultant", "servicenow business analyst certification". "servicenow csa"
    // belongs to the Admin page. ServiceNow has no business analyst certification; CIS-ITSM now needs the
    // CIS-Data Foundations (CIS-DF) exam first.
    h1: 'ServiceNow Business Analyst Course in Hyderabad',
    tagline: 'Turn business needs into ServiceNow solutions: processes, user stories and testing.',
    summary:
      'A ServiceNow business analyst decides what the ServiceNow team builds, by turning how a business works into clear requirements. In this course you run discovery for a real ITSM process, map it to ServiceNow features, write user stories developers can build from and take the release through testing.',
    prerequisites: 'No coding needed. Business, IT support or process experience helps.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'No coding needed',
      location: 'Hyderabad',
    },
    highlights: ['ITSM processes & discovery', 'User stories & UAT', 'CSA exam practice'],
    about: {
      paragraphs: [
        'Our ServiceNow Business Analyst course in Hyderabad prepares you to lead the business side of ServiceNow projects. BAs understand how IT and business teams work, turn that into clear requirements and make sure the delivered solution works for users.',
        'You learn ServiceNow basics and ITSM processes, then run discovery, map processes, write user stories, manage a backlog and plan UAT and go-live. Classes are live and instructor-led, you practise on your own ServiceNow Personal Developer Instance (PDI), and you finish with a portfolio of BA artefacts and CSA practice tests.',
      ],
      whyTitle: 'Why learn ServiceNow business analysis in 2026',
      why: [
        'ServiceNow projects need analysts, from ITSM rollouts to HR and customer service.',
        'No coding needed: the work uses business and communication skills.',
        'A path into consulting: BAs often grow into functional consultant and product owner roles.',
      ],
    },
    audience: [
      { title: 'Business analysts', text: 'Specialise in ServiceNow projects.' },
      {
        title: 'IT support & service desk staff',
        text: 'Use your ITSM experience to move into analysis.',
      },
      { title: 'Graduates with business degrees', text: 'Start a ServiceNow career with no coding.' },
    ],
    outcomes: [
      'Explain how ServiceNow projects run and who does what',
      'Walk through incident, problem, change and request on ServiceNow',
      'Run discovery workshops and stakeholder interviews',
      'Map as-is and to-be processes and find the gaps',
      'Write user stories with acceptance criteria, out-of-the-box first',
      'Manage a backlog and plan sprints in Agile Development 2.0 or Jira',
      'Write UAT scripts, log defects and check go-live readiness',
      'Plan user training and measure adoption with dashboards',
    ],
    modules: [
      {
        title: 'ServiceNow for business analysts',
        summary: 'What ServiceNow does and how projects run.',
        topics: [
          'ServiceNow platform overview',
          'Lists, forms and records',
          'Roles on a ServiceNow project',
          'Implementation lifecycle',
          'Personal Developer Instance (PDI)',
          'Working with developers',
        ],
        lab: 'Explore a ServiceNow instance and map the roles on a project.',
      },
      {
        title: 'ITSM processes',
        summary: 'The processes ServiceNow BAs analyse most.',
        topics: [
          'ITIL basics',
          'Incident and problem management',
          'Change management',
          'Request fulfilment and the service catalog',
          'Knowledge management',
        ],
        lab: 'Walk through incident, problem, change and request on your PDI.',
      },
      {
        title: 'Discovery & process mapping',
        summary: 'Run discovery the way consultants do.',
        topics: [
          'Discovery workshops',
          'Workshop facilitation',
          'Stakeholder interviews',
          'As-is and to-be maps',
          'Gap analysis',
          'Process modelling tools',
        ],
        lab: 'Run a mock discovery interview and draw the as-is process.',
      },
      {
        title: 'Requirements & user stories',
        summary: 'Requirements developers can build from.',
        topics: [
          'Requirement types',
          'User stories and acceptance criteria',
          'Out-of-the-box first',
          'Prioritisation',
          'Traceability',
          'Non-functional requirements',
        ],
        lab: 'Write 10 user stories with acceptance criteria.',
      },
      {
        title: 'Backlogs & agile delivery',
        summary: 'Manage the work in sprints.',
        topics: [
          'Scrum basics',
          'Backlog management',
          'Sprint planning',
          'Agile Development 2.0 on ServiceNow',
          'Jira and Confluence',
          'Release planning',
        ],
        lab: 'Plan a sprint in ServiceNow Agile Development 2.0.',
      },
      {
        title: 'Testing & UAT',
        summary: 'Check that releases work for users.',
        topics: [
          'Test scenarios',
          'UAT planning',
          'Defect management',
          'Regression testing',
          'Automated Test Framework basics',
          'Go-live readiness',
        ],
        lab: 'Write UAT scripts and log defects.',
      },
      {
        title: 'Adoption, reporting & AI',
        summary: 'Help users adopt the solution.',
        topics: [
          'Training and change management',
          'Reports and dashboards',
          'Adoption metrics',
          'ServiceNow Otto (formerly Now Assist) for analysts',
          'AI for discovery interview summaries',
        ],
        lab: 'Build a dashboard and draft a training plan.',
      },
      {
        title: 'Certification & career readiness',
        summary: 'Prepare for CSA and BA interviews.',
        topics: [
          'CSA exam practice',
          'ServiceNow BA interview questions and case studies',
          'Portfolio of BA artefacts',
          'Interview storytelling',
          'Resume and LinkedIn',
          'Mock interviews',
        ],
        lab: 'Take a CSA practice test and present your BA portfolio.',
      },
    ],
    tools: [
      'ServiceNow Platform',
      'Incident, Problem and Change Management',
      'Service Catalog',
      'Knowledge Management',
      'Agile Development 2.0',
      'Reports and dashboards',
      'Automated Test Framework',
      'Jira',
      'Confluence',
      'Lucidchart',
      'Excel',
    ],
    skills: [
      'ITSM process knowledge',
      'Discovery workshops',
      'Process mapping',
      'User stories',
      'Out-of-the-box first design',
      'Backlog management',
      'UAT',
      'Reporting',
      'Change management',
      'CSA exam readiness',
    ],
    projects: [
      {
        title: 'Incident process redesign',
        problem: 'An IT team’s incident process is slow and inconsistent.',
        text: 'Map the current incident process, design the future one and write user stories.',
        result: 'A redesigned process with user stories ready to build.',
        stack: ['Lucidchart', 'Jira', 'Incident Management'],
      },
      {
        title: 'Service catalog requirements',
        problem: 'Employees request services in many different ways.',
        text: 'Gather requirements for five catalog items and map them to ServiceNow features.',
        result: 'Clear requirements for five catalog items, mapped to ServiceNow features.',
        stack: ['Service Catalog', 'Confluence'],
      },
      {
        title: 'UAT and go-live pack',
        problem: 'A release is about to go live without testing or training.',
        text: 'Write test cases, run UAT and prepare training material.',
        result: 'A complete UAT and go-live pack.',
        stack: ['Excel', 'Automated Test Framework'],
      },
    ],
    capstone:
      'Act as the BA on a ServiceNow ITSM rollout: discovery, process design, backlog, UAT and a training plan, presented to a mock steering group.',
    certificationIntro:
      'ServiceNow has no certification just for business analysts. Its AI Business Process Analyst learning path on ServiceNow University awards badges, not a certification, so most ServiceNow BAs show their platform knowledge with the CSA exam. This course includes CSA practice tests; you book and pay for the exam yourself on ServiceNow University, and IIBA certificates are booked with IIBA. An advisor can explain the current steps.',
    certifications: [
      {
        name: 'ServiceNow Certified System Administrator (CSA)',
        note: 'Practice tests in module 8. The exam tests administration in more depth than BA work needs; ServiceNow Platform Administration covers it in full.',
      },
      {
        name: 'ServiceNow Certified Implementation Specialist – IT Service Management (CIS-ITSM)',
        note: 'A next step once you have ITSM project experience. ServiceNow now requires its Data Foundations (CIS-DF) exam first.',
      },
      {
        name: 'IIBA Entry Certificate in Business Analysis (ECBA)',
        note: 'A general business analysis certificate from IIBA, not ServiceNow, with no experience requirement. A next step if you want BA credentials beyond ServiceNow.',
      },
    ],
    roles: [
      {
        title: 'ServiceNow Business Analyst',
        text: 'Gathers requirements and designs ServiceNow solutions.',
        level: 'Fresher to mid',
      },
      {
        title: 'ServiceNow Functional Consultant',
        text: 'Configures ServiceNow to meet business needs.',
        level: 'Mid',
      },
      { title: 'ITSM Business Analyst', text: 'Improves IT service processes.', level: 'Fresher to mid' },
      {
        title: 'ServiceNow Product Owner',
        text: 'Owns the backlog for a ServiceNow team.',
        level: 'Mid to senior',
      },
      {
        title: 'ServiceNow Process Consultant',
        text: 'Designs ITSM processes for clients.',
        level: 'Experienced',
      },
      { title: 'UAT Analyst', text: 'Plans and runs user acceptance testing.', level: 'Fresher to mid' },
    ],
    careers: {
      salaries: [
        { role: 'Business Analyst', experience: '1+ years', pay: '₹3 L to ₹17 L' },
        { role: 'IT Business Analyst', experience: 'Varies', pay: '₹3 L to ₹19 L' },
        { role: 'ServiceNow Administrator', experience: '1 to 7 years', pay: '₹2.7 L to ₹10 L' },
      ],
      salaryNote:
        'Annual salary ranges for business analysts and ServiceNow administrators in general, not ServiceNow BAs specifically, from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
      path: [
        { stage: 'Start (0 to 2 years)', roles: 'ServiceNow BA, ITSM Analyst, UAT Analyst' },
        { stage: 'Grow (2 to 5 years)', roles: 'Functional Consultant, ServiceNow Product Owner' },
        { stage: 'Lead (5+ years)', roles: 'Process Consultant, Engagement Lead' },
      ],
    },
    faqs: [
      {
        q: 'What are the roles and responsibilities of a ServiceNow business analyst?',
        a: 'A ServiceNow BA runs discovery with the business, maps current and future processes, writes requirements and user stories, manages the backlog with the product owner, and checks through UAT that the delivered solution meets the need.',
      },
      {
        q: 'Who should join this ServiceNow Business Analyst course?',
        a: 'Business analysts, IT support and service desk staff, and graduates with business degrees. No coding is needed; business, IT support or process experience helps, and freshers with that exposure do well.',
      },
      {
        q: 'Does ServiceNow require coding for business analysts?',
        a: 'No. BA work is analysis, requirements and testing, and developers write the code. You do need to know what the platform does out of the box, which this course teaches.',
      },
      {
        q: 'Is there a ServiceNow business analyst certification?',
        a: 'Not a dedicated one. Most ServiceNow BAs take the CSA exam to show they understand the platform, and some add the IIBA Entry Certificate in Business Analysis (ECBA). ServiceNow University’s AI Business Process Analyst learning path awards badges, not a certification.',
      },
      {
        q: 'How does requirements gathering work on ServiceNow projects?',
        a: 'Through discovery workshops and stakeholder interviews, followed by gap analysis against what ServiceNow does out of the box. Modules 3 and 4 cover it, with a lab where you run a mock discovery interview.',
      },
      {
        q: 'How do you write user stories for ServiceNow?',
        a: 'Each story says who needs what and why, with acceptance criteria the developer and tester can check. In module 4 you write 10 user stories with acceptance criteria for an ITSM process.',
      },
      {
        q: 'What does out-of-the-box first mean on ServiceNow?',
        a: 'Using ServiceNow’s standard features before building anything custom, which keeps upgrades easy and costs low. Clients value BAs who keep customisation to what is truly needed.',
      },
      {
        q: 'What is an ITSM business analyst?',
        a: 'A business analyst who specialises in IT service management processes such as incident, problem, change and request. Most ServiceNow projects start with ITSM, so module 2 covers these processes on your PDI.',
      },
      {
        q: 'Can this course lead to a ServiceNow functional consultant role?',
        a: 'Yes, with experience. A ServiceNow functional consultant configures the platform to meet business needs, and BAs often move into the role after two to five years on projects.',
      },
      {
        q: 'Are there ServiceNow business analyst jobs in Hyderabad?',
        a: 'Yes. IT services firms and consultancies in Hyderabad post ServiceNow business analyst and ITSM analyst roles. Entry roles include ServiceNow business analyst, ITSM business analyst and UAT analyst.',
      },
      {
        q: 'What ServiceNow business analyst interview questions should I prepare for?',
        a: 'Expect questions on ITSM processes, discovery and process mapping, user stories and acceptance criteria, out-of-the-box first design and UAT, often as a case study. Module 8 covers them and ends with mock interviews and your BA portfolio.',
      },
      {
        q: 'Are the ServiceNow BA classes live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Hyderabad.',
      },
      {
        q: 'What is the ServiceNow Business Analyst course fee in Hyderabad?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Does the ServiceNow Business Analyst course include placement support?',
        a: 'Yes. It includes resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
      },
    ],
  },
];
