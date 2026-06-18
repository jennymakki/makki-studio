import { Leaf, HeartHandshake, WandSparkles } from "lucide-react";

const reasons = [
  {
    title: "Personligt samarbete",
    desc: "Du har en kontaktperson genom hela projektet – mig.",
    icon: Leaf,
  },
  {
    title: "Modern teknik",
    desc: "Byggt med Next.js, TypeScript och fokus på prestanda.",
    icon: WandSparkles,
  },
  {
    title: "Långsiktigt",
    desc: "Jag finns kvar även när webbplatsen är lanserad.",
    icon: HeartHandshake,
  },
];

export default function Reasons() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 pt-5 pb-20 ">
      <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#2F5D50]">
        Varför Makki Studio?
      </h2>
      <p className="mt-4 max-w-2xl text-base md:text-lg text-[#3A3A3A] leading-relaxed">
        Att bygga en hemsida handlar inte bara om teknik. Den ska spegla ditt
        företag, skapa förtroende och vara enkel att använda – både för dig och
        dina besökare. Jag arbetar nära dig genom hela processen, från första
        idé till lansering, och bygger lösningar som är moderna, hållbara och
        enkla att vidareutveckla.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {reasons.map((reasons) => {
          const Icon = reasons.icon;

          return (
            <div
              key={reasons.title}
              className="p-6 rounded-2xl bg-[#F7F2EA] border border-[rgba(47,93,80,0.12)] shadow-sm hover:shadow-md transition text-center"
            >
              <Icon className="w-5 h-5 text-[#2F5D50] mb-4 mx-auto" />

              <h3 className="text-lg font-medium text-[#2F5D50]">
                {reasons.title}
              </h3>

              <p className="mt-3 text-[#3A3A3A] leading-relaxed">
                {reasons.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
