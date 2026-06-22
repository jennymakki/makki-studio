import { Leaf, Rocket, Sparkles } from "lucide-react";

const packages = [
  {
    title: "Start",
    price: "Från 7 900 kr",
    desc: "En professionell hemsida när du vill komma igång snabbt & smidigt.",
    features: [
      "1–3 sidor",
      "Modern och stilren design",
      "Mobilanpassning",
      "Kontaktformulär",
      "Grundläggande sökmotoroptimering (SEO)",
      "Publicering av sidan",
      "Två korrekturrundor",
    ],
    highlight: "Perfekt för mindre företag som vill ha en stark digital närvaro.",
    icon: Leaf,
  },
  {
    title: "Business",
    price: "Från 14 900 kr",
    desc: "För företag som vill ta sin hemsida till nästa nivå och nå fler kunder.",
    features: [
      "Allt i Start",
      "Fler undersidor",
      "Skräddarsydd design",
      "Blogg eller nyhetssektion",
      "Fler formulär / funktioner",
      "Struktur- och innehållsstöd",
      "Prioriterad support vid lansering",
    ],
    highlight: "Passar företag som vill växa och synas tydligare online.",
    icon: Rocket,
  },
  {
    title: "Premium",
    price: "Offert",
    desc: "För företag med behov av mer avancerade digitala lösningar.",
    features: [
        "Allt i Start och Business",
      "Webbshop / e-handel",
      "Bokningssystem",
      "Inloggning / medlemsfunktioner",
      "Databashanterade system",
      "Integrationer (betalning, CRM, bokning etc.)",
      "Skräddarsydda funktioner",
    ],
    highlight: "En komplett digital lösning anpassad efter din verksamhet.",
    icon: Sparkles,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="mx-auto max-w-5xl px-6 pt-20 pb-5">
      <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#2F5D50]">
        Paket
      </h2>

      <p className="mt-4 max-w-2xl text-base md:text-lg text-[#3A3A3A] leading-relaxed">
        Välj ett paket som passar ditt företag och dina mål. Alla lösningar är
        designade med fokus på enkelhet, prestanda och långsiktighet.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 items-stretch">
        {packages.map((pkg) => {
          const Icon = pkg.icon;

          return (
            <div
              key={pkg.title}
              className="h-full p-6 rounded-2xl bg-[#F7F2EA] border border-[rgba(47,93,80,0.12)] shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-3 mb-3">
                  <Icon className="w-5 h-5 text-[#2F5D50]" />
                  <h3 className="text-xl font-medium text-[#2F5D50]">
                    {pkg.title}
                  </h3>
                </div>

                <p className="text-xl font-light text-[#2F5D50]">
                  {pkg.price}
                </p>

                <p className="mt-3 text-[#3A3A3A] leading-relaxed">
                  {pkg.desc}
                </p>

                <ul className="mt-4 space-y-2 text-base text-[#3A3A3A]">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex  gap-2">
                      <span className="text-[#2F5D50]">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm text-[#2F5D50] font-medium">
                {pkg.highlight}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}