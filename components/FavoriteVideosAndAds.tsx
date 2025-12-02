'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

interface FavoriteVideo {
  video?: string
  thumbnail?: string
  title: string
  url?: string
  caption?: string
}

export default function FavoriteVideosAndAds() {
  const [activeTab, setActiveTab] = useState<'videos' | 'ads'>('videos')
  const [isDesktop, setIsDesktop] = useState(false)
  const videosCarouselRef = useRef<HTMLDivElement>(null)
  const adsCarouselRef = useRef<HTMLDivElement>(null)
  const videosX = useMotionValue(0)
  const adsX = useMotionValue(0)
  const videosSpringX = useSpring(videosX, { stiffness: 300, damping: 30 })
  const adsSpringX = useSpring(adsX, { stiffness: 300, damping: 30 })
  const [videosConstraints, setVideosConstraints] = useState({ left: 0, right: 0 })
  const [adsConstraints, setAdsConstraints] = useState({ left: 0, right: 0 })

  // Favorite Videos from Charity Impact
  const favoriteVideos: FavoriteVideo[] = [
    {
      video: '/Instagram (1).mp4',
      title: 'Helping A Friend In Need',
      url: 'https://www.youtube.com/shorts/ao4vumHIPyw',
      caption: 'I love this creative, super clean editing & story telling. And this was a very special moment for me I caught on my meta glasses (pulled 30k on yt)',
    },
    {
      video: '/Ian Sidman iansidmann Instagram photos and videos.mp4',
      title: 'College Campus Videos',
      url: 'https://www.instagram.com/p/CvasSHLrptX/',
      caption:
        "Good content sometimes takes fearlessness, being uncomfortable. I'd walk around for hours doing stuff like this.",
    },
    {
      video: '/NO KID SLEEPS ON THE FLOOR IN OUR TOWN on Instagram With our bed.mp4',
      title: 'Sleep In Heavenly Peace',
      url: 'https://www.instagram.com/reel/DF8OjWsJlIE/',
      caption:
        'Love the impact of this organization & all the content this day was freestyle. I came up with this powerful hook up to demonstrate the problem, powerful ideas on the spot is always been a gift of mine (storytelling during is botched)',
    },
    {
      video: '/Instagram (2).mp4',
      title: 'My Favorite Series Idea Ever!',
      url: 'https://www.instagram.com/p/DEdXd_0TLjh/',
      caption:
        "this series ($100 to $100,000 on yt) means a lot to me and I hope to continue it one day, ALSO it's super viral, genuinely can 100% take off once execution is nailed down",
    },
    {
      video: '/Charity Karaoke Sing For A Cause on Instagram 40000 Raised.mp4',
      title: 'Charity Karaoke',
      url: 'https://www.instagram.com/charitykaraoke/',
      caption:
        "I had 20 days to became a face for this event, nothing was planned I didn't know a lot of people, I just had to make it work. The owner was worried about the turnout & we smashed it with my media playing a big role.",
    },
    {
      video: '/Better Edit.mp4',
      title: 'Thousand Oaks Street Fair',
      url: 'https://www.instagram.com/p/DBhP4v5qz/?hl=en',
      caption:
        'Literally got hired at this event day before, but I made it work and filmed creatives like this for multiple charities and sponsors at the event (unposted idk why) (everyone in my hometown knows about this street fair, busiest day of the year)',
    },
  ]

  // Ads from Brand Deals
  const ads = [
    {
      brand: 'Brick',
      url: 'https://getbrick.app/',
      description: 'Best performing ad 1st on website',
      logo: '/brick logo.png',
      video: '/brickad.mp4',
    },
    {
      brand: 'Scener',
      url: 'https://www.tiktok.com/@gymjunkie69_/video/6960848726550121734',
      description: '16.3k organic views',
      logo: '/scener-logo-700x389.jpg',
      video: '/scenerAd.mp4',
    },
  ]

  // Track desktop vs mobile for layout/interaction
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Update drag constraints when carousel refs are ready (desktop only)
  useEffect(() => {
    const updateConstraints = () => {
      if (videosCarouselRef.current) {
        const maxScroll = -(videosCarouselRef.current.scrollWidth - videosCarouselRef.current.clientWidth)
        setVideosConstraints({ left: maxScroll, right: 0 })
      }
      if (adsCarouselRef.current) {
        const maxScroll = -(adsCarouselRef.current.scrollWidth - adsCarouselRef.current.clientWidth)
        setAdsConstraints({ left: maxScroll, right: 0 })
      }
    }

    if (isDesktop) {
      // Small delay to ensure DOM is ready
      setTimeout(updateConstraints, 100)
      window.addEventListener('resize', updateConstraints)
      return () => window.removeEventListener('resize', updateConstraints)
    }
  }, [activeTab, isDesktop])

  const scrollCarousel = (direction: 'left' | 'right', type: 'videos' | 'ads') => {
    const carouselRef = type === 'videos' ? videosCarouselRef : adsCarouselRef
    const xValue = type === 'videos' ? videosX : adsX
    
    if (!carouselRef.current) return
    
    // For videos: scroll by exactly 2 video widths + 1 gap
    // Each video is calc((100%-24px)/2), so 2 videos + 1 gap = container width
    const containerWidth = carouselRef.current.clientWidth
    const gap = 24
    const scrollAmount = type === 'videos' 
      ? containerWidth  // Scroll by exactly the container width (2 videos + gap)
      : 300 + gap  // For ads
    
    const currentX = -xValue.get()
    const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth
    
    let newX = direction === 'left' 
      ? Math.max(0, currentX - scrollAmount)
      : Math.min(maxScroll, currentX + scrollAmount)
    
    xValue.set(-newX)
  }

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'videos'
                ? 'bg-purple-500/20 text-purple-400 border-2 border-purple-400/50'
                : 'bg-white/5 text-gray-400 border-2 border-white/10 hover:bg-white/10 hover:text-white'
            }`}
          >
            Favorite Videos
          </button>
          <button
            onClick={() => setActiveTab('ads')}
            className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'ads'
                ? 'bg-purple-500/20 text-purple-400 border-2 border-purple-400/50'
                : 'bg-white/5 text-gray-400 border-2 border-white/10 hover:bg-white/10 hover:text-white'
            }`}
          >
            Ads
          </button>
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          {/* Favorite Videos */}
          {activeTab === 'videos' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Mobile: stacked cards, no carousel */}
              {!isDesktop && (
                <div className="space-y-8">
                  {favoriteVideos.map((video, i) => (
                    <div key={i} className="space-y-3 max-w-sm mx-auto">
                      {video.video && (
                        <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden border border-white/10 bg-black">
                          <video
                            src={video.video}
                            controls
                            className="w-full h-full object-contain"
                            playsInline
                            muted
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      )}
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
                            {video.url.includes('youtube.com') || video.url.includes('youtu.be')
                              ? 'View on YouTube'
                              : 'View on Instagram'}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Desktop: carousel showing two at a time */}
              {isDesktop && (
                <div className="relative overflow-hidden w-full max-w-[640px] mx-auto">
                  <motion.div
                    ref={videosCarouselRef}
                    drag="x"
                    dragConstraints={videosConstraints}
                    dragElastic={0.1}
                    style={{ x: videosSpringX }}
                    className="flex gap-6 cursor-grab active:cursor-grabbing pb-4"
                  >
                    {favoriteVideos.map((video, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                        className="flex-shrink-0 w-[300px] space-y-3"
                      >
                        {video.video && (
                          <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden border border-white/10 mx-auto max-w-[300px] bg-black">
                            <video
                              src={video.video}
                              controls
                              className="w-full h-full object-contain"
                              playsInline
                              muted
                            >
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        )}
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
                              {video.url.includes('youtube.com') || video.url.includes('youtu.be')
                                ? 'View on YouTube'
                                : 'View on Instagram'}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Navigation arrows */}
                  <button
                    onClick={() => scrollCarousel('left', 'videos')}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/90 transition-colors shadow-lg"
                    aria-label="Previous videos"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => scrollCarousel('right', 'videos')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/90 transition-colors shadow-lg"
                    aria-label="Next videos"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* Ads */}
          {activeTab === 'ads' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Mobile: stacked cards, no carousel */}
              {!isDesktop && (
                <div className="space-y-8">
                  {ads.map((ad, i) => (
                    <div key={i} className="space-y-3 max-w-sm mx-auto">
                      {ad.logo && (
                        <div className="flex items-center mb-2">
                          <div className="relative h-8 w-auto">
                            <Image
                              src={ad.logo}
                              alt={ad.brand}
                              width={120}
                              height={40}
                              className="h-8 w-auto object-contain"
                            />
                          </div>
                        </div>
                      )}

                      <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden border border-white/10 bg-black">
                        <video
                          src={ad.video}
                          controls
                          className="w-full h-full object-contain"
                          playsInline
                          webkit-playsinline="true"
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>

                      <div>
                        {ad.url ? (
                          <a
                            href={ad.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                          >
                            <p className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors inline-flex items-center gap-1">
                              {ad.brand}
                              <ExternalLink className="w-3 h-3" />
                            </p>
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-white">
                            {ad.brand}
                          </p>
                        )}
                        {ad.description && (
                          <p className="text-xs text-gray-400 mt-1">{ad.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Desktop: carousel */}
              {isDesktop && (
                <div className="relative -mx-6 px-6 overflow-hidden">
                  <motion.div
                    ref={adsCarouselRef}
                    drag="x"
                    dragConstraints={adsConstraints}
                    dragElastic={0.1}
                    style={{ x: adsSpringX }}
                    className="flex gap-6 cursor-grab active:cursor-grabbing pb-4 justify-center"
                  >
                    {ads.map((ad, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                        className="flex-shrink-0 w-[300px] space-y-3"
                      >
                        {/* Logo */}
                        {ad.logo && (
                          <div className="flex items-center mb-2">
                            <div className="relative h-8 w-auto">
                              <Image
                                src={ad.logo}
                                alt={ad.brand}
                                width={120}
                                height={40}
                                className="h-8 w-auto object-contain"
                              />
                            </div>
                          </div>
                        )}

                        {/* Video */}
                        <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden border border-white/10 mx-auto max-w-[300px] bg-black">
                          <video
                            src={ad.video}
                            controls
                            className="w-full h-full object-contain"
                            playsInline
                            webkit-playsinline="true"
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>

                        {/* Brand Name and Description */}
                        <div>
                          {ad.url ? (
                            <a
                              href={ad.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group"
                            >
                              <p className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors inline-flex items-center gap-1">
                                {ad.brand}
                                <ExternalLink className="w-3 h-3" />
                              </p>
                            </a>
                          ) : (
                            <p className="text-sm font-medium text-white">
                              {ad.brand}
                            </p>
                          )}
                          {ad.description && (
                            <p className="text-xs text-gray-400 mt-1">{ad.description}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* Navigation arrows */}
                  <button
                    onClick={() => scrollCarousel('left', 'ads')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => scrollCarousel('right', 'ads')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

