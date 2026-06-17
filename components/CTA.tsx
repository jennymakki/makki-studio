export default function CTA() {
  return (
    <section id="cta" className="mx-auto max-w-6xl px-6 py-24">
      
      <div className="rounded-3xl bg-[#F7F2EA] border border-[rgba(47,93,80,0.12)] p-10 md:p-16 text-center shadow-sm">
        
        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#2F5D50]">
          Har du ett projekt i åtanke?
        </h2>

        <p className="mt-4 max-w-xl mx-auto text-base md:text-lg text-[#3A3A3A] leading-relaxed">
          Jag hjälper företag och organisationer att gå från idé till färdig
          digital lösning — med fokus på tydlighet, användbarhet och design som håller över tid.
        </p>

        <a
          href="mailto:jjennyeklundd@hotmail.com"
          className="inline-block mt-8 bg-[#2F5D50] hover:bg-[#244A3F] transition text-white px-6 py-3 rounded-xl font-medium"
        >
          Kontakta mig
        </a>

      </div>
    </section>
  );
}