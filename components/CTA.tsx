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
    const message = String(form.get("message") || "").trim();

    if (!name || !email || !message) {
      setError("Fyll i alla obligatoriska fält ✨");
      return;
    }

    setLoading(true);

    const data = {
      name,
      email,
      service: String(form.get("service") || ""),
      message,
      timeline: String(form.get("timeline") || ""),
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
        className="py-20"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-8">
          <h2
            id="contact-success-title"
            className="text-3xl md:text-4xl font-light tracking-tight text-[#2F5D50]"
          >
            Tack!
          </h2>

          <p className="mt-4 text-[#3A3A3A] leading-relaxed">
            Jag har fått ditt meddelande och återkommer vanligtvis inom 1–2
            arbetsdagar.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="cta"
      aria-labelledby="contact-title"
      className="py-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="max-w-2xl">
          <h2
            id="contact-title"
            className="text-3xl md:text-4xl font-light tracking-tight text-[#2F5D50]"
          >
            Har du en idé? Berätta!
          </h2>

          <p
            id="contact-description"
            className="mt-5 text-base md:text-lg text-[#3A3A3A] leading-relaxed"
          >
            Du behöver inte veta exakt vad du behöver eller ha allt planerat.
            Skriv några rader om vad du funderar på, så tar vi det därifrån.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          aria-label="Kontakta Makki Studio"
          aria-describedby="contact-description"
          className="mt-12 max-w-4xl space-y-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="name"
                className="block text-[#2F5D50] font-medium mb-2"
              >
                Namn <span aria-hidden="true">*</span>
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
                E-post <span aria-hidden="true">*</span>
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

        

          <div>
            <label
              htmlFor="message"
              className="block text-[#2F5D50] font-medium mb-2"
            >
              Berätta lite mer <span aria-hidden="true">*</span>
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Berätta så mycket du vet i dagsläget - du behöver inte ha en färdig plan."
              className="w-full rounded-xl border border-[#2F5D50]/20 bg-white px-4 py-3 outline-none transition focus:ring-2 focus:ring-[#2F5D50]/20 focus:border-[#2F5D50]/40 resize-none"
            />
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
              {loading ? "Skickar..." : "Skicka meddelande"}
            </Button>

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