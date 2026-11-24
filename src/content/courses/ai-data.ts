import type { Program } from '../programs';

export type AiDataCourseSlug = 'data-science' | 'data-engineering' | 'data-analytics' | 'ai-product-owner';

/** Shared by the data courses in the AI & Data track. */
const data = {
  family: 'Data',
  accent: 'violet',
  heroImage: '/images/programs/ai-ml.jpg',
} as const;

export const aiDataCourses: Program<AiDataCourseSlug>[] = [
  {
    ...data,
    slug: 'data-science',
    name: 'Data Science',
    shortName: 'Data Science',
    tagline: 'From Python and statistics to machine learning models that answer business questions.',
    summary:
      'Learn the full data science workflow: Python, SQL and statistics, exploring and visualising data, building and evaluating machine learning models, and using generative AI in analysis, with projects on real-world datasets.',
    prerequisites:
      'No coding experience needed; Python is taught from the basics. Comfort with school-level maths helps.',
    highlights: ['Python, SQL & statistics', 'Machine learning models', 'Portfolio projects'],
    audience: [
      { title: 'Graduates & freshers', text: 'Start a career in data with a solid foundation.' },
      { title: 'Analysts', text: 'Move from reporting into predictive modelling.' },
      { title: 'Engineers & career switchers', text: 'Apply your problem-solving skills to data science.' },
    ],
    outcomes: [
      'Write Python for data with NumPy and pandas',
      'Query data with SQL',
      'Apply statistics and hypothesis testing',
      'Explore and visualise data',
      'Build regression, classification and clustering models',
      'Evaluate and tune models properly',
      'Use generative AI and LLMs in data work',
      'Present results to business audiences',
    ],
    modules: [
      {
        title: 'Python for data',
        summary: 'The language of data science.',
        topics: ['Python fundamentals', 'NumPy', 'pandas', 'Jupyter notebooks'],
      },
      {
        title: 'SQL & data wrangling',
        summary: 'Get data and get it clean.',
        topics: ['SQL queries and joins', 'Cleaning and reshaping data', 'Missing values and outliers', 'Feature engineering'],
      },
      {
        title: 'Statistics & probability',
        summary: 'The maths behind the models.',
        topics: ['Descriptive statistics', 'Probability distributions', 'Hypothesis testing', 'A/B testing'],
      },
      {
        title: 'Exploratory analysis & visualisation',
        summary: 'Find the story in the data.',
        topics: ['Exploratory data analysis', 'Matplotlib and Seaborn', 'Plotly', 'Telling a story with charts'],
      },
      {
        title: 'Machine learning',
        summary: 'Models that predict and group.',
        topics: ['Regression', 'Classification', 'Clustering', 'scikit-learn pipelines'],
      },
      {
        title: 'Model evaluation & tuning',
        summary: 'Know when a model is good enough.',
        topics: ['Train, validation and test splits', 'Choosing the right metric', 'Cross-validation and tuning', 'Explainability'],
      },
      {
        title: 'Deep learning & generative AI',
        summary: 'Where data science is heading.',
        topics: ['Neural network basics', 'Text data and NLP', 'LLMs for analysis', 'Prompting for data work'],
      },
      {
        title: 'Capstone & career readiness',
        summary: 'Show your work and get interview-ready.',
        topics: ['End-to-end capstone project', 'Sharing models with Streamlit', 'Portfolio on GitHub', 'Resume and mock interviews'],
      },
    ],
    tools: [
      'Python',
      'NumPy',
      'pandas',
      'SQL',
      'Jupyter',
      'Matplotlib',
      'Seaborn',
      'scikit-learn',
      'Streamlit',
      'LLM APIs',
      'Git & GitHub',
    ],
    projects: [
      {
        title: 'Customer churn prediction',
        text: 'A model that predicts which customers may leave, with the main drivers explained for the business.',
        stack: ['pandas', 'scikit-learn', 'Explainability'],
      },
      {
        title: 'Sales forecasting',
        text: 'A forecast of monthly sales from historical data, compared against a simple baseline.',
        stack: ['Time series', 'Python', 'Plotly'],
      },
      {
        title: 'Customer segmentation app',
        text: 'Customers grouped into segments by clustering, with the results shared in a Streamlit app.',
        stack: ['Clustering', 'Streamlit', 'GitHub'],
      },
    ],
    roles: [
      { title: 'Data Scientist', text: 'Build models that answer business questions.' },
      { title: 'Junior Machine Learning Engineer', text: 'Help take models into production.' },
      { title: 'Data Analyst', text: 'Analyse data and report insights.' },
      { title: 'Business Analytics Associate', text: 'Use data to support business decisions.' },
    ],
    faqs: [
      {
        q: 'How is this different from the AI & Machine Learning program?',
        a: 'Data Science focuses on statistics, analysis and classic machine learning for business problems. The AI & Machine Learning program goes further into deep learning and generative AI applications.',
      },
      {
        q: 'Do I need to be good at maths?',
        a: 'School-level maths is enough to start. The statistics you need is taught in the course, with the focus on using it rather than on proofs.',
      },
    ],
  },
  {
    ...data,
    slug: 'data-engineering',
    name: 'Data Engineering',
    shortName: 'Data Engineering',
    tagline: 'Build the pipelines, warehouses and lakehouses that every data team runs on.',
    summary:
      'Learn to design and build data pipelines: advanced SQL and Python, data modelling, Spark and Databricks, orchestration with Airflow, streaming with Kafka and cloud data platforms, with the data quality and DevOps practices teams expect.',
    prerequisites: 'Basic programming or SQL helps. Python and SQL are covered from the essentials up.',
    highlights: ['SQL, Python & Spark', 'Databricks & cloud', 'Batch and streaming pipelines'],
    audience: [
      { title: 'Graduates & freshers', text: 'Start a career building the systems data teams rely on.' },
      { title: 'Developers & DBAs', text: 'Move into data engineering from software or database roles.' },
      { title: 'Analysts', text: 'Go deeper into how data is collected, stored and served.' },
    ],
    outcomes: [
      'Write advanced SQL and Python for data',
      'Model data with star schemas and lakehouse layers',
      'Process large data sets with Apache Spark',
      'Build pipelines on Databricks with Delta Lake',
      'Orchestrate pipelines with Apache Airflow',
      'Stream data with Apache Kafka',
      'Use cloud data services on Azure and AWS',
      'Test, monitor and deploy pipelines',
    ],
    modules: [
      {
        title: 'SQL & Python for data',
        summary: 'The everyday tools of data engineering.',
        topics: ['Advanced SQL and window functions', 'Python for data processing', 'Linux and shell basics', 'Git'],
      },
      {
        title: 'Data modelling & warehousing',
        summary: 'Design data people can use.',
        topics: [
          'Dimensional modelling and star schemas',
          'Data warehouses',
          'Slowly changing dimensions',
          'Snowflake overview',
        ],
      },
      {
        title: 'Big data with Spark',
        summary: 'Process data at scale.',
        topics: ['Spark architecture', 'PySpark DataFrames', 'Spark SQL', 'Performance tuning'],
      },
      {
        title: 'Lakehouse with Databricks',
        summary: 'The modern data platform.',
        topics: ['Databricks workspace', 'Delta Lake', 'Medallion architecture', 'Unity Catalog'],
      },
      {
        title: 'Pipelines & orchestration',
        summary: 'Move data reliably.',
        topics: ['ETL and ELT', 'Apache Airflow', 'dbt', 'Incremental loads'],
      },
      {
        title: 'Streaming',
        summary: 'Data in real time.',
        topics: ['Apache Kafka', 'Spark Structured Streaming', 'Event-driven pipelines', 'Change data capture'],
      },
      {
        title: 'Cloud data platforms',
        summary: 'Run it in the cloud.',
        topics: ['Azure Data Factory', 'AWS S3 and Glue', 'Microsoft Fabric overview', 'Cost and security basics'],
      },
      {
        title: 'Quality, DevOps & career readiness',
        summary: 'Production habits and interview preparation.',
        topics: ['Data quality checks', 'CI/CD for pipelines', 'Capstone project', 'Resume and mock interviews'],
      },
    ],
    tools: [
      'SQL',
      'Python',
      'Apache Spark',
      'Databricks',
      'Delta Lake',
      'Apache Airflow',
      'dbt',
      'Apache Kafka',
      'Azure Data Factory',
      'AWS',
      'Snowflake',
      'Git',
    ],
    projects: [
      {
        title: 'Retail lakehouse',
        text: 'A bronze, silver and gold lakehouse on Databricks that turns raw sales files into reporting tables.',
        stack: ['Databricks', 'Delta Lake', 'PySpark'],
      },
      {
        title: 'Orchestrated daily pipeline',
        text: 'An Airflow pipeline that loads, transforms and tests data every day, with alerts when something fails.',
        stack: ['Airflow', 'dbt', 'Data quality'],
      },
      {
        title: 'Real-time order stream',
        text: 'A Kafka stream of orders processed with Spark Structured Streaming into a live reporting table.',
        stack: ['Kafka', 'Spark Streaming', 'CDC'],
      },
    ],
    certifications: [
      {
        name: 'Databricks Certified Data Engineer Associate',
        note: 'Covered by the Spark and Databricks modules.',
      },
    ],
    roles: [
      { title: 'Data Engineer', text: 'Build and run data pipelines and platforms.' },
      { title: 'Big Data Engineer', text: 'Process large data sets with Spark.' },
      { title: 'ETL Developer', text: 'Design and maintain data integration jobs.' },
      { title: 'Analytics Engineer', text: 'Model data for analysts and dashboards.' },
    ],
    faqs: [
      {
        q: 'Data engineering or data science: which is right for me?',
        a: 'Data engineers build the systems that collect and prepare data; data scientists analyse it and build models. If you enjoy building and automating, data engineering is a strong fit. An advisor can help you decide.',
      },
      {
        q: 'Which cloud does the course use?',
        a: 'The core skills (SQL, Spark, Databricks and Airflow) work on every cloud. You also work with Azure and AWS data services, which appear in many job postings.',
      },
    ],
  },
  {
    ...data,
    slug: 'data-analytics',
    name: 'Data Analytics',
    shortName: 'Data Analytics',
    tagline: 'Excel, SQL, Power BI and Python to turn business data into decisions.',
    summary:
      'Learn to analyse data and present it clearly: advanced Excel, SQL, Power BI with DAX, Tableau, Python for analysis and AI assistants such as Copilot, with dashboards and case studies built on real business problems.',
    prerequisites: 'No coding experience needed. Basic Excel helps.',
    highlights: ['Excel, SQL & Power BI', 'Dashboards & storytelling', 'PL-300 certification prep'],
    audience: [
      { title: 'Graduates & freshers', text: 'Start a data career with skills every business needs.' },
      {
        title: 'Working professionals',
        text: 'Bring data skills to your finance, sales, HR or operations role.',
      },
      { title: 'Career switchers', text: 'Move into analytics without a coding background.' },
    ],
    outcomes: [
      'Analyse data with advanced Excel and Power Query',
      'Query databases with SQL',
      'Model data and write DAX measures in Power BI',
      'Build interactive dashboards in Power BI and Tableau',
      'Analyse data with Python and pandas',
      'Apply statistics to business questions',
      'Use AI assistants to speed up analysis',
      'Present insights as a clear story',
    ],
    modules: [
      {
        title: 'Excel for analysis',
        summary: 'The tool every business uses.',
        topics: ['Formulas and lookups', 'Pivot tables and charts', 'Power Query', 'Data cleaning'],
      },
      {
        title: 'SQL',
        summary: 'Get the data yourself.',
        topics: ['Queries and filters', 'Joins', 'Aggregations and grouping', 'Window functions'],
      },
      {
        title: 'Statistics for analysts',
        summary: 'Read data correctly.',
        topics: ['Descriptive statistics', 'Distributions', 'Correlation', 'Hypothesis testing basics'],
      },
      {
        title: 'Power BI',
        summary: 'Microsoft’s business intelligence tool.',
        topics: ['Data modelling', 'DAX measures', 'Interactive reports', 'Publishing and sharing'],
      },
      {
        title: 'Tableau',
        summary: 'Visual analytics.',
        topics: ['Worksheets and dashboards', 'Calculated fields', 'Parameters and filters', 'A Tableau Public portfolio'],
      },
      {
        title: 'Python for analysts',
        summary: 'Analysis beyond spreadsheets.',
        topics: ['Python basics', 'pandas', 'Charts with Matplotlib', 'Automating reports'],
      },
      {
        title: 'AI for analysts',
        summary: 'Work faster with AI assistants.',
        topics: ['Copilot in Power BI and Excel', 'Prompting for analysis', 'Checking AI output', 'Data privacy'],
      },
      {
        title: 'Storytelling & career readiness',
        summary: 'Present insights and get interview-ready.',
        topics: ['Data storytelling', 'Capstone case study', 'PL-300 exam preparation', 'Resume and mock interviews'],
      },
    ],
    tools: ['Excel', 'Power Query', 'SQL', 'Power BI', 'DAX', 'Tableau', 'Python', 'pandas', 'Copilot', 'Git & GitHub'],
    projects: [
      {
        title: 'Sales performance dashboard',
        text: 'A Power BI dashboard of sales by region, product and month, with DAX measures for growth.',
        stack: ['Power BI', 'DAX', 'SQL'],
      },
      {
        title: 'HR attrition analysis',
        text: 'An analysis of why employees leave, with findings and recommendations for the HR team.',
        stack: ['Excel', 'Python', 'Statistics'],
      },
      {
        title: 'E-commerce story in Tableau',
        text: 'A Tableau story on customer behaviour, published to a public portfolio.',
        stack: ['Tableau', 'Storytelling', 'Tableau Public'],
      },
    ],
    certifications: [
      {
        name: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
        note: 'Covered by the Power BI module, with exam practice in the final module.',
      },
    ],
    roles: [
      { title: 'Data Analyst', text: 'Analyse data and report insights to the business.' },
      { title: 'Business Intelligence Analyst', text: 'Build dashboards and reporting.' },
      { title: 'Power BI Developer', text: 'Model data and build Power BI solutions.' },
      { title: 'MIS Analyst', text: 'Run the reports a business relies on.' },
    ],
    faqs: [
      {
        q: 'Do I need coding for data analytics?',
        a: 'No. Excel, SQL and Power BI are taught from the basics, and Python is introduced gently later in the course.',
      },
      {
        q: 'Data analytics or data science: which is right for me?',
        a: 'Analysts explain what happened and why, with dashboards and reports. Data scientists build models that predict. Analytics is a quicker start, and many analysts move into data science later.',
      },
    ],
  },
  {
    slug: 'ai-product-owner',
    family: 'AI',
    accent: 'rose',
    heroImage: '/images/programs/agentic-ai.jpg',
    name: 'AI Product Owner',
    shortName: 'AI Product Owner',
    tagline: 'Lead AI products from idea to launch, without needing to code.',
    summary:
      'Learn to own AI products: finding the right use cases, writing backlogs for machine learning and generative AI features, working with data scientists and engineers, measuring quality and value, and managing AI risk responsibly.',
    prerequisites:
      'No coding needed. Experience as a business analyst, product owner, project manager or in a business role helps.',
    highlights: ['AI use cases & backlogs', 'Evaluation & AI risk', 'PSPO preparation'],
    audience: [
      { title: 'Product owners & managers', text: 'Lead products with AI features.' },
      { title: 'Business analysts & project managers', text: 'Step into AI product roles.' },
      { title: 'Domain experts', text: 'Bring your industry knowledge to AI products.' },
    ],
    outcomes: [
      'Explain how machine learning, LLMs and AI agents work, and where they fail',
      'Find and prioritise AI use cases with real business value',
      'Write user stories and acceptance criteria for AI features',
      'Define data needs with data teams',
      'Prototype ideas with no-code AI tools',
      'Measure AI quality with evaluations and product metrics',
      'Manage AI risk, privacy and governance',
      'Run Scrum as a product owner',
    ],
    modules: [
      {
        title: 'AI for product people',
        summary: 'Enough AI to make good decisions.',
        topics: ['Machine learning basics', 'LLMs and generative AI', 'AI agents', 'What AI can and cannot do'],
      },
      {
        title: 'Product ownership with Scrum',
        summary: 'The product owner’s job.',
        topics: ['Scrum roles and events', 'Product vision and goals', 'Backlog management', 'Stakeholder management'],
      },
      {
        title: 'AI opportunity discovery',
        summary: 'Find problems worth solving with AI.',
        topics: ['Use case discovery', 'Value and feasibility scoring', 'Build, buy or partner', 'Business cases'],
      },
      {
        title: 'Backlogs for AI features',
        summary: 'Turn ideas into work a team can build.',
        topics: [
          'User stories for AI features',
          'Acceptance criteria for uncertain outputs',
          'Data requirements',
          'Working with data scientists',
        ],
      },
      {
        title: 'Prototyping & AI UX',
        summary: 'Test ideas before building them.',
        topics: ['Prompt-based prototypes', 'No-code AI tools', 'Designing for AI errors', 'Human in the loop'],
      },
      {
        title: 'Measuring AI products',
        summary: 'Know if it works and if it matters.',
        topics: [
          'Evaluation sets and quality metrics',
          'Product and business KPIs',
          'Experiments and A/B tests',
          'Cost and latency',
        ],
      },
      {
        title: 'Responsible AI & governance',
        summary: 'Ship AI people can trust.',
        topics: ['Bias and fairness', 'Privacy and India’s DPDP Act', 'AI regulation overview', 'Model and vendor risk'],
      },
      {
        title: 'Capstone & career readiness',
        summary: 'Own a product end to end, then get interview-ready.',
        topics: ['AI product capstone', 'Roadmap and pitch', 'PSPO exam preparation', 'Resume and mock interviews'],
      },
    ],
    tools: ['Jira', 'Confluence', 'Miro', 'Figma', 'ChatGPT', 'Claude', 'Gemini', 'No-code AI builders', 'Excel'],
    projects: [
      {
        title: 'AI support assistant',
        text: 'A product vision, backlog and evaluation plan for an AI assistant that answers customer questions.',
        stack: ['Backlog', 'Evaluations', 'KPIs'],
      },
      {
        title: 'Use case portfolio',
        text: 'A scored list of AI opportunities for a business, with a business case for the top one.',
        stack: ['Discovery', 'Scoring', 'Business case'],
      },
      {
        title: 'Clickable AI prototype',
        text: 'A working prototype tested with users, with its risks and guardrails written down.',
        stack: ['Prototyping', 'AI UX', 'Risk'],
      },
    ],
    certifications: [
      {
        name: 'Scrum.org Professional Scrum Product Owner (PSPO I)',
        note: 'Covered by the product ownership module.',
      },
      {
        name: 'Scrum.org Professional Scrum Product Owner – AI Essentials (PSPO-AI)',
        note: 'Covered by the AI modules.',
      },
    ],
    roles: [
      { title: 'AI Product Owner', text: 'Own the backlog for AI products and features.' },
      { title: 'AI Product Manager', text: 'Shape AI product strategy and roadmaps.' },
      { title: 'AI Business Analyst', text: 'Turn business needs into AI requirements.' },
      { title: 'AI Transformation Consultant', text: 'Help companies adopt AI where it adds value.' },
    ],
    faqs: [
      {
        q: 'Do I need to code?',
        a: 'No. You learn enough about how AI works to make good product decisions and work well with engineers, without writing code.',
      },
      {
        q: 'Who is this course best for?',
        a: 'People with some experience in business analysis, product, project management or a business domain. Freshers can join too; an advisor can tell you whether it suits your background.',
      },
    ],
  },
];
