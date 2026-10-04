import { motion } from "framer-motion";
import { ArrowRight, Check, Clock3 } from "lucide-react";
import { pricing } from "../data/content";

export default function Pricing() {
  return (
    <section className="section bg-[#0d0d0d]">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-4"
        >
          Des offres simples et transparentes.
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6 mt-12 pricing-grid">
          {pricing.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`pricing-card${plan.recommended ? " pricing-card--recommended" : ""}`}
            >
              {plan.badge && (
                <span className="pricing-card__badge">{plan.badge}</span>
              )}

              <h3 className="pricing-card__name">{plan.name}</h3>
              <div className="pricing-card__price">
                <span>{plan.price}</span>
                <span className="pricing-card__currency">€</span>
                <span className="pricing-card__tax">/ HTVA</span>
              </div>
              <p className="pricing-card__description">{plan.description}</p>

              <ul className="pricing-card__features">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="pricing-card__check flex-shrink-0" />
                    <span className="text-[#a1a1a1]">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pricing-card__delivery">
                <Clock3 size={16} />
                <p>{plan.delivery}</p>
              </div>
              <a
                href="#contact"
                className={`btn pricing-card__cta ${
                  plan.recommended ? "btn-primary" : "btn-secondary"
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[#888] text-sm mt-8">
          Chaque projet étant différent, un devis personnalisé peut être proposé
          après discussion.
        </p>
      </div>
    </section>
  );
}
