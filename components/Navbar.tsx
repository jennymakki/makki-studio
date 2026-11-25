"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/Button";

export default function Navbar() {
  const pathname = usePathname();

  const contactHref = pathname === "/" ? "#cta" : "/#cta";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Makki Studio – startsida"
        >
          <Image
            src="/logo.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />

          <div className="leading-none">
            <div className="text-lg font-semibold tracking-[0.08em] text-brand">
              MAKKI
            </div>
            <div className="mt-1 text-[12px] font-medium tracking-[0.28em] text-muted">
              STUDIO
            </div>
          </div>
        </Link>

        {/* Contact button */}
        <Button href={contactHref}>
          Kontakt
          <ArrowRight size={16} />
        </Button>
      </div>
    </header>
  );
}
