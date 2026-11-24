/** Shared enquiry form definition and validation, used by the browser form and the API route. */
import { allPrograms } from '@/content/programs';
import { services } from '@/content/services';
import { tracks, trackPrograms } from '@/content/tracks';

export type Interest = {
  value: string;
  label: string;
  group: 'Hire talent' | 'Training & placement' | 'Other';
  /** Sub-heading in the form's list, e.g. "ServiceNow courses" (defaults to the group). */
  section?: string;
};

/** Every course and program, track by track in the menu's order and with the menu's names. */
const trainingInterests: Interest[] = [
  ...tracks.flatMap((track) =>
    trackPrograms(track).map(({ entry, program }) => ({
      value: program.slug,
      label: entry.label ?? program.name,
      group: 'Training & placement' as const,
      section: `${track.name} courses`,
    })),
  ),
];
// Anything not listed in a track still gets an option.
for (const program of allPrograms)
  if (!trainingInterests.some((item) => item.value === program.slug))
    trainingInterests.push({ value: program.slug, label: program.name, group: 'Training & placement' });

/** Options come straight from the service and program lists, so they never get out of sync. */
export const INTERESTS: readonly Interest[] = [
  ...services.map((service) => ({ value: service.slug, label: service.name, group: 'Hire talent' as const })),
  { value: 'hiring', label: 'Other hiring requirement', group: 'Hire talent' },
  ...trainingInterests,
  { value: 'not-sure', label: 'Not sure yet, help me choose', group: 'Other' },
];

export const BACKGROUNDS = [
  { value: 'student', label: 'Student / fresher' },
  { value: 'professional', label: 'Working professional' },
  { value: 'switcher', label: 'Career switcher / restarting career' },
  { value: 'company', label: 'Company / recruiter' },
] as const;

export type EnquiryInput = {
  name: string;
  phone: string;
  email: string;
  interest: string;
  background: string;
  message: string;
  consent: boolean;
  /** Page the form was submitted from. */
  source: string;
  /** Honeypot: real visitors never fill this in. */
  website?: string;
};

export type FieldErrors = Partial<Record<keyof EnquiryInput, string>>;

const clean = (value: unknown, max: number) =>
  typeof value === 'string' ? value.replace(/\s+/g, ' ').trim().slice(0, max) : '';

/** Normalises and validates an enquiry. Returns cleaned data or field errors. */
export function validateEnquiry(raw: Record<string, unknown>): { data?: EnquiryInput; errors?: FieldErrors } {
  const data: EnquiryInput = {
    name: clean(raw.name, 80),
    phone: clean(raw.phone, 20),
    email: clean(raw.email, 120).toLowerCase(),
    interest: clean(raw.interest, 40),
    background: clean(raw.background, 40),
    message: typeof raw.message === 'string' ? raw.message.trim().slice(0, 1000) : '',
    consent: raw.consent === true || raw.consent === 'on' || raw.consent === 'true',
    source: clean(raw.source, 120) || '/',
    website: clean(raw.website, 200),
  };

  const errors: FieldErrors = {};
  if (data.name.length < 2) errors.name = 'Please enter your name.';
  const digits = data.phone.replace(/\D/g, '');
  if (digits.length < 10 || digits.length > 13) errors.phone = 'Please enter a valid phone number.';
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email))
    errors.email = 'Please enter a valid email address.';
  // The form no longer asks; a button or page may send the course or service the visitor came about.
  if (data.interest && !INTERESTS.some((item) => item.value === data.interest)) data.interest = '';
  if (data.background && !BACKGROUNDS.some((item) => item.value === data.background)) data.background = '';
  if (!data.consent) errors.consent = 'Please agree so our team can contact you.';

  return Object.keys(errors).length ? { errors } : { data };
}

export const labelFor = (list: readonly { value: string; label: string }[], value: string) =>
  list.find((item) => item.value === value)?.label ?? value;

/** Plain-text summary, used for WhatsApp hand-off and email bodies. */
export function enquirySummary(
  data: Pick<EnquiryInput, 'name' | 'phone' | 'email' | 'interest' | 'background' | 'message'>,
) {
  return [
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    data.email && `Email: ${data.email}`,
    data.interest && `Interested in: ${labelFor(INTERESTS, data.interest)}`,
    data.background && `Background: ${labelFor(BACKGROUNDS, data.background)}`,
    data.message && `Message: ${data.message}`,
  ]
    .filter(Boolean)
    .join('\n');
}
