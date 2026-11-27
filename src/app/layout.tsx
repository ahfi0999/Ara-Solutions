import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import { site } from '@/content/site';
import { homeSeo } from '@/content/seo';
import { EnquiryProvider } from '@/components/enquiry/EnquiryProvider';
import { EnquiryNudge } from '@/components/enquiry/EnquiryNudge';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactDock } from '@/components/layout/ContactDock';
import { TagManager } from '@/components/layout/TagManager';
import { SmoothScroll } from '@/components/motion/SmoothScroll';
import { ScrollProgress } from '@/components/motion/primitives';
import { PageBackdrop } from '@/components/motion/PageBackdrop';
import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' });
const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${homeSeo.title} | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: homeSeo.description,
  // Google Search Console ownership (HTML tag method, from the SEO team). Keep it: removing it can undo the verification.
  verification: { google: 'JKPVx6ta2Aog6Jh_7MyTjdaqPh-1aQ7YDw8T0KneKNQ' },
  applicationName: site.name,
  // Every page may be indexed and its links followed; Google may also show large image previews and full
  // snippets. (The 404 page gets "noindex" from Next.js on top of this.)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // Favicons come from src/app/favicon.ico, icon.png and apple-icon.png (made from public/logo-mark.png).
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: 'en_IN',
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  themeColor: '#0d1150',
};

const organisationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/logo-color.png`,
  slogan: site.tagline,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  contactPoint: [
    { '@type': 'ContactPoint', contactType: 'sales', name: 'Staffing & services', telephone: site.phone },
    {
      '@type': 'ContactPoint',
      contactType: 'admissions',
      name: 'Training & Placement',
      telephone: site.training.phone,
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: 'IN',
  },
  hasMap: site.mapsUrl,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${geistMono.variable} ${instrument.variable}`}
    >
      <body className="font-sans">
        <script
          type="application/ld+json"
          // Static, trusted content defined above.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationJsonLd) }}
        />
        <PageBackdrop />
        <SmoothScroll />
        <ScrollProgress />
        <EnquiryProvider>
          <EnquiryNudge />
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <ContactDock />
        </EnquiryProvider>
        <TagManager />
      </body>
    </html>
  );
}
