'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function PersonalStory() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent to-black/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-pink-500/20 to-red-500/20 border border-pink-500/30 mb-6"
          >
            <Heart className="w-8 h-8 text-pink-400" fill="currentColor" />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Why I Create
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm p-12">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Content creation isn't just what I do—it's in my DNA. It's how I think, how I see the world, and how I connect with people.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I love the process of taking an idea and turning it into something that resonates. There's something magical about creating content that makes someone laugh, think, or feel something. When a video goes viral, it's not just about the numbers—it's about knowing that something you created connected with thousands, or millions, of people.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Day to day, I'm constantly thinking about content. I see trends before they're trends. I notice what works and what doesn't. I experiment, iterate, and push boundaries. This isn't a job for me—it's a passion that drives everything I do.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

