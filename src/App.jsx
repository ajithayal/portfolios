import { useEffect, useState } from 'react'
import { startScroll, lenis, ScrollTrigger } from './lib/motion'
import { profile, lookFrames } from './data'
import Loader from './components/Loader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Journey from './components/Journey'
import Skills from './components/Skills'
import Milestones from './components/Milestones'
import Contact from './components/Contact'

const BASE = import.meta.env.BASE_URL
const load = (src) => new Promise((r) => {
  const i = new Image()
  i.onload = i.onerror = () => r()
  i.src = src
  if (i.complete) r()
})

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    try {
      startScroll()
    } catch (e) {
      console.warn("startScroll warning:", e)
    }

    const dir = innerWidth < 820 ? 'sm' : 'lg'
    const t0 = performance.now()

    // Safety timeout: guaranteed transition after 1.5s
    const fallbackTimer = setTimeout(() => {
      setLoaded(true)
    }, 1500)

    Promise.all([
      document.fonts?.ready || Promise.resolve(),
      load(BASE + profile.avatar),
      load(BASE + 'img/photos/portrait-hero.jpg'),
    ]).then(() => {
      clearTimeout(fallbackTimer)
      setTimeout(() => setLoaded(true), Math.max(0, 800 - (performance.now() - t0)))
    }).catch(() => {
      setLoaded(true)
    })

    return () => clearTimeout(fallbackTimer)
  }, [])

  const finish = () => {
    setReady(true)
    try {
      lenis?.start()
      ScrollTrigger.refresh()
    } catch (e) {
      console.warn("Lenis start warning:", e)
    }
  }

  // Safety fallback for ready state
  useEffect(() => {
    if (loaded && !ready) {
      const t = setTimeout(() => finish(), 1000)
      return () => clearTimeout(t)
    }
  }, [loaded, ready])

  return (
    <>
      <Loader done={loaded} onFinish={finish} />
      <Nav ready={ready} />
      <main>
        <Hero ready={ready} />
        <About />
        <Work />
        <Journey />
        <Skills />
        <Milestones />
        <Contact />
      </main>
    </>
  )
}
