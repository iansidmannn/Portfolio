import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: "Ian's Portfolio | Content Creator & Social Media Strategist",
  description: '150M+ views. Viral content creator, brand strategist, and social media consultant.',
  keywords: ['content creator', 'viral marketing', 'social media strategist', 'brand consultant'],
  authors: [{ name: 'Ian Sidman' }],
  openGraph: {
    title: "Ian's Portfolio | Content Creator & Social Media Strategist",
    description: '150M+ views. Viral content creator, brand strategist, and social media consultant.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
        <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
        {children}
      </body>
    </html>
  )
}

