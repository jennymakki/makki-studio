export const faqPackages = [
  {
    q: "Vad ingår i priset?",
    a: "Alla paket inkluderar design, utveckling och lansering. Du får även mobilanpassning, grundläggande SEO och möjlighet till feedback under processen.",
  },
  {
    q: "Är det ett fast pris eller kan det ändras?",
    a: "Det är alltid ett fast pris baserat på omfattning. Om något ändras under projektet tar vi alltid en dialog innan något justeras.",
  },
  {
    q: "Hur lång tid tar det att bygga en hemsida?",
    a: "Ett mindre projekt tar ofta 1–2 veckor, medan större lösningar kan ta 3–6 veckor beroende på omfattning och feedbackflöde.",
  },
  {
    q: "Kan jag uppgradera mitt paket senare?",
    a: "Ja. Många börjar med ett enklare paket och bygger vidare över tid. Webbplatserna är gjorda för att kunna utvecklas stegvis.",
  },
  {
    q: "Jobbar du bara med nya hemsidor?",
    a: "Nej, jag jobbar även med vidareutveckling, förbättring av befintliga sidor, prestandaoptimering och nya funktioner.",
  },
  {
    q: "Vilken teknik använder du?",
    a: "Jag bygger främst med React, Next.js, TypeScript och moderna headless-lösningar som ger snabb och skalbar webb.",
  },
  {
    q: "Behöver jag tänka på hosting och drift?",
    a: "Nej, jag hjälper dig med hela processen inklusive publicering och teknisk setup beroende på lösning.",
  },
];

export default function FAQPackages() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#2F5D50]">
          Vanliga frågor om paket & priser
        </h2>

        <p className="mt-4 text-base md:text-lg text-[#3A3A3A] leading-relaxed">
          Här hittar du svar på frågor om priser, process och vad som ingår i mina webbpaket.
        </p>
      </div>

      <div className="mt-12 max-w-3xl grid gap-8">
        {faqPackages.map((item) => (
          <div
            key={item.q}
            className="rounded-2xl bg-[#F7F2EA] border border-[rgba(47,93,80,0.12)] p-6 shadow-sm"
          >
            <h3 className="text-lg font-medium text-[#2F5D50]">
              {item.q}
            </h3>

            <p className="mt-3 text-[#3A3A3A] leading-relaxed">
              {item.a}
            </p>
          </div>
        ))}
      </div>

      </section>
  );
}