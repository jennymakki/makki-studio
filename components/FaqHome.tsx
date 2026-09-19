export const faqHome = [
  {
    q: "Vad kostar ett projekt?",
    a: "Priset beror på projektets omfattning och vad du behöver hjälp med. Efter vårt första samtal får du ett tydligt upplägg och en offert innan vi börjar.",
  },
  {
    q: "Måste jag ha allt innehåll klart innan vi börjar?",
    a: "Nej. Du behöver inte ha färdiga texter eller bilder. Jag hjälper dig att strukturera och forma innehållet under projektet.",
  },
  {
    q: "Kan du hjälpa mig om jag redan har en webbplats?",
    a: "Absolut. Jag hjälper även till med att förbättra design, prestanda och funktioner på befintliga webbplatser.",
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
          Några vanliga frågor om att starta eller vidareutveckla ett
          webbprojekt.
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