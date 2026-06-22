import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import HeroServices from "@/components/HeroServices";
import Packages from "@/components/Packages";
import Process from "@/components/Process";
import ExistingWebsite from "@/components/ExistingWebsite";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F3EDE3]">
        <Navbar />
        <HeroServices />
        <Packages />
        <ExistingWebsite />
        <Process />
        <CTA />
        <Footer/>
    </main>
  );
}