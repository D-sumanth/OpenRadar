import type { Metadata } from "next";
import { DealCard } from "@/components/DealCard";
import { deals } from "@/lib/deals";

export const metadata: Metadata = {
  title: "Gaming Deals",
  description:
    "Sample gaming deal cards with clear affiliate disclosure for console, storage, and open-world gaming accessories.",
};

export default function GamingDealsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="font-mono text-sm font-black uppercase tracking-[0.25em] text-amber-200">
        Deal watch
      </p>
      <h1 className="mt-4 text-4xl font-black text-white sm:text-6xl">Gaming Deals</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
        Placeholder deal cards for console prep, storage, accessories, and open-world gaming
        bargains. Replace these with real affiliate links only after joining programs.
      </p>
      <div className="mt-8 rounded border border-amber-300/30 bg-amber-300/[0.08] p-5 text-sm leading-6 text-amber-50">
        Affiliate disclosure: Some links may become affiliate links. If you buy through
        them, Open World Radar may earn a commission at no extra cost to you.
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {deals.map((deal) => (
          <DealCard key={deal.title} deal={deal} />
        ))}
      </div>
    </section>
  );
}
