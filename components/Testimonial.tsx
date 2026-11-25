
import { Star } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="bg-background px-6 pb-28 pt-12 md:pb-36">
      <div className="mx-auto max-w-2xl text-center">

        {/* Rating */}
        <div
          className="mb-8 flex justify-center gap-1 text-[#C49A45]"
          aria-label="5 av 5 stjärnor"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={17}
              fill="currentColor"
              strokeWidth={0}
            />
          ))}
        </div>

        {/* Testimonial */}
        <blockquote>
          <p className="text-lg leading-relaxed text-heading md:text-xl md:leading-relaxed">
            ”Jenny är otroligt enkel att samarbeta med. Hon är lyhörd,
            lösningsorienterad och flexibel, och möter alltid utmaningar
            med en positiv energi.”
          </p>
        </blockquote>

        {/* Attribution */}
        <div className="mt-8">
          <p className="text-sm font-semibold text-heading">
            Sarah Hellström
          </p>

          <p className="mt-1 text-sm text-muted">
            <a
              href="https://layrprotection.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-brand"
            >
              LAYR
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
