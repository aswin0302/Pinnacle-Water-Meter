import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";
import {
  ArrowRight,
  Droplets,
} from "lucide-react";

export default function Hero() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "35%"]
  );

  const productY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "30%"]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "10%"]
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.6],
    [1, 0]
  );

  return (
    <section className="hero" ref={heroRef}>
      <motion.div
        className="hero-background"
        style={{ y: backgroundY }}
      />

      <motion.div
        className="hero-glow"
        style={{ y: backgroundY }}
      />

      <div className="hero-container">
        <motion.div
          className="hero-content"
          style={{
            y: contentY,
            opacity: contentOpacity,
          }}
        >
          <span className="hero-label">
            <Droplets size={16} />
            SMART WATER TECHNOLOGY
          </span>

          <h1>
            Every Drop.
            <br />
            <span>Smarter.</span>
          </h1>

          <p>
            Experience precision-engineered smart water
            metering solutions designed to support
            accurate measurement and smarter water
            management.
          </p>

          <div className="hero-actions">
            <a
              href={`${import.meta.env.BASE_URL}products`}
              className="btn-primary"
            >
              Explore Products
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="btn-secondary"
            >
              Request a Quote
            </a>
          </div>

          <span className="hero-caption">
            Precision · Reliability · Smarter Decisions
          </span>
        </motion.div>

        <motion.div
          className="hero-product"
          style={{ y: productY }}
        >
          <div className="product-orbit" />

          <img
            src={`${import.meta.env.BASE_URL}images/water-meter04.png`}
            alt="Pinnacle smart water meter"
          />
        </motion.div>
      </div>

      <div className="hero-bottom">
        <span>SMARTER WATER MANAGEMENT</span>

        <a href="#about">
          Scroll to explore ↓
        </a>
      </div>
    </section>
  );
}