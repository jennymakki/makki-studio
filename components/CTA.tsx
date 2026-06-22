"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "./Button";

export default function CTA() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (success) {
      successRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [success]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const form = new FormData(e.currentTarget);

    const company = String(form.get("company") || "");
    if (company) return;

    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const service = String(form.get("service") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name || !email || !service || !message) {
      setError("Fyll i alla obligatoriska fält ✨");
      return;
    }

    setLoading(true);

    const data = {
      name,
      email,
      service,
      message,
      timeline: String(form.get("timeline") || ""),
      budget: String(form.get("budget") || ""),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
    } else {
      setError("Något gick fel, försök igen 🙏");
    }
  }

  if (success) {
    return (
      <section
        ref={successRef}
        className="mx-auto max-w-5xl px-6 py-24 text-center"
      >
        <h2 className="text-3xl text-[#2F5D50] font-light">
          Tack! Jag återkommer snart
        </h2>

        <p className="mt-4 text-[#3A3A3A]">
          Jag har tagit emot din förfrågan och återkommer vanligtvis inom 1–2 arbetsdagar.
        </p>
      </section>
    );
  }

  return (
    <section id="cta" className="mx-auto max-w-5xl px-6 py-24">
      <div className="rounded-3xl bg-[#F7F2EA] border border-[rgba(47,93,80,0.12)] p-8 md:p-14 shadow-sm">

        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#2F5D50]">
            Berätta om ditt projekt
          </h2>

          <p className="mt-5 text-base md:text-lg text-[#3A3A3A] leading-relaxed">
            Du behöver inte ha allt färdigt. Berätta om din idé så gott du kan,
            så hjälper jag dig att hitta en lösning som passar ditt företag.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 space-y-8">

          <div className="grid md:grid-cols-2 gap-8">

            <div>
              <label className="block text-[#2F5D50] font-medium mb-2">
                Vad får jag kalla dig?
              </label>

              <input
                name="name"
                type="text"
                required
                placeholder="Ditt namn"
                className="w-full rounded-xl border border-[#2F5D50]/20 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#2F5D50]/20"
              />
            </div>

            <div>
              <label className="block text-[#2F5D50] font-medium mb-2">
                Hur når jag dig?
              </label>

              <input
                name="email"
                type="email"
                required
                placeholder="namn@email.se"
                className="w-full rounded-xl border border-[#2F5D50]/20 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#2F5D50]/20"
              />
            </div>
          </div>

          <div>
            <label className="block text-[#2F5D50] font-medium mb-3">
              Vad vill du skapa?
            </label>

            <div className="grid sm:grid-cols-2 gap-3">

              {[
                "Ny webbplats",
                "Befintlig webbplats",
                "Webbapp",
                "Vet inte riktigt än",
              ].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[#2F5D50]/10 bg-white p-4 cursor-pointer hover:border-[#2F5D50]/30"
                >
                  <input
                    type="radio"
                    name="service"
                    value={item}
                    required
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[#2F5D50] font-medium mb-2">
              Berätta gärna lite mer
            </label>

            <textarea
              name="message"
              rows={6}
              required
              placeholder="Du behöver inte ha allt klart. Skriv några rader om din idé, mål eller vad du vill förbättra."
              className="w-full rounded-xl border border-[#2F5D50]/20 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#2F5D50]/20 resize-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div>
              <label className="block text-[#2F5D50] font-medium mb-2">
                När vill du komma igång?
              </label>

              <select
                name="timeline"
                className="w-full rounded-xl border border-[#2F5D50]/20 bg-white px-4 py-3"
              >
                <option>Så snart som möjligt</option>
                <option>Inom några månader</option>
                <option>Jag undersöker bara möjligheterna</option>
              </select>
            </div>

            <div>
              <label className="block text-[#2F5D50] font-medium mb-2">
                Budget (frivilligt)
              </label>

              <select
                name="budget"
                className="w-full rounded-xl border border-[#2F5D50]/20 bg-white px-4 py-3"
              >
                <option>Vet inte ännu</option>
                <option>Under 10 000 kr</option>
                <option>10 000–20 000 kr</option>
                <option>20 000+ kr</option>
              </select>
            </div>
          </div>

          {error && (
            <p className="text-red-600 text-sm">
              {error}
            </p>
          )}

          <div className="pt-2">
            <Button
              type="submit"
              className="bg-[#2F5D50] hover:bg-[#244A3F] transition text-white px-8 py-3 rounded-xl font-medium"
            >
              {loading ? "Skickar..." : "Skicka förfrågan"}
            </Button>

            <p className="mt-4 text-sm text-[#666]">
              Jag återkommer vanligtvis inom 1–2 arbetsdagar.
            </p>
          </div>

          <input
            type="text"
            name="company"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

        </form>
      </div>
    </section>
  );
}