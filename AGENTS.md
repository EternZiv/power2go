<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project: Power2Go Website

## Stack
- Next.js 16.2.9 (output: "export") → Static site for GitHub Pages
- React 19.2.4, TypeScript 5, Tailwind CSS v4
- framer-motion 12.41, clsx, tailwind-merge
- ESLint 9 + eslint-config-next

## Architecture
- GitHub Pages deploy: basePath = `/power2go` in production
- Images unoptimized (static export), stored in `public/images/`
- Pages under `src/app/` using App Router

## Pages (all built)
| Route | File | Notes |
|---|---|---|
| `/` | `page.tsx` | Hero (Unsplash bg), Solutions cards, Stats, Products grid, Features, Testimonials, Newsletter, CTA |
| `/about` | `about/page.tsx` | Mission/Vision, stats, Core Values, Parent Companies, Journey timeline, CTA |
| `/solutions` | `solutions/page.tsx` | 4 solutions (Res/Comm/Ind/Portable), alternating layout, CTA |
| `/services` | `services/page.tsx` | 6 service cards, 4-step process, CTA |
| `/products` | `products/page.tsx` | Category filter buttons (no interactivity), ProductCardGrid, CTA |
| `/products/[slug]` | `products/[slug]/page.tsx` | Detail page with specs, features, gallery, CTA |
| `/blog` | `blog/page.tsx` | Category filter (working), featured + grid, date/readTime |
| `/blog/[slug]` | `blog/[slug]/page.tsx` | Full article with TOC, related articles, JSON-LD Article schema |
| `/contact` | `contact/page.tsx` | 4 contact cards, Formspree form, WhatsApp, map placeholders, locations |
| `/faq` | `faq/page.tsx` | Category tabs, accordion, JSON-LD FAQPage schema, CTA |
| `/privacy` | `privacy/page.tsx` | Full privacy policy content |
| `/terms` | `terms/page.tsx` | Full terms of service content |
| `/cookies` | `cookies/page.tsx` | Cookie policy with cookie type table |
| 404 | `not-found.tsx` | Styled 404 with nav links |
| Error | `error.tsx` | Error boundary with retry |
| Loading | `loading.tsx` | Skeleton loader |

## Components
| Component | File | Notes |
|---|---|---|
| SkipToContent | `SkipToContent.tsx` | Accessibility skip link |
| Header | `Header.tsx` | Sticky, scroll blur, mobile hamburger, active nav |
| Footer | `Footer.tsx` | 4-col, socials (CSS hover), framer-motion stagger |
| Breadcrumb | `Breadcrumb.tsx` | Auto-home link, separators |
| Testimonials | `Testimonials.tsx` | 4 quotes, auto-rotate carousel |
| Newsletter | `Newsletter.tsx` | dark/light variant, Formspree wired, validation |
| ProductCardGrid | `ProductCardGrid.tsx` | Grid with QuickView modal, clickable cards |
| QuickView | `QuickView.tsx` | Modal, Escape key, specs, tags |
| animations | `animations.tsx` | 10 framer-motion wrappers (FadeIn, SlideIn, etc.) |
| icons | `icons.tsx` | 5 SVG icons (not used — Footer uses inline paths) |

## Data
- `src/lib/products.ts` — 6 products with full specs, features, images
- `src/lib/basePath.ts` — `/power2go` prefix for prod
- `src/lib/utils.ts` — `cn()` helper
- `src/lib/blog.ts` — 6 blog articles with full content, categories, related articles

## SEO / Static Files
- `public/robots.txt`, `sitemap.xml`, `manifest.webmanifest` — all present
- Layout has full openGraph, twitter, robots, appleWebApp metadata
- FAQ page includes FAQPage JSON-LD schema
- Blog article pages include Article JSON-LD schema

## Formspree Integration (needs configuration)
- `contact/page.tsx`: POST to `https://formspree.io/f/yourFormID` (line 3)
- `newsletter.tsx`: POST to `https://formspree.io/f/yourNewsletterFormID`
- Replace `yourFormID` / `yourNewsletterFormID` with actual Formspree form IDs before deploying

## Google Maps (needs configuration)
- `contact/page.tsx`: `YOUR_GOOGLE_MAPS_KEY` placeholder in embed URLs (line 48-49)

## Known Issues (not yet fixed)
- Products page category filter buttons are visual-only (no interactivity)
- ProductCardGrid uses dynamic `lg:grid-cols-${columns}` — not supported by Tailwind v4
- Dead CSS in globals.css: `.hero-gradient`, `.page-hero`, `.glass`, `.glass-dark`, `.bg-section`, `.text-gradient`, `.text-gradient-green`, `.animate-float`, `.animate-pulse-glow`, `.animate-rotate-in`
- Static sitemap (not dynamic via `generateSitemaps`)
- icons.tsx exports are imported nowhere

## Build
```powershell
npm run build   # static export to `out/`
```

## Git History
```
332d1db Add GitHub Pages deployment
f004156 Fix GitHub Pages image paths
e39f824 Fix GitHub Pages image paths
bccf0ef Add GitHub Pages deployment
460613e Initial Power2Go website
```
