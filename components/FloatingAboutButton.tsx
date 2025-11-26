'use client'

import { motion } from 'framer-motion'
import { User, MessageCircle, Star } from 'lucide-react'
import Link from 'next/link'

export default function FloatingAboutButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed top-6 right-6 z-50 flex flex-col gap-3 items-end"
    >
      <Link
        href="/about"
        className="group flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
      >
        <User className="w-4 h-4 text-white" />
        <span className="text-sm font-medium text-white">About Me</span>
      </Link>

      <Link
        href="/testimonials"
        className="group flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
      >
        <Star className="w-4 h-4 text-white" />
        <span className="text-sm font-medium text-white">Testimonials</span>
      </Link>

      <Link
        href="/contact"
        className="group flex items-center gap-2 px-4 py-2 bg-purple-500/20 backdrop-blur-sm border-2 border-purple-400/50 rounded-full hover:bg-purple-500/30 hover:border-purple-400 transition-all duration-300 shadow-lg shadow-purple-500/20"
      >
        <MessageCircle className="w-4 h-4 text-white" />
        <span className="text-sm font-medium text-white">Contact</span>
      </Link>
    </motion.div>
  )
}

