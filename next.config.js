/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three', 'gsap'],
  images: {
    domains: ['images.unsplash.com', 'assets.mixkit.co'],
  },
};

module.exports = nextConfig;
