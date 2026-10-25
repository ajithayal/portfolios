import { useRef } from 'react'
import { gsap, useGSAP, goTo } from '../lib/motion'
import { profile, heroCounts, lookFrames } from '../data'
import LookAt from './LookAt'
import { Squiggle, Spark } from './Bits'

export default function Hero({ ready }) {
  const root = useRef(null)

  useGSAP(() => {
    if (!ready) return
    try {
      const tl = gsap.timeline()
      if (document.querySelector('.hr-hello')) tl.from('.hr-hello', { y: 20, opacity: 0, duration: 0.8 })
      if (document.querySelector('.hr-name .ch')) tl.from('.hr-name .ch', { yPercent: 110, rotate: 8, stagger: 0.05, duration: 1.1 }, 0.1)
      if (document.querySelector('.hr-name .squiggle path')) tl.to('.hr-name .squiggle path', { strokeDashoffset: 0, duration: 1.2, ease: 'power2.inOut' }, 0.6)
      if (document.querySelector('.hr-sub')) tl.from('.hr-sub, .hr-counts, .hr-ctas', { y: 30, opacity: 0, stagger: 0.1, duration: 1 }, 0.4)
      if (document.querySelector('.hr-blob')) tl.from('.hr-blob', { scale: 0.6, opacity: 0, duration: 1.4, ease: 'elastic.out(1, 0.7)' }, 0.1)
      if (document.querySelector('.hr-person')) tl.from('.hr-person', { yPercent: 30, opacity: 0, duration: 1.2, ease: 'back.out(1.4)' }, 0.3)
    } catch (e) {
      console.warn("Hero animation warning:", e)
    }
  }, { scope: root, dependencies: [ready] })

  useGSAP(() => {
    gsap.to('.hr-visual', { yPercent: -8, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true } })
  }, { scope: root })

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hr-grid">
        <div className="hr-copy">
          <p className="hr-hello hand">Hi there, I’m <span aria-hidden="true">👋</span></p>
          <h1 className="hr-name">
            <span className="hr-name-text">{profile.name.split('').map((c, i) => <span className="ch-mask" key={i}><span className="ch">{c}</span></span>)}</span>
            <Squiggle />
          </h1>
          <p className="hr-sub">
            <b>{profile.role}</b> <Spark /> {profile.intro}
          </p>
          <ul className="hr-counts" aria-label="Highlights">
            {heroCounts.map((c) => <li key={c.label}><b>{c.value}</b><span>{c.label}</span></li>)}
          </ul>
          <div className="hr-ctas">
            <button className="btn btn-coral" onClick={() => goTo('#work')}>See my work <span>→</span></button>
            {profile.resume
              ? <a className="btn btn-line" href={profile.resume} download="Ajith_A_Resume.pdf">Résumé (.pdf) ↓</a>
              : <button className="btn btn-line" onClick={() => goTo('#contact')}>Message me</button>}
          </div>
        </div>

        <div className="hr-visual">
          <div className="hr-blob" />
          <LookAt className="hr-person" label={profile.full} />
        </div>
      </div>
    </section>
  )
}
