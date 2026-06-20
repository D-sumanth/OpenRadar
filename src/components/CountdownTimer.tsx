"use client";

import { useSyncExternalStore } from "react";

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getRemaining(target: string, now: number): Remaining | null {
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

function formatValue(label: string, value: number | undefined) {
  if (value === undefined) {
    return label === "Days" ? "---" : "--";
  }

  return label === "Days" ? String(value) : String(value).padStart(2, "0");
}

export function CountdownTimer({ targetIso }: { targetIso: string }) {
  const now = useSyncExternalStore(
    subscribe,
    () => Date.now(),
    () => 0,
  );
  const remaining = getRemaining(targetIso, now);

  const units = [
    ["days", "Days", remaining?.days],
    ["hours", "Hours", remaining?.hours],
    ["minutes", "Min", remaining?.minutes],
    ["seconds", "Sec", remaining?.seconds],
  ] as const;

  return (
    <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:gap-5">
      {units.map(([key, label, value]) => (
        <div key={key} className="countdown-perspective">
          <div
            key={`${key}-${value ?? "initial"}`}
            className="countdown-tile group"
          >
            <span className="countdown-value">{formatValue(label, value)}</span>
            <span className="countdown-label">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
