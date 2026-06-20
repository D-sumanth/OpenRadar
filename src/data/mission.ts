export type Supporter = {
  displayName: string;
  supporterNumber: number;
  message?: string;
  showName: boolean;
};

export type Mission = {
  title: string;
  tagline: string;
  summary: string;
  targetAmount: number;
  currentAmount: number;
  supporterCount: number;
  supporterTarget: number;
  suggestedContribution: number;
  currency: "GBP";
  launchDate: string;
  donationLink: string;
  contributionDisclaimer: string;
  supporters: Supporter[];
};

export const mission: Mission = {
  title: "The £1 Launch Mission",
  tagline: "600 players. £1 each. One community-funded launch setup.",
  summary:
    "Help fund GTA VI launch coverage, console prep, guides, and deal tracking.",
  targetAmount: 600,
  currentAmount: 0,
  supporterCount: 0,
  supporterTarget: 600,
  suggestedContribution: 1,
  currency: "GBP",
  launchDate: "2026-11-19",
  // Paste your live PayPal/Stripe/Ko-fi/Buy Me a Coffee payment URL here,
  // or set NEXT_PUBLIC_DONATION_LINK in Vercel to override it.
  donationLink: "https://www.paypal.com/pool/9qe5gUkt0X?sr=wccr",
  contributionDisclaimer:
    "Contributions are voluntary and support the Open World Radar launch setup, content production, and site development. This is not a charity donation.",
  supporters: [],
};
