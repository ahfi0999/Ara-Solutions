# ARA Solutions website

Marketing website for ARA Solutions — *IT Always The Right Choice*.

Built with **Next.js 16** (static export), **React 19**, **Tailwind CSS v4**, **Framer Motion** and **Lucide** icons.

## Run it

```bash
npm install
npm run dev       # local preview with live reload at http://localhost:3000
npm run build     # production build
npm run start     # run the production build locally
npm run format    # format the source with Prettier
```

Deploy on Vercel (or any host that runs Next.js).
Every page is pre-rendered to its own HTML file with a real URL (`/contact/`), its own title and
description, plus `sitemap.xml` and `robots.txt`, so search engines can index each page.
Old hash links (`/#/contact`) still work: they redirect to the new URL.

## Project layout

```
src/
  app/                    Next.js routes: one folder per URL, plus layout, sitemap, robots, 404
  lib/router.jsx          useRouter() -> { currentPath, navigate } on top of Next's router
  lib/seo.js              site URL, ROUTES, and the title/description of every page
  views/                  one component per page (company/, services/, training/)
  sections/               sections that belong to a single page
  components/
    layout/               Navbar, Footer, Logo, ContactDock (contact buttons + Ask ARA)
    sections/             reusable page sections: PageHero, CardGrid, CtaBand,
                          ProcessSteps, MarketContext, CareerPaths
    decor/                animated background artwork (glows, grids, waves)
    ui/CountUp.jsx        animated number counter
    icons.jsx             small custom SVG icons
  data/                   content: images, navigation, case studies, jobs, tracks
  styles/
    index.css             Tailwind entry point
    brand.css             brand styles: glossy cards/buttons, colours, keyframes
public/                   logos and photography
```

## Common edits

| To change… | Edit |
| --- | --- |
| Menu items | `src/data/navigation.jsx` |
| A page's text | the page in `src/views/` or its sections in `src/sections/<page>/` |
| Job openings | `src/data/jobOpenings.js` |
| Case studies | `src/data/caseStudies.js` |
| Training tracks | `src/data/trainingTracks.js` |
| Photos | `public/images/` and the paths in `src/data/images.js` |
| A page's Google title/description | `PAGE_META` in `src/lib/seo.js` |
| Add a page | create the component in `src/views/`, add `src/app/<url>/page.jsx` (copy an existing one), then add the URL to `ROUTES` and `PAGE_META` in `src/lib/seo.js` |

## Contact form

The contact form opens the visitor's email app with a pre-filled message to
`info@arasolutions.in`. No backend is required.

## "Ask ARA" AI assistant

The chat assistant works with any provider that offers an OpenAI-compatible API
(Groq, OpenAI, Anthropic/Claude, ...). It stays hidden until it is configured.

1. Get an API key from your provider.
2. Add three environment variables (see `.env.example` for provider examples):
   - **Vercel:** Project → Settings → Environment Variables, then redeploy.
   - **Local testing:** copy `.env.example` to `.env.local` and fill it in (never commit it).

   ```
   AI_BASE_URL=https://api.groq.com/openai/v1
   AI_API_KEY=your-key
   AI_MODEL=openai/gpt-oss-120b
   ```
3. To teach the assistant more (fees, batch dates, durations), edit `COMPANY_NOTES`
   in `src/data/assistant.js`. It is instructed never to invent details that aren't there.

The API key is only used on the server (`src/app/api/chat/route.js`) and is never sent to the
browser. Each visitor is limited to 20 messages per 10 minutes to protect against abuse.

Because of this server function, deploy to a host that runs Next.js (e.g. Vercel). Pages are
still pre-rendered as static HTML.

## Contact details and buttons

Phone, email, WhatsApp number, video-call booking link and social profiles are all in
`src/data/site.js`. The "Video" button and social icons only appear once a link is filled in.
