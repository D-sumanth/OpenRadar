export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  heroTone: "cyan" | "lime" | "pink" | "amber";
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "gta-vi-release-window-watchlist",
    title: "GTA VI Launch Watchlist: Dates, Platforms, and What to Track",
    excerpt:
      "A clean tracker for release timing, console platforms, pre-order signals, and the updates worth watching before launch.",
    category: "GTA VI",
    date: "June 20, 2026",
    readTime: "5 min read",
    heroTone: "cyan",
    content: [
      "GTA VI is currently dated for November 19, 2026 on PlayStation 5 and Xbox Series X|S. Until storefront listings and editions are fully live, the smart move is to track official store pages, console bundle news, and verified publisher announcements.",
      "Open World Radar does not repost leaks or use official artwork. We focus on practical prep: which console fits your setup, whether to wait for bundles, and how to avoid overpaying for accessories you do not need.",
      "For players upgrading from last-gen hardware, the highest-impact checks are display support, storage space, controller preference, subscription costs, and whether your friends are leaning toward PS5 or Xbox.",
    ],
  },
  {
    slug: "best-open-world-games-before-gta-vi",
    title: "Open-World Games to Play While Waiting for GTA VI",
    excerpt:
      "A rotating backlog of modern sandboxes, crime stories, racers, RPGs, and systems-driven worlds to keep your skills warm.",
    category: "Open World",
    date: "June 18, 2026",
    readTime: "4 min read",
    heroTone: "lime",
    content: [
      "The best pre-GTA VI backlog is not just a list of giant maps. It should cover driving feel, mission freedom, emergent chaos, urban atmosphere, and story pacing.",
      "Mix one cinematic campaign with one systemic sandbox and one racing-focused open world. That gives you variety without turning the wait into homework.",
      "We will keep this list refreshed as sales rotate and new open-world releases land across console and PC.",
    ],
  },
  {
    slug: "console-storage-gta-vi-prep",
    title: "Console Storage Prep for Huge Open-World Games",
    excerpt:
      "How to think about SSD space, expansion cards, uninstall habits, and day-one download planning.",
    category: "Guides",
    date: "June 15, 2026",
    readTime: "6 min read",
    heroTone: "pink",
    content: [
      "Large open-world games can turn storage into the hidden upgrade cost. Before buying anything, audit what you actually replay, what can live in the cloud, and which games can be archived.",
      "PS5 and Xbox Series consoles handle expansion differently, so compare official compatibility, price per terabyte, and whether you care about moving games between internal and external storage.",
      "A small amount of planning can save you from buying storage at launch-week prices.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
