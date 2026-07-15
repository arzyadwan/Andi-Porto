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
  features?: string[];
  fullTechStack?: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    tools?: string[];
  };
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
    longDescription: "AMALI KREDIT Admin Dashboard adalah aplikasi Point of Sale (POS) premium dan simulator kredit terintegrasi yang dirancang untuk mengelola inventaris produk, melacak riwayat transaksi pelanggan, serta melakukan simulasi kredit secara real-time. Aplikasi ini memiliki visual dashboard kasir modern yang interaktif, cepat, dan dioptimasi secara penuh untuk kenyamanan operasional bisnis harian Anda.",
    image: "/projects/amali-admin.webp",
    category: "Web App",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    githubLink: "https://github.com/arzyadwan/AMALI-ADMIN-DASHBOARD",
    liveLink: "https://amali-admin-dashboard.vercel.app",
    features: [
      "Premium Cashier POS: Antarmuka kasir premium yang dioptimalkan untuk pencarian produk cepat dan filter kategori.",
      "Inventory Management: Melacak stok barang secara akurat lengkap dengan kode SKU, kategori, serta peringatan stok menipis.",
      "Credit Simulator: Menghitung secara otomatis simulasi angsuran bulanan, suku bunga, dan tenor pinjaman untuk pelanggan secara instan.",
      "Customer Tracking: Menyimpan profil pelanggan, riwayat belanja, dan status cicilan kredit mereka.",
      "Digital Receipt Generator: Membuat salinan struk belanja digital di sidebar kasir yang siap diverifikasi secara langsung."
    ],
    fullTechStack: {
      frontend: ["React 19", "Vite 7", "TypeScript", "Tailwind CSS 4", "React Hook Form", "Zod", "Axios"],
      backend: ["Node.js", "Express"],
      database: ["PostgreSQL", "Prisma ORM 7.3.0"],
      tools: ["Vercel", "Git & GitHub"]
    }
  },
  {
    id: "proj-2",
    title: "Crypto AI Studio Website",
    description: "Platform pendaratan (landing page) interaktif bertema Web3 & kecerdasan buatan untuk analisis tren mata uang kripto dan studio NFT.",
    longDescription: "Crypto AI Studio adalah platform pendaratan interaktif kelas atas bertema Web3 yang menggabungkan kecerdasan buatan dengan visualisasi tren mata uang kripto. Web ini dirancang dengan estetika glassmorphic modern, animasi transisi premium, dan tata letak dinamis untuk menarik minat investor, kolektor NFT, dan peminat teknologi desentralisasi.",
    image: "/projects/crypto-studio.webp",
    category: "Design",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/arzyadwan/Kripto-Website-AI-Studio",
    liveLink: "https://kripto-website-ai-studio.vercel.app",
    features: [
      "Landing Page Interaktif: Visualisasi efek glassmorphism modern dengan gradien neon yang memikat mata.",
      "AI Crypto Assistant Mockup: Panel visual simulasi asisten pintar untuk menganalisis tren fluktuasi harga koin secara prediktif.",
      "Dynamic NFT Showcases: Galeri kartu koleksi seni digital NFT dengan hover efek 3D paralaks.",
      "Market Trend Visualizations: Diagram mockup statistik harga koin teratas yang disajikan dengan visual bersih.",
      "Responsive Layout: Kompatibilitas responsif di semua perangkat dari desktop layar lebar hingga ponsel pintar."
    ],
    fullTechStack: {
      frontend: ["Next.js App Router", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
      tools: ["Vercel", "Figma", "Git & GitHub"]
    }
  },
  {
    id: "proj-3",
    title: "Event Exposure Media Website",
    description: "Portal web media promosi acara untuk manajemen publikasi event, registrasi peserta, dan galeri dokumentasi digital.",
    longDescription: "Event Exposure Media adalah aplikasi portal web yang memfasilitasi publikasi, promosi, dan dokumentasi acara digital secara profesional. Dibuat menggunakan Next.js, portal ini mempermudah penyelenggara mengunggah detail event dan mempermudah pengunjung mencari event berdasarkan klasifikasi industri.",
    image: "/projects/event-media.webp",
    category: "Web App",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/arzyadwan/event-exposure-media_web",
    liveLink: "https://event-exposure-media-web.vercel.app",
    features: [
      "Event Manager: Pengelolaan data publikasi informasi acara (deskripsi, pengisi acara, tanggal, dan harga tiket).",
      "Dynamic Categories Filter: Penyaringan event berdasarkan kategori seperti Tech Hackathon, Music Festival, Business Webinar, dan Art Exhibition.",
      "Participant Registration Form: Formulir pendaftaran dan pemesanan tiket event yang tervalidasi secara instan.",
      "Documentation Gallery: Komponen galeri untuk menampilkan foto dan dokumentasi kegiatan pasca-acara diselenggarakan."
    ],
    fullTechStack: {
      frontend: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Lucide Icons"],
      tools: ["Vercel", "Git & GitHub"]
    }
  },
  {
    id: "proj-4",
    title: "Amali POS (Point of Sale) System",
    description: "Sistem aplikasi kasir penjualan toko dengan fitur pencatatan transaksi cepat, laporan harian otomatis, dan pengelolaan data kasir.",
    longDescription: "Amali POS System adalah aplikasi kasir berbasis web yang dirancang untuk mendukung kelancaran transaksi di toko retail. Sistem ini menyederhanakan proses checkout, menghitung total belanja beserta kembalian secara otomatis, serta mencatat data kasir yang bertugas demi transparansi audit transaksi penjualan.",
    image: "/projects/amali-pos.webp",
    category: "Web App",
    tags: ["React", "JavaScript", "CSS Grid", "Node.js"],
    githubLink: "https://github.com/arzyadwan/AMALI-POS-SYSTEM",
    features: [
      "Fast Checkout: Keranjang belanja real-time yang memproses penambahan item dan kalkulasi otomatis harga total.",
      "Transaction Log: Sistem pelaporan transaksi harian otomatis untuk memonitor omzet penjualan kasir.",
      "Multi-category Product Catalog: Katalog menu produk yang tertata rapi menggunakan tata letak CSS Grid responsif.",
      "Cashier Audit System: Pencatatan identitas staf kasir yang melayani transaksi penjualan."
    ],
    fullTechStack: {
      frontend: ["React JS", "JavaScript (ES6)", "CSS Grid & Flexbox", "Local Storage API"],
      backend: ["Node.js", "Express (Mock endpoints)"],
      tools: ["Git & GitHub"]
    }
  },
  {
    id: "proj-5",
    title: "Kalkulator Kredit Amali Mobile",
    description: "Aplikasi mobile kalkulator simulasi kredit angsuran toko retail dengan algoritma bunga tetap/menurun.",
    longDescription: "Kalkulator Kredit Amali Mobile adalah aplikasi Android native yang membantu pelanggan dan tim sales toko retail melakukan simulasi pinjaman cicilan secara langsung di smartphone. Menggunakan slider input interaktif untuk menghitung angsuran bulanan, bunga flat maupun bunga menurun secara detail.",
    image: "/projects/kalkulator-kredit.webp",
    category: "Mobile App",
    tags: ["Kotlin", "Android SDK", "Material Design"],
    githubLink: "https://github.com/arzyadwan/kalkulator-kredit-amali",
    features: [
      "Amortization Calculator: Simulasi kredit detail dengan opsi bunga tetap (flat rate) dan bunga menurun (sliding rate).",
      "Interactive Sliders: Pengaturan nominal pinjaman dan masa tenor bulanan menggunakan slider input yang responsif.",
      "Monthly Installment breakdown: Rincian porsi pembayaran pokok dan beban bunga di setiap periode cicilan.",
      "Material Design Components: Antarmuka aplikasi mobile modern yang rapi sesuai pedoman Material Design Google."
    ],
    fullTechStack: {
      frontend: ["Kotlin Native", "Android SDK", "Jetpack Library", "Material Design Components XML"],
      tools: ["Android Studio", "Git & GitHub"]
    }
  },
  {
    id: "proj-6",
    title: "Andi Preview",
    description: "Sistem aplikasi web utilitas untuk preview gambar sementara dengan unggah seret-dan-lepas (drag and drop) dan salin tautan instan.",
    longDescription: "Andi Preview adalah utilitas web minimalis untuk melihat pratinjau (preview) berkas gambar sementara secara instan. Sangat cocok bagi pengembang web atau desainer grafis yang membutuhkan ruang pratinjau cepat tanpa harus membebani memori penyimpanan server lokal.",
    image: "/projects/andi-preview.webp",
    category: "Web App",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    githubLink: "https://github.com/arzyadwan/Andi-Preview",
    liveLink: "https://andi-image-preview.vercel.app",
    features: [
      "Drag and Drop Area: Mengunggah berkas gambar dengan cara menyeret gambar langsung ke browser secara instan.",
      "Image Meta Analyzer: Menampilkan informasi detail metadata berkas gambar (nama berkas, resolusi dimensi piksel, dan ukuran memori).",
      "Instant Shareable Link: Menyalin tautan lokal sementara untuk keperluan pratinjau cepat.",
      "Lightweight Viewer: Sistem rendering super cepat tanpa overhead framework yang berat."
    ],
    fullTechStack: {
      frontend: ["React JS", "TypeScript", "Tailwind CSS", "Lucide React", "HTML5 File API"],
      tools: ["Vercel", "Git & GitHub"]
    }
  },
  {
    id: "proj-7",
    title: "Premium QR Code Generator",
    description: "Aplikasi generator kode QR premium dengan kustomisasi warna gradien, penyematan logo ikonik, dan ekspor berkas berkualitas tinggi.",
    longDescription: "Premium QR Code Generator adalah web app utilitas kreatif yang mempermudah individu atau pelaku bisnis membuat kode QR yang menarik dan ber-brand. Web ini menawarkan kemampuan menggabungkan logo di tengah kode QR, kustomisasi warna gradien, hingga melakukan unduhan file QR dalam resolusi tinggi.",
    image: "/projects/qr-generator.webp",
    category: "Web App",
    tags: ["React", "TypeScript", "Vanilla CSS", "Canvas API"],
    githubLink: "https://github.com/arzyadwan/qr-generator",
    liveLink: "https://qr-generator-seven-drab.vercel.app",
    features: [
      "Gradient QR Styling: Membuat kode QR dengan kombinasi warna gradien dua warna yang menakjubkan.",
      "Center Logo Insertion: Menyematkan logo ikonik perusahaan atau gambar profil di tengah area kode QR secara otomatis.",
      "High-Res Export: Mendukung ekspor unduhan kode QR dalam format PNG berkualitas tinggi untuk cetak media promosi.",
      "Real-time QR Preview: Kode QR langsung diperbarui seketika saat Anda mengetik URL atau teks masukan."
    ],
    fullTechStack: {
      frontend: ["React 19", "TypeScript", "Vite", "Canvas API", "qrcode.react Library", "Vanilla CSS Modules"],
      tools: ["Vercel", "Git & GitHub"]
    }
  },
  {
    id: "proj-8",
    title: "Tebak Skor v2",
    description: "Aplikasi interaktif tebak skor pertandingan sepak bola secara real-time untuk acara Nonton Bareng (Nobar) dengan integrasi database Supabase.",
    longDescription: "Tebak Skor v2 adalah platform interaktif yang dikembangkan khusus untuk acara nonton bareng (nobar) sepak bola. Aplikasi ini memungkinkan penonton untuk mengirimkan prediksi skor mereka sebelum kick-off, sementara admin/panitia dapat mengelola jadwal pertandingan, memperbarui skor langsung (live score), dan menyajikan papan peringkat (leaderboard) pemenang secara transparan dan real-time di layar acara.",
    image: "/projects/tebak-skor-v2.webp",
    category: "Web App",
    tags: ["HTML5", "CSS3", "JavaScript", "Supabase", "Tailwind CSS"],
    githubLink: "https://github.com/arzyadwan/tebak-skor-v2",
    liveLink: "https://tebak-skor-v2.vercel.app",
    features: [
      "Real-time Leaderboard: Papan peringkat peserta nobar yang diperbarui secara langsung begitu admin mengubah skor pertandingan.",
      "Device Lock System: Membatasi satu prediksi per orang untuk tiap pertandingan guna menghindari spam/duplikasi tebakan.",
      "Admin Control Panel: Dasbor khusus panitia yang diamankan dengan PIN untuk menginput pertandingan, menutup tebakan saat kick-off, dan meng-update skor live.",
      "Flexible Scoring System: Pemberian poin otomatis (skor tepat = 3 poin, tebak pemenang/selisih tepat = 1 poin, salah semua = 0 poin).",
      "Live Display View: Tampilan layar penuh interaktif yang cocok diproyeksikan ke layar proyektor atau TV saat acara nobar."
    ],
    fullTechStack: {
      frontend: ["HTML5", "Tailwind CSS", "JavaScript (ES6)", "FontAwesome Icons", "Supabase JS Client"],
      backend: ["Supabase Edge Functions / SECURED RPC Functions"],
      database: ["Supabase (PostgreSQL) with Row Level Security (RLS)"],
      tools: ["Vercel", "Git & GitHub"]
    }
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
