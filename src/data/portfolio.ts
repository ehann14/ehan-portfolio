// src/data/portfolio.ts

export const personalInfo = {
  name: "Ferhan",
  fullName: "Muhammad Ferhan Pratama Sodikin",
  title: "Full Stack Developer",
  tagline: "Crafting digital experiences with clean code and elegant design",
  description:
    "Saya adalah seorang web developer yang passionate dalam membangun aplikasi web modern yang elegant, performant, dan user-friendly. Dengan pengalaman dalam berbagai teknologi frontend dan backend, saya selalu berusaha menghadirkan solusi terbaik untuk setiap project.",
  email: "ferhan2009@gmail.com",
  phone: "+62 821-2388-7404",
  location: "Bandung, Indonesia",
  github: "https://github.com/ehann14",
  instagram: "https://www.instagram.com/ehann.31",
  whatsapp: "https://wa.me/6282123887404",
  cvUrl: "/cv-ehan.pdf",
  avatar: "https://ui-avatars.com/api/?name=Ferhan&background=0D8ABC&color=fff&size=200",
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
    title: "Virtual Tour School 360°",
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
    title: "Top Up Website",
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
      "Kalkulator ilmiah berbasis Python dengan GUI modern menggunakan Tkinter, mendukung operasi matematika kompleks, history kalkulasi, dan konversi satuan.",
    image: "/images/hosting.png",
    tags: ["Python", "Tkinter", "Math", "GUI"],
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
  {
    id: 3,
    title: "AI Ready ASEAN - Advanced Level",
    issuer: "Amazon & Prestasi Junior Indonesia",
    date: "2025",
    image: "/images/AI Ready ASEAN_page-0002.jpg",
    url: "#",
  },
  {
    id: 4,
    title: "Laravel Framework Expert",
    issuer: "Udemy",
    date: "2024",
    image: "https://placehold.co/600x400/FF9500/ffffff?text=Laravel+Expert",
    url: "#",
  },
  {
    id: 5,
    title: "JavaScript Advanced Concepts",
    issuer: "freeCodeCamp",
    date: "2023",
    image: "https://placehold.co/600x400/007AFF/ffffff?text=JavaScript+Advanced",
    url: "#",
  },
  {
    id: 6,
    title: "Python Programming",
    issuer: "Coursera",
    date: "2023",
    image: "https://placehold.co/600x400/34C759/ffffff?text=Python+Programming",
    url: "#",
  },
];

export const experiences = [
  {
    id: 1,
    type: "work",
    title: "Web Developer Intern (PKL)",
    company: "PT. Digital Kreasi Indonesia",
    period: "Jan 2024 – Mar 2024",
    description:
      "Mengembangkan fitur frontend menggunakan Next.js dan Tailwind CSS. Berkolaborasi dengan tim backend dalam integrasi REST API. Berkontribusi dalam perbaikan bug dan optimasi performa aplikasi.",
    tags: ["Next.js", "Tailwind CSS", "REST API"],
  },
  {
    id: 2,
    type: "project",
    title: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2023 – Sekarang",
    description:
      "Mengerjakan berbagai project website untuk klien lokal, mulai dari company profile, toko online, hingga sistem manajemen. Menangani seluruh proses dari design hingga deployment.",
    tags: ["Laravel", "WordPress", "MySQL"],
  },
  {
    id: 3,
    type: "education",
    title: "Ketua Divisi IT",
    company: "OSIS SMK Negeri 1 Bandung",
    period: "2022 – 2023",
    description:
      "Memimpin tim IT dalam pengembangan website sekolah dan sistem informasi internal. Mengelola infrastruktur digital dan memberikan pelatihan teknologi kepada anggota OSIS.",
    tags: ["Leadership", "Web Dev", "IT Management"],
  },
  {
    id: 4,
    type: "education",
    title: "Siswa SMK Jurusan RPL",
    company: "SMK Negeri 1 Bandung",
    period: "2021 – 2024",
    description:
      "Mempelajari rekayasa perangkat lunak, pemrograman web, database, dan jaringan komputer. Aktif dalam berbagai kompetisi LKS (Lomba Kompetensi Siswa) bidang web technology.",
    tags: ["RPL", "Web Technology", "LKS"],
  },
];