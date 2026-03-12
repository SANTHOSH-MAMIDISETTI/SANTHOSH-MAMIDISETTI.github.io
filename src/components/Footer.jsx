import { profile } from '../data/profile'

export default function Footer({ className = '' }) {
  return (
    <footer className={`py-8 px-6 border-t border-[#172437] ${className}`}>
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="font-mono text-xs text-[#2a4060]">
          Designed &amp; built by Santhosh Mamidisetti
        </p>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-[#2a4060] hover:text-[#38bdf8] transition-colors"
        >
          GitHub ↗
        </a>
      </div>
    </footer>
  )
}
