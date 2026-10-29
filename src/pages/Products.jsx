
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Droplets,
  Gauge,
  Radio,
  ShieldCheck,
  BatteryCharging,
  Wifi,
  Thermometer,
  Database,
  Building2,
  Factory,
  House,
  CheckCircle2,
  ChevronDown,
  Waves,
  Activity,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Gauge,
    title: "Ultrasonic Measurement",
    description:
      "Static ultrasonic technology designed for precise measurement of cold and hot water.",
  },
  {
    icon: Radio,
    title: "Remote Reading",
    description:
      "Radio-enabled remote reading supports walk-by, drive-by, passive drive-by, and fixed-network operation.",
  },
  {
    icon: ShieldCheck,
    title: "IP68 Protection",
    description:
      "IP68 protection rating, as specified in the supplied product datasheet.",
  },
  {
    icon: BatteryCharging,
    title: "Long Battery Life",
    description:
      "Specified battery lifetime of up to 15 years, depending on operating and communication conditions.",
  },
  {
    icon: Activity,
    title: "Display & Alarms",
    description:
      "LCD display with measurement information, symbols, error codes, and alarm indications.",
  },
  {
    icon: Database,
    title: "Data Logging",
    description:
      "Logging capability for up to 4,000 daily values and six monthly values.",
  },
];

const benefits = [
  {
    number: "01",
    title: "Better Water Visibility",
    description:
      "Read water consumption information and flow-related indications directly from the meter display.",
  },
  {
    number: "02",
    title: "Flexible Reading Options",
    description:
      "Choose a supported remote-reading approach based on your installation and communication requirements.",
  },
  {
    number: "03",
    title: "Designed for Long-Term Use",
    description:
      "A battery-powered meter with a specified lifetime of up to 15 years under suitable conditions.",
  },
  {
    number: "04",
    title: "Useful Meter Diagnostics",
    description:
      "Display indications can include reverse flow, low battery, leakage, radio status, and alarm information.",
  },
];

const applications = [
  {
    icon: House,
    title: "Residential Buildings",
    description:
      "Water consumption measurement for houses, apartments, and residential properties.",
  },
  {
    icon: Building2,
    title: "Commercial Properties",
    description:
      "Metering applications in commercial buildings and property developments.",
  },
  {
    icon: Factory,
    title: "Industrial Facilities",
    description:
      "Suitable water-metering applications selected according to flow, size, and installation requirements.",
  },
];

const specifications = [
  ["Measurement technology", "Ultrasonic static water meter"],
  ["Water application", "Cold and hot water"],
  ["Nominal diameter range", "DN 15–DN 50"],
  ["Protection class", "IP68"],
  ["Nominal pressure", "PN 16 bar"],
  ["Medium temperature range", "+0.1°C to +90°C"],
  ["Ambient operating temperature", "−10°C to +55°C"],
  ["Ambient storage temperature", "−10°C to +70°C"],
  ["Environmental class", "O — Outdoors"],
  ["Mechanical environmental class", "M2"],
  ["Electromagnetic environmental class", "E2"],
  ["Power supply", "3.6 V DC lithium battery"],
  ["Battery lifetime", "Up to 15 years, subject to operating conditions"],
  [
    "Communication interfaces",
    "M-Bus, Modbus, Pulse, BLE, NB-IoT, GSM and 5G; other options listed in the datasheet include LoRa, Wi-Fi and Bluetooth",
  ],
  ["Data storage", "Up to 4,000 daily values and 6 monthly values"],
  ["Display", "9-digit LCD with symbols and measurement indications"],
  ["Standards", "ISO 4064; OIML R49 listed for applicable meter configurations"],
];

const faqs = [
  {
    question: "What is the Pinnacle Smart Water Meter?",
    answer:
      "It is a static ultrasonic water meter designed to measure cold and hot water consumption. The datasheet lists meter sizes from DN 15 to DN 50.",
  },
  {
    question: "Can the meter be read remotely?",
    answer:
      "Yes. The datasheet describes radio-enabled remote reading through walk-by, drive-by, passive drive-by, and fixed-network operation. Confirm the communication interface supported by your selected model.",
  },
  {
    question: "Which communication options are supported?",
    answer:
      "The datasheet lists M-Bus, Modbus, Pulse, BLE, NB-IoT, GSM, and 5G in its technical data. It also discusses LoRa, Wi-Fi, and Bluetooth. Availability depends on the selected configuration.",
  },
  {
    question: "What is the meter's battery life?",
    answer:
      "The datasheet specifies a battery lifetime of up to 15 years. Actual lifetime depends on factors such as transmission frequency, transmitted data, and ambient temperature.",
  },
  {
    question: "Is the water meter waterproof?",
    answer:
      "The supplied datasheet specifies an IP68 protection class. Confirm the installation requirements with the Pinnacle team before selecting a model.",
  },
  {
    question: "How do I choose the correct meter size?",
    answer:
      "The datasheet covers DN 15, DN 20, DN 25, DN 40, and DN 50 configurations. The correct size depends on your required flow rate, pipe connection, and installation conditions. Contact our team for selection assistance.",
  },
];

