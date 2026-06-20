import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Open World Radar, a fan-made gaming news and guides site for GTA VI and open-world gaming updates.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="font-mono text-sm font-black uppercase tracking-[0.25em] text-lime-200">
        About
      </p>
      <h1 className="mt-4 text-4xl font-black text-white sm:text-6xl">Open World Radar</h1>
      <div className="prose-radar mt-6 text-lg">
        <p>
          Open World Radar is a faceless fan-made gaming media brand focused on GTA VI,
          console buying guides, gaming deals, and open-world games.
        </p>
        <p>
          The site is designed to be useful without pretending to be official. It avoids
          official Rockstar or GTA branding, uses original placeholder graphics, and keeps
          the disclosure visible across the experience.
        </p>
        <p>{site.disclaimer}</p>
      </div>
    </section>
  );
}
