/**
 * Case studies and job openings, carried over unchanged from ARA's original website.
 * Please confirm the case-study figures are accurate before launch.
 */

export type CaseStudy = {
  id: string;
  tag: string;
  title: string;
  description: string;
  metrics: { value: string; label: string }[];
  clientOverview: string;
  challenge: string;
  solution: string;
  keyOutcomes: string[];
};

export type JobOpening = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'it-staffing-saas',
    tag: 'IT STAFFING',
    title: 'Scaling engineering teams for a global product company',
    description:
      'Helped a fast-growing SaaS company hire 50+ skilled engineers in 6 months, reducing time-to-hire by 40% while maintaining high quality.',
    metrics: [
      {
        value: '50+',
        label: 'Hires',
      },
      {
        value: '40%',
        label: 'Faster hiring',
      },
      {
        value: '95%',
        label: 'Retention rate',
      },
    ],
    clientOverview:
      'High-growth B2B enterprise SaaS provider undergoing Series C expansion across North America and offshore hubs.',
    challenge:
      'Sudden product roadmap acceleration required onboarding distributed senior full-stack, DevOps, and cloud architects within tight sprint cycles without compromising technical screening thresholds.',
    solution:
      'ARA Solutions deployed a dedicated technical sourcing pod with standardised coding assessments, structured cultural interviews, and pre-calibrated offer negotiation workflows.',
    keyOutcomes: [
      '52 specialised engineering hires closed in under 6 months',
      'Average time-to-fill decreased from 58 days to 34 days',
      '95% 12-month retention rate across all onboarded technical staff',
    ],
  },
  {
    id: 'rpo-healthcare',
    tag: 'RPO',
    title: 'End-to-end recruitment for a healthcare provider',
    description:
      'Delivered a complete RPO solution, hiring 200+ clinical and non-clinical staff across multiple locations, improving the offer acceptance rate by 30%.',
    metrics: [
      {
        value: '200+',
        label: 'Hires',
      },
      {
        value: '30%',
        label: 'Higher acceptance',
      },
      {
        value: '3',
        label: 'Locations',
      },
    ],
    clientOverview:
      'Regional multi-facility healthcare system experiencing rapid network expansion and acute nurse/administrative staffing shortages.',
    challenge:
      'Fragmented, decentralised recruiting caused high candidate drop-off, inconsistent credentialing verification, and costly reliance on emergency locum tenens agencies.',
    solution:
      'Designed and deployed an integrated RPO engine with centralised requisition management, rigorous licence/credential pre-clearance, and automated interview scheduling.',
    keyOutcomes: [
      '215 vetted clinical & operational staff members successfully placed',
      'Candidate offer acceptance rate surged by 30%',
      'Substantial reduction in external temp-agency contingency spend',
    ],
  },
  {
    id: 'consulting-apac',
    tag: 'INTERNATIONAL CONSULTING',
    title: 'Expanding talent operations into new markets',
    description:
      'Supported a mid-sized enterprise in setting up its talent operations in the APAC region, enabling successful market entry and 100+ strategic hires.',
    metrics: [
      {
        value: '100+',
        label: 'Hires',
      },
      {
        value: '2',
        label: 'New markets',
      },
      {
        value: '6 months',
        label: 'Go-live',
      },
    ],
    clientOverview:
      'Mid-sized global technology consulting enterprise establishing regional operations across Singapore and India.',
    challenge:
      'Navigating unfamiliar regional labour regulations, cross-border tax compliance, local compensation benchmarks, and rapid talent acquisition without a local entity established.',
    solution:
      'Delivered an Employer of Record (EOR) advisory framework coupled with international sourcing pipelines and localised onboarding compliance packages.',
    keyOutcomes: [
      'Established full operational capability in 2 regional hubs in under 6 months',
      '100+ local hires safely compliant with local employment and benefits statutes',
      'Single point of operational contact with transparent billing and SLAs',
    ],
  },
  {
    id: 'talent-leadership',
    tag: 'TALENT ADVISORY',
    title: 'Building a future-ready leadership pipeline',
    description:
      'Partnered with a global organisation to design and implement a leadership hiring strategy, resulting in stronger bench strength and 2x internal promotions.',
    metrics: [
      {
        value: '2x',
        label: 'Internal promotions',
      },
      {
        value: '35%',
        label: 'Leadership pipeline growth',
      },
      {
        value: '12 months',
        label: 'Program duration',
      },
    ],
    clientOverview:
      'Multinational financial and logistics enterprise preparing for executive succession and digital transformation initiatives.',
    challenge:
      'High reliance on external executive search for mid-to-senior tiers, causing cultural misalignment, lengthy ramp periods, and attrition among high-potential managers.',
    solution:
      'Built an integrated executive competency map, a leadership assessment rubric and a targeted external succession pipeline for critical department heads.',
    keyOutcomes: [
      'Doubled (2x) the rate of internal senior promotions within 12 months',
      'Expanded qualified successor pipeline bench strength by 35%',
      'Reduced average leadership vacancy duration by 45%',
    ],
  },
];

