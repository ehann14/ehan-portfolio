"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiExternalLink, HiAcademicCap } from "react-icons/hi";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { certificates } from "@/data/portfolio";

const certColors = [
  { from: "#3B82F6", to: "#06B6D4" },
  { from: "#8B5CF6", to: "#EC4899" },
  { from: "#10B981", to: "#06B6D4" },
  { from: "#F59E0B", to: "#EF4444" },
  { from: "#6366F1", to: "#8B5CF6" },
  { from: "#EC4899", to: "#F59E0B" },
];

export function CertificatesSection() {
  const [selected, setSelected] = useState<(typeof certificates)[0] | null>(null);

  return (
    <SectionWrapper id="certificates" className="mesh-bg">
      <SectionHeading
        tag="Achievements"
        title="Sertifikat & Penghargaan"
        subtitle="Bukti komitmen saya dalam terus belajar dan mengembangkan skill."
        center
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {certificates.map((cert, i) => {
          const color = certColors[i % certColors.length];
          return (
            <motion.button
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => setSelected(cert)}
              className="group text-left rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-xl"
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Color header */}
              <div
                className="h-2 w-full"
                style={{
                  background: `linear-gradient(90deg, ${color.from}, ${color.to})`,
                }}
              />

              {/* Content */}
              <div className="p-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${color.from}20, ${color.to}20)`,
                    border: `1px solid ${color.from}30`,
                  }}
                >
                  <HiAcademicCap className="w-5 h-5" style={{ color: color.from }} />
                </div>

                <h3
                  className="font-bold text-sm mb-1 group-hover:text-blue-400 transition-colors leading-tight"
                  style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
                >
                  {cert.title}
                </h3>
                <p
                  className="text-xs mb-3"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {cert.issuer}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    className="text-xs px-2 py-1 rounded-lg"
                    style={{
                      backgroundColor: `${color.from}10`,
                      color: color.from,
                      border: `1px solid ${color.from}20`,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {cert.date}
                  </span>
                  <HiExternalLink
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "var(--text-muted)" }}
                  />
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-lg w-full rounded-3xl overflow-hidden shadow-2xl"
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top bar */}
              <div
                className="h-1.5 w-full"
                style={{
                  background: "linear-gradient(90deg, #3B82F6, #06B6D4, #6366F1)",
                }}
              />

              <div className="p-8">
                {/* Close */}
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: "var(--surface)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <HiX className="w-4 h-4" />
                </button>

                {/* Certificate visual */}
                <div
                  className="w-full h-48 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(6,182,212,0.1))",
                    border: "1px solid rgba(59,130,246,0.2)",
                  }}
                >
                  {/* Certificate design */}
                  <div className="text-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{
                        background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
                      }}
                    >
                      <HiAcademicCap className="w-8 h-8 text-white" />
                    </div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "#60A5FA", fontFamily: "var(--font-mono)" }}
                    >
                      Certificate of Completion
                    </p>
                    <p
                      className="text-xs mt-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {selected.issuer}
                    </p>
                  </div>
                  {/* Decorative elements */}
                  <div
                    className="absolute top-3 left-3 w-8 h-8 rounded-full opacity-20"
                    style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)" }}
                  />
                  <div
                    className="absolute bottom-3 right-3 w-6 h-6 rounded-full opacity-20"
                    style={{ background: "linear-gradient(135deg, #6366F1, #EC4899)" }}
                  />
                </div>

                <h2
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
                >
                  {selected.title}
                </h2>
                <div className="flex items-center gap-4 mb-6">
                  <span style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                    {selected.issuer}
                  </span>
                  <span
                    className="px-2 py-0.5 rounded-lg text-xs"
                    style={{
                      backgroundColor: "rgba(59,130,246,0.1)",
                      color: "#60A5FA",
                      border: "1px solid rgba(59,130,246,0.2)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {selected.date}
                  </span>
                </div>

                <a
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-medium text-white transition-all hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  <HiExternalLink className="w-4 h-4" />
                  View Certificate
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
