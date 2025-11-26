'use client'

interface TikTokEmbedProps {
  url: string
  className?: string
}

export default function TikTokEmbed({ url, className = '' }: TikTokEmbedProps) {
  // Extract video ID and username from TikTok URL
  const getVideoInfo = (url: string) => {
    const videoMatch = url.match(/\/video\/(\d+)/)
    const usernameMatch = url.match(/@([^/]+)/)
    return {
      videoId: videoMatch ? videoMatch[1] : null,
      username: usernameMatch ? usernameMatch[1] : null,
    }
  }

  const { videoId, username } = getVideoInfo(url)

  if (!videoId) {
    return (
      <div className={`flex items-center justify-center bg-black/20 rounded-lg p-8 ${className}`}>
        <div className="text-center">
          <p className="text-gray-400 mb-4">Unable to load TikTok video</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300"
          >
            Open on TikTok →
          </a>
        </div>
      </div>
    )
  }

  // Use TikTok's direct embed iframe - more reliable
  const embedUrl = `https://www.tiktok.com/embed/v2/${videoId}`

  return (
    <div className={className}>
      <div className="w-full max-w-md mx-auto">
        <div className="relative w-full" style={{ paddingBottom: '177.78%' }}> {/* 9:16 aspect ratio */}
          <iframe
            src={embedUrl}
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            frameBorder="0"
            scrolling="no"
            allow="encrypted-media"
            allowFullScreen
            title={`TikTok video by @${username || 'user'}`}
          />
        </div>
        <div className="mt-4 text-center">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
          >
            View original on TikTok →
          </a>
        </div>
      </div>
    </div>
  )
}

