import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import { profile } from '../data/profile'

// Lazy-load Three.js — keeps initial bundle small, loads after hero renders
const ParticleField = lazy(() => import('./ParticleField'))

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Three.js particle network — lazy loaded, degrades to nothing if WebGL unavailable */}
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>

      {/* Soft ambient blobs behind the particles */}
      <div
        className="blob w-[500px] h-[500px] bg-sky-500 animate-blob"
        style={{ top: '-10%', right: '-5%' }}
      />
      <div
        className="blob w-[400px] h-[400px] bg-indigo-600 animate-blob"
        style={{ bottom: '5%', left: '-10%', animationDelay: '3s' }}
      />

      {/* Content — z-10 sits above the canvas */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16 w-full">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="font-mono text-[#38bdf8] text-sm mb-4 tracking-widest">
            Hi, I'm
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#e8f4fd] leading-none tracking-tight mb-3"
          >
            Santhosh
            <br />
            Mamidisetti
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5f7d99] mt-4 mb-8"
          >
            Robotics Software Engineer
          </motion.h2>

          <motion.p
            variants={item}
            className="text-base sm:text-lg text-[#7a9bc4] max-w-xl leading-relaxed mb-10"
          >
            I build robots that make reliable decisions — designing behavior trees, safety
            systems, and perception pipelines that hold up in the real world.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#projects"
              className="bg-[#38bdf8] text-[#060c16] px-6 py-3 rounded font-semibold text-sm hover:bg-[#7dd3fc] transition-colors duration-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-[#38bdf8]/50 text-[#38bdf8] px-6 py-3 rounded font-semibold text-sm hover:bg-[#38bdf8]/10 transition-colors duration-200"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5f7d99] hover:text-[#38bdf8] text-sm font-mono transition-colors duration-200"
            >
              Resume ↗
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-6">
            {[
              { href: profile.socials.github, Icon: FiGithub, label: 'GitHub' },
              { href: profile.socials.linkedin, Icon: FiLinkedin, label: 'LinkedIn' },
              { href: profile.socials.twitter, Icon: FiTwitter, label: 'Twitter' },
              { href: `mailto:${profile.contact.email}`, Icon: FiMail, label: 'Email' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[#5f7d99] hover:text-[#38bdf8] transition-colors duration-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-[#2a4060] text-xs font-mono tracking-widest">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-0.5 h-6 bg-gradient-to-b from-[#38bdf8]/40 to-transparent rounded"
          />
        </motion.div>
      </div>
    </section>
  )
}
