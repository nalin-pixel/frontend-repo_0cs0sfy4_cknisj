import { Mail, Calendar } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_90%_10%,rgba(16,185,129,0.15),transparent)]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur p-8 md:p-12">
          <div className="md:flex items-center justify-between gap-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s shape your next housing project</h2>
              <p className="mt-3 text-slate-300/80 max-w-xl">Tell us about your goals, timelines and constraints. We’ll return with feasibility insights and a clear plan.</p>
            </div>
            <div className="mt-6 md:mt-0 flex gap-3">
              <a href="mailto:info@newrootshousing.nl" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-400 text-slate-900 font-semibold hover:brightness-110 transition"><Mail className="w-4 h-4" /> Email us</a>
              <a href="https://cal.com" target="_blank" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"><Calendar className="w-4 h-4" /> Book a call</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
