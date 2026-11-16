
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Industries() {
  return (
    <main className="industries-page">

      {/* INDUSTRIES HERO */}
      <section className="industries-hero">
        <div className="industries-hero-container">

          <motion.div
            className="industries-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="industries-eyebrow">
              SMART WATER MANAGEMENT
            </span>

            <h1>
              Intelligent Water
              <span> Management for </span>
              Modern Industries.
            </h1>

            <p>
              Improve visibility into water consumption
              with smart metering solutions designed for
              industrial facilities and commercial operations.
            </p>

            <div className="industries-hero-actions">
              <Link to="/contact" className="industries-primary-btn">
                Talk to Our Team
                <ArrowUpRight size={18} />
              </Link>

              <Link to="/products" className="industries-secondary-btn">
                Explore Products
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="industries-hero-visual"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="industries-image-wrapper">
            <img
                src={`${import.meta.env.BASE_URL}images/industrial-facility.jpg`}
                alt="Modern industrial facility"
                className="industries-hero-image"
            />
            </div>
          </motion.div>

        </div>
      </section>

      {/* INDUSTRIAL WATER MANAGEMENT CHALLENGES */}
      <section className="industries-challenges">
        <div className="industries-challenges-container">

          <motion.div
            className="industries-challenges-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="industries-section-eyebrow">
              INDUSTRIAL WATER MANAGEMENT
            </span>

            <h2>
              Understanding Water.
              <span> Managing Operations.</span>
            </h2>

            <p>
              Industrial facilities need reliable water
              measurement and better access to consumption
              information to support everyday operations.
            </p>
          </motion.div>

          <div className="industries-challenge-panels">

            <motion.div
              className="industries-challenge-panel"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span>01 / MEASUREMENT</span>
              <h3>Monitoring Water Consumption</h3>
              <p>
                Understanding water usage across industrial
                facilities can be challenging without
                accessible and accurate meter readings.
              </p>
            </motion.div>

            <motion.div
              className="industries-challenge-panel"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span>02 / VISIBILITY</span>
              <h3>Accessing Meter Readings</h3>
              <p>
                Traditional reading processes may require
                physical access to meters across large
                industrial properties.
              </p>
            </motion.div>

            <motion.div
              className="industries-challenge-panel"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span>03 / TRACKING</span>
              <h3>Understanding Usage Patterns</h3>
              <p>
                Organised meter data helps industrial teams
                review consumption patterns over time.
              </p>
            </motion.div>

          </div>
        </div>
      </section>


      {/* INDUSTRIAL SMART WATER SOLUTION */}
      <section className="industries-solution">
        <div className="industries-solution-container">

          <motion.div
            className="industries-solution-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="industries-solution-top">
              <span>PINNACLE TECHNOLOGY</span>
              <span>01 / 03</span>
            </div>

            <div className="industries-tech-display">
              <div className="industries-tech-ring">
                <div className="industries-tech-core">
                  <span>SMART</span>
                  <strong>WATER</strong>
                  <small>METERING</small>
                </div>
              </div>

              <div className="industries-tech-label">
                ULTRASONIC MEASUREMENT
              </div>
            </div>

            <div className="industries-solution-bottom">
              <span>ENGINEERED FOR WATER MEASUREMENT</span>
              <span>PINNACLE</span>
            </div>
          </motion.div>

          <motion.div
            className="industries-solution-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="industries-section-light-eyebrow">
              THE PINNACLE SOLUTION
            </span>

            <h2>
              Smarter Measurement.
              <span> Greater Water Visibility.</span>
            </h2>

            <p>
              Pinnacle smart water metering solutions support
              industrial facilities with accurate water
              consumption measurement and convenient access
              to meter readings through supported systems.
            </p>

            <div className="industries-solution-points">

              <div>
                <span>01</span>
                <p>Ultrasonic water measurement technology</p>
              </div>

              <div>
                <span>02</span>
                <p>Meter reading access where supported</p>
              </div>

              <div>
                <span>03</span>
                <p>Consumption data for usage tracking</p>
              </div>

            </div>

            <Link to="/products" className="industries-solution-link">
              Discover Our Products
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>

        </div>
      </section>


      {/* INDUSTRIAL KEY CAPABILITIES */}
      <section className="industries-capabilities">
        <div className="industries-capabilities-container">

          <motion.div
            className="industries-capabilities-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="industries-section-eyebrow">
                BUILT FOR INDUSTRIAL APPLICATIONS
              </span>

              <h2>
                Technology That
                <span> Measures With Precision.</span>
              </h2>
            </div>

            <p>
              Explore the core capabilities of Pinnacle smart
              water meters for industrial water measurement
              and consumption tracking.
            </p>
          </motion.div>

          <div className="industries-capabilities-list">

            <motion.div
              className="industries-capability-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span>01</span>
              <h3>Ultrasonic Measurement</h3>
              <p>
                Measure water consumption using ultrasonic
                metering technology.
              </p>
              <span className="industries-capability-arrow">↗</span>
            </motion.div>

            <motion.div
              className="industries-capability-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span>02</span>
              <h3>Remote Reading Support</h3>
              <p>
                Access meter readings remotely where supported
                by the selected communication system.
              </p>
              <span className="industries-capability-arrow">↗</span>
            </motion.div>

            <motion.div
              className="industries-capability-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span>03</span>
              <h3>Consumption Tracking</h3>
              <p>
                Refer to available meter data to understand
                water consumption patterns over time.
              </p>
              <span className="industries-capability-arrow">↗</span>
            </motion.div>

          </div>
        </div>
      </section>


      {/* INDUSTRIAL APPLICATIONS */}
      <section className="industries-applications">
        <div className="industries-applications-container">

          <motion.div
            className="industries-applications-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="industries-section-eyebrow">
              INDUSTRIES WE SERVE
            </span>

            <h2>
              Water Measurement
              <span> Across Industrial Environments.</span>
            </h2>

            <p>
              Explore potential applications for smart water
              metering across different industrial and
              commercial environments.
            </p>
          </motion.div>

          <div className="industries-applications-layout">

            <motion.div
              className="industries-application-feature"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="industries-application-image">
                <span>01 / INDUSTRIAL FACILITIES</span>
              </div>

              <div className="industries-application-caption">
                <h3>Manufacturing Facilities</h3>
                <p>
                  Support water consumption measurement
                  across manufacturing and production sites.
                </p>
              </div>
            </motion.div>

            <div className="industries-application-side">

              <motion.div
                className="industries-application-item"
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span>02</span>
                <div>
                  <h3>Commercial Complexes</h3>
                  <p>
                    Measure water consumption across
                    commercial properties.
                  </p>
                </div>
                <span className="industries-application-arrow">↗</span>
              </motion.div>

              <motion.div
                className="industries-application-item"
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span>03</span>
                <div>
                  <h3>Industrial Campuses</h3>
                  <p>
                    Organise meter reading access across
                    large industrial properties.
                  </p>
                </div>
                <span className="industries-application-arrow">↗</span>
              </motion.div>

              <motion.div
                className="industries-application-item"
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span>04</span>
                <div>
                  <h3>Infrastructure Projects</h3>
                  <p>
                    Explore suitable metering solutions
                    for infrastructure developments.
                  </p>
                </div>
                <span className="industries-application-arrow">↗</span>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      
      {/* INDUSTRIAL BENEFITS */}
      <section className="industries-benefits">
        <div className="industries-benefits-container">

          <motion.div
            className="industries-benefits-intro"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="industries-section-eyebrow">
              WHY CHOOSE PINNACLE
            </span>

            <h2>
              Make Every
              <span> Reading Count.</span>
            </h2>

            <p>
              Bring a more organised approach to industrial
              water measurement with smart metering solutions
              from Pinnacle.
            </p>

            <Link to="/contact" className="industries-benefits-link">
              Discuss Your Requirements
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>

          <div className="industries-benefits-list">

            <motion.div
              className="industries-benefit-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span>01</span>
              <div>
                <h3>Accurate Water Measurement</h3>
                <p>
                  Measure consumption using ultrasonic
                  metering technology.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="industries-benefit-item"
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
              className="industries-benefit-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span>03</span>
              <div>
                <h3>Consumption Visibility</h3>
                <p>
                  Refer to available meter data to understand
                  water usage patterns over time.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="industries-benefit-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span>04</span>
              <div>
                <h3>Flexible Applications</h3>
                <p>
                  Explore metering options for different
                  industrial and commercial environments.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* INDUSTRIES FINAL CTA */}
      <section className="industries-final-cta">
        <motion.div
          className="industries-final-cta-content"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="industries-cta-eyebrow">
            SMARTER WATER MANAGEMENT STARTS HERE
          </span>

          <h2>
            Ready to Transform
            <span> Your Water Management?</span>
          </h2>

          <p>
            Connect with our team to explore smart water
            metering solutions for your industrial facility
            or commercial property.
          </p>

          <div className="industries-cta-actions">
            <Link to="/contact" className="industries-cta-primary">
              Talk to Our Team
              <ArrowUpRight size={18} />
            </Link>

            <Link to="/products" className="industries-cta-secondary">
              Explore Products
            </Link>
          </div>
        </motion.div>
      </section>



    </main>
  );
}
