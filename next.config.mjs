/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pages are still pre-rendered as static HTML at build time. The site is no longer a pure
  // static export because the "Ask ARA" assistant needs a small server function (/api/chat).
  trailingSlash: true,
  images: { unoptimized: true },
  // Stops Next picking up an unrelated package-lock.json higher up the folder tree.
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
