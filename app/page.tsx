'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const APPLE_PATH =
  'M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z'

const TIKTOK_PATH =
  'M448 209.9a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z'

function AppStoreButton({ href, glow }: { href: string; glow: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2.5 rounded-xl bg-white px-4 py-2.5 text-black transition-transform duration-200 hover:scale-[1.03]"
      style={{ boxShadow: `0 8px 30px -8px ${glow}` }}
    >
      <svg viewBox="0 0 384 512" className="h-6 w-6 fill-black">
        <path d={APPLE_PATH} />
      </svg>
      <span className="flex flex-col text-left leading-none">
        <span className="text-[10px] tracking-wide text-gray-600">Download on the</span>
        <span className="-mt-0.5 text-base font-semibold">App Store</span>
      </span>
    </a>
  )
}

const NOW = [
  {
    name: 'Speaky AI',
    tagline: 'Bring your toys to life.',
    icon: '/speaky/icon.png',
    screen: '/speaky/screens/1-imagine.png',
    href: 'https://apps.apple.com/us/app/speaky-ai-bring-toys-to-life/id6770660840',
    accent: 'from-pink-400/30 to-purple-500/30',
    glow: 'rgba(192,132,252,0.45)',
    ring: 'rgba(192,132,252,0.35)',
  },
  {
    name: 'CarbLens',
    tagline: 'Log meals. Dose smarter.',
    icon: '/carblens/icon.png',
    screen: '/carblens/screens/home.png',
    href: 'https://apps.apple.com/us/app/id6770661711',
    accent: 'from-emerald-400/30 to-green-600/30',
    glow: 'rgba(52,211,153,0.45)',
    ring: 'rgba(52,211,153,0.35)',
  },
  {
    name: 'Commercial',
    tagline: 'Free focus for students.',
    icon: '/commercials/icon.png',
    screen: '/commercials/screens/tap-card.png',
    href: 'https://apps.apple.com/us/app/commercial-screentime-control/id6767307253',
    accent: 'from-zinc-300/20 to-zinc-500/20',
    glow: 'rgba(212,212,216,0.40)',
    ring: 'rgba(212,212,216,0.30)',
  },
  {
    name: 'KickIt',
    tagline: 'All plans happen today.',
    icon: '/kickit/icon.png',
    screen: '/kickit/screens/map.png',
    href: '#',
    accent: 'from-blue-400/30 to-indigo-500/30',
    glow: 'rgba(96,165,250,0.45)',
    ring: 'rgba(96,165,250,0.35)',
  },
]

const PAST = [
  {
    name: 'Piñata Farms',
    logo: '/pinata farms app logo.png',
    href: 'https://www.tiktok.com/@trypinatafarms',
  },
  {
    name: 'Goofy Garments',
    logo: '/goofy-logo.png',
    round: true,
    href: 'https://www.instagram.com/goofygarmentshop/',
  },
]

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
})

export default function Home() {
  return (
    <main className="min-h-screen px-6 pb-28 pt-40 sm:pt-48">
      {/* Contact */}
      <a
        href="https://www.linkedin.com/in/ian-sidman/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 top-6 z-50 text-sm text-gray-500 transition-colors duration-200 hover:text-gray-300"
      >
        Contact
      </a>

      <div className="mx-auto w-full max-w-3xl">
        {/* Name */}
        <motion.p {...fade(0)} className="mb-6 text-base font-semibold text-white">
          Ian Sidman
        </motion.p>

        {/* Intro */}
        <motion.div
          {...fade(0.08)}
          className="mb-14 space-y-6 text-[15px] leading-relaxed text-gray-300 sm:text-base sm:mb-16"
        >
          <p>
            Building through organic content.{' '}
            <span className="font-medium text-white">300M+ views.</span>
          </p>
          <p>
            <a
              href="https://www.tiktok.com/@trypinatafarms"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-600 transition-colors duration-200 hover:decoration-gray-400"
            >
              Piñata Farms AI
            </a>
            : 70,000 users through organic
          </p>
          <p>
            <a
              href="https://www.instagram.com/goofygarmentshop/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gray-600 transition-colors duration-200 hover:decoration-gray-400"
            >
              Goofy Garments
            </a>
            : 1,100 customers through organic
          </p>
          <h1 className="pt-2 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            What I&apos;m building now
          </h1>
        </motion.div>

        {/* NOW — apps */}
        <div className="grid gap-6 sm:grid-cols-2">
          {NOW.map((app, i) => (
            <motion.div
              key={app.name}
              {...fade(0.1 + i * 0.1)}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div
                className={`pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-gradient-to-b ${app.accent} blur-3xl`}
              />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <Image
                    src={app.icon}
                    alt={`${app.name} icon`}
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-[14px] shadow-lg"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-white">{app.name}</h2>
                    <p className="text-sm text-gray-400">{app.tagline}</p>
                  </div>
                </div>

                {/* Phone mockup */}
                <div className="mt-6 flex justify-center">
                  <div
                    className="relative aspect-[9/19] w-44 overflow-hidden rounded-[2rem] border-[5px] border-neutral-800 bg-black"
                    style={{ boxShadow: `0 20px 60px -20px ${app.glow}` }}
                  >
                    <Image
                      src={app.screen}
                      alt={`${app.name} screenshot`}
                      fill
                      sizes="176px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <AppStoreButton href={app.href} glow={app.glow} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TikTok */}
        <motion.a
          {...fade(0.2)}
          href="https://www.tiktok.com/@gymjunkie69_"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-200 hover:bg-white/[0.06]"
        >
          <span className="relative shrink-0">
            <Image
              src="/tiktok-pfp.jpg"
              alt="Ian Sidman"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover ring-1 ring-white/15"
            />
            <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-black ring-2 ring-[#0a0a0a]">
              <svg viewBox="0 0 448 512" className="h-3 w-3 fill-white">
                <path d={TIKTOK_PATH} />
              </svg>
            </span>
          </span>
          <span className="min-w-0 flex-1">
            <span className="block truncate font-semibold text-white">Ian Sid | Diabetes &amp; Lifestyle</span>
            <span className="block text-sm text-gray-400">@gymjunkie69_</span>
          </span>
          <span className="text-gray-600 transition-colors group-hover:text-gray-300">&rarr;</span>
        </motion.a>

        {/* PAST */}
        <motion.div {...fade(0.1)} className="mb-6 mt-20">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Previous</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {PAST.map((p, i) => (
            <motion.a
              key={p.name}
              {...fade(0.1 + i * 0.1)}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors duration-200 hover:bg-white/[0.05]"
            >
              <Image
                src={p.logo}
                alt={`${p.name} logo`}
                width={48}
                height={48}
                className={`h-12 w-12 shrink-0 object-cover ${
                  'round' in p && p.round ? 'rounded-full' : 'rounded-xl'
                }`}
              />
              <span className="min-w-0 flex-1 font-semibold text-white">{p.name}</span>
              <span className="text-gray-600 transition-colors group-hover:text-gray-300">&rarr;</span>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          {...fade(0.1)}
          className="mt-20 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500"
        >
          <a
            href="https://www.linkedin.com/in/ian-sidman/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-gray-300"
          >
            LinkedIn &rarr;
          </a>
        </motion.div>
      </div>
    </main>
  )
}
