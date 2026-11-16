
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Droplets,
  Gauge,
  Radio,
  BarChart3,
  Settings,
  Waves,
  Activity,
  Database,
  CheckCircle2,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Water Flows Through the Meter",
    description:
      "The meter is installed in the water supply line and measures the water passing through it.",
    icon: Droplets,
  },
  {
    number: "02",
    title: "Ultrasonic Measurement",
    description:
      "Ultrasonic technology measures water flow without relying on traditional mechanical measuring parts.",
    icon: Waves,
  },
  {
    number: "03",
    title: "Reading Collection",
    description:
      "The measured consumption data can be collected through the meter's supported reading interface or communication option.",
    icon: Radio,
  },
  {
    number: "04",
    title: "Access Usage Information",
    description:
      "Collected readings can be reviewed through a compatible reading system, helping users understand water consumption.",
    icon: BarChart3,
  },
];

const systemComponents = [
  {
    number: "01",
    title: "Ultrasonic Sensor",
    description:
      "Measures water flow using ultrasonic technology.",
    icon: Waves,
  },
  {
    number: "02",
    title: "Measurement Unit",
    description:
      "Processes the measurement signals to determine water consumption.",
    icon: Gauge,
  },
  {
    number: "03",
    title: "Communication Interface",
    description:
      "Supports reading collection through the communication option available in the selected meter configuration.",
    icon: Radio,
  },
  {
    number: "04",
    title: "Reading System",
    description:
      "Allows collected meter readings to be accessed through a compatible reading solution.",
    icon: Database,
  },
];

