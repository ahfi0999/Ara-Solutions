/**
 * Company content (About, Approach, Case studies, Careers). Wording follows ARA's original website
 * and ARA's pitch deck.
 */

import { site } from './site';

/**
 * About Us page, from the client's "ARA Solutions About Us page content" document (Nov 2026), in the order the
 * sections appear. Items the document left for the client to fill in (founder cards, social links, figure
 * periods) are not shown until they are supplied.
 */
export const about = {
  seo: {
    title: 'About ARA Solutions | IT Staffing & Training in Hyderabad',
    description:
      'ARA Solutions is a Hyderabad company that hires IT and non-IT talent for businesses and trains professionals for jobs, with placement support.',
  },
  h1: 'IT Staffing and Training Company in Hyderabad',
  tagline: 'Built for ambition. Powered by people.',
  lead: 'Hiring the right people. Growing the right careers.',
  intro:
    'ARA Solutions is a Hyderabad-based staffing, training and placement company. We help businesses hire the right people, and we train people for the roles those businesses hire for.',
  story: [
    'ARA Solutions is a Hyderabad-based staffing, training and placement company, founded in 2022. We help businesses hire the right people, and we train people and help them build careers in IT.',
    'Our founders bring 30 years of combined experience in the IT industry. They know what employers look for, and that shapes everything we do.',
    'We believe learning is the surest way to grow as technology keeps changing. We support our clients and learners at every step, from the first conversation to the first day on the job.',
  ],
  forBusinesses: {
    title: 'For businesses: staffing and recruitment',
    intro: 'We provide IT and non-IT talent through the model that suits you.',
    services: [
      {
        slug: 'fulltime-staffing',
        name: 'Fulltime staffing',
        text: 'Permanent hires across technology, sales, HR, finance and operations.',
      },
      { slug: 'corp-to-corp', name: 'Contract staffing (C2C)', text: 'Skilled consultants for project work.' },
      {
        slug: 'rpo',
        name: 'Recruitment process outsourcing (RPO)',
        text: 'A dedicated recruitment team that works as an extension of yours.',
      },
      {
        slug: 'international-consulting',
        name: 'International consulting',
        text: 'Cross-border sourcing, screening and verification.',
      },
    ],
  },
  forProfessionals: {
    title: 'For professionals and teams: training and placement',
    text: 'We prepare people for the roles employers hire for. Individuals learn Salesforce, ServiceNow, Workday, AI and Data, Cybersecurity and Full Stack through live labs and real projects, with resume help, mock interviews and job referrals. Companies can also train their teams with our corporate training.',
  },
  oneRoof: [
    {
      title: 'We know what employers ask for.',
      text: 'We recruit every day, so our courses follow real hiring needs.',
    },
    {
      title: 'We know what candidates can do.',
      text: 'We train people ourselves, so we know their real skills.',
    },
    {
      title: 'One team, one standard.',
      text: 'Employers and learners speak to the same people, before and after the hire.',
    },
  ],
  howWeWork: [
    {
      title: 'Listen first.',
      text: 'We understand the role, the team and the goal before we suggest anything.',
    },
    {
      title: 'Screen properly.',
      text: 'Candidates are checked for skills and communication before we share their profile.',
    },
    { title: 'Train by doing.', text: 'Learners build real projects and practise interviews.' },
    { title: 'Stay until it works.', text: 'We follow up through joining and after.' },
  ],
  /** The founders' combined experience, as the document words it (the other figures come from `stats`). */
  experience: { value: '30 years', label: 'Combined founder experience in the IT industry' },
  faqs: [
    {
      q: 'Where is ARA Solutions based?',
      a: 'We are based in Hyderabad, Telangana. We recruit for companies in India, the USA and the UK, and our training runs live online across India.',
    },
    {
      q: 'Is ARA Solutions a staffing company or a training institute?',
      a: 'Both. We recruit talent for businesses, and we train people and help place them in jobs. One team does both.',
    },
    {
      q: 'What kind of companies do you recruit for?',
      a: 'We recruit for IT and non-IT roles for companies in India, the USA and the UK. See the staffing services page for the options.',
    },
    {
      q: 'Do you offer training for companies?',
      a: 'Yes. We provide corporate training that upskills your teams on the technologies they work with.',
    },
    {
      q: 'Who can join your training programs?',
      a: 'Freshers, working IT professionals and career changers. Each course page lists its prerequisites, and our advisors can help you choose.',
    },
    {
      q: 'Do you guarantee a job after training?',
      a: 'We give placement support: resume building, mock interviews and job referrals. Offers depend on your interview performance.',
    },
    {
      q: 'How can I talk to someone at ARA Solutions?',
      a: `Call or WhatsApp ${site.phone}, email ${site.email}, or request a callback.`,
    },
  ],
  closing: 'Hiring, or building your career? Talk to us.',
};

