/**
 * Company facts used across the site. Everything here is genuine ARA Solutions information
 * taken from the existing company website. Update it here and every page follows.
 */
export const site = {
  name: 'ARA Solutions',
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
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=ARA+Solutions+Madhapur+Hyderabad',
  /** Social profiles. Icons only render for entries with a URL. */
  social: {
    linkedin: '',
    instagram: '',
    youtube: '',
  },
} as const;

/** Headline numbers from ARA's existing website. */
export const stats = [
  { value: 13, suffix: '+', label: 'Years in the IT industry' },
  { value: 1000, suffix: '+', label: 'Professionals placed' },
  { value: 17, suffix: '', label: 'Top companies where our alumni work' },
] as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
