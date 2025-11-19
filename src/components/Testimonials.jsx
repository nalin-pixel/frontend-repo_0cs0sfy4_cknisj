import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'New Roots delivered our student housing on time and on budget. The energy performance exceeded expectations.',
    author: 'Project Lead, Rotterdam Municipality'
  },
  {
    quote: 'The off-site construction minimized disruption and the quality is fantastic. Residents love their homes.',
    author: 'Director, Housing Association Utrecht'
  },
  {
    quote: 'A partner that truly understands modern, sustainable housing. Fast, flexible, and transparent.',
    author: 'Developer, Amsterdam'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center">
          Partners say it best
        </motion.h2>
        <p className="mt-3 text-center text-blue-100/90 max-w-2xl mx-auto">Trusted by municipalities and housing associations for quality, speed, and sustainability.</p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <motion.div key={t.author} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-white/90">“{t.quote}”</p>
              <div className="mt-4 text-blue-200/80 text-sm">{t.author}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