/** ARA's core capabilities, from the pitch deck (slide 2). */
export const capabilities = [
  { title: 'Global talent', text: 'Executive search and specialised staffing.' },
  { title: 'Tech upskilling', text: 'High-impact, industry-ready workforce training.' },
  { title: 'IT consulting', text: 'Custom enterprise digital solutions.' },
  { title: 'Academic alliances', text: 'Strategic learning programs and development.' },
] as const;

/** How ARA's training works, and why it is "shaped by hiring". */
export const trainingApproach = {
  title: 'Training shaped by real hiring',
  paragraphs: [
    'Because we recruit for companies every day, we know what employers screen for. Our programs teach exactly that, in the technologies companies are hiring for now.',
    'Every program is hands-on, built around real projects, and finishes with interview preparation and placement assistance, so learners leave ready for the job, not just the exam.',
  ],
  points: [
    'Hands-on labs in every module',
    'Real projects and a capstone',
    'Certification preparation where offered',
    'Interview preparation',
    'Placement assistance',
  ],
} as const;

/** After joining: ARA's customer engagement journey, from the pitch deck (slide 9). */
export const afterJoining = [
  { title: 'Pre-hiring alignment', text: 'Agree on goals, roles and timelines.' },
  { title: 'Active collaboration', text: 'Regular progress updates with your hiring team.' },
  { title: 'Transition support', text: 'Offer, joining and onboarding support.' },
  { title: 'Proactive engagement', text: 'Feedback after placement and early sight of your next hires.' },
  { title: 'Continued commitment', text: 'Ongoing support as your workforce needs change.' },
] as const;

export const deliveryStructures = [
  {
    title: 'Onsite delivery',
    text: 'Recruitment and staffing support integrated directly with your team, local facilities and operational location.',
  },
  {
    title: 'Hybrid / nearshore',
    text: 'A combination of local coordination and remote talent sourcing for cost efficiency and geographic reach.',
  },
  {
    title: 'Dedicated development team',
    text: 'Curated technical teams assembled for specific project scopes, platforms and technology milestones.',
  },
];

export const processBenefits = {
  intro:
    'Every failed hire has a cost that rarely shows up on the recruitment invoice: lost project momentum, team frustration, and the time spent starting the search all over again. A disciplined process prevents that, keeps candidates engaged, and produces outcomes both sides can stand behind.',
  items: [
    { title: 'Lower hiring costs', text: 'Reduce rework and replacement costs.' },
    { title: 'Faster productivity', text: 'Get the right people on board sooner.' },
    { title: 'Stronger teams', text: 'Higher retention and better outcomes.' },
  ],
  standards: ['Focused search', 'Clear communication', 'Flexible engagement', 'Accountable delivery'],
};

export const careersCulture = {
  intro:
    'We’re a people-first workforce and recruitment partner. The same accountability, transparency and growth we deliver to clients, we invest in our own recruiters, technical advisors, trainers and delivery leaders.',
  values: [
    {
      title: 'Work that matters',
      text: 'Every placement changes a career trajectory and solves a critical business bottleneck. We take that responsibility seriously.',
    },
    {
      title: 'Room to grow',
      text: 'We’re growing across domestic GCC hubs and international markets. Your contribution will be noticed, valued and rewarded.',
    },
    {
      title: 'Real accountability',
      text: 'We operate with genuine transparency, clear expectations and an open, collaborative team culture.',
    },
  ],
  closing:
    'Whether you’re an experienced recruiter, an account manager, a technology trainer, or someone looking to break into the workforce solutions industry: if you hold yourself to high standards, we want to talk to you.',
};
