/**
 * ARA Solutions training programs: Salesforce, ServiceNow, AI & Machine Learning, Agentic AI,
 * Cybersecurity and Full Stack with AI. ServiceNow, Cybersecurity, AI & ML and Full Stack content
 * follows ARA's existing website.
 *
 * Fees, durations and batch dates are intentionally NOT listed: visitors are asked to speak
 * with an advisor. Add them to `details` once confirmed and they will appear on the page.
 */

export type ProgramSlug =
  'salesforce' | 'servicenow' | 'ai-ml' | 'agentic-ai' | 'cybersecurity' | 'full-stack-ai';

export type Module = {
  title: string;
  summary: string;
  topics: string[];
};

export type Program = {
  slug: ProgramSlug;
  family: 'Enterprise platforms' | 'AI' | 'Security' | 'Development';
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  accent: 'sky' | 'violet' | 'rose' | 'emerald' | 'amber' | 'indigo';
  level: string;
  prerequisites: string;
  /** Optional confirmed details. Leave undefined to show "Ask an advisor". */
  details?: { duration?: string; mode?: string; fees?: string; nextBatch?: string };
  /** Optional official product logo (path under /public) shown on the program card banner. */
  logo?: string;
  /** Optional photo (path under /public) shown as the program card banner. */
  image?: string;
  highlights: string[];
  audience: { title: string; text: string }[];
  outcomes: string[];
  modules: Module[];
  tools: string[];
  projects: { title: string; text: string; stack: string[] }[];
  certifications?: { name: string; note: string }[];
  roles: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const programs: Program[] = [
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
    level: 'Beginner to intermediate',
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
    name: 'ServiceNow Training & Placement',
    shortName: 'ServiceNow',
    tagline: 'From platform fundamentals to certified and job-ready on ServiceNow.',
    summary:
      'Learn the platform that runs IT, HR and customer service workflows at large enterprises: administration, ITSM, scripting and Now Assist AI, with structured preparation for the System Administrator certification.',
    accent: 'emerald',
    level: 'Beginner to intermediate',
    prerequisites: 'No prior ServiceNow experience needed. Basic IT and logical-thinking skills help.',
    highlights: ['Admin + Developer + ITSM', 'Now Assist AI', 'CSA certification prep'],
    audience: [
      {
        title: 'Graduates & freshers',
        text: 'Start a career on one of the most widely used enterprise platforms.',
      },
      {
        title: 'IT support professionals',
        text: 'Move from service desk and support roles into ServiceNow administration.',
      },
      { title: 'Developers', text: 'Specialise in building workflows and applications on the Now Platform.' },
    ],
    outcomes: [
      'Navigate and administer the Now Platform',
      'Configure Incident, Problem, Change, Request and Knowledge',
      'Write business rules, client scripts and script includes',
      'Build automations with Flow Designer and IntegrationHub',
      'Create Service Portal widgets',
      'Use Now Assist generative AI features',
      'Prepare for the Certified System Administrator (CSA) exam',
    ],
    modules: [
      {
        title: 'Platform fundamentals',
        summary: 'How the Now Platform works.',
        topics: [
          'Now Platform navigation and UI',
          'Users, groups and roles',
          'Tables, forms and lists',
          'Core admin concepts',
        ],
      },
      {
        title: 'ITSM modules',
        summary: 'The IT service management processes companies run on ServiceNow.',
        topics: [
          'Incident management',
          'Problem management',
          'Change management',
          'Request fulfilment',
          'Knowledge management',
        ],
      },
      {
        title: 'ITOM foundations',
        summary: 'Operations management on the platform.',
        topics: ['ITSM and ITOM core platform architecture', 'CMDB basics', 'Discovery concepts'],
      },
      {
        title: 'Workflow & scripting',
        summary: 'Customise the platform with code.',
        topics: ['Business rules', 'Client scripts', 'Script includes', 'Workflow design fundamentals'],
      },
      {
        title: 'Flow Designer & integrations',
        summary: 'Automate processes and connect systems.',
        topics: ['Flow Designer', 'IntegrationHub', 'Webhooks and REST'],
      },
      {
        title: 'Service Portal',
        summary: 'Self-service experiences for employees and customers.',
        topics: ['Service Portal configuration', 'Custom widget development'],
      },
      {
        title: 'Now Assist & AI layer',
        summary: 'ServiceNow’s built-in generative AI, now a standard expectation in job postings.',
        topics: ['Now Assist capabilities', 'AI in ITSM workflows', 'Responsible use of AI'],
      },
      {
        title: 'Certification & career readiness',
        summary: 'Get certified and interview-ready.',
        topics: [
          'Certified System Administrator (CSA) preparation',
          'Capstone project',
          'Resume and mock interviews',
        ],
      },
    ],
    tools: [
      'ServiceNow Now Platform',
      'ITSM',
      'ITOM',
      'CMDB',
      'Flow Designer',
      'IntegrationHub',
      'Service Portal',
      'JavaScript',
      'Now Assist',
    ],
    projects: [
      {
        title: 'IT service desk',
        text: 'Incident, request and knowledge workflows for an internal IT team, with SLAs and assignment rules.',
        stack: ['ITSM', 'SLAs', 'Business rules'],
      },
      {
        title: 'Employee onboarding flow',
        text: 'A Flow Designer process that provisions access and equipment when a new employee joins.',
        stack: ['Flow Designer', 'Catalog', 'Approvals'],
      },
      {
        title: 'Self-service portal widget',
        text: 'A custom Service Portal widget showing a user’s open requests and status.',
        stack: ['Service Portal', 'Widgets', 'Scripting'],
      },
    ],
    certifications: [
      {
        name: 'ServiceNow Certified System Administrator (CSA)',
        note: 'Structured preparation is part of the final module.',
      },
    ],
    roles: [
      { title: 'ServiceNow Administrator', text: 'Keep the platform running, secure and optimised.' },
      { title: 'ServiceNow Developer', text: 'Build and customise solutions that power digital workflows.' },
      { title: 'ITSM Business Analyst', text: 'Bridge business needs with ITSM solutions.' },
      { title: 'Implementation Consultant', text: 'Drive successful deployments and client outcomes.' },
      { title: 'ITOM Specialist', text: 'Manage and optimise IT operations.' },
    ],
    faqs: [
      {
        q: 'Do I need coding experience?',
        a: 'No. The program starts with platform administration. Scripting is introduced step by step later on.',
      },
      {
        q: 'Does the program cover the CSA certification?',
        a: 'Yes, it includes structured preparation for the ServiceNow Certified System Administrator exam. The exam itself is booked with ServiceNow.',
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
    level: 'Beginner to intermediate',
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
    level: 'Intermediate',
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
    level: 'Beginner to intermediate',
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
    level: 'Beginner to intermediate',
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

export const getProgram = (slug: string) => programs.find((program) => program.slug === slug);

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
