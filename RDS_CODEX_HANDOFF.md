# RDS Home Solutions Codex Handoff

Use this file to continue the RDS Home Solutions website project from a new computer or a new Codex chat.

## Project Location

- GitHub repo: https://github.com/ClearestLedger/rds-home-solutions-website.git
- Netlify live URL: https://tourmaline-cascaron-5ce6fd.netlify.app/
- Main branch: `main`

## Current Website Status

The site is a static production website built with:

- `index.html`
- `styles.css`
- `script.js`
- Local assets under `assets/images/`

The site is connected to Netlify through GitHub. Changes pushed to `main` should trigger a Netlify redeploy.

## Brand And Business Facts

- Business name: RDS Home Solutions
- Primary positioning: premium painting, wood finishing, remodeling, and home improvement services for Florida homes
- Main services: exterior painting, interior painting, outdoor wood stain and exterior finishes, remodeling and home improvement, commercial painting
- Business style: local, professional, family-owned, owner-operated, friendly, clean, high-end finish quality
- Licensed wording was removed; keep only insured unless the owner asks otherwise
- No testimonials yet
- No office/storefront location listed
- Service area: Sarasota, Bradenton, Lakewood Ranch, Venice, North Port, Port Charlotte, Englewood, Cape Coral, Fort Myers, St. Petersburg, Tampa, and nearby Florida communities
- Danielle phone: 941-258-5639
- Rafael phone: 941-960-6598
- Rafael WhatsApp: https://wa.me/19419606598
- Email: rdshomesolutions11@gmail.com

## Current Design Decisions

- Hero uses the RDS logo and a bright premium Florida residential direction.
- Homepage headline: "Premium Painting, Wood Finishing & Home Improvements for Florida Homes"
- Financing remains visible near the top of the homepage.
- Services are organized around painting, wood finishing, remodeling, and commercial work.
- The homepage includes a motion benefit slider titled "Why Florida Homeowners Choose RDS."
- The bottom-right Ask RDS widget offers quick actions for estimates, financing, calling Danielle, contacting Rafael, and viewing services.
- The project gallery uses layered category tabs so only one polished category image is active at a time.
- No large exposed gallery dump appears on the homepage.
- Meet RDS is text-only with Danielle and Rafael bios displayed. No team photos are currently displayed.
- Eduardo was removed from the public team section.

## Current Service Categories

1. Exterior Painting
2. Outdoor Wood Stain & Exterior Finishes
3. Interior Painting
4. Remodeling & Home Improvement
5. Commercial Painting

## Photo Organization

Website gallery images are stored in:

- `assets/images/service-galleries/01-exterior-painting/`
- `assets/images/service-galleries/04-floors/`
- `assets/images/service-galleries/05-wood-stain/`
- `assets/images/service-galleries/06-interior-finish-work/`
- `assets/images/service-galleries/07-kitchen-remodeling/`
- `assets/images/service-galleries/08-bathroom-remodeling/`

If future image folders are added, copy or optimize selected images into the repo before referencing them in `index.html`.

## How To Continue On A New Computer

1. Install Git if it is not installed.
2. Open PowerShell.
3. Run:

```powershell
cd $env:USERPROFILE\Desktop
git clone https://github.com/ClearestLedger/rds-home-solutions-website.git
cd rds-home-solutions-website
```

4. Open this folder in Codex on the new computer.
5. If the old chat is not visible, paste this instruction into the new Codex chat:

```text
Continue the RDS Home Solutions website from this repo. First read RDS_CODEX_HANDOFF.md, then inspect index.html, styles.css, script.js, and assets/images. Preserve the current production site. Do not invent business details. Make only requested edits, verify locally, commit, and push to GitHub main so Netlify redeploys.
```

## Local Preview

The site is static. From the repo folder, either open `index.html` in a browser or run a local server:

```powershell
python -m http.server 4177
```

Then open:

```text
http://127.0.0.1:4177/
```

## Verification Checklist Before Pushing

Run:

```powershell
node --check script.js
git diff --check
git status --short
```

Also visually check:

- Desktop hero
- Mobile hero/menu
- Layered project category tabs
- Contact form
- Estimate and financing CTAs

## Deployment Notes

- Commit changes locally.
- Push to GitHub `main`.
- Netlify should automatically publish.
- After pushing, check the live Netlify URL.
