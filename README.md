# ARA Solutions website

Marketing website for ARA Solutions — *IT Always The Right Choice*.

Built with **Next.js 16** (static export), **React 19**, **Tailwind CSS v4**, **Framer Motion** and **Lucide** icons.

## Run it

```bash
npm install
npm run dev       # local preview with live reload at http://localhost:3000
npm run build     # production build: plain HTML files in out/
npm run start     # serve the production build from out/
npm run format    # format the source with Prettier
```

The site is fully static, so `out/` can be deployed to any static host (Vercel, Netlify, S3, …).
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
    layout/               Navbar, NavDropdown, MobileNavGroup, Footer, Logo
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
