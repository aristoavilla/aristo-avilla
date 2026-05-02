/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable SWC for local development (Windows compatibility)
  // Vercel will use SWC automatically during deployment
  swcMinify: process.env.NODE_ENV === 'production',
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
