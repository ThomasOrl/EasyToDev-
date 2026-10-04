import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section className="section bg-[#0d0d0d]">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-12"
        >
          Témoignages
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-[#111] border border-[#222]"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.avatarAlt || testimonial.name}
                  className={`w-12 h-12 ${
                    testimonial.avatarIsLogo
                      ? "rounded-xl border border-[#252525] bg-[#0b0b0b] p-1 object-contain"
                      : "rounded-full object-cover"
                  }`}
                  loading="lazy"
                />
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-[#a1a1a1]">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              <p className="text-[#a1a1a1] mb-4">{testimonial.content}</p>

              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
