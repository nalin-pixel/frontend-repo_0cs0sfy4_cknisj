import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Why from './components/Why'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(59,130,246,0.12),transparent_60%)] pointer-events-none" />
      <Navbar />
      <main>
        <Hero />
        <Why />
        <Projects />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/70 text-sm">© {new Date().getFullYear()} New Roots Housing. All rights reserved.</p>
          <div className="text-blue-200/70 text-sm">Built with modular precision and care.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
