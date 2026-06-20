import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CountdownTimer } from "@/components/CountdownTimer";
import { EmailSignup } from "@/components/EmailSignup";
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
  ["Launch Guide", "pre-order and release notes", "/gta-vi-preorder-guide"],
  ["Console Prep", "PS5 and Xbox setup", "/ps5-vs-xbox-gta-vi"],
  ["Deal Watch", "accessories and prices", "/gaming-deals"],
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
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(34,211,238,0.22),transparent_34rem),radial-gradient(circle_at_78%_76%,rgba(217,70,239,0.12),transparent_30rem)]" />
        <div className="absolute inset-0 soft-grid opacity-25" />

        <div className="animate-rise relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-7 pb-16">
          <p className="minimal-label">Open World Radar</p>
          <h1 className="minimal-title">GTA VI Countdown</h1>
          <p className="minimal-date">November 19, 2026</p>

          <CountdownTimer targetIso={site.gtaReleaseIso} />

          <div className="mt-4 flex flex-col gap-2 text-left sm:flex-row sm:text-center">
            {links.map(([title, description, href]) => (
              <Link key={title} href={href} className="minimal-pill">
                <span>{title}</span>
                <small>{description}</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="notify" className="mx-auto max-w-xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
          <h2 className="text-lg font-black uppercase tracking-[0.22em] text-white">
            Get launch alerts
          </h2>
          <EmailSignup />
        </div>
      </section>
    </div>
  );
}
