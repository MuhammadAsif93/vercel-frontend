import React from "react";

// Skill logos (assets me ye files hone chahiye)
import htmlLogo from "../assets/skills/html.png";
import cssLogo from "../assets/skills/css.png";
import jsLogo from "../assets/skills/javascript.png";
import reactLogo from "../assets/skills/react.png";
import mysqlLogo from "../assets/skills/mysql.png";
import pythonLogo from "../assets/skills/python.png";
import cLogo from "../assets/skills/c.png";
import djangoLogo from "../assets/skills/django.png";
import dataScienceLogo from "../assets/skills/datascience.png";
import bootstrapLogo from "../assets/skills/bootstrap.png";
import tailwindLogo from "../assets/skills/tailwand-css.png"; // spelling fix
import figmaLogo from "../assets/skills/figma.png";

export default function Skills() {
  const skillList = [
    { icon: htmlLogo, label: "HTML" },
    { icon: cssLogo, label: "CSS" },
    { icon: jsLogo, label: "JavaScript" },
    { icon: reactLogo, label: "React.js" },
    { icon: mysqlLogo, label: "MySQL" },
    { icon: pythonLogo, label: "Python" },
    { icon: cLogo, label: "C" },
    { icon: djangoLogo, label: "Django" },
    { icon: dataScienceLogo, label: "Data Scientist" },
    { icon: bootstrapLogo, label: "Bootstrap" },
    { icon: tailwindLogo, label: "Tailwind CSS" },
    { icon: figmaLogo, label: "Figma" }, // Added Figma
  ];

  return (
    <section id="skills" className="skills-section-dark">
      <div className="skills-inner">
        <h2 className="skills-heading">Skills</h2>

        <div className="skills-grid">
          {skillList.map((skill, i) => (
            <div className="skill-card" key={i}>
              <div className="skill-icon-wrapper">
                <img
                  src={skill.icon}
                  alt={skill.label}
                  className="skill-icon-img"
                />
              </div>
              <div className="skill-label">{skill.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
