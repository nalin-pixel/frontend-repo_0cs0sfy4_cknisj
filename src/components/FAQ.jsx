import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How fast can you deliver a project?',
    a: 'Most projects are delivered in 3-6 months depending on permitting and scale. Off-site manufacturing significantly reduces on-site time.'
  },
  {
    q: 'What about energy performance?',
    a: 'Our homes are designed for A++ energy ratings with high insulation, heat pumps, and optional solar integration.'
  },
  {
    q: 'Do you work with municipalities and housing associations?',
    a: 'Yes. We partner closely with public sector clients to meet regulatory, quality, and budget requirements.'
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center">
          Frequently asked questions
        </motion.h2>

        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
          {faqs.map((item, idx) => {
            const active = open === idx
            return (
              <div key={item.q} className="p-5">
                <button onClick={() => setOpen(active ? -1 : idx)} className="w-full flex items-center justify-between text-left">
                  <span className="text-white font-medium">{item.q}</span>
                  <ChevronDown className={`h-5 w-5 text-blue-200/80 transition-transform ${active ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="text-blue-100/90 overflow-hidden mt-3">
                      {item.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
