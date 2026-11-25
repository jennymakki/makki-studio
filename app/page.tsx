import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Testimonial />
      <Projects />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
