'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const stats = [
  {
    id: 'views',
    value: '150,000,000',
    label: 'Lifetime Views',
    detail: 'Across organic short-form and long-form launches.',
  },
  {
    id: 'brands',
    value: '6',
    label: 'Stuck Brands Past 100K',
    detail: 'Low view accounts I created 100k views+ viral engines for.',
  },
  {
    id: 'revenue',
    value: '$125,000+',
    label: 'Revenue Generated Online',
    detail: 'Direct trackable sales from viral content systems & creative marketing strategies.',
  },
]

export default function StatsHighlight() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section id="stats-section" className="py-12 px-6 -mt-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 md:gap-12 md:grid-cols-3"
        >
          {stats.map((stat, index) => {
            const isExpanded = expandedId === stat.id
            
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="text-center space-y-3"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent break-words overflow-wrap-anywhere">
                  {stat.value}
                </div>
                <button
                  onClick={() => setExpandedId(isExpanded ? null : stat.id)}
                  className="text-white text-sm md:text-base font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full inline-flex items-center gap-2 transition-all duration-300 cursor-pointer"
                >
                  <span>{stat.label}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed pt-2">
                        {stat.detail}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

