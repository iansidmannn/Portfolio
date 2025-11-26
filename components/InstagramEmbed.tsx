'use client'

import { useEffect } from 'react'

interface InstagramEmbedProps {
  url: string
  className?: string
}

export default function InstagramEmbed({ url, className = '' }: InstagramEmbedProps) {
  useEffect(() => {
    // Load Instagram embed script if not already loaded
    if (typeof window !== 'undefined') {
      const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]')
      
      if (!existingScript) {
        const script = document.createElement('script')
        script.src = 'https://www.instagram.com/embed.js'
        script.async = true
        document.body.appendChild(script)
      } else {
        // Script exists, trigger processing
        if ((window as any).instgrm) {
          (window as any).instgrm.Embeds.process()
        }
      }
    }
  }, [url])
  // Extract post ID from Instagram URL
  const getPostId = (url: string): string | null => {
    // Handle both /p/ and /reel/ formats
    const pMatch = url.match(/\/p\/([^/?]+)/)
    const reelMatch = url.match(/\/reel\/([^/?]+)/)
    return pMatch ? pMatch[1] : reelMatch ? reelMatch[1] : null
  }

  const postId = getPostId(url)

  if (!postId) {
    return (
      <div className={`flex items-center justify-center bg-black/20 rounded-lg p-8 ${className}`}>
        <div className="text-center">
          <p className="text-gray-400 mb-4">Unable to load Instagram post</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300"
          >
            Open on Instagram →
          </a>
        </div>
      </div>
    )
  }

  // Instagram embeds use blockquote format that gets processed by their embed.js script
  return (
    <div className={className}>
      <div className="w-full max-w-md mx-auto">
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: '0',
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '1px',
            maxWidth: '540px',
            minWidth: '326px',
            padding: '0',
            width: '99.375%',
          }}
        >
          <div style={{ padding: '16px' }}>
            <a
              href={url}
              style={{
                background: '#FFFFFF',
                lineHeight: 0,
                padding: '0 0',
                textAlign: 'center',
                textDecoration: 'none',
                width: '100%',
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              View this post on Instagram
            </a>
          </div>
        </blockquote>
        <div className="mt-4 text-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
          >
            View original on Instagram →
          </a>
        </div>
      </div>
    </div>
  )
}

