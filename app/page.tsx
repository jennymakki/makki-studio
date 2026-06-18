import Hero from "@/components/Hero";
import Reasons from "@/components/Reasons";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import About from "@/components/About";
import Quote1 from "@/components/Quote1";
import Quote2 from "@/components/Quote2";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3EDE3]">
      <Navbar />
      <Hero />
      <Quote1 />
      <Reasons />
      <Projects />
      <Quote2 />
      <Services />
      <Process />
      <CTA />
      <About />
      <Footer />
    </main>
  );
}