function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className={`products-section-heading ${light ? "is-light" : ""}`}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function Products() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="products-page">
      {/* 1. PRODUCT HERO */}
      <section className="products-hero">
        <div className="products-hero-grid" />

        <motion.div
          className="products-hero-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">
            PINNACLE SMART METERS
          </span>

          <h1>
            Smarter Water
            <br />
            <span className="product-highlight">
              Measurement Starts Here.
            </span>
          </h1>

          <p>
            Discover Pinnacle's ultrasonic smart water meter for cold
            and hot water applications, with remote-reading capabilities
            and flexible communication options.
          </p>

          <div className="products-hero-actions">
            <a href="#product-overview" className="btn-primary product-button">
              Explore the Meter <ArrowRight size={18} />
            </a>

            <a href="/#contact" className="products-text-link">
              Talk to our team
            </a>
          </div>

          <div className="products-hero-stats">
            <div>
              <strong>DN 15–50</strong>
              <span>Meter sizes</span>
            </div>
            <div>
              <strong>IP68</strong>
              <span>Protection class</span>
            </div>
            <div>
              <strong>Up to 15 years</strong>
              <span>Specified battery life</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="products-hero-visual"
          initial={{ opacity: 0, scale: 0.94, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="products-hero-orbit" />
          <div className="products-hero-image-wrap">
            <img
              src="/images/water-meter01.jpeg"
              alt="Pinnacle ultrasonic smart water meter"
            />
          </div>

          <div className="products-floating-note">
            <span className="products-floating-icon">
              <Waves size={20} />
            </span>
            <div>
              <strong>Ultrasonic technology</strong>
              <span>Cold & hot water metering</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. PRODUCT OVERVIEW */}
      <section
        id="product-overview"
        className="products-overview-section"
      >
        <div className="products-overview-layout">
          <motion.div
            className="products-overview-visual"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="products-overview-image">
              <img
                src="/images/water-meter01.jpeg"
                alt="Pinnacle Smart Water Meter product view"
              />
            </div>
            <div className="products-image-caption">
              <Droplets size={19} />
              <span>Designed for cold and hot water applications</span>
            </div>
          </motion.div>

          <motion.div
            className="products-overview-content"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow">PRODUCT OVERVIEW</span>
            <h2>
              Clearer Water Insights.
              <br />
              <span className="product-highlight">
                Smarter Metering.
              </span>
            </h2>

            <p>
              The Pinnacle Smart Water Meter uses static ultrasonic
              measuring technology for cold and hot water applications.
              Its integrated radio capabilities support remote reading
              and alarm transmission through supported reading systems.
            </p>

            <p>
              With display diagnostics, data logging, and a range of
              communication interfaces listed in the datasheet, it
              offers flexible options for different metering needs.
              Available interfaces and technical values vary by model.
            </p>

            <div className="products-overview-points">
              <span>
                <CheckCircle2 size={18} /> Ultrasonic measurement
              </span>
              <span>
                <CheckCircle2 size={18} /> Remote-reading options
              </span>
              <span>
                <CheckCircle2 size={18} /> Display and alarm indications
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. KEY FEATURES */}
      <section className="products-features-section">
        <div className="products-section-container">
          <SectionHeading
            eyebrow="BUILT FOR SMART METERING"
            title="Features That Make a Difference"
            description="Explore the main capabilities described in the Pinnacle Smart Water Meter datasheet."
          />

          <div className="products-feature-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  className="products-feature-card"
                  key={feature.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                >
                  <div className="products-card-icon">
                    <Icon size={23} />
                  </div>
                  <span className="products-card-number">
                    0{index + 1}
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. BENEFITS */}
      <section className="products-benefits-section">
        <div className="products-benefits-layout">
          <div className="products-benefits-intro">
            <span className="section-eyebrow">WHY PINNACLE</span>
            <h2>
              Technology for
              <br />
              <span className="product-highlight">
                Better Water Management.
              </span>
            </h2>
            <p>
              Make use of measurement information, remote-reading
              capabilities, and meter diagnostics to support your
              water-management workflow.
            </p>

            <a href="/#contact" className="btn-primary product-button">
              Discuss Your Requirements <ArrowRight size={18} />
            </a>
          </div>

          <div className="products-benefits-list">
            {benefits.map((benefit, index) => (
              <motion.article
                className="products-benefit-item"
                key={benefit.number}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <span className="products-benefit-number">
                  {benefit.number}
                </span>
                <div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. APPLICATIONS */}
      <section className="products-applications-section">
        <div className="products-section-container">
          <SectionHeading
            eyebrow="APPLICATIONS"
            title="One Metering Solution. Different Needs."
            description="Explore potential application settings and select a meter configuration suited to your requirements."
          />

          <div className="products-applications-grid">
            {applications.map((application, index) => {
              const Icon = application.icon;

              return (
                <motion.article
                  className="products-application-card"
                  key={application.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                >
                  <div className="products-application-icon">
                    <Icon size={26} />
                  </div>
                  <h3>{application.title}</h3>
                  <p>{application.description}</p>
                  <a href="/#contact" aria-label={`Enquire about ${application.title}`}>
                    Discuss application <ArrowRight size={16} />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="products-how-section">
        <div className="products-section-container">
          <SectionHeading
            eyebrow="HOW IT WORKS"
            title="From Water Flow to Useful Information"
            description="A simplified overview of the meter's measurement and reading process."
          />

          <div className="products-steps-grid">
            <article className="products-step-card">
              <span className="products-step-number">01</span>
              <div className="products-step-icon">
                <Waves size={26} />
              </div>
              <h3>Measure</h3>
              <p>
                Ultrasonic technology measures water flow through the
                selected meter configuration.
              </p>
            </article>

            <div className="products-step-connector">
              <ArrowRight size={22} />
            </div>

            <article className="products-step-card">
              <span className="products-step-number">02</span>
              <div className="products-step-icon">
                <Gauge size={26} />
              </div>
              <h3>Display & Record</h3>
              <p>
                The meter displays measurement information and supports
                data logging and diagnostic indications.
              </p>
            </article>

            <div className="products-step-connector">
              <ArrowRight size={22} />
            </div>

            <article className="products-step-card">
              <span className="products-step-number">03</span>
              <div className="products-step-icon">
                <Radio size={26} />
              </div>
              <h3>Read Remotely</h3>
              <p>
                Use a compatible supported interface and reading system
                for remote data access where configured.
              </p>
            </article>
          </div>

          <p className="products-process-note">
            Remote reading and integration depend on the selected meter,
            communication interface, and compatible system.
          </p>
        </div>
      </section>

      {/* 7. TECHNICAL SPECIFICATIONS */}
      <section className="products-specs-section">
        <div className="products-section-container">
          <SectionHeading
            eyebrow="TECHNICAL SPECIFICATIONS"
            title="Product Details at a Glance"
            description="Specifications transcribed from the supplied Pinnacle Smart Water Meter datasheet. Confirm model-specific values before installation or purchase."
          />

          <div className="products-specs-layout">
            <div className="products-specs-intro">
              <div className="products-specs-icon">
                <Zap size={27} />
              </div>
              <h3>Designed for versatile metering</h3>
              <p>
                Review the general product specifications and consult
                Pinnacle for the detailed flow-rate, connection, and
                dimension tables for your selected nominal diameter.
              </p>

              <div className="products-spec-highlight">
                <span>Nominal diameter range</span>
                <strong>DN 15–DN 50</strong>
              </div>
              <div className="products-spec-highlight">
                <span>Nominal pressure</span>
                <strong>PN 16 bar</strong>
              </div>
              <div className="products-spec-highlight">
                <span>Protection class</span>
                <strong>IP68</strong>
              </div>
            </div>

            <div className="products-specs-table-wrap">
              <table className="products-specs-table">
                <tbody>
                  {specifications.map(([label, value]) => (
                    <tr key={label}>
                      <th scope="row">{label}</th>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="products-specs-disclaimer">
            Note: Communication options, flow rates, dimensions, connections,
            approvals, and other performance values can differ by model.
            Please request the relevant technical sheet from Pinnacle before
            specifying a meter.
          </p>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="products-faq-section">
        <div className="products-faq-layout">
          <div className="products-faq-intro">
            <span className="section-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h2>
              Questions About
              <br />
              <span className="product-highlight">Our Smart Meter?</span>
            </h2>
            <p>
              Find answers to common questions about the meter's
              specifications, communication, and applications.
            </p>
            <a href="/#contact" className="products-faq-contact">
              Have another question? Contact us <ArrowRight size={17} />
            </a>
          </div>

          <div className="products-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <article
                  className={`products-faq-item ${isOpen ? "is-open" : ""}`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="products-faq-question"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className="products-faq-chevron"
                    />
                  </button>

                  {isOpen && (
                    <div className="products-faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. FINAL ENQUIRY CTA */}
      <section className="products-cta-section">
        <div className="products-cta-glow" />

        <motion.div
          className="products-cta-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="products-cta-icon">
            <Droplets size={27} />
          </div>
          <span className="section-eyebrow">LET'S TALK WATER MANAGEMENT</span>
          <h2>
            Looking for the Right
            <br />
            <span className="product-highlight">Smart Water Meter?</span>
          </h2>
          <p>
            Tell us about your application, required meter size, and
            communication needs. Our team can help you explore a suitable
            configuration.
          </p>
          <a href="/#contact" className="btn-primary product-button">
            Enquire Now <ArrowRight size={18} />
          </a>
        </motion.div>
      </section>
    </main>
  );
}
