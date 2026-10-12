import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { addDoc, collection } from "firebase/firestore";
import { CONTACT } from "../constants";
import { db } from "../firebase";

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    setStatus(null);
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      await addDoc(collection(db, "contacts"), formData);
      setFormData(initialFormData);
      setStatus({ type: "success", message: "Message sent. I’ll be in touch soon." });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus({
        type: "error",
        message: "Your message couldn’t be sent. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      <motion.header
        className="contact-hero"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65 }}
      >
        <span className="contact-eyebrow">
          <Sparkles size={14} aria-hidden="true" />
          Good things start with a conversation
        </span>
        <h1>Let’s build<br /><span>something meaningful.</span></h1>
        <p>
          Have an idea, an opportunity, or a challenge to solve? Tell me what you’re thinking.
        </p>
      </motion.header>

      <div className="contact-layout">
        <motion.section
          className="contact-info"
          initial={{ opacity: 0, x: -22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          aria-labelledby="contact-details-heading"
        >
          <div className="contact-info-heading">
            <span className="contact-info-kicker">The direct route</span>
            <h2 id="contact-details-heading">Let’s turn your next idea into a real thing.</h2>
            <p>
              Whether you’re building something new or looking for the right person to join your team,
              my inbox is open.
            </p>
          </div>

          <div className="contact-detail-list">
            <div className="contact-detail-card">
              <span className="contact-detail-icon"><MapPin size={19} aria-hidden="true" /></span>
              <div>
                <span className="contact-detail-label">Based in</span>
                <p>{CONTACT.address}</p>
              </div>
            </div>
            <a className="contact-detail-card" href={`tel:${CONTACT.phoneNo.replace(/[^\d+]/g, "")}`}>
              <span className="contact-detail-icon"><Phone size={19} aria-hidden="true" /></span>
              <div>
                <span className="contact-detail-label">Give me a call</span>
                <p>{CONTACT.phoneNo}</p>
              </div>
              <ArrowUpRight className="contact-detail-arrow" size={17} aria-hidden="true" />
            </a>
            <a className="contact-detail-card" href={`mailto:${CONTACT.email}`}>
              <span className="contact-detail-icon"><Mail size={19} aria-hidden="true" /></span>
              <div>
                <span className="contact-detail-label">Send an email</span>
                <p>{CONTACT.email}</p>
              </div>
              <ArrowUpRight className="contact-detail-arrow" size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="contact-note">
            <span className="contact-note-dot" aria-hidden="true" />
            <span>Usually replies within 1–2 working days</span>
            <ArrowDownRight size={16} aria-hidden="true" />
          </div>
        </motion.section>

        <motion.section
          className="contact-form-card"
          initial={{ opacity: 0, x: 22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          aria-labelledby="contact-form-heading"
        >
          <div className="contact-form-heading">
            <span className="contact-form-icon"><Send size={17} aria-hidden="true" /></span>
            <div>
              <span className="contact-info-kicker">Start here</span>
              <h2 id="contact-form-heading">Send me a message</h2>
            </div>
            <span className="contact-form-step">01 / 01</span>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <label>
                <span>Your name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Jane Smith"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                <span>Email address</span>
                <input
                  type="email"
                  name="email"
                  placeholder="jane@example.com"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <label>
              <span>What’s this about?</span>
              <input
                type="text"
                name="subject"
                placeholder="Project, opportunity, or just saying hello"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              <span>A little more detail</span>
              <textarea
                name="message"
                placeholder="Tell me a bit about what you have in mind..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>

            {status && (
              <p
                className={`contact-form-status contact-form-status-${status.type}`}
                role={status.type === "error" ? "alert" : "status"}
              >
                {status.message}
              </p>
            )}

            <button className="contact-submit" type="submit" disabled={isSubmitting}>
              <span>{isSubmitting ? "Sending your message…" : "Send message"}</span>
              <Send size={16} aria-hidden="true" />
            </button>
            <p className="contact-form-footnote">Your details are only used to reply to your message.</p>
          </form>
        </motion.section>
      </div>
    </main>
  );
};

export default Contact;
