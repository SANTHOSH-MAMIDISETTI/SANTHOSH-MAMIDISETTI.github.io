import { lazy, Suspense } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import FeaturedProjects from './components/FeaturedProjects'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Lazy-load Three.js — same chunk split as before, just global now
const GlobalScene = lazy(() => import('./components/GlobalScene'))

export default function App() {
  return (
    <div className="bg-[#060c16] text-[#dce8f5] min-h-screen overflow-x-hidden">
      {/* Single global Three.js scene — fixed behind all content */}
      <Suspense fallback={null}>
        <GlobalScene />
      </Suspense>

      <Nav />

      {/* z-10 ensures all page content renders above the fixed canvas */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <FeaturedProjects />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer className="relative z-10" />
    </div>
  )
}
