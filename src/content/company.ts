/**
 * Company content (About, Approach, Case studies, Careers). Wording follows ARA's original website
 * and ARA's pitch deck.
 */

export const about = {
  intro:
    'A recruitment, technology training and IT consulting company based in Hyderabad, India: we find the right people for companies, and we train professionals for the roles companies hire for.',
  whoWeAre: [
    'ARA Solutions is a professional recruitment, staffing and workforce solutions company based in Hyderabad, India, serving clients across domestic and international markets.',
    'We bridge the gap between organisational ambition and the people who make it real, with workforce models designed around the reality of each hire. Alongside staffing, our Training & Placement programs build job-ready talent in the technologies companies hire for.',
  ],
  hiringChallenge: {
    title: 'Hiring is getting harder to get right',
    paragraphs: [
      'The problem in modern recruitment is rarely a lack of candidates. Job boards and automated platforms have made it easier than ever to generate volume. The real challenge is finding professionals with the right technical capability, the right context and the right commitment.',
      'That requires more than an algorithm. It requires human discernment, market context, and a partner who stays accountable through joining, not just through the resume submission.',
    ],
    points: ['Quality over quantity', 'Right talent, right context', 'Accountability till joining'],
  },
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

export const principles = [
  {
    title: 'The right talent',
    text: 'Candidates selected for capability, adaptability and context, not just keyword matches on a CV.',
  },
  {
    title: 'The right model',
    text: 'The engagement structure that matches your operational and financial reality, whether that is C2C, fulltime, RPO or consulting.',
  },
  {
    title: 'The right moment',
    text: 'Speed when speed matters, thoroughness always. A process that respects timelines without cutting corners on qualification.',
  },
];

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
