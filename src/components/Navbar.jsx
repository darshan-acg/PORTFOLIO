import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
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
          Darshan<span>.</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? "menu-open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleNavClick}
              className={activeSection === item.id ? "active-nav" : ""}
            >
              {item.label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className="resume-download-btn mobile-resume-btn"
          >
            Download Resume
          </a>
        </nav>

        <a
          href="/resume.pdf"
          download
          className="resume-download-btn desktop-resume-btn"
        >
          Download Resume
        </a>
      </div>
    </header>
  );
}