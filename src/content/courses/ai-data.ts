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
    // From the client's page document (Nov 2026), written for the keywords chosen on 26 Nov 2026: primary
    // "data science course in hyderabad"; secondary "data scientist course", "data science training in hyderabad
    // with placement", "data science jobs for freshers". Hyderabad is the only location named. "Data analytics" and
    // "data analyst" belong to the Data Analytics page, and "data engineer vs data scientist" to Data Engineering.
    // Certifications checked on 26 Nov 2026: Microsoft DP-100 is retired; its successor is Microsoft Certified:
    // Machine Learning Operations Engineer Associate (exam AI-300). AWS is moving MLA-C01 to MLA-C02.
    h1: 'Data Science Course in Hyderabad',
    tagline: 'Turn data into predictions and decisions with Python, statistics and machine learning.',
    summary:
      'A data scientist turns company data into predictions that drive decisions, such as which customers will leave or how much stock to order. This data scientist course goes beyond cleaning data in notebooks: you test a business question with statistics, build and tune predictive models, explain them to a manager and deploy one as an app.',
    prerequisites:
      'Basic maths and logical thinking. No coding experience needed: Python is taught from the essentials.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'Python taught from the basics',
      location: 'Hyderabad',
    },
    highlights: ['Python, SQL & statistics', 'Machine learning & forecasting', 'Deploy models as apps'],
    about: {
      paragraphs: [
        'Our Data Science course in Hyderabad teaches you to turn business data into predictions and decisions. Data scientists answer questions such as which customers will leave, how much stock to order and which marketing works, using statistics and machine learning.',
        'You learn Python and SQL, statistics, exploratory analysis, supervised and unsupervised machine learning, forecasting, model explainability and deployment with Streamlit and FastAPI, and you use LLMs to speed up analysis. Classes are live and instructor-led, and you finish with three projects, a capstone and certification practice.',
      ],
      whyTitle: 'Why learn data science in 2026',
      why: [
        'Companies in many industries, from banking to retail, use data science to make decisions.',
        'Employers look for data scientists who can deploy models, not only build them, and this course teaches deployment.',
        'Pay grows with experience, as the salary snapshot below shows.',
      ],
    },
    audience: [
      {
        title: 'Graduates in science, maths, engineering or commerce',
        text: 'Start a data career with strong foundations.',
      },
      { title: 'Data & business analysts', text: 'Move from reporting into prediction.' },
      { title: 'Software developers', text: 'Add data science to your skills.' },
    ],
    outcomes: [
      'Work with data in Python, pandas and NumPy, and query it with SQL',
      'Answer business questions with statistics and A/B tests',
      'Explore data and tell its story with charts',
      'Build and tune regression, classification and tree-based models',
      'Segment customers and spot anomalies with unsupervised learning',
      'Forecast sales with ARIMA, Prophet and machine learning',
      'Explain models and use LLMs in data work',
      'Deploy a model as a Streamlit app or a FastAPI service',
    ],
    modules: [
      {
        title: 'Python for data science',
        summary: 'Build your Python base for data work.',
        topics: [
          'Python essentials',
          'pandas and NumPy',
          'Data cleaning',
          'Jupyter notebooks',
          'Git basics',
          'SQL for data science',
        ],
        lab: 'Clean and analyse a sales dataset with pandas.',
      },
      {
        title: 'Statistics & probability',
        summary: 'Answer business questions with confidence.',
        topics: [
          'Descriptive statistics',
          'Probability',
          'Sampling',
          'Hypothesis testing',
          'A/B tests',
          'Confidence intervals',
        ],
        lab: 'Run an A/B test and explain the result.',
      },
      {
        title: 'Exploratory data analysis',
        summary: 'Explore data and tell its story with charts.',
        topics: [
          'Visualisation with Matplotlib and Seaborn',
          'Finding patterns',
          'Outliers and missing data',
          'Feature engineering',
          'Telling a data story',
          'Dashboarding basics',
        ],
        lab: 'Build an EDA report with charts and a data story.',
      },
      {
        title: 'Supervised machine learning',
        summary: 'Build models that predict outcomes.',
        topics: [
          'Linear and logistic regression',
          'Decision trees and random forests',
          'Gradient boosting',
          'Cross-validation',
          'Hyperparameter tuning',
          'Model fairness',
        ],
        lab: 'Train, tune and compare churn models.',
      },
      {
        title: 'Unsupervised learning',
        summary: 'Find groups and patterns without labels.',
        topics: [
          'Clustering',
          'Customer segmentation',
          'Dimensionality reduction',
          'Anomaly detection',
          'Recommendation basics',
          'Customer lifetime value',
        ],
        lab: 'Segment customers with clustering.',
      },
      {
        title: 'Time series & forecasting',
        summary: 'Predict future values such as sales.',
        topics: [
          'Time series concepts',
          'Trend and seasonality',
          'ARIMA and Prophet',
          'Machine learning for forecasting',
          'Forecast accuracy',
        ],
        lab: 'Forecast monthly sales with Prophet.',
      },
      {
        title: 'AI & deployment',
        summary: 'Use generative AI in data work and deploy models.',
        topics: [
          'LLMs for data science',
          'Model explainability',
          'Streamlit apps',
          'APIs with FastAPI',
          'Model monitoring and drift',
        ],
        lab: 'Explain a model and deploy it as a Streamlit app.',
      },
      {
        title: 'Capstone & career readiness',
        summary: 'Deliver an end-to-end project and prepare for interviews.',
        topics: [
          'Capstone project',
          'GitHub portfolio',
          'Communicating results',
          'Certification practice',
          'Data science interview questions',
          'Mock interviews',
        ],
        lab: 'Present your capstone to a mock business team.',
      },
    ],
    tools: [
      'Python',
      'pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'scikit-learn',
      'XGBoost',
      'Prophet',
      'SQL',
      'Streamlit',
      'FastAPI',
      'Jupyter',
      'Git',
    ],
    skills: [
      'Python and pandas',
      'Statistics and A/B testing',
      'Data visualisation',
      'Feature engineering',
      'Regression and classification',
      'Clustering',
      'Time series forecasting',
      'Model explainability',
      'Streamlit apps',
      'Business communication',
    ],
    projects: [
      {
        title: 'Customer churn prediction',
        problem: 'A telecom company loses customers without warning.',
        text: 'Predict which customers will leave and explain why.',
        result: 'A churn model that flags at-risk customers and explains why.',
        stack: ['scikit-learn', 'XGBoost'],
      },
      {
        title: 'Sales forecasting',
        problem: 'Stores run out of popular products or overstock slow ones.',
        text: 'Forecast monthly sales by store and product.',
        result: 'Monthly sales forecasts by store and product.',
        stack: ['Prophet', 'pandas'],
      },
      {
        title: 'Customer segmentation app',
        problem: 'Marketing sends the same offer to every customer.',
        text: 'Group customers by behaviour and share the results in an app.',
        result: 'Customer segments shared in an app marketers can use.',
        stack: ['Clustering', 'Streamlit'],
      },
    ],
    capstone:
      'Solve an end-to-end business problem with data: frame the question, analyse, model, explain and deploy, then present your recommendations.',
    certificationIntro:
      'These are cloud machine learning certifications, run by AWS, Microsoft and Google. You book and pay for each exam with the provider and sit it online or at a test centre. This course teaches the machine learning skills the exams build on, from data preparation to deployment and monitoring, with certification practice in the final module. The exams also test each provider’s own services, such as Amazon SageMaker AI or Azure Machine Learning and Microsoft Foundry, so plan extra hands-on practice on that platform. Check the exam page for the current version before you book.',
    certifications: [
      {
        name: 'AWS Certified Machine Learning Engineer – Associate',
        note: 'Shows you can build, deploy and monitor machine learning on AWS. AWS is moving the exam to a new version (MLA-C02), in beta from September 2026, and recommends at least a year of hands-on experience with Amazon SageMaker AI.',
      },
      {
        name: 'Microsoft Certified: Machine Learning Operations Engineer Associate (AI-300)',
        note: 'Shows you can run machine learning and generative AI in production on Azure Machine Learning and Microsoft Foundry. It replaced the Azure Data Scientist Associate (DP-100), retired in June 2026.',
      },
      {
        name: 'Google Cloud Professional Machine Learning Engineer',
        note: 'A later step for designing ML systems on Google Cloud. Google recommends 3+ years of industry experience, including a year or more on Google Cloud.',
      },
    ],
    roles: [
      {
        title: 'Data Scientist',
        text: 'Builds models to answer business questions.',
        level: 'Junior to mid',
      },
      { title: 'Junior Machine Learning Engineer', text: 'Builds and deploys models.', level: 'Junior' },
      { title: 'Data Analyst', text: 'Analyses data and builds reports.', level: 'Fresher' },
      {
        title: 'Business Analytics Associate',
        text: 'Uses data to support business decisions.',
        level: 'Fresher',
      },
      { title: 'Decision Scientist', text: 'Uses data and experiments to guide strategy.', level: 'Mid' },
      { title: 'Forecasting Analyst', text: 'Builds sales and demand forecasts.', level: 'Junior to mid' },
    ],
    careers: {
      salaries: [
        { role: 'Data Scientist', experience: '1 to 8 years', pay: '₹3.8 L to ₹27.9 L' },
        { role: 'Data Analyst', experience: '0 to 6 years', pay: '₹2 L to ₹13.9 L' },
      ],
      salaryNote:
        'Annual salary ranges from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
      path: [
        {
          stage: 'Start (0 to 2 years)',
          roles: 'Junior Data Scientist, Data Analyst, Business Analytics Associate',
        },
        { stage: 'Grow (2 to 5 years)', roles: 'Data Scientist, Decision Scientist' },
        { stage: 'Lead (5+ years)', roles: 'Senior Data Scientist, Analytics Manager' },
      ],
    },
    faqs: [
      {
        q: 'What does a data scientist do?',
        a: 'A data scientist uses data, statistics and machine learning to predict outcomes and help a business decide, for example which customers may leave or how much stock to order. The work runs from framing the question and cleaning data to building, explaining and deploying a model.',
      },
      {
        q: 'What is the Data Science course syllabus?',
        a: 'Our Data Science course in Hyderabad has eight modules: Python for data science, statistics and probability, exploratory data analysis, supervised machine learning, unsupervised learning, time series and forecasting, AI and deployment, and capstone and career readiness. Every module has a hands-on lab.',
      },
      {
        q: 'What is the eligibility for the Data Science course?',
        a: 'The course suits graduates in science, maths, engineering or commerce, data and business analysts, and software developers. You need basic maths and logical thinking. No coding experience is needed, because Python is taught from the start. An advisor can check whether it suits your background.',
      },
      {
        q: 'Do I need strong maths to learn data science?',
        a: 'No. Basic maths is enough to start. The statistics you need is taught in module 2, with the focus on using it to answer business questions rather than on proofs.',
      },
      {
        q: 'Can freshers get data science jobs?',
        a: 'Yes, usually through entry roles. Freshers often start as a data analyst, business analytics associate or junior data scientist and grow into data scientist roles in 2 to 5 years. The three projects and the capstone you build give you work to show in interviews.',
      },
      {
        q: 'Is data science a good career?',
        a: 'Companies in many industries use data science, and employers look for people who can also deploy models and use AI, which this course covers. AmbitionBox lists data scientist salaries of ₹3.8 L to ₹27.9 L a year in India for 1 to 8 years of experience (November 2026).',
      },
      {
        q: 'Does the Data Science course include AI?',
        a: 'Yes. In module 7 you use LLMs to speed up analysis and learn where they help and where they mislead, alongside model explainability and deployment. For deep learning and generative AI applications, see our AI & Machine Learning course.',
      },
      {
        q: 'Which certifications does this Data Science course prepare me for?',
        a: 'It builds the machine learning skills behind the AWS Certified Machine Learning Engineer – Associate and Microsoft’s Machine Learning Operations Engineer Associate (exam AI-300, which replaced DP-100), with certification practice in the final module. Each exam also tests its provider’s own cloud services, so plan extra practice on that platform. You book and pay for each exam with the provider.',
      },
      {
        q: 'What projects will I build in the Data Science course?',
        a: 'A customer churn prediction model, monthly sales forecasts by store and product, and a customer segmentation app, plus an end-to-end capstone that you present to a mock business team.',
      },
      {
        q: 'Do data scientists need SQL?',
        a: 'Yes. Most company data lives in databases, so data scientists use SQL every day alongside Python. SQL is taught in module 1.',
      },
      {
        q: 'How is this different from the AI & Machine Learning course?',
        a: 'Data Science focuses on statistics, analysis, classic machine learning and forecasting for business problems. The AI & Machine Learning course goes further into deep learning and generative AI applications.',
      },
      {
        q: 'Are the Data Science classes live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Hyderabad.',
      },
      {
        q: 'What can I learn after the Data Science course?',
        a: 'AI & Machine Learning, Agentic AI Engineering or Data Engineering.',
      },
      {
        q: 'What are the Data Science course fees in Hyderabad?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Does this Data Science training in Hyderabad include placement support?',
        a: 'Yes. It includes resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
      },
    ],
  },
  {
    ...data,
    slug: 'data-engineering',
    name: 'Data Engineering',
    shortName: 'Data Engineering',
    // From the client's page document (Nov 2026), written for the keywords chosen on 26 Nov 2026: primary
    // "data engineering course in hyderabad"; secondary "data engineer training", "databricks course", "data
    // engineer jobs for freshers". Hyderabad is the only location named. "Data analytics" belongs to the Data
    // Analytics page. Databricks names follow its product renames: Delta Live Tables is now Lakeflow pipelines and
    // Databricks Jobs is Lakeflow Jobs. Microsoft DP-203 is retired; DP-700 (Fabric) is a next step until the
    // trainer confirms the course teaches Microsoft Fabric.
    h1: 'Data Engineering Course in Hyderabad',
    tagline: 'Build the pipelines and lakehouses that every data and AI team depends on.',
    summary:
      'A data engineer builds the pipelines that collect, clean and deliver data to analysts, data scientists and AI systems. This data engineer training goes beyond writing SQL queries: you build a lakehouse on Databricks, orchestrate daily pipelines with Airflow and dbt, stream live orders with Kafka and add the tests and monitoring that production data needs.',
    prerequisites: 'Basic programming or SQL helps. Python and SQL are covered from the essentials up.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'SQL and Python taught from the essentials',
      location: 'Hyderabad',
    },
    highlights: ['SQL, Python & PySpark', 'Databricks lakehouse', 'Airflow, dbt & Kafka pipelines'],
    about: {
      paragraphs: [
        'Our Data Engineering course in Hyderabad trains you to build the pipelines and platforms that analytics and AI teams depend on. Data engineers collect data from many sources, clean and model it, and deliver it reliably to dashboards, data scientists and AI systems.',
        'You learn advanced SQL and Python, data modelling, Apache Spark with PySpark, a Databricks lakehouse with Delta Lake and Unity Catalog, Airflow and dbt pipelines, Kafka streaming and Azure and AWS data services, with data quality and CI/CD. Classes are live and instructor-led, and the course prepares you for the Databricks Certified Data Engineer Associate exam.',
      ],
      whyTitle: 'Why learn data engineering in 2026',
      why: [
        'Every analytics and AI project needs reliable data, and data engineers deliver it.',
        'Lakehouse platforms such as Databricks are widely used, and employers look for people who can build on them.',
        'A clear career path, from ETL developer to senior data engineer and data architect.',
      ],
    },
    audience: [
      {
        title: 'Graduates with programming basics',
        text: 'Start a career building the systems data teams rely on.',
      },
      { title: 'SQL, ETL & BI developers', text: 'Move to modern cloud and lakehouse tools.' },
      { title: 'Software engineers', text: 'Specialise in data infrastructure.' },
    ],
    outcomes: [
      'Write advanced SQL with window functions and Python ingestion scripts',
      'Design star schemas and handle slowly changing dimensions',
      'Process large datasets with PySpark and Spark SQL',
      'Build bronze, silver and gold Delta tables on Databricks',
      'Orchestrate pipelines with Airflow, dbt and Azure Data Factory',
      'Stream data with Kafka and Spark Structured Streaming',
      'Load and secure data on Azure and AWS data services',
      'Add data quality tests, CI/CD and monitoring to pipelines',
    ],
    modules: [
      {
        title: 'SQL & Python for data',
        summary: 'The core skills every data engineer uses daily.',
        topics: [
          'Advanced SQL and window functions',
          'Python for data',
          'Files and formats: CSV, JSON, Parquet',
          'APIs as data sources',
          'Git',
          'Data contracts',
        ],
        lab: 'Write window-function SQL and a Python ingestion script.',
      },
      {
        title: 'Data modelling & warehousing',
        summary: 'Design how data is stored for fast, reliable analysis.',
        topics: [
          'Dimensional modelling',
          'Star and snowflake schemas',
          'Slowly changing dimensions',
          'Data warehouses',
          'Snowflake basics',
          'Data vault basics',
        ],
        lab: 'Design a star schema for retail sales.',
      },
      {
        title: 'Big data with Spark',
        summary: 'Process large datasets with Apache Spark.',
        topics: [
          'Spark architecture',
          'PySpark',
          'DataFrames and Spark SQL',
          'Transformations and actions',
          'Partitioning',
          'Performance tuning',
        ],
        lab: 'Process a large dataset with PySpark.',
      },
      {
        title: 'Lakehouse with Databricks',
        summary: 'Build a modern lakehouse.',
        topics: [
          'Databricks workspace',
          'Delta Lake',
          'Medallion architecture',
          'Unity Catalog',
          'Lakeflow Jobs',
          'Lakeflow pipelines (formerly Delta Live Tables)',
        ],
        lab: 'Build bronze, silver and gold Delta tables.',
      },
      {
        title: 'Pipelines & orchestration',
        summary: 'Schedule and manage pipelines.',
        topics: [
          'Apache Airflow DAGs',
          'dbt models and tests',
          'Azure Data Factory',
          'Incremental loads',
          'Error handling and retries',
          'Backfills',
        ],
        lab: 'Build an Airflow DAG and dbt models with tests.',
      },
      {
        title: 'Streaming',
        summary: 'Process data as it arrives.',
        topics: [
          'Apache Kafka basics',
          'Producers and consumers',
          'Spark Structured Streaming',
          'Real-time use cases',
          'Late and duplicate data',
          'Exactly-once processing',
        ],
        lab: 'Stream orders through Kafka into a Delta table.',
      },
      {
        title: 'Cloud data platforms',
        summary: 'Use the main cloud data services.',
        topics: [
          'Azure data services',
          'AWS data services: S3, Glue and Redshift',
          'Storage and security',
          'Cost management',
          'Choosing a platform',
          'Infrastructure as code basics',
        ],
        lab: 'Load data into a cloud warehouse and secure it.',
      },
      {
        title: 'Quality, DevOps & career readiness',
        summary: 'Make pipelines production-ready and prepare for interviews.',
        topics: [
          'Data quality tests',
          'CI/CD for data',
          'Monitoring and alerts',
          'On-call basics',
          'Certification practice',
          'Mock interviews',
        ],
        lab: 'Add data quality tests and a CI pipeline.',
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
    skills: [
      'Advanced SQL',
      'Python for data',
      'Data modelling',
      'Apache Spark',
      'Databricks and Delta Lake',
      'Airflow and dbt',
      'Kafka streaming',
      'Azure and AWS data services',
      'Data quality',
      'CI/CD for data',
    ],
    projects: [
      {
        title: 'Retail lakehouse',
        problem: 'Retail sales data sits in many files and systems.',
        text: 'Build bronze, silver and gold layers for retail sales data on Databricks.',
        result: 'A lakehouse with clean, trusted sales tables.',
        stack: ['Databricks', 'Delta Lake'],
      },
      {
        title: 'Orchestrated daily pipeline',
        problem: 'Reports break because daily data loads fail silently.',
        text: 'Load, transform and test data every day with Airflow and dbt.',
        result: 'Orchestrated, tested pipelines with alerts.',
        stack: ['Airflow', 'dbt'],
      },
      {
        title: 'Real-time order stream',
        problem: 'Managers need live order numbers, not yesterday’s.',
        text: 'Stream orders through Kafka into a live dashboard table.',
        result: 'A real-time order stream feeding a live table.',
        stack: ['Kafka', 'Spark Structured Streaming'],
      },
    ],
    capstone:
      'Build a production-style data platform for a sample company: ingestion, lakehouse, orchestration, streaming and quality checks, with documentation.',
    certificationIntro:
      'Each certification is run by its vendor. You book and pay for the exam with Databricks, Microsoft or AWS and sit it online or at a test centre. None of these exams has a formal prerequisite, but each vendor expects hands-on experience; Databricks suggests at least six months on its platform. This course prepares you for the Databricks Certified Data Engineer Associate exam, with certification practice in the final module. Check the exam page for the current version before you book.',
    certifications: [
      {
        name: 'Databricks Certified Data Engineer Associate',
        note: 'Prepared in this course through the Spark and Databricks modules. The exam covers data ingestion and transformation, Lakeflow Jobs, CI/CD, and governance and security on Databricks.',
      },
      {
        name: 'Microsoft Certified: Fabric Data Engineer Associate (DP-700)',
        note: 'A next step for Microsoft roles. The exam is on Microsoft Fabric and uses SQL, PySpark and KQL; this course builds the SQL, PySpark and pipeline skills, and Fabric needs extra study. The older Azure Data Engineer Associate (DP-203) was retired in March 2025.',
      },
      {
        name: 'AWS Certified Data Engineer – Associate',
        note: 'A next step for AWS roles. AWS recommends 2 to 3 years of data engineering experience and 1 to 2 years of hands-on AWS experience.',
      },
    ],
    roles: [
      { title: 'Data Engineer', text: 'Builds and runs data pipelines.', level: 'Junior to mid' },
      { title: 'Big Data Engineer', text: 'Processes large datasets with Spark.', level: 'Mid' },
      { title: 'ETL Developer', text: 'Builds data extraction and loading jobs.', level: 'Fresher to mid' },
      {
        title: 'Analytics Engineer',
        text: 'Models data for analysis with dbt and SQL.',
        level: 'Junior to mid',
      },
      { title: 'Azure Data Engineer', text: 'Builds pipelines on Azure.', level: 'Junior to mid' },
      { title: 'Databricks Developer', text: 'Builds lakehouse solutions on Databricks.', level: 'Mid' },
    ],
    careers: {
      salaries: [{ role: 'Data Engineer', experience: 'Varies', pay: '₹3.9 L to ₹22 L' }],
      salaryNote:
        'Annual salary range from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
      path: [
        { stage: 'Start (0 to 2 years)', roles: 'ETL Developer, Junior Data Engineer' },
        { stage: 'Grow (2 to 5 years)', roles: 'Data Engineer, Azure Data Engineer, Analytics Engineer' },
        { stage: 'Lead (5+ years)', roles: 'Senior Data Engineer, Data Architect' },
      ],
    },
    faqs: [
      {
        q: 'What does a data engineer do?',
        a: 'A data engineer builds the pipelines that collect, clean and deliver data to analysts, data scientists and AI systems, and keeps them reliable with tests and monitoring.',
      },
      {
        q: 'What is the Data Engineering course syllabus?',
        a: 'Eight modules: SQL and Python for data, data modelling and warehousing, big data with Spark, lakehouse with Databricks, pipelines and orchestration, streaming, cloud data platforms, and quality, DevOps and career readiness. Every module has a hands-on lab.',
      },
      {
        q: 'Data engineer vs data scientist: what is the difference?',
        a: 'Data engineers build the systems that collect and prepare data. Data scientists use that data to build models and predictions. If you enjoy building and automating, data engineering is a good fit; if you prefer statistics and modelling, see our Data Science course.',
      },
      {
        q: 'Can freshers get data engineer jobs?',
        a: 'Yes, usually through entry roles such as ETL developer or junior data engineer, which suit graduates with programming basics. SQL, PySpark and the projects you build in this course make your profile stronger.',
      },
      {
        q: 'Does the Data Engineering course teach PySpark?',
        a: 'Yes. Module 3 teaches Apache Spark with PySpark: DataFrames, Spark SQL, transformations and actions, partitioning and performance tuning. You use PySpark again on Databricks and for streaming.',
      },
      {
        q: 'Does the course include Databricks training?',
        a: 'Yes. Module 4 is a Databricks lakehouse module: the workspace, Delta Lake, the medallion architecture, Unity Catalog, Lakeflow Jobs and Lakeflow pipelines (formerly Delta Live Tables). The retail lakehouse project is built on Databricks.',
      },
      {
        q: 'Does this course prepare me for the Databricks Certified Data Engineer Associate certification?',
        a: 'Yes. The Spark and Databricks modules cover what the Databricks Certified Data Engineer Associate exam tests, and module 8 includes certification practice. You register and pay for the exam with Databricks. There is no formal prerequisite, but Databricks recommends at least six months of hands-on experience.',
      },
      {
        q: 'Which cloud does the Data Engineering course use?',
        a: 'Azure and AWS: Azure Data Factory and Azure data services, and AWS S3, Glue and Redshift, with Databricks and Snowflake on top. The core skills (SQL, Spark and Airflow) work on any cloud.',
      },
      {
        q: 'Do I need to know Python for data engineering?',
        a: 'Basic programming or SQL helps. Python and SQL are taught from the essentials up in module 1.',
      },
      {
        q: 'What is a lakehouse?',
        a: 'A data platform that combines a data lake’s low-cost storage with a warehouse’s reliability, such as Databricks with Delta Lake.',
      },
      {
        q: 'What is Apache Airflow?',
        a: 'An open-source tool for scheduling and monitoring data pipelines. Each pipeline is written in Python as a DAG, a set of tasks and the order they run in.',
      },
      {
        q: 'Is data engineering a good career?',
        a: 'Every analytics and AI project needs reliable data, so data engineers are hired across industries. AmbitionBox lists data engineer salaries of ₹3.9 L to ₹22 L a year in India (November 2026), and the path leads to senior data engineer and data architect roles.',
      },
      {
        q: 'What can I learn after the Data Engineering course?',
        a: 'Data Science, AI & Machine Learning, or a cloud certification such as the AWS Certified Data Engineer – Associate.',
      },
      {
        q: 'What are the Data Engineering course fees in Hyderabad?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Are the Data Engineering classes live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Hyderabad.',
      },
      {
        q: 'Does the Data Engineering course in Hyderabad include placement support?',
        a: 'Yes. It includes resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
      },
    ],
  },
  {
    ...data,
    slug: 'data-analytics',
    name: 'Data Analytics',
    shortName: 'Data Analytics',
    // From the client's page document (Nov 2026), written for the keywords chosen on 26 Nov 2026:
    // primary "data analytics course in hyderabad"; secondary "data analyst course with placement",
    // "power bi course in hyderabad", "pl-300 certification". Hyderabad is the only location named.
    h1: 'Data Analytics Course in Hyderabad',
    tagline: 'Turn raw data into dashboards and decisions with Excel, SQL, Power BI and Tableau.',
    summary:
      'A data analyst turns raw business data into the dashboards and answers managers use to decide what to do next. This Data Analytics course goes beyond tool features: you clean messy data, query it with SQL, build Power BI and Tableau dashboards and present a clear recommendation from them.',
    prerequisites: 'No coding experience needed. Basic Excel helps.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'No prior coding needed; SQL and Python are taught from scratch',
      location: 'Hyderabad',
    },
    highlights: ['Excel, SQL & Power BI', 'Tableau & Python for analysts', 'PL-300 certification prep'],
    about: {
      paragraphs: [
        'Our Data Analytics course in Hyderabad is a practical way into a data career, with no coding background needed. Data analysts turn raw business data into dashboards and answers that managers use to decide what to do next.',
        'You learn Excel and Power Query, SQL, statistics, Power BI with DAX, Tableau, Python for analysts and AI tools such as Copilot, and finish by presenting a data story. If you came looking for a Power BI course in Hyderabad, Power BI has a full module, from data modelling and DAX to the Power BI service and row-level security. Classes are live and instructor-led, and the course prepares you for Microsoft’s PL-300 exam for the Power BI Data Analyst Associate certification.',
      ],
      whyTitle: 'Why learn data analytics in 2026',
      why: [
        'Companies of every size, from startups to banks, need people who can turn their data into decisions.',
        'Many data analyst job posts ask for the same core skills: Excel, SQL and Power BI.',
        'A practical start: no coding background needed, with clear entry roles for freshers.',
      ],
    },
    audience: [
      { title: 'Freshers from any degree', text: 'Start a data career with no coding background.' },
      { title: 'Excel & MIS professionals', text: 'Move up from spreadsheets to SQL, Power BI and Tableau.' },
      { title: 'Business professionals', text: 'Use data to make better decisions in your current role.' },
    ],
    outcomes: [
      'Clean and summarise data in Excel with Power Query and PivotTables',
      'Query databases with SQL, from joins to window functions',
      'Use basic statistics to test whether a change in the numbers is real',
      'Model data, write DAX measures and publish secure reports in Power BI',
      'Build interactive dashboards in Tableau',
      'Automate a weekly report with Python and pandas',
      'Use Copilot and LLMs to speed up analysis, and check their answers',
      'Present a dashboard and a clear recommendation to managers',
      'Prepare for the Microsoft PL-300 exam',
    ],
    modules: [
      {
        title: 'Excel for analysis',
        summary: 'Master the analyst’s everyday tool.',
        topics: [
          'Formulas and lookups',
          'PivotTables',
          'Power Query',
          'Charts',
          'Data cleaning',
          'Excel dashboards',
        ],
        lab: 'Clean a messy dataset with Power Query.',
      },
      {
        title: 'SQL for data analysis',
        summary: 'Pull and shape data from databases yourself.',
        topics: [
          'SELECT and filtering',
          'Joins',
          'GROUP BY and aggregates',
          'Subqueries and CTEs',
          'Window functions',
          'Query performance',
        ],
        lab: 'Write SQL queries with joins and window functions.',
      },
      {
        title: 'Statistics for analysts',
        summary: 'Use statistics to answer questions correctly.',
        topics: [
          'Averages and spread',
          'Distributions',
          'Correlation',
          'Hypothesis testing basics',
          'Common statistics and chart mistakes',
        ],
        lab: 'Test whether a change in sales is significant.',
      },
      {
        title: 'Power BI',
        summary: 'Build interactive reports in Microsoft Power BI.',
        topics: [
          'Data modelling',
          'DAX measures',
          'Visuals and interactions',
          'Publishing and sharing in the Power BI service',
          'Row-level security',
        ],
        lab: 'Build a Power BI report with DAX measures.',
      },
      {
        title: 'Tableau',
        summary: 'Build dashboards in Tableau.',
        topics: [
          'Connecting to data',
          'Calculated fields and Tableau calculations',
          'Dashboards',
          'Parameters and filters',
          'Publishing to Tableau Public',
        ],
        lab: 'Build an interactive Tableau dashboard.',
      },
      {
        title: 'Python for analysts',
        summary: 'Analyse larger datasets with Python.',
        topics: ['Python basics', 'pandas', 'Charts in Python', 'Automating reports', 'Working in notebooks'],
        lab: 'Automate a weekly report with Python.',
      },
      {
        title: 'AI for analysts',
        summary: 'Use AI to speed up analysis, safely.',
        topics: [
          'Copilot in Power BI and Excel',
          'LLMs for SQL and summaries',
          'Prompting for analysis',
          'Checking AI output',
          'AI and data privacy',
        ],
        lab: 'Use Copilot to draft and check an analysis.',
      },
      {
        title: 'Storytelling & career readiness',
        summary: 'Present insights and prepare for interviews.',
        topics: [
          'Data storytelling',
          'Presenting to managers',
          'PL-300 exam practice',
          'Analyst interview questions and case studies',
          'Mock interviews',
        ],
        lab: 'Present a dashboard and a recommendation.',
      },
    ],
    tools: [
      'Excel',
      'Power Query',
      'SQL',
      'Power BI',
      'DAX',
      'Tableau',
      'Tableau Public',
      'Python',
      'pandas',
      'Copilot in Power BI and Excel',
    ],
    skills: [
      'Excel and Power Query',
      'SQL',
      'Statistics',
      'Power BI and DAX',
      'Tableau',
      'Python and pandas',
      'Copilot for analysis',
      'Data cleaning',
      'Dashboard design',
      'Data storytelling',
    ],
    projects: [
      {
        title: 'Sales performance dashboard',
        problem: 'Leaders cannot see sales performance by region and product.',
        text: 'Build a Power BI dashboard that tracks sales by region and product, with DAX measures.',
        result: 'A Power BI dashboard leaders can review every week.',
        stack: ['Power BI', 'DAX'],
      },
      {
        title: 'HR attrition analysis',
        problem: 'HR does not know why people are leaving.',
        text: 'Analyse why employees leave and recommend actions.',
        result: 'An attrition analysis with clear actions for HR.',
        stack: ['SQL', 'Excel'],
      },
      {
        title: 'E-commerce story in Tableau',
        problem: 'An online store needs to understand its customers.',
        text: 'Tell a customer story with an interactive Tableau dashboard.',
        result: 'An interactive Tableau story of customer behaviour.',
        stack: ['Tableau'],
      },
    ],
    capstone:
      'Answer a real business question end to end: clean the data, analyse it, build a dashboard and present a recommendation.',
    certificationIntro:
      'Microsoft and Salesforce, which owns Tableau, run their own exams, and you register and pay for each exam with them. PL-300 is booked through Microsoft Learn and taken with Pearson VUE, online or at a test centre; it has no prerequisites, and you renew the certification every year with a free online assessment on Microsoft Learn. The Tableau exam is booked through Salesforce’s Trailhead site and has no prerequisites, though Salesforce recommends hands-on Tableau experience first. Check the exam page for the current rules before you book. This course prepares you for PL-300.',
    certifications: [
      {
        name: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
        note: 'Prepared in this course: Power BI in module 4, Copilot in module 7 and PL-300 practice in module 8. Shows you can prepare, model, visualise and analyse data, and manage and secure Power BI.',
      },
      {
        name: 'Salesforce Certified Tableau Data Analyst',
        note: 'Module 5 covers the Tableau skills this exam builds on. Salesforce recommends at least six months of hands-on Tableau experience, including Tableau Prep and Tableau Server or Tableau Cloud, so plan extra practice before you book.',
      },
      {
        name: 'Google Data Analytics Professional Certificate',
        note: 'An optional extra, separate from this course: Google’s self-paced online certificate on Coursera, earned by completing Google’s own courses rather than by one exam.',
      },
    ],
    roles: [
      { title: 'Data Analyst', text: 'Analyses data and builds reports.', level: 'Fresher to mid' },
      {
        title: 'Business Intelligence Analyst',
        text: 'Builds dashboards for decision makers.',
        level: 'Junior to mid',
      },
      { title: 'Power BI Developer', text: 'Builds Power BI models and reports.', level: 'Junior to mid' },
      { title: 'MIS Analyst', text: 'Prepares regular business reports.', level: 'Fresher' },
      { title: 'Tableau Developer', text: 'Builds Tableau dashboards.', level: 'Junior to mid' },
      { title: 'Reporting Analyst', text: 'Delivers recurring reports and KPIs.', level: 'Fresher' },
      {
        title: 'Business Analyst (Data)',
        text: 'Uses data to improve business processes.',
        level: 'Junior to mid',
      },
    ],
    careers: {
      salaries: [{ role: 'Data Analyst', experience: '0 to 6 years', pay: '₹2 L to ₹13.9 L' }],
      salaryNote:
        'Annual salary range from AmbitionBox (accessed November 2026). Actual pay depends on the company, city, skills and experience.',
      path: [
        { stage: 'Start (0 to 2 years)', roles: 'Data Analyst, MIS Analyst, Reporting Analyst' },
        { stage: 'Grow (2 to 5 years)', roles: 'BI Analyst, Power BI Developer' },
        { stage: 'Lead (5+ years)', roles: 'Analytics Lead, BI Manager' },
      ],
    },
    faqs: [
      {
        q: 'What does a data analyst do?',
        a: 'A data analyst collects, cleans and analyses business data, then builds reports and dashboards that answer questions such as which products are growing or why customers leave. Managers use those answers to decide what to do next.',
      },
      {
        q: 'What is the Data Analytics course syllabus?',
        a: 'Eight modules: Excel for analysis, SQL for data analysis, statistics for analysts, Power BI, Tableau, Python for analysts, AI for analysts, and storytelling and career readiness. Every module has a hands-on lab, and you build three projects and a capstone.',
      },
      {
        q: 'Does data analytics require coding?',
        a: 'You do not need any coding experience to join. Excel, Power BI and Tableau need no code, and the SQL and Python you use are taught from scratch.',
      },
      {
        q: 'Data analytics or data science: which is right for me?',
        a: 'Analytics explains what happened, with reports and dashboards. Data science predicts what will happen, with models. Analytics is a quicker start, and many analysts move into data science later.',
      },
      {
        q: 'Power BI or Tableau: which should I learn?',
        a: 'Both are taught, so you can apply for roles that ask for either. Power BI works closely with Excel and other Microsoft tools. Tableau is known for visual analysis, and Tableau Public lets you share dashboards in a free online portfolio.',
      },
      {
        q: 'What is DAX?',
        a: 'Data Analysis Expressions, the formula language used in Power BI to build measures such as sales growth or year-to-date totals.',
      },
      {
        q: 'Does this course prepare me for the PL-300 certification?',
        a: 'Yes. PL-300 is Microsoft’s exam for the Microsoft Certified: Power BI Data Analyst Associate certification. The course covers the areas it tests, including Copilot in Power BI, and module 8 includes PL-300 practice. You book and pay for the exam with Microsoft. The Tableau module also covers the skills behind the Salesforce Certified Tableau Data Analyst exam, which needs more hands-on practice after the course.',
      },
      {
        q: 'Will I use AI in this course?',
        a: 'Yes. You use Copilot in Power BI and Excel, and LLMs to draft SQL and summaries, and you learn to check their answers and keep private data safe.',
      },
      {
        q: 'What projects will I build in the Data Analytics course?',
        a: 'A Power BI sales performance dashboard, an HR attrition analysis and an e-commerce customer story in Tableau, plus a capstone where you answer a real business question end to end.',
      },
      {
        q: 'Can freshers get data analyst jobs?',
        a: 'Yes. Entry roles such as data analyst, MIS analyst and reporting analyst suit freshers, and no coding background is needed to start. Your projects, a Tableau Public portfolio and the PL-300 certification make your profile stronger.',
      },
      {
        q: 'Is data analytics a good career?',
        a: 'Businesses in every industry use data to make decisions, so analysts work in many sectors. AmbitionBox lists data analyst salaries of ₹2 L to ₹13.9 L a year in India for 0 to 6 years of experience (November 2026). From analyst roles you can grow into BI, Power BI development or analytics leadership.',
      },
      {
        q: 'Is Power BI enough to get a data analyst job?',
        a: 'Power BI with SQL and Excel covers the core of many analyst job posts, and this course teaches all three, plus Tableau and Python.',
      },
      {
        q: 'What can I learn after the Data Analytics course?',
        a: 'Data Science to build predictive models, Data Engineering to build data pipelines, or AI Product Owner to lead AI products.',
      },
      {
        q: 'Are the Data Analytics classes live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Hyderabad.',
      },
      {
        q: 'What is the Data Analytics course fee in Hyderabad?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Is this a data analyst course with placement support?',
        a: 'Yes. It includes resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
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
    // From the client's page document (Nov 2026), written for the keywords chosen on 26 Nov 2026:
    // primary "ai product owner course"; secondary "ai product owner certification", "ai product manager
    // course in hyderabad", "product owner training in hyderabad". Hyderabad is the only location named.
    h1: 'AI Product Owner Course in Hyderabad',
    tagline: 'Decide which AI features to build, how to measure them and how to ship them responsibly.',
    summary:
      'An AI product owner decides which AI features a team builds, why they matter and how success is measured. This AI Product Owner course goes beyond buzzwords: you find real AI use cases, write backlogs an AI team can build, test a clickable prototype with users and set the metrics and guardrails for release.',
    prerequisites:
      'No coding needed. Experience as a business analyst, product owner, project manager or in a business role helps.',
    details: {
      mode: 'Live classes on Zoom, every class recorded',
      coding: 'No coding needed',
      location: 'Hyderabad',
    },
    highlights: [
      'AI use cases & backlogs',
      'Prototypes, metrics & responsible AI',
      'PSPO I & PSPO-AI Essentials prep',
    ],
    about: {
      paragraphs: [
        'Our AI Product Owner course in Hyderabad prepares business analysts, product owners and project managers to lead AI products. AI product owners decide which AI features to build, how to measure them and how to release them responsibly.',
        'You learn how AI and LLMs work in plain terms, product ownership with Scrum, AI use-case discovery, backlogs for AI features, no-code prototyping, AI metrics and responsible AI. If you are looking for product owner training in Hyderabad, module 2 teaches the product owner role in Scrum from the start. Classes are live and instructor-led, and the course prepares you for two Scrum.org certifications: PSPO I and PSPO-AI Essentials.',
      ],
      whyTitle: 'Why learn AI product ownership in 2026',
      why: [
        'Many companies are adding AI features and need people who can decide what to build.',
        'Business analysis, product and project skills transfer directly into AI product roles.',
        'No coding needed: you decide what to build, and engineers build it.',
      ],
    },
    audience: [
      {
        title: 'Business analysts & product owners',
        text: 'Lead AI products and features with skills you already use.',
      },
      { title: 'Project managers', text: 'Move into product roles on AI teams.' },
      { title: 'Domain experts', text: 'Use your industry knowledge to shape AI products.' },
    ],
    outcomes: [
      'Explain how AI, machine learning and LLMs work, and where they fail',
      'Write a product goal and order a product backlog in Scrum',
      'Find and score AI use cases on value, feasibility and data readiness',
      'Build a business case and decide whether to build, buy or partner',
      'Write user stories and acceptance criteria for AI features, with evaluation criteria',
      'Prototype an AI feature and test it with users',
      'Set product, quality, cost and guardrail metrics for an AI feature',
      'Check an AI feature for bias, privacy, security and human oversight',
      'Prepare for the Scrum.org PSPO I and PSPO-AI Essentials assessments',
    ],
    modules: [
      {
        title: 'AI for product people',
        summary: 'Understand AI well enough to make product decisions.',
        topics: [
          'AI, machine learning and LLMs in plain business terms',
          'What AI can and cannot do',
          'Costs and limits of AI features',
          'AI product examples',
          'Working with AI engineers',
        ],
        lab: 'Explain an AI feature’s limits to a mock stakeholder.',
      },
      {
        title: 'Product ownership with Scrum',
        summary: 'The product owner role, from product goal to sprint review.',
        topics: [
          'The Scrum framework',
          'Product goal and vision',
          'Product backlog management',
          'Stakeholder mapping and management',
          'Sprint reviews',
        ],
        lab: 'Write a product goal and order a backlog.',
      },
      {
        title: 'AI opportunity discovery',
        summary: 'Find where AI adds value.',
        topics: [
          'Use-case discovery',
          'Value versus feasibility',
          'Data readiness',
          'Build, buy or partner',
          'Business cases',
          'Cost estimation',
        ],
        lab: 'Score 10 AI use cases on value and feasibility.',
      },
      {
        title: 'Backlogs for AI features',
        summary: 'Write work an AI team can build.',
        topics: [
          'User stories for AI features',
          'Acceptance criteria for uncertain outputs, down to prompt level',
          'Evaluation criteria',
          'Data requirements',
          'Release planning',
        ],
        lab: 'Write AI user stories with evaluation criteria.',
      },
      {
        title: 'Prototyping & AI UX',
        summary: 'Test AI ideas quickly with users.',
        topics: [
          'No-code AI builders',
          'Clickable prototypes in Figma',
          'Designing for AI errors',
          'Human-in-the-loop design',
          'User testing and iteration',
        ],
        lab: 'Build a clickable AI prototype and test it with two users.',
      },
      {
        title: 'Measuring AI products',
        summary: 'Know whether an AI feature works and is worth it.',
        topics: [
          'Product metrics and adoption',
          'AI quality evaluation',
          'Experiments and A/B tests',
          'Cost per outcome',
          'Guardrail metrics',
        ],
        lab: 'Define the metrics for an AI feature.',
      },
      {
        title: 'Responsible AI & governance',
        summary: 'Ship AI safely.',
        topics: [
          'Bias and fairness',
          'Privacy and security',
          'AI regulation basics',
          'Human oversight',
          'Governance checklists',
        ],
        lab: 'Complete a responsible AI checklist for a feature.',
      },
      {
        title: 'Capstone & career readiness',
        summary: 'Present an AI product plan and prepare for PSPO and interviews.',
        topics: [
          'Capstone pitch and product storytelling',
          'PSPO I and PSPO-AI Essentials practice',
          'Product interview questions',
          'Portfolio',
          'Mock interviews',
        ],
        lab: 'Pitch your AI product to a mock leadership team.',
      },
    ],
    tools: [
      'Jira',
      'Confluence',
      'Miro',
      'Figma',
      'ChatGPT',
      'Claude',
      'Gemini',
      'No-code AI builders',
      'Excel',
    ],
    skills: [
      'AI and LLM fundamentals',
      'Scrum product ownership',
      'Use-case discovery',
      'AI backlog writing',
      'Prototyping',
      'AI metrics',
      'Experimentation',
      'Responsible AI',
      'Stakeholder management',
      'Product pitching',
    ],
    projects: [
      {
        title: 'AI support assistant',
        problem: 'A support team wants AI but does not know where to start.',
        text: 'Define the product, backlog and metrics for an AI support assistant.',
        result: 'A product plan, backlog and metrics for the assistant.',
        stack: ['Jira', 'Miro'],
      },
      {
        title: 'Use-case portfolio',
        problem: 'Leadership has many AI ideas but no priorities.',
        text: 'Find and rank 10 AI use cases for a company, with business cases.',
        result: 'A ranked AI use-case portfolio with business cases.',
        stack: ['Miro', 'Excel'],
      },
      {
        title: 'Clickable AI prototype',
        problem: 'An AI idea needs user validation before engineers spend time on it.',
        text: 'Prototype an AI feature and test it with users.',
        result: 'A tested clickable prototype with user feedback.',
        stack: ['Figma', 'No-code AI builder'],
      },
    ],
    capstone:
      'Take an AI product from idea to release plan: discovery, backlog, prototype, metrics and governance, pitched to a mock leadership team.',
    certificationIntro:
      'Scrum.org runs its own online assessments. You buy each assessment on Scrum.org and take it online; Scrum.org recommends a course but does not require one, and its certifications do not expire. PSPO I has 80 questions and PSPO-AI Essentials has 40, each in 60 minutes, and both need 85% to pass. The assessment fees are paid to Scrum.org. Check the assessment pages on Scrum.org for the current rules before you buy. This course prepares you for both.',
    certifications: [
      {
        name: 'Scrum.org Professional Scrum Product Owner I (PSPO I)',
        note: 'Prepared in this course, with product ownership in module 2 and PSPO practice in module 8. Shows you understand the product owner’s accountability in Scrum.',
      },
      {
        name: 'Scrum.org Professional Scrum Product Owner – AI Essentials (PSPO-AI Essentials)',
        note: 'Prepared in this course through the AI modules. Scrum.org’s assessment covers AI basics, AI security and ethics, and AI in product ownership.',
      },
      {
        name: 'AI-Empowered SAFe Product Owner/Product Manager (POPM)',
        note: 'A next step if your company uses SAFe, the Scaled Agile Framework. Scaled Agile runs this certification, and this course does not teach SAFe.',
      },
    ],
    roles: [
      { title: 'AI Product Owner', text: 'Owns the backlog for an AI product team.', level: 'Mid' },
      {
        title: 'AI Product Manager',
        text: 'Sets strategy and roadmap for AI products.',
        level: 'Mid to senior',
      },
      {
        title: 'AI Business Analyst',
        text: 'Gathers requirements for AI solutions.',
        level: 'Junior to mid',
      },
      { title: 'AI Transformation Consultant', text: 'Helps companies adopt AI.', level: 'Experienced' },
      { title: 'Product Owner', text: 'Owns the backlog for a product team.', level: 'Mid' },
      { title: 'Digital Product Manager', text: 'Manages digital products end to end.', level: 'Mid' },
    ],
    faqs: [
      {
        q: 'What does an AI product owner do?',
        a: 'An AI product owner decides which AI features to build, writes and orders the backlog, sets the metrics and guardrails, and works with engineers, data scientists and stakeholders to release them.',
      },
      {
        q: 'Does an AI product owner need to code?',
        a: 'No. Product owners decide what to build and why; engineers build it. This course teaches enough about how AI works to make good product decisions and talk with engineers, without writing code.',
      },
      {
        q: 'Who is this AI Product Owner course for?',
        a: 'Business analysts, product owners, project managers and domain experts moving into AI. If you are new to Scrum, module 2 teaches the product owner role from the start. Freshers can ask an advisor whether the course suits their background.',
      },
      {
        q: 'How is AI product ownership different?',
        a: 'AI outputs are uncertain, so you define evaluation criteria, data needs and guardrails, not just features.',
      },
      {
        q: 'AI product owner vs AI product manager: what is the difference?',
        a: 'In Scrum, the product owner is accountable for the product backlog and for the value the team delivers. A product manager usually owns strategy, roadmap and market fit, often across several products. In many companies one person does both. This course teaches the product owner role and the AI product skills both jobs need, so it also suits people looking for an AI product manager course in Hyderabad.',
      },
      {
        q: 'Can a business analyst become a product owner?',
        a: 'Yes, and it is a common move. Business analysts already gather requirements and write user stories; product owners also order the backlog and decide what to build. You typically start as an AI business analyst or product owner, grow into an AI product owner or AI product manager role in 2 to 5 years, and can move into roles such as head of AI products or AI transformation lead after 5 years or more.',
      },
      {
        q: 'Which AI product owner certification does this course prepare me for?',
        a: 'Scrum.org’s Professional Scrum Product Owner – AI Essentials (PSPO-AI Essentials), alongside PSPO I. PSPO-AI Essentials shows you understand how to use AI in product ownership responsibly, and it adds most value next to PSPO I and real product experience. If your company uses SAFe, Scaled Agile’s AI-Empowered SAFe Product Owner/Product Manager (POPM) is a next step. You buy each assessment from the issuer.',
      },
      {
        q: 'What is the PSPO certification?',
        a: 'Professional Scrum Product Owner I (PSPO I) is Scrum.org’s product owner certification: a 60-minute online assessment of 80 questions with an 85% pass mark. No course is required, and the certification does not expire. Scrum Alliance’s CSPO is a different certification: you earn it by attending a CSPO course with a Scrum Alliance trainer, and you renew it every two years.',
      },
      {
        q: 'What is responsible AI?',
        a: 'Building AI that is fair, private, secure and overseen by people. In module 7 you apply a responsible AI checklist to a real feature.',
      },
      {
        q: 'Which AI tools will I use?',
        a: 'ChatGPT, Claude, Gemini and no-code AI builders, plus Jira, Figma and Miro.',
      },
      {
        q: 'What projects will I build in the AI Product Owner course?',
        a: 'An AI support assistant plan, a ranked AI use-case portfolio and a clickable AI prototype, plus a capstone that takes an AI product from idea to release plan.',
      },
      {
        q: 'What are common AI product owner interview questions?',
        a: 'Expect questions on ordering a backlog, writing acceptance criteria for uncertain AI outputs, measuring an AI feature and handling AI risk. Module 8 covers product interview questions and a mock interview, and your capstone pitch gives you a real example to talk about.',
      },
      {
        q: 'Is the AI product owner role in demand?',
        a: 'Companies building AI features need people who can connect business value to what engineers build, and that is the AI product owner’s job.',
      },
      {
        q: 'What can I learn after this course?',
        a: 'Agentic AI Engineering for a deeper technical view of AI agents, or Business Analyst with GenAI.',
      },
      {
        q: 'Are the AI Product Owner classes live or recorded?',
        a: 'Both. Classes are live and instructor-led on Zoom, and every class is recorded so you can revise or catch up. ARA Solutions is based in Hyderabad.',
      },
      {
        q: 'What is the AI Product Owner course fee in Hyderabad?',
        a: 'Fees depend on the batch and payment option. Call or WhatsApp +91 90100 09225 for the current fees, EMI options and the next batch date.',
      },
      {
        q: 'Does the AI Product Owner course include placement support?',
        a: 'Yes. It includes resume and LinkedIn help, mock interviews and job referrals through ARA’s IT staffing clients and partner companies until you land your first offer. Offers depend on your interview performance.',
      },
    ],
  },
];
