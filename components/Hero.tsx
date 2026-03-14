'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TrendingUp, Users, DollarSign } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-white/10">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 w-full max-w-7xl">
        <div className="relative">
          {/* Left Side - Profile & Key Info - Dominant */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-12"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <Image
                src="/Profile.jpg"
                alt="Ian Sidman"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Name & Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-[1.1] tracking-tight"
              >
                Ian Sidman
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light tracking-tight"
              >
                Organic Distribution
              </motion.p>
            </div>

            {/* Key Metrics - Horizontal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-8 pt-2"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">300M+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Views</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">9</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Brands Scaled</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">$470K+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Revenue</div>
                </div>
              </div>
            </motion.div>

            {/* Partner Logos - Below metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-12 border-t border-white/10"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">Featured By</p>
              <div className="flex flex-wrap items-center gap-6 opacity-60 hover:opacity-80 transition-opacity">
                {['/f19 logo.png', '/brick logo.png', '/smylelabs logo.png', '/wealthconlogo.png', '/ck logo.png', '/pf logo2.png', '/nba-logo-transparent.png', '/dexcom.png', '/NHL-Logo.png', '/nflz.png'].map((src, index) => {
                  const isSquareLogo = src === '/nba-logo-transparent.png' || src === '/NHL-Logo.png' || src === '/nflz.png'
                  return (
                    <motion.div
                      key={src}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.03, duration: 0.4 }}
                      className={`relative ${isSquareLogo ? 'h-12 w-12 sm:h-14 sm:w-14' : 'h-7 w-24 sm:h-8 sm:w-28'}`}
                    >
                      <Image
                        src={src}
                        alt="Partner logo"
                        fill
                        sizes="120px"
                        className="object-contain"
                        priority
                        fetchPriority="high"
                      />
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Mobile Stats Box - Compact version below logos */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 md:hidden w-full bg-gradient-to-br from-white/5 to-white/0 rounded-xl border border-white/10 backdrop-blur-sm p-4 overflow-hidden"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-50" />
              
              {/* Monthly Stats Header */}
              <div className="relative mb-3">
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.1em] mb-0.5">Stats Last Month</p>
                <p className="text-xs font-semibold text-white">January 2026</p>
              </div>

              {/* Compact Metrics - Smaller on mobile */}
              <div className="relative space-y-2.5">
                {/* Users */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">Users</span>
                    <span className="text-sm font-bold text-white">+12K</span>
                  </div>
                  <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                    />
                  </div>
                </div>

                {/* Views */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">Views</span>
                    <span className="text-sm font-bold text-white">+31.5M</span>
                  </div>
                  <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-400 rounded-full"
                    />
                  </div>
                </div>

                {/* Profit */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">Profit</span>
                    <span className="text-sm font-bold text-white">$8K</span>
                  </div>
                  <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Small Stats Box - Top Right Corner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute top-0 right-0 w-72 bg-gradient-to-br from-white/5 to-white/0 rounded-xl border border-white/10 backdrop-blur-sm p-6 overflow-hidden hidden md:block"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-50" />
            
            {/* Monthly Stats Header */}
            <div className="relative mb-5">
              <p className="text-xs text-gray-400 uppercase tracking-[0.15em] mb-1.5">Stats Last Month</p>
              <p className="text-sm font-semibold text-white tracking-tight">January 2026</p>
            </div>

            {/* Compact Metrics */}
            <div className="relative space-y-4">
              {/* Users */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Users</span>
                  <span className="text-base font-bold text-white">+12,000</span>
                </div>
                <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                  />
                </div>
              </div>

              {/* Views */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Views</span>
                  <span className="text-base font-bold text-white">+31.5M</span>
                </div>
                <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-400 rounded-full"
                  />
                </div>
              </div>

              {/* Profit */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">Profit</span>
                  <span className="text-base font-bold text-white">$8,000</span>
                </div>
                <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
