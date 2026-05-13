# RDS Home Solutions Website

Production-ready static website for RDS Home Solutions, focused on premium painting, wood finishing, remodeling, and home improvement services for Florida homes.

## Confirmed Business Details

- Business: RDS Home Solutions
- Business base: Sarasota area
- Service area: Sarasota and surrounding areas, from Fort Myers to Tampa
- Status: Insured
- Primary services: exterior painting, interior painting, outdoor wood stain and exterior finishes, remodeling and home improvement, commercial painting
- Email: rdshomesolutions11@gmail.com
- Contact phone: +1 (941) 258-5639
- Instagram: https://www.instagram.com/rds.home.solutions/
- Facebook: https://www.facebook.com/RSDRomesolutions

## Publishing

The site is a static HTML/CSS/JavaScript project connected to Netlify through GitHub. Changes pushed to `main` should trigger a Netlify redeploy.

## Core Files

- `index.html`
- `styles.css`
- `script.js`
- `assets/images/`

## Asset Notes

Project images live under `assets/images/`. The homepage uses controlled category previews instead of a long exposed gallery.

Recommended folders for future images:

- `assets/images/exterior-paint/`
- `assets/images/interior-paint/`
- `assets/images/wood-stain/`
- `assets/images/kitchen/`
- `assets/images/bathroom/`
- `assets/images/flooring/`
- `assets/images/epoxy-floors/`
- `assets/images/commercial-painting/`
- `assets/images/remodeling/`
- `assets/images/before-after/`

## Local Preview

The site is static. From the repo folder, either open `index.html` in a browser or run:

```powershell
python -m http.server 4177
```

Then open:

```text
http://127.0.0.1:4177/
```

## Verification Checklist

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
