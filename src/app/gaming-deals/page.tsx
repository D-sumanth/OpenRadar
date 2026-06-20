import type { Metadata } from "next";
import { DealCard } from "@/components/DealCard";
import { dealCategories, getDealsByCategory } from "@/lib/deals";

export const metadata: Metadata = {
  title: "Gaming Deals and Console Deal Watch",
  description:
    "Open World Radar gaming deals page for GTA VI launch prep, PS5 and Xbox console deals, accessories, display, audio, and open-world gaming checklists.",
};

export default function GamingDealsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="font-mono text-sm font-black uppercase tracking-[0.25em] text-amber-200">
        Deal watch
      </p>
      <h1 className="mt-4 text-4xl font-black text-white sm:text-6xl">Gaming Deals</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
        Deal Watch cards for console prep, storage, accessories, display, audio, and
        open-world gaming setup planning. Replace sample links only after joining approved
        affiliate programs.
      </p>
      <div className="mt-8 rounded border border-amber-300/30 bg-amber-300/[0.08] p-5 text-sm leading-6 text-amber-50">
        Open World Radar may use affiliate links. If you buy through those links, we may
        earn a commission at no extra cost to you. Our guides should remain clear,
        practical, and not based only on commission.
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-400">
        Some links may become affiliate links in the future. We may earn a commission at
        no extra cost to you.
      </p>
      <div className="mt-10 grid gap-10">
        {dealCategories.map((category) => (
          <section key={category.title}>
            <div className="mb-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-lime-200">
                {category.title}
              </p>
              <h2 className="mt-2 text-2xl font-black text-white">{category.description}</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {getDealsByCategory(category.title).map((deal) => (
                <DealCard key={deal.title} deal={deal} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
