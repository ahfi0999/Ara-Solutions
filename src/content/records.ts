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
    title: 'Scaling Engineering Teams for a Global Product Company',
    description:
      'Helped a fast-growing SaaS company hire 50+ skilled engineers in 6 months, reducing time-to-hire by 40% while maintaining high quality.',
    metrics: [
      {
        value: '50+',
        label: 'Hires',
      },
      {
        value: '40%',
        label: 'Faster Hiring',
      },
      {
        value: '95%',
        label: 'Retention Rate',
      },
    ],
    clientOverview:
      'High-growth B2B enterprise SaaS provider undergoing Series C expansion across North America and offshore hubs.',
    challenge:
      'Sudden product roadmap acceleration required onboarding distributed senior full-stack, DevOps, and cloud architects within tight sprint cycles without compromising technical screening thresholds.',
    solution:
      'ARA Solutions deployed a dedicated technical sourcing pod with standardized coding assessments, structured cultural interviews, and pre-calibrated offer negotiation workflows.',
    keyOutcomes: [
      '52 specialized engineering hires closed in under 6 months',
      'Average time-to-fill decreased from 58 days down to 34 days',
      '95% 12-month retention rate across all onboarded technical staff',
    ],
  },
  {
    id: 'rpo-healthcare',
    tag: 'RPO',
    title: 'End-to-End Recruitment for a Healthcare Provider',
    description:
      'Delivered a complete RPO solution, hiring 200+ clinical and non-clinical staff across multiple locations, improving offer acceptance rate by 30%.',
    metrics: [
      {
        value: '200+',
        label: 'Hires',
      },
      {
        value: '30%',
        label: 'Higher Acceptance',
      },
      {
        value: '3',
        label: 'Locations',
      },
    ],
    clientOverview:
      'Regional multi-facility healthcare system experiencing rapid network expansion and acute nurse/administrative staffing shortages.',
    challenge:
      'Fragmented decentralized recruiting caused high candidate drop-off, inconsistent credentialing verification, and costly reliance on emergency locum tenens agencies.',
    solution:
      'Designed and deployed an integrated RPO engine with centralized requisition management, rigorous license/credential pre-clearance, and automated interview scheduling.',
    keyOutcomes: [
      '215 vetted clinical & operational staff members successfully placed',
      'Candidate offer acceptance rate surged by 30%',
      'Substantial reduction in external temp-agency contingency spend',
    ],
  },
  {
    id: 'consulting-apac',
    tag: 'INTERNATIONAL CONSULTING',
    title: 'Expanding Talent Operations into New Markets',
    description:
      'Supported a mid-sized enterprise in setting up their talent operations in the APAC region, enabling successful market entry and 100+ strategic hires.',
    metrics: [
      {
        value: '100+',
        label: 'Hires',
      },
      {
        value: '2',
        label: 'New Markets',
      },
      {
        value: '6 Months',
        label: 'Go-Live',
      },
    ],
    clientOverview:
      'Mid-sized global technology consulting enterprise establishing regional operations across Singapore and India.',
    challenge:
      'Navigating unfamiliar regional labor regulations, cross-border tax compliance, local compensation benchmarks, and rapid talent acquisition without a local entity established.',
    solution:
      'Delivered an Employer of Record (EOR) advisory framework coupled with international sourcing pipelines and localized onboarding compliance packages.',
    keyOutcomes: [
      'Established full operational capability in 2 regional hubs in under 6 months',
      '100+ local hires safely compliant with local employment and benefits statutes',
      'Single point of operational contact with transparent billing and SLAs',
    ],
  },
  {
    id: 'talent-leadership',
    tag: 'TALENT ADVISORY',
    title: 'Building a Future-Ready Leadership Pipeline',
    description:
      'Partnered with a global organization to design and implement a leadership hiring strategy, resulting in stronger bench strength and 2x internal promotions.',
    metrics: [
      {
        value: '2x',
        label: 'Internal Promotions',
      },
      {
        value: '35%',
        label: 'Leadership Pipeline Growth',
      },
      {
        value: '12 Months',
        label: 'Program Duration',
      },
    ],
    clientOverview:
      'Multinational financial and logistics enterprise preparing for executive succession and digital transformation initiatives.',
    challenge:
      'High reliance on external executive search for mid-to-senior tiers, causing cultural misalignment, lengthy ramp periods, and attrition among high-potential managers.',
    solution:
      'Architected an integrated executive competency mapping, leadership assessment rubric, and targeted external succession pipeline for critical department heads.',
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
    type: 'Full-time',
    description:
      'Build modern, scalable web applications and create exceptional user experiences for global clients.',
    responsibilities: [
      'Architect and build resilient, accessible web interfaces using React, TypeScript, and modern CSS.',
      'Collaborate with design and product leads to craft high-fidelity enterprise UI components.',
      'Optimize web performance and core web vitals across desktop and mobile viewports.',
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
    type: 'Full-time',
    description: 'Identify, engage, and hire top IT talent across various technologies and domains.',
    responsibilities: [
      'Source, screen, and build deep talent networks across Cloud, Full-stack, and Enterprise platforms.',
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
    type: 'Full-time',
    description:
      'Manage client relationships, drive business growth, and ensure successful delivery of workforce solutions.',
    responsibilities: [
      'Act as primary strategic liaison for key enterprise client accounts.',
      'Oversee fulfillment SLAs, contract renewals, and resource scale-up pipelines.',
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
    type: 'Full-time',
    description:
      'Deliver engaging technical training sessions and help professionals build future-ready skills.',
    responsibilities: [
      'Design curriculum and lead hands-on bootcamp sessions for corporate cohorts.',
      'Deliver real-world scenario workshops across Cloud, DevOps, and Full-stack tracks.',
      'Assess cohort progress, deliver code reviews, and provide mentor feedback.',
    ],
    requirements: [
      '3+ years hands-on development experience plus demonstrable training/mentoring experience.',
      'Deep expertise in modern JavaScript/TypeScript, Cloud basics, or Python ecosystems.',
      'Engaging teaching style with high empathy for learner growth.',
    ],
  },
];
