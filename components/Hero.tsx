'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const scrollToContent = () => {
    const experiencesSection = document.getElementById('experiences-section')
    
    if (experiencesSection) {
      // Get the position of the experiences section
      const rect = experiencesSection.getBoundingClientRect()
      // Scroll past the header and purple tabs to the experience cards
      const scrollPosition = window.scrollY + rect.top - 0
      
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' })
    } else {
      // Fallback
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-8 sm:py-12">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center w-full max-w-5xl sm:-mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_10px_50px_rgba(0,0,0,0.4)]"
          >
            <Image
              src="/Profile.jpg"
              alt="IanTheViralGuy"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight px-4 break-words"
          style={{
            lineHeight: '1.05',
            paddingBottom: '0.1em',
            wordBreak: 'break-word',
            overflowWrap: 'break-word',
          }}
        >
          iantheviralguy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto"
        >
          Growth & Viral Marketer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        />

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={scrollToContent}
          className="group flex items-center gap-2 mx-auto px-9 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
        >
          <span className="text-white">Explore My Work</span>
          <ArrowDown className="w-5 h-5 text-white group-hover:translate-y-1 transition-transform" />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-28 flex flex-wrap items-center justify-center gap-8 opacity-50 hover:opacity-80 transition-opacity"
        >
          {['/f19 logo.png', '/brick logo.png', '/smylelabs logo.png', '/shp logo.png', '/ck logo.png'].map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.05, duration: 0.4 }}
              className="relative h-9 w-28 sm:h-10 sm:w-32 md:h-11 md:w-36"
            >
              <Image
                src={src}
                alt="Partner logo"
                fill
                sizes="120px"
                className="object-contain opacity-70"
                priority
                fetchPriority="high"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

