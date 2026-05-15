"use client";

import { motion } from "framer-motion";
import { HiBriefcase, HiCode, HiAcademicCap } from "react-icons/hi";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { experiences } from "@/data/portfolio";

const typeConfig: Record<string, { icon: typeof HiBriefcase; color: string; bg: string }> = {
  work: {
    icon: HiBriefcase,
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.1)",
  },
  project: {
    icon: HiCode,
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.1)",
  },
  education: {
    icon: HiAcademicCap,
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.1)",
  },
};

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        tag="Journey"
        title="Pengalaman & Riwayat"
        subtitle="Perjalanan saya dalam dunia teknologi dan web development."
      />

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
          style={{ backgroundColor: "var(--border)" }}
        />

        <div className="space-y-6">
          {experiences.map((exp, i) => {
            const config = typeConfig[exp.type];
            const Icon = config.icon;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative flex gap-6"
              >
                {/* Icon dot on timeline */}
                <div className="hidden md:flex flex-shrink-0 z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{
                      backgroundColor: config.bg,
                      border: `2px solid ${config.color}30`,
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color: config.color }} />
                  </motion.div>
                </div>

                {/* Content card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex-1 p-6 rounded-2xl transition-shadow duration-300 hover:shadow-lg"
                  style={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3
                        className="font-bold text-base"
                        style={{
                          color: "var(--text-primary)",
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {exp.title}
                      </h3>
                      <p className="text-sm font-medium mt-0.5" style={{ color: config.color }}>
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className="text-xs px-3 py-1.5 rounded-xl flex-shrink-0"
                      style={{
                        backgroundColor: config.bg,
                        color: config.color,
                        border: `1px solid ${config.color}20`,
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {exp.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs"
                        style={{
                          backgroundColor: "var(--surface)",
                          color: "var(--text-muted)",
                          border: "1px solid var(--border)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
