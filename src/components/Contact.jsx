import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'
import { profile } from '../data/profile'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[#38bdf8] text-sm mb-4 tracking-widest">06. What's Next?</p>
          <h2 className="text-4xl font-bold text-[#e8f4fd] mb-6">Get In Touch</h2>
          <p className="text-[#5f7d99] leading-relaxed mb-10">
            I'm open to interesting roles in robotics software, autonomous systems, and anything
            that pushes real hardware to do smarter things. If you have a project, opportunity, or
            just want to talk robots — reach out.
          </p>

          <a
            href={`mailto:${profile.contact.email}`}
            className="inline-block bg-transparent border border-[#38bdf8] text-[#38bdf8] px-8 py-4 rounded font-mono text-sm hover:bg-[#38bdf8]/10 transition-all duration-200 mb-12"
          >
            Say Hello
          </a>

          {/* Socials */}
          <div className="flex justify-center items-center gap-8">
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
                <Icon size={22} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
