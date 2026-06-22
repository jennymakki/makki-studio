import Hero from "@/components/Hero";
import Reasons from "@/components/Reasons";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import About from "@/components/About";
import Flower from "@/components/Flower";
import Testimonial from "@/components/Testimonial";
import FAQHome from "@/components/FaqHome";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3EDE3]">
      <Navbar />
      <Hero />
      <Testimonial />
      <Reasons />
      <Projects />
      <Flower />
      <Services />
      <Process />
      <FAQHome />
      <CTA />
      <About />
      <Footer />
    </main>
  );
}
