const services = [
  {
    title: "Webbutveckling",
    desc: "Snabba och moderna webbappar med Next.js.",
  },
  {
    title: "Vidareutveckling",
    desc: "Förbättrar och bygger vidare på befintliga system.",
  },
  {
    title: "Prestanda & SEO",
    desc: "Gör sajter snabbare och mer synliga på Google.",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20"
    id="services">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Tjänster
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {services.map((s) => (
          <div
            key={s.title}
            className="p-6 rounded-2xl border border-white/10 bg-white/5"
          >
            <h3 className="font-medium">{s.title}</h3>
            <p className="text-gray-400 mt-2 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}