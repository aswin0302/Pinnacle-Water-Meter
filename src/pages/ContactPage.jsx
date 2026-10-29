import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
  Clock,
  Building2,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    subject: "Product Enquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };
    

const handleSubmit = async (event) => {
  event.preventDefault();

  setIsSubmitting(true);
  setSubmitMessage("");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "533a4ca8-2473-47db-b62f-38dad3afc816",
        ...formData,
        from_name: "Pinnacle Smart Water Meter Website",
      }),
    });

    const result = await response.json();

    if (result.success) {
      setSubmitSuccess(true);
      setSubmitMessage("Thank you! Your enquiry has been submitted successfully.");

      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        subject: "Product Enquiry",
        message: "",
      });
    } else {
      setSubmitSuccess(false);
      setSubmitMessage(
        result.message || "Unable to submit your enquiry. Please try again."
      );
    }
  } catch (error) {
    setSubmitSuccess(false);
    setSubmitMessage(
      "Something went wrong. Please check your internet connection and try again."
    );
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-container">
          <span className="contact-eyebrow">
            CONTACT PINNACLE
          </span>

          <h1>
            Let's talk about
            <br />
            <span>smarter water management.</span>
          </h1>

          <p>
            Have questions about our smart water meters?
            Tell us what you need, and let's explore the right
            solution for your application.
          </p>

          <a href="#contact-form" className="contact-hero-link">
            Send an enquiry
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="contact-hero-decoration" aria-hidden="true">
          <div className="contact-orbit contact-orbit-one" />
          <div className="contact-orbit contact-orbit-two" />
          <div className="contact-orbit contact-orbit-three" />
          <div className="contact-water-drop">P</div>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-intro">
            <span className="contact-eyebrow">
              WE'RE HERE TO HELP
            </span>

            <h2>Get in touch with our team.</h2>

            <p>
              Share your requirements, product questions, or
              project details using the enquiry form.
            </p>
          </div>

        <div className="contact-locations">
        <div className="contact-location-heading">
            <span className="contact-eyebrow">OUR LOCATIONS</span>
            <h2>Connect with Pinnacle.</h2>
            <p>
            Reach our head office or manufacturing facility for
            product and business enquiries.
            </p>
        </div>

        <div className="contact-location-grid">
            <article className="contact-location-card">
            <div className="contact-location-icon">
                <MapPin size={23} />
            </div>
            <span className="contact-location-label">HEAD OFFICE</span>
            <h3>PINNACLE INFOSYS PTE LTD</h3>
            <address>
                Blk 3 Ang Mo Kio Industrial Park 2A,
                <br />
                #03-06 AMK Tech park 1,
                <br />
                Singapore - 568 050.
            </address>
            <span className="contact-location-country">Singapore</span>
            </article>

            <article className="contact-location-card">
            <div className="contact-location-icon">
                <Building2 size={23} />
            </div>
            <span className="contact-location-label">MANUFACTURING FACILITY</span>
            <h3>NISKO PINNACLE TELEMATICS PVT LTD</h3>
            <address>
                No.952, Patel Street, Veeriampalayam,
                <br />
                Coimbatore - Tamil Nadu,
                <br />
                India - 641 048.
            </address>
            <span className="contact-location-country">Coimbatore, India</span>
            </article>
        </div>

        <div className="contact-direct-details">
            <div className="contact-direct-item">
            <div className="contact-info-icon">
                <Phone size={21} />
            </div>
            <div>
                <span>CALL US</span>
                <a href="tel:+919833395772">+91 98333 95772</a>
                <a href="tel:+6598787519">+65 98787519</a>
            </div>
            </div>

            <div className="contact-direct-item">
            <div className="contact-info-icon">
                <Mail size={21} />
            </div>
            <div>
                <span>EMAIL US</span>
                <a href="mailto:sales@pinnnacleinfosys.com">
                sales@pinnnacleinfosys.com
                </a>
            </div>
            </div>

            <div className="contact-direct-item">
            <div className="contact-info-icon">
                <ArrowUpRight size={21} />
            </div>
            <div>
                <span>VISIT OUR WEBSITE</span>
                <a
                href="https://www.pinnacleinfosys.com"
                target="_blank"
                rel="noreferrer"
                >
                www.pinnacleinfosys.com
                </a>
            </div>
            </div>
        </div>
        </div>


        <div className="contact-layout">
            <div className="contact-info">
              <div className="contact-info-heading">
                <span>LET'S CONNECT</span>
                <h3>How can we help you?</h3>
                <p>
                  Contact us about product specifications,
                  suitable applications, or your water metering needs.
                </p>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Mail size={21} />
                </div>
                <div>
                  <h4>Email enquiries</h4>
                  <p>
                    Use the enquiry form to contact our team.
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone size={21} />
                </div>
                <div>
                  <h4>Product assistance</h4>
                  <p>
                    Ask about product options and technical
                    specifications.
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={21} />
                </div>
                <div>
                  <h4>Project enquiries</h4>
                  <p>
                    Tell us about your location and application
                    requirements in the message.
                  </p>
                </div>
              </div>

              <div className="contact-response-note">
                <Clock size={18} />
                <p>
                  Please provide accurate contact details so your
                  enquiry can be followed up once a submission
                  service is connected.
                </p>
              </div>
            </div>

            <div className="contact-form-card" id="contact-form">
              <div className="contact-form-heading">
                <span>CONTACT FORM</span>
                <h3>Send us an enquiry</h3>
                <p>
                  Fields marked with * are required.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="contact-form-grid">
                  <div className="contact-field">
                    <label htmlFor="contact-name">
                      Full name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-email">
                      Email address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-phone">
                      Phone number
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="contact-organization">
                      Company / Organization
                    </label>
                    <input
                      id="contact-organization"
                      name="organization"
                      type="text"
                      placeholder="Your company name"
                      value={formData.organization}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="contact-field contact-field-full">
                    <label htmlFor="contact-subject">
                      Enquiry type *
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="Product Enquiry">
                        Product Enquiry
                      </option>
                      <option value="Technical Support">
                        Technical Support
                      </option>
                      <option value="Bulk Order">
                        Bulk Order
                      </option>
                      <option value="Project Discussion">
                        Project Discussion
                      </option>
                      <option value="Other">
                        Other
                      </option>
                    </select>
                  </div>

                  <div className="contact-field contact-field-full">
                    <label htmlFor="contact-message">
                      Your message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="5"
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="contact-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                  <Send size={17} />
                </button>

                {submitMessage && (
                    <p
                        className="contact-form-disclaimer"
                        role="status"
                        aria-live="polite"
                        style={{
                        color: submitSuccess ? "#16803c" : "#c62828",
                        }}
                    >
                        {submitMessage}
                    </p> 
                )}

                <p className="contact-form-disclaimer">
                Your information will be used to respond to your enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
