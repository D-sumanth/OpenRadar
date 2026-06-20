export type Deal = {
  title: string;
  vendor: string;
  price: string;
  tag: string;
  description: string;
  href: string;
};

export const deals: Deal[] = [
  {
    title: "PS5 Slim Console Bundle",
    vendor: "Placeholder Retailer",
    price: "Check price",
    tag: "Console",
    description:
      "A watchlist pick for players who want the PlayStation ecosystem before GTA VI arrives.",
    href: "#",
  },
  {
    title: "Xbox Series X Starter Setup",
    vendor: "Placeholder Retailer",
    price: "Check price",
    tag: "Console",
    description:
      "A sample deal card for performance-focused players comparing the Xbox route.",
    href: "#",
  },
  {
    title: "1TB Console SSD Upgrade",
    vendor: "Placeholder Retailer",
    price: "Check price",
    tag: "Storage",
    description:
      "Extra room for large installs, capture clips, and the open-world backlog.",
    href: "#",
  },
];
