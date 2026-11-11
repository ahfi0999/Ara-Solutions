# ARA Solutions website

Marketing website for ARA Solutions — *IT Always The Right Choice*.

Built with **React 19**, **Vite**, **Tailwind CSS v4**, **Framer Motion** and **Lucide** icons.

## Run it

```bash
npm install
npm run dev       # local preview with live reload
npm run build     # production build in dist/
npm run preview   # serve the production build
npm run format    # format the source with Prettier
```

The site is fully static, so `dist/` can be deployed to any static host (Vercel, Netlify, S3, …).
Pages use hash URLs (`/#/contact`), so no server-side rewrite rules are needed.

## Project layout

```
src/
  App.jsx                 page switcher + page transition
  lib/router.jsx          tiny hash router (RouterProvider, useRouter, ROUTES)
  pages/                  one file per page (company/, services/, training/)
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
| A page's text | the page in `src/pages/` or its sections in `src/sections/<page>/` |
| Job openings | `src/data/jobOpenings.js` |
| Case studies | `src/data/caseStudies.js` |
| Training tracks | `src/data/trainingTracks.js` |
| Photos | `public/images/` and the paths in `src/data/images.js` |
| Add a page | create it in `src/pages/`, then add its path to `ROUTES` in `src/lib/router.jsx` and to `PAGES` in `src/App.jsx` |

## Contact form

The contact form opens the visitor's email app with a pre-filled message to
`info@arasolutions.in`. No backend is required.
