# SEO guide — EnWretched site

This doc explains how SEO is set up after the May 2026 pass, and how to extend it when you add pages or blog posts.

## How metadata works

Next.js reads **metadata exports** from server components at build time and injects `<title>`, `<meta>`, `<link rel="canonical">`, and Open Graph tags into the HTML.

### Global defaults — `src/app/layout.tsx`

- Site-wide title **template**: `%s | EnWretched`
- Default description, OG image, robots, Google verification, icons
- **`metadataBase`**: `https://enwretched.com` — makes relative OG image paths resolve correctly
- **No global canonical** — each route sets its own so blog posts are not treated as duplicates of the homepage

### Per-page metadata — `src/lib/seo.ts`

Use `createPageMetadata()` for any route:

```ts
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Gallery',
  description: 'Short page description for search and social previews.',
  path: '/gallery',
  image: '/images/showcase/recovery.jpg', // optional
});
```

For **client-only pages** (`"use client"`), metadata cannot live in the same file. Add a **`layout.tsx`** in that route folder (server component) and export metadata there. Examples: `about/layout.tsx`, `contact/layout.tsx`.

## Blog posts

### Listing — `src/app/blog/page.tsx`

Exports metadata for `/blog`.

### Individual posts — `src/app/blog/[id]/page.tsx`

- **`generateMetadata`** — title, excerpt, cover image, canonical URL, article OG type
- **`generateStaticParams`** — pre-renders all posts at build time
- **`JsonLd` + `createArticleSchema`** — Article structured data for Google

When you add a post in `src/data/blogPosts.ts`:

1. Use a **slug id**: `2026-05-30-my-post-title` (no spaces)
2. Fill **`excerpt`** — it becomes the meta description
3. Set **`imageUrl`** — used for cards, OG, and JSON-LD

No extra SEO files needed; sitemap picks up new posts automatically.

## Sitemap & robots

- **`src/app/sitemap.ts`** — homepage, gallery, blog, forum, about, contact, recovery, and every blog post
- **`src/app/robots.ts`** — allows `/`, blocks `/api/` and `/admin/`, points to sitemap

After deploy, confirm at:

- https://enwretched.com/sitemap.xml
- https://enwretched.com/robots.txt

## Structured data (JSON-LD)

| Page | Schema | Where |
|------|--------|--------|
| About | `Person` | `src/app/about/layout.tsx` |
| Blog post | `Article` | `src/app/blog/[id]/page.tsx` |

Helpers live in `src/components/seo/StructuredData.tsx`. Render on the server via `src/components/seo/JsonLd.tsx`.

## URL redirects

Old blog slug `Side Project Time` redirects to `2026-02-07-side-project-time` in `next.config.js` so existing links keep working.

## Checklist for a new blog post

- [ ] `id` is a dated slug (no spaces)
- [ ] `excerpt` is 1–2 sentences (meta description)
- [ ] `imageUrl` points to a real file under `public/`
- [ ] Build succeeds (`npm run build`)
- [ ] View page source: unique `<title>`, `description`, `canonical`, `og:title`

## Verify after deploy

View source on a blog post URL. You should see:

- `<title>Your Post Title | EnWretched</title>`
- `<meta name="description" content="Your excerpt…">`
- `<link rel="canonical" href="https://enwretched.com/blog/your-slug">`
- `og:type` = `article` on posts

Optional: Google Search Console → URL inspection → request indexing for new posts.
