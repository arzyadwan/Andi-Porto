import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Andi Arzatwan | Frontend Engineer & UI Designer Portfolio",
  description: "Portofolio profesional Andi Arzatwan, seorang Frontend Engineer & UI Designer yang berspesialisasi dalam membangun aplikasi web modern, estetik, dan responsif menggunakan Next.js, TypeScript, dan Tailwind CSS.",
  authors: [{ name: "Andi Arzatwan" }],
  keywords: ["Andi Arzatwan", "Frontend Engineer", "UI/UX Designer", "Next.js", "React Portfolio", "TypeScript Web Developer", "Indonesia Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="bg-deep text-text-primary min-h-screen font-sans">
        {children}
      </body>
    </html>
  );
}
