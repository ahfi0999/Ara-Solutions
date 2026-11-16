/**
 * Company facts used across the site. Everything here is genuine ARA Solutions information
 * taken from the existing company website. Update it here and every page follows.
 */
export const site = {
  name: 'ARA Solutions',
  /** Registered company name, as on the Google Business Profile. */
  legalName: 'ARA Solutions Pvt Ltd',
  tagline: 'IT Always The Right Choice',
  url: 'https://arasolutions.in',
  description:
    'Career-focused training in Salesforce, ServiceNow, AI & Machine Learning, Agentic AI, Cybersecurity and Full Stack Development in Hyderabad, with hands-on projects, interview preparation and placement assistance.',
  phone: '+91 80196 03000',
  phoneHref: 'tel:+918019603000',
  email: 'info@arasolutions.in',
  emailHref: 'mailto:info@arasolutions.in',
  /** WhatsApp number, international format, digits only. */
  whatsapp: '918019603000',
  address: {
    area: 'Madhapur',
    city: 'Hyderabad',
    region: 'Telangana',
    country: 'India',
  },
  /** ARA's own Google Business Profile (address, directions, reviews). */
  mapsUrl: 'https://share.google/iQ8UV8bwBoq7RLrGt',
  /** Social profiles. Icons only render for entries with a URL. */
  social: {
    linkedin: '',
    instagram: '',
    youtube: '',
  },
} as const;

/**
 * Headline numbers: years and placements from ARA's original website,
 * screened profiles and shortlist time from ARA's pitch deck.
 */
export const stats = [
  { value: 13, suffix: '+', label: 'Years in the IT industry' },
  { value: 10000, suffix: '+', label: 'Screened talent profiles' },
  { value: 1000, suffix: '+', label: 'Professionals placed' },
  { value: 48, suffix: ' hrs', label: 'To a targeted shortlist' },
] as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
