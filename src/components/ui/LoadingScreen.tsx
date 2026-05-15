"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: "var(--bg)" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: "backOut" }}
              className="relative"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span
                  className="text-white font-display font-bold text-2xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  E
                </span>
              </div>
              {/* Orbiting dot */}
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "-20px 20px" }}
              />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="text-center"
            >
              <p
                className="text-xl font-display font-bold tracking-widest"
                style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
              >
                EHAN
              </p>
              <p
                className="text-xs tracking-[0.3em] mt-1"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
              >
                PORTFOLIO
              </p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="w-32 h-[2px] rounded-full overflow-hidden"
              style={{ backgroundColor: "var(--border)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
