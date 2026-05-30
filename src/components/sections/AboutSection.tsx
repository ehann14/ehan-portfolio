"use client";

import { motion } from "framer-motion";
import {
  HiCode,
  HiLightningBolt,
  HiHeart,
  HiLocationMarker,
  HiMail,
  HiAcademicCap,
} from "react-icons/hi";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { personalInfo } from "@/data/portfolio";

const highlights = [
  {
    icon: HiCode,
    title: "Clean Code",
    description: "Menulis kode yang bersih, terstruktur, dan mudah dimaintain.",
    color: "#3B82F6",
  },
  {
    icon: HiLightningBolt,
    title: "Fast Performance",
    description: "Membangun aplikasi yang cepat, ringan, dan performant.",
    color: "#06B6D4",
  },
  {
    icon: HiHeart,
    title: "Passionate",
    description: "Sangat passionate dalam dunia web development dan UI/UX design.",
    color: "#EC4899",
  },
  {
    icon: HiAcademicCap,
    title: "Always Learning",
    description: "Selalu belajar teknologi baru dan mengikuti perkembangan industri.",
    color: "#8B5CF6",
  },
];

const info = [
  { icon: HiLocationMarker, label: "Location", value: personalInfo.location },
  { icon: HiMail, label: "Email", value: personalInfo.email },
  { icon: HiAcademicCap, label: "Education", value: "SMK Jurusan Rekayasa Perangkat Lunak (RPL)" },
];

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <SectionHeading
            tag="About Me"
            title="Tentang Saya"
            subtitle="Seorang developer muda yang penuh semangat dalam menciptakan pengalaman digital yang berkesan."
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base leading-relaxed mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            Saya adalah <strong style={{ color: "var(--text-primary)" }}>Muhamad Ferhan</strong>, seorang web
            developer yang berbasis di Bandung, Indonesia. Saya memiliki passion yang besar dalam
            membangun produk digital yang tidak hanya fungsional, tetapi juga memiliki tampilan yang
            indah dan pengalaman pengguna yang luar biasa.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-base leading-relaxed mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Dengan pengalaman dalam <strong style={{ color: "#60A5FA" }}>typescript</strong>,{" "}
            <strong style={{ color: "#60A5FA" }}>Laravel</strong>, dan berbagai teknologi modern
            lainnya, saya selalu berusaha memberikan solusi terbaik untuk setiap tantangan yang ada.
          </motion.p>

          {/* Info grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-3"
          >
            {info.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(59,130,246,0.1)",
                    border: "1px solid rgba(59,130,246,0.2)",
                  }}
                >
                  <item.icon className="w-4 h-4" style={{ color: "#60A5FA" }} />
                </div>
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  <span style={{ color: "var(--text-muted)" }}>{item.label}: </span>
                  <span style={{ color: "var(--text-primary)" }}>{item.value}</span>
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Highlight cards */}
        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-5 rounded-2xl cursor-default transition-shadow duration-300 hover:shadow-lg"
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  backgroundColor: `${item.color}15`,
                  border: `1px solid ${item.color}30`,
                }}
              >
                <item.icon className="w-5 h-5" style={{ color: item.color }} />
              </div>
              <h3
                className="font-bold text-sm mb-2"
                style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
              >
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {item.description}
              </p>
            </motion.div>
          ))}

          {/* Quote card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-2 p-5 rounded-2xl relative overflow-hidden"
            style={{
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            <div
              className="absolute top-0 left-0 w-full h-1 rounded-t-2xl"
              style={{
                background: "linear-gradient(90deg, #3B82F6, #06B6D4, #6366F1)",
              }}
            />
            <p
              className="text-sm italic leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              If code is logic that can be tuned, your feelings are a mystery that doesn’t always need a solution.
            </p>
            <p
              className="text-xs mt-2 font-semibold"
              style={{ color: "#60A5FA", fontFamily: "var(--font-mono)" }}
            >
              — Muhamad Ferhan
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
