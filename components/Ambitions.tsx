'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useRef } from 'react'

export default function Ambitions() {
  const separatorRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: separatorRef,
    offset: ["start end", "end start"]
  })
  
  // Create transforms for each dot (7 dots total) with overlapping animations
  const dotTransforms = Array.from({ length: 7 }, (_, i) => {
    // Each dot starts animating before the previous one finishes
    // This creates the overlapping wave effect
    const startOffset = (i - 0.5) / 7
    const endOffset = (i + 1.5) / 7
    
    const dotProgress = useTransform(
      scrollYProgress,
      [startOffset, endOffset],
      [0, 1],
      { clamp: true }
    )
    
    // Smoother scale curve - starts small, peaks in middle, ends small
    const scale = useTransform(
      dotProgress,
      [0, 0.3, 0.7, 1],
      [0.5, 1.5, 1.5, 0.5]
    )
    
    // Smoother opacity curve
    const opacity = useTransform(
      dotProgress,
      [0, 0.2, 0.8, 1],
      [0.3, 1, 1, 0.3]
    )
    
    return { scale, opacity }
  })
  
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-4"
          >
            <Sparkles className="w-6 h-6 text-purple-400" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My Next Moves
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm p-8 space-y-4"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            At this stage in my career I'm ready to move beyond being "theviralguy". I want to build a brand, community, and marketing strategy for a team I truly believe in.
            I know my past content experience might not mirror the exact things a role like that tradtionally needs. I know, I ask is that you look at my work as proof that
             when something matters to me I put my all into it. I know a lot of the hard to learn pieces when it comes to comprehensive marketing, and think I will crush it with the rest & do even better at a role like this. I have so many exciting ideas, if you give me the chance to try, I won't let you down.
             On a day to day basis I live and breathe marketing, I take pictures of everything I see that captures my attention and put it in an album in my camera roll. I'm constantly thinking about attention and content, It's almost like a sport I thoroughly enjoy.
             To me it's not just about the numbers—it's about knowing that something you created resonated with thousands, or millions, of people. I'm obsessed with strategy, pursuing ideas and seeing them effect change is extremely satisfying to me. Even writing this right now, just thinking about effecting change is pumping me up in the middle of the library. I love the game, I love strategy, and I love being apart of team & creating something.


          </p>
        </motion.div>
      </div>
      
      {/* Scroll-responsive vertical dots separator */}
      <div ref={separatorRef} className="container mx-auto max-w-4xl mt-32 mb-16 flex justify-center">
        <div className="flex flex-col items-center gap-4">
          {dotTransforms.map((transform, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50"
              style={{
                scale: transform.scale,
                opacity: transform.opacity,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

