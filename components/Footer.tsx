import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(47,93,80,0.12)] bg-[#F7F2EA]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
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
                <div className=" text-[#5A7A6E] tracking-widest">STUDIO</div>
              </div>
            </div>

            <p className="text-sm text-[#3A3A3A] max-w-sm leading-relaxed">
              Webbutveckling och design för företag som vill växa med tydlighet,
              struktur och användarvänlighet.
            </p>
          </div>

          <div className="text-sm text-[#3A3A3A] space-y-2">
            <p className="font-medium text-[#2F5D50]">Kontakt</p>

            <p>Uppsala, Sverige</p>
            <a
              href="mailto:jjennyeklundd@hotmail.com"
              className="block hover:underline"
            >
              makkistudio@hotmail.com
            </a>

            <a
              href="https://github.com/jennymakki"
              target="_blank"
              className="block hover:underline"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jenny-makki-197614210/"
              target="_blank"
              className="block hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[rgba(47,93,80,0.1)] flex justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Makki Studio</p>
          <p>Byggt av Jenny Makki</p>
        </div>
      </div>
    </footer>
  );
}
