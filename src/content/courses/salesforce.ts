import type { Program } from '../programs';

export type SalesforceCourseSlug = 'salesforce-admin' | 'salesforce-fde' | 'salesforce-ba';

/** Shared by every Salesforce course page. */
const salesforce = {
  family: 'Enterprise platforms',
  accent: 'sky',
  logo: '/logos/programs/salesforce.svg',
  heroImage: '/images/programs/salesforce.jpg',
} as const;

export const salesforceCourses: Program<SalesforceCourseSlug>[] = [
  {
    ...salesforce,
    slug: 'salesforce-admin',
    name: 'Salesforce Administrator',
    shortName: 'Salesforce Admin',
    tagline: 'Configure, secure and automate Salesforce for the teams that use it every day.',
    summary:
      'Learn to run a Salesforce org: data model, security and sharing, Flow automation, Sales and Service Cloud, reports and dashboards, and Agentforce basics, with preparation for the Administrator and Platform App Builder certifications.',
    prerequisites: 'No prior Salesforce experience needed. Basic computer and logical-thinking skills help.',
    highlights: ['Admin + App Builder', 'Flow automation', 'Certification preparation'],
    audience: [
      { title: 'Graduates & freshers', text: 'Start a Salesforce career without coding.' },
      {
        title: 'Career switchers',
        text: 'Move from support, sales operations or testing roles into Salesforce.',
      },
      { title: 'Working professionals', text: 'Take over Salesforce administration in your team.' },
    ],
    outcomes: [
      'Set up an org: company settings, users and licences',
      'Design data models with objects, fields and relationships',
      'Secure data with profiles, permission sets and sharing rules',
      'Automate processes with Flow',
      'Configure Sales Cloud and Service Cloud',
      'Manage data with Data Import Wizard and Data Loader',
      'Build reports and dashboards',
      'Prepare for the Administrator and Platform App Builder exams',
    ],
    modules: [
      {
        title: 'Salesforce foundations',
        summary: 'How Salesforce works and how businesses use it.',
        topics: [
          'Clouds, editions and orgs',
          'Lightning Experience navigation',
          'Company settings',
          'Trailhead and practice orgs',
        ],
      },
      {
        title: 'Data model',
        summary: 'Shape the data a business runs on.',
        topics: [
          'Standard and custom objects',
          'Fields and field types',
          'Lookup and master-detail relationships',
          'Schema Builder',
        ],
      },
      {
        title: 'Users & security',
        summary: 'Control who sees what.',
        topics: [
          'Users and licences',
          'Profiles and permission sets',
          'Role hierarchy and sharing rules',
          'Field-level security',
        ],
      },
      {
        title: 'Automation with Flow',
        summary: 'Automate work without code.',
        topics: ['Record-triggered flows', 'Screen flows', 'Approval processes', 'Validation rules and formulas'],
      },
      {
        title: 'Sales & Service Cloud',
        summary: 'Set up the apps sales and support teams use.',
        topics: [
          'Leads, opportunities and forecasting',
          'Cases and queues',
          'Assignment and escalation rules',
          'Omni-Channel basics',
        ],
      },
      {
        title: 'Data & reporting',
        summary: 'Keep data clean and useful.',
        topics: ['Data Import Wizard and Data Loader', 'Duplicate management', 'Reports and dashboards', 'Custom report types'],
      },
      {
        title: 'User experience & AI',
        summary: 'Make Salesforce easy to use.',
        topics: ['Lightning App Builder', 'Dynamic Forms', 'AppExchange', 'Agentforce for admins'],
      },
      {
        title: 'Release & career readiness',
        summary: 'Ship changes safely and get certified.',
        topics: [
          'Sandboxes and change sets',
          'Administrator and App Builder exam preparation',
          'Capstone project',
          'Resume and mock interviews',
        ],
      },
    ],
    tools: [
      'Salesforce Platform',
      'Lightning Experience',
      'Sales Cloud',
      'Service Cloud',
      'Flow Builder',
      'Lightning App Builder',
      'Data Loader',
      'Reports & dashboards',
      'AppExchange',
      'Agentforce',
      'Trailhead',
    ],
    projects: [
      {
        title: 'Sales pipeline for a growing company',
        text: 'Leads, opportunities, a sales process and a forecast dashboard for a sales team.',
        stack: ['Sales Cloud', 'Reports', 'Dashboards'],
      },
      {
        title: 'Support desk with queues',
        text: 'Cases routed to the right queue, with escalation rules and an approval flow for refunds.',
        stack: ['Service Cloud', 'Flow', 'Approvals'],
      },
      {
        title: 'Secure data model',
        text: 'Custom objects for an admissions team, with roles, sharing rules and permission sets.',
        stack: ['Objects', 'Sharing', 'Permission sets'],
      },
    ],
    certifications: [
      {
        name: 'Salesforce Certified Administrator',
        note: 'Covered by the data, security, automation and reporting modules.',
      },
      {
        name: 'Salesforce Certified Platform App Builder',
        note: 'Covered by the data model, Flow and Lightning App Builder modules.',
      },
    ],
    roles: [
      { title: 'Salesforce Administrator', text: 'Configure, secure and maintain Salesforce orgs.' },
      { title: 'Salesforce Support Analyst', text: 'Help users and fix issues in the org.' },
      { title: 'CRM Analyst', text: 'Turn sales and service data into reports and improvements.' },
      { title: 'Junior Salesforce Consultant', text: 'Configure Salesforce for clients.' },
    ],
    faqs: [
      {
        q: 'Do I need coding experience?',
        a: 'No. Salesforce administration is configuration and no-code automation. If you want to code later, our full Salesforce program adds Apex and Lightning Web Components.',
      },
      {
        q: 'Can I practise on a real Salesforce org?',
        a: 'Yes. Salesforce offers free Developer Edition orgs and Trailhead Playgrounds, which you use throughout the course.',
      },
    ],
  },
  {
    ...salesforce,
    slug: 'salesforce-fde',
    name: 'Salesforce Forward Deployed Engineer (FDE)',
    shortName: 'Salesforce FDE',
    tagline: 'Design, build and launch Agentforce AI agents together with customer teams.',
    summary:
      'Train for the forward deployed engineer role on Salesforce: working with customer teams to design, build and launch Agentforce agents, grounded in Data Cloud and connected through Apex, Flow and APIs, from the first workshop to production.',
    prerequisites:
      'Programming experience and Salesforce basics recommended. Suits developers and experienced Salesforce professionals.',
    highlights: ['Agentforce agents', 'Data Cloud + Apex + APIs', 'Customer-facing delivery'],
    audience: [
      { title: 'Salesforce developers', text: 'Step up to customer-facing AI engineering.' },
      { title: 'Software engineers', text: 'Bring your engineering skills to enterprise AI on Salesforce.' },
      { title: 'Salesforce consultants', text: 'Add hands-on building to solution design.' },
    ],
    outcomes: [
      'Run discovery with customers and design agent use cases',
      'Build Agentforce agents with topics, instructions and actions',
      'Write custom actions with Apex and Flow',
      'Design prompt templates with Prompt Builder',
      'Ground agents in Data Cloud data',
      'Integrate external systems through APIs and MuleSoft',
      'Test agents and manage trust and safety',
      'Deploy with Salesforce CLI and DevOps practices',
    ],
    modules: [
      {
        title: 'The forward deployed role',
        summary: 'What forward deployed engineers do and how they work with customers.',
        topics: ['Discovery workshops', 'Agent use case design', 'Rapid prototyping', 'Working in customer teams'],
      },
      {
        title: 'Salesforce platform engineering',
        summary: 'The code and automation agents rely on.',
        topics: [
          'Apex classes and invocable methods',
          'Flow for agent actions',
          'Lightning Web Components',
          'Salesforce CLI and VS Code',
        ],
      },
      {
        title: 'Agentforce',
        summary: 'Build agents that work with CRM data.',
        topics: [
          'Agent Builder',
          'Topics and instructions',
          'Standard and custom actions',
          'Channels and handoff to people',
        ],
      },
      {
        title: 'Prompts & grounding',
        summary: 'Give agents the right context.',
        topics: [
          'Prompt Builder and prompt templates',
          'Grounding with CRM data',
          'Retrieval with Data Cloud',
          'Einstein Trust Layer',
        ],
      },
      {
        title: 'Data Cloud & integration',
        summary: 'Bring in the customer’s data.',
        topics: [
          'Data Cloud ingestion and data model',
          'Unified profiles',
          'REST APIs and named credentials',
          'MuleSoft overview',
        ],
      },
      {
        title: 'Testing, trust & deployment',
        summary: 'Take an agent to production.',
        topics: ['Agentforce Testing Center', 'Guardrails and monitoring', 'DevOps Center and sandboxes', 'Release planning'],
      },
      {
        title: 'Capstone & career readiness',
        summary: 'Build from a customer brief, then get interview-ready.',
        topics: [
          'End-to-end customer capstone',
          'Solution presentation',
          'Agentforce Specialist exam preparation',
          'Resume and mock interviews',
        ],
      },
    ],
    tools: [
      'Agentforce',
      'Agent Builder',
      'Prompt Builder',
      'Data Cloud',
      'Apex',
      'Flow',
      'Lightning Web Components',
      'Einstein Trust Layer',
      'MuleSoft',
      'Salesforce CLI',
      'DevOps Center',
      'VS Code',
    ],
    projects: [
      {
        title: 'Customer service agent',
        text: 'An Agentforce agent that answers order questions, updates cases and hands over to a person when needed.',
        stack: ['Agentforce', 'Flow', 'Service Cloud'],
      },
      {
        title: 'Sales assistant with custom actions',
        text: 'An agent that prepares account briefs and next steps, using Apex actions and grounded prompts.',
        stack: ['Apex', 'Prompt Builder', 'Data Cloud'],
      },
      {
        title: 'Customer pilot rollout',
        text: 'A pilot built from a customer brief, tested in Testing Center and deployed from a sandbox.',
        stack: ['Testing Center', 'DevOps Center', 'CLI'],
      },
    ],
    certifications: [
      {
        name: 'Salesforce Certified Agentforce Specialist',
        note: 'Covered by the Agentforce and prompts modules.',
      },
      {
        name: 'Salesforce Certified Platform Developer I',
        note: 'Covered by the platform engineering module.',
      },
      {
        name: 'Salesforce Certified Data Cloud Consultant',
        note: 'Covered by the Data Cloud & integration module.',
      },
    ],
    roles: [
      { title: 'Forward Deployed Engineer', text: 'Build and launch Agentforce solutions with customers.' },
      { title: 'Agentforce Developer', text: 'Design and build AI agents and their actions.' },
      { title: 'Salesforce AI Engineer', text: 'Bring generative AI into Salesforce solutions.' },
      {
        title: 'Technical Solution Consultant',
        text: 'Shape solutions with customers and prove them with prototypes.',
      },
    ],
    faqs: [
      {
        q: 'What does forward deployed mean?',
        a: 'A forward deployed engineer works directly with a customer’s team to build and launch a solution, rather than building in isolation from a backlog. Companies use the role to get customers live on AI agents such as Agentforce.',
      },
      {
        q: 'Is this course for beginners?',
        a: 'It is best for people who already code or know Salesforce. If you are new to Salesforce, start with Salesforce Admin; an advisor can suggest a path.',
      },
    ],
  },
  {
    ...salesforce,
    slug: 'salesforce-ba',
    name: 'Salesforce Business Analyst',
    shortName: 'Salesforce BA',
    tagline: 'Turn business needs into Salesforce solutions people actually use.',
    summary:
      'Learn the business analyst’s side of Salesforce projects: discovery, process mapping, user stories, fit-gap against Sales and Service Cloud, testing and adoption, with preparation for the Salesforce Business Analyst certification.',
    prerequisites: 'No coding needed. Experience in sales, service, operations or business roles helps.',
    highlights: ['Discovery & user stories', 'Sales & Service Cloud', 'BA certification prep'],
    audience: [
      { title: 'Business analysts', text: 'Specialise in Salesforce projects.' },
      { title: 'Sales & service professionals', text: 'Move from using Salesforce to shaping it.' },
      { title: 'Graduates', text: 'Start a Salesforce career on the business side, without coding.' },
    ],
    outcomes: [
      'Run stakeholder interviews and discovery workshops',
      'Map current and future processes',
      'Write user stories with acceptance criteria',
      'Do fit-gap analysis against standard Salesforce features',
      'Understand Sales Cloud and Service Cloud in depth',
      'Define reports and dashboards that measure success',
      'Plan user acceptance testing and adoption',
      'Prepare for the Salesforce Business Analyst exam',
    ],
    modules: [
      {
        title: 'BA on Salesforce projects',
        summary: 'The analyst’s role from discovery to go-live.',
        topics: [
          'Project roles and delivery methods',
          'Working with admins and developers',
          'Configuration versus code',
          'The Salesforce release cycle',
        ],
      },
      {
        title: 'Salesforce for analysts',
        summary: 'Know what Salesforce does out of the box.',
        topics: ['Objects and data model', 'Security and sharing basics', 'Flow from a BA’s view', 'AppExchange'],
      },
      {
        title: 'Discovery & process mapping',
        summary: 'Understand the business first.',
        topics: ['Stakeholder interviews', 'Current and future state', 'Process mapping', 'Capability mapping'],
      },
      {
        title: 'Requirements & user stories',
        summary: 'Capture what the business needs.',
        topics: [
          'User stories and acceptance criteria',
          'Backlog prioritisation',
          'Fit-gap analysis',
          'Requirement traceability',
        ],
      },
      {
        title: 'Sales & Service Cloud',
        summary: 'The products clients ask for most.',
        topics: ['Lead to cash', 'Case management', 'Service channels', 'Agentforce use cases'],
      },
      {
        title: 'Data, testing & adoption',
        summary: 'Prove it works and get people using it.',
        topics: ['Reports and dashboards', 'User acceptance testing', 'Training and change management', 'Adoption metrics'],
      },
      {
        title: 'Certification & career readiness',
        summary: 'Get certified and interview-ready.',
        topics: ['Business Analyst exam preparation', 'Capstone project', 'Resume and mock interviews'],
      },
    ],
    tools: [
      'Salesforce Platform',
      'Sales Cloud',
      'Service Cloud',
      'Flow Builder',
      'Reports & dashboards',
      'Agentforce',
      'Lucidchart',
      'Jira',
      'Confluence',
      'Excel',
    ],
    projects: [
      {
        title: 'Lead-to-cash redesign',
        text: 'Process maps, a fit-gap analysis and user stories for a sales team moving to Sales Cloud.',
        stack: ['Sales Cloud', 'Process maps', 'User stories'],
      },
      {
        title: 'Service process discovery',
        text: 'Stakeholder interviews and a future-state design for a support team, with acceptance criteria.',
        stack: ['Service Cloud', 'Discovery', 'Acceptance criteria'],
      },
      {
        title: 'Go-live readiness pack',
        text: 'UAT scripts, a training plan and an adoption dashboard for a Salesforce rollout.',
        stack: ['UAT', 'Training', 'Dashboards'],
      },
    ],
    certifications: [
      {
        name: 'Salesforce Certified Business Analyst',
        note: 'Covered across the course, with exam practice in the final module.',
      },
    ],
    roles: [
      { title: 'Salesforce Business Analyst', text: 'Gather requirements and design Salesforce solutions.' },
      { title: 'Salesforce Functional Consultant', text: 'Advise clients and configure Salesforce.' },
      { title: 'CRM Business Analyst', text: 'Improve sales and service processes with data.' },
      { title: 'Product Owner', text: 'Own the Salesforce backlog for a business.' },
    ],
    faqs: [
      {
        q: 'Do I need to code?',
        a: 'No. Business analysts work with requirements, processes and testing. Knowing what Salesforce does without code is part of the course.',
      },
      {
        q: 'How is this different from Salesforce Admin?',
        a: 'Admins configure the org. Business analysts work out what should be built and why, and check that it works for users. Many professionals learn both.',
      },
    ],
  },
];
