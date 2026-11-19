/**
 * Companies where ARA Solutions' trained / placed alumni work (confirmed by ARA).
 * Logos: public/logos/alumni/ (public domain / CC0 files from Wikimedia Commons).
 * `size` balances logo shapes: sm = wide wordmarks, lg = compact or stacked marks.
 */
export const alumniCompanies = [
  { name: 'Accenture', logo: 'accenture', size: 'md' },
  { name: 'Deloitte', logo: 'deloitte', size: 'sm' },
  { name: 'Tata Consultancy Services', logo: 'tcs', size: 'lg' },
  { name: 'Infosys', logo: 'infosys', size: 'md' },
  { name: 'Wipro', logo: 'wipro', size: 'lg' },
  { name: 'HCLTech', logo: 'hcltech', size: 'sm' },
  { name: 'Tech Mahindra', logo: 'techmahindra', size: 'md' },
  { name: 'Cognizant', logo: 'cognizant', size: 'sm' },
  { name: 'Capgemini', logo: 'capgemini', size: 'sm' },
  { name: 'LTIMindtree', logo: 'ltimindtree', size: 'sm' },
  { name: 'IBM', logo: 'ibm', size: 'md' },
  { name: 'KPMG', logo: 'kpmg', size: 'md' },
  { name: 'EY', logo: 'ey', size: 'lg' },
  { name: 'Genpact', logo: 'genpact', size: 'lg' },
  { name: 'Microsoft', logo: 'microsoft', size: 'sm' },
  { name: 'Amazon', logo: 'amazon', size: 'md' },
  { name: 'Oracle', logo: 'oracle', size: 'sm' },
] as const;

/**
 * Organisations ARA Solutions has recruited for, grouped as in ARA's pitch deck (client approved showing them).
 * Logos: public/logos/clients/ (official logo files). `height` is the logo height in px, chosen so wide
 * wordmarks and compact marks look equally weighted. A client without a logo shows its name as text.
 */
export const clientele: { name: string; sector: string; logo?: string; height?: number }[] = [
  { name: 'Huntington Bank', sector: 'Banking & payments', logo: 'huntington.svg', height: 28 },
  { name: 'Citizens Financial Group', sector: 'Banking & payments', logo: 'citizens.svg', height: 30 },
  { name: 'American Express', sector: 'Banking & payments', logo: 'amex.svg', height: 56 },
  { name: 'Vanguard', sector: 'Investment & insurance', logo: 'vanguard.svg', height: 29 },
  { name: 'BlueCross BlueShield', sector: 'Investment & insurance', logo: 'bcbs.svg', height: 28 },
  { name: 'DXC Technology', sector: 'Technology consulting', logo: 'dxc.svg', height: 44 },
  { name: 'LTIMindtree', sector: 'Technology consulting', logo: 'ltimindtree.svg', height: 28 },
  { name: 'Royal Cyber', sector: 'Technology consulting', logo: 'royalcyber.svg', height: 30 },
  // The only CriticalRiver logo available is 253px wide, so it is kept small enough to stay sharp on
  // high-resolution screens. Swap in a vector (SVG) logo from the client when available.
  { name: 'CriticalRiver', sector: 'Digital engineering', logo: 'criticalriver.webp', height: 18 },
  { name: 'iLink Digital', sector: 'Digital engineering', logo: 'ilink.svg', height: 22 },
  { name: 'Mealsan Technology Solutions', sector: 'Digital engineering' },
  { name: 'Akkodis', sector: 'Talent & workforce solutions', logo: 'akkodis.svg', height: 22 },
  { name: 'Apex Systems', sector: 'Talent & workforce solutions', logo: 'apex.webp', height: 28 },
  { name: 'Simplify Alpha', sector: 'Talent & workforce solutions', logo: 'simplifyalpha.svg', height: 36 },
  { name: 'Heitmeyer Consulting', sector: 'Consulting', logo: 'heitmeyer.webp', height: 25 },
  { name: 'Rice University', sector: 'Higher education', logo: 'rice.svg', height: 23 },
];

