import type { Metadata } from "next";
import { MissionSection } from "@/components/MissionSection";
import { RadarWall } from "@/components/RadarWall";
import { mission } from "@/data/mission";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The £1 Launch Mission",
  description:
    "A voluntary community funding mission for the fan-made Open World Radar GTA VI launch setup.",
};

export default function MissionPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pb-4 pt-14 text-center sm:px-6 lg:px-8">
        <p className="minimal-label">Open World Radar</p>
        <h1 className="mt-4 text-4xl font-black uppercase tracking-[0.16em] text-white sm:text-6xl">
          {mission.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400">
          {mission.tagline}
        </p>
      </section>
      <MissionSection full />
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
          <p className="minimal-label">What it supports</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["Console setup", "GTA VI coverage", "Guides", "Site development"].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-black/20 p-4 text-sm font-bold text-slate-200">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-slate-500">{site.disclaimer}</p>
        </div>
      </section>
      <RadarWall full />
    </>
  );
}
