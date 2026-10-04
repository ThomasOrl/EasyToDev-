import { motion } from "framer-motion";
import {
  Palette,
  Target,
  Code,
  Smartphone,
  Zap,
  MessageCircle,
} from "lucide-react";
import { whyMe } from "../data/content";

const icons = {
  palette: Palette,
  target: Target,
  code: Code,
  smartphone: Smartphone,
  zap: Zap,
  "message-circle": MessageCircle,
};

export default function WhyMe() {
  return (
    <section className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-12"
        >
          Pourquoi travailler avec moi ?
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyMe.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[#111] border border-[#222] transition-colors duration-300 hover:border-[#383838]"
              >
                <Icon className="w-8 h-8 mb-4 text-white" />
                <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-[#a1a1a1] text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
