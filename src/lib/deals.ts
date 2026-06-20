export type Deal = {
  title: string;
  badge: string;
  category: string;
  tag: string;
  description: string;
  href: string;
  cta: string;
};

export const deals: Deal[] = [
  {
    title: "PS5 Console Bundle Watch",
    badge: "Deal Watch",
    category: "Console setup",
    tag: "Console",
    description: "Track PS5 bundle prices before the GTA VI launch window.",
    href: "/ps5-vs-xbox-gta-vi",
    cta: "View console guide",
  },
  {
    title: "Xbox Series X|S Setup Guide",
    badge: "Guide",
    category: "Console setup",
    tag: "Console",
    description: "Compare Xbox Series X and Series S options for launch-day gaming.",
    href: "/ps5-vs-xbox-gta-vi",
    cta: "Compare Xbox options",
  },
  {
    title: "Budget Gaming Headset Picks",
    badge: "Coming Soon",
    category: "Accessories",
    tag: "Accessories",
    description: "Find affordable headset options for party chat and long sessions.",
    href: "/gaming-deals",
    cta: "See headset picks",
  },
  {
    title: "Storage Upgrade Checklist",
    badge: "Guide",
    category: "Accessories",
    tag: "Accessories",
    description: "Prepare extra storage for large open-world installs and future updates.",
    href: "/gta-vi-preorder-guide",
    cta: "Read checklist",
  },
  {
    title: "4K Display Readiness Notes",
    badge: "Guide",
    category: "Display and audio",
    tag: "Display",
    description: "Check HDMI, refresh rate, HDR, and display settings before launch week.",
    href: "/ps5-vs-xbox-gta-vi",
    cta: "Review display notes",
  },
  {
    title: "Controller Charging Setup",
    badge: "Deal Watch",
    category: "Accessories",
    tag: "Accessories",
    description: "Plan spare cables, docks, or battery packs for longer open-world sessions.",
    href: "/gaming-deals",
    cta: "Track accessories",
  },
  {
    title: "Launch Account Checklist",
    badge: "Coming Soon",
    category: "Launch checklist",
    tag: "Checklist",
    description: "Prepare account security, subscriptions, storage space, and wishlists.",
    href: "/gta-vi-preorder-guide",
    cta: "Open checklist",
  },
  {
    title: "Party Chat Audio Setup",
    badge: "Guide",
    category: "Display and audio",
    tag: "Audio",
    description: "Compare practical audio needs for solo play, party chat, and late sessions.",
    href: "/gaming-deals",
    cta: "See audio guide",
  },
  {
    title: "Pre-order Readiness Tracker",
    badge: "Official Update",
    category: "Launch checklist",
    tag: "Launch",
    description: "Follow verified platform and storefront guidance before spending money.",
    href: "/gta-vi-preorder-guide",
    cta: "Read launch guide",
  },
];

export const dealCategories = [
  {
    title: "Console setup",
    description: "Console, storage, and ecosystem choices before launch.",
  },
  {
    title: "Accessories",
    description: "Controllers, headsets, charging, and comfort upgrades.",
  },
  {
    title: "Display and audio",
    description: "TV, monitor, HDR, and sound setup notes for open-world games.",
  },
  {
    title: "Launch checklist",
    description: "Pre-order, account, wishlist, and download prep tasks.",
  },
];

export function getDealsByCategory(category: string) {
  return deals.filter((deal) => deal.category === category);
}
