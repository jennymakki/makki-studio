"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/Button";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  function toSection(id: string) {
    return pathname === "/" ? `#${id}` : `/#${id}`;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#2F5D50]/10 bg-[#F3EDE3]/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Makki Studio logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />

          <div className="leading-none">
            <div className="text-[#2F5D50] text-lg font-semibold tracking-tight">
              MAKKI
            </div>
            <div className="text-[#5A7A6E] tracking-widest">STUDIO</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          <Button variant="ghost" href={toSection("projects")}>
            Projekt
          </Button>

          <Button variant="ghost" href="/services">
            Paket & priser
          </Button>

          <Button variant="ghost" href={toSection("cta")}>
            Kontakt
          </Button>

          <Button variant="ghost" href={toSection("about")}>
            Om mig
          </Button>
        </nav>

        <div className="hidden md:block">
          <Button href={toSection("cta")}>
            Boka möte <ArrowRight size={16} />
          </Button>
        </div>

        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>

          <span
            className={`absolute h-[2px] w-6 bg-[#2F5D50] transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />

          <span
            className={`absolute h-[2px] w-6 bg-[#2F5D50] transition-all duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`absolute h-[2px] w-6 bg-[#2F5D50] transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="mt-3 rounded-2xl border border-[#2F5D50]/10 bg-[#F3EDE3]/95 backdrop-blur-xl shadow-xl overflow-hidden">
            <div className="flex flex-col">
              <Button
                variant="ghost"
                href={toSection("projects")}
                className="justify-start px-5 py-4 border-t border-[#2F5D50]/5"
              >
                Projekt
              </Button>

              <Button
                variant="ghost"
                href="/services"
                className="justify-start px-5 py-4 border-t border-[#2F5D50]/5"
              >
                Paket & priser
              </Button>

              <Button
                variant="ghost"
                href={toSection("cta")}
                className="justify-start px-5 py-4 border-t border-[#2F5D50]/5"
              >
                Kontakt
              </Button>

              <Button
                variant="ghost"
                href={toSection("about")}
                className="justify-start px-5 py-4 border-t border-[#2F5D50]/5"
              >
                Om mig
              </Button>

              <div className="p-4 border-t border-[#2F5D50]/10">
                <Button href="#cta" className="w-full">
                  Boka möte <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
