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

export default function App() {
  return (
    <div className="bg-[#060c16] text-[#dce8f5] min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <FeaturedProjects />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
