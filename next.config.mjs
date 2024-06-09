/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: '/your-repo-name',  // Add the basePath here
  swcMinify: true,
  optimizeFonts: true,
  minimumCacheTTL: 15000000
};

export default nextConfig;
