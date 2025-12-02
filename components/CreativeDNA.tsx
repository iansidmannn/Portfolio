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
            Creating viral content is in my DNA. I can pump out good content faster than 99% of creators you'll find anywhere. I can do full creative production on my own, ideating, coordinating, creating, editing, and posting with 5 years of experience enhancing my approach.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            Time and time again any environment I've been thrown into I've been able to make good content for it. Whether it's creating on the spot for a nonprofit event, or coming up with viral systems for a struggling brand I can do it all.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            Extroverted for the camera, introverted to lock in and get my work done. When something really matters to me it matters; I go all in and will stop at nothing to see it through.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

