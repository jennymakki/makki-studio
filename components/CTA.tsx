"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./Button";

export default function CTA() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const successRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (success) {
      successRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [success]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const form = new FormData(e.currentTarget);

    const company = String(form.get("company") || "").trim();

    if (company) {
      return;
    }

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

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setSuccess(true);
    } catch {
      setError("Något gick fel, försök igen 🙏");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <section
        ref={successRef}
        aria-labelledby="contact-success-title"
        aria-live="polite"
        className="py-16"
      >
        <div className="max-w-2xl">
          <h2
            id="contact-success-title"
            className="text-3xl md:text-4xl font-light tracking-tight text-[#2F5D50]"
          >
            Tack! Jag återkommer snart
          </h2>

          <p className="mt-4 text-[#3A3A3A] leading-relaxed">
            Jag har tagit emot din förfrågan och återkommer vanligtvis inom 1–2
            arbetsdagar.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby="contact-title" className="py-16">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl">
          <h2
            id="contact-title"
            className="text-3xl md:text-4xl font-light tracking-tight text-[#2F5D50]"
          >
            Berätta om ditt projekt
          </h2>

          <p
            id="contact-description"
            className="mt-5 text-base md:text-lg text-[#3A3A3A] leading-relaxed"
          >
            Du behöver inte ha allt färdigt. Berätta om din idé så gott du kan,
            så hjälper jag dig att hitta en lösning som passar ditt företag.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          aria-label="Förfrågan om webbprojekt"
          aria-describedby="contact-description"
          className="mt-12 max-w-4xl space-y-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="name"
                className="block text-[#2F5D50] font-medium mb-2"
              >
                Vad får jag kalla dig?
                <span aria-hidden="true"> *</span>
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Ditt namn"
                className="w-full rounded-xl border border-[#2F5D50]/20 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#2F5D50]/20 focus:border-[#2F5D50]/40"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-[#2F5D50] font-medium mb-2"
              >
                Hur når jag dig?
                <span aria-hidden="true"> *</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="namn@email.se"
                className="w-full rounded-xl border border-[#2F5D50]/20 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#2F5D50]/20 focus:border-[#2F5D50]/40"
              />
            </div>
          </div>

          <fieldset>
            <legend className="block text-[#2F5D50] font-medium mb-3">
              Vad vill du skapa?
              <span aria-hidden="true"> *</span>
            </legend>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Ny webbplats",
                "Befintlig webbplats",
                "Webbapp",
                "Vet inte riktigt än",
              ].map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-[#2F5D50]/10 bg-white p-4 cursor-pointer transition hover:border-[#2F5D50]/30 focus-within:ring-2 focus-within:ring-[#2F5D50]/20"
                >
                  <input
                    type="radio"
                    name="service"
                    value={item}
                    required
                    className="accent-[#2F5D50]"
                  />

                  <span>{item}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label
              htmlFor="message"
              className="block text-[#2F5D50] font-medium mb-2"
            >
              Berätta gärna lite mer
              <span aria-hidden="true"> *</span>
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Du behöver inte ha allt klart. Skriv några rader om din idé, mål eller vad du vill förbättra."
              className="w-full rounded-xl border border-[#2F5D50]/20 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#2F5D50]/20 focus:border-[#2F5D50]/40 resize-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="timeline"
                className="block text-[#2F5D50] font-medium mb-2"
              >
                När vill du komma igång?
              </label>

              <select
                id="timeline"
                name="timeline"
                defaultValue="Så snart som möjligt"
                className="w-full rounded-xl border border-[#2F5D50]/20 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#2F5D50]/20 focus:border-[#2F5D50]/40"
              >
                <option value="Så snart som möjligt">
                  Så snart som möjligt
                </option>

                <option value="Inom några månader">Inom några månader</option>

                <option value="Jag undersöker bara möjligheterna">
                  Jag undersöker bara möjligheterna
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="budget"
                className="block text-[#2F5D50] font-medium mb-2"
              >
                Budget (frivilligt)
              </label>

              <select
                id="budget"
                name="budget"
                defaultValue="Vet inte ännu"
                className="w-full rounded-xl border border-[#2F5D50]/20 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#2F5D50]/20 focus:border-[#2F5D50]/40"
              >
                <option value="Vet inte ännu">Vet inte ännu</option>

                <option value="Under 10 000 kr">Under 10 000 kr</option>

                <option value="10 000–20 000 kr">10 000–20 000 kr</option>

                <option value="20 000+ kr">20 000+ kr</option>
              </select>
            </div>
          </div>

          {error && (
            <p
              role="alert"
              aria-live="assertive"
              className="text-red-600 text-sm"
            >
              {error}
            </p>
          )}

          <div className="pt-2">
            <Button
              type="submit"
              aria-busy={loading}
              className="bg-[#2F5D50] hover:bg-[#244A3F] disabled:opacity-60 disabled:cursor-not-allowed transition text-white px-8 py-3 rounded-xl font-medium"
            >
              {loading ? "Skickar förfrågan..." : "Skicka förfrågan"}
            </Button>

            <p className="mt-4 text-sm text-[#666]">
              Jag återkommer vanligtvis inom 1–2 arbetsdagar.
            </p>
          </div>

          <div
            aria-hidden="true"
            className="absolute -left-[9999px] h-px w-px overflow-hidden"
          >
            <label htmlFor="company">Company</label>

            <input
              id="company"
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
        </form>
      </div>
    </section>
  );
}
