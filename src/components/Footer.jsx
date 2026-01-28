import React from "react";

// import your icons from /src/assets/social/...
import fbIcon from "../assets/social/facebook.png";
import igIcon from "../assets/social/instagram.png";
import liIcon from "../assets/social/linkedin.png";
import ghIcon from "../assets/social/github.png";
import tkIcon from "../assets/social/tiktok.png";
import rdIcon from "../assets/social/reddit.png";
import upIcon from "../assets/social/upwork.png";
import ntIcon from "../assets/social/icon.png";
import ytIcon from "../assets/social/youtube.png";

export default function Footer() {
  // quick config so it's easy to edit links later
  const socials = [
    {
      name: "Facebook",
      icon: fbIcon,
      url: "https://www.facebook.com/profile.php?id=61553005927930",
    },
    {
      name: "Instagram",
      icon: igIcon,
      url: "https://www.instagram.com/dev_web00?igsh=cjZ4bXVlYmI1NjQ2&utm_source=qr",
    },
    {
      name: "LinkedIn",
      icon: liIcon,
      url: "https://www.linkedin.com/muhammad-asif93",
    },
    {
      name: "GitHub",
      icon: ghIcon,
      url: "https://github.com/MuhammadAsif93",
    },
    {
      name: "TikTok",
      icon: tkIcon,
      url: "https://www.tiktok.com/@stdprojects0?_r=1&_t=ZS-93QTzLQaUSo",
    },
     {
    name: "YouTube",
    icon: ytIcon,
    url: "https://www.youtube.com/@mcqplus",
  },
  {
    name: "Upwork",
    icon: upIcon,
    url: "https://www.upwork.com/freelancers/~015e5ec07080075763",
  },
  {
    name: "Netlify",
    icon: ntIcon,
    url: "https://app.netlify.com/teams/asifahmad5261836/projects",
  },
  ];

  return (
    <footer className="footer-wrap">
      <div className="footer-inner">
        {/* SOCIAL ICON ROW */}
        <div className="social-row">
          {socials.map((s, i) => (
            <a
              key={i}
              className="social-icon-wrap"
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
            >
              <div className="social-glow-circle">
                <img
                  src={s.icon}
                  alt={s.name}
                  className="social-img"
                />
              </div>
            </a>
          ))}
        </div>

        {/* COPYRIGHT LINE */}
        <div className="footer-copy">
          © 2025 Muhammad Asif . All rights reserved.
        </div>
      </div>
    </footer>
  );
}
