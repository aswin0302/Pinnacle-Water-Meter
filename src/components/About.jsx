
import { Droplets, Gauge, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Gauge,
    title: "Precision Measurement",
    description:
      "Present your water measurement technology and verified accuracy specifications.",
  },
  {
    icon: BarChart3,
    title: "Usage Visibility",
    description:
      "Help users understand water consumption through clear readings and useful insights.",
  },
  {
    icon: Droplets,
    title: "Smarter Water Management",
    description:
      "Support informed water management with the capabilities your product provides.",
  },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="about-heading">
          <span className="section-eyebrow">ABOUT PINNACLE</span>

          <h2>
            A smarter perspective
            <br />
            on every <span>drop.</span>
          </h2>

          <p>
            Discover a modern approach to water measurement,
            monitoring, and management with Pinnacle Smart
            Water Meter solutions.
          </p>
        </div>

        <div className="feature-grid">
          {features.map(({ icon: Icon, title, description }) => (
            <article className="feature-card" key={title}>
              <div className="feature-icon">
                <Icon size={25} />
              </div>

              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
