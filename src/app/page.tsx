import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-950 text-slate-100">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area (offset by sidebar width on desktop) */}
      <main className="flex-1 lg:pl-[280px] min-h-screen flex flex-col bg-gradient-to-b from-bg-deep via-bg-base to-bg-deep">
        <Hero />
        
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-8 lg:px-12">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </main>
    </div>
  );
}
