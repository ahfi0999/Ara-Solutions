import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { LegacyHashRedirect } from '../lib/router';
import { SITE_NAME, SITE_URL } from '../lib/seo';
import '../styles/index.css';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'ARA Solutions | IT Always The Right Choice',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'ARA Solutions provides premier IT workforce and staffing solutions. IT Always The Right Choice.',
  icons: { icon: '/logo-icon.png' },
  openGraph: {
    siteName: SITE_NAME,
    type: 'website',
    images: ['/logo.png'],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport = {
  themeColor: '#111455',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Inter:wght@400;500;600&family=Sora:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#ffffff] text-slate-900 antialiased selection:bg-[#E71E28] selection:text-white">
        <LegacyHashRedirect />
        <div className="min-h-screen flex flex-col bg-[#ffffff] text-slate-900 font-['Inter'] selection:bg-[#E71E28] selection:text-white">
          <Navbar />
          <main className="flex-1 flex flex-col" id="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
