import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for Open World Radar, a fan-made GTA VI updates, open-world gaming, launch guide, PS5, Xbox, and console deals website.",
};

const terms = [
  "Open World Radar is a fan-made site.",
  "The site is not affiliated with Rockstar Games or Take-Two Interactive.",
  "Content is for information, commentary, and general guidance.",
  "Deals, prices, availability, and platform details may change.",
  "Users should verify details with retailers, platform stores, and official sources before purchasing.",
  "Open World Radar does not guarantee accuracy, availability, savings, profit, or outcomes.",
];

export default function TermsOfUsePage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="font-mono text-sm font-black uppercase tracking-[0.25em] text-lime-200">
        Terms
      </p>
      <h1 className="mt-4 text-4xl font-black text-white sm:text-6xl">Terms of Use</h1>
      <div className="mt-8 grid gap-3">
        {terms.map((term) => (
          <div key={term} className="rounded border border-white/10 bg-white/[0.04] p-4 text-slate-300">
            {term}
          </div>
        ))}
      </div>
      <p className="mt-8 text-sm leading-6 text-slate-500">{site.disclaimer}</p>
    </section>
  );
}
