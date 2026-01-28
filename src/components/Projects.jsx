import React, { useState } from "react";
import { FiEye } from "react-icons/fi";

export default function Projects() {
  const allProjects = [
    {
      id: 1,
      title: "Personal Portfolio",
      tag: "Portfolio Website",
      type: "web",
      desc: "A responsive portfolio built with React showcasing skills, services, and contact form with SweetAlert2.",
    },
    {
      id: 2,
      title: "Product Landing Page",
      tag: "Landing Page",
      type: "web",
      desc: "Modern hero section, animated CTA buttons, and smooth scrolling navigation.",
    },
    {
      id: 3,
      title: "Desktop Finance Tracker",
      tag: "Desktop App",
      type: "desktop",
      desc: "A Windows desktop application for tracking expenses, built with .NET and local persistence.",
    },
    {
      id: 4,
      title: "Admin Dashboard UI",
      tag: "Dash UI",
      type: "web",
      desc: "Clean dashboard layout with cards and stats, designed for readability and mobile responsiveness.",
    },
    {
      id: 5,
      title: "Inventory Manager",
      tag: "Desktop App",
      type: "desktop",
      desc: "CRUD-based stock and billing system for small shops, using C# / .NET.",
    },
  ];

  const [filter, setFilter] = useState("all");

  const visibleProjects = allProjects.filter((proj) => {
    if (filter === "all") return true;
    if (filter === "web") return proj.type === "web";
    if (filter === "desktop") return proj.type === "desktop";
    return true;
  });

  const cardsToShow = visibleProjects.slice(0, 5);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-inner">
        <h2 className="projects-title">Projects</h2>

        <div className="projects-filters">
          <FilterButton
            active={filter === "all"}
            onClick={() => setFilter("all")}
            label="All"
          />
          <FilterButton
            active={filter === "web"}
            onClick={() => setFilter("web")}
            label="Web App"
          />
          <FilterButton
            active={filter === "desktop"}
            onClick={() => setFilter("desktop")}
            label="Desktop App"
          />
        </div>

        <div className="projects-grid-advanced">
          {cardsToShow.map((proj) => (
            <ProjectCard key={proj.id} proj={proj} />
          ))}

          <SeeAllCard />
        </div>
      </div>
    </section>
  );
}

function FilterButton({ label, active, onClick }) {
  return (
    <button
      className={`proj-filter-btn ${active ? "active" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function ProjectCard({ proj }) {
  return (
    <div className="project-card-adv">
      <div className="project-thumb-adv">
        <div className="project-thumb-overlay">
          <button
            className="preview-eye-btn"
            onClick={() => {
              console.log("Preview", proj.title);
            }}
          >
            <FiEye className="eye-icon" />
          </button>
        </div>

        <span className="proj-tag">{proj.tag}</span>
      </div>

      <div className="project-info-adv">
        <h3 className="project-title-hover">{proj.title}</h3>
        <p className="project-desc">{proj.desc}</p>

        <button
          className="project-btn-adv"
          onClick={() => {
            console.log("View code for:", proj.title);
          }}
        >
          View Code
        </button>
      </div>
    </div>
  );
}

function SeeAllCard() {
  return (
    <div className="see-all-card">
      <button
        className="see-all-btn"
        onClick={() => {
          console.log("Go to See All page");
        }}
      >
        See All →
      </button>
    </div>
  );
}
