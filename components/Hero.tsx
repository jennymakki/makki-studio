"use client";

import Image from "next/image";
import { Button } from "./Button";

const tags = [
  "React",
  "Squarespace",
  "Shopify",
  "WordPress",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl w-full px-6 md:px-12 py-20">

        <div className="grid md:grid-cols-2 gap-15 mt-10 lg:gap-0 items-center">

          <div>
            <div className="flex flex-wrap gap-3 mb-10">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-[#2F5D50]/4 px-2 py-2 text-xs text-[#2F5D50]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="max-w-xl text-3xl md:text-4xl font-light tracking-tight leading-[1.25] text-[#2F5D50]">
              Jag designar och utvecklar webbplatser som känns lika unika som företagen bakom dem.
            </h1>

            <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-[#5A5A5A]">
              Din webbplats är ofta det första intrycket av ditt företag.
              Jag skapar moderna webbplatser som speglar ditt varumärke,
              inger förtroende och hjälper dina besökare att hitta rätt.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#projects">
                Se projekt
              </Button>

              <Button href="#cta" variant="secondary">
                Kontakta mig
              </Button>
            </div>
          </div>


          {/* Mockup */}
          <div className="flex justify-center items-center">
            <Image
              src="/mockups/abrielle.svg"
              width={650}
              height={700}
              alt="Abrielle website design"
              className="w-full max-w-lg drop-shadow-xl"
              priority
            />
          </div>

        </div>

      </div>
    </section>
  );
}