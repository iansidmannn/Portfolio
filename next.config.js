/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Required for static export
  },
  // For Cloudflare Pages static deployment
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig

