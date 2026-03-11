import { lazy, Suspense, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import { profile } from '../data/profile'

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
  const sectionRef = useRef(null)
  const { scrollY } = useScroll()

  // Fade canvas + blobs as user scrolls: fully gone at 65% of viewport height
  const bgOpacity = useTransform(scrollY, (y) => {
    const vh = typeof window !== 'undefined' ? window.innerHeight : 800
    return Math.max(0, 1 - y / (vh * 0.65))
  })

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Three.js canvas + ambient blobs — fade out on scroll */}
      <motion.div className="absolute inset-0 z-0" style={{ opacity: bgOpacity }}>
        <Suspense fallback={null}>
          <ParticleField />
        </Suspense>

        <div
          className="blob w-[500px] h-[500px] bg-sky-500 animate-blob"
          style={{ top: '-10%', right: '-5%' }}
        />
        <div
          className="blob w-[400px] h-[400px] bg-indigo-600 animate-blob"
          style={{ bottom: '5%', left: '-10%', animationDelay: '3s' }}
        />
      </motion.div>

      {/* Gradient fade at the bottom so content below blends in */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-[1] pointer-events-none bg-gradient-to-t from-[#060c16] to-transparent" />

      {/* Content — z-10 sits above the canvas */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full pt-24 pb-16">
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
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#5f7d99] mt-5 mb-6"
          >
            Robotics Software Engineer
          </motion.h2>

          <motion.p
            variants={item}
            className="text-base sm:text-lg text-[#7a9bc4] max-w-lg leading-relaxed mb-10"
          >
            {profile.tagline}
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