/** How a learner goes from first call to placement support. Based on ARA's existing services. */
export const journey = [
  {
    title: 'Talk to an advisor',
    text: 'Share your background and goals. We recommend the right program and explain schedules and fees.',
  },
  {
    title: 'Learn by doing',
    text: 'Concepts are taught through hands-on labs, so you practise every skill as you learn it.',
  },
  {
    title: 'Build real projects',
    text: 'Work on industry-style projects and a capstone you can show to employers.',
  },
  {
    title: 'Get interview-ready',
    text: 'Resume and LinkedIn reviews, mock interviews and guidance on how teams hire.',
  },
  {
    title: 'Placement assistance',
    text: 'Our team helps connect you with hiring opportunities, drawing on 13+ years in the IT industry.',
  },
] as const;

/**
 * The finish line of the learner journey, celebrated when the progress line reaches it.
 * Worded as the goal we work towards, never as a guaranteed job (we offer placement assistance).
 */
export const journeyFinale = {
  label: 'Offer letter',
  stamp: 'Offer accepted',
  title: 'Offer in hand. Congratulations!',
  text: 'The moment we work towards with every learner: your first offer in a new tech role.',
} as const;

/** The six barriers to better hiring, from ARA's pitch deck. */
export const hiringBarriers = [
  'Talent shortages',
  'Unqualified profiles',
  'Candidate drop-offs',
  'Long hiring cycles',
  'Rising hiring costs',
  'Scalability challenges',
] as const;

/**
 * Why ARA: the four company pillars from ARA's pitch deck, each with the hiring barriers it addresses.
 * `big` is the large figure shown on the card, when the pillar has one.
 */
export const pillars = [
  {
    title: '48-hour turnaround',
    text: 'Targeted shortlists delivered fast: profiles from our own database in 2 to 4 hours, open-market candidates fully assessed within 48 hours.',
    big: { value: '48', unit: 'H' },
    solves: ['Talent shortages', 'Long hiring cycles'],
  },
  {
    title: '24×7 support',
    text: 'Coverage across international time zones, so your hiring keeps moving while your team sleeps.',
    big: { value: '24×', unit: '7' },
    solves: ['Candidate drop-offs', 'Scalability challenges'],
  },
  {
    title: 'L1 interview + video',
    text: 'Every candidate is screened by a recruiter-led L1 interview, and the video is shared with you.',
    solves: ['Unqualified profiles'],
  },
  {
    title: 'Background check',
    text: 'Employment, education and identity verified before a profile reaches you.',
    solves: ['Unqualified profiles', 'Rising hiring costs'],
  },
] as const;

/**
 * ARA's hiring process from the pitch deck (slide 6): two sourcing channels, one complete hiring journey.
 * Steps 3 to 5 are the open-market path; profiles from ARA's own database skip them.
 */
export const hiringProcess = [
  { title: 'Requirement understanding', short: 'Role, skills & hiring needs' },
  { title: 'Candidate sourcing', short: 'Two sourcing channels' },
  { title: 'Profile screening', short: 'Skills, experience & fit' },
  { title: 'L1 interview + video', short: 'Recruiter-led screening' },
  { title: 'Background verification', short: 'Employment, education & identity' },
  { title: 'Profile submission', short: 'Shortlisted profiles to you' },
  { title: 'Client interview', short: 'Interviews & feedback' },
  { title: 'Offer & joining', short: 'Offer closure & onboarding' },
] as const;

/** The two sourcing channels in ARA's hiring process. */
export const sourcingChannels = {
  database: { name: 'Our database', text: 'Direct submission in', time: '2–4 hrs' },
  openMarket: { name: 'Open market', text: 'Full assessment in', time: '48 hrs' },
  outcome: 'Successful talent deployment',
} as const;

/** Roles ARA recruits for, from the pitch deck: specialist IT and non-IT hiring. */
export const roleGroups = [
  {
    title: 'IT & niche technology',
    groups: [
      { name: 'AI & Data', roles: 'AI, ML & GenAI · Data engineering & BI' },
      { name: 'Cloud & Security', roles: 'Cloud, DevOps & SRE · Cybersecurity, GRC & IAM' },
      { name: 'Enterprise & Software', roles: 'ERP, Salesforce & ServiceNow · Full stack & QA' },
    ],
  },
  {
    title: 'Non-IT & industry',
    groups: [
      { name: 'Corporate functions', roles: 'Finance & banking · HR & admin · Sales & support' },
      { name: 'Healthcare & engineering', roles: 'Pharma & life sciences · Healthcare · Manufacturing' },
      {
        name: 'Commerce & operations',
        roles: 'Retail & e-commerce · Logistics & supply chain · Volume hiring',
      },
    ],
  },
] as const;

