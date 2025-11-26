/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Required for static export
    formats: ['image/avif', 'image/webp'], // Prefer modern formats
  },
  // For Cloudflare Pages static deployment
  output: 'export',
  trailingSlash: true,
  // Optimization
  poweredByHeader: false,
  // Optimize production builds
  swcMinify: true,
}

module.exports = nextConfig

