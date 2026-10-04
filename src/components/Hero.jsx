import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6"
          >
            Des sites web qui transforment les visiteurs en clients.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-[#a1a1a1] max-w-2xl mb-10"
          >
            Conception et développement de sites web et landing pages sur
            mesure, optimisés et pensés pour attirer de nouveaux clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#portfolio" className="btn btn-secondary">
              Voir mes projets
            </a>
            <a href="#contact" className="btn btn-primary">
              Démarrer un projet
              <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm text-[#888] mt-8"
          >
            Design sur mesure • Développement React • Responsive • Optimisé pour
            la conversion
          </motion.p>
        </div>
      </div>
    </section>
  );
}
