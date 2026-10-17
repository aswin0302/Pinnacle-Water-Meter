import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import InfoSection from "./components/InfoSection";

export default function App() {
  return (
    <>
      <Navbar />

      <main id="home">
        <Hero />

        <About />

        <InfoSection
          id="product"
          eyebrow="Our Product"
          title="Smart water measurement, made clearer."
          description="Present the actual meter models, specifications,
          supported connectivity, and installation requirements."
          background="#EAF6FF"
        />

        <InfoSection
          id="how-it-works"
          eyebrow="How It Works"
          title="From water measurement to useful insights."
          description="Explain the real process from meter readings
          to data collection and the customer's monitoring system."
        />

        <InfoSection
          id="benefits"
          eyebrow="Why Pinnacle"
          title="Built around better water management."
          description="Describe verified benefits using actual
          product capabilities and customer use cases."
          background="#F6F9FC"
        />

        <InfoSection
          id="applications"
          eyebrow="Applications"
          title="Smart metering for different environments."
          description="Show only the residential, commercial,
          industrial, or utility applications supported by the product."
        />

        <InfoSection
          id="technology"
          eyebrow="Technology"
          title="Understand your water usage."
          description="Introduce the real dashboard, data connectivity,
          reporting features, and integrations, where available."
          background="#EAF6FF"
        />

        <InfoSection
          id="faq"
          eyebrow="Frequently Asked Questions"
          title="Questions about smart water meters?"
          description="Add expandable answers about installation,
          compatibility, maintenance, and support."
        />

        <InfoSection
          id="contact"
          eyebrow="Contact Us"
          title="Let's discuss your water metering needs."
          description="Add your verified company contact information
          and a working product enquiry form."
          background="#F6F9FC"
        />
      </main>

      <footer className="site-footer">
        <div className="section-container">
          <p>© {new Date().getFullYear()} Pinnacle. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}