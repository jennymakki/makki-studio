import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3EDE3]">
      <Navbar/>
      <Hero />
      <Projects />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}