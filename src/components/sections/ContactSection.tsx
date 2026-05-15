"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane, HiCheck } from "react-icons/hi";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SectionWrapper, SectionHeading } from "@/components/ui/SectionWrapper";
import { personalInfo } from "@/data/portfolio";

const socials = [
  {
    icon: FaGithub,
    label: "GitHub",
    url: personalInfo.github,
    color: "#6e7681",
    hoverColor: "#f0f6fc",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    url: personalInfo.instagram,
    color: "#E1306C",
    hoverColor: "#E1306C",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    url: personalInfo.whatsapp,
    color: "#25D366",
    hoverColor: "#25D366",
  },
  {
    icon: HiMail,
    label: "Email",
    url: `mailto:${personalInfo.email}`,
    color: "#3B82F6",
    hoverColor: "#3B82F6",
  },
];

const contactInfo = [
  { icon: HiMail, label: "Email", value: personalInfo.email },
  { icon: HiPhone, label: "WhatsApp", value: personalInfo.phone },
  { icon: HiLocationMarker, label: "Location", value: personalInfo.location },
];

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <SectionWrapper id="contact" className="mesh-bg">
      <SectionHeading
        tag="Contact"
        title="Hubungi Saya"
        subtitle="Ada project menarik? Atau sekadar ingin ngobrol? Jangan ragu untuk menghubungi saya!"
        center
      />

      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Left: Contact Info */}
        <div className="space-y-8">
          {/* Info cards */}
          <div className="space-y-4">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-2xl"
                style={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(59,130,246,0.1)",
                    border: "1px solid rgba(59,130,246,0.2)",
                  }}
                >
                  <item.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                    {item.label}
                  </p>
                  <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
            >
              Find me on
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{
                    backgroundColor: "var(--card)",
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                  }}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" style={{ color: social.color }} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Availability card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-5 rounded-2xl relative overflow-hidden"
            style={{
              backgroundColor: "rgba(59,130,246,0.05)",
              border: "1px solid rgba(59,130,246,0.2)",
            }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
              >
                Open to Work
              </span>
            </div>
            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
              Saat ini saya sedang open untuk freelance project dan kolaborasi. Response time: dalam
              24 jam.
            </p>
          </motion.div>
        </div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-3xl"
          style={{
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
          }}
        >
          <h3
            className="font-bold text-lg mb-6"
            style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
          >
            Kirim Pesan
          </h3>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-xs font-medium mb-2"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                >
                  Nama
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Nama kamu"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-blue-500/30"
                  style={{
                    backgroundColor: "var(--surface)",
                    color: "var(--text-primary)",
                    border: "1px solid var(--border)",
                    fontFamily: "var(--font-body)",
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-xs font-medium mb-2"
                  style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="email@kamu.com"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-blue-500/30"
                  style={{
                    backgroundColor: "var(--surface)",
                    color: "var(--text-primary)",
                    border: "1px solid var(--border)",
                    fontFamily: "var(--font-body)",
                  }}
                />
              </div>
            </div>

            <div>
              <label
                className="block text-xs font-medium mb-2"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
              >
                Subject
              </label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Perihal pesan"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-blue-500/30"
                style={{
                  backgroundColor: "var(--surface)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border)",
                  fontFamily: "var(--font-body)",
                }}
              />
            </div>

            <div>
              <label
                className="block text-xs font-medium mb-2"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}
              >
                Pesan
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Ceritakan project atau pertanyaan kamu..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-blue-500/30 resize-none"
                style={{
                  backgroundColor: "var(--surface)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border)",
                  fontFamily: "var(--font-body)",
                }}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              disabled={sending || sent}
              className="w-full py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all disabled:opacity-70"
              style={{
                background: sent
                  ? "linear-gradient(135deg, #10B981, #06B6D4)"
                  : "linear-gradient(135deg, #3B82F6, #06B6D4)",
                fontFamily: "var(--font-body)",
              }}
            >
              {sending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full spinner" />
                  Mengirim...
                </>
              ) : sent ? (
                <>
                  <HiCheck className="w-4 h-4" />
                  Pesan Terkirim!
                </>
              ) : (
                <>
                  <HiPaperAirplane className="w-4 h-4 -rotate-45" />
                  Kirim Pesan
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
