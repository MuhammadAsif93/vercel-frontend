import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const sliderRef = useRef(null);
  const linkRefs = useRef([]);

  const sectionIds = ["top", "about", "services", "skills", "projects", "contact"];
  const [activeIndex, setActiveIndex] = useState(null);

  function moveSliderTo(index) {
    const linkEl = linkRefs.current[index];
    const slider = sliderRef.current;
    if (!linkEl || !slider) return;

    const left = linkEl.offsetLeft;
    const width = linkEl.offsetWidth;

    slider.style.left = `${left}px`;
    slider.style.width = `${width}px`;
  }

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionIds.indexOf(entry.target.id);
            if (idx !== -1) {
              setActiveIndex(idx);
            }
          }
        });
      },
      { threshold: 1 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, [sectionIds]);

  useEffect(() => {
    if (activeIndex !== null) {
      moveSliderTo(activeIndex);
    }
  }, [activeIndex]);

  return (
    <header className="site-header">
      <div className="nav-inner">
        {/* LEFT: brand */}
        <div className="brand-name">
          <span className="brand-hover">Muhammad Asif</span>
        </div>

        {/* RIGHT: nav links */}
        <nav className="main-nav">
          {sectionIds.map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              ref={(el) => (linkRefs.current[i] = el)}
              onMouseEnter={() => moveSliderTo(i)}
              className="nav-link"
            >
              {id === "top"
                ? "Home"
                : id === "about"
                ? "About"
                : id === "services"
                ? "Services"
                : id === "skills"
                ? "Skills"
                : id === "projects"
                ? "Projects"
                : id === "contact"
                ? "Contact"
                : id}
            </a>
          ))}

          <span className="slider" ref={sliderRef}></span>
        </nav>
      </div>
    </header>
  );
}
