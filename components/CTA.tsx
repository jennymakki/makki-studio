export default function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-transparent p-10">
        
        <h2 className="text-3xl md:text-4xl font-semibold">
          Har du ett projekt i åtanke?
        </h2>

        <p className="text-gray-400 mt-4 max-w-xl">
          Jag hjälper företag att gå från idé till färdig produkt snabbt och snyggt.
        </p>

        <a
          href="mailto:hello@makki.studio"
          className="inline-block mt-8 bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-xl font-medium"
        >
          Kontakta Makki Studio
        </a>
      </div>
    </section>
  );
}