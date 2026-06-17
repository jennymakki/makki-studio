"use client";

import { ArrowRight } from "lucide-react";
import { ButtonPrimary, ButtonSecondary } from "./Button";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{ backgroundColor: "#F3EDE3" }}
    >
      <div className="w-full px-6 md:px-12 py-20 md:py-32 relative">

        <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">
          Moderna webbplatser <br />
          för företag som vill växa.
        </h1>

        <p className="mt-5 md:mt-6 max-w-xl text-base md:text-lg text-[#3A3A3A] leading-relaxed">
          Jag bygger snabba, skalbara och snygga webbplatser med Next.js,
          Tailwind och TypeScript för startups och småföretag.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <ButtonPrimary href="#projects">
            Se projekt <ArrowRight size={18} />
          </ButtonPrimary>

          <ButtonSecondary href="#cta">Kontakta mig</ButtonSecondary>
        </div>

        <div
          className="mt-14 md:mt-16 h-px w-full"
          style={{ backgroundColor: "rgba(47,93,80,0.15)" }}
        />
      </div>
    </section>
  );
}
