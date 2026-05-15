"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { HiSun, HiMoon, HiMenuAlt3, HiX } from "react-icons/hi";
import { scrollToSection } from "@/lib/utils";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certificates", id: "certificates" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      // Update active section
      const sections = navLinks.map((l) => l.id);
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 1.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3"
            : "py-5"
        }`}
      >
        <div
          className={`mx-4 md:mx-auto md:max-w-5xl rounded-2xl transition-all duration-300 ${
            scrolled
              ? "glass shadow-lg px-6 py-3"
              : "px-6 py-2"
          }`}
          style={{
            backgroundColor: scrolled ? "rgba(var(--card-rgb, 17,24,39), 0.85)" : "transparent",
            borderColor: scrolled ? "var(--border)" : "transparent",
            border: scrolled ? "1px solid" : "none",
          }}
        >
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("hero")}
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <span
                  className="text-white font-bold text-base"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  E
                </span>
              </div>
              <span
                className="font-bold text-base hidden sm:block"
                style={{
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.05em",
                }}
              >
                Ferhan
              </span>
            </button>

            {/* Desktop Links */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                      activeSection === link.id
                        ? "text-blue-400"
                        : ""
                    }`}
                    style={{
                      color: activeSection === link.id ? "#60A5FA" : "var(--text-secondary)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {activeSection === link.id && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-xl"
                        style={{ backgroundColor: "rgba(59,130,246,0.1)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Right side */}
            <div className="flex items-center gap-2">
              {/* Theme toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: "var(--card)",
                    color: "var(--text-secondary)",
                    border: "1px solid var(--border)",
                  }}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <HiSun className="w-4 h-4 text-yellow-400" />
                  ) : (
                    <HiMoon className="w-4 h-4 text-blue-400" />
                  )}
                </button>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                style={{
                  backgroundColor: "var(--card)",
                  color: "var(--text-secondary)",
                  border: "1px solid var(--border)",
                }}
                aria-label="Toggle menu"
              >
                {menuOpen ? <HiX className="w-4 h-4" /> : <HiMenuAlt3 className="w-4 h-4" />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-20 left-4 right-4 z-40 rounded-2xl glass shadow-2xl lg:hidden overflow-hidden"
            style={{
              backgroundColor: "rgba(13,17,23,0.95)",
              border: "1px solid var(--border)",
            }}
          >
            <ul className="p-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      activeSection === link.id
                        ? "bg-blue-500/10 text-blue-400"
                        : "hover:bg-white/5"
                    }`}
                    style={{
                      color: activeSection === link.id ? "#60A5FA" : "var(--text-secondary)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
