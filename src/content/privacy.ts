import { site } from './site';

/**
 * The privacy notice (/privacy/), written for India's Digital Personal Data Protection Act, 2023.
 * It describes what this website really does today, so update it whenever a form, tool or tracking tag
 * changes (and change `updated`). Have a legal adviser review it.
 *
 * Text supports **bold** and [links](https://example.com).
 */

export type PrivacyBlock =
  | { kind: 'text'; text: string }
  | { kind: 'list'; items: { lead?: string; text: string }[] }
  | { kind: 'table'; caption: string; head: string[]; rows: string[][] }
  | { kind: 'contact' };

export type PrivacySection = { id: string; title: string; blocks: PrivacyBlock[] };

export type Privacy = {
  updated: string;
  appliesTo: string;
  intro: string;
  /** The four-point summary at the top; `icon` picks the picture shown beside it. */
  summary: { icon: 'collect' | 'use' | 'sell' | 'control'; title: string; text: string }[];
  sections: PrivacySection[];
};

export const privacy: Privacy = {
  updated: '19 November 2026',
  appliesTo: 'arasolutions.in',
  intro:
    'How ARA Solutions collects, uses and protects your personal information when you use our website or get in touch with us.',
  summary: [
    {
      icon: 'collect',
      title: 'Only what we need',
      text: 'The details you choose to share, such as your name and phone number, and basic information about how the site is used.',
    },
    {
      icon: 'use',
      title: 'Used to help you',
      text: 'To answer your enquiry, discuss hiring or training with you, and improve our website.',
    },
    {
      icon: 'sell',
      title: 'Never sold',
      text: 'We do not sell your personal information or share it for others to market to you.',
    },
    {
      icon: 'control',
      title: 'You stay in control',
      text: 'Ask us to see, correct or delete your information, or withdraw your consent, at any time.',
    },
  ],
  sections: [
    {
      id: 'who-we-are',
      title: 'Who we are',
      blocks: [
        {
          kind: 'text',
          text: `${site.legalName} ("ARA Solutions", "we", "us" or "our") provides IT and non-IT staffing, recruitment and consulting services, and industry-focused training with placement assistance. We are based in ${site.address.area}, ${site.address.city}, ${site.address.region}, ${site.address.country}.`,
        },
        {
          kind: 'text',
          text: 'This notice explains how we handle personal information when you visit arasolutions.in (the "website"), send us an enquiry, use our Ask ARA assistant, apply for a job with us, or contact us by phone, WhatsApp or email. Under India\'s Digital Personal Data Protection Act, 2023, ARA Solutions is the **Data Fiduciary** for this information.',
        },
      ],
    },
    {
      id: 'information-we-collect',
      title: 'Information we collect',
      blocks: [
        { kind: 'text', text: '**Information you give us**' },
        {
          kind: 'list',
          items: [
            {
              lead: 'Enquiries',
              text: 'When you send an enquiry form: your name, phone or WhatsApp number, email address (optional), the service or program you are interested in, your background (optional), any message you write, and the page you sent the form from.',
            },
            {
              lead: 'Ask ARA conversations',
              text: 'The questions you type into our Ask ARA assistant.',
            },
            {
              lead: 'Job applications',
              text: 'When you apply for a role at ARA Solutions by email: your resume and the details you include, such as your name, phone number, LinkedIn profile, experience and qualifications.',
            },
            {
              lead: 'Calls, WhatsApp and email',
              text: 'Your phone number or email address, and what you tell us when you contact us directly.',
            },
          ],
        },
        {
          kind: 'text',
          text: '**Information collected automatically.** When you browse the website, we and our service providers collect technical information such as your IP address, browser and device type, the pages you visit, how you reached our site, and the date and time of your visit. Some of it is collected through cookies (see [Cookies and analytics](#cookies)).',
        },
        {
          kind: 'text',
          text: 'Please do not share sensitive information, such as bank details, government ID numbers or health information, through our forms or the Ask ARA assistant. We do not need it to respond to you.',
        },
      ],
    },
    {
      id: 'how-we-use',
      title: 'How we use your information',
      blocks: [
        {
          kind: 'list',
          items: [
            {
              text: 'To respond to your enquiry and contact you about it by phone, WhatsApp or email, as you agreed when you sent it.',
            },
            {
              text: 'To discuss and provide our staffing, recruitment, consulting, training and placement services.',
            },
            { text: 'To consider you for roles at ARA Solutions when you apply for a job.' },
            { text: 'To answer your questions through the Ask ARA assistant.' },
            {
              text: 'To understand how visitors use the website, so we can improve it and measure how well our marketing works.',
            },
            {
              text: 'To keep the website secure, prevent spam and abuse (for example, by limiting how many messages can be sent in a short time), and fix problems.',
            },
            { text: 'To meet our legal obligations and protect our legal rights.' },
          ],
        },
        {
          kind: 'text',
          text: 'We use your information with your consent, which you give when you send a form or contact us, or where the law otherwise allows it. You can withdraw your consent at any time (see [Your rights](#your-rights)). This does not affect what we did before you withdrew it, but we may no longer be able to help with your enquiry.',
        },
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies and analytics',
      blocks: [
        {
          kind: 'text',
          text: 'Cookies are small files that a website stores in your browser. We use a small number of them, mainly to understand how the website is used.',
        },
        {
          kind: 'table',
          caption: 'Cookies and browser storage used on this website',
          head: ['Name', 'Provider', 'Purpose', 'Kept for'],
          rows: [
            [
              'Google Tag Manager',
              'Google',
              'Loads our measurement tools on the website. It does not set cookies itself.',
              'Not stored',
            ],
            [
              '_ga, _ga_*',
              'Google Analytics',
              'Counts visits and shows, in combined reports, how people find and use the website.',
              'Up to 2 years',
            ],
            [
              'ara-dock-min',
              'ARA Solutions',
              'Remembers whether you minimised the contact panel. Stays in your browser and is never sent to us.',
              'Until you close the tab',
            ],
          ],
        },
        {
          kind: 'text',
          text: 'Google handles this information under its own privacy policy. Read [how Google uses information from sites that use its services](https://policies.google.com/technologies/partner-sites), or opt out of Google Analytics on every website with the [Google Analytics opt-out browser add-on](https://tools.google.com/dlpage/gaoptout).',
        },
        {
          kind: 'text',
          text: 'You can also block or delete cookies in your browser settings. The website still works if you do.',
        },
      ],
    },
    {
      id: 'sharing',
      title: 'Who we share it with',
      blocks: [
        {
          kind: 'text',
          text: 'We do not sell your personal information. We share it only as described below.',
        },
        {
          kind: 'list',
          items: [
            {
              lead: 'Service providers',
              text: 'Companies that help us run the website and our business, such as our hosting provider (Amazon Web Services), our email and customer-management tools, Google Analytics, and the AI provider that powers Ask ARA. They may use your information only to provide their services to us.',
            },
            {
              lead: 'Employers and clients',
              text: 'If you are a candidate or student, we share your profile with prospective employers only for roles you have agreed to be considered for.',
            },
            {
              lead: 'Legal reasons',
              text: 'Government authorities, courts or regulators, where the law requires it, or to protect the rights, safety and property of ARA Solutions, our users or others.',
            },
            {
              lead: 'Business changes',
              text: 'A buyer or successor, if ARA Solutions is involved in a merger, acquisition or sale of assets. Your information would stay protected by this notice.',
            },
          ],
        },
        {
          kind: 'text',
          text: 'Some of our service providers may store or process information outside India. When they do, we take steps to keep it protected as this notice describes and as Indian law requires.',
        },
      ],
    },
    {
      id: 'retention',
      title: 'How long we keep it',
      blocks: [
        {
          kind: 'text',
          text: 'We keep personal information only for as long as we need it for the purposes in this notice. For example, we keep enquiry details while we help you and follow up, and job applications while the role is open. We then delete or anonymise it, unless the law requires us to keep it longer. Analytics data is kept according to the retention settings of our Google Analytics account.',
        },
        {
          kind: 'text',
          text: 'We do not store Ask ARA conversations. Your messages are sent to our AI provider to write a reply and are not saved on our servers. The provider handles them under its own terms.',
        },
      ],
    },
    {
      id: 'security',
      title: 'How we protect it',
      blocks: [
        {
          kind: 'text',
          text: 'We use reasonable security safeguards to protect your information. The website is served only over encrypted connections (HTTPS), access to enquiries is limited to the people who need it, and we work with established service providers. No method of sending or storing information is completely secure, but if a personal data breach ever happens, we will inform you and the authorities as the law requires.',
        },
      ],
    },
    {
      id: 'your-rights',
      title: 'Your rights',
      blocks: [
        {
          kind: 'text',
          text: "Under India's Digital Personal Data Protection Act, 2023, you have the right to:",
        },
        {
          kind: 'list',
          items: [
            {
              lead: 'Access',
              text: 'get a summary of the personal information we hold about you and how we use it.',
            },
            {
              lead: 'Correction and erasure',
              text: 'have inaccurate or incomplete information corrected or updated, and information we no longer need deleted.',
            },
            { lead: 'Withdraw consent', text: 'at any time, as easily as you gave it.' },
            {
              lead: 'Grievance redressal',
              text: 'raise a complaint with us about how we handle your information.',
            },
            {
              lead: 'Nominate',
              text: 'choose someone to exercise these rights for you in the event of your death or incapacity.',
            },
          ],
        },
        {
          kind: 'text',
          text: `To use any of these rights, email [${site.email}](${site.emailHref}) with the name and the phone number or email address you used with us, so we can confirm the request is yours. If you are not satisfied with our response, you can complain to the Data Protection Board of India.`,
        },
      ],
    },
    {
      id: 'children',
      title: 'Children',
      blocks: [
        {
          kind: 'text',
          text: 'Our website and services are meant for people aged 18 and over, and we do not knowingly collect personal information from children. If you are under 18, please ask a parent or guardian to contact us for you. If you believe a child has shared information with us, contact us and we will delete it.',
        },
      ],
    },
    {
      id: 'other-websites',
      title: 'Links to other websites',
      blocks: [
        {
          kind: 'text',
          text: 'Our website links to services run by others, such as WhatsApp and Google Maps. Their own privacy policies apply when you use them.',
        },
      ],
    },
    {
      id: 'changes',
      title: 'Changes to this notice',
      blocks: [
        {
          kind: 'text',
          text: 'We may update this notice from time to time, for example when we add features to the website or the law changes. We will post the new version on this page and update the "Last updated" date at the top. If the changes are significant, we will make that clear on the website.',
        },
      ],
    },
    {
      id: 'contact',
      title: 'Contact us',
      blocks: [
        {
          kind: 'text',
          text: 'Questions about this notice or how we handle your information, or want to use your rights? Contact us:',
        },
        { kind: 'contact' },
      ],
    },
  ],
};
