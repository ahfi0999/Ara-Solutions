/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build plain HTML files into out/ so the site can be hosted anywhere (Vercel, Netlify, S3, ...).
  output: 'export',
  // Each page becomes /contact/index.html, which every static host serves at /contact/.
  trailingSlash: true,
  images: { unoptimized: true },
  // Stops Next picking up an unrelated package-lock.json higher up the folder tree.
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
