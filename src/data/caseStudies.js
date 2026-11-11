import { images } from './images';

export const caseStudies = [
  {
    id: 'it-staffing-saas',
    tag: 'IT STAFFING',
    tagVariant: 'blue',
    title: 'Scaling Engineering Teams for a Global Product Company',
    description:
      'Helped a fast-growing SaaS company hire 50+ skilled engineers in 6 months, reducing time-to-hire by 40% while maintaining high quality.',
    image: images.caseStudies.saas,
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
    tagVariant: 'red',
    title: 'End-to-End Recruitment for a Healthcare Provider',
    description:
      'Delivered a complete RPO solution, hiring 200+ clinical and non-clinical staff across multiple locations, improving offer acceptance rate by 30%.',
    image: images.caseStudies.healthcare,
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
    tagVariant: 'red',
    title: 'Expanding Talent Operations into New Markets',
    description:
      'Supported a mid-sized enterprise in setting up their talent operations in the APAC region, enabling successful market entry and 100+ strategic hires.',
    image: images.caseStudies.apac,
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
    tagVariant: 'blue',
    title: 'Building a Future-Ready Leadership Pipeline',
    description:
      'Partnered with a global organization to design and implement a leadership hiring strategy, resulting in stronger bench strength and 2x internal promotions.',
    image: images.caseStudies.leadership,
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
