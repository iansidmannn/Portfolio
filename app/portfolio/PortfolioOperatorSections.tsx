'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowUpRight,
  Briefcase,
  ChevronDown,
  Clapperboard,
  DollarSign,
  TrendingUp,
} from 'lucide-react'
import VideoCarousel from '@/components/VideoCarousel'
import KeyMoments from './KeyMoments'
import RevenueCases from './RevenueCases'
import ExperiencesStrip from './ExperiencesStrip'
import WhereImValuable from './WhereImValuable'
import OtherVideos from './OtherVideos'

type MenuId = 'viral' | 'revenue' | 'trends'

const MENU: Array<{
  id: MenuId
  title: string
  shortTitle?: string
  Icon: LucideIcon
  panelId: string
}> = [
  { id: 'viral', title: 'Viral Videos', Icon: Clapperboard, panelId: 'menu-panel-viral' },
  { id: 'trends', title: "Trends I've Started", shortTitle: 'Trends', Icon: TrendingUp, panelId: 'menu-panel-trends' },
  { id: 'revenue', title: 'Revenue (GTM)', shortTitle: 'Revenue', Icon: DollarSign, panelId: 'menu-panel-revenue' },
]

const tileInactive =
  'border-white/12 bg-black/50 hover:border-white/22 hover:bg-white/[0.05]'
const tileActive =
  'border-violet-400/55 bg-violet-500/[0.12] shadow-[0_0_24px_-10px_rgba(139,92,246,0.55)]'

export default function PortfolioOperatorSections() {
  // Viral Videos leads — it's the proof. The carousel drifts slowly and the
  // cards are small enough now that it reads as a showcase, not a firehose.
  const [open, setOpen] = useState<MenuId | null>('viral')
  const isInitialMount = useRef(true)

  const toggle = (id: MenuId) => setOpen((prev) => (prev === id ? null : id))

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }
    const panelId = MENU.find((m) => m.id === open)?.panelId
    if (!panelId) return undefined

    const scrollToPanel = () => {
      document.getElementById(panelId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      })
    }

    let raf1 = 0
    let raf2 = 0
    raf1 = window.requestAnimationFrame(() => {
      raf2 = window.requestAnimationFrame(scrollToPanel)
    })
    const t = window.setTimeout(scrollToPanel, 280)

    return () => {
      window.cancelAnimationFrame(raf1)
      window.cancelAnimationFrame(raf2)
      window.clearTimeout(t)
    }
  }, [open])

  // Everything below the tiles belongs to the landing state. Once you're
  // reading Trends or Revenue, it's just noise hanging off the panel.
  const showLanding = open !== 'trends' && open !== 'revenue'

  return (
    <>
    <section
      aria-label="Portfolio overview"
      className="relative px-4 pb-12 pt-9 sm:px-6 md:pb-14 md:pt-10"
    >
      <div className="relative z-[1] container mx-auto max-w-5xl">
        <div className="grid grid-cols-4 gap-1.5 sm:gap-3">
          {MENU.map(({ id, title, shortTitle, Icon, panelId }) => {
            const isOpen = open === id

            return (
              <button
                key={id}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(id)}
                className={`flex h-[4.1rem] w-full flex-col items-center justify-center gap-0.5 rounded-lg border px-1 py-2 text-center transition-all sm:h-[3.85rem] sm:gap-1.5 sm:rounded-xl sm:px-3 sm:py-3 ${
                  isOpen ? tileActive : tileInactive
                }`}
              >
                <Icon className="h-3.5 w-3.5 shrink-0 text-gray-400" aria-hidden strokeWidth={2} />
                <span className="px-0.5 text-[10px] font-semibold leading-tight tracking-tight text-white sm:text-[13px]">
                  <span className="sm:hidden">{shortTitle ?? title}</span>
                  <span className="hidden sm:inline">{title}</span>
                </span>
                <ChevronDown
                  className={`h-3 w-3 shrink-0 text-gray-500 transition-transform duration-200 sm:h-3.5 sm:w-3.5 ${
                    isOpen ? 'rotate-180 text-violet-200/80' : ''
                  }`}
                  aria-hidden
                />
              </button>
            )
          })}

          {/* Experiences lives on its own page */}
          <Link
            href="/experiences"
            className={`flex h-[4.1rem] w-full flex-col items-center justify-center gap-0.5 rounded-lg border px-1 py-2 text-center transition-all sm:h-[3.85rem] sm:gap-1.5 sm:rounded-xl sm:px-3 sm:py-3 ${tileInactive}`}
          >
            <Briefcase className="h-3.5 w-3.5 shrink-0 text-gray-400" aria-hidden strokeWidth={2} />
            <span className="px-0.5 text-[10px] font-semibold leading-tight tracking-tight text-white sm:text-[13px]">
              Experiences
            </span>
            <ArrowUpRight className="h-3 w-3 shrink-0 text-gray-500 sm:h-3.5 sm:w-3.5" aria-hidden />
          </Link>
        </div>

        <AnimatePresence initial={false} mode="wait">
          {open === 'viral' && (
            <motion.div
              key="viral"
              id="menu-panel-viral"
              role="region"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="mt-4 scroll-mt-24 overflow-hidden rounded-xl border border-white/[0.1] bg-black/55 sm:mt-5"
            >
              <div className="px-1 py-2.5 sm:px-3 sm:py-4">
                <VideoCarousel lead embedded />
              </div>
            </motion.div>
          )}

          {open === 'trends' && (
            <motion.div
              key="trends"
              id="menu-panel-trends"
              role="region"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="mt-4 scroll-mt-24 overflow-hidden rounded-xl border border-white/[0.1] bg-black/55 sm:mt-5"
            >
              <div className="px-2 py-3 sm:px-4 sm:py-4">
                <KeyMoments embedded />
              </div>
            </motion.div>
          )}

          {open === 'revenue' && (
            <motion.div
              key="revenue"
              id="menu-panel-revenue"
              role="region"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="mt-4 scroll-mt-24 overflow-hidden rounded-xl border border-white/[0.1] bg-black/55 sm:mt-5"
            >
              <div className="px-2 py-3 sm:px-4 sm:py-4">
                <RevenueCases embedded />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>

    {showLanding && (
      <>
        <ExperiencesStrip />
        <WhereImValuable />

        {/* Push below the fold — Other Videos shouldn’t appear on initial landing */}
        <div className="pt-[min(52vh,40rem)] sm:pt-[min(55vh,44rem)]">
          <OtherVideos />
        </div>
      </>
    )}
    </>
  )
}
