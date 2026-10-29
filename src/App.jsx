import {
  House,
  Building2,
  Factory,
  Gauge,
  Radio,
  ShieldCheck,
  ArrowUp,
} from "lucide-react";

import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProductSection from "./components/ProductSection";
import InfoSection from "./components/InfoSection";
import Products from "./pages/Products";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// ========================================
// HOME PAGE
// ========================================
function HomePage() {
  return (
    <main id="home">
      <Hero />

      <About />

      <ProductSection />

      <section
        id="how-it-works"
        className="content-section how-it-works-section"
      >
        <div className="section-container">
          <span className="section-eyebrow">HOW IT WORKS</span>

          <h2 className="section-title">
            From every drop to better decisions.
          </h2>

          <p className="section-description">
            Discover the key stages of smart water measurement.
            Actual data transmission and monitoring depend on the
            meter model and compatible communication system.
          </p>

          <div className="process-grid">
            <article className="process-card">
              <div className="process-number">01</div>
              <h3>Measure</h3>
              <p>
                The meter measures water consumption using its
                supported measurement technology.
              </p>
            </article>

            <article className="process-card">
              <div className="process-number">02</div>
              <h3>Transmit</h3>
              <p>
                Where supported, readings can be transmitted
                through a compatible communication system.
              </p>
            </article>

            <article className="process-card">
              <div className="process-number">03</div>
              <h3>Monitor</h3>
              <p>
                Access readings through a compatible monitoring
                platform, where available.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="benefits"
        className="content-section benefits-section"
      >
        <div className="section-container">
          <span className="section-eyebrow">WHY PINNACLE</span>

          <h2 className="section-title">
            Smarter measurement.
            <br />
            Better water management.
          </h2>

          <p className="section-description">
            Discover how smart water measurement can support clearer
            consumption readings and informed water management.
          </p>

          <div className="benefits-grid">
            <article className="benefit-card">
              <div className="benefit-number">01</div>
              <h3>Accurate Measurement</h3>
              <p>
                Explore the measurement capabilities specified for
                your selected water meter model.
              </p>
            </article>

            <article className="benefit-card">
              <div className="benefit-number">02</div>
              <h3>Remote Reading Options</h3>
              <p>
                Compatible models and communication systems can
                support remote access to meter readings.
              </p>
            </article>

            <article className="benefit-card">
              <div className="benefit-number">03</div>
              <h3>Built for Your Needs</h3>
              <p>
                Review model specifications to identify the meter
                and features suitable for your application.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="applications"
        className="content-section applications-section"
      >
        <div className="section-container">
          <span className="section-eyebrow">APPLICATIONS</span>

          <h2 className="section-title">
            Smart water metering for different environments.
          </h2>

          <p className="section-description">
            Explore potential applications for smart water measurement.
            Confirm suitability with the specifications of your selected
            Pinnacle meter model.
          </p>

          <div className="applications-grid">
            <article className="application-card">
              <div className="application-number">
                <House size={25} strokeWidth={1.8} />
              </div>
              <h3>Residential</h3>
              <p>
                Water consumption measurement for suitable homes and
                residential properties.
              </p>
            </article>

            <article className="application-card">
              <div className="application-number">
                <Building2 size={25} strokeWidth={1.8} />
              </div>
              <h3>Commercial</h3>
              <p>
                Metering options for offices, shops, and other
                commercial premises where supported.
              </p>
            </article>

            <article className="application-card">
              <div className="application-number">
                <Factory size={25} strokeWidth={1.8} />
              </div>
              <h3>Industrial</h3>
              <p>
                Explore meter suitability for industrial water
                applications using the product specifications.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="technology"
        className="content-section technology-section"
      >
        <div className="section-container">
          <span className="section-eyebrow">OUR TECHNOLOGY</span>

          <h2 className="section-title">
            Technology that helps you understand water usage.
          </h2>

          <p className="section-description">
            Explore the key capabilities of smart water metering.
            Available features depend on the selected meter model
            and its specifications.
          </p>

          <div className="technology-grid">
            <article className="technology-card">
              <div className="technology-icon">
                <Gauge size={28} strokeWidth={1.8} />
              </div>
              <h3>Ultrasonic Measurement</h3>
              <p>
                Discover the ultrasonic measurement technology
                specified for compatible Pinnacle meter models.
              </p>
            </article>

            <article className="technology-card">
              <div className="technology-icon">
                <Radio size={28} strokeWidth={1.8} />
              </div>
              <h3>Communication Options</h3>
              <p>
                Explore the communication interfaces and remote
                reading options supported by the selected model.
              </p>
            </article>

            <article className="technology-card">
              <div className="technology-icon">
                <ShieldCheck size={28} strokeWidth={1.8} />
              </div>
              <h3>Product Protection</h3>
              <p>
                Review the specified protection rating and
                operating conditions for your chosen meter.
              </p>
            </article>
          </div>
        </div>
      </section>

      <InfoSection
        id="faq"
        eyebrow="Frequently Asked Questions"
        title="Questions about smart water meters?"
        description="Have questions about meter specifications, installation, communication options, or maintenance? Contact the Pinnacle team for guidance on your selected meter model and its supported features."
        background="#FFFFFF"
      />

      <InfoSection
        id="contact"
        eyebrow="Contact Us"
        title="Let's discuss your water metering needs."
        description="Looking for the right smart water metering solution? Contact the Pinnacle team to discuss your requirements, product specifications, installation, and available communication options."
        background="#F6F9FC"
      />
    </main>
  );
}

// ========================================
// SHARED BACK TO TOP BUTTON
// ========================================
function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  if (!showBackToTop) {
    return null;
  }

  return (
    <button
      className="back-to-top"
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp size={22} />
    </button>
  );
}

// ========================================
// SHARED APP LAYOUT
// ========================================
export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <>
      {/* Shared header */}
      <Navbar />

      {/* Page content */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* Shared footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="/#home" className="footer-logo-link">
                <img
                  src="/images/SMART-METER-LOGO-Web.png"
                  alt="Pinnacle Smart Water Meter"
                  className="footer-logo"
                />
              </a>

              <p>
                Smarter water management through innovative metering
                technology, accurate monitoring, and connected solutions.
              </p>
            </div>

            <div className="footer-column">
              <h3>Quick Links</h3>
              <a href="/#home">Home</a>
              <a href="/about">About Us</a>
              <a href="/products">Our Products</a>
              <a href="/#contact">Contact Us</a>
            </div>

            <div className="footer-column">
              <h3>Explore</h3>
              <a href="/#how-it-works">How It Works</a>
              <a href="/#benefits">Benefits</a>
              <a href="/#applications">Applications</a>
              <a href="/#technology">Technology</a>
            </div>

            <div className="footer-column footer-contact">
              <h3>Get in Touch</h3>
              <p>
                Looking for smarter water metering solutions?
                Connect with our team to learn more.
              </p>
              <a href="/#contact" className="footer-contact-link">
                Send an Enquiry <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} Pinnacle. All rights reserved.
            </p>

            <a
              href="#top"
              className="footer-back-to-top"
              onClick={(event) => {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </footer>

      {/* Shared floating Back to Top button */}
      <BackToTop />
    </>
  );
}
