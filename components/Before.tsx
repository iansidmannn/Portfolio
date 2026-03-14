'use client'

import { motion } from 'framer-motion'

export default function Before() {
  return (
    <section className="py-12 px-6 sm:px-8 lg:px-12">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-6">
            Before:
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Founded a clothing brand in college, scaled to $4k profit/mo in 5 months. Grew my TikTok to 60k. Set the USA bench press national record at 17. Same obsession, different arena.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
