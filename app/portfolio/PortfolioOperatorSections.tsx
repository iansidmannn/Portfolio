'use client'

import { useEffect } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  Briefcase,
  ChevronDown,
  Clapperboard,
  DollarSign,
  TrendingUp,
} from 'lucide-react'
import Experiences from '@/components/Experiences'
import VideoCarousel from '@/components/VideoCarousel'
import KeyMoments from './KeyMoments'
import RevenueCases from './RevenueCases'

type SectionId = 'viral' | 'experiences' | 'trends' | 'revenue'

const MENU: Array<{
  id: SectionId
  title: string
  shortTitle?: string
  Icon: LucideIcon
  panelId: string
}> = [
  { id: 'viral', title: 'Viral Videos', Icon: Clapperboard, panelId: 'menu-panel-viral' },
  { id: 'experiences', title: 'Experiences', Icon: Briefcase, panelId: 'menu-panel-experiences' },
  { id: 'trends', title: "Trends I've Started", shortTitle: 'Trends', Icon: TrendingUp, panelId: 'menu-panel-trends' },
  { id: 'revenue', title: 'Revenue (GTM)', shortTitle: 'Revenue', Icon: DollarSign, panelId: 'menu-panel-revenue' },
]

const tile =
  'border-white/12 bg-black/50 hover:border-violet-400/45 hover:bg-violet-500/[0.08]'

const panel =
  'mt-4 scroll-mt-24 overflow-hidden rounded-xl border border-white/[0.1] bg-black/55 sm:mt-5'

function PanelHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 text-center text-3xl font-bold tracking-tight sm:mb-8 sm:text-4xl">
      {children}
    </h2>
  )
}

export default function PortfolioOperatorSections() {
  const scrollTo = (panelId: string) => {
    document.getElementById(panelId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  useEffect(() => {
    const applyHash = () => {
      const h = window.location.hash.replace(/^#/, '')
      if (h === 'portfolio-experiences') scrollTo('menu-panel-experiences')
    }
    applyHash()
    window.addEventListener('hashchange', applyHash)
    return () => window.removeEventListener('hashchange', applyHash)
  }, [])

  return (
    <section
      aria-label="Portfolio overview"
      className="relative px-4 pb-12 pt-9 sm:px-6 md:pb-14 md:pt-10"
    >
      <div className="relative z-[1] container mx-auto max-w-5xl">
        {/* Jump nav — every section is visible below; these scroll to them */}
        <div className="grid grid-cols-4 gap-1.5 sm:gap-3">
          {MENU.map(({ id, title, shortTitle, Icon, panelId }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(panelId)}
              className={`flex h-[4.1rem] w-full flex-col items-center justify-center gap-0.5 rounded-lg border px-1 py-2 text-center transition-all sm:h-[3.85rem] sm:gap-1.5 sm:rounded-xl sm:px-3 sm:py-3 ${tile}`}
            >
              <Icon className="h-3.5 w-3.5 shrink-0 text-gray-400" aria-hidden strokeWidth={2} />
              <span className="px-0.5 text-[10px] font-semibold leading-tight tracking-tight text-white sm:text-[13px]">
                <span className="sm:hidden">{shortTitle ?? title}</span>
                <span className="hidden sm:inline">{title}</span>
              </span>
              <ChevronDown className="h-3 w-3 shrink-0 text-gray-500 sm:h-3.5 sm:w-3.5" aria-hidden />
            </button>
          ))}
        </div>

        {/* 1 — Viral Videos (carousel renders its own heading) */}
        <div id="menu-panel-viral" className={panel}>
          <div className="px-1 py-4 sm:px-3 sm:py-6">
            <VideoCarousel lead embedded />
          </div>
        </div>

        {/* 2 — Experiences (component renders its own heading + tabs) */}
        <div id="menu-panel-experiences" className={`${panel} scroll-mt-28`}>
          <span id="portfolio-experiences" />
          <div className="px-2 py-5 sm:px-4 sm:py-7">
            <Experiences />
          </div>
        </div>

        {/* 3 — Trends I've Started */}
        <div id="menu-panel-trends" className={panel}>
          <div className="px-2 py-5 sm:px-4 sm:py-7">
            <PanelHeading>Trends I&apos;ve Started</PanelHeading>
            <KeyMoments embedded />
          </div>
        </div>

        {/* 4 — Revenue (GTM) */}
        <div id="menu-panel-revenue" className={panel}>
          <div className="px-2 py-5 sm:px-4 sm:py-7">
            <PanelHeading>Revenue</PanelHeading>
            <RevenueCases embedded />
          </div>
        </div>
      </div>
    </section>
  )
}
