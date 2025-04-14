"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function GridFloor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isRendering, setIsRendering] = useState(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) {
      setIsRendering(false)
      return
    }

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      try {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      } catch (error) {
        console.error("Error setting canvas dimensions:", error)
        setIsRendering(false)
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Grid properties
    const gridSize = 50
    const horizonY = canvas.height * 0.5
    const vanishingPointX = canvas.width / 2

    // Animation loop
    let animationFrameId: number
    let offset = 0
    let isActive = true

    const render = () => {
      if (!isActive || !ctx) return

      try {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Draw sun
        const gradient = ctx.createRadialGradient(
          vanishingPointX,
          horizonY - 50,
          0,
          vanishingPointX,
          horizonY - 50,
          200,
        )
        gradient.addColorStop(0, "#ff00ff")
        gradient.addColorStop(0.5, "#9900ff")
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(vanishingPointX, horizonY - 50, 100, 0, Math.PI * 2)
        ctx.fill()

        // Draw grid
        ctx.strokeStyle = "#ff00ff"
        ctx.lineWidth = 1

        // Horizontal lines
        for (let y = horizonY; y <= canvas.height; y += 20) {
          const lineWidth = (y - horizonY) / (canvas.height - horizonY)
          ctx.lineWidth = lineWidth * 2

          ctx.beginPath()
          ctx.moveTo(0, y)
          ctx.lineTo(canvas.width, y)
          ctx.stroke()
        }

        // Vertical lines
        const spacing = 50
        const totalLines = Math.ceil(canvas.width / spacing) + 1

        for (let i = 0; i < totalLines; i++) {
          const progress = i / totalLines + offset / totalLines
          const x = progress * canvas.width

          ctx.beginPath()
          ctx.moveTo(x, horizonY)
          ctx.lineTo(x < vanishingPointX ? 0 : canvas.width, canvas.height)
          ctx.stroke()
        }

        // Update animation
        offset = (offset + 0.005) % 1

        animationFrameId = requestAnimationFrame(render)
      } catch (error) {
        console.error("Error rendering canvas:", error)
        isActive = false
        setIsRendering(false)
      }
    }

    render()

    return () => {
      isActive = false
      window.removeEventListener("resize", setCanvasDimensions)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  if (!isRendering) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 h-[50vh] z-0 pointer-events-none"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  )
}
