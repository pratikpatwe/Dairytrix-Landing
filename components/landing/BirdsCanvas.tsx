"use client"

import React, { useEffect, useRef } from "react"

interface Boid {
    x: number
    y: number
    vx: number
    vy: number
    angle: number
}

export default function BirdsCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const boids = useRef<Boid[]>([])
    const mouse = useRef({ x: -1000, y: -1000 })
    const lastMouseMove = useRef(0)
    const animationFrameId = useRef<number>(0)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const initBoids = () => {
            const count = 40
            boids.current = Array.from({ length: count }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * (canvas.height * 0.7), // Spawn in upper 70%
                vx: (Math.random() * 2) + 2,
                vy: (Math.random() - 0.5) * 0.5,
                angle: 0
            }))
        }

        resize()
        initBoids()

        window.addEventListener("resize", resize)

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY }
            lastMouseMove.current = Date.now()
        }

        window.addEventListener("mousemove", handleMouseMove)

        const loop = () => {
            if (!ctx) return
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const now = Date.now()
            const isMouseActive = now - lastMouseMove.current < 2000
            const landThreshold = canvas.height * 0.8 // 80% height is 'land' (20% restricted)

            boids.current.forEach((b) => {
                // 1. Attraction to mouse
                const dx = mouse.current.x - b.x
                const dy = mouse.current.y - b.y
                const dist = Math.sqrt(dx * dx + dy * dy)

                if (isMouseActive && dist < 500) {
                    b.vx += (dx / dist) * 0.12
                    b.vy += (dy / dist) * 0.12
                }

                // 2. Natural Flow (Left to Right) when idle
                if (!isMouseActive) {
                    b.vx += 0.03 // Constant wind to the right
                    b.vy *= 0.98 // Stabilize vertical movement
                }

                // 2. Land Avoidance (Stay away from bottom 20%)
                if (b.y > landThreshold - 50) {
                    // Start pushing up even before hitting the threshold for a smoother bounce
                    const depth = (b.y - (landThreshold - 50)) / 50
                    b.vy -= depth * 0.8
                }

                // 3. Cohesion & Alignment (Simplified swarming)
                boids.current.forEach((other) => {
                    if (b === other) return
                    const dxo = other.x - b.x
                    const dyo = other.y - b.y
                    const disto = Math.sqrt(dxo * dxo + dyo * dyo)

                    if (disto < 40) {
                        b.vx -= dxo * 0.015
                        b.vy -= dyo * 0.015
                    } else if (disto < 120) {
                        b.vx += other.vx * 0.02
                        b.vy += other.vy * 0.02
                    }
                })

                // Speed limit - dynamic based on activity
                const speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy)
                const maxSpeed = isMouseActive ? 3.5 : 0.8
                const minSpeed = isMouseActive ? 1.0 : 0.4

                if (speed > maxSpeed) {
                    b.vx = (b.vx / speed) * maxSpeed
                    b.vy = (b.vy / speed) * maxSpeed
                } else if (speed < minSpeed) {
                    b.vx = (b.vx / speed) * minSpeed
                    b.vy = (b.vy / speed) * minSpeed
                }

                // Update position
                b.x += b.vx
                b.y += b.vy

                // Border wrap
                if (b.x < -30) b.x = canvas.width + 30
                if (b.x > canvas.width + 30) b.x = -30

                // Vertical wrap: Stay within the top 80% (sky)
                if (b.y < -30) b.y = landThreshold
                if (b.y > landThreshold + 20) b.y = -20

                // Draw minimal bird (geometric)
                b.angle = Math.atan2(b.vy, b.vx)
                ctx.save()
                ctx.translate(b.x, b.y)
                ctx.rotate(b.angle)

                // Wings flap simulation using time
                const flapSpeed = isMouseActive ? 0.01 : 0.005
                const flap = Math.sin(now * flapSpeed) * 3

                ctx.beginPath()
                ctx.strokeStyle = "rgba(0, 0, 0, 0.2)"
                ctx.lineWidth = 1
                ctx.moveTo(-4, -2 + flap)
                ctx.lineTo(0, 0)
                ctx.lineTo(-4, 2 - flap)
                ctx.stroke()

                ctx.restore()
            })

            animationFrameId.current = requestAnimationFrame(loop)
        }

        loop()

        return () => {
            window.removeEventListener("resize", resize)
            window.removeEventListener("mousemove", handleMouseMove)
            cancelAnimationFrame(animationFrameId.current)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-[15]"
            style={{ mixBlendMode: 'multiply' }}
        />
    )
}
