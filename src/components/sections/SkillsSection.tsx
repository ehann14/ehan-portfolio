"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { skills } from "@/data/portfolio";

const skillIcons: Record<string, string> = {
  HTML: "🌐",
  CSS: "🎨",
  JavaScript: "⚡",
  PHP: "🐘",
  Laravel: "🔴",
  Python: "🐍",
  MySQL: "🗄️",
  "Tailwind CSS": "💨",
  "Next.js": "▲",
};

const skillColors: Record<string, { from: string; to: string }> = {
  Frontend: { from: "#3B82F6", to: "#06B6D4" },
  Backend: { from: "#8B5CF6", to: "#EC4899" },
  Database: { from: "#10B981", to: "#06B6D4" },
};

function SkillBar({ skill, index }: { skill: (typeof skills)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const colors = skillColors[skill.category];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group"
    >
      <div
        className="p-4 rounded-2xl transition-all duration-300 hover:scale-[1.01]"
        style={{
          backgroundColor: "var(--card)",
          border: "1px solid var(--border)",
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-xl">{skillIcons[skill.name] || "💡"}</span>
            <div>
              <p
                className="font-semibold text-sm"
                style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
              >
                {skill.name}
              </p>
              <p
                className="text-xs"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
              >
                {skill.category}
              </p>
            </div>
          </div>
          <span
            className="text-sm font-bold"
            style={{ color: colors.from, fontFamily: "var(--font-mono)" }}
          >
            {skill.level}%
          </span>
        </div>

        {/* Progress bar */}
        <div
          className="h-2 rounded-full overflow-hidden"
          style={{ backgroundColor: "var(--border)" }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${colors.from}, ${colors.to})`,
            }}
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1.2, delay: index * 0.08 + 0.3, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const categories = ["Frontend", "Backend", "Database"];
  const grouped = categories.reduce(
    (acc, cat) => ({
      ...acc,
      [cat]: skills.filter((s) => s.category === cat),
    }),
    {} as Record<string, typeof skills>
  );

  let globalIndex = 0;

  return (
    <SectionWrapper
      id="skills"
      className="mesh-bg"
    >
      <SectionHeading
        tag="Skills"
        title="Tech Stack & Skills"
        subtitle="Teknologi dan tools yang saya kuasai dalam membangun web applications modern."
      />

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category}>
            {/* Category label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${skillColors[category].from}, ${skillColors[category].to})`,
                }}
              />
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
              >
                {category}
              </span>
            </motion.div>

            {/* Skills */}
            <div className="space-y-3">
              {grouped[category]?.map((skill) => {
                const idx = globalIndex++;
                return <SkillBar key={skill.name} skill={skill} index={idx} />;
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Tech badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-14 text-center"
      >
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-5"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
        >
          Also familiar with
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {["Git", "GitHub", "VS Code", "Figma", "Linux", "REST API", "Bootstrap", "jQuery", "Livewire"].map(
            (tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-xs rounded-full font-medium transition-all duration-200 hover:scale-105 cursor-default"
                style={{
                  backgroundColor: "var(--card)",
                  color: "var(--text-secondary)",
                  border: "1px solid var(--border)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {tech}
              </span>
            )
          )}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
