
"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "./Button";

export default function Hero() {
  return (
    <section className="flex min-h-[85vh] items-center bg-background overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 py-28 md:px-12">

        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">

          {/* Text */}
          <div className="max-w-xl">

            <h1 className="text-4xl font-medium leading-[1.15] tracking-tight text-heading md:text-5xl lg:text-6xl">
              Webbdesign och webbutveckling för företag.
            </h1>

            <p className="mt-7 max-w-md text-base leading-relaxed text-muted md:text-lg">
              Jag hjälper företag att skapa moderna webbplatser
              med genomtänkt design, bra användarupplevelse och
              teknik som fungerar.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="#projects">
                Se mina projekt
                <ArrowRight size={16} />
              </Button>

              <Button href="#cta" variant="secondary">
                Kontakta mig
              </Button>
            </div>

          </div>

          {/* Project mockup */}
          <div className="flex items-center justify-center md:justify-end">
            <Image
              src="/mockups/abrielle.svg"
              width={650}
              height={700}
              alt="Abrielle website design"
              className="w-full max-w-xl"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
