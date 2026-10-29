
import { motion } from "framer-motion";
import {
  Droplets,
  Target,
  Lightbulb,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "Make water measurement easier to understand through practical smart metering solutions.",
  },
  {
    icon: Lightbulb,
    title: "Our Approach",
    description:
      "Focus on useful technology, clear product information, and solutions shaped around customer needs.",
  },
  {
    icon: ShieldCheck,
    title: "Our Commitment",
    description:
      "Help customers understand product capabilities and choose suitable water meters for their applications.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-page-hero">
        <div className="about-hero-container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="about-eyebrow">
              <Droplets size={16} />
              ABOUT PINNACLE
            </span>

            <h1>
              A smarter approach to{" "}
              <span>water measurement.</span>
            </h1>

            <p>
              Discover smart water metering technology designed to
              support better measurement, clearer insights, and more
              informed water management.
            </p>

            <a href="/products" className="about-primary-btn">
              Explore Our Products <ArrowRight size={18} />
            </a>

            <div className="about-hero-points">
              <span><CheckCircle2 size={16} /> Smart metering solutions</span>
              <span><CheckCircle2 size={16} /> Customer-focused approach</span>
            </div>
          </motion.div>

          <motion.div
            className="about-hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="about-image-glow" />
            <img
              src="/images/water-meter01.jpeg"
              alt="Pinnacle smart water meter"
            />
            <div className="about-image-caption">
              <span className="about-caption-icon">
                <Droplets size={23} />
              </span>
              <div>
                <strong>Smart Water Technology</strong>
                <p>Designed for modern water measurement</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="about-story-section">
        <div className="about-story-container">
          <motion.div
            className="about-story-label"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="about-eyebrow">WHO WE ARE</span>
            <h2>
              Making water measurement{" "}
              <span>easier to understand.</span>
            </h2>
          </motion.div>

          <div className="about-story-content">
            <p>
              Water measurement plays an important role in understanding
              consumption and managing usage. Smart metering technology
              can make readings more accessible when the appropriate
              communication features are supported.
            </p>
            <p>
              At Pinnacle, our focus is on smart water meter products
              and their practical applications. We aim to help customers
              explore product features, understand available options,
              and identify solutions suited to their requirements.
            </p>
            <a href="/products" className="about-text-link">
              Discover our products <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="about-values-section">
        <div className="about-values-container">
          <div className="about-section-heading">
            <span className="about-eyebrow">WHAT GUIDES US</span>
            <h2>Our focus and values.</h2>
            <p>
              A customer-focused approach to exploring smart water
              measurement solutions.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  className="about-value-card"
                  key={value.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                >
                  <div className="about-value-icon">
                    <Icon size={25} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-cta-section">
        <div className="about-cta-container">
          <div>
            <span className="about-eyebrow">LET'S CONNECT</span>
            <h2>Looking for the right water meter?</h2>
            <p>
              Talk to our team about your water measurement requirements
              and available product options.
            </p>
          </div>

          <a href="/#contact" className="about-primary-btn">
            Contact Us <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
