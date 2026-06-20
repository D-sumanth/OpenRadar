import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { CountdownTimer } from "@/components/CountdownTimer";
import { DealCard } from "@/components/DealCard";
import { RadarGraphic } from "@/components/RadarGraphic";
import { deals } from "@/lib/deals";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";

const updates = [
  "Countdown set to the current November 19, 2026 GTA VI launch date.",
  "Pre-order tracker prepared for PS5 and Xbox Series X|S listings.",
  "Console guide compares ecosystem, storage, controller, and display choices.",
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-[#05070f]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="font-mono text-sm font-black uppercase tracking-[0.3em] text-lime-200">
              Fan-made open-world signal desk
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-none text-white sm:text-6xl lg:text-7xl">
              GTA VI updates, console prep, and open-world gaming deals.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Open World Radar is a faceless gaming media brand for practical news,
              guides, and buying decisions. No official logos, no copyrighted art,
              and no affiliation claims.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/gta-vi-preorder-guide"
                className="rounded bg-cyan-300 px-5 py-3 text-center text-sm font-black uppercase tracking-[0.12em] text-slate-950 transition hover:bg-cyan-200"
              >
                Pre-order guide
              </Link>
              <Link
                href="/ps5-vs-xbox-gta-vi"
                className="rounded border border-white/20 px-5 py-3 text-center text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
              >
                Compare consoles
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded border border-cyan-300/20 bg-white/[0.03]">
            <RadarGraphic tone="cyan" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <CountdownTimer targetIso={site.gtaReleaseIso} />
        <div className="rounded border border-white/10 bg-white/[0.04] p-5">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-200">
            Latest updates
          </p>
          <div className="mt-4 grid gap-3">
            {updates.map((update) => (
              <div key={update} className="rounded bg-black/25 p-4 text-sm text-slate-300">
                {update}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
                Console buying guides
              </p>
              <h2 className="mt-2 text-3xl font-black text-white">Pick the setup, not the hype.</h2>
            </div>
            <Link href="/ps5-vs-xbox-gta-vi" className="text-sm font-bold text-cyan-200">
              Read the full comparison
            </Link>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {["Performance and display", "Storage and downloads", "Friends and ecosystem"].map(
              (item) => (
                <div key={item} className="rounded border border-white/10 bg-black/25 p-5">
                  <h3 className="text-lg font-black text-white">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Compare the real ownership details that affect a huge open-world launch.
                  </p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
        <div>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-lime-200">
                Latest articles
              </p>
              <h2 className="mt-2 text-3xl font-black text-white">Fresh from the radar</h2>
            </div>
            <Link href="/blog" className="text-sm font-bold text-lime-200">
              All posts
            </Link>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {posts.slice(0, 2).map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
        <aside className="rounded border border-fuchsia-300/20 bg-fuchsia-300/[0.05] p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-fuchsia-200">
            Email signup
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">Get the launch-week brief.</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            A simple placeholder signup for weekly GTA VI prep notes, deal watch alerts,
            and open-world gaming updates.
          </p>
          <form className="mt-6 grid gap-3">
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="rounded border border-white/10 bg-black/35 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-fuchsia-200"
            />
            <button className="rounded bg-fuchsia-300 px-4 py-3 text-sm font-black uppercase tracking-[0.14em] text-slate-950">
              Join the list
            </button>
          </form>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">
              Sample deals
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">Console prep watchlist</h2>
          </div>
          <Link href="/gaming-deals" className="text-sm font-bold text-amber-200">
            Browse deals
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {deals.map((deal) => (
            <DealCard key={deal.title} deal={deal} />
          ))}
        </div>
      </section>
    </>
  );
}
