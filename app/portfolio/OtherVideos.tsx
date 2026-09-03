'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface VideoItem {
  video?: string
  thumbnail?: string
  title: string
  url?: string
  caption?: string
  brand?: string
  logo?: string
}

function ProjectMedia({
  item,
  className = '',
}: {
  item: VideoItem
  className?: string
}) {
  const frame = `relative w-full aspect-[9/16] rounded-lg overflow-hidden border border-white/10 bg-black ${className}`
  if (item.video) {
    return (
      <div className={frame}>
        <video
          src={item.video}
          controls
          preload="metadata"
          className="w-full h-full object-contain"
          playsInline
          muted
        />
      </div>
    )
  }
  if (item.thumbnail && item.url) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${frame} block max-w-[300px] mx-auto`}
      >
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 90vw, 300px"
          className="object-cover"
        />
      </a>
    )
  }
  return null
}

const allVideos: VideoItem[] = [
  {
    thumbnail: '/other-yt-j2uRwcV7Ct8.jpg',
    title: 'Piñata Farms — Top 8 Fake News Pranks',
    url: 'https://www.youtube.com/watch?v=j2uRwcV7Ct8',
    caption:
      '~67K views on YouTube long-form. I gave Claude one specific prompt on how to edit it and the AI one-shotted the whole thing, thumbnail included.',
  },
  {
    thumbnail: '/other-yt-kAHhqy4WMEY.jpg',
    title: '$100 to $100K — Help The Homeless (Ep 1)',
    url: 'https://www.youtube.com/watch?v=kAHhqy4WMEY',
    caption:
      '~1.1k views on YouTube long-form. A cool series I started in collaboration with a local charity.',
  },
  {
    video: '/Instagram (1).mp4',
    title: 'Helping A Friend In Need',
    url: 'https://www.youtube.com/shorts/ao4vumHIPyw',
    caption: 'I love this creative, super clean editing & story telling. And this was a very special moment for me I caught on my meta glasses',
  },
  {
    video: '/Ian Sidman iansidmann Instagram photos and videos.mp4',
    title: 'College Campus Videos',
    url: 'https://www.instagram.com/p/CvasSHLrptX/',
    caption: "Good content sometimes takes being uncomfortable. I'd walk around for hours doing stuff like this.",
  },
  {
    video: '/NO KID SLEEPS ON THE FLOOR IN OUR TOWN on Instagram With our bed.mp4',
    title: 'Sleep In Heavenly Peace',
    url: 'https://www.instagram.com/reel/DF8OjWsJlIE/',
    caption: 'Non-profit content. All freestyle on recording day — came up with the hook on the spot to demonstrate the problem.',
  },
  {
    video: '/Instagram (2).mp4',
    title: 'My Favorite Series Idea Ever!',
    url: 'https://www.instagram.com/p/DEdXd_0TLjh/',
    caption: '$100 to $100,000 YouTube series. Viral format — plan to continue once execution is dialed.',
  },
  {
    video: '/brickad.mp4',
    title: 'Brick Ad',
    url: 'https://getbrick.app/',
    caption: 'Best performing ad 1st on website',
    brand: 'Brick',
    logo: '/brick logo.png',
  },
  {
    video: '/Charity Karaoke Sing For A Cause on Instagram 40000 Raised.mp4',
    title: 'Charity Karaoke',
    url: 'https://www.instagram.com/charitykaraoke/',
    caption: '20 days, no plan, no connections. Packed the venue — media played a big role in the turnout.',
  },
  {
    video: '/scenerAd.mp4',
    title: 'Scener Ad',
    url: 'https://www.tiktok.com/@gymjunkie69_/video/6960848726550121734',
    caption: '16.3k organic views',
    brand: 'Scener',
    logo: '/scener-logo-700x389.jpg',
  },
  {
    video: '/Better Edit.mp4',
    title: 'Thousand Oaks Street Fair',
    url: 'https://www.instagram.com/p/DBhP4v5qz/?hl=en',
    caption: 'Hired day-of. Filmed creatives for multiple charities and sponsors at the biggest event of the year in my city.',
  },
]

export default function OtherVideos({ embedded = false }: { embedded?: boolean }) {
  const [isDesktop, setIsDesktop] = useState(false)
  const [mobileIndex, setMobileIndex] = useState(0)
  const [desktopPage, setDesktopPage] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const [constraints, setConstraints] = useState({ left: 0, right: 0 })

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (isDesktop && carouselRef.current) {
      setTimeout(() => {
        if (carouselRef.current) {
          const maxScroll = -(carouselRef.current.scrollWidth - carouselRef.current.clientWidth)
          setConstraints({ left: maxScroll, right: 0 })
        }
      }, 100)
    }
  }, [isDesktop])

  const totalPages = Math.max(1, Math.ceil(allVideos.length / 2))

  const scrollDesktop = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return
    const containerWidth = carouselRef.current.clientWidth
    const currentX = -x.get()
    const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth
    const newX = direction === 'left'
      ? Math.max(0, currentX - containerWidth)
      : Math.min(maxScroll, currentX + containerWidth)
    x.set(-newX)
    setDesktopPage((prev) =>
      direction === 'left' ? Math.max(0, prev - 1) : Math.min(totalPages - 1, prev + 1)
    )
  }

  return (
    <section className={`${embedded ? 'py-8 px-0' : 'py-16 px-6'}`}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: embedded ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: embedded ? 0.35 : 0.6 }}
          className={`text-center ${embedded ? 'mb-5' : 'mb-8'}`}
        >
          {!embedded ? (
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Other Videos</h2>
          ) : (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Ads, long-form &amp; selects
            </p>
          )}
        </motion.div>

        {!isDesktop && (
          <div className="relative w-full max-w-xs mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
              >
                {allVideos.map((video, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-1">
                    <div className="space-y-3 pb-2">
                      {video.logo && (
                        <div className="flex items-center mb-1">
                          <div className="relative h-8 w-auto">
                            <Image
                              src={video.logo}
                              alt={video.brand || ''}
                              width={120}
                              height={40}
                              className="h-8 w-auto object-contain"
                            />
                          </div>
                        </div>
                      )}
                      <ProjectMedia item={video} className="max-h-[60vh]" />
                      <div>
                        <h4 className="text-white font-semibold mb-1 text-sm">{video.title}</h4>
                        {video.caption && (
                          <p className="text-xs text-gray-400 mb-2">{video.caption}</p>
                        )}
                        {video.url && (
                          <a
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 transition-colors"
                          >
                            View
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {allVideos.length > 1 && (
              <>
                <button
                  type="button"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-black/90 disabled:opacity-40 transition-colors shadow-md"
                  onClick={() => setMobileIndex((prev) => Math.max(0, prev - 1))}
                  disabled={mobileIndex === 0}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-black/90 disabled:opacity-40 transition-colors shadow-md"
                  onClick={() => setMobileIndex((prev) => Math.min(allVideos.length - 1, prev + 1))}
                  disabled={mobileIndex === allVideos.length - 1}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="flex justify-center gap-1.5 mt-3">
                  {allVideos.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 w-3 rounded-full transition-colors ${
                        i === mobileIndex ? 'bg-purple-400' : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {isDesktop && (
          <div className="relative overflow-hidden w-full max-w-[640px] mx-auto">
            <motion.div
              ref={carouselRef}
              drag="x"
              dragConstraints={constraints}
              dragElastic={0.1}
              style={{ x: springX }}
              className="flex gap-6 cursor-grab active:cursor-grabbing pb-4"
            >
              {allVideos.map((video, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  className="flex-shrink-0 w-[300px] space-y-3"
                >
                  {video.logo && (
                    <div className="flex items-center mb-2">
                      <div className="relative h-8 w-auto">
                        <Image
                          src={video.logo}
                          alt={video.brand || ''}
                          width={120}
                          height={40}
                          className="h-8 w-auto object-contain"
                        />
                      </div>
                    </div>
                  )}
                  <ProjectMedia item={video} className="mx-auto max-w-[300px]" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">{video.title}</h4>
                    {video.caption && (
                      <p className="text-sm text-gray-400 mb-2">{video.caption}</p>
                    )}
                    {video.url && (
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        View
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {desktopPage > 0 && (
              <button
                onClick={() => scrollDesktop('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black border border-white/30 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {desktopPage < totalPages - 1 && (
              <button
                onClick={() => scrollDesktop('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black border border-white/30 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            <div className="flex justify-center gap-1.5 mt-3">
              {Array.from({ length: totalPages }).map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-3 rounded-full transition-colors ${
                    i === desktopPage ? 'bg-purple-400' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
