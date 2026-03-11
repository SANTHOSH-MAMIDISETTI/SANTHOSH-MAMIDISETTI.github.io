import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile } from '../data/profile'

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-[#38bdf8] text-sm">05.</span>
          <h2 className="text-3xl font-bold text-[#e8f4fd]">Achievements</h2>
          <div className="flex-1 h-px bg-[#172437]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {profile.achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="bg-[#101d2e] border border-[#172437] rounded-xl p-6 hover:border-[#38bdf8]/25 transition-colors"
            >
              <div className="text-3xl mb-3">{a.icon}</div>
              <h3 className="text-[#dce8f5] font-semibold text-base mb-1">{a.title}</h3>
              <p className="font-mono text-[#38bdf8] text-xs mb-3">{a.subtitle}</p>
              <p className="text-[#5f7d99] text-sm leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-[#e8f4fd] font-semibold text-lg mb-4">Education</h3>
          {profile.education.map((edu) => (
            <div
              key={edu.institution}
              className="bg-[#101d2e] border border-[#172437] rounded-xl p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h4 className="text-[#dce8f5] font-semibold">{edu.institution}</h4>
                <span className="font-mono text-xs text-[#5f7d99] shrink-0">{edu.range}</span>
              </div>
              <p className="text-[#7a9bc4] text-sm mb-1">{edu.degree}</p>
              <p className="font-mono text-xs text-[#5f7d99]">{edu.location}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
