'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronDown, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import { myExperiences, consultingExperiences, type Experience } from '@/data/experiences'

export default function Experiences() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'mine' | 'consulting'>('mine')
  const [activeDetailTabs, setActiveDetailTabs] = useState<Record<string, 'videos' | 'approach' | 'achievements'>>({})
  
  const getActiveDetailTab = (experience: Experience) => {
    const saved = activeDetailTabs[experience.id]
    if (saved) return saved
    
    // Default to first available tab
    if (experience.videos && experience.videos.length > 0) return 'videos'
    if (experience.approach) return 'approach'
    return 'achievements'
  }
  
  const setActiveDetailTab = (experienceId: string, tab: 'videos' | 'approach' | 'achievements') => {
    setActiveDetailTabs(prev => ({ ...prev, [experienceId]: tab }))
  }

  const currentExperiences = activeTab === 'mine' ? myExperiences : consultingExperiences

  return (
    <section id="experiences-section" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Experiences
          </h2>

          {/* Tabs */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setActiveTab('mine')}
              className={`flex-1 md:flex-none px-6 py-3 md:px-6 md:py-3 rounded-full font-semibold text-base md:text-sm uppercase tracking-wider transition-all duration-300 text-center ${
                activeTab === 'mine'
                  ? 'bg-purple-500/20 text-purple-400 border-2 border-purple-400/50'
                  : 'bg-white/5 text-gray-400 border-2 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              Mine
            </button>
            <button
              onClick={() => setActiveTab('consulting')}
              className={`flex-1 md:flex-none px-6 py-3 md:px-6 md:py-3 rounded-full font-semibold text-base md:text-sm uppercase tracking-wider transition-all duration-300 text-center ${
                activeTab === 'consulting'
                  ? 'bg-purple-500/20 text-purple-400 border-2 border-purple-400/50'
                  : 'bg-white/5 text-gray-400 border-2 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span className="md:hidden">Contracting</span>
              <span className="hidden md:inline">Consulting / Contracting</span>
            </button>
          </div>
        </motion.div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentExperiences.map((experience, index) => {
            const isExpanded = expandedId === experience.id

            return (
              <div key={experience.id}>
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  onClick={() => setExpandedId(isExpanded ? null : experience.id)}
                  className="w-full group relative bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 backdrop-blur-sm overflow-hidden hover:border-white/30 transition-all duration-300 aspect-square flex flex-col items-center justify-center p-6"
                >
                  {/* Work Type Label */}
                  <div className="absolute top-4 left-4 right-4">
                    <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                      {experience.workType || experience.title}
                    </span>
                  </div>

                  {/* Profile Image - Top portion showing profile pic and stats */}
                  <div className="flex-1 flex items-center justify-center w-full px-2">
                    {experience.image ? (
                      <div className="relative w-full max-w-[200px] aspect-[3/2] rounded-xl overflow-hidden bg-white">
                        <Image
                          src={experience.image}
                          alt={experience.account}
                          fill
                          className="object-cover"
                          style={{ objectPosition: experience.imagePosition || 'center top' }}
                        />
                      </div>
                    ) : (
                      <div className="w-full max-w-[200px] aspect-[3/2] rounded-xl bg-white flex items-center justify-center">
                        <span className="text-sm text-gray-500 font-medium">
                          Profile Deleted
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Account Name */}
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-sm font-medium text-white truncate">
                      {experience.account}
                    </p>
                  </div>

                  {/* Expand Indicator */}
                  <div className="absolute bottom-4 right-4">
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </motion.button>

                {/* Expanded Details Modal */}
                <AnimatePresence>
                  {isExpanded && (
                    <>
                      {/* Backdrop */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setExpandedId(null)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                      />

                      {/* Modal */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="relative bg-black/90 rounded-2xl border border-white/20 p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                          {/* Close button */}
                          <button
                            onClick={() => setExpandedId(null)}
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
                          >
                            <X className="w-5 h-5 text-white" />
                          </button>

                          {/* Header */}
                          <div className="mb-6">
                            <div className="flex items-center gap-3 mb-4">
                              {experience.image && (
                                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20">
                                  <Image
                                    src={experience.image}
                                    alt={experience.account}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              )}
                              <div>
                                <h3 className="text-3xl font-bold text-white">
                                  {experience.title}
                                </h3>
                                <a
                                  href={experience.accountUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-purple-400 hover:text-purple-300 flex items-center gap-1 text-sm mt-1"
                                >
                                  {experience.account}
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                            {experience.summary && (
                              <div className="mt-4">
                                <p className="text-white font-semibold mb-3">Summary:</p>
                                <div className={`${experience.summaryImages && experience.summaryImages.length > 0 ? 'flex flex-col md:flex-row gap-6' : ''}`}>
                                  <div className={`text-gray-300 leading-relaxed space-y-3 ${experience.summaryImages && experience.summaryImages.length > 0 ? 'flex-1' : ''}`}>
                                    {(Array.isArray(experience.summary) ? experience.summary : [experience.summary]).map((paragraph, paraIdx) => {
                                      // Check if this experience has an approachAccount to link "this account"
                                      const hasAccountLink = experience.approachAccount && paragraph.toLowerCase().includes('this account');
                                      
                                      return (
                                        <p key={paraIdx} className="text-gray-300 leading-relaxed">
                                          {paragraph.split(/\b(strategy|this account)\b/i).map((part, i, arr) => {
                                            if (i === 0) return <span key={i}>{part}</span>;
                                            // Check if this part is "strategy" (case-insensitive)
                                            const isStrategy = /^strategy$/i.test(part);
                                            const isThisAccount = /^this account$/i.test(part);
                                            
                                            // Only make "strategy" a link for the iansidmann experience specifically
                                            if (isStrategy && experience.account === '@iansidmann') {
                                              return (
                                                <a
                                                  key={i}
                                                  href="#results-section"
                                                  onClick={(e) => {
                                                    e.preventDefault();
                                                    // Scroll to results section
                                                    const resultsSection = document.getElementById('results-section');
                                                    if (resultsSection) {
                                                      resultsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                                      // Dispatch event to open the result modal
                                                      setTimeout(() => {
                                                        window.dispatchEvent(new CustomEvent('openResultModal', { detail: '2' }));
                                                      }, 500);
                                                    }
                                                  }}
                                                  className="text-purple-400 hover:text-purple-300 underline cursor-pointer"
                                                >
                                                  {part}
                                                </a>
                                              );
                                            }
                                            
                                            if (isThisAccount && hasAccountLink) {
                                              return (
                                                <a
                                                  key={i}
                                                  href={experience.approachAccount!.url}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="text-purple-400 hover:text-purple-300 underline cursor-pointer"
                                                >
                                                  {part}
                                                </a>
                                              );
                                            }
                                            
                                            return <span key={i}>{part}</span>;
                                          })}
                                        </p>
                                      );
                                    })}
                                  </div>
                                  {experience.summaryImages && experience.summaryImages.length > 0 && (
                                    <div className="flex-shrink-0 space-y-3">
                                      {experience.summaryImages.map((img, i) => (
                                        <div key={i} className="space-y-2">
                                          <div className="relative w-full max-w-[200px] rounded-lg overflow-hidden border border-white/10">
                                            <Image
                                              src={img.src}
                                              alt={img.label || 'Summary image'}
                                              width={200}
                                              height={200}
                                              className="w-full h-auto object-cover"
                                              loading="lazy"
                                            />
                                          </div>
                                          {img.label && (
                                            <p className="text-sm text-gray-400 text-center">{img.label}</p>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Content Tabs */}
                          <div className="space-y-6 border-t border-white/10 pt-6">
                            {/* Tab Buttons */}
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => setActiveDetailTab(experience.id, 'videos')}
                                className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                                  getActiveDetailTab(experience) === 'videos'
                                    ? 'bg-purple-500/20 text-purple-400 border-2 border-purple-400/50'
                                    : 'bg-white/5 text-gray-400 border-2 border-white/10 hover:bg-white/10 hover:text-white'
                                }`}
                              >
                                Videos
                              </button>
                              <button
                                onClick={() => setActiveDetailTab(experience.id, 'approach')}
                                className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                                  getActiveDetailTab(experience) === 'approach'
                                    ? 'bg-purple-500/20 text-purple-400 border-2 border-purple-400/50'
                                    : 'bg-white/5 text-gray-400 border-2 border-white/10 hover:bg-white/10 hover:text-white'
                                }`}
                              >
                                Approach
                              </button>
                              <button
                                onClick={() => setActiveDetailTab(experience.id, 'achievements')}
                                className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                                  getActiveDetailTab(experience) === 'achievements'
                                    ? 'bg-purple-500/20 text-purple-400 border-2 border-purple-400/50'
                                    : 'bg-white/5 text-gray-400 border-2 border-white/10 hover:bg-white/10 hover:text-white'
                                }`}
                              >
                                Achievements
                              </button>
                            </div>

                            {/* Tab Content */}
                            <div className="min-h-[200px]">
                              {getActiveDetailTab(experience) === 'videos' && (
                                <div className="space-y-8">
                                  {/* Videos Section */}
                                  <div>
                                    <h4 className="text-lg font-semibold text-white mb-4">Videos</h4>
                                    {experience.videos && experience.videos.length > 0 ? (
                                      <div className={`grid gap-6 ${experience.id === 'charity-karaoke' ? 'md:grid-cols-1 lg:grid-cols-2' : 'md:grid-cols-2'}`}>
                                        {experience.videos.map((video, i) => (
                                          <div key={i} className="space-y-2">
                                            {video.video ? (
                                              <div>
                                                <div className={`relative w-full aspect-[9/16] rounded-lg overflow-hidden border border-white/10 mx-auto ${experience.id === 'charity-karaoke' ? 'max-w-[400px]' : 'max-w-[300px]'} bg-black`}>
                                                  <video
                                                    src={video.video}
                                                    controls
                                                    className="w-full h-full object-contain"
                                                    playsInline
                                                  >
                                                    Your browser does not support the video tag.
                                                  </video>
                                                </div>
                                                {video.title && (
                                                  <p className="text-sm text-gray-400 text-center mt-2">
                                                    {video.title}
                                                  </p>
                                                )}
                                                <a
                                                  href={video.url}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="text-xs text-purple-400 hover:text-purple-300 transition-colors text-center block mt-1"
                                                >
                                                  {video.url.includes('instagram.com') ? 'View on Instagram' : 'View on website (It\'s their #1 ad)'}
                                                </a>
                                              </div>
                                            ) : (
                                              <a
                                                href={video.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block group"
                                              >
                                                {video.thumbnail ? (
                                                  <div className={`relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors ${experience.id === 'charity-karaoke' ? 'max-w-[600px] mx-auto' : ''}`}>
                                                    <Image
                                                      src={video.thumbnail}
                                                      alt={video.title || 'Video thumbnail'}
                                                      fill
                                                      className="object-cover"
                                                      loading="lazy"
                                                    />
                                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                                      <ExternalLink className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </div>
                                                  </div>
                                                ) : (
                                                  <div className="w-full aspect-[4/5] rounded-lg border border-white/10 bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex flex-col items-center justify-center group-hover:border-white/30 transition-colors space-y-2">
                                                    <ExternalLink className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
                                                    <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors px-4 text-center">
                                                      {video.url.includes('instagram.com') ? 'View on Instagram' : 'View on website'}
                                                    </p>
                                                  </div>
                                                )}
                                                {video.title && (
                                                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors mt-2">
                                                    {video.title}
                                                  </p>
                                                )}
                                              </a>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    ) : (
                                      <p className="text-gray-400 italic">No videos available yet.</p>
                                    )}
                                  </div>

                                  {/* Brand Deals Section */}
                                  {experience.brandDeals && experience.brandDeals.length > 0 && (
                                    <div className="border-t border-white/10 pt-6">
                                      <h4 className="text-lg font-semibold text-white mb-4">Brand Deals</h4>
                                      <div className="grid gap-6 md:grid-cols-2">
                                        {experience.brandDeals.map((deal, i) => (
                                          <div key={i} className="space-y-3">
                                            {/* Logo */}
                                            {deal.logo && (
                                              <div className="flex items-center mb-2">
                                                <div className="relative h-8 w-auto">
                                                  <Image
                                                    src={deal.logo}
                                                    alt={deal.brand}
                                                    width={120}
                                                    height={40}
                                                    className="h-8 w-auto object-contain"
                                                  />
                                                </div>
                                              </div>
                                            )}
                                            
                                            {/* Video or Thumbnail */}
                                            {deal.video ? (
                                              <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden border border-white/10 mx-auto max-w-[300px]">
                                                <video
                                                  src={deal.video}
                                                  controls
                                                  className="w-full h-full object-contain"
                                                  playsInline
                                                  webkit-playsinline="true"
                                                  loading="lazy"
                                                  muted
                                                >
                                                  Your browser does not support the video tag.
                                                </video>
                                              </div>
                                            ) : deal.thumbnail ? (
                                              <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden border border-white/10">
                                                <Image
                                                  src={deal.thumbnail}
                                                  alt={deal.brand}
                                                  fill
                                                  className="object-cover"
                                                  loading="lazy"
                                                  sizes="(max-width: 768px) 100vw, 50vw"
                                                />
                                              </div>
                                            ) : null}
                                            
                                            {/* Brand Name and Description */}
                                            <div>
                                              {deal.url ? (
                                                <a
                                                  href={deal.url}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="group"
                                                >
                                                  <p className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors inline-flex items-center gap-1">
                                                    {deal.brand}
                                                    <ExternalLink className="w-3 h-3" />
                                                  </p>
                                                </a>
                                              ) : (
                                                <p className="text-sm font-medium text-white">
                                                  {deal.brand}
                                                </p>
                                              )}
                                              {deal.description && (
                                                <p className="text-sm text-gray-400 mt-1">
                                                  {deal.description}
                                                </p>
                                              )}
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* Picture Memories Section */}
                                  {experience.pictureMemories && experience.pictureMemories.length > 0 && (
                                    <div className="border-t border-white/10 pt-6">
                                      <h4 className="text-lg font-semibold text-white mb-4">Picture Memories</h4>
                                      <div className="grid gap-6 md:grid-cols-2">
                                        {experience.pictureMemories.map((memory, i) => (
                                          <div key={i} className="space-y-2">
                                            {memory.video ? (
                                              <div>
                                                <div className="relative w-full rounded-lg overflow-hidden border border-white/10">
                                                  <video
                                                    src={memory.video}
                                                    controls
                                                    className="w-full h-auto"
                                                    playsInline
                                                  >
                                                    Your browser does not support the video tag.
                                                  </video>
                                                </div>
                                                {memory.caption && (
                                                  <p className="text-sm text-gray-400 mt-2">
                                                    {memory.caption}
                                                  </p>
                                                )}
                                              </div>
                                            ) : memory.url ? (
                                              <a
                                                href={memory.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block group"
                                              >
                                                <div className="relative w-full rounded-lg overflow-hidden border border-white/10 group-hover:border-white/30 transition-colors">
                                                  <Image
                                                    src={memory.image!}
                                                    alt={memory.caption || 'Memory'}
                                                    width={800}
                                                    height={800}
                                                    className="w-full h-auto object-contain"
                                                    loading="lazy"
                                                  />
                                                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
                                                    <ExternalLink className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                                  </div>
                                                </div>
                                                {memory.caption && (
                                                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors mt-2">
                                                    {memory.caption}
                                                  </p>
                                                )}
                                              </a>
                                            ) : (
                                              <div>
                                                <div className="relative w-full rounded-lg overflow-hidden border border-white/10">
                                                  <Image
                                                    src={memory.image!}
                                                    alt={memory.caption || 'Memory'}
                                                    width={800}
                                                    height={800}
                                                    className="w-full h-auto object-contain"
                                                    loading="lazy"
                                                  />
                                                </div>
                                                {memory.caption && (
                                                  <p className="text-sm text-gray-400 mt-2">
                                                    {memory.caption}
                                                  </p>
                                                )}
                                              </div>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}

                              {getActiveDetailTab(experience) === 'approach' && (
                                <div className="space-y-8">
                                  {experience.approach ? (
                                    <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                                      {experience.approach.split('\n').map((paragraph, paraIdx, paragraphs) => {
                                        const isLastParagraph = paraIdx === paragraphs.length - 1;
                                        const hasAccountLink = isLastParagraph && experience.approachAccount;
                                        
                                        return (
                                          <p key={paraIdx} className="mb-6 last:mb-0">
                                            {paragraph.split(/\b(charitykaroake instagram|my personal youtube)\b/i).map((part, i, arr) => {
                                              if (i === 0) {
                                                // Check for links in the first part
                                                const parts = [];
                                                let remaining = part;
                                                
                                                // Check for "charitykaroake instagram"
                                                const charityMatch = remaining.match(/\b(charitykaroake instagram)\b/i);
                                                if (charityMatch) {
                                                  const before = remaining.substring(0, charityMatch.index);
                                                  const after = remaining.substring(charityMatch.index! + charityMatch[0].length);
                                                  parts.push(<span key={`before-${i}`}>{before}</span>);
                                                  parts.push(
                                                    <a
                                                      key={`charity-${i}`}
                                                      href="https://www.instagram.com/charitykaraoke/"
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      className="text-purple-400 hover:text-purple-300 underline"
                                                    >
                                                      {charityMatch[0]}
                                                    </a>
                                                  );
                                                  remaining = after;
                                                }
                                                
                                                // Check for "my personal youtube"
                                                const youtubeMatch = remaining.match(/\b(my personal youtube)\b/i);
                                                if (youtubeMatch) {
                                                  const before = remaining.substring(0, youtubeMatch.index);
                                                  const after = remaining.substring(youtubeMatch.index! + youtubeMatch[0].length);
                                                  parts.push(<span key={`before-youtube-${i}`}>{before}</span>);
                                                  parts.push(
                                                    <a
                                                      key={`youtube-${i}`}
                                                      href="https://www.youtube.com/@iansidmann"
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      className="text-purple-400 hover:text-purple-300 underline"
                                                    >
                                                      {youtubeMatch[0]}
                                                    </a>
                                                  );
                                                  remaining = after;
                                                }
                                                
                                                if (parts.length > 0) {
                                                  parts.push(<span key={`remaining-${i}`}>{remaining}</span>);
                                                  return <>{parts}</>;
                                                }
                                                return <span key={i}>{part}</span>;
                                              }
                                              
                                              // Check for "charitykaroake instagram" or "my personal youtube"
                                              const isCharityLink = /^charitykaroake instagram$/i.test(part);
                                              const isYoutubeLink = /^my personal youtube$/i.test(part);
                                              
                                              if (isCharityLink) {
                                                return (
                                                  <a
                                                    key={i}
                                                    href="https://www.instagram.com/charitykaraoke/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-purple-400 hover:text-purple-300 underline"
                                                  >
                                                    {part}
                                                  </a>
                                                );
                                              }
                                              
                                              if (isYoutubeLink) {
                                                return (
                                                  <a
                                                    key={i}
                                                    href="https://www.youtube.com/@iansidmann"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-purple-400 hover:text-purple-300 underline"
                                                  >
                                                    {part}
                                                  </a>
                                                );
                                              }
                                              
                                              return <span key={i}>{part}</span>;
                                            })}
                                            {hasAccountLink && (
                                              <>
                                                <br />
                                                <a
                                                  href={experience.approachAccount!.url}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="text-purple-400 hover:text-purple-300 transition-colors"
                                                >
                                                  {experience.approachAccount!.handle}
                                                </a>
                                              </>
                                            )}
                                          </p>
                                        );
                                      })}
                                    </div>
                                  ) : (
                                    <p className="text-gray-400 italic">No approach information available yet.</p>
                                  )}
                                  {experience.approachAccount2 && (
                                    <p className="text-gray-300 leading-relaxed">
                                      I also made{' '}
                                      <a
                                        href={experience.approachAccount2.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-400 hover:text-purple-300 transition-colors"
                                      >
                                        {experience.approachAccount2.handle}
                                      </a>
                                      {' '}LOL
                                    </p>
                                  )}
                                  {experience.approachVideo && (
                                    <div className="mt-8">
                                      <div className="relative w-full aspect-[9/16] rounded-lg overflow-hidden border border-white/10 mx-auto max-w-[300px] bg-black">
                                        <video
                                          src={experience.approachVideo.video}
                                          controls
                                          className="w-full h-full object-contain"
                                          playsInline
                                          webkit-playsinline="true"
                                        >
                                          Your browser does not support the video tag.
                                        </video>
                                        {experience.approachVideo.label && (
                                          <div className="absolute bottom-10 left-0 right-0 p-4">
                                            <div className="flex items-start justify-between">
                                              <div className="flex flex-col">
                                                <span className="text-sm font-semibold text-purple-300 mb-2">
                                                  Instagram
                                                </span>
                                                <a
                                                  href={experience.accountUrl}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="text-sm text-gray-300 hover:text-purple-300 transition-colors"
                                                >
                                                  @goofygarmentshop
                                                </a>
                                              </div>
                                              <div className="flex flex-col items-end">
                                                <span className="text-xl font-bold text-white">
                                                  5.8M
                                                </span>
                                                <span className="text-sm text-purple-300 font-semibold">+$5,000</span>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}

                              {getActiveDetailTab(experience) === 'achievements' && (
                                <div className="space-y-6">
                                  <ul className="space-y-2">
                                    {experience.achievements.map((achievement, i) => {
                                      // Parse URLs and special link words (like "brick") to make them clickable
                                      const urlRegex = /(https?:\/\/[^\s]+)/g
                                      // Check if this is the Get Brick experience and replace "brick" with a link
                                      const isBrickExperience = experience.id === 'get-brick'
                                      let processedText = achievement
                                      
                                      if (isBrickExperience) {
                                        // Replace standalone word "brick" (not part of another word) with a link
                                        processedText = processedText.replace(/\bbrick\b/gi, (match) => {
                                          return `__BRICK_LINK__${match}__BRICK_LINK__`
                                        })
                                      }
                                      
                                      const parts = processedText.split(/(https?:\/\/[^\s]+|__BRICK_LINK__[^_]+__BRICK_LINK__)/g)
                                      return (
                                        <li key={i} className="text-gray-300 flex items-start gap-2">
                                          <span className="text-purple-400 mt-1">•</span>
                                          <span>
                                            {parts.map((part, j) => {
                                              if (part.match(urlRegex)) {
                                                return (
                                                  <a
                                                    key={j}
                                                    href={part}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-purple-400 hover:text-purple-300 underline"
                                                  >
                                                    {part}
                                                  </a>
                                                )
                                              } else if (part.includes('__BRICK_LINK__')) {
                                                const linkText = part.replace(/__BRICK_LINK__/g, '')
                                                return (
                                                  <a
                                                    key={j}
                                                    href="https://getbrick.app"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-purple-400 hover:text-purple-300 underline"
                                                  >
                                                    {linkText}
                                                  </a>
                                                )
                                              }
                                              return <span key={j}>{part}</span>
                                            })}
                                          </span>
                                        </li>
                                      )
                                    })}
                                  </ul>
                                  {experience.achievementImages && experience.achievementImages.length > 0 && (
                                    <div className="grid gap-4 md:grid-cols-2 mt-6">
                                      {experience.achievementImages.map((img, i) => (
                                        <div key={i} className="relative w-full rounded-lg overflow-hidden border border-white/10">
                                          <Image
                                            src={img}
                                            alt={`Achievement ${i + 1}`}
                                            width={800}
                                            height={600}
                                            className="w-full h-auto object-contain"
                                            loading="lazy"
                                          />
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
