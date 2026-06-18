import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid gap-12 items-center md:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#F7F2EA]">
          <Image
            src="/.png"
            alt="Porträtt av Makki"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#2F5D50]">
            Om Makki Studio
          </h2>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-[#3A3A3A]">
            Jag startade Makki Studio för att jag tycker att alla företag,
            oavsett storlek, förtjänar en webbplats som känns professionell,
            genomtänkt och enkel att använda.
          </p>

          <p className="mt-5 text-base md:text-lg leading-relaxed text-[#3A3A3A]">
            Med en bakgrund som lärare och idag fullstackutvecklare kombinerar
            jag teknik med kommunikation, struktur och användarupplevelse. För
            mig handlar en bra webbplats inte bara om hur den ser ut, utan om
            hur den hjälper ditt företag att växa.
          </p>

          <p className="mt-5 text-base md:text-lg leading-relaxed text-[#3A3A3A]">
            Jag tycker om att göra det komplexa enkelt och att bygga lösningar
            som känns naturliga att använda. Under hela projektet har du en
            personlig kontakt – från första idé till färdig webbplats.
          </p>
        </div>
      </div>
    </section>
  );
}