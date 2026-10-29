
export default function InfoSection({
  id,
  eyebrow,
  title,
  description,
  background = "#ffffff",
}) {
  return (
    <section
      id={id}
      className="content-section"
      style={{ background }}
    >
      <div className="section-container">
        <span className="section-eyebrow">{eyebrow}</span>
        <h2 className="section-title">{title}</h2>
        <p className="section-description">{description}</p>

        
        {id === "faq" && (
          <div
              className="faq-list"
              onToggle={(event) => {
                if (event.target.open) {
                  document.querySelectorAll(".faq-item").forEach((item) => {
                    if (item !== event.target) {
                      item.open = false;
                    }
                  });
                }
              }}
            >
            <details className="faq-item">
              <summary>What is a smart water meter?</summary>
              <p>
                A smart water meter measures water consumption.
                Depending on the model, it may also support electronic
                reading or communication features.
              </p>
            </details>

            <details className="faq-item">
              <summary>Can I monitor water usage remotely?</summary>
              <p>
                Remote monitoring depends on the selected meter model,
                its communication capabilities, and a compatible system.
              </p>
            </details>

            <details className="faq-item">
              <summary>How do I choose the right meter?</summary>
              <p>
                Consider your installation requirements, pipe size,
                expected flow range, and the technical specifications
                of the meter. Contact our team for assistance.
              </p>
            </details>

            <details className="faq-item">
              <summary>Where can I get product specifications?</summary>
              <p>
                Contact the Pinnacle team to request the specifications
                and available features for your required meter model.
              </p>
            </details>

            <details className="faq-item">
              <summary>How can I contact Pinnacle?</summary>
              <p>
                Use the contact form below to send an enquiry about
                your water metering requirements.
              </p>
            </details>
          </div>
        )}


        {id === "contact" && (
          <form
            className="contact-form"
            onSubmit={(event) => {
              event.preventDefault();
              alert(
                "Thank you for your enquiry! Please contact the Pinnacle team to complete your request."
              );
              event.currentTarget.reset();
            }}
          >
            <div className="contact-form-grid">
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                aria-label="Your full name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your email address"
                aria-label="Your email address"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                aria-label="Your phone number"
                required
              />

              <input
                type="text"
                name="company"
                placeholder="Company name (optional)"
                aria-label="Company name"
              />
            </div>

            <textarea
              name="message"
              placeholder="Tell us about your requirements"
              aria-label="Your enquiry message"
              rows="5"
              required
            />

            <button type="submit" className="btn-primary contact-submit">
              Submit Enquiry
            </button>

            <p className="contact-form-note">
              Please don't include sensitive personal information.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
