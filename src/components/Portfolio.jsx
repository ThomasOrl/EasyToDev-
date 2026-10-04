import { motion } from "framer-motion";
import { ArrowLeftRight, ExternalLink } from "lucide-react";
import { portfolio } from "../data/content";

export default function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container portfolio-heading">
        <div className="portfolio-heading__title">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="portfolio-kicker"
          >
            Une sélection de projets
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title portfolio-title"
          >
            Le numérique, pensé dans les moindres détails.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="portfolio-interaction-hint"
          >
            <ArrowLeftRight size={14} aria-hidden="true" />
            <span>Survolez les projets latéraux pour les mettre en avant</span>
          </motion.p>
        </div>
      </div>

      <div className="container portfolio-container">
        <div className="portfolio-grid">
          {portfolio.map((project, index) => (
            <article
              key={project.title}
              className="portfolio-project-card group"
            >
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-project-card__preview relative block w-full overflow-hidden rounded-xl mb-4 text-left"
                aria-label={`Visiter le site ${project.title} (nouvel onglet)`}
                whileHover={{ scale: 1.025 }}
                whileFocus={{ scale: 1.025 }}
                transition={{ type: "spring", stiffness: 220, damping: 28 }}
              >
                <img
                  src={project.image}
                  alt=""
                  className="portfolio-project-card__image w-full aspect-video object-cover transition-all duration-500"
                  loading="lazy"
                />
                <span
                  className="portfolio-project-card__hint"
                  aria-hidden="true"
                >
                  <span className="portfolio-project-card__hint-label">
                    <ExternalLink size={16} />
                    Visiter le site
                    <svg
                      className="portfolio-project-card__hint-border"
                      viewBox="0 0 240 60"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M120 58 H212 Q238 58 238 32 V28 Q238 2 212 2 H28 Q2 2 2 28 V32 Q2 58 28 58 H120"
                        pathLength="1"
                      />
                    </svg>
                  </span>
                </span>
              </motion.a>

              <div className="portfolio-project-card__category">
                <span className="portfolio-project-card__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <h3 className="portfolio-project-card__title">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-project-card__details-trigger"
                >
                  {project.title}
                </a>
              </h3>
              <p className="portfolio-project-card__description">
                {project.description}
              </p>

              <div className="portfolio-project-card__tags">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-[#111] border border-[#222] rounded-full text-xs text-[#a1a1a1]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}
