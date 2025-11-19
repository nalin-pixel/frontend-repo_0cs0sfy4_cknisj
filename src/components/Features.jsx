import { motion } from 'framer-motion'
import { Leaf, ShieldCheck, Clock, Cog } from 'lucide-react'

const features = [
  {
    icon: Leaf,
    title: 'Sustainable by design',
    desc: 'Low‑impact materials and circular construction to minimize carbon footprint.'
  },
  {
    icon: ShieldCheck,
    title: 'Durable & safe',
    desc: 'Engineered for safety, longevity, and low maintenance costs.'
  },
  {
    icon: Clock,
    title: 'Rapid delivery',
    desc: 'Industrialized building methods reduce timeline and disruption.'
  },
  {
    icon: Cog,
    title: 'Flexible systems',
    desc: 'Modular layouts that evolve with communities and families.'
  },
]

export default function Features() {
  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(16,185,129,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">Building better, faster, greener</h2>
          <p className="mt-4 text-slate-300/80">From concept to keys, we streamline the path to high‑quality affordable housing.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-6 rounded-2xl bg-slate-900/60 border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-emerald-400/20 text-emerald-300 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300/80 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
