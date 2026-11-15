import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  // Pin the project root for Turbopack (avoids picking up a lockfile from a parent folder).
  turbopack: { root: import.meta.dirname },
  // Keep old links from the previous website working.
  async redirects() {
    return [{ source: '/services/training-placement/', destination: '/training-placement/', permanent: true }];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
