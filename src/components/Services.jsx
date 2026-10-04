import { motion } from 'framer-motion'
import { Layout, Monitor, RefreshCw, TrendingUp } from 'lucide-react'
import { services } from '../data/content'

const icons = {
  layout: Layout,
  monitor: Monitor,
  'refresh-cw': RefreshCw,
  'trending-up': TrendingUp,
}

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-4"
        >
          Tout ce qu'il faut pour une présence web qui inspire confiance.
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => {
            const Icon = icons[service.icon]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[#111] border border-[#222] hover:border-[#333] transition-colors"
              >
                <Icon className="w-8 h-8 mb-4 text-white" />
                <h3 className="text-lg font-medium mb-2">{service.title}</h3>
                <p className="text-[#a1a1a1] text-sm">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}