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
    // From the client's page document (Nov 2026), written for the keywords chosen on 26 Nov 2026: primary
    // "salesforce admin course in hyderabad"; secondary "salesforce administrator training", "salesforce
    // admin certification", "salesforce admin jobs for freshers". Hyderabad is the only location named.
    // Certification names follow Salesforce's 2025 renames: Administrator is now Platform Administrator and
    // Advanced Administrator is Platform Administrator II. Apex, LWC and "admin and developer" keywords
    // belong to the flagship Salesforce page.
    h1: 'Salesforce Admin Course in Hyderabad',
    tagline: 'Run Salesforce for a business: users, security, automation, reports and AI basics.',
    summary:
      'A Salesforce administrator keeps the CRM running for everyone in sales and service, from who sees which records to the reports leaders read every Monday. This Salesforce administrator training goes beyond fields and page layouts: you secure an org, automate processes with Flow, set up Sales Cloud and Service Cloud and build the dashboards managers use.',
    prerequisites: 'No prior Salesforce experience needed. Basic computer and logical-thinking skills help.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'No coding needed',
      location: 'Madhapur, Hyderabad',
    },
    highlights: ['Security & sharing', 'Flow automation', 'Platform Administrator exam prep'],
    about: {
      paragraphs: [
        'Our Salesforce admin course in Hyderabad prepares you for a common way into the Salesforce ecosystem: the administrator role. Salesforce administrators keep Salesforce working for sales and service teams. They manage users and access, automate processes, keep data clean and build the reports managers rely on.',
        'You learn through hands-on labs in your own free Salesforce Developer Edition org, from designing a data model to securing it, automating it with Flow and setting up Sales Cloud and Service Cloud. Classes are live and instructor-led, no coding is needed, and the course prepares you for the Salesforce Certified Platform Administrator exam, with Platform App Builder as a second exam.',
      ],
      whyTitle: 'Why learn Salesforce administration in 2026',
      why: [
        'No coding needed: a practical way into IT for graduates from any field.',
        'Companies that run on Salesforce need administrators to keep it secure, clean and useful.',
        'Platform Administrator is Salesforce’s core admin certification, and many admin job posts ask for it.',
      ],
    },
    audience: [
      {
        title: 'Freshers & graduates',
        text: 'Start an IT career on a widely used CRM, with no coding needed.',
      },
      {
        title: 'Sales, support & operations staff',
        text: 'Use your business knowledge to move into Salesforce roles.',
      },
      {
        title: 'IT support staff & testers',
        text: 'Move from using applications to configuring them.',
      },
    ],
    outcomes: [
      'Set up an org and find your way around Lightning Experience',
      'Design data models with objects, fields and relationships',
      'Control access with profiles, permission sets, roles and sharing rules',
      'Automate processes with record-triggered, screen and scheduled flows',
      'Configure sales and service processes in Sales Cloud and Service Cloud',
      'Import and clean data with Data Import Wizard and Data Loader',
      'Build the reports and dashboards managers use',
      'Move changes to production and prepare for the Platform Administrator exam',
    ],
    modules: [
      {
        title: 'Salesforce foundations',
        summary: 'What Salesforce is and how orgs are organised.',
        topics: [
          'CRM concepts and Salesforce clouds',
          'Orgs and editions',
          'Lightning Experience navigation',
          'Apps and tabs',
          'Trailhead and your Developer Edition org',
        ],
        lab: 'Create a Developer Edition org and build a simple app with tabs and a home page.',
      },
      {
        title: 'Data model',
        summary: 'Design how a business stores its data.',
        topics: [
          'Standard and custom objects',
          'Field types and formula fields',
          'Lookup and master-detail relationships',
          'Validation rules',
          'Record types and page layouts',
          'Schema Builder',
        ],
        lab: 'Build custom objects, lookup and master-detail relationships, and validation rules.',
      },
      {
        title: 'Users & security',
        summary: 'Control who can see and do what, at the org, object, field and record level.',
        topics: [
          'Users and licences',
          'Profiles and permission sets',
          'Roles and the role hierarchy',
          'Org-wide defaults and sharing rules',
          'Field-level security',
          'Login hours and IP restrictions',
        ],
        lab: 'Create users and control access with profiles, permission sets, roles and sharing rules.',
      },
      {
        title: 'Automation with Flow',
        summary: 'Replace manual work with Flow, without code.',
        topics: [
          'Record-triggered flows',
          'Screen flows',
          'Scheduled flows',
          'Approval processes',
          'Testing and debugging flows',
          'Flow error handling',
        ],
        lab: 'Build a record-triggered flow and an approval process.',
      },
      {
        title: 'Sales Cloud & Service Cloud',
        summary: 'Set up the apps sales and support teams use every day.',
        topics: [
          'Leads, accounts, contacts and opportunities',
          'Sales process and opportunity stages',
          'Web-to-lead and lead assignment rules',
          'Cases, queues and assignment rules',
          'Escalation rules and entitlements',
          'Email-to-case and web-to-case',
        ],
        lab: 'Configure a sales process, opportunity stages, case queues and escalation rules.',
      },
      {
        title: 'Data & reporting',
        summary: 'Keep data clean and turn it into reports managers use.',
        topics: [
          'Data Import Wizard and Data Loader',
          'Duplicate and matching rules',
          'Report types and reports',
          'Report formulas and bucket fields',
          'Dashboards and components',
          'Scheduling and sharing reports',
        ],
        lab: 'Import records with Data Loader and build a pipeline dashboard.',
      },
      {
        title: 'User experience & AI',
        summary: 'Make Salesforce easier to use, and set up Agentforce basics.',
        topics: [
          'Lightning App Builder',
          'Dynamic Forms and Dynamic Actions',
          'Quick actions',
          'Path and In-App Guidance',
          'AppExchange',
          'Agentforce and Einstein basics for admins',
        ],
        lab: 'Build a Lightning record page with Dynamic Forms and In-App Guidance.',
      },
      {
        title: 'Release & career readiness',
        summary: 'Move changes safely, then get ready for the exam and interviews.',
        topics: [
          'Sandboxes and change sets',
          'Release management basics',
          'Org health check',
          'Platform Administrator exam practice',
          'Salesforce admin interview questions',
          'Resume and Trailhead profile',
        ],
        lab: 'Move changes from a sandbox to production with a change set.',
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
      'Reports and dashboards',
      'AppExchange',
      'Agentforce',
      'Trailhead',
    ],
    skills: [
      'Salesforce org setup',
      'Data modelling',
      'Users, profiles and permission sets',
      'Sharing and record access',
      'Flow automation',
      'Sales Cloud configuration',
      'Service Cloud configuration',
      'Data import and cleaning',
      'Reports and dashboards',
      'Change sets and release basics',
    ],
    projects: [
      {
        title: 'Sales pipeline for a growing company',
        problem: 'Sales managers cannot see which deals are moving and which are stuck.',
        text: 'Configure leads, opportunities, a sales process and a pipeline dashboard.',
        result: 'A clear sales process and a pipeline dashboard managers use every week.',
        stack: ['Sales Cloud', 'Reports', 'Dashboards'],
      },
      {
        title: 'Support desk with queues',
        problem: 'Support requests arrive by email and get lost or answered late.',
        text: 'Set up cases, queues, assignment and escalation rules for a support team.',
        result: 'Every request becomes a case, reaches the right queue and escalates on time.',
        stack: ['Service Cloud', 'Flow'],
      },
      {
        title: 'Secure data model',
        problem: 'Sensitive data is visible to everyone in the company.',
        text: 'Design objects and relationships, and secure them with roles, sharing rules and field-level security.',
        result: 'Each team sees only the records and fields it needs.',
        stack: ['Schema Builder', 'Sharing rules', 'Field-level security'],
      },
    ],
    capstone:
      'Set up Salesforce for a sample company end to end: data model, security, Sales Cloud and Service Cloud processes, automation and dashboards, then present your org and release plan.',
    certificationIntro:
      'Salesforce runs its own certification exams. You book and pay for an exam through Trailhead with Pearson VUE, Salesforce’s exam provider, and sit it remotely or at a test centre; the exam fee is paid when you book. Platform Administrator and Platform App Builder need no other certification first, and Platform Administrator II needs Platform Administrator. Salesforce renamed its Administrator certification to Platform Administrator in 2025, and the exam now includes a section on Agentforce AI. Check the exam guide on Trailhead for the current rules before you book. This course prepares you for the Platform Administrator exam.',
    certifications: [
      {
        name: 'Salesforce Certified Platform Administrator',
        note: 'Prepared in this course, with exam practice in module 8. Formerly called Salesforce Certified Administrator. Shows you can configure and manage a Salesforce org.',
      },
      {
        name: 'Salesforce Certified Platform App Builder',
        note: 'A second exam. Its main topics, the data model, Flow, Lightning App Builder and deployment, are taught in modules 2, 4, 7 and 8. Shows you can build custom apps with clicks, not code.',
      },
      {
        name: 'Salesforce Certified Platform Administrator II',
        note: 'A next step for experienced admins, formerly called Advanced Administrator. You need the Platform Administrator certification first.',
      },
    ],
    roles: [
      {
        title: 'Salesforce Administrator',
        text: 'Manages users, security, automation and reports.',
        level: 'Fresher to mid',
      },
      {
        title: 'Salesforce Support Analyst',
        text: 'Resolves user issues and keeps the org healthy.',
        level: 'Fresher',
      },
      {
        title: 'CRM Analyst',
        text: 'Analyses CRM data and improves sales and service processes.',
        level: 'Fresher to mid',
      },
      {
        title: 'Junior Salesforce Consultant',
        text: 'Configures Salesforce for clients on projects.',
        level: 'Fresher to mid',
      },
      {
        title: 'Salesforce Business Analyst',
        text: 'Turns business needs into Salesforce requirements.',
        level: 'Mid',
      },
      {
        title: 'Salesforce Release Coordinator',
        text: 'Manages sandboxes, testing and deployments.',
        level: 'Mid',
      },
    ],
    careers: {
      salaries: [
        { role: 'Salesforce Administrator', experience: '1 to 6 years', pay: '₹2.5 L to ₹12 L' },
        { role: 'Senior Salesforce Administrator', experience: '3 to 9 years', pay: '₹5.1 L to ₹25 L' },
      ],
      salaryNote:
        'Annual salary ranges from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
      path: [
        { stage: 'Start (0 to 2 years)', roles: 'Salesforce Administrator, Support Analyst, CRM Analyst' },
        {
          stage: 'Grow (2 to 5 years)',
          roles: 'Senior Administrator, Salesforce Consultant, Business Analyst',
        },
        { stage: 'Lead (5+ years)', roles: 'Salesforce Lead, Solution Architect, CRM Manager' },
      ],
    },
    faqs: [
      {
        q: 'What does a Salesforce admin do?',
        a: 'A Salesforce admin adds users and manages access, builds automations with Flow, fixes data issues, creates reports and dashboards, and helps sales and service teams get more from Salesforce.',
      },
      {
        q: 'What is the Salesforce admin course syllabus?',
        a: 'Eight modules: Salesforce foundations, data model, users and security, automation with Flow, Sales Cloud and Service Cloud, data and reporting, user experience and AI, and release and career readiness. Every module has a hands-on lab.',
      },
      {
        q: 'Does Salesforce admin work require coding?',
        a: 'No. Admin work is done with clicks: settings, Flow and reports. Coding with Apex and Lightning Web Components is only needed if you move into development later.',
      },
      {
        q: 'Salesforce admin vs developer: what is the difference?',
        a: 'Admins configure Salesforce with clicks: users, security, objects, flows and reports. Developers write Apex and Lightning Web Components for needs that clicks cannot meet. Our Salesforce Admin & Developer with Agentforce program teaches both.',
      },
      {
        q: 'Which Salesforce admin certification does this course prepare me for?',
        a: 'The Salesforce Certified Platform Administrator exam, with Platform App Builder as a second exam. Module 8 has exam practice. You book and pay for the exam yourself through Trailhead with Pearson VUE, Salesforce’s exam provider.',
      },
      {
        q: 'What is the Salesforce admin certification called now?',
        a: 'Salesforce Certified Platform Administrator. Salesforce renamed it from Salesforce Certified Administrator in 2025, and Advanced Administrator became Platform Administrator II. The updated exam also has a section on Agentforce AI.',
      },
      {
        q: 'Can freshers get Salesforce admin jobs?',
        a: 'Yes. Entry roles such as Salesforce Administrator, Salesforce Support Analyst and CRM Analyst suit freshers who know the platform. The Platform Administrator certification and the projects you build in this course make your profile stronger.',
      },
      {
        q: 'Is Salesforce admin a good career?',
        a: 'Many companies run sales and service on Salesforce and need admins to keep it secure and useful. AmbitionBox lists Salesforce Administrator salaries of ₹2.5 L to ₹12 L a year in India for 1 to 6 years of experience (November 2026). From admin you can grow into consulting, business analysis or architecture.',
      },
      {
        q: 'Can I become a Salesforce admin without an IT background?',
        a: 'Yes. Many admins come from sales, operations or support roles, and the course starts from the basics.',
      },
      {
        q: 'What is Flow in Salesforce?',
        a: 'Flow is Salesforce’s main automation tool. Admins use Flow Builder to update records, send emails and run approvals without code. Module 4 covers record-triggered, screen and scheduled flows.',
      },
      {
        q: 'Can I practise on a real Salesforce org?',
        a: 'Yes. Salesforce offers free Developer Edition orgs and Trailhead Playgrounds, which you use for the labs. Developer Edition orgs have no sandboxes, so ask an advisor how the change set lab in module 8 runs for your batch.',
      },
      {
        q: 'Will I learn Agentforce in the Salesforce admin course?',
        a: 'Yes, the basics. Module 7 covers setting up Agentforce and Einstein features as an admin. Salesforce Admin & Developer with Agentforce goes deeper.',
      },
      {
        q: 'What can I learn after the Salesforce admin course?',
        a: 'Platform App Builder and Platform Administrator II, Salesforce development in our Salesforce Admin & Developer with Agentforce program, or the Salesforce Business Analyst course.',
      },
      {
        q: 'Are the Salesforce Admin classes live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Madhapur, Hyderabad.',
      },
      {
        q: 'How much is the Salesforce admin course fee in Hyderabad?',
        a: 'The Salesforce admin course cost depends on the batch and payment option. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Does the Salesforce Admin course include placement support?',
        a: 'Yes. It includes resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
      },
    ],
  },
  {
    ...salesforce,
    slug: 'salesforce-fde',
    name: 'Salesforce Forward Deployed Engineer (FDE)',
    shortName: 'Salesforce FDE',
    // From the client's page document (Nov 2026), written for the keywords chosen on 26 Nov 2026: primary
    // "agentforce training in hyderabad"; secondary "salesforce forward deployed engineer", "agentforce
    // specialist certification", "agentforce developer". Hyderabad is the only location named. Product names
    // follow Salesforce's current naming: Data Cloud is now Data 360, agents are built in the new Agentforce
    // Builder and topics are now called subagents. Platform Developer I is now Platform Developer, and Data
    // Cloud Consultant is now Data 360 Consultant. Salesforce's FDE Ready enablement is for partner
    // consultants only.
    h1: 'Agentforce Training in Hyderabad (Salesforce FDE)',
    tagline:
      'Build, ground and deploy Agentforce agents with customers, the way forward deployed engineers do.',
    summary:
      'A Salesforce forward deployed engineer works directly with customers to turn AI ideas into working Agentforce agents in their Salesforce org. This course goes past demos: your agent is grounded in real data, connected through Data 360 and Apex, tested for trust and rolled out as a customer pilot.',
    prerequisites:
      'Programming experience and Salesforce basics are recommended. The course suits developers and experienced Salesforce professionals.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'Coding required (Apex)',
      location: 'Madhapur, Hyderabad',
    },
    highlights: [
      'Agentforce Builder & Prompt Builder',
      'Data 360 & Apex actions',
      'Agentforce Specialist exam prep',
    ],
    about: {
      paragraphs: [
        'Our Agentforce training in Hyderabad is built around the Salesforce forward deployed engineer (FDE) role. It is for developers and experienced Salesforce professionals who want to build AI solutions with customers. Forward deployed engineers work side by side with a customer’s team to turn a business problem into a working Agentforce agent, fast.',
        'You run discovery, build agents in Agentforce Builder with custom Apex and Flow actions, ground prompts in real data, unify customer data in Data 360 (formerly Data Cloud) and test agents for trust before rollout. Classes are live and instructor-led, and the course ends with a customer-style pilot you plan, deploy and measure, plus preparation for the Agentforce Specialist exam.',
      ],
      whyTitle: 'Why learn Agentforce in 2026',
      why: [
        'Salesforce launched a Forward Deployed Engineer Partner Network in April 2026 to get more Agentforce agents into production.',
        'The FDE role combines coding, AI and customer work, so it rewards people who can do all three.',
        'It builds on the Salesforce or developer experience you already have.',
      ],
    },
    audience: [
      {
        title: 'Salesforce developers',
        text: 'Move into AI agent development, one of the newest Salesforce roles.',
      },
      {
        title: 'Experienced admins & consultants',
        text: 'Add hands-on Agentforce building to your design skills.',
      },
      {
        title: 'Software developers',
        text: 'Bring your coding skills to Agentforce and the Salesforce Platform.',
      },
    ],
    outcomes: [
      'Run customer discovery and scope an agent pilot with success metrics',
      'Write Apex and Flow actions that agents can call',
      'Build agents in Agentforce Builder with subagents, instructions and actions',
      'Create and test grounded prompt templates in Prompt Builder',
      'Ingest and unify customer data in Data 360',
      'Connect outside systems through MuleSoft and APIs',
      'Test agents and protect data with the Einstein Trust Layer',
      'Deploy with DevOps Center and the Salesforce CLI, then measure a pilot',
    ],
    modules: [
      {
        title: 'The forward deployed role',
        summary: 'How FDEs turn customer problems into working AI solutions, fast.',
        topics: [
          'What a forward deployed engineer does',
          'Customer discovery and use-case selection',
          'Scoping a pilot',
          'Success metrics',
          'Working with customer teams',
          'Writing a pilot proposal',
        ],
        lab: 'Run a mock discovery workshop and write a one-page pilot scope.',
      },
      {
        title: 'Salesforce platform engineering',
        summary: 'A refresher on the Apex, Flow and LWC skills agents depend on.',
        topics: [
          'Apex invocable actions',
          'Flow for agent actions',
          'Lightning Web Components basics',
          'Data model for agents',
          'Salesforce CLI and VS Code',
          'Error handling in actions',
        ],
        lab: 'Write an Apex invocable action and a flow that an agent can call.',
      },
      {
        title: 'Agentforce',
        summary: 'Build agents that answer questions and complete tasks.',
        topics: [
          'Agentforce and Agentforce Builder',
          'Subagents (formerly topics) and instructions',
          'Standard and custom actions',
          'Agent channels',
          'Agent personas and tone',
          'First tests in Agentforce Testing Center',
        ],
        lab: 'Build an agent with three subagents and test it in Agentforce Testing Center.',
      },
      {
        title: 'Prompts & grounding',
        summary: 'Good answers need good prompts and the right data.',
        topics: [
          'Prompt Builder templates',
          'Grounding with records and Flow',
          'Grounding with knowledge articles',
          'Prompt testing',
          'Reducing wrong answers',
          'Prompt versioning',
        ],
        lab: 'Create a grounded prompt template and compare answers with and without grounding.',
      },
      {
        title: 'Data 360 & integration',
        summary: 'Unify customer data and connect outside systems.',
        topics: [
          'Data 360 (formerly Data Cloud) data streams and ingestion',
          'Identity resolution and unified profiles',
          'Calculated insights',
          'Segments',
          'Retrieval from Data 360 for agents',
          'MuleSoft and API basics',
        ],
        lab: 'Ingest two data sources into Data 360 and build a unified profile.',
      },
      {
        title: 'Testing, trust & deployment',
        summary: 'Make agents safe and ready for production.',
        topics: [
          'Einstein Trust Layer',
          'Guardrails and data masking',
          'Agent testing and evaluation at scale',
          'DevOps Center and CLI deployment',
          'Monitoring agents in production',
          'Production readiness checklist',
        ],
        lab: 'Run agent test cases and add data masking through the Einstein Trust Layer.',
      },
      {
        title: 'Customer pilot',
        summary: 'Plan and run a pilot like a real customer engagement.',
        topics: [
          'Pilot planning',
          'Demo and feedback sessions',
          'Iterating on agents',
          'Measuring adoption, value and ROI',
          'Handover documentation',
        ],
        lab: 'Plan and demo a pilot, collect feedback and update the agent.',
      },
      {
        title: 'Capstone & career readiness',
        summary: 'Deliver a full agent solution, then get ready for the exam and interviews.',
        topics: [
          'Capstone delivery',
          'Presenting to stakeholders',
          'Agentforce Specialist exam practice',
          'Agentforce and FDE interview questions',
          'Portfolio and GitHub',
          'Mock interviews',
        ],
        lab: 'Deliver the capstone agent with documentation and a handover pack.',
      },
    ],
    tools: [
      'Agentforce',
      'Agentforce Builder',
      'Agentforce Testing Center',
      'Prompt Builder',
      'Data 360 (formerly Data Cloud)',
      'Apex',
      'Flow',
      'Lightning Web Components',
      'Einstein Trust Layer',
      'MuleSoft',
      'Salesforce CLI',
      'DevOps Center',
      'VS Code',
    ],
    skills: [
      'Customer discovery and scoping',
      'Agentforce agent design',
      'Custom Apex and Flow actions',
      'Prompt Builder and grounding',
      'Data 360 ingestion and unification',
      'Einstein Trust Layer',
      'Agent testing and evaluation',
      'DevOps Center and CLI deployment',
      'Pilot planning and measurement',
      'Stakeholder communication',
    ],
    projects: [
      {
        title: 'Customer service agent',
        problem: 'Customer service teams spend most of their time on repeat questions.',
        text: 'Build an agent that answers order questions and creates cases, grounded in knowledge articles.',
        result: 'The agent resolves routine questions and creates cases with full context for service reps.',
        stack: ['Agentforce', 'Prompt Builder'],
      },
      {
        title: 'Sales assistant with custom actions',
        problem: 'Sales reps spend time on admin instead of selling.',
        text: 'Build an agent that drafts emails and updates opportunities through Apex actions.',
        result: 'Reps get draft emails and updated opportunities without the manual admin.',
        stack: ['Agentforce', 'Apex'],
      },
      {
        title: 'Customer pilot rollout',
        problem: 'Leaders want proof that AI agents work before a full rollout.',
        text: 'Plan, deploy and measure an agent pilot that uses Data 360 data.',
        result: 'A measured pilot with adoption and value results, ready for a go or no-go decision.',
        stack: ['Data 360', 'DevOps Center'],
      },
    ],
    capstone:
      'Run a full forward deployed engagement for a sample customer: discovery, agent design, grounding with Data 360, custom actions, trust testing and a measured pilot, presented to a mock leadership team.',
    certificationIntro:
      'Salesforce runs its own certification exams. You book and pay for an exam through Trailhead with Pearson VUE, Salesforce’s exam provider, and sit it remotely or at a test centre. None of the exams below needs another certification first. Salesforce has no public certification for forward deployed engineers: its Agentforce FDE Ready enablement is for consultants at Salesforce partner firms, and it lists the Agentforce Specialist and Data 360 Consultant certifications among its prerequisites. Check each exam guide on Trailhead before you book. This course prepares you for the Agentforce Specialist exam.',
    certifications: [
      {
        name: 'Salesforce Certified Agentforce Specialist',
        note: 'Prepared in this course, with exam practice in module 8. Shows you can configure and manage Agentforce. Trailhead’s free Agentblazer Status trail is Salesforce’s suggested preparation.',
      },
      {
        name: 'Salesforce Certified Data 360 Consultant',
        note: 'Formerly Data Cloud Consultant. Module 5 covers ingestion, identity resolution, calculated insights and segments. Salesforce describes certified consultants as having experience implementing enterprise data platforms for customers, so plan extra practice.',
      },
      {
        name: 'Salesforce Certified Platform Developer',
        note: 'Formerly Platform Developer I. Module 2 refreshes the Apex, Flow and LWC skills it tests, but the exam goes deeper; our Salesforce Admin & Developer with Agentforce program prepares you for it.',
      },
    ],
    roles: [
      {
        title: 'Forward Deployed Engineer',
        text: 'Builds AI solutions directly with customers.',
        level: 'Experienced',
      },
      { title: 'Agentforce Developer', text: 'Builds agents, actions and prompts.', level: 'Mid' },
      {
        title: 'Salesforce AI Engineer',
        text: 'Designs and builds AI features on Salesforce.',
        level: 'Mid to senior',
      },
      {
        title: 'Technical Solution Consultant',
        text: 'Designs technical solutions in pre-sales and delivery.',
        level: 'Mid',
      },
      {
        title: 'Data 360 (Data Cloud) Developer',
        text: 'Builds data streams, unification and insights.',
        level: 'Mid',
      },
      {
        title: 'Salesforce Solution Engineer',
        text: 'Demos and prototypes solutions for customers.',
        level: 'Mid',
      },
    ],
    careers: {
      salaries: [
        { role: 'Salesforce Engineer / Developer', experience: '1 to 6 years', pay: '₹3 L to ₹23.2 L' },
        { role: 'Salesforce Architect', experience: '8 to 18 years', pay: '₹19.9 L to ₹63 L' },
      ],
      salaryNote:
        'Annual salary ranges for Salesforce developers and architects in general, not forward deployed or Agentforce roles specifically, from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
      path: [
        { stage: 'Entry (with developer experience)', roles: 'Agentforce Developer, Salesforce AI Engineer' },
        { stage: 'Grow (2 to 5 years)', roles: 'Forward Deployed Engineer, Solution Engineer' },
        { stage: 'Lead (5+ years)', roles: 'AI Solution Architect, Technical Architect' },
      ],
    },
    faqs: [
      {
        q: 'What does forward deployed mean?',
        a: 'A forward deployed engineer works directly with a customer’s team, often on site, to build and launch a solution quickly, rather than working only on internal products. At Salesforce, FDEs design, build and deploy Agentforce agents with customers, from the first use case to a live agent.',
      },
      {
        q: 'Who is this Agentforce training for?',
        a: 'Developers and experienced Salesforce professionals. It is not a first Salesforce course: if you are new, start with Salesforce Admin, or with Salesforce Admin & Developer with Agentforce, which builds core Salesforce skills from the start. An advisor can suggest a path.',
      },
      {
        q: 'What is Agentforce in Salesforce?',
        a: 'Agentforce is Salesforce’s platform for building AI agents that answer questions and take actions using company data, such as updating records or creating cases. Agents are built in Agentforce Builder and protected by the Einstein Trust Layer.',
      },
      {
        q: 'What is Agentforce Builder?',
        a: 'Salesforce’s workspace for building agents, part of Agentforce Studio. You set up subagents (formerly called topics), instructions and actions, then preview and test the agent. Since July 2026, new agents can be created only in the new Agentforce Builder.',
      },
      {
        q: 'What does an Agentforce developer do?',
        a: 'Builds the actions, prompts and data connections that agents use: Apex and Flow actions, Prompt Builder templates and grounding in Data 360. Then tests the agent and deploys it. Most Agentforce developer roles ask for some Salesforce development experience.',
      },
      {
        q: 'Does this course prepare me for the Agentforce Specialist certification?',
        a: 'Yes. Modules 3, 4 and 6 cover the Agentforce topics, and module 8 has exam practice. The exam needs no other certification first. You book and pay for it yourself through Trailhead with Pearson VUE.',
      },
      {
        q: 'Is there a Salesforce FDE certification?',
        a: 'Not a public one. Salesforce’s Agentforce FDE Ready enablement is for consultants at Salesforce partner firms, and it lists the Agentforce Specialist and Data 360 Consultant certifications among its prerequisites. This course prepares you for Agentforce Specialist and teaches the Data 360 skills.',
      },
      {
        q: 'Does the course include Salesforce Data Cloud training?',
        a: 'Yes. Module 5 covers Data 360, Salesforce’s new name for Data Cloud since October 2025: data streams, identity resolution, unified profiles, calculated insights, segments and how agents retrieve that data. No previous Data Cloud experience is needed.',
      },
      {
        q: 'What is grounding in Agentforce?',
        a: 'Grounding gives the AI model the right company data, such as records or knowledge articles, so its answers are accurate and specific. In module 4 you compare answers with and without grounding.',
      },
      {
        q: 'What is the Einstein Trust Layer?',
        a: 'Salesforce’s set of safety features, such as data masking and toxicity checks, that protect company data when agents and prompts use generative AI. Module 6 covers it.',
      },
      {
        q: 'Do I need to know Apex for the FDE course?',
        a: 'Yes, basic Apex helps. Module 2 refreshes the Apex and Flow skills that agent actions need.',
      },
      {
        q: 'What Agentforce interview questions should I prepare for?',
        a: 'Expect questions on subagents, instructions and actions, custom Apex and Flow actions, Prompt Builder and grounding, Data 360, the Einstein Trust Layer and testing, often as a customer scenario. Module 8 covers them and ends with mock interviews.',
      },
      {
        q: 'Can I practise Agentforce and Data 360 on a free org?',
        a: 'Yes, within limits. Salesforce’s free Developer Edition includes Agentforce and Data 360, with usage limits. Ask an advisor how the labs run for your batch.',
      },
      {
        q: 'Are the Salesforce FDE classes live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Madhapur, Hyderabad.',
      },
      {
        q: 'What is the Salesforce forward deployed engineer course fee?',
        a: 'Fees depend on the batch. Call or WhatsApp +91 90100 09225 for the current fees and the next batch date.',
      },
      {
        q: 'Does the Salesforce FDE course include placement support?',
        a: 'Yes. It includes resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
      },
    ],
  },
  {
    ...salesforce,
    slug: 'salesforce-ba',
    name: 'Salesforce Business Analyst',
    shortName: 'Salesforce BA',
    // From the client's page document (Nov 2026), written for the keywords chosen on 26 Nov 2026: primary
    // "salesforce business analyst course"; secondary "salesforce business analyst certification",
    // "salesforce business analyst jobs in hyderabad", "salesforce functional consultant". Hyderabad is the
    // only location named. Generic business analyst keywords belong to Business Analyst with GenAI. The
    // Salesforce Certified Business Analyst exam has no prerequisite certification; Salesforce designs it for
    // people with two years of BA and two years of Salesforce Platform experience.
    h1: 'Salesforce Business Analyst Course in Hyderabad',
    tagline: 'Turn business needs into Salesforce solutions: discovery, user stories, testing and adoption.',
    summary:
      'A Salesforce business analyst is the bridge between the business and the Salesforce team, deciding what gets built and why. In this course you run discovery for a real Salesforce process, write user stories a developer can build from and take a release through testing and user adoption.',
    prerequisites: 'No coding needed. Experience in sales, service, operations or business roles helps.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'No coding needed',
      location: 'Madhapur, Hyderabad',
    },
    highlights: ['Discovery & process mapping', 'User stories & UAT', 'Business Analyst exam prep'],
    about: {
      paragraphs: [
        'Our Salesforce Business Analyst course in Hyderabad prepares you to lead the business side of Salesforce projects. Business analysts work out what a business really needs, map it to Salesforce features and make sure the delivered solution is tested and adopted by users.',
        'You learn to run discovery workshops, map processes, write user stories with acceptance criteria, prototype in a Salesforce org and plan UAT and go-live. Classes are live and instructor-led, and the course prepares you for the Salesforce Certified Business Analyst exam while you build a portfolio of BA documents to show in interviews.',
      ],
      whyTitle: 'Why learn Salesforce business analysis in 2026',
      why: [
        'Salesforce projects of every size need someone to work out what to build and why.',
        'It uses business skills, not code: a good fit for MBA, BBA, BCom and operations professionals.',
        'A path into consulting: BAs often grow into functional consultant and product owner roles.',
      ],
    },
    audience: [
      {
        title: 'Business & operations professionals',
        text: 'Use your process knowledge to move into Salesforce projects.',
      },
      {
        title: 'Salesforce admins',
        text: 'Add analysis and requirements skills to grow into consultant roles.',
      },
      {
        title: 'Fresh graduates (MBA, BBA, BCom)',
        text: 'Start a CRM career that uses business skills, not coding.',
      },
    ],
    outcomes: [
      'Explain how Salesforce projects run and where the BA fits',
      'Prototype requirements with objects, fields and simple flows',
      'Run discovery workshops and stakeholder interviews',
      'Map as-is and to-be processes in Lucidchart',
      'Write user stories with acceptance criteria and manage a backlog in Jira',
      'Map lead-to-cash and case management to Sales Cloud and Service Cloud',
      'Plan data migration, UAT and user training for go-live',
      'Use AI to speed up analysis, and spot Agentforce opportunities',
    ],
    modules: [
      {
        title: 'BA on Salesforce projects',
        summary: 'How a Salesforce project runs and where the BA fits.',
        topics: [
          'Role of a Salesforce BA',
          'Agile delivery on Salesforce projects',
          'Implementation lifecycle',
          'Stakeholders and the project team',
          'Working with architects and developers',
          'BA deliverables',
        ],
        lab: 'Map the roles on a sample Salesforce project and write a BA plan.',
      },
      {
        title: 'Salesforce for analysts',
        summary: 'Enough Salesforce to design realistic solutions and prototype them.',
        topics: [
          'Objects, fields and relationships',
          'Security basics',
          'Flow basics',
          'Reports and dashboards for validating requirements',
          'Prototyping in a Developer Edition org',
        ],
        lab: 'Build objects, fields and a simple flow to prototype a requirement.',
      },
      {
        title: 'Discovery & process mapping',
        summary: 'Run discovery the way consultants do.',
        topics: [
          'Discovery workshops and facilitation',
          'Stakeholder interviews',
          'As-is and to-be process maps',
          'Pain points and opportunities',
          'Process models in Lucidchart',
        ],
        lab: 'Run a mock discovery interview and draw the as-is process.',
      },
      {
        title: 'Requirements & user stories',
        summary: 'Turn findings into requirements the team can build.',
        topics: [
          'Requirement types',
          'User stories and acceptance criteria',
          'Non-functional requirements',
          'Backlog prioritisation',
          'Jira and Confluence',
          'Traceability',
        ],
        lab: 'Write 10 user stories with acceptance criteria in Jira.',
      },
      {
        title: 'Sales Cloud & Service Cloud',
        summary: 'The processes Salesforce BAs work on most.',
        topics: [
          'Lead-to-cash process',
          'Opportunity management',
          'Case management and queues',
          'Service processes and SLAs',
          'Agentforce use cases',
        ],
        lab: 'Map a lead-to-cash process to Sales Cloud features.',
      },
      {
        title: 'Data, testing & adoption',
        summary: 'Make sure releases work and get used.',
        topics: [
          'Data mapping and migration',
          'Test scenarios and UAT',
          'Defect tracking',
          'Release notes',
          'Training and change management',
          'Adoption dashboards',
        ],
        lab: 'Write UAT scripts and log defects for a release.',
      },
      {
        title: 'AI for business analysts',
        summary: 'Use generative AI to speed up analysis, and check its work.',
        topics: [
          'Prompting for analysis',
          'AI for interview summaries',
          'Drafting user stories with AI',
          'Reviewing AI output',
          'Responsible use of AI',
          'Spotting Agentforce opportunities',
        ],
        lab: 'Use AI to summarise an interview and review the output for accuracy.',
      },
      {
        title: 'Certification & career readiness',
        summary: 'Prepare for the Business Analyst exam and interviews.',
        topics: [
          'Business Analyst exam practice',
          'Portfolio of BA artefacts',
          'Salesforce BA case-study interviews',
          'Interview storytelling',
          'Resume and LinkedIn',
          'Mock interviews',
        ],
        lab: 'Assemble a portfolio of your BA artefacts.',
      },
    ],
    tools: [
      'Salesforce Platform',
      'Sales Cloud',
      'Service Cloud',
      'Flow Builder',
      'Reports and dashboards',
      'Agentforce',
      'Lucidchart',
      'Jira',
      'Confluence',
      'Excel',
    ],
    skills: [
      'Stakeholder interviews',
      'Discovery workshops',
      'Process mapping',
      'User stories and acceptance criteria',
      'Backlog prioritisation',
      'Salesforce prototyping',
      'Sales and Service Cloud processes',
      'UAT planning',
      'Change management',
      'AI-assisted analysis',
    ],
    projects: [
      {
        title: 'Lead-to-cash redesign',
        problem: 'A sales team runs on spreadsheets and email, and leadership cannot forecast.',
        text: 'Map the current sales process, design the future one and write the user stories.',
        result: 'A future-state lead-to-cash design with user stories ready for the build team.',
        stack: ['Lucidchart', 'Jira', 'Sales Cloud'],
      },
      {
        title: 'Service process discovery',
        problem: 'A support team is overloaded and cannot measure service quality.',
        text: 'Run discovery for the support team and propose a Service Cloud design.',
        result: 'A Service Cloud design with clear processes, SLAs and reporting needs.',
        stack: ['Service Cloud', 'Confluence'],
      },
      {
        title: 'Go-live readiness pack',
        problem: 'A release is about to go live without testing or user training.',
        text: 'Prepare UAT scripts, a data migration plan and user training.',
        result: 'A go-live pack: UAT scripts, a data migration plan and a training plan.',
        stack: ['Excel', 'Jira'],
      },
    ],
    capstone:
      'Act as the BA on a Salesforce rollout for a sample company: run discovery, map processes, write the backlog, prototype key screens and prepare the UAT and training plan.',
    certificationIntro:
      'Salesforce runs its own certification exams. You book and pay for an exam through Trailhead with Pearson VUE, Salesforce’s exam provider, and sit it remotely or at a test centre. The Business Analyst exam needs no other certification first, but Salesforce designs it for people with about two years of business analyst experience and two years of Salesforce Platform experience, so freshers should plan extra practice. IIBA certificates are booked with IIBA. Check the exam guide on Trailhead before you book. This course prepares you for the Salesforce Certified Business Analyst exam.',
    certifications: [
      {
        name: 'Salesforce Certified Business Analyst',
        note: 'Prepared in this course, with exam practice in module 8. The syllabus follows the exam’s areas: customer discovery, collaboration with stakeholders, process mapping, requirements, user stories and user acceptance.',
      },
      {
        name: 'Salesforce Certified Platform Administrator',
        note: 'A next step if you also want to configure Salesforce. Our Salesforce Admin course prepares you for it.',
      },
      {
        name: 'IIBA Entry Certificate in Business Analysis (ECBA)',
        note: 'A general business analysis certificate from IIBA, not Salesforce. IIBA asks for no prior experience or training hours. A next step if you want BA credentials beyond Salesforce.',
      },
    ],
    roles: [
      {
        title: 'Salesforce Business Analyst',
        text: 'Gathers requirements and designs Salesforce solutions.',
        level: 'Fresher to mid',
      },
      {
        title: 'Salesforce Functional Consultant',
        text: 'Configures Salesforce to meet client needs.',
        level: 'Mid',
      },
      { title: 'CRM Business Analyst', text: 'Improves CRM processes and data.', level: 'Fresher to mid' },
      {
        title: 'Product Owner',
        text: 'Owns the backlog and priorities for a Salesforce team.',
        level: 'Mid',
      },
      {
        title: 'Salesforce Implementation Consultant',
        text: 'Leads design and rollout for clients.',
        level: 'Mid to senior',
      },
      { title: 'UAT Analyst', text: 'Plans and runs user acceptance testing.', level: 'Fresher to mid' },
    ],
    careers: {
      salaries: [
        { role: 'Business Analyst', experience: '1+ years', pay: '₹3 L to ₹17 L' },
        { role: 'IT Business Analyst', experience: 'Varies', pay: '₹3 L to ₹19 L' },
      ],
      salaryNote:
        'Annual salary ranges for business analysts in general, not Salesforce BAs specifically, from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
      path: [
        { stage: 'Start (0 to 2 years)', roles: 'Salesforce Business Analyst, UAT Analyst, CRM Analyst' },
        { stage: 'Grow (2 to 5 years)', roles: 'Functional Consultant, Product Owner' },
        { stage: 'Lead (5+ years)', roles: 'Implementation Lead, Salesforce Solution Consultant' },
      ],
    },
    faqs: [
      {
        q: 'What does a Salesforce business analyst do?',
        a: 'A Salesforce BA works out what the business needs. They run discovery workshops and interviews, map current and future processes, write user stories with acceptance criteria, and check through UAT that the delivered solution works for users.',
      },
      {
        q: 'Who should join this Salesforce business analyst course?',
        a: 'Business and operations professionals, Salesforce admins who want to move into consulting, and MBA, BBA or BCom graduates. No coding is needed, and experience in sales, service or operations helps.',
      },
      {
        q: 'Does a Salesforce business analyst role require coding?',
        a: 'No. BA work is about understanding the business, writing requirements and testing. You learn enough Salesforce configuration, such as objects, fields and simple flows, to prototype ideas.',
      },
      {
        q: 'Salesforce business analyst vs administrator: what is the difference?',
        a: 'Administrators configure and run the org. Business analysts decide what should be built and why, then check that it works for users. Many professionals learn both, and our Salesforce Admin course covers the admin side.',
      },
      {
        q: 'Is there a Salesforce business analyst certification?',
        a: 'Yes: Salesforce Certified Business Analyst. It tests customer discovery, collaboration with stakeholders, process mapping, requirements, user stories and user acceptance. It needs no other certification first, and you book and pay for it yourself through Trailhead with Pearson VUE.',
      },
      {
        q: 'Is the Salesforce Business Analyst exam hard?',
        a: 'It tests real BA scenarios on Salesforce projects, and Salesforce designs it for people with about two years of BA experience and two years of Salesforce experience. The course includes practice questions for every exam area, but freshers should expect to study beyond the classes.',
      },
      {
        q: 'What do Salesforce user stories look like?',
        a: 'A user story says who needs what and why, for example: “As a sales manager, I want overdue opportunities flagged so that I can follow up before the quarter ends.” Acceptance criteria then say when it is done. In module 4 you write 10 user stories in Jira.',
      },
      {
        q: 'What is UAT on a Salesforce project?',
        a: 'User acceptance testing: real users test a release to confirm it meets their needs before go-live. Module 6 covers test scenarios, UAT scripts and defect tracking.',
      },
      {
        q: 'Can this course lead to a Salesforce functional consultant role?',
        a: 'Yes, with experience. A Salesforce functional consultant configures Salesforce to meet client needs, and BAs often move into the role after two to five years on projects, especially if they also learn administration.',
      },
      {
        q: 'Are there Salesforce business analyst jobs in Hyderabad?',
        a: 'Yes. IT services firms and consultancies in Hyderabad post Salesforce business analyst roles. Entry roles include Salesforce Business Analyst, CRM Business Analyst and UAT Analyst.',
      },
      {
        q: 'What Salesforce business analyst interview questions should I prepare for?',
        a: 'Expect questions on discovery, process mapping, user stories and acceptance criteria, Sales Cloud and Service Cloud processes and UAT, often as a case study. Module 8 covers them and ends with mock interviews and your BA portfolio.',
      },
      {
        q: 'Is Salesforce business analyst a good career?',
        a: 'It suits people who like solving business problems without coding. Salesforce projects need analysts to decide what to build, and BAs can grow into functional consultant, product owner and implementation lead roles. AmbitionBox lists general business analyst salaries of ₹3 L to ₹17 L a year in India (November 2026).',
      },
      {
        q: 'Will I learn AI in the Salesforce BA course?',
        a: 'Yes. In module 7 you use AI to summarise interviews and draft user stories, learn to check its output, and practise spotting Agentforce opportunities for clients.',
      },
      {
        q: 'Are the Salesforce BA classes live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Madhapur, Hyderabad.',
      },
      {
        q: 'What is the Salesforce Business Analyst course fee in Hyderabad?',
        a: 'Fees depend on the batch. Call or WhatsApp +91 90100 09225 for the current fees and the next batch date.',
      },
      {
        q: 'Does the Salesforce Business Analyst course include placement support?',
        a: 'Yes. It includes resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
      },
    ],
  },
];
