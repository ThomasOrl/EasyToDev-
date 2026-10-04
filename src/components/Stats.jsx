import { motion } from 'framer-motion'
import { stats } from '../data/content'

export default function Stats() {
  return (
    <section className="section border-t border-[#222]">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-semibold mb-2">{stat.value}</div>
              <div className="text-[#a1a1a1] text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}