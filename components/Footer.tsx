
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Makki Studio logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />

              <div className="leading-none">
                <div className="text-lg font-semibold tracking-tight text-[#35695A]">
                  MAKKI
                </div>
                <div className="tracking-widest text-[#35695A]">
                  STUDIO
                </div>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-foreground">
              Webbutveckling och design för företag som vill växa med tydlighet,
              struktur och användarvänlighet.
            </p>
          </div>

          <div className="space-y-2 text-sm text-foreground">
            <p className="font-medium text-heading">Kontakt</p>

            <p>Uppsala, Sverige</p>
            <a
              href="mailto:makkistudio@hotmail.com"
              className="block transition-colors hover:text-brand"
            >
              makkistudio@hotmail.com
            </a>

            <a
              href="https://github.com/jennymakki"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-colors hover:text-brand"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jenny-makki-197614210/"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-colors hover:text-brand"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-10 flex justify-between border-t border-[#35695A] pt-6 text-xs text-muted">
          <p>© {new Date().getFullYear()} Makki Studio</p>
          <p>Byggt av Jenny Makki</p>
        </div>
      </div>
    </footer>
  );
}
