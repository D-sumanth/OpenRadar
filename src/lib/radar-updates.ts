export type RadarUpdate = {
  title: string;
  badge: "Official Update" | "Guide" | "Trust Note" | "Coming Soon";
  summary: string;
  date: string;
  href: string;
};

export const radarUpdates: RadarUpdate[] = [
  {
    title: "GTA VI launch tracker",
    badge: "Official Update",
    summary:
      "A dedicated page for confirmed release timing, platform availability, and pre-order guidance.",
    date: "Updated regularly",
    href: "/gta-vi-preorder-guide",
  },
  {
    title: "PS5 vs Xbox for GTA VI",
    badge: "Guide",
    summary:
      "Compare console options, storage needs, controller costs, and value before launch.",
    date: "Buying guide",
    href: "/ps5-vs-xbox-gta-vi",
  },
  {
    title: "Rumour vs official: how we label updates",
    badge: "Trust Note",
    summary:
      "Open World Radar separates confirmed information from speculation so readers know what they are seeing.",
    date: "Editorial policy",
    href: "/about",
  },
  {
    title: "Launch setup checklist",
    badge: "Coming Soon",
    summary:
      "A practical checklist for console, storage, display, headset, and account setup before release.",
    date: "Coming soon",
    href: "/gta-vi-preorder-guide",
  },
];
