import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CountdownTimer } from "@/components/CountdownTimer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Open World Radar | GTA VI Countdown",
  description:
    "A minimalist fan-made GTA VI countdown and launch prep page by Open World Radar.",
};

const heroImage = "/images/hero-gaming.jpg";

function hasPublicAsset(src: string) {
  return src.startsWith("/") && existsSync(join(process.cwd(), "public", src.slice(1)));
}

const links = [
  ["Launch Guide", "/gta-vi-preorder-guide"],
  ["Console Prep", "/ps5-vs-xbox-gta-vi"],
  ["Deal Watch", "/gaming-deals"],
] as const;

export default function Home() {
  const hasHeroImage = hasPublicAsset(heroImage);

  return (
    <div>
      <section
        id="countdown"
        className="minimal-hero-bg relative flex min-h-[calc(100svh-3.5rem)] overflow-hidden px-4 pt-10 text-center sm:px-6 lg:px-8"
      >
        {/* Replace /public/images/hero-gaming.jpg with approved background media, or remove it to use the gradient fallback. */}
        {hasHeroImage ? (
          <Image
            src={heroImage}
            alt="Subtle open-world coastline background"
            fill
            priority
            sizes="100vw"
            className="hero-bg-image object-cover"
          />
        ) : null}
        <div className="absolute inset-0 bg-black/78" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(34,211,238,0.18),transparent_34rem),radial-gradient(circle_at_80%_78%,rgba(217,70,239,0.09),transparent_30rem)]" />
        <div className="absolute inset-0 soft-grid opacity-15" />

        <div className="animate-rise relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-6 pb-12">
          <p className="minimal-label">Open World Radar</p>
          <h1 className="minimal-title">GTA VI Countdown</h1>
          <p className="minimal-date">November 19, 2026</p>

          <CountdownTimer targetIso={site.gtaReleaseIso} />

          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {links.map(([title, href]) => (
              <Link key={title} href={href} className="minimal-pill">
                <span>{title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
