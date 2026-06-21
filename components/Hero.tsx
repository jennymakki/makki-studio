"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{ backgroundColor: "#F3EDE3" }}
    >
      <div className="mx-auto max-w-6xl w-full px-6 md:px-12 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="flex flex-col">
          <h1 className="order-1 text-5xl md:text-5xl font-light tracking-tight leading-tight text-[#2F5D50]">
            Moderna webbplatser <br />
            för företag som vill växa.
          </h1>

          <p className="order-3 mt-5 md:mt-6 max-w-xl text-base md:text-lg text-[#3A3A3A] leading-relaxed">
            Jag heter Jenny och är fullstackutvecklare med bakgrund inom
            undervisning. Jag hjälper företag, föreningar och små organisationer
            att gå från idé till fungerande webbplats — med fokus på tydlighet,
            användbarhet och förtroende.
          </p>

          <div className="order-4 mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button href="#projects">
              Se projekt <ArrowRight size={18} />
            </Button>

            <Button href="#cta" variant="secondary">
              Kontakta mig
            </Button>
          </div>
        </div>

        <div className="lg:col-start-2">
          <div className="w-full max-w-xl lg:max-w-lg mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-lg border border-[rgba(47,93,80,0.15)]">
            <Image
              src="/hero.png"
              alt="Makki Studio workspace"
              width={900}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
