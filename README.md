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

Replace placeholder values with real merchant data after joining affiliate programs. Keep disclosures clear near any purchase links.

```ts
{
  title: "Console Bundle",
  vendor: "Retailer",
  price: "$499",
  tag: "Console",
  description: "Why this deal may be useful.",
  href: "https://example.com",
}
```

## Key Folders

- `src/app` - App Router pages and route metadata
- `src/components` - Reusable UI components
- `src/lib` - Shared site config, posts, and deals data
- `public` - Static public assets

## Deployment

The app is ready for Vercel. Connect the GitHub repository to Vercel or run the Vercel CLI after logging in.
