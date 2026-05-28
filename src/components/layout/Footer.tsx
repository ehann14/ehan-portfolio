"use client";

import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiMail, HiHeart } from "react-icons/hi";
import { personalInfo } from "@/data/portfolio";
import { scrollToSection } from "@/lib/utils";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const socials = [
  { icon: FaGithub, url: personalInfo.github, label: "GitHub" },
  { icon: FaInstagram, url: personalInfo.instagram, label: "Instagram" },
  { icon: FaWhatsapp, url: personalInfo.whatsapp, label: "WhatsApp" },
  { icon: HiMail, url: `mailto:${personalInfo.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer
      className="py-12 border-t"
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + desc */}
          <div className="text-center md:text-left">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-3 mb-3 mx-auto md:mx-0"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <span
                  className="text-white font-bold text-sm"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  E
                </span>
              </div>
              <span
                className="font-bold text-base"
                style={{
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.05em",
                }}
              >
                Muhamad Ferhan
              </span>
            </button>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              Web Developer · Bandung, Indonesia
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm transition-colors hover:text-blue-400"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                style={{
                  backgroundColor: "var(--card)",
                  color: "var(--text-muted)",
                  border: "1px solid var(--border)",
                }}
                title={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="my-8 h-px"
          style={{ backgroundColor: "var(--border)" }}
        />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
          <p
            className="text-xs flex items-center gap-1.5"
            style={{ color: "var(--text-muted)" }}
          >
            Made with{" "}
            <HiHeart className="w-3 h-3 text-red-400" />
            {" "}by{" "}
            <span style={{ color: "#60A5FA" }}>{personalInfo.name}</span>
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
          >
            © {new Date().getFullYear()} Muhamad Ferhan Portfolio. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
          >
            Built with Next.js · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
