import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { useScroll } from '../hooks/useScroll'
import { config } from '../data/content'

export default function Navbar() {
  const scrolled = useScroll()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Projets' },
    { href: '#process', label: 'Processus' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-[#222]' : 'bg-transparent'
        }`}
      >
        <nav className="container flex items-center justify-between h-20">
          <a href="#" className="text-xl font-semibold tracking-tight">
            {config.name}
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#a1a1a1] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary text-sm"
            >
              Parler de mon projet
              <ArrowRight size={16} />
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </motion.header>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-[#0a0a0a] md:hidden"
        >
          <div className="container flex flex-col justify-center h-full gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-2xl font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary text-lg mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Parler de mon projet
              <ArrowRight size={20} />
            </a>
          </div>
        </motion.div>
      )}
    </>
  )
}