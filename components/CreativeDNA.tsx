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
            I love winning. Growth hacking and owning attention is in my DNA & finding growth channels is my crack.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            I have strong content intuition with 12 years of experience & 270 million views.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            Extroverted for the camera, introverted to lock in and get my work done.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            I kill giants for what I believe in, nothing gets in my way. 
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            Everything I've worked for, benching 405, bench press national record, 60k TikTok, my clothing brand, launching charity karaoke in 25 days, and more have required this level of effort.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            I win this game at the highest level & I will be one of the greatest growth marketers alive.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

