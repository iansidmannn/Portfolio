'use client'

import { motion } from 'framer-motion'

export default function Approach() {
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-3">How I Operate</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Approach
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm p-10 md:p-14 space-y-8"
        >
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light text-center tracking-tight">
            I figure out what makes things spread, and I build systems around it.
          </p>
          
          <div className="pt-8 border-t border-white/10 space-y-5 text-gray-400 text-sm md:text-base leading-relaxed">
            <p>
              Before Piñata Farms: founded a clothing brand in college, scaled to $4k profit/mo in 5 months. Grew a TikTok to 60k. Set the USA bench press national record at 17.
            </p>
            <p>
              I have 300M+ views across brands, startups, and my own content. Built a system that generates 30M views and $8k/mo.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
