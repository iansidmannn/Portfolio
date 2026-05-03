'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const logos: { src: string; label: string }[] = [
  { src: '/f19 logo.png', label: 'F19' },
  { src: '/brick logo.png', label: 'Brick' },
  { src: '/smylelabs logo.png', label: 'Smyle Labs' },
  { src: '/wealthconlogo.png', label: 'WealthCon' },
  { src: '/ck logo.png', label: 'Charity Karaoke' },
  { src: '/pf logo2.png', label: 'Piñata Farms' },
  { src: '/nba-logo-transparent.png', label: 'NBA' },
  { src: '/dexcom.png', label: 'Dexcom' },
  { src: '/NHL-Logo.png', label: 'NHL' },
  { src: '/nflz.png', label: 'NFL' },
]

function LogoGrid({ size = 'default' }: { size?: 'default' | 'compact' }) {
  const box =
    size === 'compact'
      ? 'relative h-8 w-[4.5rem] sm:h-9 sm:w-[5.25rem] shrink-0'
      : 'relative h-10 w-[5.25rem] sm:h-11 sm:w-24 shrink-0'

  const gap =
    size === 'compact'
      ? 'flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:gap-x-9 sm:gap-y-5'
      : 'flex flex-wrap items-center justify-center gap-x-10 gap-y-6'

  return (
    <div className={gap}>
      {logos.map(({ src, label }) => (
        <div key={src} className={box}>
          <Image
            src={src}
            alt={label}
            fill
            sizes="96px"
            className="object-contain opacity-45 hover:opacity-70 transition-opacity"
          />
        </div>
      ))}
    </div>
  )
}

export default function LogoStrip({
  placement = 'page',
}: {
  placement?: 'page' | 'belowStats'
}) {
  const isHero = placement === 'belowStats'

  if (isHero) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.52, duration: 0.45 }}
        className="mx-auto mt-6 max-w-3xl sm:mt-7"
      >
        <LogoGrid size="compact" />
      </motion.div>
    )
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="py-10 px-6"
    >
      <div className="container mx-auto max-w-4xl">
        <LogoGrid size="default" />
      </div>
    </motion.section>
  )
}
