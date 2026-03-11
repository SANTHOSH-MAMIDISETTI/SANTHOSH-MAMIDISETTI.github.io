import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { profile } from '../data/profile'

const highlights = [
  { label: 'Current Role', value: 'Robot Software Engr', sub: 'Clutterbot Technologies' },
  { label: 'Primary Stack', value: 'C++ · Python · ROS2', sub: 'Behavior Trees, Safety Systems' },
  { label: 'Education', value: 'B.Tech CSE (AI)', sub: 'Amrita Vishwa Vidyapeetham' },
  { label: 'Competition', value: 'IDC Robocon 2024', sub: '1st Runner-Up' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 px-6 bg-[#0a1220]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-[#38bdf8] text-sm">01.</span>
          <h2 className="text-3xl font-bold text-[#e8f4fd]">About</h2>
          <div className="flex-1 h-px bg-[#172437]" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Bio — single tight paragraph + badges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 flex flex-col gap-6"
          >
            <p className="text-[#7a9bc4] leading-relaxed text-base">
              {profile.bio}
            </p>

            <div className="flex flex-wrap gap-2">
              {profile.responsibilities.map((r) => (
                <span
                  key={r.role}
                  className="font-mono text-xs text-[#38bdf8] bg-[#38bdf8]/10 border border-[#38bdf8]/20 px-3 py-1.5 rounded-full"
                >
                  {r.role} · {r.org}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 grid grid-cols-1 gap-3"
          >
            {highlights.map(({ label, value, sub }) => (
              <div key={label} className="bg-[#101d2e] border border-[#172437] rounded-xl p-4">
                <p className="font-mono text-xs text-[#38bdf8] mb-1 tracking-wider uppercase">
                  {label}
                </p>
                <p className="text-[#dce8f5] font-semibold text-sm leading-snug">{value}</p>
                <p className="text-[#5f7d99] text-xs mt-0.5">{sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
