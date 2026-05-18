/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' }
    ],
    formats: ['image/avif', 'image/webp']
  },
  experimental: {
    typedRoutes: true
  }
};
module.exports = nextConfig;
