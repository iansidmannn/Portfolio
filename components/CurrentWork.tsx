'use client'

import { motion } from 'framer-motion'

export default function CurrentWork() {
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 border-t border-white/10">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-3">Current</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Piñata Farms
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Key Result 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm p-8 lg:p-10"
          >
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4 tracking-tight">
              11.5M
            </div>
            <div className="text-lg font-semibold text-white mb-3 tracking-tight">
              Organic Views in 5 Days
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Took TikTok from 0 → 11.5M organic views in 5 days. Scaled viral content distribution to 50M+ views across TikTok, Instagram, Facebook, Reddit, and YouTube.
            </p>
          </motion.div>

          {/* Key Result 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm p-8"
          >
            <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-3">
              300%
            </div>
            <div className="text-lg font-semibold text-white mb-2">
              App Store Search Growth
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Grew app store search downloads 300%. Built every growth channel from scratch — UGC, TikTok search, Reddit, tutorial content — all converting to downloads. Built custom automation tools to multiply inputs.
            </p>
          </motion.div>
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 text-sm">
            <a href="https://www.tiktok.com/@nfl/video/7597937372512259383" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">NFL</a> and <a href="https://www.tiktok.com/@brooklynnets/video/7592784195068431629" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">NBA</a> have featured content I've created.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
