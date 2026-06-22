import { Wrench, ArrowRight } from "lucide-react";
import { Button } from "./Button";

const services = [
  "Uppdatera innehåll och texter",
  "Förbättra design och användarupplevelse",
  "Öka prestanda och laddningstid",
  "Lägga till nya funktioner",
  "Fixa buggar och tekniska problem",
  "Löpande underhåll och support",
];

export default function ExistingWebsite() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="rounded-3xl bg-[#F7F2EA] border border-[rgba(47,93,80,0.12)] p-8 md:p-12">

        <div className="flex items-center gap-3">
          <div className=" flex items-center justify-center">
            <Wrench className="w-5 h-5 text-[#2F5D50]" />
          </div>

          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#2F5D50]">
            Har du redan en webbplats?
          </h2>
        </div>

        <p className="mt-5 max-w-3xl text-base md:text-lg text-[#3A3A3A] leading-relaxed">
          Du behöver inte börja om från början. Jag hjälper även företag,
          föreningar och organisationer att förbättra, modernisera och
          vidareutveckla befintliga webbplatser – oavsett vem som byggde dem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 mt-8">
          {services.map((service) => (
            <div key={service} className="flex items-start gap-3">
              <span className="mt-1 text-[#2F5D50]">✓</span>
              <span className="text-[#3A3A3A]">{service}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-[#2F5D50] font-medium max-w-xl">
            Ibland räcker några mindre förbättringar för att ge din webbplats
            ett lyft.
          </p>

          <Button href="#cta">
            Berätta om din webbplats
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}