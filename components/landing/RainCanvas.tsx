"use client"

import React, { useEffect, useRef } from "react"

interface Drop {
    x: number
    y: number
    length: number
    speed: number
    opacity: number
}

export default function RainCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const drops = useRef<Drop[]>([])
    const animationFrameId = useRef<number>(0)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const resize = () => {
            const parent = canvas.parentElement
            if (parent) {
                canvas.width = parent.clientWidth
                canvas.height = parent.clientHeight
            }
        }

        const initDrops = () => {
            const count = 300
            drops.current = Array.from({ length: count }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                length: Math.random() * 8 + 4,
                speed: Math.random() * 12 + 6,
                opacity: Math.random() * 0.2 + 0.1
            }))
        }

        resize()
        initDrops()

        window.addEventListener("resize", resize)

        const loop = () => {
            if (!ctx) return
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const angle = -5 // Elegant left tilt

            drops.current.forEach((d) => {
                let currentOpacity = d.opacity
                const skyLimit = canvas.height * 0.45 // Hard stop for rain before text
                const fadeZone = canvas.height * 0.1 // Fade range for both top and bottom

                let opacityMultiplier = 1

                // Fade in from top
                if (d.y < fadeZone) {
                    opacityMultiplier = Math.max(0, d.y / fadeZone)
                }
                // Fade out at sky limit
                else if (d.y > skyLimit - fadeZone) {
                    opacityMultiplier = Math.max(0, 1 - (d.y - (skyLimit - fadeZone)) / fadeZone)
                }

                currentOpacity = d.opacity * opacityMultiplier * 0.85

                // Only draw if it's within the sky area and has some opacity
                if (d.y < skyLimit && currentOpacity > 0.01) {
                    ctx.beginPath()
                    ctx.strokeStyle = `rgba(0, 0, 0, ${Math.max(0, currentOpacity)})`
                    ctx.lineWidth = 1.0
                    ctx.lineCap = "round"
                    ctx.moveTo(d.x, d.y)
                    ctx.lineTo(d.x + angle, d.y + d.length)
                    ctx.stroke()
                }

                // Update position
                d.y += d.speed
                d.x += angle

                // Reset drop if it reaches the sky limit or goes off screen
                if (d.y > skyLimit) {
                    d.y = -d.length
                    d.x = Math.random() * (canvas.width + 200) - 100
                    d.speed = Math.random() * 12 + 6
                }
                if (d.x < -100) d.x = canvas.width + 100
            })

            animationFrameId.current = requestAnimationFrame(loop)
        }

        loop()

        return () => {
            window.removeEventListener("resize", resize)
            cancelAnimationFrame(animationFrameId.current)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-[15]"
        />
    )
}
