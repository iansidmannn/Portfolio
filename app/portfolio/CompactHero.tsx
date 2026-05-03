'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { PortfolioStatsStrip } from './CompactStats'

export default function CompactHero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-20 sm:pb-11 sm:pt-24">
      {/* Soft local vignette — page gradient handles the bulk of the tint */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_0%,rgba(139,92,246,0.14),transparent_58%)]"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.06, duration: 0.5 }}
          className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_10px_50px_rgba(0,0,0,0.4)]"
        >
          <Image
            src="/Profile.jpg"
            alt="Ian Sidman"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14, duration: 0.55 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
          style={{ lineHeight: '1.1', paddingBottom: '0.05em' }}
        >
          Ian Sidman
        </motion.h1>

        <PortfolioStatsStrip className="mt-5 sm:mt-6 max-w-none" />
      </div>
    </section>
  )
}
