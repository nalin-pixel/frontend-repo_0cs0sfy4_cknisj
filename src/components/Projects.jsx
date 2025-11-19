import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Micro-living Urban Cluster',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop',
    meta: '32 units • Amsterdam',
  },
  {
    title: 'Green Suburban Community',
    image: 'https://images.unsplash.com/photo-1758304481122-996ae8ffbe7b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHcmVlbiUyMFN1YnVyYmFuJTIwQ29tbXVuaXR5fGVufDB8MHx8fDE3NjM1MjkyMTJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    meta: '48 units • Utrecht',
  },
  {
    title: 'Student Housing Complex',
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=1600&auto=format&fit=crop',
    meta: '120 units • Rotterdam',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center">
          Featured projects
        </motion.h2>
        <p className="mt-3 text-center text-blue-100/90 max-w-2xl mx-auto">A selection of recent modular housing developments we delivered with partners across the Netherlands.</p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={p.image} alt={p.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="p-5">
                <div className="text-blue-200/80 text-sm">{p.meta}</div>
                <div className="text-white font-semibold mt-1">{p.title}</div>
              </div>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
