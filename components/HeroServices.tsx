import Flower from "@/components/Flower";

export default function HeroServices() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-40 md:pt-60 pb-16 text-center">
      <h1 className="mt-4 text-3xl md:text-6xl font-light tracking-tight text-[#2F5D50] leading-tight">
        Webbpaket för företag som vill växa
      </h1>

      <p className="mt-2 text-lg text-[#3A3A3A] max-w-2xl mx-auto leading-relaxed py-5">
        Jag bygger moderna, snabba och användarvänliga webbplatser. Här hittar
        du tydliga paket anpassade för olika behov och budget.
      </p>
      <Flower />
    </section>
  );
}
