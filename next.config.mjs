/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: '/portfolio-website',  // Add the basePath here
  swcMinify: true,
  optimizeFonts: true,
  minimumCacheTTL: 15000000
};

module.exports = nextConfig;

