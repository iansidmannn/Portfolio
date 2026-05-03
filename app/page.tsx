'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Home() {
  const [showRecord, setShowRecord] = useState(false)

  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-24 sm:py-0 relative">
      <motion.a
        href="https://www.linkedin.com/in/ian-sidman/"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="fixed top-6 right-6 z-50 text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200"
      >
        Contact
      </motion.a>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl w-full"
      >
        <div className="space-y-6 text-[15px] sm:text-base text-gray-300 leading-relaxed">
          <p>Hi, my name is Ian.</p>

          <p>
            I&apos;ve been reverse engineering markets since I was 13, when I made my first $2,000 trading items on Rocket League.
          </p>

          <p>
            I have 650 million organic short form views across brands, startups, and trends I&apos;ve started.
          </p>

          <p>
            I was behind the <a href="https://www.tiktok.com/@nimrashamid/video/7589053163232054558" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-600 hover:decoration-gray-400 transition-colors duration-200">fake news prank trend</a> on TikTok (300 million views and counting).
          </p>

          <p>
            And back in high school I started a trend of people <a href="https://www.tiktok.com/@gymjunkie69_/video/6939996247193292038" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-600 hover:decoration-gray-400 transition-colors duration-200">&ldquo;quitting&rdquo;</a> their incurable illnesses (100 million views).
          </p>

          <p>
            I&apos;ve cracked 22 viral short-form video formats, taking 11 different brands past 100K view videos on organic for their first time.
          </p>

          <p>About six months ago I joined <a href="https://www.pinatafarm.com/" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-600 hover:decoration-gray-400 transition-colors duration-200">Piñata Farms</a>.</p>

          <p>
            Since then: I&apos;m averaging 13,000 downloads a month as their first successful organic hire.
          </p>

          <p>
            I&apos;ve created <a href="https://www.tiktok.com/@trypinatafarms" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-600 hover:decoration-gray-400 transition-colors duration-200">5 viral formats that convert</a>, identified &amp; <a href="https://www.tiktok.com/@trypinatafarms/video/7594994877037825311" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-600 hover:decoration-gray-400 transition-colors duration-200">launched a new feature</a> that got 17,000 organic downloads in its first month, and our content has been <a href="https://www.tiktok.com/music/original-sound-7589742642620123935" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-600 hover:decoration-gray-400 transition-colors duration-200">featured by multiple teams in the NFL, NHL, and the NBA</a>.
          </p>

          <p>
            Before that: I grew my <a href="https://www.tiktok.com/@gymjunkie69_" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-600 hover:decoration-gray-400 transition-colors duration-200">TikTok to 60k</a>, built a <a href="https://www.instagram.com/goofygarmentshop/" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-600 hover:decoration-gray-400 transition-colors duration-200">clothing brand</a> from my college dorm to $4k/mo profit in 3 months, and got the USA bench press <button onClick={() => setShowRecord(true)} className="underline decoration-gray-600 hover:decoration-gray-400 transition-colors duration-200 cursor-pointer">national record</button> at 17.
          </p>

          <p className="text-white font-medium pt-2">
            Now I&apos;m focused on viral videos that convert for startups. I made 5 for my recent company with the best format getting 100k+ views multiple times &amp; converting 4%.
          </p>

          <p>
            I&apos;m happy to help people with their products. Message me on <a href="https://www.linkedin.com/in/ian-sidman/" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-600 hover:decoration-gray-400 transition-colors duration-200">linkedin</a> if you want to grow with organic.
          </p>

          <p>
            <a
              href="https://www.linkedin.com/in/ian-sidman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 transition-colors duration-200"
            >
              More on LinkedIn &rarr;
            </a>
          </p>

          <p>
            <a
              href="/portfolio/"
              className="text-gray-500 hover:text-gray-300 transition-colors duration-200"
            >
              More on my Portfolio &rarr;
            </a>
          </p>
        </div>
      </motion.div>
      <AnimatePresence>
        {showRecord && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
            onClick={() => setShowRecord(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-lg w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowRecord(false)}
                className="absolute -top-10 right-0 text-gray-400 hover:text-white transition-colors text-sm cursor-pointer"
              >
                Close
              </button>
              <Image
                src="/National Record.png"
                alt="USA Bench Press National Record"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
