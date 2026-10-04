import { Github, Linkedin, Mail } from 'lucide-react'
import { config } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-[#222] py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-xl font-semibold mb-2">{config.name}</div>
            <p className="text-sm text-[#a1a1a1]">
              Création de landing pages et sites vitrines modernes.
            </p>
          </div>

          <nav className="flex items-center gap-6">
            <a href="#services" className="text-sm text-[#a1a1a1] hover:text-white transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-sm text-[#a1a1a1] hover:text-white transition-colors">
              Projets
            </a>
            <a href="#process" className="text-sm text-[#a1a1a1] hover:text-white transition-colors">
              Processus
            </a>
            <a href="#faq" className="text-sm text-[#a1a1a1] hover:text-white transition-colors">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${config.email}`}
              className="p-2 hover:bg-[#111] rounded-lg transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={config.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-[#111] rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={config.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-[#111] rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#222] text-center text-sm text-[#666]">
          &copy; {new Date().getFullYear()} {config.name}. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}