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
  // Compression and optimization
  compress: true,
  poweredByHeader: false,
  // Optimize production builds
  swcMinify: true,
  // Reduce bundle size
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig

