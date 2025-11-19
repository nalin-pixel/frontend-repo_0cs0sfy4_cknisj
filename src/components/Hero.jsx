import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(59,130,246,0.25),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-6">
            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Affordable, Sustainable Living with New Roots Housing
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-6 text-lg text-blue-100/90">
              We design and deliver modern modular homes that are fast to build, energy-efficient, and beautifully designed. Perfect for municipalities, housing associations, and private clients.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-white font-medium shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition">Book a discovery call</a>
              <a href="#projects" className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-white/90 hover:text-white hover:border-white/30 transition">See our projects</a>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-center">
              {[
                ['50% faster', 'construction timelines'],
                ['A++ energy', 'ratings and insulation'],
                ['10-year', 'structural warranty'],
              ].map(([stat, label]) => (
                <motion.div key={stat} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xl font-semibold text-white">{stat}</div>
                  <div className="text-sm text-blue-100/80">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-slate-950">
            <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
