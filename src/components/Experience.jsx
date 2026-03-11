import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { profile } from '../data/profile'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-[#38bdf8] text-sm">02.</span>
          <h2 className="text-3xl font-bold text-[#e8f4fd]">Experience</h2>
          <div className="flex-1 h-px bg-[#172437]" />
        </motion.div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-[#172437] hidden md:block" />

          <div className="space-y-10">
            {profile.experience.map((job, i) => (
              <motion.div
                key={job.company + job.range}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
                className="md:pl-8 relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2.5 w-2 h-2 rounded-full bg-[#38bdf8] -translate-x-[3px] hidden md:block" />

                <div className="bg-[#101d2e] border border-[#172437] rounded-xl p-6 hover:border-[#38bdf8]/25 transition-colors duration-200">
                  {/* Role + company */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                    <h3 className="text-lg font-semibold text-[#e8f4fd] leading-snug">
                      {job.role}
                      <span className="text-[#38bdf8]"> @ </span>
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#38bdf8] hover:underline underline-offset-2"
                      >
                        {job.companyFull ?? job.company}
                      </a>
                    </h3>
                    <span className="font-mono text-xs text-[#5f7d99] shrink-0">{job.range}</span>
                  </div>

                  {/* Location */}
                  <p className="font-mono text-xs text-[#3a5570] mb-5">{job.location}</p>

                  {/* Bullets */}
                  <ul className="space-y-2.5">
                    {job.points.map((point, j) => (
                      <li key={j} className="flex gap-3 text-[#7a9bc4] text-sm leading-relaxed">
                        <span className="text-[#38bdf8] mt-[3px] shrink-0 text-xs">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
