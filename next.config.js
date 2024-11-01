/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig