# TrafficBoost AI — Capture Page

Going bold: **Neon-Cyber Tech Noir** direction — deep navy/near-black mesh background, violet (#8b5cf6) + cyan (#06b6d4) gradient accents, Plus Jakarta Sans, glass panels, subtle ping/pulse motion. High-conversion, feels like a modern AI product, not a squeeze page.

## Structure (single route `/`)

1. **Sticky glass nav** — logo, Features / Referral / Login, "Start Free" pill.
2. **Hero (above the fold)** — 7/5 grid.
   - Left: live pulse badge, big gradient headline, subheadline, video player (aspect-video, glass frame, animated play button, "Watch the 90s Demo" label). Placeholder thumbnail image generated for the AI-marketing look, ready to swap for YouTube/Vimeo embed.
   - Right: glass lead-capture card — First Name, Email, Business Type (select), Website URL (optional), primary "Get Instant Access FREE", helper text. Secondary "Watch the Demo" text button. Live-activity toast card underneath.
3. **Trust counters strip** — 4 stats (AI Content, Leads, Countries, Rating), count-up on scroll into view.
4. **Benefits grid** — 10 feature cards (Social Posts, Viral Hooks, Landing Pages, Emails, Blog Posts, Video Scripts, QR Generator, Website Analyzer, AI Business Cards, Referral Rewards) with lucide icons on glass tiles.
5. **Testimonials carousel** — rotating quotes with avatar, name, role, 5-star row; auto-advance + manual arrows.
6. **Referral incentive** — 3 tiers (3 / 10 / 25 friends) with a progress bar preview.
7. **Footer CTA band** — "Ready to Grow Your Business with AI?" + Start Free button.
8. **Footer links** — Privacy Policy, Terms, Contact, Login, Pricing, FAQs.

## Global overlays

- **Sticky floating "Start Free" button** — bottom-right, appears after scrolling past hero.
- **Live activity widget** — bottom-left toast that rotates through sample events every ~5s (Sarah joined, Mike generated a post, Jennifer built a landing page, etc.).
- **Exit-intent popup** — dialog triggered on `mouseleave` toward top of viewport (fires once per session, tracked in `sessionStorage`). Email field + "Send Me The Prompts" CTA.

## Form behavior

- Client-side validation with Zod + react-hook-form (First Name required, Email valid + required, Website URL optional but URL-format if provided, Business Type optional).
- On submit: success toast via `sonner`, form resets. No backend wired yet — stubbed handler with TODO for Lovable Cloud later.

## Technical details

- New route: `src/routes/index.tsx` replaces the placeholder. Sections split into `src/components/landing/*.tsx` (Hero, VideoPlayer, LeadForm, TrustCounters, Benefits, Testimonials, Referral, FooterCTA, StickyCTA, LiveActivity, ExitIntent).
- Design tokens added to `src/styles.css`: `--brand`, `--brand-glow`, `--accent-cyan`, mesh gradient utility, glass utility, plus `@theme inline` mappings so `bg-brand`, `text-accent-cyan` work. Keep the existing shadcn tokens; add these alongside.
- Load Plus Jakarta Sans via `<link>` in `src/routes/__root.tsx` head (not `@import` in CSS). Set it as `--font-sans` in `@theme`.
- Update `__root.tsx` head metadata: real title "TrafficBoost AI — Get More Traffic, Leads & Sales with AI", matching description, og:*, twitter:card. Add per-route head on `/` with self-referential canonical + og:url.
- Count-up: lightweight hook using `IntersectionObserver` + `requestAnimationFrame`, no extra deps.
- Testimonials carousel: reuse existing `src/components/ui/carousel.tsx` (Embla).
- Exit intent: `useEffect` listener on `document`, `mouseleave` with `e.clientY <= 0`, guard with `sessionStorage` flag.
- Hero video thumbnail: generate one image via `imagegen` (AI marketing / analytics dashboard vibe) saved to `src/assets/`, imported as ES6.
- Icons via `lucide-react` (already available).
- Toasts via `sonner` (modern stack). Add `<Toaster />` to `__root.tsx` if not present.

## Out of scope (not requested, will not build)

- Real auth, database persistence, email delivery, referral tracking — page is UI-only, hooks stubbed for future Lovable Cloud wiring.
- Separate `/pricing`, `/faq`, `/login`, `/privacy`, `/terms`, `/contact` routes — footer links point to `#` placeholders. Say the word if you want any of these as real pages.
