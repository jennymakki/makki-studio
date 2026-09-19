import { ArrowDown } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Vi pratar om ditt projekt",
    desc: "Vi börjar med ett samtal där vi går igenom vad du behöver, dina mål och dina idéer.",
  },
  {
    number: "2",
    title: "Förslag & plan",
    desc: "Du får ett tydligt upplägg och en offert anpassad efter projektets omfattning.",
  },
  {
    number: "3",
    title: "Design & utveckling",
    desc: "Jag arbetar med projektet steg för steg och du får möjlighet att ge feedback längs vägen.",
  },
  {
    number: "4",
    title: "Lansering",
    desc: "När allt är klart publicerar vi lösningen och ser till att allt fungerar som det ska.",
  },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#2F5D50]">
        Så går det till
      </h2>

      <p className="mt-4 max-w-2xl text-base md:text-lg text-[#3A3A3A] leading-relaxed">
        Jag vill att det ska kännas enkelt att anlita mig. Därför vet du alltid
        vad som händer härnäst – från första samtalet till färdig lösning.
      </p>

      <div className="mt-12 max-w-3xl space-y-4">
        {steps.map((step, index) => (
          <div key={step.number}>
            <div className="rounded-2xl border border-[rgba(47,93,80,0.12)] bg-[#F7F2EA] p-6 shadow-sm">
              <div className="flex items-start gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2F5D50] text-white font-medium">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-lg font-medium text-[#2F5D50]">
                    {step.title}
                  </h3>

                  <p className="mt-2 leading-relaxed text-[#3A3A3A]">
                    {step.desc}
                  </p>
                </div>
              </div>
            </div>

            {index < steps.length - 1 && (
              <div className="flex justify-center py-3">
                <ArrowDown className="h-5 w-5 text-[#2F5D50]/50" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}