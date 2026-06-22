export const faqHome = [
  {
    q: "Vad kostar en hemsida?",
    a: "En enklare hemsida börjar från 7 900 kr. Priset beror på omfattning och behov, och du får alltid en fast offert innan projektet startar.",
  },
  {
    q: "Hur går det till att jobba med dig?",
    a: "Vi börjar med ett samtal där vi går igenom dina mål. Sedan får du en tydlig plan, och jag sköter design och utveckling steg för steg med feedback från dig.",
  },
  {
    q: "Måste jag ha allt innehåll klart innan vi börjar?",
    a: "Nej. Du behöver inte ha färdiga texter eller bilder. Jag hjälper dig att strukturera och forma innehållet under processen.",
  },
  {
    q: "Kan du hjälpa mig om jag redan har en hemsida?",
    a: "Ja, jag jobbar både med nya hemsidor och förbättring av befintliga webbplatser – både design, prestanda och funktioner.",
  },
];

export default function FAQHome() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#2F5D50]">
          Vanliga frågor
        </h2>

        <p className="mt-4 text-base md:text-lg text-[#3A3A3A] leading-relaxed">
          Här är några vanliga frågor från företag som vill bygga eller förbättra sin webbplats.
        </p>
      </div>

      <div className="mt-10 max-w-3xl space-y-6">
        {faqHome.map((item) => (
          <div
            key={item.q}
            className="border-b border-[rgba(47,93,80,0.12)] pb-6"
          >
            <h3 className="text-lg font-medium text-[#2F5D50]">
              {item.q}
            </h3>

            <p className="mt-2 text-[#3A3A3A] leading-relaxed">
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}