import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "./Button";

const plans = [
  {
    title: "Support",
    price: "990 kr / mån",
    features: [
      "Tekniska uppdateringar",
      "Säkerhetskontroller",
      "Backup av webbplatsen",
      "Mindre innehållsuppdateringar",
      "Prestandaoptimering",
      "SEO-kontroller",
      "Månadsrapport",

    ],
  },
  {
    title: "Support Premium",
    price: "Offert",
    features: [
      "Allt i Support",
      "Löpande vidareutveckling",
      "Nya funktioner",
      "Teknisk rådgivning",
      "Prioriterad responstid",
      "Anpassat upplägg",
      "Upp till 2 timmar utveckling / månad",
    ],
  },
];

export default function SupportPlans() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="text-center max-w-3xl mx-auto">
        <div className="flex justify-center mb-4">
          <ShieldCheck className="w-7 h-7 text-[#2F5D50]" />
        </div>

        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#2F5D50]">
          Löpande support & underhåll
        </h2>

        <p className="mt-4 text-base md:text-lg text-[#3A3A3A] leading-relaxed">
          En webbplats behöver tas om hand även efter lanseringen. Med ett
          supportavtal ser jag till att din webbplats hålls säker, snabb och
          uppdaterad – samtidigt som du har någon att vända dig till när du
          behöver hjälp.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="rounded-2xl border border-[rgba(47,93,80,0.12)] bg-[#F7F2EA] p-6 flex flex-col"
          >
            <h3 className="text-xl font-medium text-[#2F5D50]">{plan.title}</h3>

            <p className="mt-2 text-xl font-light text-[#2F5D50]">
              {plan.price}
            </p>

            <ul className="mt-6 space-y-3 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#2F5D50] shrink-0" />
                  <span className="text-[#3A3A3A]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-[#F7F2EA] border border-[rgba(47,93,80,0.12)] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-medium text-[#2F5D50]">
            Behöver du bara hjälp ibland?
          </h3>

          <p className="mt-2 text-[#3A3A3A] leading-relaxed max-w-2xl">
            Inget problem. Jag erbjuder även support och utveckling på timbasis
            för mindre ändringar, felsökning och förbättringar utan att du
            behöver teckna ett avtal.
          </p>
        </div>

        <Button href="#cta">Kontakta mig</Button>
      </div>
    </section>
  );
}
