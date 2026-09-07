# NexusAI — SaaS Landing Page

A modern, conversion-oriented marketing site for **NexusAI**, a fictional AI-powered product workflow platform that helps teams ship faster.

**Live structure:** single-page app with hash routing (`#about`, `#pricing`, etc.) so every nav and footer link works without a backend.

---

## Features

- **Bold hero** with gradient headline, social proof, and dual CTAs  
- **Sticky navigation** with blur backdrop and mobile menu  
- **Feature grid** — AI specs, workflows, prioritization, integrations, security, insights  
- **How it works** — 3-step onboarding flow  
- **Integrations** — Slack, GitHub, Linear, Jira, Notion, Figma, Amplitude, Webhooks  
- **Interactive pricing calculator**
  - Seat slider (1–100)
  - Monthly / Annual toggle (20% annual discount)
  - Live total + plan recommendation (Starter / Pro / Enterprise)
- **Pricing tiers** — Starter (free), Pro, Enterprise  
- **Testimonials** from product teams  
- **Email signup CTA** with demo success state  
- **Secondary pages** (hash-routed): About, Blog, Careers, Contact, Changelog, Privacy, Terms, Security  
- **Fully responsive** — mobile, tablet, desktop  

---

## Tech

| Layer | Details |
|-------|---------|
| Markup | Semantic HTML5 |
| Style | Vanilla CSS (custom properties, Grid, Flexbox) |
| Script | Vanilla JS — pricing calculator + hash router |
| Fonts | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |
| Dependencies | None — pure static files |

No build step. Open `index.html` in a browser or serve the folder with any static host.

---

## Quick start

```bash
# Clone
git clone https://github.com/Kerd3/nexusai-landing.git
cd nexusai-landing

# Option A — open directly
open index.html

# Option B — local server (recommended)
npx serve .
# or: python -m http.server 8000
```

Then visit `http://localhost:3000` (or the port your server prints).

### GitHub Pages

1. Repo **Settings → Pages**
2. Source: **Deploy from a branch** → `main` / `/ (root)`
3. Site will be at: `https://kerd3.github.io/nexusai-landing/`

---

## Project layout

```
nexusai-landing/
├── index.html      # Full landing page + hash-routed subpages
└── README.md
```

Secondary routes are implemented inside `index.html` via URL hashes:

| Hash | Page |
|------|------|
| `#home` / `#` | Landing |
| `#features` | Features section |
| `#how` | How it works |
| `#integrations` | Integrations |
| `#pricing` | Pricing + calculator |
| `#testimonials` | Customers |
| `#signup` | Final CTA |
| `#about` | About |
| `#blog` | Blog |
| `#careers` | Careers |
| `#contact` | Contact form |
| `#changelog` | Changelog |
| `#privacy` | Privacy Policy |
| `#terms` | Terms of Service |
| `#security` | Security |

---

## Customization

- **Brand / product name** — search for `NexusAI` and the logo mark `N`
- **Colors** — edit CSS variables in `:root` (`--primary`, `--accent`, `--bg`, etc.)
- **Pricing** — change `PRICE_PER_SEAT_MONTHLY` and `ANNUAL_DISCOUNT` in the calculator script
- **Copy** — update headlines, feature cards, and testimonials in the HTML

---

## License

MIT — feel free to use this as a starting point for your own SaaS landing page.
