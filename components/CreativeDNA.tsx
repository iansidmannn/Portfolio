'use client'

import { motion } from 'framer-motion'

export default function CreativeDNA() {
  return (
    <section className="pt-0 pb-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-0"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm p-8 space-y-6"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            I figure out what makes things spread, and I build systems around it.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            At Piñata Farms, took TikTok from 0 → 11.5M organic views in 5 days. Grew app store search downloads 300%. Built every growth channel from scratch — UGC, TikTok search, Reddit, tutorial content — all converting to downloads.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            Before that: founded a clothing brand in college, scaled to $4k profit/mo in 5 months. Grew a TikTok to 60k. Set the USA bench press national record at 17.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            I have 300M+ views across brands, startups, and my own content. Built a system that generates 30M views and $8k/mo.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            <a href="https://www.tiktok.com/@nfl/video/7597937372512259383" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">NFL</a> and <a href="https://www.tiktok.com/@brooklynnets/video/7592784195068431629" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">NBA</a> have featured content I've created.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

