# NexusAI — SaaS Landing Page

A modern, conversion-oriented marketing site for **NexusAI**, a fictional AI-powered product workflow platform that helps teams ship faster.

**Repo:** [github.com/Kerd3/nexusai-landing](https://github.com/Kerd3/nexusai-landing)

---

## What's in this repo

| File | Description |
|------|-------------|
| `README.md` | This file |
| `app.js` | Pricing calculator + hash router + form handlers |

The full single-file landing page (`index.html` with embedded CSS) was built in the project workspace. To complete the repo, add `index.html` (and optionally `styles.css` if you split assets).

---

## Features (full page)

- Bold hero, sticky nav, mobile menu
- Feature grid, How it works, Integrations
- **Interactive pricing calculator** (seats slider, monthly/annual, plan recommendation)
- Pricing tiers, testimonials, email CTA
- Hash-routed pages: About, Blog, Careers, Contact, Changelog, Privacy, Terms, Security
- Fully responsive, no build step, no dependencies

---

## Quick start (once `index.html` is present)

```bash
git clone https://github.com/Kerd3/nexusai-landing.git
cd nexusai-landing
npx serve .
# open http://localhost:3000
```

### GitHub Pages

1. **Settings → Pages**
2. Source: branch `main`, folder `/ (root)`
3. Site: `https://kerd3.github.io/nexusai-landing/`

---

## Hash routes

| Hash | Page |
|------|------|
| `#home` | Landing |
| `#features` `#how` `#integrations` `#pricing` `#testimonials` `#signup` | Landing sections |
| `#about` `#blog` `#careers` `#contact` `#changelog` `#privacy` `#terms` `#security` | Subpages |

---

## License

MIT
