'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin, TrendingUp, Users, DollarSign } from 'lucide-react'

export default function LinksPage() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [hasStartedAudio, setHasStartedAudio] = useState(false)

  const links = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ian-sidman',
      icon: Linkedin,
      iconBg: 'bg-blue-500',
      subtitle: 'Startup Growth • 300M Views',
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      url: 'https://www.tiktok.com/@gymjunkie69_',
      icon: null, // TikTok logo will be SVG
      iconBg: 'bg-black',
      subtitle: '@gymjunkie69_ • 53.7K Followers',
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      {/* Background audio – expects /public/final-countdown-instrumental.mp3 */}
      <audio
        ref={audioRef}
        src="/final-countdown-instrumental.mp3"
        loop
        className="hidden"
      />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-md space-y-8">
          {/* Profile Picture */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
              <Image
                src="/adjusted pfp.png"
                alt="Ian Sidman"
                fill
                className="object-cover object-center"
                style={{ objectPosition: 'center center' }}
                priority
                sizes="128px"
              />
            </div>
          </motion.div>

          {/* Username */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl font-bold text-white tracking-tight">
              @iansidman
            </h1>
          </motion.div>

          {/* Links */}
          <div className="space-y-3">
            {links.map((link, index) => (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="group relative flex items-center gap-4 w-full p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${link.iconBg} flex items-center justify-center`}>
                  {link.id === 'linkedin' ? (
                    <Linkedin className="w-6 h-6 text-white" />
                  ) : (
                    // TikTok Logo SVG
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  )}
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <div className="text-base font-semibold text-white mb-0.5">
                    {link.name}
                  </div>
                  {link.subtitle && (
                    <div className="text-sm text-gray-400 truncate">
                      {link.subtitle}
                    </div>
                  )}
                </div>

                {/* Menu dots (visual element) */}
                <div className="flex-shrink-0 flex flex-col gap-1">
                  <div className="w-1 h-1 rounded-full bg-white/40" />
                  <div className="w-1 h-1 rounded-full bg-white/40" />
                  <div className="w-1 h-1 rounded-full bg-white/40" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Apple-style play track control (not the main focus) */}
      {!hasStartedAudio && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          onClick={async () => {
            try {
              await audioRef.current?.play()
              setHasStartedAudio(true)
            } catch (e) {
              console.error('Audio play blocked', e)
            }
          }}
          className="fixed bottom-6 inset-x-0 mx-auto w-max px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-xs text-gray-200 shadow-lg shadow-black/40 hover:bg-white/10 hover:border-white/30 transition-colors"
        >
          <span className="opacity-80">Play track</span>
        </motion.button>
      )}
    </div>
  )
}
