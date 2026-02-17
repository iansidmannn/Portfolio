'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import './PinataAppWhite2.css'

export default function PinataAppWhite2() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (videoFile) {
      const url = URL.createObjectURL(videoFile)
      setVideoUrl(url)
      return () => URL.revokeObjectURL(url)
    }
  }, [videoFile])

  useEffect(() => {
    if (videoUrl && videoRef.current) {
      // Force video to load on mobile
      videoRef.current.load()
    }
  }, [videoUrl])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('video/')) {
      setVideoFile(file)
      setIsPlaying(false)
    }
  }

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }

  const handleVideoClick = () => {
    handlePlayPause()
  }

  const handlePlay = () => {
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const handleEnded = () => {
    setIsPlaying(false)
  }

  const openFilePicker = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="app-white">
      {/* Logo Header */}
      <header className="logo-header-white">
        <button className="header-button-white header-button-close-white" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="logo-container-white">
          <h1 className="logo-text-white">PIÑATA</h1>
          <h1 className="logo-text-white">FARMS</h1>
        </div>
        <button className="header-button-white header-button-share-white" aria-label="Share">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12M16 6L12 2M12 2L8 6M12 2V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </header>

      {/* Video Section */}
      <main className="video-section-white">
        {videoUrl ? (
          <div className="video-container-ready-white">
            <div className="video-wrapper-white video-ready-white" onClick={handleVideoClick}>
              <div className="power-glow-white"></div>
              <video
                ref={videoRef}
                src={videoUrl}
                className="video-player-white"
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handleEnded}
                preload="auto"
                playsInline
                loop
              />
              {!isPlaying && (
                <div className="play-overlay-white">
                  <div className="play-button-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 5V19L19 12L8 5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="play-hint-white">TAP TO PLAY</div>
                </div>
              )}
            </div>
            <div className="status-indicator-white">
              <span className="status-dot-white"></span>
              <span className="status-text-white">READY</span>
            </div>
            {/* Download Buttons */}
            <div className="download-section-white">
              <a href="https://pinatafarm.com/download" className="download-all-image-link-white" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/hopefully logo maxxed now.png"
                  alt="Download Piñata Farms App"
                  width={450}
                  height={225}
                  className="download-all-image-white"
                />
              </a>
            </div>
          </div>
        ) : (
          <div className="empty-video-state-white">
            <div className="empty-icon-white">✨</div>
            <h2 className="empty-title-white">No video yet</h2>
            <p className="empty-subtitle-white">
              Tap the button below to add your first video
            </p>
          </div>
        )}
      </main>

      {/* Add Video Button */}
      <footer className="button-footer-white">
        <button className="add-video-button-white" onClick={openFilePicker}>
          <span className="button-text-white">
            {videoUrl ? 'Change Video' : 'Add Video'}
          </span>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </footer>
    </div>
  )
}
