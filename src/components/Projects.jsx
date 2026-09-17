
import React, { useState } from "react";
import { FiEye } from "react-icons/fi";

export default function Projects() {
  const allProjects = [
    // =========================
    // ORIGINAL PROJECTS
    // =========================
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

    // =========================
    // GITHUB PROJECTS
    // =========================
    {
      id: 6,
      title: "School Management System",
      tag: "Management System",
      type: "web",
      desc: "A school management system for managing students, faculty, authentication, roles, and academic operations.",
    },
    {
      id: 7,
      title: "Gym Management System",
      tag: "Management System",
      type: "web",
      desc: "A modern gym management platform for managing members, trainers, attendance, payments, plans, enquiries, and daily operations.",
    },
    {
      id: 8,
      title: "Smart Production Tracking System",
      tag: "Production Management",
      type: "web",
      desc: "A production tracking system designed to monitor manufacturing processes, production activities, and operational data efficiently.",
    },
    {
      id: 9,
      title: "Smart Library Management System",
      tag: "Library System",
      type: "web",
      desc: "A full-stack library management system for managing books, categories, authors, students, and issued books.",
    },
    {
      id: 10,
      title: "Online Quran Academy",
      tag: "Education Platform",
      type: "web",
      desc: "A responsive online Quran learning platform featuring courses, teacher information, schedules, and student-focused content.",
    },
    {
      id: 11,
      title: "3D Lipstick Product Website",
      tag: "3D Website",
      type: "web",
      desc: "An interactive product website featuring a modern dark design, animated elements, and an immersive 3D-style product experience.",
    },
    {
      id: 12,
      title: "Grand Hotel Management",
      tag: "Hotel Management",
      type: "web",
      desc: "A modern hotel management website designed for presenting hotel services, rooms, information, and customer interaction.",
    },
    {
      id: 13,
      title: "Weather App",
      tag: "Web App",
      type: "web",
      desc: "A responsive weather application that provides weather information through a clean and user-friendly interface.",
    },
    {
      id: 14,
      title: "ShopSphere — E-Commerce Website",
      tag: "E-Commerce",
      type: "web",
      desc: "A modern e-commerce website with product browsing, categories, authentication, shopping features, and backend integration.",
    },
    {
      id: 15,
      title: "SocialConnect — Social Media App",
      tag: "Social Media",
      type: "web",
      desc: "A social media web application designed for user interaction, content sharing, and social networking features.",
    },
    {
      id: 16,
      title: "Boardline — Project Management Tool",
      tag: "Project Management",
      type: "web",
      desc: "A project management application designed to organize projects, tasks, users, and workflow activities in one platform.",
    },
    {
      id: 17,
      title: "Real-Time Communication App",
      tag: "WebRTC App",
      type: "web",
      desc: "A browser-based real-time communication application using React and WebRTC for interactive audio and video communication.",
    },
    {
      id: 18,
      title: "Admission Portal Database Project",
      tag: "Database Project",
      type: "web",
      desc: "A database-focused admission portal project designed to manage admission records and structured student information.",
    },
    {
      id: 19,
      title: "Random Password Generator",
      tag: "Web App",
      type: "web",
      desc: "A simple password generator that creates strong passwords using letters, numbers, and symbols.",
    },
  ];

  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = allProjects.filter((proj) => {
    if (filter === "all") return true;
    if (filter === "web") return proj.type === "web";
    if (filter === "desktop") return proj.type === "desktop";
    return true;
  });

  // Initially show only 5.
  // When All is clicked, show all projects.
  const cardsToShow =
    filter === "all" && !showAll
      ? filteredProjects.slice(0, 5)
      : filteredProjects;

  const handleFilter = (newFilter) => {
    setFilter(newFilter);

    // All button shows all projects
    if (newFilter === "all") {
      setShowAll(true);
    } else {
      setShowAll(false);
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-inner">
        <h2 className="projects-title">Projects</h2>

        <div className="projects-filters">
          <FilterButton
            active={filter === "all"}
            onClick={() => handleFilter("all")}
            label="All"
          />

          <FilterButton
            active={filter === "web"}
            onClick={() => handleFilter("web")}
            label="Web App"
          />

          <FilterButton
            active={filter === "desktop"}
            onClick={() => handleFilter("desktop")}
            label="Desktop App"
          />
        </div>

        <div className="projects-grid-advanced">
          {cardsToShow.map((proj) => (
            <ProjectCard key={proj.id} proj={proj} />
          ))}
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
              console.log("Preview:", proj.title);
            }}
            aria-label={`Preview ${proj.title}`}
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

