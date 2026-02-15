'use client'

import React, { useState, useRef, useEffect } from 'react'
import './PinataApp.css'

export default function PinataApp() {
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
        <div className="logo-container">
          <h1 className="logo-text">PIÑATA</h1>
          <h1 className="logo-text">FARMS</h1>
        </div>
      </header>

      {/* Video Section */}
      <main className="video-section">
        {videoUrl ? (
          <div className="video-container-ready">
            <div className="status-indicator">
              <span className="status-dot"></span>
              <span className="status-text">READY</span>
            </div>
            <div className="video-wrapper video-ready" onClick={handleVideoClick}>
              <div className="power-glow"></div>
              <video
                ref={videoRef}
                src={videoUrl}
                className="video-player"
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handleEnded}
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
