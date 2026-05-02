'use client'

import { motion } from 'framer-motion'

export const portfolioStats = [
  { value: '650M+', label: 'Organic Short-Form\nViews' },
  { value: '22', label: 'Repeatable Viral Video Formats' },
  { value: '$200K+', label: 'Revenue Generated' },
] as const

const itemMotion = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
}

export function PortfolioStatsStrip({ className = '' }: { className?: string }) {
  const baseDelay = 0.36
  return (
    <div className={`w-full ${className}`}>
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3.5 sm:px-8 sm:py-5 backdrop-blur-sm">
        <div className="grid grid-cols-3 gap-2 sm:gap-6 md:gap-10">
          {portfolioStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              {...itemMotion}
              transition={{ delay: baseDelay + index * 0.06, duration: 0.4 }}
              className="text-center border-r border-white/10 last:border-r-0"
            >
              <div className="text-xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mt-1 leading-snug px-0.5 whitespace-pre-line">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function CompactStats({
  reveal = 'inView',
}: {
  reveal?: 'inView' | 'mount'
}) {
  const wrapMotion =
    reveal === 'mount'
      ? {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.1 },
        }
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
        }

  return (
    <section className="py-6 sm:py-8 px-6 border-b border-white/5">
      <div className="container mx-auto max-w-4xl">
        <motion.div {...wrapMotion}>
          <PortfolioStatsStrip />
        </motion.div>
      </div>
    </section>
  )
}
