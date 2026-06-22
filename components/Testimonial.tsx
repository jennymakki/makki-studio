import { Star } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="pb-30 px-6">
      <div className="max-w-xl mx-auto text-center">
        <div className="flex justify-center gap-1 text-[#D4A017] mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              fill="currentColor"
              className="stroke-none"
            />
          ))}
        </div>
        <p className="mt-6 text-xl md:text-xl leading-relaxed font-light text-[#3A3A3A] italic">
          Jenny är otroligt enkel att samarbeta med. Hon är lyhörd,
          lösningsorienterad och flexibel, och möter alltid utmaningar med en
          positiv energi.
        </p>

<div className="mt-6">
  <p className="font-medium text-[#2F5D50]">
    Sarah Hellström på{" "}
    <a
      href="https://layrprotection.com"
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-4 hover:text-[#3F7A69] transition-colors"
    >
      LAYR
    </a>
  </p>
</div>
      </div>
    </section>
  );
}
