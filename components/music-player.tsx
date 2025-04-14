"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { motion } from "framer-motion"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [audioLoaded, setAudioLoaded] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element with error handling
    try {
      audioRef.current = new Audio()
      audioRef.current.loop = true

      // Add event listeners for error handling
      audioRef.current.addEventListener("error", (e) => {
        console.error("Audio loading error:", e)
        setAudioLoaded(false)
      })

      audioRef.current.addEventListener("canplaythrough", () => {
        setAudioLoaded(true)
      })

      // Only set src after adding event listeners
      audioRef.current.src = "/synthwave-loop.mp3"
    } catch (error) {
      console.error("Error initializing audio:", error)
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ""
        audioRef.current = null
      }
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current && audioLoaded) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        // Wrap in try/catch to handle potential play() promise rejection
        try {
          const playPromise = audioRef.current.play()
          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              console.error("Play error:", error)
            })
          }
        } catch (error) {
          console.error("Error playing audio:", error)
        }
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="w-12 h-12 rounded-full bg-synthwave-darker border-2 border-synthwave-pink flex items-center justify-center shadow-lg hover:shadow-[0_0_15px_rgba(255,0,255,0.7)] transition-all duration-300"
        >
          <span className="font-lazer text-synthwave-pink text-xl">♪</span>
        </button>

        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute bottom-16 right-0 bg-synthwave-darker p-4 rounded-lg border border-synthwave-purple shadow-lg w-64"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-lazer text-synthwave-pink">SYNTHWAVE RADIO</h4>
              <div className="flex space-x-2">
                <button onClick={toggleMute} className="text-white hover:text-synthwave-blue transition-colors">
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-synthwave-pink bg-opacity-20 flex items-center justify-center hover:bg-opacity-40 transition-colors"
              >
                {isPlaying ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-white" />}
              </button>
              <div className="text-sm text-gray-300">
                {!audioLoaded ? "Audio not available" : isPlaying ? "Now Playing" : "Click to Play"}
                <div className="text-xs text-gray-400">Synthwave Vibes</div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  )
}
