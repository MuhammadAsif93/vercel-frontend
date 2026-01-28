import React, { useEffect, useState } from "react";
import profileCircle from "../assets/Asif.jpg";
import resumePdf from "../assets/muhammadasif-cv.pdf";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "Full Stack Developer",
    "Data Scientist",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000); // ⏱ 3 sec delay

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="hero-section">
      <div className="hero-container">

        {/* LEFT TEXT */}
        <div className="hero-text">
          <h2 className="hero-hello">
            <span className="hover-word">Hello</span>
            <span className="hero-dot hover-dot">.</span>
          </h2>

          <h3 className="hero-im">
            <span className="hero-line"></span>
            <span className="hover-word">I’m</span>{" "}
            <span className="hero-name highlight-name">Muhammad Asif</span>
          </h3>

          {/* 🔥 ROLE ANIMATION */}
          <h1 className="hero-role">
            <span key={roleIndex} className="role-animate">
              {roles[roleIndex]}
            </span>
          </h1>

          <div className="hero-buttons">
            <a className="hero-btn primary" href="#contact">
              Hire Me
            </a>
            <a className="hero-btn secondary" href={resumePdf} download>
              My Resume
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-image">
          <div className="glow-ring"></div>
          <img src={profileCircle} alt="Muhammad Asif" className="hero-photo" />
        </div>
      </div>
    </section>
  );
}
