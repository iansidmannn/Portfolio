'use client'

import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { ExternalLink, Play } from 'lucide-react'
import Image from 'next/image'
import { videos, Video } from '@/data/videos'
import VideoModal from './VideoModal'

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function createShuffledVideos(originalVideos: Video[]): Video[] {
  if (originalVideos.length < 3) return originalVideos

  const second = originalVideos[1]
  const third = originalVideos[2]

  const otherVideos = [originalVideos[0], ...originalVideos.slice(3)]

  const shuffledOthers = shuffleArray(otherVideos)

  return [
    shuffledOthers[0],
    second,
    third,
    ...shuffledOthers.slice(1),
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

function splitIntoTwoLanes(vs: Video[]): [Video[], Video[]] {
  const a = vs.filter((_, i) => i % 2 === 0)
  const b = vs.filter((_, i) => i % 2 === 1)
  if (b.length === 0) {
    const half = Math.ceil(vs.length / 2)
    return [vs.slice(0, half), vs.slice(half)]
  }
  return [a, b]
}

/** Same px/frame for both rows so lanes don’t drift apart.
 *  Slow on purpose: two lanes sliding together reads as busy, and you
 *  can't process a card that crosses the screen in three seconds. */
const MARQUEE_SPEED_PX = 0.42

function VideoCard({
  video,
  index,
  laneLen,
  onVideoClick,
}: {
  video: Video
  index: number
  laneLen: number
  onVideoClick: (e: React.MouseEvent, video: Video) => void
}) {
  const eager = index < 3 || (index >= laneLen && index < laneLen + 3)

  return (
    <motion.a
      href={video.url || '#'}
      target={video.platform === 'tiktok' || video.platform === 'instagram' ? undefined : '_blank'}
      rel={
        video.platform === 'tiktok' || video.platform === 'instagram'
          ? undefined
          : 'noopener noreferrer'
      }
      onClick={(e) => onVideoClick(e, video)}
      whileHover={{ scale: 1.04, y: -4 }}
      className="group relative flex h-[12.25rem] w-[9rem] shrink-0 select-none overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm transition-all duration-300 hover:border-white/25 sm:h-[13.75rem] sm:w-[10.25rem] md:h-[15rem] md:w-[11.25rem]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30" />

      {video.thumbnail ? (
        <div className="absolute inset-0">
          <Image
            src={video.thumbnail}
            alt={`${video.platform} video thumbnail`}
            fill
            className="object-cover"
            style={{ objectPosition: video.thumbnailPosition || 'center' }}
            sizes="(max-width: 768px) 172px, 220px"
            priority={eager}
            loading={eager ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform group-hover:scale-110 sm:h-14 sm:w-14">
              <Play className="ml-0.5 h-6 w-6 text-white sm:h-7 sm:w-7" fill="white" />
            </div>
          </div>
        </div>
      ) : video.video ? (
        <div className="absolute inset-0">
          <video src={video.video} className="h-full w-full object-cover" muted playsInline preload="none" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform group-hover:scale-110 sm:h-14 sm:w-14">
              <Play className="ml-0.5 h-6 w-6 text-white sm:h-7 sm:w-7" fill="white" />
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-600/30 to-blue-600/30">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform group-hover:scale-110 sm:h-14 sm:w-14">
            <Play className="ml-0.5 h-6 w-6 text-white sm:h-7 sm:w-7" fill="white" />
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 bg-gradient-to-b from-black/82 via-black/35 to-transparent px-3 pb-10 pt-3 sm:px-4 sm:pt-3.5" />

      <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 px-3 pt-3 sm:px-4 sm:pt-3.5">
        <div className="mb-1 flex items-start justify-between gap-2">
          <span className="text-[11px] font-semibold text-purple-300 sm:text-xs">
            {video.platform === 'instagram'
              ? 'Instagram'
              : video.platform === 'tiktok'
                ? 'TikTok'
                : 'YouTube'}
          </span>
          <span className="text-right text-base font-bold tabular-nums leading-none text-white sm:text-lg md:text-xl">
            {formatViews(video.views)}
          </span>
        </div>
        <div className="flex min-w-0 items-center gap-1.5 pr-0.5 text-[11px] text-gray-200 sm:text-xs">
          <span className="truncate">{video.account}</span>
          <ExternalLink className="h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      </div>
      {video.takenDown && (
        <span className="pointer-events-none absolute bottom-2 left-2 z-30 rounded-md border border-white/10 bg-black/70 px-1.5 py-0.5 text-[10px] text-gray-200 backdrop-blur-sm">
          (taken down)
        </span>
      )}
    </motion.a>
  )
}

function MarqueeLane({
  laneVideos,
  speed,
  paused,
  gapClass,
  onVideoClick,
}: {
  laneVideos: Video[]
  speed: number
  paused: boolean
  gapClass: string
  onVideoClick: (e: React.MouseEvent, video: Video) => void
}) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const scrollPositionRef = useRef(0)
  const animationRef = useRef<number | null>(null)

  const loop = useMemo(() => [...laneVideos, ...laneVideos], [laneVideos])
  const laneLen = laneVideos.length

  useEffect(() => {
    if (paused || !carouselRef.current) {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
        animationRef.current = null
      }
      return
    }

    const animate = () => {
      if (!carouselRef.current || paused) return

      const container = carouselRef.current
      const totalWidth = container.scrollWidth
      const singleSetWidth = totalWidth / 2

      if (singleSetWidth > 0) {
        scrollPositionRef.current += speed
        if (scrollPositionRef.current >= singleSetWidth) {
          scrollPositionRef.current = scrollPositionRef.current % singleSetWidth
        }
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
  }, [paused, speed, x, laneLen])

  return (
    <div className="relative overflow-hidden py-1">
      <motion.div
        ref={carouselRef}
        style={{ x }}
        className={`flex ${gapClass} w-max cursor-default pb-4 pt-1 scrollbar-hide`}
      >
        {loop.map((video, index) => (
          <VideoCard
            key={`${video.id}-${index}`}
            video={video}
            index={index}
            laneLen={laneLen}
            onVideoClick={onVideoClick}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default function VideoCarousel({
  lead = false,
  embedded = false,
}: {
  lead?: boolean
  embedded?: boolean
}) {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [hoveredLane, setHoveredLane] = useState<'top' | 'bottom' | null>(null)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReducedMotion(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  const shuffledVideos = useMemo(() => createShuffledVideos(videos), [])
  const [laneTop, laneBottom] = useMemo(() => splitIntoTwoLanes(shuffledVideos), [shuffledVideos])

  // Both lanes move as one: hovering either row stops both, so they never
  // drift out of step with each other.
  const modalOpenPause = isModalOpen || reducedMotion
  const anyHover = hoveredLane !== null
  const topPaused = modalOpenPause || anyHover
  const bottomPaused = modalOpenPause || anyHover

  const handleVideoClick = useCallback((e: React.MouseEvent, video: Video) => {
    if (!video.url) {
      e.preventDefault()
      return
    }
    if (video.platform === 'tiktok' || video.platform === 'instagram') {
      e.preventDefault()
      setSelectedVideo(video)
      setIsModalOpen(true)
    }
  }, [])

  return (
    <section
      id={embedded ? undefined : 'viral-videos-section'}
      className={
        embedded
          ? 'px-0 pb-2'
          : `px-6 sm:px-8 lg:px-12 ${lead ? 'pt-5 sm:pt-7 pb-8 sm:pb-10' : 'border-t border-white/10 pt-32 pb-16'}`
      }
    >
      <div className="container mx-auto">
        {!embedded ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            {...(lead
              ? {
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.55 },
                }
              : {
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.6 },
                })}
            className={lead ? 'mb-6 sm:mb-8 text-center' : 'mb-16 text-center'}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Viral Videos
            </h2>
          </motion.div>
        ) : null}

        <div
          className={`relative ${embedded ? 'mx-0 px-0' : '-mx-6 px-6'}`}
          onMouseLeave={() => setHoveredLane(null)}
        >
          <div className="flex flex-col gap-3 sm:gap-4">
            <div onMouseEnter={() => setHoveredLane('top')}>
              <MarqueeLane
                laneVideos={laneTop}
                speed={MARQUEE_SPEED_PX}
                paused={topPaused}
                gapClass="gap-3 sm:gap-4 md:gap-5"
                onVideoClick={handleVideoClick}
              />
            </div>
            <div onMouseEnter={() => setHoveredLane('bottom')}>
              <MarqueeLane
                laneVideos={laneBottom}
                speed={MARQUEE_SPEED_PX}
                paused={bottomPaused}
                gapClass="gap-3 sm:gap-4 md:gap-5"
                onVideoClick={handleVideoClick}
              />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-black via-black/45 to-transparent sm:w-20 md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-black via-black/45 to-transparent sm:w-20 md:w-24" />
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