/** Homepage FAQ: hiring answers from ARA's pitch deck, plus training questions. */
export const generalFaqs = [
  {
    q: 'How quickly can you share suitable candidates?',
    a: 'Initial profiles are targeted in 2 to 4 hours from our database, and shortlisted profiles within 48 hours, subject to role complexity.',
  },
  {
    q: 'How do you ensure candidate quality?',
    a: 'Skill and experience screening, recruiter-led L1 interviews, video sharing and background verification of employment, education and identity.',
  },
  {
    q: 'Can you handle niche and bulk hiring?',
    a: 'Yes. We cover specialised IT roles, non-IT staffing and large-scale volume recruitment.',
  },
  {
    q: 'Do you support international hiring?',
    a: 'Yes. We recruit across India, the USA, the UK and European markets, subject to role requirements.',
  },
  {
    q: 'What happens after shortlisting?',
    a: 'We coordinate interviews and feedback, support offer discussions and follow up through joining and beyond.',
  },
  {
    q: 'Can contract engineers become permanent employees?',
    a: 'Yes. We offer contract-to-hire conversion on clear terms agreed upfront, with no surprise fees.',
  },
  {
    q: 'What does the Training & Placement program include?',
    a: 'Structured, hands-on training in Salesforce, ServiceNow, AI & Machine Learning, Agentic AI, Cybersecurity or Full Stack Development, with real projects, interview preparation and placement assistance.',
  },
  {
    q: 'What are the training fees, duration and batch timings?',
    a: 'These depend on the program and batch. Request a callback or message us on WhatsApp and our team will share the current details.',
  },
] as const;

/*
 * Home page: content for the training half and the split FAQ.
 * Every line comes from content already on the site (the learner journey, program FAQs and certifications).
 */

/** Why learn with ARA: what every program includes. */
export const trainingPillars = [
  {
    title: 'Hands-on labs',
    text: 'Concepts are taught through hands-on labs, so you practise every skill as you learn it.',
  },
  {
    title: 'Real projects',
    text: 'Industry-style projects and a capstone you can show to employers.',
  },
  {
    title: 'Certification preparation',
    text: 'Prepare for official exams such as Salesforce Administrator and ServiceNow CSA, where the program has one.',
  },
  {
    title: 'Interview preparation',
    text: 'Resume and LinkedIn reviews, mock interviews and guidance on how teams hire.',
  },
  {
    title: 'Placement assistance',
    text: 'Our team connects you with hiring opportunities, drawing on 13+ years in the IT industry.',
  },
  {
    title: 'Our own learning platform',
    text: 'Live Zoom classes, every class recorded, progress tracking and an AI study helper, in one place.',
    href: '/training-placement/#learning-platform',
  },
] as const;

/** FAQ split for the two audiences. */
export const hiringFaqs = generalFaqs.filter((item) => !/training/i.test(item.q));
export const trainingFaqs = [
  ...generalFaqs.filter((item) => /training/i.test(item.q)),
  {
    q: 'Can I watch a class later?',
    a: 'Yes. Every live class is recorded and added to your batch on our learning platform, so you can watch it again or catch up on one you missed.',
  },
  {
    q: 'Do I need prior experience?',
    a: 'It depends on the program. Salesforce and ServiceNow start from the basics with no prior platform experience needed; the AI programs suit learners comfortable with basic programming. Each program page lists its prerequisites.',
  },
  {
    q: 'Do you help with placement?',
    a: 'Yes. Every program includes interview preparation and placement assistance: resume and LinkedIn reviews, mock interviews and connections to hiring opportunities.',
  },
  {
    q: 'Are certification exams included?',
    a: 'Programs prepare you for the official exams listed on each program page. Exam registration is done with the vendor directly; an advisor can explain the process and current exam fees.',
  },
  {
    q: 'Which program is right for me?',
    a: 'Answer the three questions in the program finder above, or talk to an advisor who will recommend a program based on your background and goals.',
  },
];
