import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Convert Studios collects, uses and protects your information.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-bone px-6 pb-24 pt-36 md:px-10 md:pt-44">
      <div className="container-c max-w-3xl">
        <p className="eyebrow mb-5">Legal</p>
        <h1 className="display-lg text-ink">Privacy Policy</h1>
        <p className="mt-4 text-sm text-slate">Last updated: June 2026</p>

        <div className="mt-10 space-y-6 text-ink/75 [&_a]:text-oxblood [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-ink [&_li]:leading-relaxed [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          <p className="text-lg">
            Convert Studios (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)
            respects your privacy and is committed to protecting your personal
            information. This policy explains what information we collect, how we
            use it, and the choices you have. It applies to this website and the
            services we provide, and is handled in accordance with the Australian
            Privacy Principles under the Privacy Act 1988 (Cth).
          </p>

          <h2>Who we are</h2>
          <p>
            Convert Studios is a content marketing and video production studio
            based in Australia. We help businesses generate leads and grow their
            presence through story-led content and paid distribution. If you have
            any questions about this policy, you can reach us at{" "}
            hello@convertstudios.au.
          </p>

          <h2>Information we collect</h2>
          <p>We only collect information that helps us respond to you and deliver our services. This may include:</p>
          <ul>
            <li>
              <strong>Contact details</strong> you give us through our enquiry
              form, a booking, or by email, such as your name, email address,
              phone number, and business name.
            </li>
            <li>
              <strong>Project information</strong> you share with us about your
              business, goals, and what you&apos;re hoping to achieve with your
              content.
            </li>
            <li>
              <strong>Usage data</strong> collected automatically when you visit
              this website, such as your browser type, device, pages viewed, and
              general location, gathered through cookies and analytics tools.
            </li>
          </ul>
          <p>
            You don&apos;t have to provide your personal information, but if you
            don&apos;t, we may not be able to respond to your enquiry or provide
            our services.
          </p>

          <h2>How we use your information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>respond to your enquiries and book consultations;</li>
            <li>provide, manage and improve our services and content for you;</li>
            <li>send you relevant updates or marketing where you&apos;ve agreed to receive them;</li>
            <li>understand how our website is used so we can improve it; and</li>
            <li>meet our legal and record-keeping obligations.</li>
          </ul>
          <p>We do not sell your personal information to anyone.</p>

          <h2>Marketing</h2>
          <p>
            If we send you marketing communications, you can opt out at any time
            by using the unsubscribe link in our emails or by contacting us
            directly. We&apos;ll action your request promptly.
          </p>

          <h2>Cookies and analytics</h2>
          <p>
            This website uses cookies and similar technologies to keep the site
            working properly and to understand how visitors use it. You can set
            your browser to refuse cookies, though some parts of the site may not
            function as intended if you do.
          </p>

          <h2>Third parties we work with</h2>
          <p>
            We use trusted third-party providers to operate our business, such as
            scheduling tools, form and email handlers, hosting and analytics
            providers, and advertising platforms used to distribute content. These
            providers only receive the information they need to perform their
            service, and they handle it under their own privacy terms. Some of
            these providers may store or process data outside Australia.
          </p>

          <h2>Content we produce</h2>
          <p>
            Where our work involves filming or photographing people or premises,
            we obtain appropriate consent or releases before that footage is used.
            If you appear in content we&apos;ve produced and would like to discuss
            its use, please contact us.
          </p>

          <h2>How we protect your information</h2>
          <p>
            We take reasonable steps to keep your personal information secure and
            to protect it from misuse, loss, and unauthorised access. We retain
            your information only for as long as we need it for the purposes set
            out in this policy or as required by law, after which it is securely
            deleted or de-identified.
          </p>

          <h2>Your rights</h2>
          <p>
            You can ask us to access the personal information we hold about you,
            correct it if it&apos;s inaccurate, or delete it where appropriate. To
            make a request, email us at hello@convertstudios.au and we&apos;ll
            respond within a reasonable timeframe. If you have a concern about how
            we&apos;ve handled your information, you can also contact the Office of
            the Australian Information Commissioner at{" "}
            <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">
              oaic.gov.au
            </a>
            .
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The latest version will
            always be available on this page, with the date it was last updated
            shown above.
          </p>

          <h2>Contact us</h2>
          <p>
            For any questions about this policy or your personal information,
            email us at hello@convertstudios.au.
          </p>

          <p className="border-t border-ink/10 pt-6 text-sm text-slate">
            This privacy policy is provided as general information and is not
            legal advice. We recommend having it reviewed by a qualified
            professional to ensure it suits your specific circumstances.
          </p>
        </div>
      </div>
    </section>
  );
}
