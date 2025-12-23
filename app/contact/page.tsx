'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Instagram, Linkedin, FileText } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          href="/"
          className="group flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 text-white" />
          <span className="text-sm font-medium text-white">Back</span>
        </Link>
      </motion.div>

      <div className="container mx-auto max-w-4xl pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Contact Ian
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            These are the best ways to contact me
          </p>
        </motion.div>

        <div className="mb-8 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-6">
            Contact Me
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-12 max-w-2xl mx-auto">
          <motion.a
            href="https://www.instagram.com/iantheviralguy"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur text-white hover:border-white/30 transition-colors"
          >
            <Instagram className="w-8 h-8 text-purple-300 mb-4" />
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-2">Instagram</p>
            <p className="text-2xl font-semibold">@iantheviralguy</p>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/ian-sidman/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur text-white hover:border-white/30 transition-colors"
          >
            <Linkedin className="w-8 h-8 text-blue-300 mb-4" />
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-2">LinkedIn</p>
            <p className="text-2xl font-semibold">Ian Sidman</p>
          </motion.a>
        </div>

        {/* Resume Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-12 text-center"
        >
          <motion.a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl border-2 border-purple-400/50 bg-purple-500/20 px-8 py-5 backdrop-blur text-white hover:border-purple-400 hover:bg-purple-500/30 transition-all"
          >
            <FileText className="w-7 h-7 text-purple-300" />
            <div className="text-left">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-1">Resume</p>
              <p className="text-xl font-semibold">View My Resume</p>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </main>
  )
}

