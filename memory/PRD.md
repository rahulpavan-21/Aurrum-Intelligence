# Aurrum Intelligence — PRD

## Problem Statement
Build a one-page, extremely futuristic, classy, and interactive scroll-driven website for
**Aurrum Intelligence** — a market intelligence platform for traders that delivers
institutional-level daily market briefings at minimal pricing.
Tagline (from logo): *Read the market. Trade the edge.*

## Brand
- Primary: `#013aa9` (royal blue)
- Background: `#f7f3e8` (ivory)
- Logo: https://customer-assets.emergentagent.com/job_aurrum-quantum-ui/artifacts/u7r7no9f_Final%20%282%29.png
- Fonts: Playfair Display (display serif), Inter (UI sans), IBM Plex Mono (data)

## Architecture
- FastAPI backend (`/app/backend/server.py`) + MongoDB collections `contact_submissions`, `newsletter`
- React 19 frontend with Lenis smooth-scroll, Framer Motion, react-fast-marquee, custom canvas particle network, custom cursor orb, magnetic buttons

## Endpoints
- `GET /api/health`
- `GET /api/market-snapshot` — static illustrative ticker feed
- `POST /api/contact`, `GET /api/contact`
- `POST /api/subscribe` (idempotent by email)

## Sections implemented
1. Navbar (glass on scroll) + mobile menu
2. Hero — animated letter reveal of "Read the market. Trade the edge.", magnetic CTAs, live UTC clock, geo meta, dashed signature chart, particle network
3. Market ticker (inverted deep-blue) — marquee of live-feel symbols
4. About — sticky pull-quote + editorial lede + three stats
5. Services — bento grid (5 products, hover corner brackets + underline draw)
6. How It Works — inverted section, sticky rotating index + 4 sticky-scroll steps
7. Sample Briefing — mock magazine-style briefing card w/ dashed chart
8. Pricing — dramatic $29 number + 6 features in inverted half
9. Team — 3 desk portraits (monochrome→color hover)
10. Contact — inverted section, form (name/email/trading-style pills/message) → `/api/contact`
11. Footer — logo + navigate + newsletter → `/api/subscribe`

## Testing
- Iteration 1: 100% backend, 100% frontend (`/app/test_reports/iteration_1.json`)
- Custom cursor orb, magnetic buttons, particle network, parallax, sticky-scroll all working

## Personas
- Independent / prop traders seeking institutional research at retail pricing
- Analysts / newsletter subscribers curious about the desk

## Backlog (P0/P1/P2)
- P1: Wire Stripe checkout for the $29 subscription (currently CTA scrolls to contact)
- P1: Replace static `/api/market-snapshot` with a real feed (Alpha Vantage / CoinGecko)
- P2: Add real email delivery via Resend/SendGrid for contact & newsletter confirmations
- P2: Add a public P&L ledger page linked from How It Works step 04
- P2: Add SEO/OG tags, sitemap, robots.txt

## Notes
- Contact endpoint has no auth — safe for internal testing; secure or remove before prod
- ISO datetime stored in Mongo — consider native BSON datetime later
