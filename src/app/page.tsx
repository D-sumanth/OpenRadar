import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { CountdownTimer } from "@/components/CountdownTimer";
import { DealCard } from "@/components/DealCard";
import { EmailSignup } from "@/components/EmailSignup";
import { RadarGraphic } from "@/components/RadarGraphic";
import { RadarUpdateCard } from "@/components/RadarUpdateCard";
import { SocialLinks } from "@/components/SocialLinks";
import { deals } from "@/lib/deals";
import { posts } from "@/lib/posts";
import { radarUpdates } from "@/lib/radar-updates";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Open World Radar | GTA VI Updates, Launch Guide, Console Deals",
  description:
    "Open World Radar is a fan-made hub for GTA VI updates, open-world gaming guides, PS5 and Xbox launch prep, and console deal watchlists.",
};

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
              Track GTA VI launch updates, console prep, and open-world gaming deals.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Open World Radar is a fan-made hub for verified updates, buying guides,
              launch checklists, and no-hype gaming explainers.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/gta-vi-preorder-guide"
                className="rounded bg-cyan-300 px-5 py-3 text-center text-sm font-black uppercase tracking-[0.12em] text-slate-950 transition hover:bg-cyan-200"
              >
                Read the launch guide
              </Link>
              <Link
                href="/gaming-deals"
                className="rounded border border-white/20 px-5 py-3 text-center text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
              >
                Explore gaming deals
              </Link>
            </div>
            <p className="mt-4 text-sm font-semibold text-slate-400">
              Official updates clearly separated from rumours and community speculation.
            </p>
          </div>
          <div className="overflow-hidden rounded border border-cyan-300/20 bg-white/[0.03]">
            <RadarGraphic tone="cyan" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
              Latest Radar Updates
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">Clear labels, practical context.</h2>
          </div>
          <Link href="/blog" className="text-sm font-bold text-cyan-200">
            Visit the blog
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {radarUpdates.map((update) => (
            <RadarUpdateCard key={update.title} update={update} />
          ))}
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
          <h2 className="mt-3 text-3xl font-black text-white">Get the launch checklist</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Join the list for GTA VI launch prep, console deal alerts, and weekly open-world
            gaming updates. No spam, just practical updates.
          </p>
          <EmailSignup />
        </aside>
      </section>

      <section className="border-y border-white/10 bg-cyan-300/[0.04]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
              Follow the radar
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">Follow Open World Radar</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              Short GTA VI updates, console prep tips, and open-world gaming news are
              coming soon across Shorts, Reels, and TikTok.
            </p>
          </div>
          <div className="flex items-center lg:justify-end">
            <SocialLinks />
          </div>
        </div>
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
