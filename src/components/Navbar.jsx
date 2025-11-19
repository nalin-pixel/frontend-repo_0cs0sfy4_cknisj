import { useState } from 'react'
import { Menu, X, Phone, Mail, Home } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home', icon: Home },
    { label: 'Why New Roots', href: '#why' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-2xl shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="inline-flex items-center gap-3">
              <img src="/flame-icon.svg" alt="New Roots Housing" className="h-8 w-8" />
              <span className="text-white font-semibold tracking-tight text-lg">New Roots Housing</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-200/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl transition-colors">
                <Phone className="h-4 w-4" /> Book a call
              </a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-200/90 hover:text-white transition-colors">
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl transition-colors">
                  <Phone className="h-4 w-4" /> Book a call
                </a>
                <a href="mailto:info@newrootshousing.nl" className="inline-flex items-center gap-2 text-slate-200/80 hover:text-white">
                  <Mail className="h-4 w-4" /> info@newrootshousing.nl
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
