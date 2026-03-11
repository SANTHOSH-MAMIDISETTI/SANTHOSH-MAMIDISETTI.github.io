import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile } from '../data/profile'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-[#38bdf8] text-sm">04.</span>
          <h2 className="text-3xl font-bold text-[#e8f4fd]">Skills</h2>
          <div className="flex-1 h-px bg-[#172437]" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(profile.skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="bg-[#101d2e] border border-[#172437] rounded-xl p-5"
            >
              <h3 className="font-mono text-[#38bdf8] text-xs tracking-widest uppercase mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-[#7a9bc4] bg-[#0b1623] border border-[#172437] px-2.5 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
