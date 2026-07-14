import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-deep text-text-primary">
      {/* Floating Theme Toggle (Top Right) */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area (offset by sidebar width on desktop) */}
      <main className="flex-1 lg:pl-[280px] min-h-screen flex flex-col bg-gradient-to-b from-deep via-dark-base to-deep">
        <Hero />
        
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
