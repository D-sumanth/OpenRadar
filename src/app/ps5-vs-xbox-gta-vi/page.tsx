import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PS5 vs Xbox for GTA VI Launch Prep",
  description:
    "Open World Radar guide comparing PS5, Xbox Series X, Xbox Series S, console deals, storage, controllers, and open-world gaming setup choices for GTA VI.",
};

const rows = [
  ["Performance", "Wait for confirmed GTA VI performance modes before choosing solely on specs."],
  ["Controller", "Pick the controller you can use comfortably for long driving and exploration sessions."],
  ["Storage", "Budget for large installs, captures, and future open-world releases."],
  ["Friends", "Your online group may matter more than small hardware differences."],
  ["Subscription", "Compare monthly costs and the games you actually play."],
];

export default function ConsoleGuidePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="font-mono text-sm font-black uppercase tracking-[0.25em] text-lime-200">
        Console buying guide
      </p>
      <h1 className="mt-4 text-4xl font-black text-white sm:text-6xl">PS5 vs Xbox for GTA VI</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
        There is no universal winner. The best console is the one that fits your display,
        library, friends list, controller preference, and budget.
      </p>
      <div className="mt-10 overflow-hidden rounded border border-white/10">
        {rows.map(([label, detail]) => (
          <div key={label} className="grid gap-3 border-b border-white/10 bg-white/[0.035] p-5 last:border-b-0 md:grid-cols-[220px_1fr]">
            <h2 className="text-lg font-black text-white">{label}</h2>
            <p className="text-slate-400">{detail}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="rounded border border-cyan-300/20 bg-cyan-300/[0.05] p-6">
          <h2 className="text-2xl font-black text-white">Choose PS5 if</h2>
          <p className="mt-3 leading-7 text-slate-400">
            You already prefer the PlayStation library, controller, store, and social circle.
          </p>
        </div>
        <div className="rounded border border-fuchsia-300/20 bg-fuchsia-300/[0.05] p-6">
          <h2 className="text-2xl font-black text-white">Choose Xbox if</h2>
          <p className="mt-3 leading-7 text-slate-400">
            You value the Xbox ecosystem, controller feel, Game Pass catalog, or Series X setup.
          </p>
        </div>
      </div>
    </section>
  );
}
