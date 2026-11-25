
const services = [
  {
    title: "Webbplatser",
    desc: "Design och utveckling av moderna webbplatser med tydlig struktur, genomtänkt UX och ett uttryck som passar ditt företag.",
  },
  {
    title: "Webbappar",
    desc: "Skräddarsydda digitala lösningar med exempelvis inloggning, databaser och funktioner anpassade efter din verksamhet.",
  },
  {
    title: "Vidareutveckling",
    desc: "Förbättring och vidareutveckling av befintliga webbplatser – från design och prestanda till nya funktioner.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-6xl px-6 py-24 md:px-12 md:py-32"
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl font-medium tracking-tight text-heading md:text-4xl">
          Vad kan jag hjälpa dig med?
        </h2>

        <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
          Oavsett om du behöver en ny webbplats, en skräddarsydd digital lösning
          eller vill förbättra något du redan har, hjälper jag dig att hitta en
          lösning som passar ditt företag.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
        {services.map((service) => {

          return (
            <article
              key={service.title}
              className="rounded-xl border border-[#35695A] p-7 transition-colors duration-200 hover:border-brand/30 md:p-8"
            >

              <h3 className="text-lg font-semibold tracking-tight text-heading">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                {service.desc}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
