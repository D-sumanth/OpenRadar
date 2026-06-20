"use client";

import { useState } from "react";
import { mission } from "@/data/mission";

const donationLink = process.env.NEXT_PUBLIC_DONATION_LINK || mission.donationLink;

function isValidPaymentLink(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

export function MissionActions() {
  const [modal, setModal] = useState<"missing" | "how" | null>(null);

  function handleContribution() {
    if (isValidPaymentLink(donationLink)) {
      window.open(donationLink, "_blank", "noopener,noreferrer");
      return;
    }

    setModal("missing");
  }

  return (
    <>
      <div className="flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={handleContribution}
          className="mission-button mission-button-primary"
        >
          Add £1 to the mission
        </button>
        <button
          type="button"
          onClick={() => setModal("how")}
          className="mission-button mission-button-secondary"
        >
          How it works
        </button>
      </div>

      {modal ? (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#070b13] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.55)]">
            {modal === "missing" ? (
              <>
                <h2 className="text-lg font-black uppercase tracking-[0.2em] text-white">
                  Contribution link coming soon.
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Paste your PayPal payment URL into `donationLink` in
                  `src/data/mission.ts`, or set `NEXT_PUBLIC_DONATION_LINK` in
                  Vercel. Until then, no payment is started.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-lg font-black uppercase tracking-[0.2em] text-white">
                  How the mission works
                </h2>
                <ol className="mt-4 grid gap-2 text-sm leading-6 text-slate-300">
                  <li>1. Supporters add £1 or local equivalent.</li>
                  <li>2. Each supporter lights one radar signal.</li>
                  <li>3. The goal is £600 for the Open World Radar launch setup.</li>
                  <li>4. Funds support console setup, GTA VI coverage, guides, and site development.</li>
                  <li>5. This is fan-made and not affiliated with Rockstar Games or Take-Two Interactive.</li>
                </ol>
              </>
            )}
            <button
              type="button"
              onClick={() => setModal(null)}
              className="mt-5 rounded-full border border-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-100 transition hover:bg-white/10"
            >
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
