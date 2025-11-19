import { motion } from 'framer-motion'
import { Phone, Mail, Building2 } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white text-xl font-semibold">Book a discovery call</h3>
            <p className="text-blue-100/90 mt-2">Tell us about your project. We’ll prepare a tailored approach and timeline.</p>
            <form className="mt-6 grid gap-4">
              <input type="text" placeholder="Your name" className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/60" />
              <input type="email" placeholder="Email" className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-2 00/60" />
              <textarea placeholder="Project details" rows="4" className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/60" />
              <button type="button" className="rounded-xl bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 transition">Send inquiry</button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white text-xl font-semibold">Contact</h3>
            <div className="mt-4 space-y-3 text-blue-100/90">
              <div className="flex items-center gap-3"><Phone className="h-4 w-4" /> +31 6 1234 5678</div>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4" /> info@newrootshousing.nl</div>
              <div className="flex items-center gap-3"><Building2 className="h-4 w-4" /> Amsterdam, NL</div>
            </div>
            <div className="mt-6 rounded-xl border border-white/10 bg-slate-900/60 p-4">
              <p className="text-blue-100/80 text-sm">We typically respond within one business day.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
