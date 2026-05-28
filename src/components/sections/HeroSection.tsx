"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HiArrowDown, HiDownload } from "react-icons/hi";
import { personalInfo } from "@/data/portfolio";
import { scrollToSection } from "@/lib/utils";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden mesh-bg"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large glow orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: "rgba(59,130,246,0.15)" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: "rgba(6,182,212,0.12)" }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 max-w-6xl pt-24 pb-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: "rgba(59,130,246,0.08)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  color: "#60A5FA",
                  fontFamily: "var(--font-mono)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.6 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black mb-4 leading-none"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Typing animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.5 }}
              className="flex items-center gap-3 justify-center lg:justify-start mb-6"
            >
              <span
                className="text-xl md:text-2xl font-light"
                style={{ color: "var(--text-secondary)" }}
              >
                I&apos;m a{" "}
              </span>
              <span
                className="text-xl md:text-2xl font-semibold"
                style={{ color: "#60A5FA", fontFamily: "var(--font-display)" }}
              >
                <TypeAnimation
                  sequence={[
                    "Web Developer",
                    2000,
                    "Frontend Developer",
                    2000,
                    "UI Designer",
                    2000,
                    "Laravel Dev",
                    2000,
                  ]}
                  wrapper="span"
                  repeat={Infinity}
                  speed={50}
                />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.5 }}
              className="text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
              style={{ color: "var(--text-secondary)" }}
            >
              {personalInfo.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection("projects")}
                className="px-7 py-3.5 rounded-2xl font-semibold text-sm text-white transition-all duration-200 shadow-lg shadow-blue-500/25"
                style={{
                  background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
                  fontFamily: "var(--font-body)",
                }}
              >
                View Projects
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection("contact")}
                className="px-7 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200"
                style={{
                  backgroundColor: "var(--card)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Contact Me
              </motion.button>

              <motion.a
                href={personalInfo.cvUrl}
                download
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200"
                style={{
                  backgroundColor: "rgba(59,130,246,0.08)",
                  color: "#60A5FA",
                  border: "1px solid rgba(59,130,246,0.2)",
                  fontFamily: "var(--font-body)",
                }}
              >
                <HiDownload className="w-4 h-4" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.5 }}
              className="flex gap-8 mt-12 justify-center lg:justify-start"
            >
              {[
                { label: "Projects", value: "10+" },
                { label: "Certificates", value: "6+" },
                { label: "Technologies", value: "9+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p
                    className="text-2xl font-bold gradient-text"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.0, duration: 0.6, ease: "backOut" }}
            className="flex-shrink-0 float-animation"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #3B82F6, #06B6D4, #6366F1, #3B82F6)",
                  padding: "3px",
                }}
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{ backgroundColor: "var(--bg)" }}
                />
              </div>

              {/* Avatar image */}
              <div className="absolute inset-[6px] rounded-full overflow-hidden bg-gradient-to-br from-blue-900/50 to-cyan-900/30 flex items-center justify-center">
                <Image
                  src={`/${personalInfo.avatar}`}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-8 px-3 py-2 rounded-xl text-xs font-semibold glass shadow-lg"
                style={{
                  backgroundColor: "rgba(59,130,246,0.15)",
                  border: "1px solid rgba(59,130,246,0.3)",
                  color: "#60A5FA",
                  fontFamily: "var(--font-mono)",
                }}
              >
                Next.js ✨
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-4 bottom-12 px-3 py-2 rounded-xl text-xs font-semibold glass shadow-lg"
                style={{
                  backgroundColor: "rgba(6,182,212,0.15)",
                  border: "1px solid rgba(6,182,212,0.3)",
                  color: "#22D3EE",
                  fontFamily: "var(--font-mono)",
                }}
              >
                Laravel 🔥
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
          >
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <HiArrowDown className="w-4 h-4" style={{ color: "var(--text-muted)" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
