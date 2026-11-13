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

/** Homepage FAQ: hiring questions from ARA's original site, plus training questions. */
export const generalFaqs = [
  {
    q: 'How quickly can ARA Solutions provide candidates?',
    a: 'For contract and Corp-to-Corp roles we keep pre-vetted talent ready across Java, Python, React, Cloud and Data, so a first shortlist usually arrives within 24 to 48 hours.',
  },
  {
    q: 'How do you verify candidate qualifications?',
    a: 'We check identity documents, past employment directly with HR contacts and educational credentials. Technical skills are assessed and reviewed by senior engineers.',
  },
  {
    q: 'Can contract engineers become permanent employees?',
    a: 'Yes. We offer contract-to-hire conversion on clear terms agreed upfront, with no surprise fees.',
  },
  {
    q: 'Do you hire for non-IT roles?',
    a: 'Yes. Our fulltime staffing covers both IT and non-IT positions, from engineering and leadership to sales, HR, finance, operations and support roles.',
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
