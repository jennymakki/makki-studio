import Image from "next/image";

export default function Quote2() {
  return (
    <section className="pb-20 flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center gap-6">
        
        <Image
          src="/flower.png"
          alt="Flower"
          width={120}
          height={120}
          className="opacity-70"
        />

        <p className="text-2xl md:text-3xl font-light text-[#2F5D50] leading-relaxed max-w-2xl">
          En bra webbplats känns självklar.
        </p>

        <Image
          src="/flower.png"
          alt="Flower"
          width={120}
          height={120}
          className="opacity-70 rotate-180"
        />
      </div>
    </section>
  );
}
