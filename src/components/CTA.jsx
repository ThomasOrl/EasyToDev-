import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="contact-cta p-12 md:p-20 rounded-3xl bg-[#111] border border-[#222] text-center"
        >
          <p className="contact-cta__eyebrow">VOTRE PROJET COMMENCE ICI</p>
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 contact-cta__title">
            Donnons vie à votre projet.
          </h2>
          <p className="text-xl text-[#a1a1a1] max-w-2xl mx-auto mb-10">
            Parlons de votre projet et de vos objectifs.
          </p>
          <a
            href="mailto:contact@thomasorls.be?subject=Parlons%20de%20mon%20projet"
            className="btn btn-primary text-lg contact-cta__button"
          >
            Parler de mon projet
            <ArrowRight size={20} />
          </a>
          <div className="contact-cta__details">
            <a href="mailto:contact@thomasorls.be">contact@thomasorls.be</a>
            <span aria-hidden="true">·</span>
            <span>Réponse sous 48 h</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
