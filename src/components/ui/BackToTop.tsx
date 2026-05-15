"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronUp } from "react-icons/hi";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-6 z-40 w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg transition-shadow hover:shadow-xl"
          style={{
            background: "linear-gradient(135deg, #3B82F6, #06B6D4)",
          }}
          aria-label="Back to top"
        >
          <HiChevronUp className="w-5 h-5 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
