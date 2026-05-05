/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "orbiko-clean.local", "images.unsplash.com"],
    unoptimized: true, 
  },
};

module.exports = nextConfig;
