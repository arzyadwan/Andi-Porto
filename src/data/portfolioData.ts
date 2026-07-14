export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  instagram?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  icon: string; // Icon name matching Lucide or raw text
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  category: "Web App" | "Mobile App" | "Design" | "All";
  tags: string[];
  githubLink: string;
  liveLink?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: "work" | "education";
}

export const personalInfo = {
  name: "Andi Arzyadwan",
  title: "Frontend Engineer & Software Developer",
  typingRoles: ["Frontend Engineer", "Fullstack Developer", "TypeScript Enthusiast", "Mobile Developer"],
  avatar: "/avatar.png",
  bio: "Saya adalah seorang developer web yang berfokus pada pembangunan antarmuka pengguna yang estetik, performan, dan berpusat pada pengguna. Saya suka memecahkan masalah kompleks dan mengubahnya menjadi kode Next.js yang bersih.",
  socials: {
    github: "https://github.com/arzyadwan",
    linkedin: "https://linkedin.com/in/arzyadwan",
    email: "arzyadwan@gmail.com",
    instagram: "https://instagram.com/arzyadwan",
  } as SocialLinks,
  stats: [
    { value: "3+", label: "Tahun Pengalaman" },
    { value: "20+", label: "Projek Selesai" },
    { value: "15+", label: "Klien Puas" },
  ] as StatItem[],
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React / Next.js", level: 90, icon: "React" },
      { name: "TypeScript", level: 85, icon: "TypeScript" },
      { name: "Tailwind CSS", level: 95, icon: "Tailwind" },
      { name: "HTML5 & CSS3", level: 95, icon: "HTML5" },
      { name: "State Management (Zustand/Redux)", level: 80, icon: "Zustand" },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js / Express", level: 75, icon: "NodeJS" },
      { name: "RESTful API Design", level: 85, icon: "API" },
      { name: "PostgreSQL & MongoDB", level: 70, icon: "Database" },
      { name: "GraphQL", level: 65, icon: "GraphQL" },
    ],
  },
  {
    title: "Tools & Design Systems",
    skills: [
      { name: "Figma (UI/UX Design)", level: 85, icon: "Figma" },
      { name: "Git & Version Control", level: 90, icon: "Git" },
      { name: "Docker & Containerization", level: 60, icon: "Docker" },
      { name: "Vercel / Netlify (CI/CD)", level: 85, icon: "Vercel" },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "Amali Admin Dashboard",
    description: "Sistem dashboard administrasi toko retail modern untuk manajemen inventaris, statistik penjualan real-time, dan manajemen pengguna.",
    image: "/projects/amali-admin.webp",
    category: "Web App",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    githubLink: "https://github.com/arzyadwan/AMALI-ADMIN-DASHBOARD",
    liveLink: "https://amali-admin-dashboard.vercel.app",
  },
  {
    id: "proj-2",
    title: "Crypto AI Studio Website",
    description: "Platform pendaratan (landing page) interaktif bertema Web3 & kecerdasan buatan untuk analisis tren mata uang kripto dan studio NFT.",
    image: "/projects/crypto-studio.webp",
    category: "Design",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/arzyadwan/Kripto-Website-AI-Studio",
    liveLink: "https://kripto-website-ai-studio.vercel.app",
  },
  {
    id: "proj-3",
    title: "Event Exposure Media Website",
    description: "Portal web media promosi acara untuk manajemen publikasi event, registrasi peserta, dan galeri dokumentasi digital.",
    image: "/projects/event-media.webp",
    category: "Web App",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/arzyadwan/event-exposure-media_web",
    liveLink: "https://event-exposure-media-web.vercel.app",
  },
  {
    id: "proj-4",
    title: "Amali POS (Point of Sale) System",
    description: "Sistem aplikasi kasir penjualan toko dengan fitur pencatatan transaksi cepat, laporan harian otomatis, dan pengelolaan data kasir.",
    image: "/projects/amali-pos.webp",
    category: "Web App",
    tags: ["React", "JavaScript", "CSS Grid", "Node.js"],
    githubLink: "https://github.com/arzyadwan/AMALI-POS-SYSTEM",
  },
  {
    id: "proj-5",
    title: "Kalkulator Kredit Amali Mobile",
    description: "Aplikasi mobile kalkulator simulasi kredit angsuran toko retail dengan algoritma bunga tetap/menurun.",
    image: "/projects/kalkulator-kredit.webp",
    category: "Mobile App",
    tags: ["Kotlin", "Android SDK", "Material Design"],
    githubLink: "https://github.com/arzyadwan/kalkulator-kredit-amali",
  },
  {
    id: "proj-6",
    title: "Andi Preview",
    description: "Sistem aplikasi web utilitas untuk preview gambar sementara dengan unggah seret-dan-lepas (drag and drop) dan salin tautan instan.",
    image: "/projects/andi-preview.webp",
    category: "Web App",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    githubLink: "https://github.com/arzyadwan/Andi-Preview",
    liveLink: "https://andi-image-preview.vercel.app",
  },
  {
    id: "proj-7",
    title: "Premium QR Code Generator",
    description: "Aplikasi generator kode QR premium dengan kustomisasi warna gradien, penyematan logo ikonik, dan ekspor berkas berkualitas tinggi.",
    image: "/projects/qr-generator.webp",
    category: "Web App",
    tags: ["React", "TypeScript", "Vanilla CSS", "Canvas API"],
    githubLink: "https://github.com/arzyadwan/qr-generator",
    liveLink: "https://qr-generator-seven-drab.vercel.app",
  },
];

export const experienceTimeline: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Senior Frontend Engineer",
    company: "TechInovasi Digital",
    location: "Jakarta, Indonesia (Remote)",
    period: "2024 - Sekarang",
    description: [
      "Memimpin migrasi codebase aplikasi web utama dari React SPA lama ke Next.js App Router, meningkatkan load-time sebesar 40%.",
      "Membangun reusable UI component library internal berbasis Tailwind CSS dan Headless UI yang digunakan oleh 3 tim developer.",
      "Melakukan mentoring kepada developer junior tentang praktik terbaik TypeScript dan clean architecture.",
    ],
    type: "work",
  },
  {
    id: "exp-2",
    role: "Frontend Web Developer",
    company: "Creative Studio Indonesia",
    location: "Bandung, Indonesia",
    period: "2022 - 2024",
    description: [
      "Mengembangkan website portofolio interaktif dan landing page pemasaran berskala besar untuk 10+ klien internasional.",
      "Mengoptimalkan performa halaman landing sehingga mendapatkan skor performa Lighthouse rata-rata >90.",
      "Bekerja sama erat dengan tim UI/UX Designer untuk menerjemahkan mockup Figma piksel-presisi menjadi kode HTML/CSS responsif.",
    ],
    type: "work",
  },
  {
    id: "exp-3",
    role: "Sarjana Komputer (S.Kom) - Teknik Informatika",
    company: "Universitas Indonesia",
    location: "Depok, Indonesia",
    period: "2018 - 2022",
    description: [
      "Lulus dengan IPK 3.82 (Predikat Pujian).",
      "Fokus pada Rekayasa Perangkat Lunak dan Desain Interaksi Manusia & Komputer.",
      "Aktif dalam Unit Kegiatan Mahasiswa bidang Pemrograman dan memenangkan Juara 2 Lomba Hackathon Kampus.",
    ],
    type: "education",
  },
];
