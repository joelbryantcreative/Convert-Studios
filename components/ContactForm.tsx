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
      <div className="mx-auto max-w-xl border border-white/15 bg-white/5 p-10 text-center">
        <p className="font-display text-2xl text-white">Thank you.</p>
        <p className="mt-3 text-white/70">
          We&apos;ve received your message and will be in touch shortly. If
          it&apos;s urgent, email us directly at{" "}
          <a
            href="mailto:hello@convert.studios"
            className="link-underline text-sage"
          >
            hello@convert.studios
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-7">
      <fieldset className="space-y-3">
        <legend className="text-lg font-medium text-white">Name</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="First Name" name="firstName" required>
            <input id="firstName" name="firstName" required autoComplete="given-name" className="field-input" />
          </Field>
          <Field label="Last Name" name="lastName" required>
            <input id="lastName" name="lastName" required autoComplete="family-name" className="field-input" />
          </Field>
        </div>
      </fieldset>

      <Field label="Email" name="email" required>
        <input type="email" id="email" name="email" required autoComplete="email" className="field-input" />
      </Field>

      <Field label="Phone" name="phone" required>
        <input type="tel" id="phone" name="phone" required autoComplete="tel" className="field-input" />
      </Field>

      <Field label="How did you hear about us?" name="source" required>
        <select id="source" name="source" required className="field-input" defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          <option value="instagram">Instagram</option>
          <option value="facebook">Facebook</option>
          <option value="google">Google</option>
          <option value="referral">Referral</option>
        </select>
      </Field>

      <Field
        label="What are you hoping to achieve with your content?"
        name="goals"
        required
      >
        <textarea id="goals" name="goals" required rows={5} className="field-input resize-y" />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}

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
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-white">
        {label}
        {required && <span className="font-normal text-white/40"> (required)</span>}
      </label>
      {children}
    </div>
  );
}
