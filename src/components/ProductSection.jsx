import { motion } from "framer-motion";
import {
  Droplets,
  Radio,
  ShieldCheck,
  BatteryCharging,
  ArrowRight,
  Gauge,
} from "lucide-react";

const features = [
  {
    icon: Gauge,
    title: "Ultrasonic Measurement",
    description:
      "Measure water consumption using ultrasonic measuring technology.",
  },
  {
    icon: Radio,
    title: "Remote Reading",
    description:
      "Support remote meter reading with compatible communication options.",
  },
  {
    icon: ShieldCheck,
    title: "IP68 Protection",
    description:
      "Designed with an IP68 protection rating, as specified in the datasheet.",
  },
  {
    icon: BatteryCharging,
    title: "Long Battery Life",
    description:
      "The datasheet lists battery life of up to 10/15 years. Confirm the applicable model before purchase.",
  },
];

export default function ProductSection() {
  return (
    <section id="product" className="product-section">
      <div className="product-container">
        <motion.div
          className="product-visual"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="product-image-glow" />
          <span className="product-tag">
            <Droplets size={15} />
            SMART WATER TECHNOLOGY
          </span>

          <motion.img
            src="/images/water-meter01.jpeg"
            alt="Pinnacle Smart Water Meter"
            className="product-image"
            animate={{ y: [0, -8, 0] }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            />


          <p className="product-image-caption">
            PINNACLE SMART WATER METER
          </p>
        </motion.div>

        <motion.div
          className="product-content"
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">
            OUR PRODUCT
          </span>

          <h2 className="section-title">
            Every drop,
            <br />
            <span className="product-highlight">
              measured intelligently.
            </span>
          </h2>

          <p className="section-description">
            Explore Pinnacle's ultrasonic smart water meter
            for cold and hot water applications. Refer to the
            product datasheet for model-specific specifications
            and available communication options.
          </p>

          <a href="#contact" className="btn-primary product-button">
            Enquire About This Product
            <ArrowRight size={17} />
          </a>

          <div className="product-feature-grid">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  className="product-feature"
                  key={feature.title}
                >
                  <div className="product-feature-icon">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
