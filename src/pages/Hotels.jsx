
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Droplets, Gauge, Building2 } from "lucide-react";

export default function Hotels() {
  return (
    <main className="hotels-page">

      {/* HERO SECTION */}
      <section className="hotels-hero">
        <div className="hotels-hero-container">

          <motion.div
            className="hotels-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="hotels-eyebrow">
              SMART WATER MANAGEMENT
            </span>

            <h1>
              Smarter Water Management for
              <span> Modern Hospitality.</span>
            </h1>

            <p>
              Support efficient water management across hotels and hospitality
              properties with accurate measurement and better visibility into
              water consumption.
            </p>

            <div className="hotels-hero-actions">
              <Link to="/contact" className="hotels-primary-btn">
                Talk to Our Team
                <ArrowUpRight size={18} />
              </Link>

              <Link to="/products" className="hotels-secondary-btn">
                Explore Products
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hotels-hero-visual"
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hotels-image-wrapper">
                <img
                    src={`${import.meta.env.BASE_URL}images/hotel-building.jpg`}
                    alt="Modern luxury hotel building"
                    className="hotels-hero-image"
                />
            </div>
          </motion.div>

        </div>
      </section>


      {/* HOTEL WATER MANAGEMENT CHALLENGES */}
      <section className="hotels-challenges">
        <div className="hotels-challenges-container">

          <motion.div
            className="hotels-challenges-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="hotels-section-eyebrow">
              THE CHALLENGE
            </span>

            <h2>
              Every Guest Experience
              <span> Depends on Water.</span>
            </h2>

            <p>
              Hotels rely on water across guest rooms, kitchens, laundry
              facilities and common areas. Understanding consumption across
              these operations can be challenging.
            </p>
          </motion.div>

          <div className="hotels-challenge-list">

            <motion.div
              className="hotels-challenge-item"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span>01</span>
              <div>
                <h3>Multiple Consumption Areas</h3>
                <p>
                  Water is used across different hotel facilities,
                  making consumption difficult to review in one place.
                </p>
              </div>
              <Building2 className="hotels-challenge-icon" size={28} />
            </motion.div>

            <motion.div
              className="hotels-challenge-item"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span>02</span>
              <div>
                <h3>Manual Meter Readings</h3>
                <p>
                  Depending on manual meter readings can make
                  regular consumption reviews time-consuming.
                </p>
              </div>
              <Gauge className="hotels-challenge-icon" size={28} />
            </motion.div>

            <motion.div
              className="hotels-challenge-item"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span>03</span>
              <div>
                <h3>Limited Usage Visibility</h3>
                <p>
                  Without accessible consumption information,
                  reviewing water usage patterns can be difficult.
                </p>
              </div>
              <Droplets className="hotels-challenge-icon" size={28} />
            </motion.div>

          </div>
        </div>
      </section>


      {/* HOTEL SMART WATER SOLUTION */}
      <section className="hotels-solution">
        <div className="hotels-solution-container">

          <motion.div
            className="hotels-solution-visual"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="hotels-solution-top">
              <span>PINNACLE TECHNOLOGY</span>
              <span>01 / MEASUREMENT</span>
            </div>

            <div className="hotels-solution-display">
              <div className="hotels-solution-ring">
                <div className="hotels-solution-core">
                  <Droplets size={38} />
                  <strong>WATER</strong>
                  <span>MEASUREMENT</span>
                </div>
              </div>
              <span className="hotels-solution-label">
                SMART METERING TECHNOLOGY
              </span>
            </div>

            <div className="hotels-solution-bottom">
              <span>ACCURATE MEASUREMENT</span>
              <span>SMARTER OPERATIONS</span>
            </div>
          </motion.div>

          <motion.div
            className="hotels-solution-content"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="hotels-section-light-eyebrow">
              THE PINNACLE SOLUTION
            </span>

            <h2>
              Better Water Insights.
              <span> Smarter Hotel Operations.</span>
            </h2>

            <p>
              Pinnacle Smart Water Meters help hospitality properties
              measure water consumption and access meter readings
              through supported reading systems.
            </p>

            <div className="hotels-solution-points">
              <div>
                <span>01</span>
                <p>Ultrasonic water measurement</p>
              </div>

              <div>
                <span>02</span>
                <p>Remote reading support where configured</p>
              </div>

              <div>
                <span>03</span>
                <p>Accessible consumption information</p>
              </div>
            </div>

            <Link to="/products" className="hotels-solution-link">
              Discover Our Smart Meters
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>

        </div>
      </section>


      {/* HOTEL KEY CAPABILITIES */}
      <section className="hotels-capabilities">
        <div className="hotels-capabilities-container">

          <motion.div
            className="hotels-capabilities-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="hotels-section-light-eyebrow">
                SMART METERING CAPABILITIES
              </span>

              <h2>
                Designed for the
                <span> Demands of Hospitality.</span>
              </h2>
            </div>

            <p>
              Practical smart metering capabilities that support
              water measurement and consumption visibility across
              hospitality properties.
            </p>
          </motion.div>

          <div className="hotels-capabilities-list">

            <motion.div
              className="hotels-capability-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span>01</span>
              <h3>Ultrasonic Measurement</h3>
              <p>
                Measure water consumption using ultrasonic
                metering technology.
              </p>
              <ArrowUpRight className="hotels-capability-arrow" />
            </motion.div>

            <motion.div
              className="hotels-capability-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span>02</span>
              <h3>Remote Reading Support</h3>
              <p>
                Access meter readings remotely when a compatible
                communication system is configured.
              </p>
              <ArrowUpRight className="hotels-capability-arrow" />
            </motion.div>

            <motion.div
              className="hotels-capability-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span>03</span>
              <h3>Consumption Tracking</h3>
              <p>
                Review available water consumption information
                to understand usage patterns.
              </p>
              <ArrowUpRight className="hotels-capability-arrow" />
            </motion.div>

          </div>
        </div>
      </section>


      {/* HOTEL APPLICATIONS */}
      <section className="hotels-applications">
        <div className="hotels-applications-container">

          <motion.div
            className="hotels-applications-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="hotels-section-light-eyebrow">
              WHERE IT FITS
            </span>

            <h2>
              Water Management Across
              <span> Every Hospitality Space.</span>
            </h2>

            <p>
              Support water measurement across different facilities
              within hotels and hospitality properties.
            </p>
          </motion.div>

          <div className="hotels-applications-layout">

            <motion.div
              className="hotels-application-feature"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="hotels-application-image">
                <span>HOSPITALITY WATER MANAGEMENT</span>
              </div>

              <div className="hotels-application-caption">
                <span>01 / HOTEL FACILITIES</span>
                <h3>One Property. Multiple Water Needs.</h3>
                <p>
                  From guest accommodation to service areas,
                  water measurement plays an important role
                  throughout hotel operations.
                </p>
              </div>
            </motion.div>

            <div className="hotels-application-side">

              <motion.div
                className="hotels-application-item"
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span>02</span>
                <div>
                  <h3>Guest Accommodation</h3>
                  <p>
                    Support water measurement across guest rooms
                    and residential-style accommodation areas.
                  </p>
                </div>
                <ArrowUpRight className="hotels-application-arrow" />
              </motion.div>

              <motion.div
                className="hotels-application-item"
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <span>03</span>
                <div>
                  <h3>Kitchens & Laundry</h3>
                  <p>
                    Measure water consumption in food preparation
                    and laundry facilities.
                  </p>
                </div>
                <ArrowUpRight className="hotels-application-arrow" />
              </motion.div>

              <motion.div
                className="hotels-application-item"
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span>04</span>
                <div>
                  <h3>Common & Service Areas</h3>
                  <p>
                    Include shared facilities and operational
                    spaces in water measurement planning.
                  </p>
                </div>
                <ArrowUpRight className="hotels-application-arrow" />
              </motion.div>

            </div>
          </div>
        </div>
      </section>
      


      {/* HOTEL BENEFITS */}
      <section className="hotels-benefits">
        <div className="hotels-benefits-container">

          <motion.div
            className="hotels-benefits-intro"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="hotels-section-eyebrow">
              WHY PINNACLE
            </span>

            <h2>
              Make Every
              <span> Reading Count.</span>
            </h2>

            <p>
              Bring greater visibility to water consumption
              and support informed water management decisions
              across your hospitality property.
            </p>

            <Link to="/contact" className="hotels-benefits-link">
              Discuss Your Requirements
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>

          <div className="hotels-benefits-list">

            <motion.div
              className="hotels-benefit-item"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span>01</span>
              <div>
                <h3>Accurate Water Measurement</h3>
                <p>
                  Ultrasonic technology supports accurate
                  measurement of water consumption.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="hotels-benefit-item"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <span>02</span>
              <div>
                <h3>Improved Usage Visibility</h3>
                <p>
                  Access available consumption information
                  to better understand water usage patterns.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="hotels-benefit-item"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span>03</span>
              <div>
                <h3>Support for Smarter Decisions</h3>
                <p>
                  Use meter readings and consumption information
                  to support operational planning.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="hotels-benefit-item"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span>04</span>
              <div>
                <h3>Flexible Reading Options</h3>
                <p>
                  Support remote meter reading when compatible
                  communication systems are configured.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* HOTEL FINAL CTA */}
      <section className="hotels-final-cta">
        <motion.div
          className="hotels-final-cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="hotels-cta-eyebrow">
            LET'S BUILD SMARTER WATER MANAGEMENT
          </span>

          <h2>
            Ready to Rethink
            <span> Water Management?</span>
          </h2>

          <p>
            Discover how Pinnacle Smart Water Meters can support
            better water measurement and consumption visibility
            across your hospitality property.
          </p>

          <div className="hotels-cta-actions">
            <Link to="/contact" className="hotels-cta-primary">
              Talk to Our Team
              <ArrowUpRight size={18} />
            </Link>

            <Link to="/products" className="hotels-cta-secondary">
              Explore Smart Meters
            </Link>
          </div>
        </motion.div>
      </section>







    </main>
  );
}
