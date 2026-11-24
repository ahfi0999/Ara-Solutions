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
    tagline: 'Run the Now Platform the way a ServiceNow administrator does every day.',
    summary:
      'Learn to configure, secure and maintain the Now Platform: users and roles, tables and forms, the service catalog, reporting and no-code automation, with structured preparation for the Certified System Administrator (CSA) exam.',
    prerequisites:
      'No prior ServiceNow experience needed. Basic IT knowledge and comfort with computers help.',
    highlights: ['Core platform administration', 'No-code automation', 'CSA certification prep'],
    audience: [
      {
        title: 'Graduates & freshers',
        text: 'Start on one of the most widely used enterprise platforms, with no coding needed to begin.',
      },
      {
        title: 'IT support professionals',
        text: 'Move from service desk and support roles into platform administration.',
      },
      {
        title: 'Working professionals',
        text: 'Add ServiceNow administration to an IT, operations or process role.',
      },
    ],
    outcomes: [
      'Navigate the Now Platform and the Next Experience UI',
      'Manage users, groups, roles and access controls',
      'Configure tables, fields, forms, lists and UI policies',
      'Build service catalog items with variables and approvals',
      'Automate processes with Flow Designer, without code',
      'Import data with import sets and transform maps',
      'Create reports, dashboards and notifications',
      'Prepare for the Certified System Administrator (CSA) exam',
    ],
    modules: [
      {
        title: 'Platform foundations',
        summary: 'How the Now Platform is organised.',
        topics: [
          'Instances and the Next Experience UI',
          'Application navigator and lists',
          'Forms and related lists',
          'Personalising lists and forms',
        ],
      },
      {
        title: 'Users, groups & security',
        summary: 'Control who can see and do what.',
        topics: [
          'Users, groups and roles',
          'Access control lists (ACLs)',
          'Impersonation and testing access',
          'Security best practices',
        ],
      },
      {
        title: 'Data model & configuration',
        summary: 'Shape the platform’s data.',
        topics: [
          'Tables and the dictionary',
          'Table extension and the task table',
          'UI policies and data policies',
          'Choice lists and reference fields',
        ],
      },
      {
        title: 'Service catalog',
        summary: 'Self-service requests for employees.',
        topics: [
          'Catalog items and variables',
          'Record producers',
          'Approvals',
          'Requests, items and catalog tasks',
        ],
      },
      {
        title: 'Automation with Flow Designer',
        summary: 'Automate work without code.',
        topics: [
          'Flows and subflows',
          'Triggers and actions',
          'Approvals and notifications in flows',
          'Flow execution details',
        ],
      },
      {
        title: 'Data management',
        summary: 'Bring data in and move changes safely.',
        topics: [
          'Import sets and transform maps',
          'Update sets',
          'CMDB basics',
          'Upgrades and cloning concepts',
        ],
      },
      {
        title: 'Reporting & notifications',
        summary: 'Keep people informed.',
        topics: [
          'Reports and dashboards',
          'Email notifications',
          'Knowledge base',
          'Performance Analytics overview',
        ],
      },
      {
        title: 'Certification & career readiness',
        summary: 'Get CSA-ready and interview-ready.',
        topics: ['CSA exam preparation and mock tests', 'Capstone project', 'Resume and mock interviews'],
      },
    ],
    tools: [
      'ServiceNow Now Platform',
      'Next Experience UI',
      'Service Catalog',
      'Flow Designer',
      'Access controls',
      'Import sets',
      'Update sets',
      'CMDB',
      'Reports & dashboards',
      'Knowledge management',
    ],
    projects: [
      {
        title: 'Laptop request catalog',
        text: 'A catalog item with variables, a manager approval and fulfilment tasks for the IT team.',
        stack: ['Service Catalog', 'Flow Designer', 'Approvals'],
      },
      {
        title: 'Role-based access setup',
        text: 'Groups, roles and access controls for a team, tested by impersonating each type of user.',
        stack: ['Roles', 'ACLs', 'Impersonation'],
      },
      {
        title: 'Service desk dashboard',
        text: 'Reports and a dashboard showing open work, ageing tickets and SLA breaches for team leads.',
        stack: ['Reports', 'Dashboards', 'SLAs'],
      },
    ],
    certifications: [
      {
        name: 'ServiceNow Certified System Administrator (CSA)',
        note: 'Mock tests and exam practice are part of the final module.',
      },
    ],
    roles: [
      { title: 'ServiceNow Administrator', text: 'Configure, secure and maintain the platform.' },
      { title: 'Platform Support Analyst', text: 'Resolve platform issues and support users.' },
      { title: 'ITSM Administrator', text: 'Look after incident, request and catalog configuration.' },
      { title: 'Junior ServiceNow Consultant', text: 'Help configure the platform for clients.' },
    ],
    faqs: [
      {
        q: 'Do I need coding experience?',
        a: 'No. Administration is mostly configuration. Scripting is covered in the ServiceNow ITSM Development course if you want to go further.',
      },
      {
        q: 'Does the course cover the CSA exam?',
        a: 'Yes. It follows the topics of the Certified System Administrator exam, with mock tests. The exam itself is booked with ServiceNow.',
      },
      {
        q: 'Which ServiceNow course should I take after this?',
        a: 'Most administrators go on to ServiceNow ITSM Development for scripting, or to a product such as HRSD, CRM or GRC. An advisor can suggest the right next step for your goals.',
      },
    ],
  },
  {
    ...servicenow,
    slug: 'servicenow-itsm-development',
    name: 'ServiceNow ITSM Development',
    shortName: 'ServiceNow ITSM Development',
    tagline: 'Configure and script the IT service management processes companies run on ServiceNow.',
    summary:
      'Learn the ITSM processes behind every IT service desk (incident, problem, change and request) and how to build on them with business rules, client scripts, Flow Designer and integrations, with preparation for the Certified Application Developer and ITSM implementation exams.',
    prerequisites:
      'ServiceNow administration basics help; the first module recaps them. Some JavaScript is useful but not required.',
    highlights: ['ITSM processes + scripting', 'Flow Designer & integrations', 'CAD and CIS-ITSM prep'],
    audience: [
      { title: 'ServiceNow administrators', text: 'Move from configuration into development.' },
      { title: 'Developers', text: 'Bring your JavaScript skills to the Now Platform.' },
      {
        title: 'IT service professionals',
        text: 'Turn ITIL process knowledge into ServiceNow implementation skills.',
      },
    ],
    outcomes: [
      'Configure Incident, Problem, Change and Request Management',
      'Set up SLAs, assignment rules and escalations',
      'Write business rules, client scripts and script includes',
      'Use GlideRecord and GlideAjax confidently',
      'Build flows, subflows and custom actions',
      'Expose and consume REST APIs',
      'Build Service Portal widgets',
      'Test with the Automated Test Framework (ATF)',
    ],
    modules: [
      {
        title: 'ITSM & ITIL foundations',
        summary: 'The processes behind every IT service desk.',
        topics: [
          'ITIL 4 practices in ServiceNow',
          'Incident management',
          'Problem management',
          'Change management and CAB',
          'Request fulfilment',
        ],
      },
      {
        title: 'ITSM configuration',
        summary: 'Make ITSM fit how a company works.',
        topics: [
          'Assignment rules and data lookups',
          'SLA definitions and schedules',
          'Major incident management',
          'Knowledge management',
        ],
      },
      {
        title: 'Client-side scripting',
        summary: 'Make forms smarter.',
        topics: ['Client scripts', 'UI policies with scripts', 'GlideForm and GlideUser', 'GlideAjax'],
      },
      {
        title: 'Server-side scripting',
        summary: 'Business logic on the server.',
        topics: [
          'Business rules',
          'GlideRecord and GlideAggregate',
          'Script includes',
          'UI actions',
          'Scheduled jobs',
        ],
      },
      {
        title: 'Flow Designer & IntegrationHub',
        summary: 'Automate across the platform and beyond.',
        topics: ['Flows and subflows', 'Custom actions', 'IntegrationHub spokes', 'Error handling'],
      },
      {
        title: 'Integrations',
        summary: 'Connect ServiceNow with other systems.',
        topics: [
          'REST API Explorer',
          'Scripted REST APIs',
          'Outbound REST messages',
          'Import sets and transform scripts',
        ],
      },
      {
        title: 'Service Portal & Now Assist',
        summary: 'Self-service and AI for ITSM.',
        topics: [
          'Service Portal pages and widgets',
          'Employee Center',
          'Now Assist for ITSM',
          'Virtual Agent basics',
        ],
      },
      {
        title: 'Testing, deployment & career readiness',
        summary: 'Ship changes safely and get interview-ready.',
        topics: [
          'Automated Test Framework (ATF)',
          'Update sets and application scopes',
          'CAD and CIS-ITSM preparation',
          'Capstone project and mock interviews',
        ],
      },
    ],
    tools: [
      'ServiceNow ITSM',
      'JavaScript',
      'GlideRecord',
      'GlideAjax',
      'Flow Designer',
      'IntegrationHub',
      'Scripted REST APIs',
      'Service Portal',
      'Automated Test Framework',
      'Now Assist',
      'ServiceNow Studio',
    ],
    projects: [
      {
        title: 'Major incident workflow',
        text: 'Major incident handling with automatic notifications, a communication plan and SLA escalations.',
        stack: ['Incident', 'SLAs', 'Business rules'],
      },
      {
        title: 'Change approval automation',
        text: 'A change process with risk-based approvals, conflict checks and a CAB schedule.',
        stack: ['Change', 'Flow Designer', 'Approvals'],
      },
      {
        title: 'Monitoring alert integration',
        text: 'A Scripted REST API that turns alerts from a monitoring tool into incidents, with tests in ATF.',
        stack: ['Scripted REST', 'Integration', 'ATF'],
      },
    ],
    certifications: [
      {
        name: 'ServiceNow Certified Application Developer (CAD)',
        note: 'Covered by the scripting, Flow Designer and integration modules.',
      },
      {
        name: 'ServiceNow Certified Implementation Specialist – IT Service Management (CIS-ITSM)',
        note: 'Covered by the ITSM process and configuration modules.',
      },
    ],
    roles: [
      { title: 'ServiceNow Developer', text: 'Build and customise ITSM solutions with code.' },
      { title: 'ITSM Consultant', text: 'Implement ITSM processes for clients.' },
      { title: 'Integration Developer', text: 'Connect ServiceNow with the rest of the IT landscape.' },
      { title: 'ServiceNow Technical Analyst', text: 'Support and improve live ITSM implementations.' },
    ],
    faqs: [
      {
        q: 'How much JavaScript do I need?',
        a: 'Basic JavaScript helps. The scripting modules start with the essentials you need on ServiceNow and build up from there.',
      },
      { q: 'Do I need the CSA certification first?', a: NEEDS_CSA('CIS-ITSM') },
    ],
  },
  {
    ...servicenow,
    slug: 'servicenow-hrsd',
    // Content from the trainer's course document (Nov 2026): the 10 syllabus modules in order, then certification & career.
    name: 'ServiceNow HR Service Delivery (HRSD)',
    shortName: 'ServiceNow HRSD',
    tagline: 'Configure ServiceNow HRSD: HR cases, SLAs, lifecycle events and the Employee Service Center.',
    summary:
      'Learn ServiceNow HR Service Delivery: HR roles and profiles, HR cases and SLAs, Centers of Excellence, HR services and criteria, record producers, lifecycle events such as onboarding, and the Employee Service Center. It prepares you for HRSD Developer, Consultant and Administrator roles.',
    prerequisites:
      'ServiceNow administration knowledge (CSA level) is recommended, because HRSD is built on the core platform. A basic understanding of IT concepts helps.',
    highlights: ['HR cases & SLAs', 'Lifecycle events & onboarding', 'Employee Service Center'],
    audience: [
      {
        title: 'ServiceNow administrators',
        text: 'Add HRSD, one of the most requested ServiceNow specialisations, to your platform skills.',
      },
      {
        title: 'HR professionals',
        text: 'Use your knowledge of HR processes to move into HR technology roles.',
      },
      {
        title: 'Freshers and IT support professionals',
        text: 'Start a ServiceNow career in a focused module with clear job roles.',
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
      'Configure the Employee Service Center for employees to find services and raise requests',
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
      },
      {
        title: 'HR services',
        summary: 'How HR work is offered to employees.',
        topics: ['HR service configuration', 'Service categories and topic details'],
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
      },
      {
        title: 'HR criteria & record producers',
        summary: 'Controlling who sees which service.',
        topics: [
          'HR criteria and user criteria',
          'Record producers for HR services',
          'Mapping producers to services',
        ],
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
      },
    ],
    tools: [
      'ServiceNow Platform',
      'ServiceNow HR Service Delivery (HRSD)',
      'HR Case Management',
      'HR Services',
      'HR Criteria',
      'Record Producers',
      'Lifecycle Events',
      'Service Level Agreements (SLA)',
      'Employee Service Center',
      'ServiceNow Personal Developer Instance (PDI)',
    ],
    projects: [
      {
        title: 'Employee onboarding lifecycle',
        text: 'Configure a new-hire onboarding process with ordered activities for HR, IT and the manager, from offer acceptance to day one.',
        stack: ['Lifecycle Events', 'HR Services', 'Service Activities'],
      },
      {
        title: 'HR case management system',
        text: 'Build HR case creation, assignment and routing to the right Center of Excellence, with SLAs and escalation.',
        stack: ['HR Case Management', 'SLA', 'Centers of Excellence'],
      },
      {
        title: 'Employee Service Center',
        text: 'Set up an employee-facing portal where employees find HR services and raise requests that become HR cases.',
        stack: ['Employee Service Center', 'Record Producers', 'HR Criteria'],
      },
    ],
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
        text: 'Builds and configures HR services, record producers and workflows in HRSD.',
      },
      {
        title: 'ServiceNow HRSD Consultant',
        text: 'Designs HRSD solutions for clients and maps their HR processes to ServiceNow.',
      },
      {
        title: 'ServiceNow HRSD Implementation Specialist',
        text: 'Sets up HRSD for a company, from Centers of Excellence to the employee portal.',
      },
      {
        title: 'ServiceNow HR Administrator',
        text: 'Runs HRSD day to day: roles, HR services, SLAs and case queues.',
      },
    ],
    faqs: [
      {
        q: 'Do I need ServiceNow admin experience first?',
        a: 'It is recommended. HRSD runs on the core ServiceNow platform, so CSA-level knowledge of tables, forms and roles makes the course much easier to follow.',
      },
      {
        q: 'Can HR professionals without coding join?',
        a: 'Yes. Most HRSD work is configuration, not coding. Your knowledge of HR processes such as onboarding and case handling is a real advantage.',
      },
      {
        q: 'How is HRSD different from ITSM?',
        a: 'ITSM handles IT requests and incidents. HRSD handles employee HR requests, with extra privacy controls, Centers of Excellence and lifecycle events such as onboarding.',
      },
    ],
  },
  {
    ...servicenow,
    slug: 'servicenow-crm',
    name: 'ServiceNow CRM & Customer Service Management',
    shortName: 'ServiceNow CRM',
    tagline: 'Customer service, field service and order management on ServiceNow.',
    summary:
      'Learn ServiceNow’s CRM products: Customer Service Management for cases, accounts and entitlements, Field Service Management for on-site work, and Sales and Order Management, with Now Assist AI and preparation for the CSM implementation specialist exam.',
    prerequisites: 'ServiceNow administration basics (CSA level) recommended. No CRM experience needed.',
    highlights: ['Customer Service Management', 'Field Service + Sales & Order', 'CIS-CSM prep'],
    audience: [
      { title: 'ServiceNow professionals', text: 'Add ServiceNow’s CRM products to your skills.' },
      {
        title: 'CRM & support professionals',
        text: 'Bring customer service experience from other CRMs to ServiceNow.',
      },
      { title: 'Consultants', text: 'Take on customer service and field service projects.' },
    ],
    outcomes: [
      'Model customers with accounts, contacts, consumers and assets',
      'Configure cases, entitlements and SLAs',
      'Set up the CSM Configurable Workspace for agents',
      'Build a customer service portal',
      'Route work with Advanced Work Assignment',
      'Configure Field Service work orders, dispatch and scheduling',
      'Explain Sales and Order Management',
      'Prepare for the CIS-CSM exam',
    ],
    modules: [
      {
        title: 'CRM on ServiceNow',
        summary: 'How ServiceNow handles customers.',
        topics: [
          'CSM, FSM and Sales and Order Management',
          'Accounts, contacts and consumers',
          'Install base and assets',
          'Products and contracts',
        ],
      },
      {
        title: 'Case management',
        summary: 'Resolve customer issues end to end.',
        topics: ['Cases and case types', 'Entitlements and SLAs', 'Escalations', 'Major issue management'],
      },
      {
        title: 'Engagement channels',
        summary: 'Meet customers where they are.',
        topics: ['Customer service portal', 'Email and chat', 'Virtual Agent', 'Knowledge for customers'],
      },
      {
        title: 'Agent productivity',
        summary: 'Help agents work faster.',
        topics: ['CSM Configurable Workspace', 'Advanced Work Assignment', 'Playbooks', 'Now Assist for CSM'],
      },
      {
        title: 'Field Service Management',
        summary: 'Plan and deliver on-site work.',
        topics: [
          'Work orders and tasks',
          'Dispatch and scheduling',
          'Mobile agent app',
          'Parts and inventory',
        ],
      },
      {
        title: 'Sales & Order Management',
        summary: 'From quote to fulfilled order.',
        topics: [
          'Product catalogue and quotes',
          'Order capture',
          'Order fulfilment flows',
          'Connecting sales to service',
        ],
      },
      {
        title: 'Automation & integrations',
        summary: 'Connect service with the rest of the business.',
        topics: [
          'Flow Designer for CSM',
          'Integrations with other CRMs',
          'Customer service reporting',
          'Data import',
        ],
      },
      {
        title: 'Certification & career readiness',
        summary: 'Get CIS-CSM ready and interview-ready.',
        topics: ['CIS-CSM exam preparation', 'Capstone project', 'Resume and mock interviews'],
      },
    ],
    tools: [
      'ServiceNow CSM',
      'Field Service Management',
      'Sales and Order Management',
      'Configurable Workspace',
      'Advanced Work Assignment',
      'Playbooks',
      'Customer service portal',
      'Virtual Agent',
      'Now Assist',
      'Flow Designer',
    ],
    projects: [
      {
        title: 'B2B support desk',
        text: 'Accounts, entitlements and SLAs for a company that sells to businesses, with a portal for its customers.',
        stack: ['CSM', 'Entitlements', 'Portal'],
      },
      {
        title: 'Field service dispatch',
        text: 'Work orders scheduled and dispatched to technicians, with parts used and customer sign-off.',
        stack: ['FSM', 'Dispatch', 'Mobile'],
      },
      {
        title: 'AI-assisted agent workspace',
        text: 'An agent workspace with work routed by skill and Now Assist case summaries.',
        stack: ['Workspace', 'AWA', 'Now Assist'],
      },
    ],
    certifications: [
      {
        name: 'ServiceNow Certified Implementation Specialist – Customer Service Management (CIS-CSM)',
        note: 'Covered by the customer service modules, with exam practice in the final module.',
      },
    ],
    roles: [
      { title: 'CSM Consultant', text: 'Implement customer service solutions for clients.' },
      { title: 'ServiceNow CRM Developer', text: 'Build and customise CSM and FSM applications.' },
      { title: 'Field Service Analyst', text: 'Configure and improve field service operations.' },
      {
        title: 'Customer Service Platform Admin',
        text: 'Run customer service on ServiceNow for a business.',
      },
    ],
    faqs: [
      {
        q: 'Is ServiceNow CRM the same as Salesforce?',
        a: 'No. Both are CRM platforms. ServiceNow’s strength is connecting customer service with the teams that fix the underlying issue, such as IT, field service and operations.',
      },
      { q: 'Do I need the CSA certification first?', a: NEEDS_CSA('CIS-CSM') },
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
