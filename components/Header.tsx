"use client";

import { useEffect, useState } from "react";

const nav = [
  { label: "Home", href: "/", id: "home" },
  { label: "Expertise", href: "/expertise", id: "expertise" },
  { label: "Portfolio", href: "/portfolio", id: "portfolio" },
  { label: "Contact", href: "/contact", id: "contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      let currentSection = "home";

      nav.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = item.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setOpen(false);
  };

  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Brand */}
        <a
          className="brand"
          href="#home"
          aria-label="Layla Oud home"
          onClick={() => handleNavClick("home")}
        >
          <span className="brand-mark">
            <span className="brand-letter brand-l">L</span>
            <span className="brand-letter brand-o">O</span>
          </span>

          <span className="brand-copy">
            <strong>LAYLA OUDO</strong>
            <small>
              SOCIAL MEDIA MANAGER
              <span>•</span>
              EVENT MANAGER
            </small>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? "active" : ""}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* CV Button */}
        <a
          className="header-cta"
          href="/layla-oud-cv.pdf"
          download
        >
          <span>Download CV</span>

          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 3V15"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />

            <path
              d="M7.5 11L12 15.5L16.5 11"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <path
              d="M5 20H19"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        </a>

        {/* Mobile Menu */}
        <button
          className={`menu-button ${open ? "active" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="container mobile-menu-inner">
          {nav.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.href}
                href={item.href}
                className={`mobile-nav-link ${
                  isActive ? "active" : ""
                }`}
                onClick={() => handleNavClick(item.id)}
              >
                <span>{item.label}</span>

                <span className="mobile-nav-arrow">→</span>
              </a>
            );
          })}

          <a
            className="mobile-cv-button"
            href="/layla-oud-cv.pdf"
            download
          >
            <span>Download CV</span>

            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 3V15"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />

              <path
                d="M7.5 11L12 15.5L16.5 11"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M5 20H19"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}