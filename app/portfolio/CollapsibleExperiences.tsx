'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Experiences from '@/components/Experiences'

export default function CollapsibleExperiences() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section
      id="portfolio-experiences"
      className="py-12 px-6 scroll-mt-28"
      aria-label="Portfolio experiences"
    >
      <div className="container mx-auto max-w-6xl text-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300"
        >
          <span className="text-white font-semibold text-lg">
            {isOpen ? 'Hide Experiences' : 'View Experiences'}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <Experiences />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
