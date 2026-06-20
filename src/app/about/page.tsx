import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Open World Radar",
  description:
    "About Open World Radar, a fan-made GTA VI updates, open-world gaming, PS5, Xbox, console deals, and launch guide media project.",
};

const standards = [
  "We label rumours clearly.",
  "We avoid fake leaks.",
  "We separate guides from deals.",
  "We disclose affiliate links where used.",
  "We update outdated information when possible.",
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="font-mono text-sm font-black uppercase tracking-[0.25em] text-lime-200">
        About
      </p>
      <h1 className="mt-4 text-4xl font-black text-white sm:text-6xl">Open World Radar</h1>
      <div className="prose-radar mt-6 text-lg">
        <p>
          Open World Radar is a faceless, fan-made gaming media project covering GTA VI
          launch prep, open-world gaming news, console buying guides, and practical deal
          alerts.
        </p>
        <p>
          We aim to keep updates clear by separating confirmed information from rumours,
          speculation, and community discussion.
        </p>
        <p>
          This site is not affiliated with Rockstar Games, Take-Two Interactive,
          PlayStation, Xbox, or any retailer.
        </p>
        <p>{site.disclaimer}</p>
      </div>
      <section className="mt-10 rounded border border-lime-300/20 bg-lime-300/[0.05] p-6">
        <h2 className="text-2xl font-black text-white">Editorial standards</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {standards.map((standard) => (
            <div key={standard} className="rounded bg-black/25 p-4 text-sm font-semibold text-slate-300">
              {standard}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
