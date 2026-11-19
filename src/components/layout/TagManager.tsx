import Script from 'next/script';
import { site } from '@/content/site';

/** Only the live website reports to Google: visits to the dev and qa test sites and to local builds are left out. */
const liveHost = new URL(site.url).hostname;
const LIVE_HOSTS = [liveHost, `www.${liveHost}`];

/**
 * Google Tag Manager: Google's standard container loader, which the SEO team uses to add tools such as
 * Google Analytics without a code change. It starts once the page is interactive, so it never slows the
 * first screen. The site changes pages without a full reload, so tags that should count every page need
 * a "History change" trigger in Tag Manager (Google Analytics counts them on its own).
 */
export function TagManager() {
  return (
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`(function(w,d,s,l,i){if(${JSON.stringify(LIVE_HOSTS)}.indexOf(w.location.hostname)<0)return;w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',${JSON.stringify(site.gtmId)});`}
    </Script>
  );
}
