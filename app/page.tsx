import Navbar from "@/components/Navbar";
import Presence from "@/components/Presence";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Presence />
      <main className="flex-1">
        <Hero />
        <div className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5ea4ff]/40 to-transparent" />
          <About />
        </div>
        <div className="relative bg-[#0a0d13]/60">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5ea4ff]/40 to-transparent" />
          <Projects />
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5ea4ff]/40 to-transparent" />
          <Skills />
        </div>
        <div className="relative bg-[#0a0d13]/60">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#5ea4ff]/40 to-transparent" />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
