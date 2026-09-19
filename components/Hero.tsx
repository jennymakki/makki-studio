"use client";

import Image from "next/image";
import { Button } from "./Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl w-full px-6 md:px-12 md:py-20 py-40">
        <div className="grid md:grid-cols-2 gap-15 lg:gap-0 items-center">
          
          <div>

            <h1 className="max-w-xl text-3xl md:text-4xl font-light tracking-tight leading-[1.25] text-[#2F5D50]">
              Webbdesign och webbutveckling
              <br />
              för företag.
            </h1>

            <p className="mt-6 max-w-lg text-base md:text-lg leading-relaxed text-[#5A5A5A]">
              Jag designar och utvecklar moderna webbplatser och digitala
              lösningar – från idé och användarupplevelse till färdig
              webbplats.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#projects">Se projekt</Button>

              <Button href="#cta" variant="secondary">
                Berätta om ditt projekt
              </Button>
            </div>
          </div>

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