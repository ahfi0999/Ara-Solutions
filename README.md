# ARA Solutions website

Website for ARA Solutions, covering both sides of the business with the same structure as the original site:

- **Company**: About, Our Approach, Case Studies, Careers
- **Services** (IT & non-IT staffing): Corp-to-Corp, Fulltime Staffing, RPO, International Consulting
- **Training & Placement**: Salesforce, ServiceNow, AI & Machine Learning, Agentic AI, Cybersecurity, Full Stack with AI

URLs match the original site (`/services/rpo/`, `/training-placement/servicenow/`, `/company/about/` ...), so existing
links and search rankings carry over.

Built with **Next.js 15** (App Router, kept on 15 because AWS Amplify Hosting officially supports up to 15), **React 19**, **TypeScript**, **Tailwind CSS v4**, **Motion** and **Lucide** icons.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000 (use `npx next dev -p 3100` to pick another port)
npm run build      # production build
npm run start      # run the production build
npm run typecheck  # TypeScript check
```

## Deploy (AWS Amplify Hosting, CI/CD)

The site is hosted on **AWS Amplify Hosting** (account `fionasolutions`, region Mumbai `ap-south-1`).
Build settings are in `amplify.yml` at the repository root.

| Git branch | Purpose | Deploys |
| --- | --- | --- |
| `dev` | Development | automatically on every push |
| `qa` | Testing before release | automatically on every push |
| `main` | Live website (arasolutions.in) | automatically on every push |

Normal flow: work on `dev` → merge to `qa` and test → merge to `main` to go live.

**Environment variables** are set per branch in the Amplify console (App settings → Environment variables),
never committed to Git. The build copies them into `.env.production` so the server routes can read them:
`AI_BASE_URL`, `AI_API_KEY`, `AI_MODEL` (Ask ARA chatbot) and the enquiry variables below.

All pages are pre-rendered and served from the CDN; only `/api/enquiry` and `/api/chat` run on the server.

**Domain**: `arasolutions.in` is registered and its DNS is managed at Hostinger (email is Google Workspace, keep the MX record).
To go live, add the domain in Amplify (Hosting → Custom domains) and create the records it shows in Hostinger DNS:
an `ALIAS` for `@`, a `CNAME` for `www` and the certificate-validation `CNAME`. Leave MX and TXT records unchanged.

## Connect the enquiry form (important)

Forms post to `/api/enquiry`, which delivers each lead to **every channel you configure**.
Until at least one is set, the form honestly tells visitors that online enquiries are not connected yet
and offers to send their details on WhatsApp instead. It never pretends a lead was saved.

Copy `.env.example` to `.env.local` (local) or add the variables in your hosting dashboard:

| Channel | Variables |
| --- | --- |
| Any webhook (Google Sheets via Apps Script, Zapier, Make, a CRM) | `LEAD_WEBHOOK_URL` |
| Email via [Resend](https://resend.com) | `RESEND_API_KEY`, `LEAD_EMAIL_TO` (comma-separated), optional `LEAD_EMAIL_FROM` |
| Salesforce Web-to-Lead | `SALESFORCE_WEB_TO_LEAD_OID` |

The webhook receives JSON: `receivedAt, name, phone, email, interest, background, message, source`.
Submissions are validated on the server, protected by a hidden honeypot field and rate limited (5 per 10 minutes per visitor).

## Editing content

Everything visitors read lives in `src/content/`, so you rarely need to touch components:

| What | File |
| --- | --- |
| Phone, email, WhatsApp number, address, social links, headline stats | `src/content/site.ts` |
| Staffing services (Corp-to-Corp, Fulltime, RPO, International), roles covered | `src/content/services.ts` |
| Training programs: curriculum, tools, projects, certifications, roles, FAQs | `src/content/programs.ts` |
| About, Approach and Careers text | `src/content/company.ts` |
| Case studies and job openings (carried over from the original site) | `src/content/records.ts` |
| Menus (header, mobile menu, footer) | `src/content/navigation.ts` |
| Alumni companies, learner journey, homepage FAQs | `src/content/home.ts` |

**Fees, durations and batch dates** are intentionally not shown yet; the site says "Ask an advisor".
Add them to a program's `details` field (`duration`, `mode`, `fees`, `nextBatch`) and they appear automatically.

Adding a program: add an entry to `programs` in `src/content/programs.ts`, add a visual in
`src/components/visuals/ProgramVisual.tsx` and a row in the comparison table in `src/app/training-placement/page.tsx`.
Its page, menu entries, enquiry option and sitemap entry are generated automatically.

## Project structure

```
src/
  app/                  routes: home, services/[slug], training-placement, training-placement/[slug],
                        company/about, company/approach, company/case-studies, careers, contact, privacy,
                        api/enquiry, sitemap, robots, opengraph-image, not-found
  content/              all site content (single source of truth)
  components/
    layout/             Header (mega menu + mobile menu), Footer, ContactRail (WhatsApp + mobile bar)
    enquiry/            EnquiryForm, EnquiryProvider (dialog opened from any "Talk to us" button)
    home/               homepage sections, reused on other pages
    services/           service page sections
    program/            program page sections (hero, sticky section nav, body + glance card)
    visuals/            code-built illustrations (hiring pipeline, program visuals)
    ui/                 Button, Section/heading, PageHero, Reveal
  lib/                  enquiry validation, accent colours, helpers
public/                 ARA logos and alumni company logos
```

## Design system

Defined once in `src/app/globals.css` (`@theme`): brand navy and red from the ARA logo, ink backgrounds,
a warm canvas, and one accent colour per program. Fonts: Geist (text), Instrument Serif italic (accents),
Geist Mono (labels). Above-the-fold animations are CSS-only, and all motion respects "reduce motion".

## Notes before launch

- Confirm the WhatsApp number in `src/content/site.ts`.
- Have the privacy notice (`src/app/privacy/page.tsx`) reviewed.
- Program and hero visuals are illustrations, and are labelled as such.
- Case-study figures are carried over from the original site; confirm they are accurate.
- Careers "Apply" buttons open an email to `info@arasolutions.in` with the role in the subject.
