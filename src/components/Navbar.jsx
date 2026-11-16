import { useEffect, useState } from "react";
import {
  FiBriefcase,
  FiDownload,
  FiFolder,
  FiHome,
  FiMail,
  FiMenu,
  FiUser,
  FiX,
} from "react-icons/fi";
import { LuSparkles } from "react-icons/lu";

const navItems = [
  { id: "home", label: "Home", icon: FiHome },
  { id: "about", label: "About", icon: FiUser },
  { id: "skills", label: "Skills", icon: LuSparkles },
  { id: "experience", label: "Experience", icon: FiBriefcase },
  { id: "projects", label: "Projects", icon: FiFolder },
  { id: "contact", label: "Contact", icon: FiMail }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => document.getElementById(item.id));
      let current = "home";

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop - 140;
          const height = section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < top + height) {
            current = section.id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">
          Darshan A.C
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "menu-open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          type="button"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleNavClick}
              className={activeSection === item.id ? "active-nav" : ""}
            >
              <Icon className="nav-icon" aria-hidden="true" />
              {item.label}
            </a>
            );
          })}

          <a
            href="/resume.pdf"
            download
            className="resume-download-btn mobile-resume-btn"
          >
            <FiDownload aria-hidden="true" />
            Download Resume
          </a>
        </nav>

        <a
          href="/resume.pdf"
          download
          className="resume-download-btn desktop-resume-btn"
        >
          <FiDownload aria-hidden="true" />
          Download Resume
        </a>
      </div>
    </header>
  );
}
