'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Target, Zap } from 'lucide-react'

const philosophyPoints = [
  {
    icon: Target,
    title: 'Branding',
    content: "If you already have a business, one of the first things I do is study the soul of your business. I want to download everything from what it does, to who it helps and learn as much about them as possible—why they come, their mindset, what they like, etc. Then I identify what connects people to your business. From there I always get creative—sometimes there's small little things you can do that will give you a massive advantage in any given scenario. Once I do that, I study your acquisition process & your best customers → reverse engineer what makes them loyal → creatively engineer unique ways to scale/accelerate those interactions.",
  },
  {
    icon: Zap,
    title: 'Creative Marketing',
    content: "I see alignments and think of ideas that no one else can see, both in strategy and in reducing friction. Give me the goal and I can figure out very unique/better ways of getting there.",
  },
  {
    icon: Lightbulb,
    title: 'My Secret',
    content: "My secret has always been my creativity. I find ways to do crazy things. 29 new 5 star reviews in one day. 193 customers from one video. 9 million views & 23,200 followers in a week. Far greater things in my personal life.",
  },
]

export default function Philosophy() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            My Social Media Philosophy
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {philosophyPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm p-8 hover:border-white/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {point.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {point.content}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

