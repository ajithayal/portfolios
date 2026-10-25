import { useEffect, useRef } from 'react'
import { gsap } from '../lib/motion'
import { profile } from '../data'

export default function Loader({ done, onFinish }) {
  const root = useRef(null)
  const finish = useRef(onFinish)
  finish.current = onFinish

  useEffect(() => {
    if (!root.current) return
    try {
      const face = root.current.querySelector('.ld-face')
      const bubble = root.current.querySelector('.ld-bubble')
      const bar = root.current.querySelector('.ld-bar i')
      if (face) gsap.fromTo(face, { scale: 0, rotate: -20 }, { scale: 1, rotate: 0, duration: 1.2, ease: 'elastic.out(1, 0.55)' })
      if (bubble) gsap.fromTo(bubble, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, delay: 0.3, duration: 0.8, ease: 'back.out(2.5)' })
      if (bar) gsap.fromTo(bar, { scaleX: 0 }, { scaleX: 0.85, duration: 1.5, ease: 'power2.out' })
    } catch (e) {
      console.warn("Loader init warning:", e)
    }
  }, [])

  useEffect(() => {
    if (!done) return
    if (!root.current) {
      finish.current?.()
      return
    }

    try {
      const bar = root.current.querySelector('.ld-bar i')
      const items = root.current.querySelectorAll('.ld-face, .ld-bubble, .ld-bar')

      const tl = gsap.timeline({
        onComplete: () => {
          if (root.current) root.current.style.display = 'none'
        }
      })

      if (bar) tl.to(bar, { scaleX: 1, duration: 0.25 })
      if (items?.length) tl.to(items, { scale: 0.6, opacity: 0, duration: 0.3, stagger: 0.05, ease: 'back.in(2)' })
      tl.add(() => finish.current?.())
      tl.to(root.current, { yPercent: -100, duration: 0.7, ease: 'expo.inOut' }, '-=0.1')
    } catch (e) {
      console.warn("Loader exit warning:", e)
      finish.current?.()
      if (root.current) root.current.style.display = 'none'
    }
  }, [done])

  return (
    <div className="loader" ref={root} role="status" aria-label="Loading">
      <div className="ld-stack">
        <span className="ld-bubble hand">hi, it’s {profile.name}!</span>
        <img className="ld-face" src={profile.avatar} alt={profile.name} />
        <div className="ld-bar"><i /></div>
      </div>
    </div>
  )
}
