
import React from "react";

export default function Services() {
  return (
    <section id="services" className="dark-services-section">
      <div className="dark-services-container">

        <h2 className="dark-services-heading hover-glow">
          Services
        </h2>

        <div className="dark-services-grid">

          {/* 1. Full Stack */}
          <div className="dark-service-card">
            <div className="dark-icon-circle">🖥️</div>

            <h3 className="dark-service-title">
              Full-Stack Web Development
            </h3>

            <p className="dark-service-desc">
              End-to-end web apps: frontend, backend, database, and
              deployment — built for speed, security, and real users.
            </p>
          </div>


          {/* 2. Data Science */}
          <div className="dark-service-card">
            <div className="dark-icon-circle">📊</div>

            <h3 className="dark-service-title">
              Data Science
            </h3>

            <p className="dark-service-desc">
              Analyze, visualize, and interpret data to make informed
              decisions. Build predictive models and extract insights efficiently.
            </p>
          </div>


          {/* 3. Website Redesign */}
          <div className="dark-service-card">
            <div className="dark-icon-circle">♻️</div>

            <h3 className="dark-service-title">
              Website Redesign &amp; Updates
            </h3>

            <p className="dark-service-desc">
              Improve your existing site with better visuals, faster
              performance, and a modern responsive layout.
            </p>
          </div>


          {/* 4. Modern Web Design */}
          <div className="dark-service-card">
            <div className="dark-icon-circle">🎨</div>

            <h3 className="dark-service-title">
              Modern Web Design
            </h3>

            <p className="dark-service-desc">
              Clean, consistent visuals that represent your brand,
              enhance user trust, and improve experience.
            </p>
          </div>


          {/* 5. 3D Animation */}
          <div className="dark-service-card">
            <div className="dark-icon-circle">🎬</div>

            <h3 className="dark-service-title">
              3D Animation &amp; Interactive Websites
            </h3>

            <p className="dark-service-desc">
              Create engaging websites with 3D elements, smooth animations,
              interactive effects, and immersive digital experiences.
            </p>
          </div>


          {/* 6. Database */}
          <div className="dark-service-card">
            <div className="dark-icon-circle">🗄️</div>

            <h3 className="dark-service-title">
              Database Design &amp; Management
            </h3>

            <p className="dark-service-desc">
              Design and manage structured databases with efficient queries,
              secure data handling, relationships, and scalable data systems.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

