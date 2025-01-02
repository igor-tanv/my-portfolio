"use client"
import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Adjust threshold as needed
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="bg-gray-900 py-4 fixed top-0 w-full z-10">
      <div className="container mx-auto px-6 flex justify-center space-x-8">
        <a
          href="#hero"
          className={`${
            activeSection === "hero" ? "text-cyan-400" : "text-gray-300"
          } hover:text-cyan-400 transition`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`${
            activeSection === "about" ? "text-cyan-400" : "text-gray-300"
          } hover:text-cyan-400 transition`}
        >
          About
        </a>
        <a
          href="#technologies"
          className={`${
            activeSection === "technologies"
              ? "text-cyan-400"
              : "text-gray-300"
          } hover:text-cyan-400 transition`}
        >
          Tech Stack
        </a>
        <a
          href="#projects"
          className={`${
            activeSection === "projects" ? "text-cyan-400" : "text-gray-300"
          } hover:text-cyan-400 transition`}
        >
          Projects
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
