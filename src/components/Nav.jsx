import { useEffect, useRef, useState } from 'react'
import { gsap, goTo } from '../lib/motion'
import { profile } from '../data'

const links = [['About', '#about'], ['Work', '#work'], ['Journey', '#journey'], ['Toolbox', '#skills'], ['Milestones', '#milestones']]

export default function Nav({ ready }) {
  const ref = useRef(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (ready) gsap.from(ref.current, { y: -80, opacity: 0, duration: 1.1, delay: 0.3 })
  }, [ready])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const handleResize = () => {
      if (window.innerWidth > 960) setOpen(false)
    }
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
    document.addEventListener('pointerdown', handleClickOutside)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('pointerdown', handleClickOutside)
    }
  }, [])

  const go = (e, h) => {
    e.preventDefault()
    setOpen(false)
    goTo(h)
  }

  return (
    <header className={`nav ${open ? 'is-open' : ''}`} ref={ref}>
      <a href="#top" className="nav-brand" onClick={(e) => go(e, '#top')}>
        <img src={profile.avatar} alt={profile.name} />
        <span>{profile.name.toLowerCase()}<em>.</em></span>
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {links.map(([l, h]) => <a key={h} href={h} onClick={(e) => go(e, h)}>{l}</a>)}
      </nav>
      <div className="nav-actions" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <a href="#contact" className="btn btn-coral nav-cta" onClick={(e) => go(e, '#contact')}>Let’s chat <span>✦</span></a>
      </div>
      <button
        className="nav-burger"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <i /><i />
      </button>
      <div className="nav-sheet" aria-hidden={!open}>
        {links.concat([['Contact', '#contact']]).map(([l, h]) => (
          <a key={h} href={h} onClick={(e) => { if (h.startsWith('#')) go(e, h) }}>
            {l}
          </a>
        ))}
      </div>
    </header>
  )
}
