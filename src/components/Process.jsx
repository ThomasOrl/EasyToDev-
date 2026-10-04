import { motion } from "framer-motion";
import { process } from "../data/content";

export default function Process() {
  return (
    <section id="process" className="section bg-[#0d0d0d]">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-12"
        >
          Un processus simple, du brief à la mise en ligne.
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8 process-grid">
          {process.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative process-step"
            >
              {index < process.length - 1 && (
                <div className="process-step__connector" aria-hidden="true" />
              )}

              <div className="process-step__number">
                {step.step}
              </div>
              <h3 className="text-lg font-medium mb-2">{step.title}</h3>
              <p className="text-[#a1a1a1] text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