export const jobOpenings: JobOpening[] = [
  {
    id: 'frontend-dev',
    title: 'Senior Frontend Developer',
    department: 'Technology',
    location: 'Bangalore, India',
    type: 'Fulltime',
    description:
      'Build modern, scalable web applications and create exceptional user experiences for global clients.',
    responsibilities: [
      'Architect and build resilient, accessible web interfaces using React, TypeScript, and modern CSS.',
      'Collaborate with design and product leads to craft high-fidelity enterprise UI components.',
      'Optimise web performance and Core Web Vitals across desktop and mobile viewports.',
    ],
    requirements: [
      '5+ years of experience with modern React, TypeScript, and state management.',
      'Strong eye for UI craft, micro-interactions, and component modularity.',
      'Experience working with enterprise product teams or high-growth tech firms.',
    ],
  },
  {
    id: 'it-recruiter',
    title: 'IT Recruiter',
    department: 'Human Resources',
    location: 'Hyderabad, India',
    type: 'Fulltime',
    description: 'Identify, engage, and hire top IT talent across various technologies and domains.',
    responsibilities: [
      'Source, screen, and build deep talent networks across cloud, full stack and enterprise platforms.',
      'Partner closely with client hiring managers and GCC directors to understand technical mandates.',
      'Deliver white-glove candidate experience throughout the entire hiring journey.',
    ],
    requirements: [
      '3+ years in IT recruiting with established candidate networks in India / APAC.',
      'Strong technical comprehension across modern software stacks and engineering levels.',
      'Excellent verbal and written communication skills.',
    ],
  },
  {
    id: 'account-manager',
    title: 'Account Manager',
    department: 'Client Management',
    location: 'Bangalore, India',
    type: 'Fulltime',
    description:
      'Manage client relationships, drive business growth, and ensure successful delivery of workforce solutions.',
    responsibilities: [
      'Act as the primary strategic liaison for key enterprise client accounts.',
      'Oversee fulfilment SLAs, contract renewals, and resource scale-up pipelines.',
      'Conduct regular strategic reviews with enterprise talent leaders.',
    ],
    requirements: [
      '4+ years in IT staffing account management or enterprise client relationship management.',
      'Proven track record managing revenue quotas and delivery governance.',
      'Strong negotiation and presentation capabilities.',
    ],
  },
  {
    id: 'tech-trainer',
    title: 'Technical Trainer',
    department: 'Learning & Development',
    location: 'Remote / India',
    type: 'Fulltime',
    description:
      'Deliver engaging technical training sessions and help professionals build future-ready skills.',
    responsibilities: [
      'Design curriculum and lead hands-on bootcamp sessions for corporate cohorts.',
      'Deliver real-world scenario workshops across cloud, DevOps and full stack tracks.',
      'Assess cohort progress, deliver code reviews, and provide mentor feedback.',
    ],
    requirements: [
      '3+ years of hands-on development experience plus demonstrable training/mentoring experience.',
      'Deep expertise in modern JavaScript/TypeScript, cloud basics or Python ecosystems.',
      'Engaging teaching style with high empathy for learner growth.',
    ],
  },
];
