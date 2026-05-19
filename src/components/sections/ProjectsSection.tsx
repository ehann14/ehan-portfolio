"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiExternalLink, HiCode } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { projects } from "@/data/portfolio";

// Helper component untuk render thumbnail (SVG atau Image)
function ProjectThumbnail({ project }: { project: typeof projects[0] }) {
  // Jika project punya image URL (bukan SVG), render <img>
  if (project.image && project.image.startsWith("/images/")) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        onError={(e) => {
          // Fallback jika gambar error
          e.currentTarget.style.display = "none";
          const fallback = e.currentTarget.parentElement?.querySelector(".fallback-icon");
          if (fallback) fallback.classList.remove("hidden");
        }}
      />
    );
  }

  // Render SVG placeholder untuk project lain
  const svgMap: Record<number, JSX.Element> = {
    1: (
      <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="vt-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f2033" />
            <stop offset="100%" stopColor="#1a3a5c" />
          </linearGradient>
        </defs>
        <rect width="400" height="200" fill="url(#vt-bg)" />
        <ellipse cx="200" cy="100" rx="90" ry="70" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
        <ellipse cx="200" cy="100" rx="90" ry="20" fill="none" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
        <line x1="110" y1="100" x2="290" y2="100" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
        <line x1="200" y1="30" x2="200" y2="170" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
        <rect x="160" y="75" width="80" height="55" fill="rgba(59,130,246,0.2)" rx="2" stroke="rgba(59,130,246,0.4)" strokeWidth="1" />
        <polygon points="160,75 200,50 240,75" fill="rgba(59,130,246,0.3)" stroke="rgba(59,130,246,0.5)" strokeWidth="1" />
        <rect x="185" y="100" width="30" height="30" fill="rgba(6,182,212,0.3)" rx="1" />
        <text x="200" y="185" textAnchor="middle" fill="rgba(96,165,250,0.7)" fontSize="11" fontFamily="monospace" fontWeight="bold">Virtual Tour 360°</text>
      </svg>
    ),
    2: (
      <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="tu-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f1f14" />
            <stop offset="100%" stopColor="#1a3a24" />
          </linearGradient>
        </defs>
        <rect width="400" height="200" fill="url(#tu-bg)" />
        <rect x="30" y="30" width="160" height="100" rx="8" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.3)" strokeWidth="1" />
        <rect x="40" y="40" width="140" height="30" rx="5" fill="rgba(16,185,129,0.15)" />
        <text x="110" y="60" textAnchor="middle" fill="rgba(52,211,153,0.8)" fontSize="12" fontFamily="monospace">Top Up Balance</text>
        <rect x="40" y="80" width="60" height="40" rx="5" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.2)" strokeWidth="1" />
        <rect x="110" y="80" width="70" height="40" rx="5" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.2)" strokeWidth="1" />
        <text x="70" y="105" textAnchor="middle" fill="rgba(52,211,153,0.6)" fontSize="10" fontFamily="monospace">Mobile</text>
        <text x="145" y="105" textAnchor="middle" fill="rgba(52,211,153,0.6)" fontSize="10" fontFamily="monospace">Voucher</text>
        <rect x="210" y="30" width="160" height="140" rx="8" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.2)" strokeWidth="1" />
        <text x="290" y="55" textAnchor="middle" fill="rgba(52,211,153,0.7)" fontSize="11" fontFamily="monospace" fontWeight="bold">Payment</text>
        {["DANA", "OVO", "GoPay", "QRIS"].map((m, i) => (
          <g key={m}>
            <rect x="225" y={65 + i * 25} width="130" height="18" rx="4" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.15)" strokeWidth="1" />
            <text x="290" y={78 + i * 25} textAnchor="middle" fill="rgba(52,211,153,0.6)" fontSize="9" fontFamily="monospace">{m}</text>
          </g>
        ))}
      </svg>
    ),
    4: (
      <svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="py-bg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f1a2e" />
            <stop offset="100%" stopColor="#1a2d4a" />
          </linearGradient>
        </defs>
        <rect width="400" height="200" fill="url(#py-bg)" />
        <rect x="110" y="20" width="180" height="165" rx="12" fill="rgba(99,102,241,0.1)" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" />
        <rect x="122" y="30" width="156" height="45" rx="6" fill="rgba(99,102,241,0.15)" stroke="rgba(99,102,241,0.2)" strokeWidth="1" />
        <text x="268" y="58" textAnchor="end" fill="rgba(165,180,252,0.9)" fontSize="20" fontFamily="monospace" fontWeight="bold">1337</text>
        {[
          ["C", "+/-", "%", "÷"],
          ["7", "8", "9", "×"],
          ["4", "5", "6", "−"],
          ["1", "2", "3", "+"],
        ].map((row, r) => row.map((btn, c) => (
          <g key={`${r}-${c}`}>
            <rect
              x={122 + c * 40}
              y={83 + r * 28}
              width="35"
              height="22"
              rx="5"
              fill={c === 3 ? "rgba(99,102,241,0.4)" : "rgba(99,102,241,0.15)"}
              stroke={c === 3 ? "rgba(99,102,241,0.5)" : "rgba(99,102,241,0.2)"}
              strokeWidth="1"
            />
            <text
              x={139 + c * 40}
              y={98 + r * 28}
              textAnchor="middle"
              fill={c === 3 ? "rgba(165,180,252,0.9)" : "rgba(165,180,252,0.7)"}
              fontSize="9"
              fontFamily="monospace"
            >{btn}</text>
          </g>
        )))}
      </svg>
    ),
  };

  return svgMap[project.id] || (
    <div className="w-full h-full flex items-center justify-center">
      <HiCode className="w-16 h-16 fallback-icon" style={{ color: "var(--text-muted)" }} />
    </div>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const tags = ["All", "JavaScript", "Laravel", "Python", "Next.js"];
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.tags.some((t) => t.includes(filter)));

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        tag="Portfolio"
        title="Projects Saya"
        subtitle="Kumpulan project yang telah saya kerjakan, dari web application hingga tools kreatif."
      />

      {/* Filter */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-2 mb-10"
      >
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
            style={{
              backgroundColor: filter === tag ? "#3B82F6" : "var(--card)",
              color: filter === tag ? "white" : "var(--text-secondary)",
              border: `1px solid ${filter === tag ? "#3B82F6" : "var(--border)"}`,
              fontFamily: "var(--font-body)",
            }}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      {/* Projects grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl overflow-hidden transition-shadow duration-300 hover:shadow-2xl"
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden bg-[var(--surface)]">
                <ProjectThumbnail project={project} />
                
                {/* Fallback icon (hidden by default) */}
                <div className="hidden fallback-icon absolute inset-0 flex items-center justify-center">
                  <HiCode className="w-16 h-16" style={{ color: "var(--text-muted)" }} />
                </div>

                {/* Overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center gap-3"
                  style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white transition-transform hover:scale-105"
                    style={{ backgroundColor: "#3B82F6" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <HiExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-transform hover:scale-105"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.15)",
                      color: "white",
                      border: "1px solid rgba(255,255,255,0.3)",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </a>
                </motion.div>

                {project.featured && (
                  <div
                    className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-xs font-semibold"
                    style={{
                      backgroundColor: "rgba(59,130,246,0.9)",
                      color: "white",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors"
                  style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
                >
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium"
                      style={{
                        backgroundColor: "rgba(59,130,246,0.08)",
                        color: "#60A5FA",
                        border: "1px solid rgba(59,130,246,0.15)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-[1.02] text-white"
                    style={{
                      background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <HiExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-[1.02]"
                    style={{
                      backgroundColor: "var(--surface)",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}