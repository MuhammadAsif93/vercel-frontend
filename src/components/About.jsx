import React from "react";
import AsifImg from "../assets/Asiff.jpg";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <div className="about-photo-wrapper">
          <img className="about-photo" src={AsifImg} alt="About Me" />
        </div>

        <div className="about-right">
          <h1 className="about-title">About Me</h1>

          <p className="about-desc">
            Hi, I’m <strong>Muhammad Asif</strong>, a passionate{" "}
            <strong>Full Stack Developer and Data Scientist</strong> with strong expertise in modern web technologies, software development, and data-driven solutions. I specialize in creating <strong>responsive, high-performance, and user-centric digital experiences</strong>.
          </p>

          <p className="about-desc">
            My skill set spans both <strong>frontend and backend development</strong>, as well as <strong>data analysis and machine learning</strong> — from designing intuitive user interfaces and scalable server logic to building efficient database architectures and data pipelines. I’m focused on delivering solutions that are both technically robust and practically useful.
          </p>

          <p className="about-desc">
            I’m dedicated to writing <strong>clean, maintainable code</strong>, leveraging best practices, and continuously learning emerging technologies. My goal is to build <strong>innovative, scalable, and data-driven applications</strong> that solve real-world problems and provide exceptional value to users.
          </p>

          <div className="about-stats">
            <div className="stat-block">
              <div className="stat-value">
                <span className="accent-number">30</span>
                <span className="accent-mark">+</span>
              </div>
              <div className="stat-label">Completed Projects</div>
            </div>

            <div className="stat-block">
              <div className="stat-value">
                <span className="accent-number">95</span>
                <span className="accent-mark">%</span>
              </div>
              <div className="stat-label">Client Satisfaction</div>
            </div>

            <div className="stat-block">
              <div className="stat-value">
                <span className="accent-number">2</span>
                <span className="accent-mark">+</span>
              </div>
              <div className="stat-label">Years of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
