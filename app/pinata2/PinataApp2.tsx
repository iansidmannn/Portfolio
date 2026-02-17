'use client'

import React, { useState, useRef, useEffect } from 'react'
import './PinataApp2.css'

export default function PinataApp2() {
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
    <div className="app">
      {/* Logo Header */}
      <header className="logo-header">
        <button className="header-button header-button-close" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="logo-container">
          <h1 className="logo-text">PIÑATA</h1>
          <h1 className="logo-text">FARMS</h1>
        </div>
        <button className="header-button header-button-share" aria-label="Share">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12M16 6L12 2M12 2L8 6M12 2V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </header>

      {/* Video Section */}
      <main className="video-section">
        {videoUrl ? (
          <div className="video-container-ready">
            <div className="video-wrapper video-ready" onClick={handleVideoClick}>
              <div className="power-glow"></div>
              <video
                ref={videoRef}
                src={videoUrl}
                className="video-player"
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handleEnded}
                preload="auto"
                playsInline
                loop
              />
              {!isPlaying && (
                <div className="play-overlay">
                  <div className="play-button">
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
                  <div className="play-hint">TAP TO PLAY</div>
                </div>
              )}
            </div>
            <div className="status-indicator">
              <span className="status-dot"></span>
              <span className="status-text">READY</span>
            </div>
            {/* App Store Button */}
            <div className="app-store-section">
              <a href="https://pinatafarm.com/download" className="app-store-button" target="_blank" rel="noopener noreferrer">
                <svg className="apple-logo" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="app-store-text">
                  <span className="app-store-line1">Download on the</span>
                  <span className="app-store-line2">App Store</span>
                </div>
              </a>
            </div>
          </div>
        ) : (
          <div className="empty-video-state">
            <div className="empty-icon">✨</div>
            <h2 className="empty-title">No video yet</h2>
            <p className="empty-subtitle">
              Tap the button below to add your first video
            </p>
          </div>
        )}
      </main>

      {/* Add Video Button */}
      <footer className="button-footer">
        <button className="add-video-button" onClick={openFilePicker}>
          <span className="button-text">
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
