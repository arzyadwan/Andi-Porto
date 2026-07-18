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
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 90, icon: "React" },
      { name: "TypeScript", level: 85, icon: "TypeScript" },
      { name: "Tailwind CSS", level: 95, icon: "Tailwind" },
      { name: "HTML5 & CSS3", level: 95, icon: "HTML5" },
      { name: "State Management (Zustand/Redux)", level: 80, icon: "Zustand" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js / Express", level: 75, icon: "NodeJS" },
      { name: "RESTful API Design", level: 85, icon: "API" },
      { name: "PostgreSQL & MongoDB", level: 70, icon: "Database" },
      { name: "GraphQL", level: 65, icon: "GraphQL" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & Version Control", level: 90, icon: "Git" },
      { name: "Docker & Containerization", level: 60, icon: "Docker" },
      { name: "Vercel / Netlify (CI/CD)", level: 85, icon: "Vercel" },
    ],
  },
  {
    title: "Design System",
    skills: [
      { name: "Figma (UI/UX Design)", level: 85, icon: "Figma" },
      { name: "Component-driven Development", level: 80, icon: "Component" },
      { name: "Design Tokens & Style Guides", level: 85, icon: "StyleGuide" },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "Andi-Porto",
    description: "Situs website portofolio pribadi modern berbasis Next.js App Router, Tailwind CSS, dan TypeScript dengan arsitektur multipage.",
    longDescription: "Andi-Porto adalah proyek website portofolio pribadi modern yang dirancang untuk menampilkan profil profesional, keahlian teknis, linimasa pengalaman kerja, serta showcase detail portofolio proyek secara dinamis dan elegan. Menggunakan struktur Next.js App Router terbaru dengan performa tinggi dan transisi yang halus.",
    image: "/projects/andi-porto.webp",
    category: "Web App",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/arzyadwan/Andi-Porto",
    liveLink: "https://arzyadwan.vercel.app",
    features: [
      "Multipage Router Architecture: Perpindahan halaman super cepat dan mulus menggunakan Next.js App Router.",
      "Interactive Projects Showcases: Kartu proyek interaktif dengan micro-frontend mockups terintegrasi langsung di UI.",
      "Dynamic Project Detail Pages: Rute dinamis /projects/[id] untuk menyajikan rincian teknis mendalam per proyek.",
      "Interactive Theme Toggle: Dukungan penuh Dark Mode dan Light Mode terintegrasi dengan Tailwind CSS."
    ],
    fullTechStack: {
      frontend: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Lucide React", "Framer Motion"],
      tools: ["Vercel", "Git & GitHub"]
    }
  },
  {
    id: "proj-2",
    title: "bayfund",
    description: "Platform Web3 Crowdfunding terdesentralisasi di jaringan Polygon (Amoy Testnet) dengan interaksi Smart Contract Solidity.",
    longDescription: "bayfund adalah platform penggalangan dana (crowdfunding) berbasis Web3 terdesentralisasi. Pengguna dapat membuat kampanye penggalangan dana, sementara donatur dapat menyumbang secara transparan menggunakan mata uang kripto yang langsung diproses melalui Smart Contract di jaringan Polygon (Amoy Testnet). Terintegrasi dengan wallet MetaMask untuk otentikasi aman.",
    image: "/projects/bayfund.webp",
    category: "Web App",
    tags: ["React", "TypeScript", "Solidity", "Ethers.js", "Express", "MongoDB"],
    githubLink: "https://github.com/arzyadwan/bayfund",
    features: [
      "Web3 Donation System: Donasi diproses secara langsung via Smart Contract Polygon, menjamin transparansi blockchain.",
      "MetaMask Wallet Integration: Otentikasi aman dan koneksi wallet menggunakan MetaMask dan Ethers.js.",
      "Campaign Management: Membuat dan mengelola kampanye dengan target dana, deskripsi, gambar, dan deadline.",
      "Secure Creator Withdrawal: Penarikan dana otomatis bagi pembuat kampanye setelah target penggalangan berhasil tercapai."
    ],
    fullTechStack: {
      frontend: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Ethers.js"],
      backend: ["Node.js", "Express.js", "TypeScript", "JSON Web Token (JWT)"],
      database: ["MongoDB", "Mongoose ORM"],
      tools: ["Solidity", "Hardhat", "Polygon Amoy Testnet", "MetaMask"]
    }
  },
  {
    id: "proj-3",
    title: "ce-referral-bot",
    description: "Bot Telegram dan Dashboard Admin Web untuk manajemen pertumbuhan komunitas berbasis tautan rujukan dengan mesin validasi anti-abuse.",
    longDescription: "ce-referral-bot (Telegram Referral & Community Growth Bot) adalah sistem terpadu untuk memantau dan mengelola rujukan grup Telegram. Bot ini membuat tautan undangan grup unik (Direct Invite Link) untuk melacak pendaftar baru, sementara backend memvalidasi rujukan secara real-time berdasarkan keaktifan anggota baru di grup guna menghindari kecurangan bot/akun kloningan.",
    image: "/projects/ce-referral-bot.webp",
    category: "Web App",
    tags: ["NestJS", "Telegraf", "Next.js", "Prisma", "PostgreSQL"],
    githubLink: "https://github.com/arzyadwan/ce-referral-bot",
    features: [
      "Direct Invite Link Bot: Membuat invite link unik otomatis dan mendeteksi anggota baru secara real-time.",
      "Anti-Abuse Validation Engine: Mengevaluasi rujukan secara berkala berdasarkan keanggotaan aktif dan jumlah pesan.",
      "Web Admin Dashboard: Analytics metrik grup, visualisasi grafik pertumbuhan Chart.js, dan panel drawer detail rujukan.",
      "Secure Admin REST API: Autentikasi JWT Passport untuk mengamankan komunikasi dashboard ke backend."
    ],
    fullTechStack: {
      frontend: ["Next.js", "Tailwind CSS", "Lucide React", "Chart.js"],
      backend: ["NestJS", "Telegraf Library (Bot API)", "TypeScript", "Prisma ORM"],
      database: ["PostgreSQL"],
      tools: ["Docker", "Vercel", "Git & GitHub"]
    }
  },
  {
    id: "proj-4",
    title: "andiytmp4",
    description: "Aplikasi konverter video YouTube ke MP4/MP3 oranye-putih modern dengan status progress tracking real-time.",
    longDescription: "andiytmp4 adalah aplikasi konverter video YouTube modern berbasis web. Pengguna cukup menempelkan tautan video YouTube untuk mengunduh dan mengonversinya menjadi file video MP4 (hingga 1080p Full HD) atau file audio MP3 (320kbps) dengan progress tracking real-time (kecepatan, persentase, sisa waktu) memanfaatkan Server-Sent Events (SSE).",
    image: "/projects/andiytmp4.webp",
    category: "Web App",
    tags: ["React", "Express", "FFmpeg", "yt-dlp", "Server-Sent Events"],
    githubLink: "https://github.com/arzyadwan/andiiytmp4",
    features: [
      "Real-time Download Progress: Integrasi Server-Sent Events (SSE) untuk menampilkan kecepatan unduh dan persentase langsung.",
      "High Quality Formats: Mendukung konversi audio MP3 hingga 320kbps dan video MP4 hingga 1080p Full HD.",
      "Automatic FFmpeg Merging: Menggabungkan video resolusi tinggi dengan aliran audio secara otomatis di sisi server.",
      "Auto Storage Cleanup: Penghapusan file sementara di server secara otomatis setelah selesai diunduh oleh klien."
    ],
    fullTechStack: {
      frontend: ["React.js (Vite)", "Tailwind CSS", "Lucide React", "HTML5 Eventsource API"],
      backend: ["Node.js", "Express.js", "yt-dlp (Python)", "FFmpeg CLI"],
      tools: ["Vercel", "Git & GitHub"]
    }
  },
  {
    id: "proj-5",
    title: "tebak-skor-v2",
    description: "Aplikasi web interaktif tebak skor pertandingan sepak bola real-time untuk nobar terintegrasi database Supabase.",
    longDescription: "Tebak Skor v2 adalah aplikasi web interaktif yang dikembangkan khusus untuk acara nonton bareng (nobar) sepak bola. Aplikasi ini memungkinkan penonton untuk mengirimkan prediksi skor mereka sebelum kick-off, sementara admin/panitia dapat mengelola jadwal pertandingan, memperbarui skor langsung (live score), dan menyajikan papan peringkat (leaderboard) pemenang secara transparan dan real-time di layar acara.",
    image: "/projects/tebak-skor-v2.webp",
    category: "Web App",
    tags: ["HTML5", "CSS3", "JavaScript", "Supabase", "Tailwind CSS"],
    githubLink: "https://github.com/arzyadwan/tebak-skor-v2",
    liveLink: "https://tebak-skor-v2.vercel.app",
    features: [
      "Real-time Leaderboard: Papan peringkat peserta nobar yang diperbarui secara langsung begitu admin mengubah skor pertandingan.",
      "Device Lock System: Membatasi satu prediksi per orang untuk tiap pertandingan guna menghindari spam/duplikasi tebakan.",
      "Admin Control Panel: Dasbor khusus panitia yang diamankan dengan PIN untuk menginput pertandingan, menutup tebakan saat kick-off, dan meng-update skor live.",
      "Flexible Scoring System: Pemberian poin otomatis (skor tepat = 3 poin, tebak pemenang/selisih tepat = 1 poin, salah semua = 0 poin)."
    ],
    fullTechStack: {
      frontend: ["HTML5", "Tailwind CSS", "JavaScript (ES6)", "FontAwesome Icons", "Supabase JS Client"],
      backend: ["Supabase Edge Functions / SECURED RPC Functions"],
      database: ["Supabase (PostgreSQL) with Row Level Security (RLS)"],
      tools: ["Vercel", "Git & GitHub"]
    }
  },
  {
    id: "proj-6",
    title: "Andi-Preview",
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
    title: "qr-generator",
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
    title: "winsnip",
    description: "Website profil perusahaan dan portal blog modern PT. Winsnip Network Tech terintegrasi dengan headless CMS Sanity.io.",
    longDescription: "Winsnip adalah website company profile korporat modern untuk PT. Winsnip Network Tech. Didesain menggunakan nuansa gelap futuristik dengan aksen neon kuning (#ccff00), website ini terintegrasi penuh dengan headless CMS Sanity.io untuk manajemen artikel blog dan showcase portofolio secara dinamis, lengkap dengan studio editor mandiri.",
    image: "/projects/winsnip.webp",
    category: "Web App",
    tags: ["Next.js", "Tailwind CSS", "Sanity.io", "Framer Motion", "shadcn/ui"],
    githubLink: "https://github.com/arzyadwan/winsip",
    liveLink: "https://winsip.vercel.app",
    features: [
      "Headless CMS Integration: Manajemen data artikel, portofolio, dan layanan secara dinamis dari cloud Sanity.io.",
      "Built-in Studio Dashboard: Mengedit dan merilis konten secara instan melalui rute /studio yang terintegrasi di web.",
      "Sleek Dark Mode Aesthetic: Antarmuka modern dengan gaya industrial minimalis dan aksen kuning neon.",
      "Framer Motion Transitions: Animasi scroll, hover, dan layout-aware transitions untuk pengalaman interaktif."
    ],
    fullTechStack: {
      frontend: ["Next.js 15 (App Router)", "React 19", "Tailwind CSS 4", "Framer Motion", "shadcn/ui", "Lucide Icons"],
      backend: ["Sanity.io Headless CMS v3 API"],
      tools: ["Vercel", "Git & GitHub"]
    }
  }
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
