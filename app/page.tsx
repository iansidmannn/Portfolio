'use client'

import { motion } from 'framer-motion'

export default function Home() {
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
            I have 650 million organic short form views across brands, startups, and things I&apos;ve started.
          </p>

          <p>
            I was the man behind the <a href="https://www.tiktok.com/@nimrashamid/video/7589053163232054558" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-600 hover:decoration-gray-400 transition-colors duration-200">fake news pranks</a> on TikTok &amp; Instagram (300 million views).
          </p>

          <p>
            And back in high school I started a trend of people <a href="https://www.tiktok.com/@gymjunkie69_/video/6939996247193292038" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-600 hover:decoration-gray-400 transition-colors duration-200">&ldquo;quitting&rdquo;</a> their incurable illnesses (100 million views).
          </p>

          <p>
            I&apos;ve cracked viral formats for 11 different brands, taking each of them past 100K views for their first time.
          </p>

          <p>About six months ago I joined Piñata Farms.</p>

          <p>
            Since then: I&apos;m currently averaging 13,000 downloads a month as their first organic hire.
          </p>

          <p>
            I&apos;ve created 2 viral formats that actually convert, identified &amp; launched a new feature that got 17,000 organic downloads in its first month, and our content has been featured by multiple teams in the NFL, NHL, and the NBA.
          </p>

          <p>
            Before that: I grew my TikTok to 60k, built a <a href="https://www.instagram.com/goofygarmentshop/" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-600 hover:decoration-gray-400 transition-colors duration-200">clothing brand</a> from my college dorm to $4k/mo profit in 3 months, and got the USA bench press national record at 17.
          </p>

          <p className="text-white font-medium pt-2">
            What I&apos;m focused on now: viral video formats that convert. The overlap of viral mechanics and commerce.
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
        </div>
      </motion.div>
    </main>
  )
}
