import React from "react";
import whatsappLogo from "../assets/social/whatsapp.png"; // <- make sure path matches your file

export default function FloatingWhatsApp() {
  const whatsappLink =
    "https://wa.me/923460649953?text=Hi%20Muhammad%20Asif,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.";

  return (
    <a
      href={whatsappLink}
      className="floating-whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <div className="floating-whatsapp-circle">
        <img
          src={whatsappLogo}
          alt="WhatsApp"
          className="floating-whatsapp-icon"
        />
      </div>
    </a>
  );
}
