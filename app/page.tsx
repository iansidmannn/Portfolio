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
            Recent Projects:<br />
            <a href="https://www.tiktok.com/@trypinatafarms" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-600 hover:decoration-gray-400 transition-colors duration-200">PiñataFarms AI</a> — grew 60,000 users through content<br />
            <a href="https://www.instagram.com/goofygarmentshop/" target="_blank" rel="noopener noreferrer" className="underline decoration-gray-600 hover:decoration-gray-400 transition-colors duration-200">Goofy Garments</a> — 1,100 unique customers through content
          </p>

          <p>
            Created 6x viral brands by moving on market trends, and I&apos;ve started 3 trends on TikTok with over 100M views each.
          </p>

          <p>
            Before that: USA bench press <button onClick={() => setShowRecord(true)} className="underline decoration-gray-600 hover:decoration-gray-400 transition-colors duration-200 cursor-pointer">national record</button> at 17.
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
