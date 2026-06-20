import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Open World Radar, a fan-made GTA VI updates, open-world gaming, launch guide, PS5, Xbox, and console deals website.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="font-mono text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
        Privacy
      </p>
      <h1 className="mt-4 text-4xl font-black text-white sm:text-6xl">Privacy Policy</h1>
      <div className="prose-radar mt-6 text-lg">
        <p>
          Open World Radar is currently an informational fan-made gaming site. We do not
          aim to collect unnecessary personal data.
        </p>
        <p>
          If email signup, analytics, contact forms, or advertising tools are added later,
          this page will be updated to explain what is collected and why.
        </p>
        <p>
          If the supporter wall is enabled, only the display name and message chosen for
          public display should appear publicly. Emails, payment references, and payment
          details must remain private.
        </p>
        <p>
          Open World Radar should never store payment card details directly. Payments
          should be handled by a provider such as Stripe, Ko-fi, Buy Me a Coffee, or a
          similar payment service.
        </p>
        <p>
          Users can contact Open World Radar with privacy questions through the contact
          page.
        </p>
        <p>{site.disclaimer}</p>
      </div>
    </section>
  );
}
