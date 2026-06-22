import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";
import Reasons from "@/components/Reasons";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function WelcomePage() {
  return (
    <main className="bg-[#F3EDE3] min-h-screen">
      <Navbar />
      <section className="max-w-5xl mx-auto px-6 pt-34 pb-25 text-center">
        <h1 className="mt-8 text-4xl md:text-6xl font-light tracking-tight text-[#2F5D50] leading-tight">
          Tack för att du
          <br />
          skannade mitt visitkort.
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg leading-relaxed text-[#3A3A3A]">
          Jag heter <strong>Jenny</strong> och driver{" "}
          <strong>Makki Studio</strong>. Jag hjälper företag att skapa moderna,
          användarvänliga webbplatser – från första idé till färdig lansering.
          Har du redan en webbplats hjälper jag gärna till att förbättra,
          modernisera eller bygga vidare på det som redan finns.
        </p>
      </section>

      <About />

      <Testimonial />

      <Reasons />

      <CTA />

      <Footer />
    </main>
  );
}
