import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, Send } from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  subject: "Product Enquiry",
  message: "",
};

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
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
        setFormData(initialForm);
      } else {
        setSubmitSuccess(false);
        setSubmitMessage(
          result.message || "Unable to submit your enquiry. Please try again."
        );
      }
    } catch {
      setSubmitSuccess(false);
      setSubmitMessage(
        "Something went wrong. Please check your internet connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return createPortal(
    <div
      className="cm-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="cm-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cm-title"
      >
        <button
          type="button"
          className="cm-close"
          aria-label="Close"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <span className="cm-eyebrow">GET IN TOUCH</span>
        <h3 id="cm-title">Send us an enquiry</h3>
        <p className="cm-sub">Fields marked with * are required.</p>

        <form onSubmit={handleSubmit}>
          <div className="cm-grid">
            <div className="cm-field">
              <label htmlFor="cm-name">Full name *</label>
              <input
                id="cm-name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                autoFocus
              />
            </div>

            <div className="cm-field">
              <label htmlFor="cm-email">Email address *</label>
              <input
                id="cm-email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="cm-field">
              <label htmlFor="cm-phone">Phone number</label>
              <input
                id="cm-phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="cm-field">
              <label htmlFor="cm-org">Company / Organization</label>
              <input
                id="cm-org"
                name="organization"
                type="text"
                placeholder="Your company name"
                value={formData.organization}
                onChange={handleChange}
              />
            </div>

            <div className="cm-field cm-full">
              <label htmlFor="cm-subject">Enquiry type *</label>
              <select
                id="cm-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option>Product Enquiry</option>
                <option>Technical Support</option>
                <option>Bulk Order</option>
                <option>Project Discussion</option>
                <option>Other</option>
              </select>
            </div>

            <div className="cm-field cm-full">
              <label htmlFor="cm-message">Your message *</label>
              <textarea
                id="cm-message"
                name="message"
                rows="4"
                placeholder="Tell us about your requirements..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="cm-submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit Enquiry"}
            <Send size={17} />
          </button>

          {submitMessage && (
            <p
              className="cm-status"
              role="status"
              aria-live="polite"
              style={{ color: submitSuccess ? "#16803c" : "#c62828" }}
            >
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </div>,
    document.body
  );
}
