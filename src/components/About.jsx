import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { profile } from '../data/profile'

export default function About() {
  const ref = useRef(null)

  const cards = [
    { label: 'Current Role', value: profile.experience[0].role, sub: profile.experience[0].company },
    { label: 'Stack', value: 'C++ · Python · ROS2', sub: 'Behavior Trees, Safety Systems' },
    {
      label: 'Education',
      value: 'B.Tech CSE (AI)',
      sub: `${profile.education[0].institution} · ${profile.education[0].range.split('–')[1].trim().split(' ').pop()}`,
    },
    {
      label: 'Competition',
      value: profile.achievements[0].title.split('—')[0].trim(),
      sub: profile.achievements[0].title.split('—')[1].trim(),
    },
  ]
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 px-6">
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

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Left: bio + roles */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3 flex flex-col gap-6"
          >
            <p className="text-[#7a9bc4] leading-relaxed text-base">
              {profile.bio}
            </p>

            <div className="flex flex-col gap-2 border-l-2 border-[#172437] pl-4">
              {profile.responsibilities.map((r) => (
                <p key={r.role} className="text-sm text-[#5f7d99]">
                  <span className="text-[#dce8f5] font-medium">{r.role}</span>
                  <span className="mx-1.5 text-[#2a4060]">·</span>
                  {r.org}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Right: 2×2 info cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 grid grid-cols-2 gap-3"
          >
            {cards.map(({ label, value, sub }) => (
              <div key={label} className="bg-[#101d2e] border border-[#172437] rounded-xl p-4">
                <p className="font-mono text-[10px] text-[#38bdf8] mb-1.5 tracking-wider uppercase">
                  {label}
                </p>
                <p className="text-[#dce8f5] font-semibold text-sm leading-snug">{value}</p>
                <p className="text-[#5f7d99] text-xs mt-0.5 leading-snug">{sub}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
