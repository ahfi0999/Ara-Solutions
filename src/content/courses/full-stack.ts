import type { Program } from '../programs';

export type FullStackCourseSlug = 'python-full-stack' | 'java-full-stack' | 'business-analyst-genai';

/** Shared by the two developer courses in the Full Stack with AI track. */
const developer = {
  family: 'Development',
  accent: 'indigo',
  heroImage: '/images/programs/full-stack-ai.jpg',
  prerequisites:
    'No prior coding experience needed. Logical thinking and regular practice matter more than a background in programming.',
} as const;

export const fullStackCourses: Program<FullStackCourseSlug>[] = [
  {
    ...developer,
    slug: 'python-full-stack',
    name: 'Python Full Stack with AI',
    shortName: 'Python Full Stack',
    tagline: 'Build complete web apps with React, Python and Django, with AI features built in.',
    summary:
      'Learn to build and deploy complete web applications: HTML, CSS, JavaScript and React on the front end, Python with Django and FastAPI on the back end, PostgreSQL databases, and AI features using LLM APIs, with AI coding assistants used throughout.',
    highlights: ['React + Django + FastAPI', 'AI-powered features', 'Deployed projects'],
    audience: [
      { title: 'Graduates & freshers', text: 'Start a career as a full stack developer.' },
      { title: 'Career switchers', text: 'Move into software development from another field.' },
      { title: 'Developers', text: 'Add Python back ends and AI features to your skills.' },
    ],
    outcomes: [
      'Build responsive pages with HTML, CSS and Tailwind',
      'Write modern JavaScript and React',
      'Program in Python, from the basics to object-oriented code',
      'Build web apps and REST APIs with Django and FastAPI',
      'Design PostgreSQL databases and use an ORM',
      'Add logins, roles and security',
      'Add AI features with LLM APIs and RAG',
      'Test, containerise and deploy applications',
    ],
    modules: [
      {
        title: 'Web foundations',
        summary: 'How the web works.',
        topics: ['HTML and CSS', 'Responsive design and Tailwind CSS', 'JavaScript essentials', 'Git and GitHub'],
      },
      {
        title: 'Python programming',
        summary: 'The back-end language.',
        topics: ['Python fundamentals', 'Functions and modules', 'Object-oriented programming', 'Files and APIs'],
      },
      {
        title: 'Front end with React',
        summary: 'Interfaces people enjoy using.',
        topics: ['Components and props', 'State and hooks', 'Routing', 'Calling APIs'],
      },
      {
        title: 'Back end with Django',
        summary: 'Complete web apps, fast.',
        topics: ['Models, views and templates', 'Django ORM', 'Django REST Framework', 'Authentication'],
      },
      {
        title: 'APIs with FastAPI',
        summary: 'Modern, fast APIs.',
        topics: ['FastAPI basics', 'Validation with Pydantic', 'Async endpoints', 'API documentation'],
      },
      {
        title: 'Databases',
        summary: 'Store data properly.',
        topics: ['SQL and PostgreSQL', 'Database design', 'Migrations', 'Caching with Redis'],
      },
      {
        title: 'AI in your apps',
        summary: 'Build features with AI.',
        topics: ['LLM APIs', 'Prompt design', 'Retrieval-augmented generation (RAG)', 'AI coding assistants'],
      },
      {
        title: 'Testing, deployment & career readiness',
        summary: 'Ship it and get interview-ready.',
        topics: ['Testing with pytest', 'Docker', 'Cloud deployment and CI/CD', 'Capstone, resume and mock interviews'],
      },
    ],
    tools: [
      'HTML & CSS',
      'Tailwind CSS',
      'JavaScript',
      'React',
      'Python',
      'Django',
      'Django REST Framework',
      'FastAPI',
      'PostgreSQL',
      'Docker',
      'Git & GitHub',
      'GitHub Copilot',
      'LLM APIs',
    ],
    projects: [
      {
        title: 'Job portal',
        text: 'A job board with employer and candidate logins, search and applications, built with Django and React.',
        stack: ['Django', 'React', 'PostgreSQL'],
      },
      {
        title: 'AI document assistant',
        text: 'An app that answers questions about uploaded documents using retrieval-augmented generation.',
        stack: ['FastAPI', 'LLM API', 'RAG'],
      },
      {
        title: 'Deployed SaaS dashboard',
        text: 'A multi-user dashboard with REST APIs, tests and automatic deployment to the cloud.',
        stack: ['DRF', 'Docker', 'CI/CD'],
      },
    ],
    roles: [
      { title: 'Python Full Stack Developer', text: 'Build complete web applications.' },
      { title: 'Python Developer', text: 'Build back ends and APIs with Django and FastAPI.' },
      { title: 'Front-end Developer', text: 'Build interfaces with React.' },
      { title: 'AI Application Developer', text: 'Add AI features to products.' },
    ],
    faqs: [
      {
        q: 'Python or Java full stack: which should I choose?',
        a: 'Both lead to strong careers. Python is quicker to learn and common in start-ups and AI work; Java is widely used in large enterprises and banks. An advisor can help you choose for your goals.',
      },
      {
        q: 'How is AI used in the course?',
        a: 'In two ways: you build AI features into your apps, and you learn to use AI coding assistants well, reviewing and understanding everything they produce.',
      },
    ],
  },
  {
    ...developer,
    slug: 'java-full-stack',
    name: 'Java Full Stack with AI',
    shortName: 'Java Full Stack',
    tagline: 'Build enterprise web apps with Java, Spring Boot and React, with AI features built in.',
    summary:
      'Learn to build and deploy complete applications the way enterprises do: Core Java, Spring Boot, Spring Security and JPA on the back end, React on the front end, SQL databases and microservices, with AI features through Spring AI and AI coding assistants.',
    highlights: ['Java + Spring Boot + React', 'AI with Spring AI', 'Deployed projects'],
    audience: [
      { title: 'Graduates & freshers', text: 'Start a career as a Java developer.' },
      { title: 'Career switchers', text: 'Move into software development from another field.' },
      { title: 'Developers', text: 'Add Spring Boot, React and AI features to your skills.' },
    ],
    outcomes: [
      'Program in Java, from the basics to collections and streams',
      'Build REST APIs with Spring Boot',
      'Work with databases using JPA and Hibernate',
      'Secure applications with Spring Security and JWT',
      'Build front ends with React',
      'Design simple microservices',
      'Add AI features with Spring AI',
      'Test, containerise and deploy applications',
    ],
    modules: [
      {
        title: 'Core Java',
        summary: 'The foundation.',
        topics: ['Java fundamentals', 'Object-oriented programming', 'Collections and generics', 'Exceptions and streams'],
      },
      {
        title: 'Advanced Java & SQL',
        summary: 'Data and concurrency.',
        topics: ['SQL and MySQL', 'JDBC', 'Multithreading basics', 'Maven and project structure'],
      },
      {
        title: 'Spring Boot',
        summary: 'Enterprise back ends.',
        topics: [
          'Spring core and dependency injection',
          'REST controllers',
          'Spring Data JPA and Hibernate',
          'Validation and error handling',
        ],
      },
      {
        title: 'Security',
        summary: 'Protect users and data.',
        topics: ['Spring Security', 'JWT authentication', 'Roles and permissions', 'Secure coding basics'],
      },
      {
        title: 'Web foundations & React',
        summary: 'The front end.',
        topics: ['HTML, CSS and JavaScript', 'React components and hooks', 'Routing and forms', 'Calling Spring Boot APIs'],
      },
      {
        title: 'Microservices',
        summary: 'How large systems are built.',
        topics: ['Microservice design', 'Service-to-service communication', 'API gateway concepts', 'Configuration and resilience'],
      },
      {
        title: 'AI in Java apps',
        summary: 'Build features with AI.',
        topics: ['Spring AI', 'LLM APIs and prompts', 'Retrieval-augmented generation (RAG)', 'AI coding assistants'],
      },
      {
        title: 'Testing, deployment & career readiness',
        summary: 'Ship it and get interview-ready.',
        topics: ['JUnit and Mockito', 'Docker', 'Cloud deployment and CI/CD', 'Capstone, resume and mock interviews'],
      },
    ],
    tools: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'Hibernate',
      'MySQL',
      'React',
      'JavaScript',
      'Maven',
      'JUnit',
      'Docker',
      'Spring AI',
      'Git & GitHub',
      'IntelliJ IDEA',
    ],
    projects: [
      {
        title: 'Online banking app',
        text: 'Accounts, transfers and statements with secure logins, built with Spring Boot and React.',
        stack: ['Spring Boot', 'Spring Security', 'React'],
      },
      {
        title: 'E-commerce microservices',
        text: 'Product, order and payment services that work together behind an API gateway.',
        stack: ['Microservices', 'JPA', 'Docker'],
      },
      {
        title: 'AI help-desk assistant',
        text: 'An assistant that answers questions from a knowledge base, built with Spring AI.',
        stack: ['Spring AI', 'RAG', 'REST'],
      },
    ],
    certifications: [
      {
        name: 'Oracle Certified Professional: Java SE 21 Developer',
        note: 'Covered by the Core Java and Advanced Java modules.',
      },
    ],
    roles: [
      { title: 'Java Full Stack Developer', text: 'Build complete enterprise applications.' },
      { title: 'Java Developer', text: 'Build back ends with Spring Boot.' },
      { title: 'Back-end Developer', text: 'Design APIs and services.' },
      { title: 'Software Engineer', text: 'Work on large enterprise systems.' },
    ],
    faqs: [
      {
        q: 'Python or Java full stack: which should I choose?',
        a: 'Both lead to strong careers. Java is widely used in large enterprises, banks and IT services companies; Python is quicker to learn and common in start-ups and AI work. An advisor can help you choose.',
      },
      {
        q: 'How is AI used in the course?',
        a: 'You build AI features into Java applications with Spring AI, and you learn to use AI coding assistants well, reviewing and understanding everything they produce.',
      },
    ],
  },
  {
    slug: 'business-analyst-genai',
    family: 'Business analysis',
    accent: 'sky',
    heroImage: '/videos/why-meeting.jpg',
    name: 'Business Analyst with GenAI',
    shortName: 'Business Analyst with GenAI',
    tagline: 'Business analysis for IT projects, done faster and better with generative AI.',
    summary:
      'Learn business analysis for IT projects: elicitation, requirements and user stories, process modelling, Agile delivery, SQL and Power BI for analysts, and how to use generative AI to research, draft and check your work without losing accuracy.',
    prerequisites: 'No coding needed. Graduates from any field can join; work experience helps.',
    highlights: ['Requirements & Agile', 'Process modelling & data', 'GenAI for analysts'],
    audience: [
      { title: 'Graduates & freshers', text: 'Start an IT career without coding.' },
      {
        title: 'Domain professionals',
        text: 'Bring banking, healthcare, retail or other domain knowledge into IT projects.',
      },
      { title: 'Testers & support professionals', text: 'Move into business analysis roles.' },
    ],
    outcomes: [
      'Elicit requirements with interviews, workshops and observation',
      'Write BRDs, FRDs, user stories and acceptance criteria',
      'Model processes with BPMN and use cases with UML',
      'Create wireframes and prototypes',
      'Work in Agile and Scrum teams',
      'Analyse data with SQL, Excel and Power BI',
      'Use generative AI to draft, summarise and check analysis work',
      'Support testing, UAT and go-live',
    ],
    modules: [
      {
        title: 'Business analysis foundations',
        summary: 'What business analysts do and why it matters.',
        topics: ['The BA role in IT projects', 'BABOK knowledge areas', 'Stakeholder analysis', 'Business cases'],
      },
      {
        title: 'Elicitation & requirements',
        summary: 'Find out what is really needed.',
        topics: [
          'Interviews and workshops',
          'BRD and FRD',
          'Functional and non-functional requirements',
          'Requirement traceability',
        ],
      },
      {
        title: 'Modelling & design',
        summary: 'Make requirements visual.',
        topics: ['BPMN process models', 'UML use cases', 'Wireframes and prototypes', 'Data flow basics'],
      },
      {
        title: 'Agile & Scrum',
        summary: 'How most teams deliver today.',
        topics: ['Scrum roles and events', 'Epics and user stories', 'Acceptance criteria', 'Backlog refinement in Jira'],
      },
      {
        title: 'Data for analysts',
        summary: 'Back decisions with data.',
        topics: ['SQL queries', 'Excel analysis', 'Power BI dashboards', 'KPIs and metrics'],
      },
      {
        title: 'Generative AI for business analysts',
        summary: 'Work faster with AI, and check what it produces.',
        topics: [
          'Prompting for analysis',
          'Drafting requirements and user stories',
          'Summarising interviews and documents',
          'Reviewing AI output and data privacy',
        ],
      },
      {
        title: 'Testing & delivery',
        summary: 'From sign-off to go-live.',
        topics: ['Test scenarios and UAT', 'Defect triage', 'Change and release', 'Training and handover'],
      },
      {
        title: 'Domains & career readiness',
        summary: 'Get interview-ready.',
        topics: [
          'Banking, healthcare and e-commerce case studies',
          'Capstone project',
          'ECBA exam preparation',
          'Resume and mock interviews',
        ],
      },
    ],
    tools: [
      'Jira',
      'Confluence',
      'draw.io',
      'Visio',
      'Balsamiq',
      'Figma',
      'Excel',
      'SQL',
      'Power BI',
      'ChatGPT',
      'Microsoft Copilot',
    ],
    projects: [
      {
        title: 'Loan application redesign',
        text: 'Requirements, BPMN process maps and user stories for a bank’s online loan process.',
        stack: ['BPMN', 'User stories', 'Jira'],
      },
      {
        title: 'Hospital appointment system',
        text: 'Use cases, wireframes and acceptance criteria for a patient booking system.',
        stack: ['UML', 'Wireframes', 'Acceptance criteria'],
      },
      {
        title: 'AI-assisted requirements pack',
        text: 'Interview notes summarised with GenAI, turned into a checked requirements document and a KPI dashboard.',
        stack: ['GenAI', 'Power BI', 'Requirements'],
      },
    ],
    certifications: [
      {
        name: 'IIBA Entry Certificate in Business Analysis (ECBA)',
        note: 'Covered by the foundations, requirements and modelling modules.',
      },
    ],
    roles: [
      { title: 'Business Analyst', text: 'Turn business needs into clear requirements.' },
      { title: 'IT Business Analyst', text: 'Work between business teams and developers.' },
      { title: 'Product Analyst', text: 'Support product decisions with research and data.' },
      { title: 'Functional Consultant', text: 'Configure and advise on business software.' },
    ],
    faqs: [
      {
        q: 'Do I need a technical background?',
        a: 'No. The course starts from the basics. Business analysts need to understand technology, not build it.',
      },
      {
        q: 'Will AI replace business analysts?',
        a: 'AI speeds up parts of the work, such as drafting and summarising, but someone still has to understand the business, ask the right questions and check the result. This course teaches you to do both.',
      },
    ],
  },
];
