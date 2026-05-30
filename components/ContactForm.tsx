"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    // --- Stub handler -------------------------------------------------------
    // Replace with a Formspree POST (or API route) when ready, e.g.:
    //   await fetch("https://formspree.io/f/XXXX", { method: "POST", body: formData })
    console.log("Contact form submission:", payload);
    await new Promise((r) => setTimeout(r, 700));
    // -----------------------------------------------------------------------

    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-ink/10 bg-bone/40 p-10 text-center">
        <p className="font-serif text-3xl text-ink">Thank you.</p>
        <p className="mt-3 text-ink/65">
          We&apos;ve received your message and will be in touch shortly. If
          it&apos;s urgent, email us directly at{" "}
          <a
            href="mailto:hello@convert.studios"
            className="link-underline text-oxblood"
          >
            hello@convert.studios
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" required>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            className={inputClass}
          />
        </Field>
        <Field label="Email" name="email" required>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Business name" name="business">
        <input
          type="text"
          id="business"
          name="business"
          autoComplete="organization"
          className={inputClass}
        />
      </Field>

      <Field label="What do you need?" name="need" required>
        <select id="need" name="need" required className={inputClass}>
          <option value="">Select one…</option>
          <option value="content">Content</option>
          <option value="ads">Ads</option>
          <option value="both">Both</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </Field>

      <Field label="Message" name="message" required>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-y`}
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

const inputClass =
  "w-full rounded-lg border border-ink/15 bg-cream px-4 py-3 text-ink placeholder:text-ink/40 transition focus:border-oxblood focus:outline-none focus:ring-2 focus:ring-oxblood/20";

function Field({
  label,
  name,
  required,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-ink/80"
      >
        {label}
        {required && <span className="text-oxblood"> *</span>}
      </label>
      {children}
    </div>
  );
}
