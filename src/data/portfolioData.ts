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
  name: "Budi Santoso",
  title: "Frontend Engineer & UI Designer",
  typingRoles: ["Frontend Engineer", "UI/UX Designer", "Next.js Enthusiast", "TypeScript Developer"],
  avatar: "/avatar.png",
  bio: "Saya adalah seorang developer web yang berfokus pada pembangunan antarmuka pengguna yang estetik, performan, dan berpusat pada pengguna. Saya suka memecahkan masalah kompleks dan mengubahnya menjadi kode Next.js yang bersih.",
  socials: {
    github: "https://github.com/budisantoso",
    linkedin: "https://linkedin.com/in/budisantoso",
    email: "budi.santoso@example.com",
    instagram: "https://instagram.com/budisantoso",
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
    title: "Wargaku - Portal Informasi Warga",
    description: "Aplikasi mobile-first untuk manajemen data warga, pengaduan lingkungan, dan informasi administrasi desa setempat secara real-time.",
    image: "/projects/wargaku.webp",
    category: "Web App",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Supabase"],
    githubLink: "https://github.com/budisantoso/wargaku",
    liveLink: "https://wargaku-app.vercel.app",
  },
  {
    id: "proj-2",
    title: "Sistem Informasi Manajemen Apotek (Winsip)",
    description: "Dashboard kasir, pelacakan inventaris obat, analisis pendapatan bulanan, dan pengingat kadaluwarsa obat otomatis.",
    image: "/projects/winsip.webp",
    category: "Web App",
    tags: ["React", "Vite", "Tailwind CSS", "Express.js", "PostgreSQL"],
    githubLink: "https://github.com/budisantoso/winsip",
  },
  {
    id: "proj-3",
    title: "Vibrance - Landing Page Perusahaan Vektor",
    description: "Desain dan implementasi landing page bertema neon-brutalism untuk agensi kreatif dengan performa tinggi dan animasi scroll interaktif.",
    image: "/projects/vibrance.webp",
    category: "Design",
    tags: ["Figma", "Next.js", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/budisantoso/vibrance-landing",
    liveLink: "https://vibrance-agency.vercel.app",
  },
  {
    id: "proj-4",
    title: "QR Generator Pro Max",
    description: "Aplikasi penghasil kode QR kustom dengan dukungan warna gradien, penyematan logo di tengah, dan ekspor SVG/PNG resolusi tinggi.",
    image: "/projects/qr-generator.webp",
    category: "Web App",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Canvas API"],
    githubLink: "https://github.com/budisantoso/qr-generator",
    liveLink: "https://quickqr-pro.vercel.app",
  },
  {
    id: "proj-5",
    title: "NewsPoint - Web Portal Berita",
    description: "Desain UI/UX untuk aplikasi mobile pemantau berita terintegrasi dengan filter kategori personalisasi dan bookmark berita offline.",
    image: "/projects/newspoint.webp",
    category: "Design",
    tags: ["Figma", "UI Design", "Mobile Prototyping"],
    githubLink: "https://github.com/budisantoso/newspoint-design",
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
