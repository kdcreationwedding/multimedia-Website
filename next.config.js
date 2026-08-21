const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname, '../../'),
  transpilePackages: ['three', 'gsap'],
  images: {
    domains: ['images.unsplash.com', 'assets.mixkit.co'],
  },
};

module.exports = nextConfig;
