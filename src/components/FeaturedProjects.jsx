import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { profile } from '../data/profile'

export default function FeaturedProjects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="font-mono text-[#38bdf8] text-sm">03.</span>
          <h2 className="text-3xl font-bold text-[#e8f4fd]">Featured Projects</h2>
          <div className="flex-1 h-px bg-[#172437]" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {profile.featuredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="bg-[#101d2e] border border-[#172437] rounded-xl overflow-hidden hover:border-[#38bdf8]/30 hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col">
      <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-[#dce8f5] font-semibold text-lg leading-snug group-hover:text-white transition-colors">
            {project.title}
          </h3>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub: ${project.title}`}
              className="text-[#5f7d99] hover:text-[#38bdf8] transition-colors shrink-0 mt-0.5"
            >
              <FiGithub size={18} />
            </a>
          )}
        </div>

        <p className="text-[#5f7d99] text-sm leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-xs text-[#38bdf8] bg-[#38bdf8]/8 border border-[#38bdf8]/15 px-2.5 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
