# RDS Home Solutions Codex Handoff

Use this file to continue the RDS Home Solutions website project from a new computer or a new Codex chat.

## Project Location

- GitHub repo: https://github.com/ClearestLedger/rds-home-solutions-website.git
- Netlify live URL: https://tourmaline-cascaron-5ce6fd.netlify.app/
- Main branch: `main`
- Latest known commit before the exterior protection repositioning: `ac1de80 Enlarge footer contact links`

## Current Website Status

The site is a static production website built with:

- `index.html`
- `styles.css`
- `script.js`
- Local assets under `assets/images/`

The site is connected to Netlify through GitHub. Changes pushed to `main` should trigger a Netlify redeploy.

## Brand And Business Facts

- Business name: RDS Home Solutions
- Primary positioning: premium exterior painting and stucco coating systems for Florida homes
- Flagship services: exterior painting, stucco repair and surface preparation, premium exterior coating systems, heat-reflective coating options, waterproofing masonry coating preparation
- Additional services: interior painting, commercial painting, floors, wood stain and finishing, interior finish work, kitchen remodeling, bathroom remodeling, repairs/drywall, pressure washing/surface cleaning where appropriate to the project scope
- Business style: local, professional, family-owned, owner-operated, friendly, clean, high-end finish quality
- Licensed wording was removed; keep only insured unless the owner asks otherwise
- No testimonials yet
- No office/storefront location listed
- Service area: Sarasota and surrounding areas, from Fort Myers to Tampa
- Contact:
  - Phone: +1 (941) 258-5639
  - Email: rdshomesolutions11@gmail.com
  - WhatsApp uses the listed contact number

## Current Design Decisions

- Hero uses the RDS white logo over a real project background.
- Hero now leads with premium exterior painting and stucco coating systems for Florida homes.
- Financing is visible near the top of the homepage.
- The homepage includes The RDS Exterior Protection System process section.
- Services are organized into a flagship exterior protection card grid, secondary service card grid, and project galleries.
- The orange flowing hero line has been removed.
- Service boxes are smaller/tighter than the first large version.
- Eight service boxes open into galleries.
- Service numbers are hidden from the boxes.
- The old standalone Selected Work / Before & After Gallery section was removed.
- Meet RDS is text-only with Danielle's bio displayed. No team photos are currently displayed.
- Eduardo was removed from the public team section.

## Current Services

Flagship service line:

1. Exterior Painting
2. Stucco Repair & Surface Preparation
3. Premium Exterior Coating Systems
4. Heat-Reflective Coating Options
5. Waterproofing Masonry Coating Preparation

Supporting services:

1. Interior Painting
2. Remodeling
3. Repairs / Drywall
4. Pressure Washing / Surface Cleaning
5. Commercial Painting
6. Floors, Wood Stain & Finishing
7. Kitchen Remodeling
8. Bathroom Remodeling
9. Interior Finish Work

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

