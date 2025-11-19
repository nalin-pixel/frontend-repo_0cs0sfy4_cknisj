import { motion } from 'framer-motion'
import { Leaf, Factory, Timer, Droplets } from 'lucide-react'

const features = [
  {
    icon: Leaf,
    title: 'Sustainable by design',
    desc: 'Use of renewable materials, high-grade insulation, and smart energy systems to reduce footprint and costs.'
  },
  {
    icon: Factory,
    title: 'Off-site manufacturing',
    desc: 'Precision-built modules in controlled environments ensure quality, speed, and minimal neighborhood disruption.'
  },
  {
    icon: Timer,
    title: 'Rapid deployment',
    desc: 'From permitting to move-in, our streamlined process accelerates delivery without sacrificing quality.'
  },
  {
    icon: Droplets,
    title: 'Energy & water efficiency',
    desc: 'A++ systems, heat recovery, and smart fixtures keep operational costs low for decades.'
  }
]

export default function Why() {
  return (
    <section id="why" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center">
          Why choose New Roots Housing?
        </motion.h2>
        <p className="mt-3 text-center text-blue-100/90 max-w-2xl mx-auto">Modern modular housing built for speed, quality, and sustainability — ideal for municipalities, housing associations, and developers.</p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20 border border-blue-400/20 text-blue-300 mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-blue-100/80 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
