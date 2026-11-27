import { site } from './site';

/**
 * The privacy notice (/privacy/), from the client's "Privacy notice" document (Nov 2026), written for India's
 * Digital Personal Data Protection Act, 2023. It must describe what the site and the team really do, so update
 * it whenever a form, tool or tracking tag changes (and change `updated`). The document asks for a lawyer's
 * review before it is final.
 *
 * Facts the client still has to supply are left out rather than guessed (see the document's "Confirm before
 * publishing" list): registered office address and CIN, the grievance contact's name, response times, retention
 * periods, office hours, and whether advertising tags are used. Add them here when they arrive.
 * Ask ARA's provider (Groq) is taken from the site's settings; check it if the provider changes.
 *
 * Text supports **bold** and [links](https://example.com); table cells too.
 */

export type PrivacyBlock =
  | { kind: 'text'; text: string }
  | { kind: 'list'; items: string[] }
  /** `rowHead`: how the first column looks: names in code type (cookies), bold, or plain. */
  | { kind: 'table'; caption: string; head: string[]; rows: string[][]; rowHead?: 'code' | 'bold' | 'plain' }
  | { kind: 'contact' };

export type PrivacySection = { id: string; title: string; blocks: PrivacyBlock[] };

export type Privacy = {
  updated: string;
  intro: string;
  /** "Privacy at a glance": the short version, at the top. */
  glance: string[];
  sections: PrivacySection[];
};

const email = `[${site.email}](${site.emailHref})`;
const privacyEmail = `[${site.email}](${site.emailHref}?subject=Privacy%20request)`;

export const privacyRequestHref = `${site.emailHref}?subject=Privacy%20request`;

