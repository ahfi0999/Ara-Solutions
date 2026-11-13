import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import { site } from '@/content/site';
import { EnquiryProvider } from '@/components/enquiry/EnquiryProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ContactDock } from '@/components/layout/ContactDock';
import { SmoothScroll } from '@/components/motion/SmoothScroll';
import { ScrollProgress } from '@/components/motion/primitives';
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
    default: 'ARA Solutions | Salesforce, ServiceNow, AI & Cybersecurity Training in Hyderabad',
    template: '%s | ARA Solutions',
  },
  description: site.description,
  applicationName: site.name,
  icons: { icon: '/logo-mark.png', apple: '/logo-mark.png' },
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
  url: site.url,
  logo: `${site.url}/logo-color.png`,
  slogan: site.tagline,
  email: site.email,
  telephone: site.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: `${site.address.area}, ${site.address.city}`,
    addressRegion: site.address.region,
    addressCountry: 'IN',
  },
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
        <SmoothScroll />
        <ScrollProgress />
        <EnquiryProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <ContactDock />
        </EnquiryProvider>
      </body>
    </html>
  );
}
