"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

// Submissions are emailed via Formspree. Set this to your form endpoint:
//   1. Create a free form at https://formspree.io pointed at hello@convertstudios.au
//   2. Either set NEXT_PUBLIC_FORMSPREE_ENDPOINT in Vercel, or paste the full
//      URL (https://formspree.io/f/XXXXXXXX) directly below.
const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/xqeoagwd";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Until the endpoint is configured, log locally so the UX still works.
    if (!FORMSPREE_ENDPOINT) {
      console.log(
        "Contact form (no endpoint configured):",
        Object.fromEntries(formData.entries()),
      );
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-xl border border-bone/15 bg-bone/5 p-10 text-center">
        <p className="font-display text-2xl text-bone">Thank you.</p>
        <p className="mt-3 text-bone/70">
          We&apos;ve received your message and will be in touch shortly. If
          it&apos;s urgent, email us directly at{" "}
          <span className="text-bone">hello@convertstudios.au</span>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-7">
      <input type="hidden" name="_subject" value="New enquiry from convertstudios.au" />
      <fieldset className="space-y-3">
        <legend className="text-lg font-medium text-bone">Name</legend>
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

      {status === "error" && (
        <p className="text-sm text-bone/80">
          Something went wrong sending your message. Please try again, or email
          us directly at hello@convertstudios.au.
        </p>
      )}

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
      <label htmlFor={name} className="mb-2 block text-sm font-semibold text-bone">
        {label}
        {required && <span className="font-normal text-bone/40"> (required)</span>}
      </label>
      {children}
    </div>
  );
}
