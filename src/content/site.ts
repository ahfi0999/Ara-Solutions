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
  /** Main line (staffing / services): the footer, WhatsApp and every page outside Training & Placement. */
  phone: '+91 90100 09225',
  phoneHref: 'tel:+919010009225',
  email: 'info@arasolutions.in',
  emailHref: 'mailto:info@arasolutions.in',
  /** WhatsApp number, international format, digits only. */
  whatsapp: '919010009225',
  /** Training & Placement line: used on the Training pages and for course enquiries (calls and WhatsApp). */
  training: {
    phone: '+91 90100 09226',
    phoneHref: 'tel:+919010009226',
    whatsapp: '919010009226',
  },
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

/** A phone line: the number as shown, its tel: link and its WhatsApp number. */
export type ContactLine = { phone: string; phoneHref: string; whatsapp: string };

export const staffingLine: ContactLine = {
  phone: site.phone,
  phoneHref: site.phoneHref,
  whatsapp: site.whatsapp,
};
export const trainingLine: ContactLine = site.training;

/** The line for a page: the training line inside Training & Placement, the main (staffing) line everywhere else. */
export const lineFor = (pathname?: string | null): ContactLine =>
  pathname?.startsWith('/training-placement') ? trainingLine : staffingLine;

/** A WhatsApp chat link with a prepared message (the main line unless another number is given). */
export const whatsappLink = (message: string, number: string = site.whatsapp) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
