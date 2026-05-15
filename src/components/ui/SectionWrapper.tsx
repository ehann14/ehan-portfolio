"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id={id} className={`section-padding ${className}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container mx-auto px-4 max-w-6xl"
      >
        {children}
      </motion.div>
    </section>
  );
}

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeading({ tag, title, subtitle, center = false }: SectionHeadingProps) {
  return (
    <div className={`mb-14 ${center ? "text-center" : ""}`}>
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <span
            className="px-3 py-1 text-xs font-semibold rounded-full tracking-widest uppercase"
            style={{
              backgroundColor: "rgba(59,130,246,0.1)",
              color: "#60A5FA",
              border: "1px solid rgba(59,130,246,0.2)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {tag}
          </span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold"
        style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base md:text-lg max-w-2xl"
          style={{
            color: "var(--text-secondary)",
            marginLeft: center ? "auto" : undefined,
            marginRight: center ? "auto" : undefined,
          }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`mt-5 h-[2px] w-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 ${
          center ? "mx-auto" : ""
        }`}
        style={{ originX: center ? 0.5 : 0 }}
      />
    </div>
  );
}
