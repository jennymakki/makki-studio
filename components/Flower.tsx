import Image from "next/image";

export default function Quote1() {
  return (
    <section className="pb-20 flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center gap-6">
        
        <Image
          src="/flower.png"
          alt="Flower"
          width={120}
          height={120}
          className="opacity-90"
        />
      </div>
    </section>
  );
}