const HowItWorks = () => {
  return (
    <main className="how-it-works-page">

      {/* HERO SECTION */}
      <section className="how-hero">
        <div className="how-hero-container">
          <motion.div
            className="how-hero-content"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="how-eyebrow">
              HOW IT WORKS
            </span>

            <h1>
              Every Drop.
              <span> Measured Smarter.</span>
            </h1>

            <p>
              Discover how Pinnacle Smart Water Meter technology
              measures water consumption and helps make water
              usage information easier to access and understand.
            </p>

            <div className="how-hero-actions">
              <Link to="/products" className="how-primary-btn">
                Explore Products <ArrowUpRight size={18} />
              </Link>

              <Link to="/contact" className="how-secondary-btn">
                Talk to Our Team
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="how-hero-visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="how-hero-visual-inner">
              <div className="how-visual-top">
                <span>PINNACLE TECHNOLOGY</span>
                <span>01 / 04</span>
              </div>

              <div className="how-visual-center">
                <div className="how-visual-ring">
                  <div className="how-visual-core">
                    <Droplets size={42} />
                    <strong>SMART</strong>
                    <span>WATER METER</span>
                  </div>
                </div>
              </div>

              <div className="how-visual-bottom">
                <span>ACCURATE MEASUREMENT</span>
                <span>SMARTER VISIBILITY</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WORKING PROCESS */}
      <section className="how-process">
        <div className="how-container">
          <motion.div
            className="how-section-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="how-section-eyebrow">
              THE WORKING PROCESS
            </span>

            <h2>
              From Water Flow
              <span> to Useful Information.</span>
            </h2>

            <p>
              A straightforward process that brings together
              water measurement, reading collection and
              consumption information.
            </p>
          </motion.div>

          <div className="how-process-list">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  className="how-process-item"
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="how-process-number">
                    {step.number}
                  </div>

                  <div className="how-process-icon">
                    <Icon size={25} />
                  </div>

                  <div className="how-process-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>

                  <ArrowUpRight
                    className="how-process-arrow"
                    size={22}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section className="how-technology">
        <div className="how-technology-container">
          <motion.div
            className="how-technology-visual"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="how-tech-label">
              <span>MEASUREMENT TECHNOLOGY</span>
              <Activity size={18} />
            </div>

            <div className="how-tech-diagram">
              <div className="how-tech-wave">
                <Waves size={48} />
              </div>

              <div className="how-tech-meter">
                <Droplets size={34} />
                <strong>ULTRASONIC</strong>
                <span>WATER MEASUREMENT</span>
              </div>

              <div className="how-tech-wave">
                <Waves size={48} />
              </div>
            </div>

            <div className="how-tech-footer">
              <span>WATER FLOW</span>
              <span>MEASUREMENT SIGNAL</span>
            </div>
          </motion.div>

          <motion.div
            className="how-technology-content"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="how-section-eyebrow">
              THE TECHNOLOGY
            </span>

            <h2>
              Understanding
              <span> Ultrasonic Measurement.</span>
            </h2>

            <p>
              Ultrasonic water meters use sound waves to measure
              the movement of water through a pipe. The meter
              processes measurement signals to determine water
              consumption.
            </p>

            <div className="how-tech-points">
              <div>
                <CheckCircle2 size={19} />
                <span>Measures water flow using ultrasonic technology</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Processes measurement signals electronically</span>
              </div>

              <div>
                <CheckCircle2 size={19} />
                <span>Provides consumption readings for supported applications</span>
              </div>
            </div>

            <Link to="/products" className="how-text-link">
              Discover the Meter <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* MEASUREMENT TO INFORMATION */}
      <section className="how-information">
        <div className="how-container">
          <div className="how-information-heading">
            <span className="how-section-eyebrow">
              THE READING JOURNEY
            </span>

            <h2>
              From Measurement
              <span> to Water Usage Information.</span>
            </h2>

            <p>
              Understand how a meter reading can move from
              measurement to an accessible consumption record.
            </p>
          </div>

          <div className="how-information-flow">
            <div className="how-info-step">
              <div className="how-info-icon">
                <Droplets size={27} />
              </div>
              <span>STEP 01</span>
              <h3>Water Flow</h3>
              <p>Water passes through the installed meter.</p>
            </div>

            <div className="how-info-connector">
              <ArrowRight size={22} />
            </div>

            <div className="how-info-step">
              <div className="how-info-icon">
                <Gauge size={27} />
              </div>
              <span>STEP 02</span>
              <h3>Measurement</h3>
              <p>The meter measures water consumption.</p>
            </div>

            <div className="how-info-connector">
              <ArrowRight size={22} />
            </div>

            <div className="how-info-step">
              <div className="how-info-icon">
                <Radio size={27} />
              </div>
              <span>STEP 03</span>
              <h3>Reading Collection</h3>
              <p>Readings are collected using a supported method.</p>
            </div>

            <div className="how-info-connector">
              <ArrowRight size={22} />
            </div>

            <div className="how-info-step">
              <div className="how-info-icon">
                <BarChart3 size={27} />
              </div>
              <span>STEP 04</span>
              <h3>Usage Information</h3>
              <p>Consumption records can be reviewed in a compatible system.</p>
            </div>
          </div>

          <p className="how-information-note">
            Reading and communication methods depend on the
            selected meter model and system configuration.
          </p>
        </div>
      </section>

      {/* SYSTEM COMPONENTS */}
      <section className="how-components">
        <div className="how-container">
          <div className="how-components-heading">
            <div>
              <span className="how-section-eyebrow">
                INSIDE THE SYSTEM
              </span>

              <h2>
                The Key Components
                <span> Behind the Process.</span>
              </h2>
            </div>

            <p>
              Each component contributes to the measurement
              and reading process of a compatible smart
              water metering solution.
            </p>
          </div>

          <div className="how-components-grid">
            {systemComponents.map((component, index) => {
              const Icon = component.icon;

              return (
                <motion.div
                  className="how-component-card"
                  key={component.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="how-component-top">
                    <span>{component.number}</span>
                    <Icon size={25} />
                  </div>

                  <h3>{component.title}</h3>
                  <p>{component.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="how-final-cta">
        <motion.div
          className="how-final-cta-content"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="how-cta-eyebrow">
            TAKE THE NEXT STEP
          </span>

          <h2>
            Ready to Understand
            <span> Smarter Water Measurement?</span>
          </h2>

          <p>
            Explore Pinnacle water meter solutions or connect
            with our team to find the right option for your
            application.
          </p>

          <div className="how-cta-actions">
            <Link to="/contact" className="how-cta-primary">
              Contact Our Team <ArrowUpRight size={18} />
            </Link>

            <Link to="/products" className="how-cta-secondary">
              Explore Products
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
};

export default HowItWorks;
