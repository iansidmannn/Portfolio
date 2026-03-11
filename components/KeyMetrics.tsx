'use client'

import { motion } from 'framer-motion'

const metrics = [
  {
    value: '300M+',
    label: 'Total Views',
    detail: 'Across brands, startups, and personal content',
  },
  {
    value: '9',
    label: 'Brands Scaled Past 100K',
    detail: 'Built viral content systems for stuck brands',
  },
  {
    value: '$470K+',
    label: 'Revenue Generated',
    detail: 'Direct trackable sales from growth systems',
  },
  {
    value: '30M Views',
    label: 'Monthly System Output',
    detail: 'Built system generating $8k/mo',
  },
]

export default function KeyMetrics() {
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-3">Track Record</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Key Metrics
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm p-8 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3 tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-white mb-2 uppercase tracking-wider">
                {metric.label}
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                {metric.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
