# Open World Radar

A modern fan-made gaming news and guides site focused on GTA VI, open-world gaming updates, console buying guides, and gaming deals.

This project is intentionally not official and does not use Rockstar, GTA, or Take-Two logos or copyrighted artwork.

> Fan-made gaming news and guides. Not affiliated with Rockstar Games or Take-Two Interactive.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static sample content
- Vercel-ready project structure

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Useful Commands

```bash
npm run lint
npm run build
```

## Updating Blog Posts

Blog content lives in `src/lib/posts.ts`.

Add a new object to the `posts` array:

```ts
{
  slug: "your-post-slug",
  title: "Your Post Title",
  excerpt: "Short summary for cards and metadata.",
  category: "Guides",
  date: "June 20, 2026",
  readTime: "5 min read",
  heroTone: "cyan",
  content: ["Paragraph one.", "Paragraph two."],
}
```

The blog index at `/blog` and article route at `/blog/[slug]` update automatically.

## Updating Deals

Deal cards live in `src/lib/deals.ts`.

Deal cards are grouped by `category` and rendered on `/gaming-deals`. Replace sample values with real merchant data after joining affiliate programs. Keep disclosures clear near any purchase links.

```ts
{
  title: "Console Bundle",
  badge: "Deal Watch",
  category: "Console setup",
  tag: "Console",
  description: "Why this deal may be useful.",
  href: "https://example.com",
  cta: "View deal",
}
```

Homepage update cards live in `src/lib/radar-updates.ts`.

Social links live in `src/lib/site.ts` under `socialLinks`. Replace `#` values with real profile URLs when the channels are ready.

## Updating The £1 Launch Mission

Mission data lives in `src/data/mission.ts`.

Edit these values manually until a backend is connected:

- `targetAmount` - goal amount, currently `600`
- `currentAmount` - verified collected amount
- `supporterCount` - verified supporter count
- `supporters` - public supporter wall entries
- `donationLink` - your live PayPal, Stripe Payment Link, Ko-fi, or Buy Me a Coffee URL
- `launchDate` - mission launch date marker

The contribution button uses `NEXT_PUBLIC_DONATION_LINK` first, then falls back to `donationLink` in `src/data/mission.ts`. For PayPal, a common format is:

```txt
https://www.paypal.com/paypalme/YOUR_PAYPAL_NAME/1
```

Add the live URL in Vercel as `NEXT_PUBLIC_DONATION_LINK` for production, or paste it into `donationLink` and redeploy. If neither is configured, the button safely shows `Contribution link coming soon.` and no payment is started.

Do not put secret keys in frontend variables. Future private/server env vars:

- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Suggested future `supporters` table:

- `id`
- `display_name`
- `email_private`
- `amount`
- `currency`
- `supporter_number`
- `message`
- `show_name`
- `payment_status`
- `payment_provider`
- `payment_reference`
- `created_at`

Rules for the future backend:

- Never show `email_private` publicly.
- Only show `display_name` when `show_name` is true.
- Only count rows where `payment_status` is `paid`.
- Amounts must come from verified payment provider data, not frontend input.
- Sanitize display names and messages, enforce max lengths, and moderate public messages.

Simple future setup:

1. Create a Stripe Payment Link or Checkout flow for £1 or local equivalent.
2. Store verified paid supporters in Supabase from a Stripe webhook.
3. Update progress from paid supporter rows only.
4. Keep affiliate links and mission contributions disclosed separately.

## Key Folders

- `src/app` - App Router pages and route metadata
- `src/components` - Reusable UI components
- `src/lib` - Shared site config, posts, and deals data
- `public` - Static public assets

## Deployment

The app is ready for Vercel. Connect the GitHub repository to Vercel or run the Vercel CLI after logging in.
