"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ButtonPrimary, ButtonGhost } from "@/components/Button";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#2F5D50]/10 bg-[#F3EDE3]/80 backdrop-blur-md">

      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Makki Studio logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />

          <div className="leading-none">
            <div className="text-[#2F5D50] font-semibold tracking-tight">
              MAKKI
            </div>
            <div className="text-xs text-[#7A9B8E] tracking-widest">
              STUDIO
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-2">
          <ButtonGhost href="#projects">Projekt</ButtonGhost>
          <ButtonGhost href="#services">Tjänster</ButtonGhost>
          <ButtonGhost href="#cta">Kontakt</ButtonGhost>
        </nav>

        <div className="hidden md:block">
          <ButtonPrimary href="#cta">
            Boka möte <ArrowRight size={16} />
          </ButtonPrimary>
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

              <a
                href="#projects"
                onClick={() => setOpen(false)}
                className="px-5 py-4 text-[#3A3A3A] hover:bg-[#2F5D50]/5 hover:text-[#2F5D50] transition"
              >
                Projekt
              </a>

              <a
                href="#services"
                onClick={() => setOpen(false)}
                className="px-5 py-4 text-[#3A3A3A] hover:bg-[#2F5D50]/5 hover:text-[#2F5D50] transition border-t border-[#2F5D50]/5"
              >
                Tjänster
              </a>

              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="px-5 py-4 text-[#3A3A3A] hover:bg-[#2F5D50]/5 hover:text-[#2F5D50] transition border-t border-[#2F5D50]/5"
              >
                Kontakt
              </a>

              <div className="p-4 border-t border-[#2F5D50]/10">
                <a
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium transition-colors"
                  style={{
                    backgroundColor: "#2F5D50",
                    color: "#F3EDE3",
                  }}
                >
                  Boka möte <ArrowRight size={16} />
                </a>
              </div>

            </div>
          </div>
        </div>
      )}

    </header>
  );
}