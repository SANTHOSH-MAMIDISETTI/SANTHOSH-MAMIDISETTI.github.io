import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { profile } from '../data/profile'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <p className="font-mono text-[#38bdf8] text-sm mb-2 tracking-wider">Other work</p>
          <h2 className="text-3xl font-bold text-[#e8f4fd]">More Projects</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {profile.otherProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
            >
              <SmallCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SmallCard({ project }) {
  return (
    <div className="bg-[#101d2e] border border-[#172437] rounded-xl p-5 hover:border-[#38bdf8]/25 hover:-translate-y-0.5 transition-all duration-200 group h-full flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-7 h-7 text-[#38bdf8]"
        >
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub: ${project.title}`}
            className="text-[#5f7d99] hover:text-[#38bdf8] transition-colors"
          >
            <FiGithub size={16} />
          </a>
        )}
      </div>

      <h3 className="text-[#c8ddf0] font-semibold text-sm mb-2 leading-snug group-hover:text-white transition-colors">
        {project.title}
      </h3>

      <p className="text-[#4a6580] text-xs leading-relaxed mb-4 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.slice(0, 3).map((t) => (
          <span key={t} className="font-mono text-[11px] text-[#38bdf8]/70 tracking-wide">
            {t}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="font-mono text-[11px] text-[#38bdf8]/40">+{project.tech.length - 3}</span>
        )}
      </div>
    </div>
  )
}
