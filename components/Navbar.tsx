
"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function toSection(id: string) {
    return pathname === "/" ? `#${id}` : `/#${id}`;
  }

  const navItems = [
    { label: "Projekt", href: toSection("projects") },
    { label: "Kontakt", href: toSection("cta") },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">

        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Makki Studio – startsida"
        >
          <Image
            src="/logo.png"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />

          <div className="leading-none">
            <div className="text-lg font-semibold tracking-[0.08em] text-[#35695A]">
              MAKKI
            </div>
            <div className="mt-1 text-[12px] font-medium tracking-[0.28em] text-[#35695A]">
              STUDIO
            </div>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground transition-colors duration-200 hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href={toSection("cta")}>
            Boka möte
            <ArrowRight size={16} />
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center text-brand md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <span
            className={`absolute h-[1.5px] w-6 bg-current transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />

          <span
            className={`absolute h-[1.5px] w-6 bg-current transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`absolute h-[1.5px] w-6 bg-current transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="bg-background/95 px-6 pb-6 pt-3 backdrop-blur-xl">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-sm font-medium text-heading transition-colors hover:text-brand"
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-5">
              <Button
                href={toSection("cta")}
                className="w-full justify-center"
                onClick={() => setOpen(false)}
              >
                Boka möte
                <ArrowRight size={16} />
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
