import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: "Ian's Portfolio | Content Creator & Social Media Strategist",
  description: '150M+ views. Viral content creator, brand strategist, and social media consultant.',
  keywords: ['content creator', 'viral marketing', 'social media strategist', 'brand consultant'],
  authors: [{ name: 'Ian Sidman' }],
  openGraph: {
    title: "Ian's Portfolio | Growth & Viral Marketer With 150M Views",
    description: "Ian's Portfolio | Growth & Viral Marketer With 150M Views",
    type: 'website',
    images: [
      {
        url: '/Profile.jpg',
        width: 1200,
        height: 1200,
        alt: "Ian's Portfolio",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ian's Portfolio | Growth & Viral Marketer With 150M Views",
    description: "Ian's Portfolio | Growth & Viral Marketer With 150M Views",
    images: ['/Profile.jpg'],
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

