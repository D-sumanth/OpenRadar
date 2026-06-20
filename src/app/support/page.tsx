import type { Metadata } from "next";
import Link from "next/link";
import { MissionActions } from "@/components/MissionActions";
import { mission } from "@/data/mission";

export const metadata: Metadata = {
  title: "Support Open World Radar",
  description:
    "Support the fan-made Open World Radar launch setup through The £1 Launch Mission.",
};

export default function SupportPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="minimal-label">Support</p>
      <h1 className="mt-4 text-4xl font-black uppercase tracking-[0.14em] text-white sm:text-6xl">
        {mission.title}
      </h1>
      <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-400">
        {mission.tagline}
      </p>
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
        <p className="text-sm leading-6 text-slate-300">{mission.summary}</p>
        <div className="mt-6">
          <MissionActions />
        </div>
        <p className="mt-4 text-xs leading-5 text-slate-500">
          {mission.contributionDisclaimer}
        </p>
      </div>
      <Link href="/mission" className="mt-6 inline-flex text-sm font-bold text-cyan-200">
        View mission progress
      </Link>
    </section>
  );
}
