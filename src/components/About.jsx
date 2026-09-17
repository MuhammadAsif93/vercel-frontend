import React from "react";
import AsifImg1 from "../assets/Asif1.png";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <div className="about-photo-wrapper">
          <img className="about-photo" src={AsifImg1} alt="About Me" />
        </div>

        <div className="about-right">
          <h1 className="about-title">About Me</h1>

          <p className="about-desc">
  Hi, I’m <strong>Muhammad Asif</strong>, a <strong>Software Engineering student at Sindh Madressatul Islam University (SMIU), Karachi</strong>, currently pursuing my bachelor’s degree. I’m also a passionate <strong>Full Stack Developer</strong> with experience in modern web technologies, software development, and data-driven solutions.
</p>

<p className="about-desc">
  I specialize in building <strong>responsive, scalable, and user-friendly web applications</strong> across both frontend and backend development. My technical skills include <strong>HTML, CSS, JavaScript, React.js, Tailwind CSS, Bootstrap, Python, Django, Django REST Framework, REST APIs, and MySQL</strong>.
</p>

<p className="about-desc">
  Alongside web development, I have a strong interest in <strong>data science, data analysis, and machine learning</strong>. I enjoy working with data, building practical solutions, and combining software engineering with data-driven approaches to solve real-world problems.
</p>

<p className="about-desc">
  I’m committed to writing <strong>clean, maintainable, and efficient code</strong> while continuously learning new technologies. My goal is to grow as a software engineer and build <strong>innovative, reliable, and impactful digital solutions</strong> that create real value for users and businesses.
</p>

          <div className="about-stats">
            <div className="stat-block">
              <div className="stat-value">
                <span className="accent-number">15</span>
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
                <span className="accent-number">1</span>
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
