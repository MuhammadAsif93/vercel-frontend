import React, { useState } from "react";

/**
 * API base URL:
 * - CRA -> REACT_APP_API_BASE (Vercel: set this to your backend URL)
 * - Vite -> VITE_API_BASE (if you ever switch to Vite)
 * - Fallback -> localhost for dev
 */
const API_BASE =
  process.env.REACT_APP_API_BASE ||
  (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_API_BASE) ||
  "http://localhost:4000";

export default function Contact() {
  // form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // validation + submit state
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState("");

  // simple validation
  function validate() {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Please enter your name.";
    if (!email.trim()) newErrors.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Please enter a valid email.";
    if (!message.trim()) newErrors.message = "Please enter your message.";
    return newErrors;
  }

  // submit -> call backend
  async function handleSubmit(e) {
    e.preventDefault();
    setServerError("");
    const foundErrors = validate();
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length) return;

    try {
      setSending(true);

      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      // try to parse JSON even on error so we can show server message
      let data = {};
      try { data = await res.json(); } catch {}

      if (!res.ok) {
        throw new Error(data?.error || "Failed to send message.");
      }

      // success -> clear form & show thanks
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setServerError(err?.message || "Something went wrong.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="contact-wrapper-theme">
      <div className="contact-inner-theme">
        <h2 className="contact-heading-glow">Contact Me</h2>

        <div className="contact-flex-row">
          {/* LEFT SIDE: info */}
          <div className="contact-info-block">
            <h3 className="contact-subtitle">Get in Touch</h3>

            <p className="contact-paragraph">
              If you have any questions, project proposals, or simply want to connect,
              please don’t hesitate to reach out. I’m eager to discuss opportunities
              and collaborate.
            </p>

            <p className="contact-line">
              <span className="contact-icon">📞</span>
              <span className="contact-strong">Phone:</span>{" "}
              <span className="contact-value">+92 346 0649953</span>
            </p>

            <p className="contact-line">
              <span className="contact-icon">✉️</span>
              <span className="contact-strong">Email:</span>{" "}
              <a
                className="contact-email-link"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=saif666.edu@gmail.com&su=Project%20Inquiry&body=Hello%20Saif,%0A%0AI'd%20like%20to%20discuss%20a%20project%20with%20you.%0A%0AThanks!"
                target="_blank"
                rel="noopener noreferrer"
              >
                asifahmad5261836@gmail.com
              </a>
            </p>

            <p className="contact-paragraph">
              I am actively seeking freelance projects, partnerships, and new
              challenges. Let’s work together to create something exceptional.
            </p>
          </div>

          {/* RIGHT SIDE: form */}
          <div className="contact-form-block">
            {submitted ? (
              <div className="contact-thanks-card">
                <div className="thanks-glow-ring" />
                <h3 className="thanks-title">Thank you!</h3>
                <p className="thanks-text">
                  Your message has been received. I’ll get back to you soon.
                </p>
                <button
                  className="submit-btn-theme"
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: 12 }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form-theme" onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div className="form-field">
                  <label className="form-label" htmlFor="name">Name:</label>
                  <input
                    id="name"
                    className={`form-input ${errors.name ? "form-input-error" : ""}`}
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                  />
                  {errors.name && <div className="form-error-text">{errors.name}</div>}
                </div>

                {/* Email */}
                <div className="form-field">
                  <label className="form-label" htmlFor="email">Email:</label>
                  <input
                    id="email"
                    className={`form-input ${errors.email ? "form-input-error" : ""}`}
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                  {errors.email && <div className="form-error-text">{errors.email}</div>}
                </div>

                {/* Message */}
                <div className="form-field">
                  <label className="form-label" htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    className={`form-textarea ${errors.message ? "form-input-error" : ""}`}
                    placeholder="Your Message"
                    rows="4"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  {errors.message && <div className="form-error-text">{errors.message}</div>}
                </div>

                {/* Server error */}
                {serverError && (
                  <div className="form-error-text" style={{ marginTop: 8 }}>
                    {serverError}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className={`submit-btn-theme ${sending ? "opacity-70 cursor-not-allowed" : ""}`}
                  disabled={sending}
                  aria-busy={sending ? "true" : "false"}
                >
                  {sending ? "Sending…" : "Submit"}
                </button>

                
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
