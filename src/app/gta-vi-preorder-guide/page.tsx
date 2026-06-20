import type { Metadata } from "next";
import { CountdownTimer } from "@/components/CountdownTimer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "GTA VI Pre-order Guide",
  description:
    "Fan-made GTA VI pre-order guide covering platforms, editions to watch, timing, and safe buying tips.",
};

const checklist = [
  "Confirm your platform: GTA VI is expected on PS5 and Xbox Series X|S at launch.",
  "Wait for verified storefront pages before trusting edition names, bonuses, or pricing.",
  "Compare digital convenience against physical resale, gifting, and collector habits.",
  "Avoid third-party code sellers until reputable retailers publish official listings.",
];

export default function PreorderGuidePage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="font-mono text-sm font-black uppercase tracking-[0.25em] text-cyan-200">
        GTA VI buyer prep
      </p>
      <h1 className="mt-4 text-4xl font-black text-white sm:text-6xl">GTA VI Pre-order Guide</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
        This fan-made guide helps you prepare without relying on leaks or unofficial
        storefront claims. Use it as a practical checklist before committing money.
      </p>
      <div className="mt-8">
        <CountdownTimer targetIso={site.gtaReleaseIso} />
      </div>
      <div className="mt-10 grid gap-4">
        {checklist.map((item, index) => (
          <div key={item} className="rounded border border-white/10 bg-white/[0.04] p-5">
            <p className="font-mono text-sm font-black text-lime-200">0{index + 1}</p>
            <p className="mt-2 text-slate-300">{item}</p>
          </div>
        ))}
      </div>
      <div className="prose-radar mt-10 rounded border border-cyan-300/20 bg-cyan-300/[0.05] p-6">
        <h2 className="text-2xl font-black text-white">What to update later</h2>
        <p>
          When official editions, prices, bonuses, and retailer pages are live, update this
          page with verified links and remove any speculative language. Keep the affiliate
          disclosure visible near buying recommendations.
        </p>
      </div>
    </section>
  );
}
