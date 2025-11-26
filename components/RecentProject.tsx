'use client'

import { motion } from 'framer-motion'

export default function RecentProject() {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Most Recent High-Effort Project
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl p-5 md:p-6 space-y-4"
        >
          <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            <div className="aspect-[16/9]">
              <iframe
                src="https://www.youtube.com/embed/kAHhqy4WMEY?start=10"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            this series means a lot to me symbolically and it would be cool one day to be in a postion to continue it
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

