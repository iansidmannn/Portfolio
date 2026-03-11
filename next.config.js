/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Required for static export
    formats: ['image/avif', 'image/webp'], // Prefer modern formats
  },
  // Note: output: 'export' is removed for dev mode compatibility
  // Add it back only when building for production static export
  // output: 'export', // Uncomment only for production builds
  trailingSlash: true,
  // Optimization
  poweredByHeader: false,
  // Optimize production builds
  swcMinify: true,
}

module.exports = nextConfig

