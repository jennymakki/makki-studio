
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

    if (company) return;

    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name || !email || !message) {
      setError("Fyll i alla obligatoriska fält.");
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

      if (!res.ok) throw new Error("Request failed");

      setSuccess(true);
    } catch {
      setError("Något gick fel, försök igen.");
    } finally {
      setLoading(false);
    }
  }

  const fieldStyles =
    "w-full rounded-lg border border-border bg-surface px-4 py-3 text-heading placeholder:text-muted/70 outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/10";

  if (success) {
    return (
      <section
        ref={successRef}
        aria-labelledby="contact-success-title"
        aria-live="polite"
        className="py-20"
      >
        <div className="mx-auto max-w-2xl px-4 sm:px-8">
          <h2
            id="contact-success-title"
            className="text-3xl font-medium tracking-tight text-heading md:text-4xl"
          >
            Tack!
          </h2>

          <p className="mt-4 leading-relaxed text-muted">
            Jag har fått ditt meddelande och återkommer vanligtvis inom 1–2
            arbetsdagar.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="cta" aria-labelledby="contact-title" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-8">
        <div className="max-w-2xl">
          <h2
            id="contact-title"
            className="text-3xl font-medium tracking-tight text-heading md:text-4xl"
          >
            Kontakt
          </h2>

          <p
            id="contact-description"
            className="mt-5 text-base leading-relaxed text-muted md:text-lg"
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
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-medium text-heading"
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
                className={fieldStyles}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-medium text-heading"
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
                className={fieldStyles}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-medium text-heading"
            >
              Berätta lite mer <span aria-hidden="true">*</span>
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              required
              placeholder="Berätta så mycket du vet i dagsläget – du behöver inte ha en färdig plan."
              className={`${fieldStyles} resize-none`}
            />
          </div>

          {error && (
            <p role="alert" aria-live="assertive" className="text-sm text-red-700">
              {error}
            </p>
          )}

          <div className="pt-2">
            <Button
              type="submit"
              aria-busy={loading}
            >
              {loading ? "Skickar..." : "Skicka meddelande"}
            </Button>
          </div>

          {/* Honeypot */}
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
