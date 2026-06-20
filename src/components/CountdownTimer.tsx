"use client";

import { useMemo, useSyncExternalStore } from "react";

function getRemaining(target: string, now: number) {
  if (now === 0) {
    return null;
  }

  const total = Math.max(0, new Date(target).getTime() - now);
  const days = Math.floor(total / 86400000);
  const hours = Math.floor((total / 3600000) % 24);
  const minutes = Math.floor((total / 60000) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function subscribe(callback: () => void) {
  const id = window.setInterval(callback, 1000);
  return () => window.clearInterval(id);
}

export function CountdownTimer({ targetIso }: { targetIso: string }) {
  const now = useSyncExternalStore(
    subscribe,
    () => Date.now(),
    () => 0,
  );
  const remaining = getRemaining(targetIso, now);
  const targetLabel = useMemo(
    () =>
      new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date(targetIso)),
    [targetIso],
  );

  const units = [
    ["Days", remaining?.days],
    ["Hours", remaining?.hours],
    ["Minutes", remaining?.minutes],
    ["Seconds", remaining?.seconds],
  ] as const;

  return (
    <section className="rounded border border-cyan-300/25 bg-cyan-300/[0.06] p-5 shadow-[0_0_55px_rgba(34,211,238,0.08)]">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
            GTA VI Countdown
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">{targetLabel}</h2>
        </div>
        <p className="text-sm text-slate-400">PS5 and Xbox Series X|S launch target</p>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {units.map(([label, value]) => (
          <div key={label} className="rounded bg-black/35 p-4 text-center ring-1 ring-white/10">
            <div className="font-mono text-3xl font-black text-white">
              {value === undefined ? "--" : String(value).padStart(2, "0")}
            </div>
            <div className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
