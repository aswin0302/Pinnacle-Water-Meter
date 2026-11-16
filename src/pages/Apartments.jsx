
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2,
  Gauge,
  ArrowUpRight,
} from "lucide-react";

export default function Apartments() {
  return (
    <main className="solution-page">

      {/* Apartments Hero */}
      <section className="apartments-hero">
        <div className="apartments-hero-container">

          <motion.div
            className="apartments-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="apartments-eyebrow">
              SMART WATER MANAGEMENT
            </span>

            <h1>
              Smarter Water
              <br />
              Management for
              <span> Apartments.</span>
            </h1>

            <p>
              Simplify water consumption management across
              apartment communities with smart metering
              solutions designed for better visibility,
              accurate readings and efficient operations.
            </p>

            <div className="apartments-hero-actions">
              <Link to="/contact" className="apartments-primary-btn">
                Request a Consultation
                <ArrowUpRight size={17} />
              </Link>

              <Link to="/products" className="apartments-secondary-btn">
                Explore Products
              </Link>
            </div>

            <div className="apartments-hero-note">
              <Building2 size={17} />
              <span>Designed for modern residential communities</span>
            </div>
          </motion.div>

          <motion.div
  className="apartments-hero-visual"
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <div className="apartments-image-wrapper">
    <img
      src={`${import.meta.env.BASE_URL}images/apartments-building.png`}
      alt="Modern residential apartment complex"
      className="apartments-building-image"
    />
  </div>

  <div className="apartments-floating-tag">
    <span className="apartments-status-dot"></span>
    Smart Water Management
  </div>
</motion.div>

        </div>
      </section>

      {/* Apartment Management Challenges */}
      <section className="apartment-challenges">
        <div className="apartment-challenges-container">

          <motion.div
            className="apartment-section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>THE CHALLENGES</span>
            <h2>
              Understanding Water Management
              <br />
              Challenges in Apartments
            </h2>
            <p>
              Managing water consumption across multiple residential
              units can create operational challenges for property
              managers and residents.
            </p>
          </motion.div>

          <div className="apartment-challenges-grid">

            <motion.div
              className="apartment-challenge-card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="apartment-challenge-icon">
                <Building2 size={23} />
              </div>
              <h3>Manual Billing Issues</h3>
              <p>
                Manual meter readings and calculations can make
                apartment water billing time-consuming and difficult
                to manage.
              </p>
            </motion.div>

            <motion.div
              className="apartment-challenge-card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="apartment-challenge-icon">
                <Gauge size={23} />
              </div>
              <h3>Water Wastage</h3>
              <p>
                Limited visibility into consumption patterns can
                make it harder to identify unnecessary water usage.
              </p>
            </motion.div>

            <motion.div
              className="apartment-challenge-card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="apartment-challenge-icon">
                <ArrowUpRight size={23} />
              </div>
              <h3>Lack of Visibility</h3>
              <p>
                Without accessible consumption data, monitoring
                water usage across multiple units becomes challenging.
              </p>
            </motion.div>

          </div>
        </div>
      </section>


      {/* Smart Apartment Water Management Solution */}
      <section className="apartment-solution">
        <div className="apartment-solution-container">

          <motion.div
            className="apartment-solution-visual"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="apartment-solution-visual-content">
              <div className="apartment-solution-icon">
                <Gauge size={34} />
              </div>

              <span>PINNACLE SMART METERING</span>

              <h3>
                Better Water
                <br />
                Management
              </h3>

              <p>
                Smart metering designed for modern residential
                communities.
              </p>

              <div className="apartment-solution-visual-footer">
                <Building2 size={19} />
                <span>Built for Apartment Communities</span>
              </div>
            </div>

            <div className="apartment-solution-decoration"></div>
          </motion.div>

          <motion.div
            className="apartment-solution-content"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="apartment-solution-label">
              <span></span>
              THE SOLUTION
            </span>

            <h2>
              A Smarter Way to Manage
              <span> Water in Apartments.</span>
            </h2>

            <p className="apartment-solution-description">
              Pinnacle smart water metering solutions help
              apartment communities improve water consumption
              visibility with modern metering technology.
              Simplify monitoring across residential units
              and support more informed water management.
            </p>

            <div className="apartment-solution-points">

              <div className="apartment-solution-point">
                <div className="apartment-point-icon">
                  <Gauge size={21} />
                </div>

                <div>
                  <h3>Accurate Measurement</h3>
                  <p>
                    Ultrasonic metering technology measures
                    water consumption without moving parts.
                  </p>
                </div>
              </div>

              <div className="apartment-solution-point">
                <div className="apartment-point-icon">
                  <Building2 size={21} />
                </div>

                <div>
                  <h3>Unit-wise Monitoring</h3>
                  <p>
                    Support water consumption monitoring
                    across individual residential units.
                  </p>
                </div>
              </div>

              <div className="apartment-solution-point">
                <div className="apartment-point-icon">
                  <ArrowUpRight size={21} />
                </div>

                <div>
                  <h3>Better Usage Visibility</h3>
                  <p>
                    Make water consumption information
                    easier to access and understand.
                  </p>
                </div>
              </div>

            </div>

            <Link to="/products" className="apartment-solution-link">
              Explore Smart Water Meters
              <ArrowUpRight size={18} />
            </Link>

          </motion.div>

        </div>
      </section>


      {/* Key Features for Apartments */}
      <section className="apartment-features">
        <div className="apartment-features-container">

          <motion.div
            className="apartment-section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>SMART METERING CAPABILITIES</span>
            <h2>Features Designed for Modern Apartments</h2>
            <p>
              Smart metering capabilities that support better
              water consumption measurement and management
              across residential communities.
            </p>
          </motion.div>

          <div className="apartment-features-grid">

            <motion.div
              className="apartment-feature-card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="apartment-feature-icon">
                <Gauge size={23} />
              </div>
              <h3>Ultrasonic Measurement</h3>
              <p>
                Measure water consumption using ultrasonic
                technology without moving parts.
              </p>
              <span className="apartment-feature-number">01</span>
            </motion.div>

            <motion.div
              className="apartment-feature-card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="apartment-feature-icon">
                <Building2 size={23} />
              </div>
              <h3>Unit-wise Monitoring</h3>
              <p>
                Organise consumption information for individual
                residential units.
              </p>
              <span className="apartment-feature-number">02</span>
            </motion.div>

            <motion.div
              className="apartment-feature-card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="apartment-feature-icon">
                <ArrowUpRight size={23} />
              </div>
              <h3>Remote Reading</h3>
              <p>
                Access meter readings remotely where the
                supported communication system is available.
              </p>
              <span className="apartment-feature-number">03</span>
            </motion.div>

            <motion.div
              className="apartment-feature-card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="apartment-feature-icon">
                <Building2 size={23} />
              </div>
              <h3>Multi-Unit Management</h3>
              <p>
                Support organised water metering across
                multiple apartments and residential buildings.
              </p>
              <span className="apartment-feature-number">04</span>
            </motion.div>

            <motion.div
              className="apartment-feature-card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="apartment-feature-icon">
                <Gauge size={23} />
              </div>
              <h3>Consumption Insights</h3>
              <p>
                Use available meter readings to understand
                water consumption patterns.
              </p>
              <span className="apartment-feature-number">05</span>
            </motion.div>

            <motion.div
              className="apartment-feature-card"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="apartment-feature-icon">
                <ArrowUpRight size={23} />
              </div>
              <h3>Flexible Integration</h3>
              <p>
                Explore communication and system integration
                options based on project requirements.
              </p>
              <span className="apartment-feature-number">06</span>
            </motion.div>

          </div>
        </div>
      </section>


      {/* How It Works */}
      <section className="apartment-how-it-works">
        <div className="apartment-how-container">

          <motion.div
            className="apartment-section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>HOW IT WORKS</span>
            <h2>Simple Steps Towards Smarter Water Management</h2>
            <p>
              A straightforward approach to measuring and
              accessing water consumption information across
              apartment communities.
            </p>
          </motion.div>

          <div className="apartment-steps-grid">

            <motion.div
              className="apartment-step-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="apartment-step-number">01</div>
              <div className="apartment-step-icon">
                <Building2 size={26} />
              </div>
              <h3>Install Smart Meters</h3>
              <p>
                Smart water meters are installed at the
                designated water measurement points
                across residential units.
              </p>
            </motion.div>

            <motion.div
              className="apartment-step-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="apartment-step-number">02</div>
              <div className="apartment-step-icon">
                <Gauge size={26} />
              </div>
              <h3>Measure Consumption</h3>
              <p>
                Ultrasonic metering technology measures
                water consumption at each installed
                metering point.
              </p>
            </motion.div>

            <motion.div
              className="apartment-step-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="apartment-step-number">03</div>
              <div className="apartment-step-icon">
                <ArrowUpRight size={26} />
              </div>
              <h3>Access Meter Readings</h3>
              <p>
                Access available meter readings through
                the supported reading and communication
                system.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Benefits for Apartment Communities */}
      <section className="apartment-benefits">
        <div className="apartment-benefits-container">

          <motion.div
            className="apartment-section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>WHY CHOOSE PINNACLE</span>
            <h2>Smarter Water Management. Better Communities.</h2>
            <p>
              Bring greater clarity and convenience to water
              consumption management across your residential community.
            </p>
          </motion.div>

          <div className="apartment-benefits-grid">

            <motion.div
              className="apartment-benefit-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
            >
              <div className="apartment-benefit-icon">
                <Gauge size={24} />
              </div>
              <h3>Improved Measurement</h3>
              <p>
                Ultrasonic technology provides a modern approach
                to measuring water consumption.
              </p>
            </motion.div>

            <motion.div
              className="apartment-benefit-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
            >
              <div className="apartment-benefit-icon">
                <Building2 size={24} />
              </div>
              <h3>Organised Monitoring</h3>
              <p>
                Support structured water consumption monitoring
                across individual residential units.
              </p>
            </motion.div>

            <motion.div
              className="apartment-benefit-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
            >
              <div className="apartment-benefit-icon">
                <ArrowUpRight size={24} />
              </div>
              <h3>Better Decision Making</h3>
              <p>
                Use available consumption information to support
                informed water management decisions.
              </p>
            </motion.div>

            <motion.div
              className="apartment-benefit-card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
            >
              <div className="apartment-benefit-icon">
                <Building2 size={24} />
              </div>
              <h3>Residential Convenience</h3>
              <p>
                Support a more organised approach to water
                consumption management for residents.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* APARTMENT CTA SECTION */}
      <section className="apartment-cta">
        <div className="apartment-cta-container">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="apartment-cta-content"
          >
            <span className="apartment-cta-eyebrow">
              SMARTER WATER MANAGEMENT
            </span>

            <h2>
              Make Water Management
              <span> Simpler for Your Community.</span>
            </h2>

            <p>
              Explore smart water metering solutions designed to support
              organised monitoring and better visibility across apartment
              communities.
            </p>

            <Link to="/contact" className="apartment-cta-button">
              Talk to Our Team
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>


    </main>
  );
}
