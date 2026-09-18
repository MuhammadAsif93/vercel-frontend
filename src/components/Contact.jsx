
import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!message.trim()) {
      newErrors.message = "Please enter your message.";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const foundErrors = validate();
    setErrors(foundErrors);

    if (Object.keys(foundErrors).length > 0) {
      return;
    }

    // Your email address
    const receiverEmail = "masif.dev3@gmail.com";

    // Email subject
    const subject = `New Contact Message from ${name}`;

    // Email body
    const emailBody = `Hello Muhammad Asif,

You have received a new message from your portfolio website.

Name: ${name}
Email: ${email}

Message:
${message}

--------------------------------
Sent from Muhammad Asif Portfolio
`;

    // Create mailto URL
    const mailtoURL = `mailto:${receiverEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Open email client in the same tab/window
    window.location.href = mailtoURL;

    // Show success message on the portfolio
    setSubmitted(true);

    // Clear form
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contact" className="contact-wrapper-theme">
      <div className="contact-inner-theme">

        <h2 className="contact-heading-glow">
          Contact Me
        </h2>

        <div className="contact-flex-row">

          {/* Contact Information */}
          <div className="contact-info-block">

            <h3 className="contact-subtitle">
              Get in Touch
            </h3>

            <p className="contact-paragraph">
              If you have any questions, project proposals, or simply want
              to connect, please don’t hesitate to reach out. I’m eager to
              discuss opportunities and collaborate.
            </p>

            <p className="contact-line">
              <span className="contact-icon">📞</span>
              <span className="contact-strong">Phone:</span>{" "}
              <span className="contact-value">
                +92 346 0649953
              </span>
            </p>

            <p className="contact-line">
              <span className="contact-icon">✉️</span>
              <span className="contact-strong">Email:</span>{" "}

              <a
                className="contact-email-link"
                href="mailto:masif.dev3@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                masif.dev3@gmail.com
              </a>
            </p>

          </div>

          {/* Contact Form */}
          <div className="contact-form-block">

            {submitted ? (

              <div className="contact-thanks-card">

                <div className="thanks-glow-ring" />

                <h3 className="thanks-title">
                  Thank you!
                </h3>

                <p className="thanks-text">
                  Your email message has been prepared.
                  Please press Send in your email app.
                </p>

                <button
                  className="submit-btn-theme"
                  onClick={() => {
                    setSubmitted(false);
                    setErrors({});
                  }}
                  style={{ marginTop: 12 }}
                >
                  Send another message
                </button>

              </div>

            ) : (

              <form
                className="contact-form-theme"
                onSubmit={handleSubmit}
                noValidate
              >

                {/* Name */}
                <div className="form-field">

                  <label
                    className="form-label"
                    htmlFor="name"
                  >
                    Name:
                  </label>

                  <input
                    id="name"
                    className={`form-input ${
                      errors.name ? "form-input-error" : ""
                    }`}
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setErrors((prev) => ({
                        ...prev,
                        name: "",
                      }));
                    }}
                  />

                  {errors.name && (
                    <div className="form-error-text">
                      {errors.name}
                    </div>
                  )}

                </div>

                {/* Email */}
                <div className="form-field">

                  <label
                    className="form-label"
                    htmlFor="email"
                  >
                    Email:
                  </label>

                  <input
                    id="email"
                    className={`form-input ${
                      errors.email ? "form-input-error" : ""
                    }`}
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setErrors((prev) => ({
                        ...prev,
                        email: "",
                      }));
                    }}
                  />

                  {errors.email && (
                    <div className="form-error-text">
                      {errors.email}
                    </div>
                  )}

                </div>

                {/* Message */}
                <div className="form-field">

                  <label
                    className="form-label"
                    htmlFor="message"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    className={`form-textarea ${
                      errors.message ? "form-input-error" : ""
                    }`}
                    placeholder="Your Message"
                    rows="4"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setErrors((prev) => ({
                        ...prev,
                        message: "",
                      }));
                    }}
                  />

                  {errors.message && (
                    <div className="form-error-text">
                      {errors.message}
                    </div>
                  )}

                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="submit-btn-theme"
                >
                  Submit
                </button>

              </form>

            )}

          </div>

        </div>
      </div>
    </section>
  );
}
