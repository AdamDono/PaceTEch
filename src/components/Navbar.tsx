"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Only track scroll on the home page
    if (pathname !== "/") return;

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
  }, [pathname]);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);

    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${id}`);
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
          <div className={styles.logo} onClick={() => handleNavClick("home")} style={{ cursor: "pointer" }}>
            PACE TECH
          </div>
          
          {/* Desktop Links */}
          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleNavClick(item.id)} 
                className={activeSection === item.id && pathname === "/" ? styles.activeLink : ""}
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
            onClick={() => handleNavClick(item.id)} 
            className={activeSection === item.id && pathname === "/" ? styles.activeLinkMobile : ""}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
}
