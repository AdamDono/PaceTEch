"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <div className={styles.navWrapper}>
        <nav className={styles.navMinimal}>
          <div className={styles.logo} onClick={() => scrollTo("home")} style={{ cursor: "pointer" }}>
            PACE TECH
          </div>
          
          {/* Desktop Links */}
          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollTo(item.id)} 
                className={activeSection === item.id ? styles.activeLink : ""}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className={styles.hamburger} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className={`${styles.bar} ${isMobileMenuOpen ? styles.barOpen1 : ""}`}></span>
            <span className={`${styles.bar} ${isMobileMenuOpen ? styles.barOpen2 : ""}`}></span>
          </div>

          <div className={styles.navRightPlaceholder}></div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""}`}>
        {navItems.map((item) => (
          <button 
            key={item.id}
            onClick={() => scrollTo(item.id)} 
            className={activeSection === item.id ? styles.activeLinkMobile : ""}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
}
