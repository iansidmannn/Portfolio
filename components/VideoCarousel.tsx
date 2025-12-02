'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ExternalLink, Play } from 'lucide-react'
import Image from 'next/image'
import { videos, Video } from '@/data/videos'
import VideoModal from './VideoModal'

// Shuffle array function (Fisher-Yates)
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Create shuffled videos array while keeping 2nd and 3rd in place
function createShuffledVideos(originalVideos: Video[]): Video[] {
  if (originalVideos.length < 3) return originalVideos
  
  // Keep second and third videos
  const second = originalVideos[1]
  const third = originalVideos[2]
  
  // Get all other videos (excluding 2nd and 3rd)
  const otherVideos = [
    originalVideos[0],
    ...originalVideos.slice(3)
  ]
  
  // Shuffle the other videos
  const shuffledOthers = shuffleArray(otherVideos)
  
  // Reconstruct: first shuffled, then 2nd, 3rd, then rest of shuffled
  return [
    shuffledOthers[0],
    second,
    third,
    ...shuffledOthers.slice(1)
  ]
}

function formatViews(views: number): string {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M`
  }
  if (views >= 1000) {
    return `${(views / 1000).toFixed(0)}K`
  }
  return views.toString()
}

interface DragBounds {
  left: number
  right: number
}

export default function VideoCarousel() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isDesktop, setIsDesktop] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [dragBounds, setDragBounds] = useState<DragBounds>({ left: 0, right: 0 })
  
  // Create shuffled videos array (memoized to prevent re-shuffling on every render)
  const shuffledVideos = useMemo(() => createShuffledVideos(videos), [])
  
  const x = useMotionValue(0)
  
  // Dynamic scroll speed that can be accelerated (primarily desktop)
  const baseScrollSpeed = 1.5 // Increased from 0.4 for much faster scrolling
  const currentScrollSpeedRef = useRef(baseScrollSpeed)
  const lastScrollTimeRef = useRef(Date.now())
  const speedBoostRef = useRef(0) // Additional speed boost from user scrolling
  
  // Auto-scroll animation with proper infinite loop
  const scrollPositionRef = useRef(0)
  const animationRef = useRef<number | null>(null)
  
  // Gradually decay speed boost over time
  useEffect(() => {
    const decayInterval = setInterval(() => {
      const timeSinceLastScroll = Date.now() - lastScrollTimeRef.current
      
      // Decay speed boost if no scrolling for 100ms
      if (timeSinceLastScroll > 100 && speedBoostRef.current > 0) {
        speedBoostRef.current = Math.max(0, speedBoostRef.current - 0.1)
        currentScrollSpeedRef.current = baseScrollSpeed + speedBoostRef.current
      }
    }, 50) // Check every 50ms
    
    return () => clearInterval(decayInterval)
  }, [])

  useEffect(() => {
    if (isPaused || isDragging || isHovered || !carouselRef.current) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }
      return
    }
    
    const animate = () => {
      if (!carouselRef.current || isPaused || isDragging || isHovered) return
      
      const container = carouselRef.current
      const totalWidth = container.scrollWidth
      const visibleWidth = container.clientWidth
      const singleSetWidth = totalWidth / 2 // Since we duplicate, half is one full set
      
      if (singleSetWidth > 0 && visibleWidth > 0) {
        // Use dynamic scroll speed (base + boost)
        const scrollSpeed = currentScrollSpeedRef.current
        scrollPositionRef.current += scrollSpeed
        
        // Seamless infinite loop using modulo - keeps position within first set
        // Since content is duplicated, this creates invisible seamless loop
        if (scrollPositionRef.current >= singleSetWidth) {
          scrollPositionRef.current = scrollPositionRef.current % singleSetWidth
        }
        
        // Always update x - the modulo ensures it stays within bounds
        x.set(-scrollPositionRef.current)
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }
    
    animationRef.current = requestAnimationFrame(animate)
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }
    }
  }, [isPaused, isDragging, isHovered, x])

  const handleVideoClick = (e: React.MouseEvent, video: Video) => {
    // Don't open modal if user was dragging
    if (isDragging) {
      e.preventDefault()
      return
    }
    
    // If no URL, prevent navigation
    if (!video.url) {
      e.preventDefault()
      return
    }
    
    if (video.platform === 'tiktok' || video.platform === 'instagram') {
      e.preventDefault()
      setSelectedVideo(video)
      setIsModalOpen(true)
    }
    // For other platforms, let the default link behavior work
  }

  // Calculate drag constraints
  useEffect(() => {
    if (carouselRef.current) {
      const maxScroll = -(carouselRef.current.scrollWidth - carouselRef.current.clientWidth)
      // Set initial constraints
    }
  }, [])

  const handleDrag = (event: any, info: any) => {
    setIsDragging(true)
    setIsPaused(true)
    
    // Detect if dragging right (positive velocity = dragging right)
    if (info.velocity.x > 0) {
      // User is dragging right, boost scroll speed
      const boost = Math.min(info.velocity.x * 0.01, 2.0) // Cap boost at 2.0
      speedBoostRef.current = boost
      currentScrollSpeedRef.current = baseScrollSpeed + boost
      lastScrollTimeRef.current = Date.now()
    }
  }

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false)
    
    // Add momentum based on velocity
    if (carouselRef.current) {
      const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth
      const currentX = -x.get()
      const velocity = info.velocity.x
      
      // If dragging right (positive velocity), boost speed instead of just momentum
      if (velocity > 0) {
        const boost = Math.min(velocity * 0.01, 2.0)
        speedBoostRef.current = boost
        currentScrollSpeedRef.current = baseScrollSpeed + boost
        lastScrollTimeRef.current = Date.now()
      }
      
      // Apply momentum (convert velocity to positive scroll position)
      const momentum = Math.abs(velocity * 0.1)
      let newX = currentX + momentum
      
      // Constrain to bounds
      newX = Math.max(0, Math.min(maxScroll, newX))
      
      // Update the ref to match
      scrollPositionRef.current = newX
      x.set(-newX)
      
      // Resume auto-scroll after a short delay
      setTimeout(() => {
        setIsPaused(false)
      }, 2000)
    }
  }

  // Handle wheel scrolling to detect right scroll
  const handleWheel = (e: React.WheelEvent) => {
    if (!carouselRef.current) return
    
    // Detect horizontal scroll (deltaX > 0 means scrolling right)
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (e.deltaX > 0) {
        // Scrolling right - boost speed
        e.preventDefault()
        const boost = Math.min(e.deltaX * 0.01, 2.0)
        speedBoostRef.current = Math.max(speedBoostRef.current, boost)
        currentScrollSpeedRef.current = baseScrollSpeed + speedBoostRef.current
        lastScrollTimeRef.current = Date.now()
        
        // Also manually scroll a bit
        scrollPositionRef.current += e.deltaX * 0.5
        x.set(-scrollPositionRef.current)
      }
    }
  }

  // The animate function handles all scrolling and reset logic

  useEffect(() => {
    if (carouselRef.current) {
      const singleSetWidth = carouselRef.current.scrollWidth / 2
      setDragBounds({
        left: -singleSetWidth,
        right: 0,
      })
    }
  }, [shuffledVideos])

  return (
    <section id="viral-videos-section" className="pt-32 pb-8 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Viral Videos
          </h2>
        </motion.div>

        <div 
          className="relative -mx-6 px-6 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            ref={carouselRef}
            drag="x"
            dragConstraints={dragBounds}
            dragElastic={0.2}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            onWheel={handleWheel}
            style={{ 
              x: x,
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
            className="flex gap-6 cursor-grab active:cursor-grabbing overflow-x-visible overflow-y-visible pb-8 md:pt-4 scrollbar-hide"
          >
            {/* Duplicate videos to create seamless loop */}
            {[...shuffledVideos, ...shuffledVideos].map((video, index) => (
              <motion.a
                key={`${video.id}-${index}`}
                href={video.url || '#'}
                target={video.platform === 'tiktok' || video.platform === 'instagram' ? undefined : '_blank'}
                rel={video.platform === 'tiktok' || video.platform === 'instagram' ? undefined : 'noopener noreferrer'}
                onClick={(e) => handleVideoClick(e, video)}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative flex-shrink-0 w-[22rem] h-[28rem] md:w-[25rem] md:h-[32rem] bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm hover:border-white/30 transition-all duration-300 md:origin-center select-none"
              >
                {/* Preload placeholder to prevent black flash */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30" />
                
                {/* Video thumbnail */}
                {video.thumbnail ? (
                  <div className="absolute inset-0">
                    <Image
                      src={video.thumbnail}
                      alt={`${video.platform} video thumbnail`}
                      fill
                      className="object-cover"
                      style={{ objectPosition: video.thumbnailPosition || 'center' }}
                      sizes="352px"
                      priority={index < 4 || (index >= videos.length && index < videos.length + 4)}
                      loading={index < 4 || (index >= videos.length && index < videos.length + 4) ? 'eager' : 'lazy'}
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                      <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-10 h-10 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>
                ) : video.video ? (
                  <div className="absolute inset-0">
                    <video
                      src={video.video}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      preload="none"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                      <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-10 h-10 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                    </div>
                  </div>
                )}

                {/* Content overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-purple-300">
                      {video.platform === 'instagram' ? 'Instagram' : video.platform === 'tiktok' ? 'TikTok' : 'YouTube'}
                    </span>
                    <span className="text-2xl font-bold text-white">
                      {formatViews(video.views)}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <span>{video.account}</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  {video.takenDown && (
                    <div className="absolute bottom-4 right-4">
                      <span className="text-xs text-gray-400 bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
                        (taken down)
                      </span>
                    </div>
                  )}
                </div>
              </motion.a>
            ))}
          </motion.div>
          
          {/* Scroll hint gradient */}
          <div className="absolute left-0 top-0 bottom-8 w-24 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none z-10 md:hidden" />
          <div className="absolute right-0 top-0 bottom-8 w-24 bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none z-10 md:hidden" />
        </div>
      </div>

      <VideoModal
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}

