/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // optional: good for static export, but fine to leave in dynamic too
  },
  // DO NOT include this line unless you're building for static export only:
  // output: 'export',
};

module.exports = nextConfig;
