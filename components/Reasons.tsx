import { HeartHandshake, Layers3, Sparkles } from "lucide-react";

const reasons = [
  {
    title: "Personligt",
    desc: "Du har direktkontakt med mig genom hela projektet.",
    icon: HeartHandshake,
  },
  {
    title: "Design + utveckling",
    desc: "Jag tar projektet från idé och UX till färdig webbplats.",
    icon: Sparkles,
  },
  {
    title: "Byggt för att hålla",
    desc: "Jag bygger lösningar som är enkla att använda, underhålla och vidareutveckla.",
    icon: Layers3,
  },
];

export default function Reasons() {
  return (
    <section id="reasons" className="mx-auto max-w-5xl px-6 pb-20">
      <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#2F5D50]">
        Design, teknik och personlig kontakt.
      </h2>

      <p className="mt-4 max-w-2xl text-base md:text-lg text-[#3A3A3A] leading-relaxed">
        Jag kombinerar design och utveckling för att skapa webbplatser som är
        genomtänkta från första skiss till färdig lösning.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {reasons.map((reason) => {
          const Icon = reason.icon;

          return (
            <div
              key={reason.title}
              className="p-6 rounded-2xl bg-[#F7F2EA] border border-[rgba(47,93,80,0.12)] shadow-sm hover:shadow-md transition text-center"
            >
              <Icon className="w-5 h-5 text-[#2F5D50] mb-4 mx-auto" />

              <h3 className="text-lg font-medium text-[#2F5D50]">
                {reason.title}
              </h3>

              <p className="mt-3 text-[#3A3A3A] leading-relaxed">
                {reason.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}