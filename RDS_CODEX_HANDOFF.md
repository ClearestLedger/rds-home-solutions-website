# RDS Home Solutions Codex Handoff

Use this file to continue the RDS Home Solutions website project from a new computer or a new Codex chat.

## Project Location

- GitHub repo: https://github.com/ClearestLedger/rds-home-solutions-website.git
- Netlify live URL: https://tourmaline-cascaron-5ce6fd.netlify.app/
- Main branch: `main`
- Latest known commit at handoff: `3f18787 Refine services and text-only leadership bios`

## Current Website Status

The site is a static production website built with:

- `index.html`
- `styles.css`
- `script.js`
- Local assets under `assets/images/`

The site is connected to Netlify through GitHub. Changes pushed to `main` should trigger a Netlify redeploy.

## Brand And Business Facts

- Business name: RDS Home Solutions
- Main service: residential and commercial painting
- Additional services: floors, wood stain and finishing, interior finish work, kitchen remodeling, bathroom remodeling
- Business style: local, professional, family-owned, owner-operated, friendly, clean, high-end finish quality
- Licensed wording was removed; keep only insured unless the owner asks otherwise
- No testimonials yet
- No office/storefront location listed
- Service area: Sarasota and surrounding areas, from Fort Myers to Tampa
- Contact:
  - Danielle: 941-258-5639
  - Rafael: 941-960-6598
  - Email: rdshomesulutions11@gmail.com
  - WhatsApp uses the same numbers

## Current Design Decisions

- Hero uses the RDS white logo over a real project background.
- The orange flowing hero line has been removed.
- Service boxes are smaller/tighter than the first large version.
- Eight service boxes open into galleries.
- Service numbers are hidden from the boxes.
- The old standalone Selected Work / Before & After Gallery section was removed.
- Meet RDS is text-only with bios for Danielle and Rafael only. No team photos are currently displayed.
- Eduardo was removed from the public team section.

## Current Services

1. Exterior Painting
2. Interior Painting
3. Commercial Painting
4. Floors
5. Wood Stain & Finishing
6. Interior Finish Work
7. Kitchen Remodeling
8. Bathroom Remodeling

## Photo Organization

Website gallery images are stored in:

- `assets/images/service-galleries/01-exterior-painting/`
- `assets/images/service-galleries/04-floors/`
- `assets/images/service-galleries/05-wood-stain/`
- `assets/images/service-galleries/06-interior-finish-work/`
- `assets/images/service-galleries/07-kitchen-remodeling/`
- `assets/images/service-galleries/08-bathroom-remodeling/`

Original sorted source images were previously placed on the old computer under:

`C:\Users\danie\OneDrive\Desktop\RDS_PHOTOS_TO_ADD_TO_WEBSITE\`

If future image folders are added, copy/optimize selected images into the repo before referencing them in `index.html`.

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
- Service boxes
- Opened gallery behavior
- Contact form
- Meet RDS text-only bio section

## Deployment Notes

- Commit changes locally.
- Push to GitHub `main`.
- Netlify should automatically publish.
- After pushing, check the live Netlify URL.

