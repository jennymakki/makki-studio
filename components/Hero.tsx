"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./Button";
import Flower from "@/components/Flower";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{ backgroundColor: "#F3EDE3" }}
    >
      <div className="mx-auto max-w-4xl w-full px-6 md:px-12 pt-30 md:py-20 md:pb-0 md:pt-36 text-center">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight text-[#2F5D50]">
          Jag bygger webbplatser som företag kan växa med.
        </h1>

        <p className="mt-6 text-base md:text-xl text-[#3A3A3A] leading-relaxed">
          Från första idé till färdig lansering hjälper jag dig genom hela
          processen. Du får en professionell och modern webbplats, personlig kontakt och en
          lösning som är enkel att använda och utveckla vidare.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button href="#projects">
            Se projekt <ArrowRight size={18} />
          </Button>

          <Button href="#cta" variant="secondary">
            Kontakta mig
          </Button>
        </div>
        <div className="py-10">
          <Flower />
        </div>
      </div>
    </section>
  );
}
