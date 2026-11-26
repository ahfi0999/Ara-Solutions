/**
 * The site's social preview image, made by app/opengraph-image.tsx (same alt and size). A page that sets its own
 * `openGraph` replaces the one it inherits, image included, so those pages add this back; without it a link shared
 * on WhatsApp or LinkedIn shows no picture. The trailing slash avoids a redirect (the site uses trailing slashes).
 */
export const shareImage = {
  url: '/opengraph-image/',
  width: 1200,
  height: 630,
  alt: 'ARA Solutions: IT staffing and training in Hyderabad',
};
