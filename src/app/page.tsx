import type { Metadata } from "next";
import Link from "next/link";
import { CinematicMediaPanel } from "@/components/CinematicMediaPanel";
import { CountdownTimer } from "@/components/CountdownTimer";
import { EmailSignup } from "@/components/EmailSignup";
import { QuickActionCard } from "@/components/QuickActionCard";
import { heroMedia, mediaStrip } from "@/lib/media";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Open World Radar | GTA VI Countdown, Launch Guide and Gaming Deals",
  description:
    "Fan-made GTA VI launch countdown, console prep guides, open-world gaming updates, and gaming deal alerts.",
};

const quickActions = [
  {
    title: "Launch Guide",
    description: "Pre-order status, editions, platform notes, and what to wait for before buying.",
    href: "/gta-vi-preorder-guide",
    marker: "01",
    cta: "Read guide",
  },
  {
    title: "Console Prep",
    description: "A practical PS5 vs Xbox breakdown for storage, displays, ecosystem, and budget.",
    href: "/ps5-vs-xbox-gta-vi",
    marker: "02",
    cta: "Compare",
  },
  {
    title: "Deal Watch",
    description: "Console, controller, storage, and display picks with clear affiliate disclosure.",
    href: "/gaming-deals",
    marker: "03",
    cta: "View deals",
  },
];

const latestSignals = ["Launch date watch", "Console buying guide", "Deal alerts"];

export default function Home() {
  return (
    <>
      <section className="cinematic-bg relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 soft-grid opacity-40" />
        <div className="relative mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-16">
          <div className="animate-rise flex flex-col justify-center">
            <p className="font-mono text-xs font-black uppercase tracking-[0.28em] text-lime-200">
              Open-world launch signal
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              GTA VI Countdown, Launch Guide and Gaming Deals
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Track the road to GTA VI with fan-made countdowns, console prep guides,
              open-world gaming updates, and deal alerts without the official-brand noise.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/gta-vi-preorder-guide"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                Launch guide
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="#notify"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Notify me
              </Link>
            </div>
            <p className="mt-5 text-sm font-semibold text-slate-400">
              Fan-made gaming news and guides. Not affiliated with Rockstar Games or
              Take-Two Interactive.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {latestSignals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-300"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>
          <div className="animate-rise-delay flex items-center">
            <CinematicMediaPanel
              src={heroMedia.src}
              alt={heroMedia.alt}
              label="Original media slot"
              priority
              className="min-h-[440px] w-full"
            />
          </div>
        </div>
      </section>

      <main>
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <CountdownTimer targetIso={site.gtaReleaseIso} />
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {quickActions.map((action) => (
              <QuickActionCard key={action.title} {...action} />
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-fuchsia-200">
                  Visual radar
                </p>
                <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  Drop in your own approved gaming artwork.
                </h2>
              </div>
              <Link href="/blog" className="text-sm font-bold text-cyan-200">
                Latest updates
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {mediaStrip.map((item) => (
                <CinematicMediaPanel
                  key={item.src}
                  src={item.src}
                  alt={item.alt}
                  label={item.label}
                  className="min-h-72 rounded-[1.5rem]"
                />
              ))}
            </div>
          </div>
        </section>

        <section id="notify" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-lime-200">
              Get launch alerts
            </p>
            <h2 className="mt-3 text-3xl font-black text-white">Watch the launch window.</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              A minimal signup placeholder for future updates. No real submission is wired yet.
            </p>
            <EmailSignup />
          </div>
        </section>
      </main>
    </>
  );
}
