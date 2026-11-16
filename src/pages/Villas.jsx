
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Villas() {
  return (
    <main className="villas-page">

      {/* VILLAS HERO SECTION */}
      <section className="villas-hero">
        <div className="villas-hero-container">

          <motion.div
            className="villas-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="villas-eyebrow">
              SMART WATER MANAGEMENT
            </span>

            <h1>
              Smarter Water
              <span> Management for </span>
              Modern Villas.
            </h1>

            <p>
              Bring greater visibility to water consumption
              with smart metering solutions designed for
              modern private villas and residential properties.
            </p>

            <div className="villas-hero-actions">
              <Link to="/contact" className="villas-primary-btn">
                Talk to Our Team
                <ArrowUpRight size={18} />
              </Link>

              <Link to="/products" className="villas-secondary-btn">
                Explore Products
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="villas-hero-visual"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="villas-image-wrapper">
            <img
                src={`${import.meta.env.BASE_URL}images/indian-villa.jpg`}
                alt="Modern Indian residential villa"
                className="villas-hero-image"
            />
            </div>
          </motion.div>

        </div>
      </section>

    {/* VILLA WATER MANAGEMENT CHALLENGES */}
    <section className="villas-challenges">
    <div className="villas-challenges-container">

        <motion.div
        className="villas-challenges-intro"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        >
        <span className="villas-section-eyebrow">
            THE CHALLENGE
        </span>

        <h2>
            Water Management
            <span> Shouldn't Be Complicated.</span>
        </h2>

        <p>
            Managing water consumption in private villas requires
            accurate measurement and convenient access to meter
            readings.
        </p>
        </motion.div>

        <div className="villas-challenge-list">

        <motion.div
            className="villas-challenge-item"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <span className="villas-challenge-number">01</span>
            <div>
            <h3>Manual Meter Readings</h3>
            <p>
                Traditional meter reading can require physical
                access to the meter, making regular monitoring
                less convenient.
            </p>
            </div>
        </motion.div>

        <motion.div
            className="villas-challenge-item"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
        >
            <span className="villas-challenge-number">02</span>
            <div>
            <h3>Limited Consumption Visibility</h3>
            <p>
                Without accessible meter readings, understanding
                water usage patterns can become difficult.
            </p>
            </div>
        </motion.div>

        <motion.div
            className="villas-challenge-item"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
            <span className="villas-challenge-number">03</span>
            <div>
            <h3>Consumption Tracking</h3>
            <p>
                Keeping track of water consumption over time
                requires a more organised approach to meter data.
            </p>
            </div>
        </motion.div>

        </div>
    </div>
    </section>

    {/* VILLA SMART WATER SOLUTION */}
    <section className="villas-solution">
    <div className="villas-solution-container">

        <motion.div
        className="villas-solution-visual"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        >
        <div className="villas-solution-visual-top">
            <span>PINNACLE SMART METERS</span>
            <span className="villas-solution-line"></span>
        </div>

        <div className="villas-meter-display">
            <span className="villas-meter-label">SMART WATER METERING</span>
            <div className="villas-meter-circle">
            <div className="villas-meter-inner">
                <span>WATER</span>
                <strong>01</strong>
                <small>MEASUREMENT</small>
            </div>
            </div>
            <span className="villas-meter-caption">
            Designed for modern residential properties
            </span>
        </div>

        <div className="villas-solution-visual-footer">
            <span>SMARTER WATER MANAGEMENT</span>
            <span>01 / 01</span>
        </div>
        </motion.div>

        <motion.div
        className="villas-solution-content"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        >
        <span className="villas-section-eyebrow">
            THE PINNACLE SOLUTION
        </span>

        <h2>
            Better Visibility.
            <span> Smarter Water Decisions.</span>
        </h2>

        <p>
            Pinnacle smart water metering solutions help villa
            owners and property managers measure water consumption
            with greater accuracy and access meter readings through
            supported reading systems.
        </p>

        <div className="villas-solution-points">
            <div>
            <span>01</span>
            <p>Accurate water consumption measurement</p>
            </div>

            <div>
            <span>02</span>
            <p>Convenient access to meter readings where supported</p>
            </div>

            <div>
            <span>03</span>
            <p>Better visibility into residential water usage</p>
            </div>
        </div>

        <Link to="/products" className="villas-solution-link">
            Explore Our Products
            <ArrowUpRight size={18} />
        </Link>
        </motion.div>

    </div>
    </section>

    {/* VILLA KEY CAPABILITIES */}
    <section className="villas-capabilities">
    <div className="villas-capabilities-container">

        <motion.div
        className="villas-capabilities-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        >
        <div>
            <span className="villas-section-eyebrow">
            BUILT FOR MODERN LIVING
            </span>
            <h2>
            Smart Capabilities.
            <span> Practical Benefits.</span>
            </h2>
        </div>

        <p>
            Explore the capabilities that support more organised
            water consumption measurement and monitoring in villas.
        </p>
        </motion.div>

        <div className="villas-capabilities-list">

        <motion.div
            className="villas-capability-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <span className="villas-capability-number">01</span>
            <h3>Ultrasonic Measurement</h3>
            <p>
            Measure water consumption using ultrasonic
            metering technology.
            </p>
            <span className="villas-capability-arrow">↗</span>
        </motion.div>

        <motion.div
            className="villas-capability-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
        >
            <span className="villas-capability-number">02</span>
            <h3>Convenient Meter Reading</h3>
            <p>
            Access meter readings remotely where supported
            by the selected communication system.
            </p>
            <span className="villas-capability-arrow">↗</span>
        </motion.div>

        <motion.div
            className="villas-capability-row"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <span className="villas-capability-number">03</span>
            <h3>Consumption Insights</h3>
            <p>
            Use available meter data to understand water
            consumption patterns over time.
            </p>
            <span className="villas-capability-arrow">↗</span>
        </motion.div>

        </div>
    </div>
    </section>

    {/* VILLA HOW IT WORKS */}
    <section className="villas-process">
    <div className="villas-process-container">

        <motion.div
        className="villas-process-heading"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        >
        <span className="villas-section-eyebrow">
            SIMPLE AND EFFECTIVE
        </span>

        <h2>
            From Measurement
            <span> to Better Understanding.</span>
        </h2>

        <p>
            A straightforward approach to measuring water
            consumption and accessing meter readings.
        </p>
        </motion.div>

        <div className="villas-process-track">

        <motion.div
            className="villas-process-step"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <span className="villas-process-number">01</span>
            <h3>Water Measurement</h3>
            <p>
            The smart meter measures water consumption
            using ultrasonic technology.
            </p>
        </motion.div>

        <motion.div
            className="villas-process-step"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
        >
            <span className="villas-process-number">02</span>
            <h3>Data Collection</h3>
            <p>
            Meter readings are recorded for consumption
            tracking and reference.
            </p>
        </motion.div>

        <motion.div
            className="villas-process-step"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <span className="villas-process-number">03</span>
            <h3>Reading Access</h3>
            <p>
            Access readings through the supported
            communication system, where available.
            </p>
        </motion.div>

        <motion.div
            className="villas-process-step"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
            <span className="villas-process-number">04</span>
            <h3>Usage Understanding</h3>
            <p>
            Use available meter data to better understand
            water consumption over time.
            </p>
        </motion.div>

        </div>
    </div>
    </section>

    {/* VILLA BENEFITS */}
    <section className="villas-benefits">
    <div className="villas-benefits-container">

        <motion.div
        className="villas-benefits-intro"
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        >
        <span className="villas-section-eyebrow">
            WHY CHOOSE PINNACLE
        </span>

        <h2>
            Designed Around
            <span> Your Property.</span>
        </h2>

        <p>
            Make water consumption measurement a more
            organised part of managing your villa with
            Pinnacle smart metering solutions.
        </p>

        <Link to="/contact" className="villas-benefits-link">
            Discuss Your Requirements
            <ArrowUpRight size={18} />
        </Link>
        </motion.div>

        <div className="villas-benefits-list">

        <motion.div
            className="villas-benefit-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <span>01</span>
            <div>
            <h3>Accurate Measurement</h3>
            <p>
                Measure water consumption with ultrasonic
                metering technology.
            </p>
            </div>
        </motion.div>

        <motion.div
            className="villas-benefit-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
        >
            <span>02</span>
            <div>
            <h3>Convenient Reading Access</h3>
            <p>
                Access meter readings through supported
                remote reading systems, where available.
            </p>
            </div>
        </motion.div>

        <motion.div
            className="villas-benefit-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <span>03</span>
            <div>
            <h3>Better Usage Visibility</h3>
            <p>
                Refer to available consumption data to
                understand water usage over time.
            </p>
            </div>
        </motion.div>

        <motion.div
            className="villas-benefit-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
            <span>04</span>
            <div>
            <h3>Residential Applications</h3>
            <p>
                Explore metering options suited to
                individual villas and residential properties.
            </p>
            </div>
        </motion.div>

        </div>
    </div>
    </section>

    {/* VILLA FINAL CTA */}
    <section className="villas-final-cta">
    <motion.div
        className="villas-final-cta-content"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
    >
        <span className="villas-cta-eyebrow">
        LET'S MAKE WATER MANAGEMENT SMARTER
        </span>

        <h2>
        Ready for Smarter
        <span> Water Management?</span>
        </h2>

        <p>
        Talk to our team to explore smart water metering
        solutions for your villa or residential property.
        </p>

        <div className="villas-cta-actions">
        <Link to="/contact" className="villas-cta-primary">
            Talk to Our Team
            <ArrowUpRight size={18} />
        </Link>

        <Link to="/products" className="villas-cta-secondary">
            Explore Products
        </Link>

        </div>
    </motion.div>
    </section>

    </main>
  );
}