export const privacy: Privacy = {
  updated: '27 November 2026',
  intro:
    'This notice explains what personal information ARA Solutions collects, why we collect it, who sees it, how long we keep it, and what you can do about it. It applies to arasolutions.in and to the training, placement and staffing work we do through it, on the phone, on WhatsApp and by email.',
  glance: [
    'We collect only what we need to help you: your name, contact details, what you are looking for, and basic website usage.',
    'We use it to answer your enquiry, run our training and placement, consider candidates for roles, and help employers hire.',
    'We never sell your personal information, and we do not hand it to others so that they can market to you.',
    'A candidate’s profile goes to an employer only after the candidate agrees to it for that role.',
    `You can ask to see, correct or delete your data, or withdraw your consent, at any time. Write to ${email}.`,
  ],
  sections: [
    {
      id: 'who-we-are',
      title: 'Who we are',
      blocks: [
        {
          kind: 'text',
          text: `${site.legalName} (“ARA”, “we”, “us”) is a company in ${site.address.city}, ${site.address.region}, ${site.address.country}. We provide IT training with placement support, corporate training, and IT and non-IT staffing and recruitment.`,
        },
        {
          kind: 'text',
          text: 'Under India’s Digital Personal Data Protection Act, 2023 (“DPDP Act”), ARA is the **Data Fiduciary** for the personal data described here. That means we decide why and how it is used, and we are responsible for looking after it.',
        },
      ],
    },
    {
      id: 'which-part',
      title: 'Which part applies to you',
      blocks: [
        {
          kind: 'table',
          caption: 'Which sections of this notice apply to you',
          head: ['If you are…', 'What we hold', 'Read sections'],
          rows: [
            [
              'Visiting the website',
              'Technical and usage data, cookies',
              '[3](#what-we-collect), [4](#cookies)',
            ],
            [
              'Sending an enquiry or using Ask ARA',
              'Your details and what you tell us',
              '[3](#what-we-collect), [4](#cookies)',
            ],
            [
              'A candidate or jobseeker',
              'Your CV and career details',
              '[3](#what-we-collect), [6](#sharing)',
            ],
            [
              'A learner or course applicant',
              'Your enrolment, progress and placement records',
              '[3](#what-we-collect), [6](#sharing)',
            ],
            [
              'An employer or client',
              'Your business contact details and hiring needs',
              '[3](#what-we-collect), [6](#sharing)',
            ],
          ],
        },
        { kind: 'text', text: 'Sections 5 to 13 apply to everyone.' },
      ],
    },
    {
      id: 'what-we-collect',
      title: 'What we collect, why, and who sees it',
      blocks: [
        {
          kind: 'text',
          text: 'We list each kind of information, the reason we collect it, and who inside or outside ARA can see it.',
        },
        {
          kind: 'table',
          caption: 'What we collect, why we need it and who sees it',
          head: ['What you give us', 'Why we need it', 'Who sees it'],
          rowHead: 'plain',
          rows: [
            [
              '**Enquiry form:** your name, phone or WhatsApp number, the service you are interested in and, if you choose, your email, background, message and the page you came from',
              'To reply, discuss training or hiring, and follow up',
              'Our counsellors and recruiters handling your enquiry',
            ],
            [
              '**Ask ARA assistant:** the questions you type',
              'To produce an answer',
              'Our AI provider, Groq. We do not store these conversations on our servers',
            ],
            [
              '**Candidates:** CV, contact details, experience, qualifications, skills, LinkedIn profile if you share it, and notes from our conversations with you',
              'To assess your fit, match you to roles, and put you forward when you agree',
              'Our recruitment team. An employer, only as set out in [section 6](#sharing)',
            ],
            [
              '**Learners:** name, contact details, education and work background, CV, enrolment details, attendance and assessment records, and placement-support records',
              'To run your course, track your progress and support your job search',
              'Your trainers, our placement team and our administrators',
            ],
            [
              '**Employers and clients:** your name, role, company, work email and phone, and the roles or skills you need',
              'To understand your brief, find suitable candidates and manage our work with you',
              'Our client-engagement and recruitment teams',
            ],
            [
              '**Calls, WhatsApp and email:** your contact details and what you tell us',
              'To answer you and keep a record of what we agreed',
              'The team member handling your conversation',
            ],
          ],
        },
        {
          kind: 'text',
          text: 'Please do not send us bank details, government ID numbers (such as Aadhaar or PAN) or health information unless we have specifically asked for them for a stated reason. If a CV contains them, we will remove them.',
        },
        {
          kind: 'text',
          text: '**Collected automatically when you visit the site:** your IP address, browser and device type, the pages you view, how you reached us, and the date and time of your visit. We use this to keep the site secure, stop spam and abuse (including rate limiting), fix problems and understand how the site is used.',
        },
        {
          kind: 'text',
          text: '**Ask ARA.** Ask ARA is an AI assistant. What you type is passed to our AI provider so it can write a reply. We do not keep the conversation on our servers. Because the provider handles it under its own terms, please do not type personal details, such as your phone number or CV, into the chat. Use the enquiry form for that.',
        },
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies and analytics',
      blocks: [
        {
          kind: 'text',
          text: 'Cookies are small files that a website stores in your browser. We use only the following.',
        },
        {
          kind: 'table',
          caption: 'Cookies and browser storage used on this website',
          head: ['Name', 'Set by', 'What it does', 'How long it lasts'],
          rowHead: 'code',
          rows: [
            [
              'Google Tag Manager',
              'Google',
              'Loads our measurement tools. Sets no cookies of its own',
              'Nothing is stored',
            ],
            [
              '_ga, _ga_*',
              'Google Analytics',
              'Counts visits and builds combined reports on how the site is used',
              'Up to 2 years',
            ],
            [
              'ara-dock-min',
              'ARA Solutions',
              'Remembers whether you minimised the contact panel',
              'Until you close the tab. Never sent to us',
            ],
          ],
        },
        {
          kind: 'text',
          text: 'You can block or delete cookies in your browser settings, or install Google’s [Analytics opt-out add-on](https://tools.google.com/dlpage/gaoptout). The site works without them. For how Google handles data, see [Google’s own privacy policy](https://policies.google.com/privacy).',
        },
      ],
    },
    {
      id: 'why-we-use',
      title: 'Why we may use your information',
      blocks: [
        {
          kind: 'text',
          text: 'We use your information with your consent. You give it when you submit a form, contact us, apply for a role or enrol on a course. You can withdraw it at any time ([section 10](#your-rights)).',
        },
        {
          kind: 'text',
          text: 'Some uses do not need consent because the law allows them. For example, we may keep records or share information where a law, court or government authority requires it, or to protect rights, safety or property.',
        },
        { kind: 'text', text: 'We use your information for these purposes, and no others:' },
        {
          kind: 'list',
          items: [
            'replying to your enquiry and contacting you by phone, WhatsApp or email about it;',
            'running training and placement, and delivering staffing, recruitment and consulting services;',
            'considering candidates for roles and putting them forward;',
            'answering your questions in Ask ARA;',
            'measuring and improving the website and our marketing;',
            'keeping our systems secure and preventing spam and abuse;',
            'meeting our legal obligations and protecting our legal rights.',
          ],
        },
      ],
    },
    {
      id: 'sharing',
      title: 'Who we share it with',
      blocks: [
        { kind: 'text', text: 'We never sell your personal information.' },
        {
          kind: 'table',
          caption: 'Who we share personal information with',
          head: ['Who', 'What they receive', 'Why'],
          rows: [
            [
              'Employers and clients',
              'A candidate’s profile (CV and relevant details)',
              'Only for a role the candidate has agreed to be put forward for',
            ],
            [
              'Service providers',
              'Only what they need to do their job',
              'Website hosting (Amazon Web Services, Mumbai region), Google Sheets and our email and customer-management tools, Google Analytics, and our Ask ARA provider (Groq)',
            ],
            [
              'Authorities and advisers',
              'Information the law requires, or that we need to protect our rights',
              'Legal, regulatory or court requirements, and our professional advisers, under a duty of confidentiality',
            ],
            [
              'A successor business',
              'Relevant records',
              'If ARA is merged with, or sold to, another business. We will tell you, and this notice will keep applying',
            ],
          ],
        },
        {
          kind: 'text',
          text: 'Our service providers act on our instructions and may not use your information for their own purposes.',
        },
        {
          kind: 'text',
          text: '**Candidates.** Before we send your profile to an employer, we tell you the role and the company, or describe the company if its name is confidential, and ask whether you want to be considered. We go ahead only when you say yes, by call, WhatsApp or email. You can say no, and you can withdraw later.',
        },
      ],
    },
    {
      id: 'storage',
      title: 'Where your information is stored',
      blocks: [
        {
          kind: 'text',
          text: 'Our website is hosted by Amazon Web Services in its Mumbai region, in India. Some of our providers, such as Google and our AI provider, may process information outside India, including in the United States. Where that happens, we choose providers with established security practices and rely on the protections in our agreements with them.',
        },
        {
          kind: 'text',
          text: 'If you contact us from outside India, for example from the UK or EU, local law may give you additional rights. Tell us and we will respond to your request in line with the law that applies to you.',
        },
      ],
    },
    {
      id: 'retention',
      title: 'How long we keep it',
      blocks: [
        {
          kind: 'text',
          text: 'We keep information only for as long as we need it for the purpose it was collected for. After that we delete or anonymise it, unless the law requires us to keep it longer.',
        },
        {
          kind: 'table',
          caption: 'How long we keep each kind of information',
          head: ['Information', 'How long we keep it'],
          rows: [
            [
              'Enquiry details',
              'While we help you with your enquiry and follow up. You can ask us to delete them sooner',
            ],
            [
              'Candidate CVs and profiles',
              'While you are an active candidate, and longer only if you ask us to keep you on file for future roles. You can ask us to delete it sooner',
            ],
            [
              'Learner records',
              'While you are on the course and while we support your placement, so we can confirm your course details',
            ],
            [
              'Employer and client contacts',
              'While we work together, and afterwards only as long as our records need',
            ],
            [
              'Website server logs (including IP addresses)',
              'Only as long as we need them to keep the site secure and fix problems',
            ],
            ['Analytics data', 'As set in our Google Analytics account'],
            ['Ask ARA conversations', 'Not stored by us. Held by the AI provider under its own terms'],
            ['Records we must keep by law, such as accounts', 'For the period the law requires'],
          ],
        },
      ],
    },
    {
      id: 'security',
      title: 'How we protect it',
      blocks: [
        {
          kind: 'text',
          text: 'We use reasonable security safeguards. The site is served only over HTTPS. Only the staff who need an enquiry, CV or learner record to do their work can open it. We use established, reputable providers and review who has access.',
        },
        {
          kind: 'text',
          text: 'If a personal-data breach affects you, we will tell you and the authorities as the law requires.',
        },
      ],
    },
    {
      id: 'your-rights',
      title: 'Your rights',
      blocks: [
        { kind: 'text', text: 'You can ask us to:' },
        {
          kind: 'list',
          items: [
            'show you a summary of the personal data we hold about you, and who we have shared it with;',
            'correct, complete or update anything that is wrong or out of date;',
            'erase your data, unless the law requires us to keep it;',
            'withdraw your consent at any time. This will not affect what we did before you withdrew it. It may mean we can no longer provide a service that needs your data;',
            'deal with a complaint about how we have handled your data;',
            'nominate another person to exercise your rights if you die or become unable to act for yourself.',
          ],
        },
        {
          kind: 'text',
          text: `**How to make a request.** Email ${privacyEmail} with the subject line “Privacy request”, or call [${site.phone}](${site.phoneHref}). Tell us your name and the phone number or email you used with us, so that we can find your records and confirm it is you. There is no charge.`,
        },
        {
          kind: 'text',
          text: '**How quickly we reply.** We acknowledge your request promptly and reply as soon as we can. If we need longer, we will tell you why. The law allows up to 90 days for grievances, and we will never take longer.',
        },
        {
          kind: 'text',
          text: '**If you are not satisfied.** Contact us first ([section 13](#contact)). If we have not resolved your complaint, you can complain to the Data Protection Board of India.',
        },
      ],
    },
    {
      id: 'marketing',
      title: 'Calls, WhatsApp, email and marketing',
      blocks: [
        {
          kind: 'text',
          text: 'We contact you about what you asked us about. If we also send you information about other courses or roles, every message will tell you how to stop. You can also tell us on a call, by WhatsApp or by email, and we will stop. Stopping marketing does not stop messages we need to send about a course or role you have already joined or applied for.',
        },
      ],
    },
    {
      id: 'children',
      title: 'Children',
      blocks: [
        {
          kind: 'text',
          text: `Our services are for people aged 18 and over. We do not knowingly collect personal data from anyone under 18. If you believe a child has given us their information, email ${email} and we will delete it, unless the law requires us to keep it.`,
        },
      ],
    },
    {
      id: 'contact',
      title: 'Other websites, changes and contact',
      blocks: [
        {
          kind: 'text',
          text: '**Links to other sites.** Our site links to services such as WhatsApp and Google Maps. They have their own privacy policies, and this notice does not cover them.',
        },
        {
          kind: 'text',
          text: '**Changes to this notice.** If we change how we use your data, we will update this page and its “Last updated” date. For a significant change, we will show a notice on the site, and we will ask for your consent again if the law requires it.',
        },
        { kind: 'text', text: '**Contact us, and our grievance contact**' },
        { kind: 'contact' },
      ],
    },
  ],
};
