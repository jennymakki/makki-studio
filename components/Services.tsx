import { Globe, AppWindow, Palette } from "lucide-react";

const services = [
  {
    title: "Webbplatser",
    desc: "Professionella hemsidor för företag, kreatörer och organisationer.",
    icon: Globe,
  },
  {
    title: "Webbappar",
    desc: "När du behöver inloggning, databaser eller skräddarsydd funktionalitet.",
    icon: AppWindow,
  },
  {
    title: "Design & vidareutveckling",
    desc: "Jag hjälper dig utveckla det du redan har – eller skapa något helt nytt.",
    icon: Palette,
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#2F5D50]">
        Tjänster
      </h2>

      <p className="mt-4 max-w-2xl text-base md:text-lg text-[#3A3A3A] leading-relaxed">
        Oavsett om du behöver en helt ny webbplats eller vill utveckla något som
        redan finns hjälper jag dig att skapa en lösning som är tydlig,
        användarvänlig och byggd för att hålla över tid.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="p-6 rounded-2xl bg-[#F7F2EA] border border-[rgba(47,93,80,0.12)] shadow-sm hover:shadow-md transition text-center"
            >
              <Icon className="w-5 h-5 text-[#2F5D50] mb-4 mx-auto" />

              <h3 className="text-lg font-medium text-[#2F5D50]">
                {service.title}
              </h3>

              <p className="mt-3 text-[#3A3A3A] leading-relaxed">
                {service.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
