"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "services", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.navMinimal}>
        <div className={styles.logo} onClick={() => scrollTo("home")} style={{ cursor: "pointer" }}>
          PACE TECH
        </div>
        <div className={styles.navLinks}>
          <button 
            onClick={() => scrollTo("home")} 
            className={activeSection === "home" ? styles.activeLink : ""}
          >
            Home
          </button>
          <button 
            onClick={() => scrollTo("about")} 
            className={activeSection === "about" ? styles.activeLink : ""}
          >
            About
          </button>
          <button 
            onClick={() => scrollTo("projects")} 
            className={activeSection === "projects" ? styles.activeLink : ""}
          >
            Projects
          </button>
          <button 
            onClick={() => scrollTo("services")} 
            className={activeSection === "services" ? styles.activeLink : ""}
          >
            Services
          </button>
          <button 
            onClick={() => scrollTo("contact")} 
            className={`${activeSection === "contact" ? styles.activeLink : ""} ${styles.contactLink}`}
          >
            Contact
          </button>
        </div>
        <div className={styles.navRightPlaceholder}></div>
      </nav>
    </div>
  );
}
