import React, { useState, useEffect } from "react";

const sections = ["ContactSection", "GlobalNetwork", "OfficeDirectory"];

const NavbarScroll = () => {
  const [activeSection, setActiveSection] = useState(sections[0]);

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-[80px] z-40 bg-white shadow-md flex justify-center gap-8 py-4">
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className={`font-semibold transition-colors ${
            activeSection === section ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700"
          }`}
        >
          {section.replace(/([A-Z])/g, " $1").trim()}
        </a>
      ))}
    </nav>
  );
};

export default NavbarScroll;
