'use client'

import { motion } from 'framer-motion'

export default function WhereImValuable() {
  return (
    <section className="border-t border-white/[0.04] px-6 pb-10 pt-8">
      <div className="container mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="space-y-4 text-sm sm:text-[15px] text-gray-300 leading-relaxed text-balance"
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-gray-500">
            Where I&apos;m most valuable
          </p>
          <p>
            You already have a distribution team — you just need someone to
            create viral content that converts. I can build distribution myself
            if needed.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
