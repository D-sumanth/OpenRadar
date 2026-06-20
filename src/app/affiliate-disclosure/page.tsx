import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure for Open World Radar",
  description:
    "Affiliate disclosure for Open World Radar console deals, GTA VI launch guide recommendations, PS5, Xbox, and open-world gaming deal links.",
};

export default function AffiliateDisclosurePage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="font-mono text-sm font-black uppercase tracking-[0.25em] text-amber-200">
        Disclosure
      </p>
      <h1 className="mt-4 text-4xl font-black text-white sm:text-6xl">Affiliate Disclosure</h1>
      <div className="prose-radar mt-6 text-lg">
        <p>
          Open World Radar may use affiliate links on deal pages, buying guides, and article
          recommendations. If you click one of those links and make a purchase, the site may
          earn a commission at no extra cost to you.
        </p>
        <p>
          Recommendations should be based on usefulness, value, availability, and clear
          relevance to gaming readers. Placeholder deal links in this starter project should
          be replaced only with real, compliant affiliate URLs.
        </p>
      </div>
    </section>
  );
}
