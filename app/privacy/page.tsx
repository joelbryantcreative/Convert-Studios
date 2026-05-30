import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Convert Studios collects, uses and protects your information.",
};

export default function PrivacyPage() {
  return (
    <section className="section-pad pt-36 md:pt-44">
      <div className="container-c max-w-3xl">
        <p className="eyebrow mb-5">Legal</p>
        <h1 className="font-serif text-5xl font-300 leading-[1.05] tracking-tight text-ink md:text-6xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-ink/45">Last updated: May 2026</p>

        <div className="prose-convert mt-10 space-y-6 text-ink/70 [&_h2]:mt-10 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-ink [&_p]:leading-relaxed">
          <p className="text-lg">
            This is a placeholder privacy policy for Convert Studios. Replace
            this content with your finalised policy before launch.
          </p>

          <h2>Information we collect</h2>
          <p>
            When you contact us or book a call, we collect the details you
            provide — such as your name, email address, business name and the
            message you send us. We may also collect basic analytics about how
            visitors use this website.
          </p>

          <h2>How we use your information</h2>
          <p>
            We use your information solely to respond to your enquiry, deliver
            our services, and improve our website. We do not sell your personal
            information.
          </p>

          <h2>Third-party services</h2>
          <p>
            We may use trusted third-party tools (such as a scheduling provider
            and form handler) to operate this site. These providers process data
            on our behalf under their own privacy terms.
          </p>

          <h2>Your rights</h2>
          <p>
            You can request access to, correction of, or deletion of your
            personal information at any time by emailing{" "}
            <a
              href="mailto:hello@convert.studios"
              className="link-underline text-oxblood"
            >
              hello@convert.studios
            </a>
            .
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Reach us at hello@convert.studios.
          </p>
        </div>
      </div>
    </section>
  );
}
