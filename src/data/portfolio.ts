// src/data/portfolio.ts

export const personalInfo = {
  name: "Ferhan",
  fullName: "Muhamad Ferhan",
  title: "Full Stack Developer",
  tagline: "Crafting digital experiences with clean code and elegant design",
  description:
    "Saya adalah seorang web developer yang passionate dalam membangun aplikasi web modern yang elegant, performant, dan user-friendly. Dengan pengalaman dalam berbagai teknologi frontend dan backend, saya selalu berusaha menghadirkan solusi terbaik untuk setiap project.",
  email: "ferhan142009@gmail.com",
  phone: "+62 821-2388-7404",
  location: "Bandung, Indonesia",
  github: "https://github.com/ehann14",
  instagram: "https://www.instagram.com/ehann.31",
  whatsapp: "https://wa.me/6282123887404",
  cvUrl: "/cv-ehan.pdf",
  avatar: "images/I'm.jpeg",
};

export const skills = [
  { name: "HTML", level: 95, category: "Frontend" },
  { name: "CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 88, category: "Frontend" },
  { name: "Tailwind CSS", level: 92, category: "Frontend" },
  { name: "Next.js", level: 82, category: "Frontend" },
  { name: "PHP", level: 80, category: "Backend" },
  { name: "Laravel", level: 78, category: "Backend" },
  { name: "Python", level: 75, category: "Backend" },
  { name: "MySQL", level: 85, category: "Database" },
];

export const projects = [
  {
    id: 1,
    title: "Virtual Tour SMKN 11 Bandung 360°",
    description:
      "Aplikasi virtual tour berbasis web menggunakan teknologi 360° panorama untuk menjelajahi lingkungan sekolah secara interaktif. Dilengkapi dengan hotspot navigasi dan informasi detail setiap area.",
    image: "/images/vitour11.png",
    tags: ["JavaScript", "Tailwind CSS", "HTML/CSS", "PHP", "Laravel"],
    liveUrl: "http://127.0.0.1:8000",
    githubUrl: "https://github.com/ehann14/vitour11",
    featured: true,
  },
  {
    id: 2,
    title: "Website top up game online",
    description:
      "Platform top up game online dengan sistem pembayaran terintegrasi, dashboard admin lengkap, dan UI yang modern. Mendukung berbagai metode pembayaran dan real-time order tracking.",
    image: "https://placehold.co/600x400/7C3AED/ffffff?text=Top+Up+Website",
    tags: ["Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://demo.example.com/topup",
    githubUrl: "https://github.com/ehan/topup-website",
    featured: true,
  },
  {
    id: 3,
    title: "Website Store akun Game sederhana",
    description:
      "Aplikasi manajemen data full-featured dengan Laravel, dilengkapi autentikasi, role management, export Excel/PDF, dan dashboard analitik yang komprehensif.",
    image: "/images/ehanstore.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://ehanzz-store.vercel.app/",
    githubUrl: "https://github.com/ehann14/EhanzzStore.git",
    featured: false,
  },
  {
    id: 4,
    title: "Landing Page Hosting",
    description:
      "Landing page untuk layanan hosting yang modern dan responsif, menampilkan paket layanan, fitur, harga, serta formulir pemesanan. Dibangun dengan HTML, CSS, dan JavaScript untuk performa optimal dan pengalaman pengguna yang intuitif.",
    image: "/images/hosting.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://ehanzhosting.vercel.app",
    githubUrl: "https://github.com/ehann14/ehanzhosting.git",
    featured: false,
  },
];

export const certificates = [
  {
    id: 1,
    title: "Guinness World Record: Partisipasi dalam Pembuatan Program Aplikasi Terbanyak dari Amazon",
    issuer: "Prestasi Junior Indonesia",
    date: "2025",
    image: "/images/AWS.jpg",
    url: "#",
  },
  {
    id: 2,
    title: "AI Ready ASEAN Certification",
    issuer: "Amazon & Prestasi Junior Indonesia",
    date: "2025",
    image: "/images/AI Ready ASEAN_page-0001.jpg",
    url: "#",
  },
];

export const experiences = [
  {
    id: 3,
    type: "education",
    title: "Ketua Divisi IT",
    company: "SMK Negeri 11 Bandung",
    period: "2025 – 2026",
    description:
      "Memimpin tim IT dalam pengembangan website sekolah dan sistem informasi internal.",
    tags: ["Leadership", "Web Dev", "IT Management"],
  },
  {
    id: 4,
    type: "education",
    title: "Siswa SMK Jurusan RPL",
    company: "SMK Negeri 11 Bandung",
    period: "2025 – 2027",
    description:
      "Mempelajari rekayasa perangkat lunak, pemrograman web, database, dan jaringan komputer. Aktif dalam berbagai kompetisi LKS (Lomba Kompetensi Siswa) bidang web technology.",
    tags: ["RPL", "Web Technology", "LKS"],
  },
];