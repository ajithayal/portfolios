import { useEffect, useRef } from 'react'

const BASE = import.meta.env.BASE_URL

/**
 * Clean, High-Definition Cutout Portrait of Ajith A:
 * - Solid, authentic photographic clarity (zero eye distortion or cartoon shapes).
 * - Subtle natural 3D perspective tilt on pointer movement.
 * - Perfectly aligned within the peach hero blob.
 */
export default function LookAt({ className = "", label = "Ajith A" }) {
  const containerRef = useRef(null)

  useEffect(() => {
    let targetX = 0
    let targetY = 0
    let curX = 0
    let curY = 0
    let animId = null

    const handlePointerMove = (e) => {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      if (!rect.width || !rect.height) return

      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height * 0.35

      const normX = Math.min(Math.max((e.clientX - centerX) / (window.innerWidth * 0.5), -1), 1)
      const normY = Math.min(Math.max((e.clientY - centerY) / (window.innerHeight * 0.5), -1), 1)

      // Subtle gentle 3D perspective tilt
      targetX = normX * 6.0   // rotateY
      targetY = -normY * 4.5  // rotateX
    }

    const handlePointerLeave = () => {
      targetX = 0
      targetY = 0
    }

    const loop = () => {
      curX += (targetX - curX) * 0.08
      curY += (targetY - curY) * 0.08

      if (containerRef.current) {
        containerRef.current.style.transform = `perspective(1000px) rotateX(${curY.toFixed(2)}deg) rotateY(${curX.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`
      }

      animId = requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.addEventListener('pointerleave', handlePointerLeave)
    animId = requestAnimationFrame(loop)

    return () => {
      if (animId) cancelAnimationFrame(animId)
      window.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`lookat-portrait ${className}`}
      aria-label={label}
      role="img"
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: '-14px',
        width: '100%',
        height: 'calc(100% + 14px)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        willChange: 'transform',
        transformStyle: 'preserve-3d',
        pointerEvents: 'none'
      }}
    >
      <img
        src={`${BASE}img/photos/ajith-hero-sticker.png`}
        alt={label}
        style={{
          width: 'auto',
          maxWidth: '92%',
          maxHeight: '94%',
          objectFit: 'contain',
          objectPosition: 'bottom center',
          display: 'block',
          filter: 'drop-shadow(0 26px 36px rgba(255, 128, 102, 0.38))',
          pointerEvents: 'auto'
        }}
      />
    </div>
  )
}
