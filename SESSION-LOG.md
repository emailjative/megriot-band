# Meg Riot - Session History

## Project
- Punk rock band website for "Meg Riot" from Almada, Portugal
- Next.js app, deployed via Vercel at https://megriot.vercel.app
- GitHub repo: https://github.com/emailjative/megriot-band
- Vercel project: megriot/band-page

## Environment
- Ubuntu in VMware, Shift+select workaround for copy/paste
- nvm with Node v20.20.2 required for builds
- `gh auth login` for GitHub, Vercel CLI installed globally via npm
- Vercel CLI deploys sometimes hang but still go through
- Vercel alias sometimes sticks to old deployments — fix with `echo "y" | npx vercel alias set <deploy-url> megriot.vercel.app`
- Must always use `source ~/.nvm/nvm.sh && nvm use 20` before running vercel CLI

## Branches
- `main` — live production
- `v7` — dark/light toggle, profile cards, YouTube embed, TBD tour
- `v8` — dark-only, YouTube on top + pill links
- `v9` — current live version (dark only, no toggle, profile cards)
- v2, v3, v4, v5, v6 — deleted

## Current Live State (v9)
- Dark mode only (no toggle)
- White text on transparent/semi-transparent dark sections
- Logo background on body (cover, fixed on desktop)
- Section overlays: rgba(0,0,0,0.5) on desktop, rgba(0,0,0,0.3) on mobile
- EN/PT language switcher (state-based)
- YouTube embed in Media section
- Social profile cards: Instagram, YouTube, TikTok (hover:scale-105)
- TBD tour date
- Merch: T-Shirt 15€, order via Instagram
- Contact: DM on Instagram

## Key Files
- `src/app/page.tsx` — main page component
- `src/app/globals.css` — body background, section-overlay styles
- `src/app/layout.tsx` — root layout with Geist fonts
- `public/` — megriot-logo.jpeg (1170x1148), megband.jpg, merch1.jpeg, merch2.jpeg

## Decisions Made
- Removed white/light theme entirely
- Removed dark/light toggle
- Profile cards with platform branding (Instagram gradient, YouTube red, TikTok black)
- YouTube video embed above social cards
- TBD for tour (removed Punks & Pints venue)
