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
  const [mobileVideoIndex, setMobileVideoIndex] = useState(0)
  const [mobileAdIndex, setMobileAdIndex] = useState(0)
  const [desktopVideoIndex, setDesktopVideoIndex] = useState(0)
  const [desktopAdIndex, setDesktopAdIndex] = useState(0)
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
        "Good content sometimes takes fearlessness and being uncomfortable. I'd walk around for hours doing stuff like this.",
    },
    {
      video: '/NO KID SLEEPS ON THE FLOOR IN OUR TOWN on Instagram With our bed.mp4',
      title: 'Sleep In Heavenly Peace',
      url: 'https://www.instagram.com/reel/DF8OjWsJlIE/',
      caption:
        'Love the impact of this organization, all the content during this recording day was freestyle, and I came up with this powerful hook up to demonstrate the problem. Powerful ideas on the spot has always been a gift of mine (storytelling during is botched)',
    },
    {
      video: '/Instagram (2).mp4',
      title: 'My Favorite Series Idea Ever!',
      url: 'https://www.instagram.com/p/DEdXd_0TLjh/',
      caption:
        "This series ($100 to $100,000 on youtuve) means a lot to me and I hope to continue it one day. ALSO it's super viral, this will 100% take off once execution is nailed",
    },
    {
      video: '/Charity Karaoke Sing For A Cause on Instagram 40000 Raised.mp4',
      title: 'Charity Karaoke',
      url: 'https://www.instagram.com/charitykaraoke/',
      caption:
        "I had 20 days to became a face for this event, nothing was planned I didn't know the people there, I just had to make it work. The owner was worried about the turnout & we smashed it and packed the venue with my media playing a big role.",
    },
    {
      video: '/Better Edit.mp4',
      title: 'Thousand Oaks Street Fair',
      url: 'https://www.instagram.com/p/DBhP4v5qz/?hl=en',
      caption:
        'Got hired on short notice, day before this big event. I made it work and filmed creatives like this for multiple charities and sponsors at the event (unposted idk why) (everyone in my hometown knows about this street fair, busiest day of the year)',
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

  // Track desktop vs mobile for layout/interaction and set initial tab
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    // On first load, choose initial tab based on viewport
    if (typeof window !== 'undefined') {
      const isNowDesktop = window.innerWidth >= 768
      setIsDesktop(isNowDesktop)
      setActiveTab(isNowDesktop ? 'videos' : 'ads')
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
    
    // For videos: scroll by exactly 2 card widths + 1 gap (one full \"page\")
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

    // Update desktop page index so we can hide arrows and map dots correctly
    if (isDesktop) {
      if (type === 'videos') {
        // Number of pages = ceil(n / 2) when we show 2 cards per page
        const pageCount = Math.max(1, Math.ceil(favoriteVideos.length / 2))
        const maxIndex = pageCount - 1
        setDesktopVideoIndex((prev) =>
          direction === 'left'
            ? Math.max(0, prev - 1)
            : Math.min(maxIndex, prev + 1)
        )
      } else {
        const pageCount = Math.max(1, Math.ceil(ads.length / 2))
        const maxIndex = pageCount - 1
        setDesktopAdIndex((prev) =>
          direction === 'left'
            ? Math.max(0, prev - 1)
            : Math.min(maxIndex, prev + 1)
        )
      }
    }
  }

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-6 md:mb-8">
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
              {/* Mobile: 1 card at a time with arrows (video capped so captions stay in view) */}
              {!isDesktop && (
                <div className="relative w-full max-w-xs mx-auto">
                  {/* Card track */}
                  <div className="overflow-hidden">
                    <div
                      className="flex transition-transform duration-300"
                      style={{ transform: `translateX(-${mobileVideoIndex * 100}%)` }}
                    >
                      {favoriteVideos.map((video, i) => (
                        <div key={i} className="w-full flex-shrink-0 px-1">
                          <div className="space-y-3 pb-2">
                            {video.video && (
                              <div className="relative w-full aspect-[9/16] max-h-[60vh] rounded-lg overflow-hidden border border-white/10 bg-black">
                                <video
                                  src={video.video}
                                  controls
                                  preload="metadata"
                                  className="w-full h-full object-contain"
                                  playsInline
                                  muted
                                >
                                  Your browser does not support the video tag.
                                </video>
                              </div>
                            )}
                            <div>
                              <h4 className="text-white font-semibold mb-1 text-sm">
                                {video.title}
                              </h4>
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
                                  {video.url.includes('youtube.com') || video.url.includes('youtu.be')
                                    ? 'View on YouTube'
                                    : 'View on Instagram'}
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {favoriteVideos.length > 1 && (
                    <>
                      {/* Arrows overlayed vertically centered beside the video */}
                      <button
                        type="button"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-black/90 disabled:opacity-40 transition-colors shadow-md"
                        onClick={() =>
                          setMobileVideoIndex((prev) => Math.max(0, prev - 1))
                        }
                        disabled={mobileVideoIndex === 0}
                        aria-label="Previous video"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-black/90 disabled:opacity-40 transition-colors shadow-md"
                        onClick={() =>
                          setMobileVideoIndex((prev) =>
                            Math.min(favoriteVideos.length - 1, prev + 1)
                          )
                        }
                        disabled={mobileVideoIndex === favoriteVideos.length - 1}
                        aria-label="Next video"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {/* Dot indicators below */}
                      <div className="flex justify-center gap-1.5 mt-3">
                        {favoriteVideos.map((_, i) => (
                          <span
                            key={i}
                            className={`h-1.5 w-3 rounded-full transition-colors ${
                              i === mobileVideoIndex ? 'bg-purple-400' : 'bg-white/20'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
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
                              preload="metadata"
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

                  {/* Desktop navigation arrows + page dots */}
                  {desktopVideoIndex > 0 && (
                    <button
                      onClick={() => scrollCarousel('left', 'videos')}
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black border border-white/30 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                      aria-label="Previous videos"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  )}
                  {desktopVideoIndex < Math.max(1, Math.ceil(favoriteVideos.length / 2)) - 1 && (
                    <button
                      onClick={() => scrollCarousel('right', 'videos')}
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black border border-white/30 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                      aria-label="Next videos"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  )}

                  {/* Page counter dots (desktop) */}
                  <div className="flex justify-center gap-1.5 mt-3">
                    {Array.from({ length: Math.max(1, Math.ceil(favoriteVideos.length / 2)) }).map(
                      (_, i) => (
                        <span
                          key={i}
                          className={`h-1.5 w-3 rounded-full transition-colors ${
                            i === desktopVideoIndex ? 'bg-purple-400' : 'bg-white/20'
                          }`}
                        />
                      )
                    )}
                  </div>
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
              {/* Mobile: 1 card at a time with arrows (video capped so captions stay in view) */}
              {!isDesktop && (
                <div className="relative w-full max-w-xs mx-auto">
                  <div className="overflow-hidden">
                    <div
                      className="flex transition-transform duration-300"
                      style={{ transform: `translateX(-${mobileAdIndex * 100}%)` }}
                    >
                      {ads.map((ad, i) => (
                        <div key={i} className="w-full flex-shrink-0 px-1">
                          <div className="space-y-3 pb-2">
                            {ad.logo && (
                              <div className="flex items-center mb-1">
                                <div className="relative h-8 w-auto">
                                  <Image
                                    src={ad.logo}
                                    alt={ad.brand}
                                    width={120}
                                    height={40}
                                    className="h-8 w-auto object-contain"
                                    priority={i === 0}
                                  />
                                </div>
                              </div>
                            )}

                            <div className="relative w-full aspect-[9/16] max-h-[60vh] rounded-lg overflow-hidden border border-white/10 bg-black">
                              <video
                                src={ad.video}
                                controls
                                preload="metadata"
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
                        </div>
                      ))}
                    </div>
                  </div>

                  {ads.length > 1 && (
                    <>
                      {/* Arrows */}
                      <button
                        type="button"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-black/90 disabled:opacity-40 transition-colors shadow-md"
                        onClick={() => setMobileAdIndex((prev) => Math.max(0, prev - 1))}
                        disabled={mobileAdIndex === 0}
                        aria-label="Previous ad"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-black/90 disabled:opacity-40 transition-colors shadow-md"
                        onClick={() =>
                          setMobileAdIndex((prev) => Math.min(ads.length - 1, prev + 1))
                        }
                        disabled={mobileAdIndex === ads.length - 1}
                        aria-label="Next ad"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {/* Dots */}
                      <div className="flex justify-center gap-1.5 mt-3">
                        {ads.map((_, i) => (
                          <span
                            key={i}
                            className={`h-1.5 w-3 rounded-full transition-colors ${
                              i === mobileAdIndex ? 'bg-purple-400' : 'bg-white/20'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Desktop: carousel (aligned with Favorite Videos) */}
              {isDesktop && (
                <div className="relative overflow-hidden w-full max-w-[640px] mx-auto">
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
                            preload="metadata"
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
                  
                  {/* Desktop navigation arrows + page dots (ads) */}
                  {desktopAdIndex > 0 && (
                    <button
                      onClick={() => scrollCarousel('left', 'ads')}
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black border border-white/30 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                      aria-label="Previous ads"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  )}
                  {desktopAdIndex < Math.max(1, Math.ceil(ads.length / 2)) - 1 && (
                    <button
                      onClick={() => scrollCarousel('right', 'ads')}
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black border border-white/30 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                      aria-label="Next ads"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  )}

                  <div className="flex justify-center gap-1.5 mt-3">
                    {Array.from({ length: Math.max(1, Math.ceil(ads.length / 2)) }).map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 w-3 rounded-full transition-colors ${
                          i === desktopAdIndex ? 'bg-purple-400' : 'bg-white/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

