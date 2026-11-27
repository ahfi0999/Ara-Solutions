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
    // From the client's page document (Nov 2026), written for the keywords chosen on 26 Nov 2026:
    // primary "python full stack course in hyderabad"; secondary "python full stack developer course",
    // "python full stack with ai course", "python full stack developer jobs in hyderabad for freshers".
    // Hyderabad is the only location named.
    h1: 'Python Full Stack Course in Hyderabad with AI',
    tagline: 'Build web apps end to end with Python, Django, FastAPI and React, with AI built in.',
    summary:
      'A Python full stack developer builds web apps from the database to the screen, in a language also widely used for AI. This Python full stack developer course goes beyond scripts and syntax: you build a Django and React job portal, an AI document assistant with FastAPI and a SaaS dashboard you deploy live.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'Taught from the basics',
      location: 'Hyderabad',
    },
    highlights: ['Django, FastAPI & React', 'AI features with LLMs & RAG', 'PCAP certification prep'],
    about: {
      paragraphs: [
        'Our Python Full Stack course in Hyderabad teaches you to build web applications end to end with Python, a language also widely used for AI and data work. You learn Django for complete web apps, FastAPI for fast APIs and React for the front end.',
        'As a Python Full Stack with AI course, it also teaches you to add LLM and RAG features to your apps. You work with PostgreSQL, authentication, REST APIs, testing with pytest and deployment with Docker, and finish with three deployed projects and a capstone. Classes are live and instructor-led, and the course prepares you for the Python Institute PCAP certification.',
      ],
      whyTitle: 'Why learn Python full stack in 2026',
      why: [
        'Python is one of the most widely used programming languages, and one of the easier ones to learn.',
        'One language for web apps and AI opens two career paths.',
        'Django and FastAPI are widely used by startups and product companies.',
      ],
    },
    audience: [
      {
        title: 'Freshers & graduates',
        text: 'Start a developer career with Python, a beginner-friendly language that is also used for AI.',
      },
      {
        title: 'Data & AI learners',
        text: 'Add web development so you can ship your AI work as apps people can use.',
      },
      {
        title: 'Career switchers',
        text: 'Move into software development with deployed projects employers can try.',
      },
    ],
    outcomes: [
      'Build responsive web pages with HTML, CSS and JavaScript, and manage code with Git and GitHub',
      'Write clean, structured Python with modules, classes and error handling',
      'Design PostgreSQL databases and run migrations with an ORM',
      'Build complete web apps with Django, Django admin and Django REST framework',
      'Build fast, documented APIs with FastAPI and Pydantic',
      'Build React front ends that call your own APIs',
      'Add AI features to your apps with LLM APIs and RAG',
      'Test with pytest, containerise with Docker and deploy with CI/CD',
    ],
    modules: [
      {
        title: 'Web foundations',
        summary: 'The base of every web app.',
        topics: [
          'How the web works',
          'HTML and CSS',
          'JavaScript essentials',
          'Git and GitHub',
          'Developer tools',
          'Developer workflow',
        ],
        lab: 'Build a responsive page and push it to GitHub.',
      },
      {
        title: 'Python programming',
        summary: 'Write clean, structured Python.',
        topics: [
          'Python essentials',
          'Functions and modules',
          'Object-oriented Python',
          'Files and errors',
          'Virtual environments',
          'Type hints',
        ],
        lab: 'Write Python modules with classes and error handling.',
      },
      {
        title: 'Databases and SQL',
        summary: 'Design and query relational databases.',
        topics: [
          'SQL essentials',
          'PostgreSQL',
          'Data modelling',
          'ORMs',
          'Migrations',
          'Query optimisation',
        ],
        lab: 'Design a PostgreSQL schema and run migrations.',
      },
      {
        title: 'Django',
        summary: 'Build complete web apps with Django.',
        topics: [
          'Models, views and templates',
          'Django admin',
          'Authentication',
          'Forms',
          'Django REST framework',
          'Django signals',
        ],
        lab: 'Build a Django app with login and admin.',
      },
      {
        title: 'APIs with FastAPI',
        summary: 'Build fast, modern APIs.',
        topics: [
          'FastAPI basics',
          'Pydantic models',
          'Async endpoints',
          'API authentication',
          'Automatic API docs',
          'Background tasks',
        ],
        lab: 'Build a FastAPI service with Pydantic models.',
      },
      {
        title: 'Front end with React',
        summary: 'Build interfaces that call your APIs.',
        topics: [
          'Components and state',
          'Hooks',
          'Routing',
          'Calling APIs',
          'Styling',
          'Form validation in React',
        ],
        lab: 'Build a React front end that calls your API.',
      },
      {
        title: 'AI in Python apps',
        summary: 'Add AI features to your apps.',
        topics: [
          'LLM APIs from Python',
          'Prompt design for apps',
          'RAG with vector search',
          'AI document features',
          'AI safety basics',
        ],
        lab: 'Add a document Q&A feature with RAG.',
      },
      {
        title: 'Testing, deployment and career readiness',
        summary: 'Ship your apps and prepare for interviews.',
        topics: [
          'Testing with pytest',
          'Docker',
          'CI/CD and cloud hosting',
          'Monitoring',
          'Certification practice questions',
          'Coding interviews and mock interviews',
        ],
        lab: 'Test with pytest and deploy with Docker.',
      },
    ],
    tools: [
      'Python',
      'Django',
      'Django REST framework',
      'FastAPI',
      'Pydantic',
      'PostgreSQL',
      'HTML & CSS',
      'JavaScript',
      'React',
      'LLM APIs',
      'pytest',
      'Docker',
      'Git & GitHub',
    ],
    skills: [
      'Python programming',
      'SQL and PostgreSQL',
      'Django',
      'Django REST framework',
      'FastAPI',
      'React',
      'Authentication',
      'AI features with RAG',
      'Testing with pytest',
      'Docker deployment',
    ],
    projects: [
      {
        title: 'Job portal',
        problem: 'Job seekers and recruiters need a simple place to meet.',
        text: 'Build a job portal with accounts, job search and applications, using Django, React and PostgreSQL.',
        result: 'A Django and React job portal with accounts and search.',
        stack: ['Django', 'React', 'PostgreSQL'],
      },
      {
        title: 'AI document assistant',
        problem: 'Staff waste time searching through documents for answers.',
        text: 'Build an assistant that answers questions from uploaded documents, using FastAPI, an LLM API and RAG.',
        result: 'Staff ask a question and get an answer drawn from their own documents.',
        stack: ['FastAPI', 'LLM API', 'RAG'],
      },
      {
        title: 'Deployed SaaS dashboard',
        problem: 'A small business needs a live dashboard with user accounts.',
        text: 'Build and deploy a dashboard with user accounts and billing screens.',
        result: 'A SaaS-style dashboard running live in the cloud.',
        stack: ['Django', 'Docker'],
      },
    ],
    capstone:
      'Build and deploy a Python web product with Django or FastAPI, React and an AI feature, and present it as a portfolio piece.',
    certificationIntro:
      'Each certification below is run by its issuer, not by ARA Solutions. You buy the exam from the issuer and take it with them, usually online; the exam fee is paid to the issuer. This course prepares you for PCAP and GitHub Foundations. AWS Certified Developer – Associate is a later step: AWS recommends a year or more of hands-on experience building applications on AWS first. Check the issuer’s exam page for the current version and rules before you book.',
    certifications: [
      {
        name: 'Python Institute PCAP – Certified Associate Python Programmer',
        note: 'Prepared in this course, mainly in the Python programming module, with practice questions in module 8. The current exam version is PCAP-31-04. No prerequisites; the Python Institute recommends PCEP-level knowledge.',
      },
      {
        name: 'GitHub Foundations',
        note: 'Prepared in this course. Git and GitHub are taught in module 1 and used in every project. The exam (GH-900) is booked through Microsoft Learn and does not need renewal.',
      },
      {
        name: 'AWS Certified Developer – Associate',
        note: 'A next step once you have built and deployed apps on AWS. The exam’s new version is DVA-C03.',
      },
    ],
    roles: [
      {
        title: 'Python Full Stack Developer',
        text: 'Builds web apps end to end in Python.',
        level: 'Fresher to mid',
      },
      { title: 'Python Developer', text: 'Writes Python services and scripts.', level: 'Fresher to mid' },
      { title: 'Django Developer', text: 'Builds web apps with Django.', level: 'Junior to mid' },
      {
        title: 'Back-end Developer (Python)',
        text: 'Builds APIs with Django or FastAPI.',
        level: 'Fresher to mid',
      },
      { title: 'Front-end Developer', text: 'Builds React interfaces.', level: 'Fresher to mid' },
      { title: 'AI Application Developer', text: 'Adds AI features to apps.', level: 'Junior' },
    ],
    careers: {
      salaries: [
        { role: 'Full Stack Developer', experience: '0 to 7 years', pay: '₹1.8 L to ₹15.4 L' },
        { role: 'Full Stack Developer (Hyderabad)', experience: 'Varies', pay: '₹2 L to ₹14.5 L' },
      ],
      salaryNote:
        'Annual salary ranges for the Full Stack Developer job title from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
      path: [
        { stage: 'Start (0 to 2 years)', roles: 'Python Developer, Junior Full Stack Developer' },
        { stage: 'Grow (2 to 5 years)', roles: 'Python Full Stack Developer, Django Developer' },
        { stage: 'Lead (5+ years)', roles: 'Senior Developer, Tech Lead' },
      ],
    },
    faqs: [
      {
        q: 'What is a Python full stack developer?',
        a: 'A developer who builds a web application end to end with Python: the database, the back end with Django or FastAPI, and the front end people use, usually built with React.',
      },
      {
        q: 'What is the Python Full Stack course syllabus?',
        a: 'Eight modules: web foundations, Python programming, databases and SQL, Django, APIs with FastAPI, front end with React, AI in Python apps, and testing, deployment and career readiness. Every module has a hands-on lab.',
      },
      {
        q: 'Do I need coding experience to join the Python Full Stack course?',
        a: 'No. The course starts from the basics. Logical thinking and regular practice matter more than your background.',
      },
      {
        q: 'Why learn Python for full stack development?',
        a: 'Python is one of the easier languages to learn, and it is also widely used for AI and data work. With one language you can build web apps and add AI features to them, which opens two career paths.',
      },
      {
        q: 'Django or FastAPI: which does the course teach?',
        a: 'Both. Django is a complete framework for web apps, with an admin panel, logins and forms built in. FastAPI is a lighter framework for fast APIs and AI services. You build projects with each.',
      },
      {
        q: 'Does the course teach Django and React together?',
        a: 'Yes. You build back ends with Django and Django REST framework and front ends with React, then connect them in the job portal project.',
      },
      {
        q: 'How is AI used in this Python Full Stack with AI course?',
        a: 'Module 7 teaches you to call LLM APIs from Python, design prompts and build retrieval-augmented generation (RAG) with vector search. You use these skills to build the AI document assistant and the AI feature in your capstone.',
      },
      {
        q: 'Which certifications does the Python Full Stack course prepare me for?',
        a: 'Python Institute PCAP – Certified Associate Python Programmer and GitHub Foundations. AWS Certified Developer – Associate is a next step once you have hands-on AWS experience. You book and pay for each exam with its issuer.',
      },
      {
        q: 'What projects are in the Python Full Stack course?',
        a: 'A Django and React job portal, an AI document assistant built with FastAPI and RAG, and a SaaS-style dashboard you deploy to the cloud with Docker, plus a capstone you present as a portfolio piece.',
      },
      {
        q: 'Can freshers get Python full stack developer jobs in Hyderabad?',
        a: 'Yes. Entry roles such as Python developer, junior full stack developer and back-end developer (Python) are open to freshers who can show working projects. IT services firms, product companies and global capability centres in Hyderabad hire Python developers.',
      },
      {
        q: 'Is Python full stack development a good career?',
        a: 'It can be. Python is used for web apps, automation, data and AI, so your skills carry across roles. AmbitionBox lists full stack developer salaries of ₹1.8 L to ₹15.4 L a year in India for 0 to 7 years of experience (November 2026). From there you can grow into senior developer, tech lead or AI application roles.',
      },
      {
        q: 'What can I learn after the Python Full Stack course?',
        a: 'AI & Machine Learning, Agentic AI Engineering or Data Engineering. You already know Python and have built AI features, which is a good base for each of them.',
      },
      {
        q: 'Are the Python Full Stack classes live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Hyderabad.',
      },
      {
        q: 'What is the Python Full Stack course fee in Hyderabad?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Is this a Python Full Stack course with placement support?',
        a: 'Yes. It includes resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
      },
    ],
  },
  {
    ...developer,
    slug: 'java-full-stack',
    name: 'Java Full Stack with AI',
    shortName: 'Java Full Stack',
    // From the client's page document (Nov 2026), written for the keywords chosen on 26 Nov 2026:
    // primary "java full stack course in hyderabad"; secondary "java full stack developer course",
    // "java full stack with ai course", "java full stack developer jobs in hyderabad for freshers".
    // Hyderabad is the only location named.
    h1: 'Java Full Stack Course in Hyderabad with AI',
    tagline: 'Build enterprise web apps with Java, Spring Boot, microservices and React, with AI built in.',
    summary:
      'A Java full stack developer builds the secure, large-scale applications that banks, insurers and enterprises run on. This Java full stack developer course goes beyond core syntax and small programs: you build a secure banking app with Spring Boot and React, split an e-commerce system into microservices and add an AI help-desk assistant with Spring AI.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'Taught from the basics',
      location: 'Hyderabad',
    },
    highlights: [
      'Spring Boot, microservices & React',
      'AI features with Spring AI',
      'Oracle Java SE 21 exam prep',
    ],
    about: {
      paragraphs: [
        'Our Java Full Stack course in Hyderabad prepares you for the developer roles that large companies, banks and IT services firms hire for. You learn Java and Spring Boot for the back end, React for the front end and microservices for large systems, with AI features through Spring AI.',
        'You build secure REST APIs, work with MySQL and JPA, secure apps with Spring Security and JWT, split systems into microservices, add AI features and deploy with Docker. Classes are live and instructor-led, and the course prepares you for the Oracle Certified Professional: Java SE 21 Developer exam.',
      ],
      whyTitle: 'Why learn Java full stack in 2026',
      why: [
        'Java runs core systems at banks, insurers and large enterprises, and IT services firms hire Java developers to build and support them.',
        'Spring Boot and microservices are widely used for enterprise back ends.',
        'Spring AI brings AI features into Java apps, so you can work on AI projects without leaving Java.',
      ],
    },
    audience: [
      {
        title: 'Freshers & graduates',
        text: 'Learn Java, a language many IT services firms and banks hire for, from the basics.',
      },
      { title: 'Java developers', text: 'Add Spring Boot, microservices, React and AI to your skills.' },
      { title: 'Career switchers', text: 'Move into software development with enterprise-style projects.' },
    ],
    outcomes: [
      'Write object-oriented Java with collections, exceptions and Java 21 features',
      'Use streams, lambdas and JDBC to work with MySQL',
      'Build REST APIs with Spring Boot, Spring Data JPA and Hibernate',
      'Secure applications with Spring Security, JWT and role-based access',
      'Build React front ends that call your Spring APIs',
      'Split an application into microservices with an API gateway and Docker',
      'Add AI chat and RAG features with Spring AI',
      'Test with JUnit, build with Maven and set up CI pipelines',
    ],
    modules: [
      {
        title: 'Core Java',
        summary: 'Build a strong Java base.',
        topics: [
          'Syntax and data types',
          'Object-oriented programming',
          'Exceptions',
          'Collections',
          'Java 21 features',
          'Records and sealed classes',
        ],
        lab: 'Write object-oriented Java programs with collections.',
      },
      {
        title: 'Advanced Java and SQL',
        summary: 'Use Java with databases.',
        topics: ['Streams and lambdas', 'Multithreading basics', 'SQL with MySQL', 'JDBC', 'Design patterns'],
        lab: 'Use streams and JDBC to query MySQL.',
      },
      {
        title: 'Spring Boot',
        summary: 'Build REST APIs with Spring Boot.',
        topics: [
          'Spring core and dependency injection',
          'Spring Boot REST APIs',
          'Spring Data JPA and Hibernate',
          'Validation',
          'Exception handling in APIs',
          'Testing with JUnit',
        ],
        lab: 'Build a Spring Boot REST API with JPA.',
      },
      {
        title: 'Security',
        summary: 'Secure your apps and their users.',
        topics: [
          'Spring Security',
          'JWT authentication',
          'Roles and permissions',
          'Method-level security',
          'OWASP basics',
          'Secure coding',
        ],
        lab: 'Secure the API with Spring Security and JWT.',
      },
      {
        title: 'Web foundations and React',
        summary: 'Build front ends that call your APIs.',
        topics: [
          'HTML, CSS and JavaScript',
          'React components and hooks',
          'Routing',
          'State management',
          'Forms and validation',
          'Calling Spring APIs',
        ],
        lab: 'Build a React front end for the API.',
      },
      {
        title: 'Microservices',
        summary: 'Split apps into services.',
        topics: [
          'Microservice design',
          'Service communication',
          'API gateway and service discovery',
          'Resilience patterns',
          'Docker for services',
          'Configuration and secrets',
        ],
        lab: 'Split an app into two microservices with Docker.',
      },
      {
        title: 'AI in Java apps',
        summary: 'Add AI with Spring AI.',
        topics: [
          'Spring AI basics',
          'LLM calls from Java',
          'Prompt templates in Spring AI',
          'AI chat features',
          'RAG in Java',
          'AI safety',
        ],
        lab: 'Add an AI chat endpoint with Spring AI.',
      },
      {
        title: 'Testing, deployment and career readiness',
        summary: 'Ship your apps and prepare for interviews.',
        topics: [
          'Testing strategy',
          'Maven builds',
          'Docker and CI pipelines',
          'Oracle Java certification practice',
          'Coding interviews and mock interviews',
        ],
        lab: 'Write JUnit tests and build with Maven.',
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
    skills: [
      'Core and advanced Java',
      'SQL and JDBC',
      'Spring Boot',
      'Spring Data JPA and Hibernate',
      'Spring Security and JWT',
      'React',
      'Microservices',
      'Spring AI',
      'JUnit and Maven',
      'Docker',
    ],
    projects: [
      {
        title: 'Online banking app',
        problem: 'A bank needs secure online account access and transfers.',
        text: 'Build a secure banking app with accounts, transfers and JWT login.',
        result: 'A secure banking app with login, accounts and transfers.',
        stack: ['Spring Boot', 'Spring Security', 'React'],
      },
      {
        title: 'E-commerce microservices',
        problem: 'An online store cannot scale its single large application.',
        text: 'Split an e-commerce system into product, order and payment services.',
        result: 'Product, order and payment microservices that can be deployed and scaled separately.',
        stack: ['Spring Boot', 'Microservices', 'Docker'],
      },
      {
        title: 'AI help-desk assistant',
        problem: 'Customers wait for answers to simple questions.',
        text: 'Add an AI assistant that answers customer questions inside the app.',
        result: 'Customers get answers to simple questions without waiting for staff.',
        stack: ['Spring AI', 'Spring Boot'],
      },
    ],
    capstone:
      'Build and deploy an enterprise-style Java application with Spring Boot, React, microservices and an AI feature, with tests and documentation.',
    certificationIntro:
      'Each certification below is run by its issuer, not by ARA Solutions: you book and pay for the exam with Oracle, Broadcom or AWS. This course prepares you for the Oracle Java SE 21 Developer exam. Spring Certified Professional and AWS Certified Developer – Associate are later steps with their own requirements, explained below. Check the issuer’s exam page for the current rules before you book.',
    certifications: [
      {
        name: 'Oracle Certified Professional: Java SE 21 Developer',
        note: 'Prepared in this course, mainly in the Core Java and Advanced Java modules, with practice in module 8. Exam 1Z0-830, booked with Oracle University. Oracle also offers a newer Java SE 25 Developer exam (1Z0-831).',
      },
      {
        name: 'Spring Certified Professional 2024',
        note: 'A later step, issued by Broadcom (exam 2V0-72.22). Our Spring Boot, security and testing modules cover many of its topics, but Broadcom’s guide also asks for one of its own Spring courses, and the exam is based on older Spring versions.',
      },
      {
        name: 'AWS Certified Developer – Associate',
        note: 'A next step once you have built and deployed apps on AWS. AWS recommends a year or more of hands-on experience first. The exam’s new version is DVA-C03.',
      },
    ],
    roles: [
      {
        title: 'Java Full Stack Developer',
        text: 'Builds Java back ends and React front ends.',
        level: 'Fresher to mid',
      },
      { title: 'Java Developer', text: 'Builds Java applications.', level: 'Fresher to mid' },
      { title: 'Spring Boot Developer', text: 'Builds REST APIs and services.', level: 'Junior to mid' },
      { title: 'Back-end Developer', text: 'Builds server logic and APIs.', level: 'Fresher to mid' },
      { title: 'Microservices Developer', text: 'Builds and runs microservices.', level: 'Mid' },
      {
        title: 'Software Engineer',
        text: 'Builds and maintains software across the stack.',
        level: 'Fresher to mid',
      },
    ],
    careers: {
      salaries: [
        { role: 'Full Stack Developer', experience: '0 to 7 years', pay: '₹1.8 L to ₹15.4 L' },
        { role: 'Full Stack Developer (Hyderabad)', experience: 'Varies', pay: '₹2 L to ₹14.5 L' },
      ],
      salaryNote:
        'Annual salary ranges for the Full Stack Developer job title from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
      path: [
        { stage: 'Start (0 to 2 years)', roles: 'Java Developer, Junior Full Stack Developer' },
        { stage: 'Grow (2 to 5 years)', roles: 'Java Full Stack Developer, Spring Boot Developer' },
        { stage: 'Lead (5+ years)', roles: 'Senior Engineer, Tech Lead, Solution Architect' },
      ],
    },
    faqs: [
      {
        q: 'What does a Java full stack developer do?',
        a: 'A Java full stack developer builds the whole application: the database and the Java back end with Spring Boot, and the front end with React. In large companies they also build secure APIs and microservices.',
      },
      {
        q: 'What is the Java Full Stack course syllabus?',
        a: 'Eight modules: Core Java, Advanced Java and SQL, Spring Boot, security, web foundations and React, microservices, AI in Java apps, and testing, deployment and career readiness. Every module has a hands-on lab.',
      },
      {
        q: 'Is Java hard to learn if I have never coded?',
        a: 'Java is structured and logical, and with regular practice beginners pick it up well. No coding experience is needed: Core Java is taught from the start.',
      },
      {
        q: 'Does the course teach Spring Boot and React together?',
        a: 'Yes. Spring Boot is a Java framework for building production-ready APIs and services quickly. You build REST APIs with it and a React front end that calls them, first in the module labs and then in the online banking app.',
      },
      {
        q: 'What are microservices?',
        a: 'An application split into small services that each do one job and can be deployed separately. You split an e-commerce system into product, order and payment services in module 6.',
      },
      {
        q: 'How is AI used in the Java Full Stack with AI course?',
        a: 'You add AI features to Java apps with Spring AI: LLM calls, prompt templates, chat endpoints and retrieval-augmented generation (RAG). You also use AI coding assistants while building, and review what they produce.',
      },
      {
        q: 'Which Java version does the course use?',
        a: 'Java 21, a long-term support (LTS) release that matches the Oracle Java SE 21 Developer exam (1Z0-830). Java 25 is the newest LTS release, and Oracle also offers a Java SE 25 Developer exam (1Z0-831). Your trainer can help you choose the exam that suits you.',
      },
      {
        q: 'Does the course prepare me for an Oracle Java certification?',
        a: 'Yes. It prepares you for the Oracle Certified Professional: Java SE 21 Developer exam (1Z0-830), with certification practice in module 8. You book and pay for the exam with Oracle University. Spring Certified Professional and AWS Certified Developer – Associate are later options.',
      },
      {
        q: 'What projects are in the Java Full Stack course?',
        a: 'An online banking app with Spring Boot, Spring Security and React, an e-commerce system split into microservices, and an AI help-desk assistant with Spring AI, plus an enterprise-style capstone with tests and documentation.',
      },
      {
        q: 'Can freshers get Java full stack developer jobs in Hyderabad?',
        a: 'Yes. Entry roles such as Java developer, junior full stack developer and software engineer are open to freshers with strong Core Java and working projects. IT services firms, banks and global capability centres in Hyderabad hire Java developers.',
      },
      {
        q: 'Is Java full stack in demand?',
        a: 'Yes. Banks, insurers and IT services firms run large Java systems and hire Java developers steadily. AmbitionBox lists full stack developer salaries of ₹1.8 L to ₹15.4 L a year in India for 0 to 7 years of experience (November 2026).',
      },
      {
        q: 'What can I learn after the Java Full Stack course?',
        a: 'A cloud certification such as AWS Certified Developer – Associate, or our Agentic AI Engineering course to build AI agents.',
      },
      {
        q: 'Are the Java Full Stack classes live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Hyderabad.',
      },
      {
        q: 'What is the Java Full Stack course fee in Hyderabad?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Is this a Java Full Stack course with placement support?',
        a: 'Yes. It includes resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
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
    // From the client's page document "Business Analyst with GenAI" (Nov 2026), written for the keywords chosen on
    // 26 Nov 2026: primary "business analyst course in hyderabad"; secondary "business analyst course in hyderabad
    // with placement", "business analyst with ai course", "ecba certification training". Salesforce BA and
    // ServiceNow BA keywords belong to those pages, and "product owner certification" to AI Product Owner.
    h1: 'Business Analyst Course in Hyderabad with GenAI',
    tagline: 'Gather requirements, model processes and deliver change, with GenAI as your assistant.',
    summary:
      'A business analyst works out what a business really needs and makes sure the IT team builds the right thing. In this course you run elicitation for a case study, model the process, write Agile user stories, check the data with SQL and use GenAI tools to produce a complete requirements pack faster.',
    prerequisites: 'No coding background needed. Graduates from any field can join; work experience helps.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'No coding needed',
      location: 'Hyderabad',
    },
    highlights: ['Requirements, BPMN & Agile', 'SQL, Power BI & GenAI', 'IIBA ECBA prep'],
    about: {
      paragraphs: [
        'Our Business Analyst course in Hyderabad prepares you to work out what businesses need and make sure IT teams build the right thing. Business analysts work in every industry, and generative AI tools now help them draft, summarise and check their work faster.',
        'You learn elicitation and requirements, BPMN process modelling, Agile and Scrum, data analysis with SQL and Power BI, generative AI for business analysts, testing and delivery, and domain knowledge in banking, healthcare and retail. Every module has a hands-on lab, and the course prepares you for the IIBA Entry Certificate in Business Analysis (ECBA).',
        'Classes are live and instructor-led on Zoom, and every class is recorded. Placement support covers your resume and LinkedIn, mock interviews and job referrals through ARA’s IT staffing clients and partner companies. Offers depend on your interview performance.',
      ],
      whyTitle: 'Why learn business analysis with GenAI in 2026',
      why: [
        'Business analysts are hired in every industry, from banking to healthcare and retail.',
        'AI tools speed up drafting and summarising, so analysts who use them well, and check the output, work faster.',
        'No coding needed: the work uses communication and analysis skills.',
      ],
    },
    audience: [
      {
        title: 'Graduates from any field',
        text: 'Start an IT career that uses communication and analysis, not coding.',
      },
      {
        title: 'Working professionals',
        text: 'Use your domain knowledge in banking, healthcare or retail as a business analyst.',
      },
      { title: 'Testers and support staff', text: 'Move from testing or support into analysis roles.' },
    ],
    outcomes: [
      'Plan business analysis work and map stakeholders',
      'Elicit requirements with interviews, workshops, questionnaires and observation',
      'Write BRDs, FRDs, use cases, user stories and acceptance criteria',
      'Model processes with BPMN and design wireframes in Balsamiq and Figma',
      'Work as a BA in Scrum teams with Jira and Confluence',
      'Query data with SQL and build simple Power BI reports',
      'Use ChatGPT and Microsoft Copilot to draft and review analysis work safely',
      'Plan UAT, track defects and support release and user training',
    ],
    modules: [
      {
        title: 'Business analysis foundations',
        summary: 'The BA role and how projects use it.',
        topics: [
          'The role of a business analyst',
          'BABOK Guide knowledge areas',
          'SDLC and project types',
          'Stakeholders and stakeholder analysis',
          'BA deliverables',
        ],
        lab: 'Write a BA plan and a stakeholder map.',
      },
      {
        title: 'Elicitation and requirements',
        summary: 'Find out what the business needs.',
        topics: [
          'Interviews and workshops',
          'Questionnaires and observation',
          'Requirement types',
          'BRD and FRD',
          'Prioritisation',
          'Writing use cases',
        ],
        lab: 'Run a mock stakeholder interview and write a BRD section.',
      },
      {
        title: 'Modelling and design',
        summary: 'Show requirements visually.',
        topics: [
          'BPMN process models',
          'Wireframes with Balsamiq and Figma',
          'Data flow diagrams',
          'Gap analysis',
          'Business rules',
        ],
        lab: 'Draw a BPMN process and wireframes.',
      },
      {
        title: 'Agile and Scrum',
        summary: 'Work as a BA in an Agile team.',
        topics: [
          'Scrum roles and events',
          'User stories and acceptance criteria',
          'Backlog refinement',
          'Story mapping',
          'Definition of Done',
          'Jira and Confluence',
        ],
        lab: 'Write user stories and run a backlog refinement session.',
      },
      {
        title: 'Data for analysts',
        summary: 'Use data to support decisions.',
        topics: [
          'Excel analysis',
          'SQL basics',
          'Power BI basics',
          'Data requirements',
          'KPIs',
          'Data dictionaries',
        ],
        lab: 'Query data with SQL and build a simple Power BI report.',
      },
      {
        title: 'Generative AI for business analysts',
        summary: 'Use AI to work faster, and check its quality.',
        topics: [
          'ChatGPT and Microsoft Copilot for BAs',
          'Summarising interviews',
          'Drafting user stories and test cases',
          'Reviewing AI output',
          'Data privacy and confidentiality',
        ],
        lab: 'Draft and review user stories and test cases with AI.',
      },
      {
        title: 'Testing and delivery',
        summary: 'Make sure what is built meets the need.',
        topics: [
          'Test scenarios',
          'User acceptance testing (UAT)',
          'Defect tracking',
          'Release and change management',
          'User training and training plans',
        ],
        lab: 'Write UAT scripts and log defects.',
      },
      {
        title: 'Domains and career readiness',
        summary: 'Apply your skills to common domains and prepare for interviews.',
        topics: [
          'Banking and payments',
          'Healthcare',
          'Retail and e-commerce',
          'ECBA practice questions',
          'Business analyst interview questions and mock interviews',
        ],
        lab: 'Analyse a banking case study end to end.',
      },
    ],
    tools: [
      'Jira',
      'Confluence',
      'draw.io',
      'Microsoft Visio',
      'Balsamiq',
      'Figma',
      'Excel',
      'SQL',
      'Power BI',
      'ChatGPT',
      'Microsoft Copilot',
    ],
    skills: [
      'Elicitation',
      'Requirements documentation',
      'BPMN modelling',
      'Wireframing',
      'Agile and Scrum',
      'User stories',
      'SQL and Power BI basics',
      'GenAI for analysts',
      'UAT',
      'Domain knowledge',
    ],
    projects: [
      {
        title: 'Loan application redesign',
        problem: 'A bank’s loan approval takes too long.',
        text: 'Analyse the bank’s loan process and redesign it with BPMN models and user stories.',
        result: 'A redesigned loan process with BPMN models and a backlog of user stories.',
        stack: ['draw.io', 'Jira', 'BPMN'],
      },
      {
        title: 'Hospital appointment system',
        problem: 'A hospital’s appointment booking frustrates patients.',
        text: 'Gather requirements and design wireframes for a new appointment system.',
        result: 'Requirements and wireframes for a new booking system.',
        stack: ['Balsamiq', 'Confluence'],
      },
      {
        title: 'AI-assisted requirements pack',
        problem: 'A team must deliver requirements fast for a new product.',
        text: 'Use GenAI to draft a full requirements pack, then review and correct it.',
        result: 'A complete requirements pack, drafted with GenAI and checked by you.',
        stack: ['ChatGPT', 'Microsoft Copilot'],
      },
    ],
    capstone:
      'Act as the BA on a project in your chosen domain: elicitation, process models, backlog, data analysis and UAT, presented to a mock steering group.',
    certificationIntro:
      'IIBA and Scrum.org run their own exams, and neither needs work experience or a set course. This course prepares you for ECBA and gives you a start on PSPO I: you book and pay for each exam with IIBA or Scrum.org. CCBA is a next step once you have worked as a business analyst.',
    certifications: [
      {
        name: 'IIBA Entry Certificate in Business Analysis (ECBA)',
        note: 'Shows you know core business analysis practice. No experience or training hours are needed, and the exam is taken online. Covered by modules 1 to 4 and 7, with practice questions in module 8.',
      },
      {
        name: 'Scrum.org Professional Scrum Product Owner I (PSPO I)',
        note: 'Shows you understand product ownership in Scrum. Module 4 covers Scrum roles, events and backlog work; the exam goes deeper (85% is needed to pass), so plan extra study; the AI Product Owner course prepares you for it in full.',
      },
      {
        name: 'IIBA Certification of Capability in Business Analysis (CCBA)',
        note: 'A next step for working BAs. IIBA asks for two to three years (3,750 hours) of business analysis experience in the last seven years, 21 professional development hours and two references.',
      },
    ],
    roles: [
      {
        title: 'Business Analyst',
        text: 'Gathers and documents business requirements.',
        level: 'Fresher to mid',
      },
      { title: 'IT Business Analyst', text: 'Bridges business and IT teams.', level: 'Fresher to mid' },
      { title: 'Product Analyst', text: 'Analyses product use and requirements.', level: 'Junior to mid' },
      { title: 'Functional Consultant', text: 'Configures systems to business needs.', level: 'Mid' },
      {
        title: 'Agile Business Analyst',
        text: 'Writes user stories and supports Scrum teams.',
        level: 'Junior to mid',
      },
      { title: 'Business Systems Analyst', text: 'Analyses and improves business systems.', level: 'Mid' },
    ],
    careers: {
      field: 'Business analyst',
      salaries: [
        { role: 'Business Analyst', experience: '1+ years', pay: '₹3 L to ₹17 L' },
        { role: 'IT Business Analyst', experience: 'Varies', pay: '₹3 L to ₹19 L' },
      ],
      salaryNote:
        'Annual salary ranges from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
      path: [
        { stage: 'Start (0 to 2 years)', roles: 'Business Analyst, IT Business Analyst' },
        { stage: 'Grow (2 to 5 years)', roles: 'Senior BA, Product Analyst, Functional Consultant' },
        { stage: 'Lead (5+ years)', roles: 'Lead BA, Product Owner, Business Systems Manager' },
      ],
    },
    faqs: [
      {
        q: 'What does a business analyst do day to day?',
        a: 'A business analyst talks to stakeholders, writes requirements and user stories, models processes and checks that the delivered work meets the need. In an Agile team the BA also helps refine the backlog and supports testing.',
      },
      {
        q: 'What is the Business Analyst course syllabus?',
        a: 'Eight modules, each with a hands-on lab: business analysis foundations, elicitation and requirements, modelling and design, Agile and Scrum, data for analysts, generative AI for business analysts, testing and delivery, and domains and career readiness. Three projects and a capstone bring them together.',
      },
      {
        q: 'Is this Business Analyst course in Hyderabad good for freshers?',
        a: 'Yes. Graduates from any field can join, and no coding is needed. The course starts from the BA role itself, and freshers with strong communication and analytical skills do well. Entry roles include business analyst and IT business analyst.',
      },
      {
        q: 'Does business analysis work require coding?',
        a: 'No. BA work is about understanding needs and communicating clearly. Basic SQL and data skills help, and the course teaches them, but you do not write application code.',
      },
      {
        q: 'How does this Business Analyst course use generative AI?',
        a: 'Module 6 teaches you to use ChatGPT and Microsoft Copilot to summarise interviews and draft user stories and test cases, then review the output for accuracy. It also covers data privacy and confidentiality, so you know what not to share with an AI tool.',
      },
      {
        q: 'Will AI replace business analysts?',
        a: 'AI speeds up drafting and summarising, but businesses still need people to understand needs, make decisions and get agreement. This course teaches you to use AI for the routine work and to check what it produces.',
      },
      {
        q: 'Does this course prepare me for the IIBA ECBA certification?',
        a: 'Yes. The course covers the core business analysis topics, and module 8 adds ECBA practice questions. IIBA sets no experience or training-hour requirement: you book and pay for the online exam with IIBA. Its CCBA certification is a next step once you have two to three years of BA experience.',
      },
      {
        q: 'What is BPMN in business analysis?',
        a: 'Business Process Model and Notation, a standard way to draw business processes so business and IT teams read them the same way. You draw BPMN models in module 3 and in the loan application project.',
      },
      {
        q: 'Which domains does the Business Analyst course cover?',
        a: 'Banking and payments, healthcare, and retail and e-commerce. Module 8 uses case studies from these domains, and in the capstone you choose your own.',
      },
      {
        q: 'What business analyst interview questions should I prepare for?',
        a: 'Expect questions on elicitation techniques, BRDs and FRDs, user stories and acceptance criteria, BPMN, Scrum events, UAT and basic SQL, often as a case study. Module 8 covers them and ends with mock interviews.',
      },
      {
        q: 'What can I learn after the Business Analyst with GenAI course?',
        a: 'You can specialise in a platform with Salesforce BA or ServiceNow BA, or move towards product roles with AI Product Owner.',
      },
      {
        q: 'What is the Business Analyst course fee in Hyderabad?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Are the Business Analyst classes live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Hyderabad.',
      },
      {
        q: 'Does the Business Analyst course in Hyderabad include placement support?',
        a: 'Yes. Alongside the training you get resume and LinkedIn help, technical and HR mock interviews, and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
      },
    ],
  },
];
