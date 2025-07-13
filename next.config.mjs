/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js', 'tsx', 'ts', 'jsx', 'js'],
  async redirects() {
    return [];
  },
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
