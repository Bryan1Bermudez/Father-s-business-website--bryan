# Father's Business Website

Website for a family construction business specializing in **floor tile**, **bathroom remodels**, and (new) **pools**.

Status: **draft.** Design chosen and basic business info filled in. Photos, reviews, service area and a few details are still placeholders. See [`CONTENT-NEEDED.md`](CONTENT-NEEDED.md).

## How it's built

Plain HTML, CSS and JavaScript. No build tools and nothing to install, so it's easy to edit and free to host.

```
index.html          the whole site (one page with sections)
css/styles.css      all styling (colors and fonts are variables at the top)
js/main.js          mobile menu, gallery filter, contact form
images/             put real project photos here
mockups/            screenshots of the design
CONTENT-NEEDED.md   checklist of info to collect
```

### Page sections
Header, Hero, Services (Tile / Bathrooms / Pools), Why Us, Project Gallery (with filters),
How It Works, About the Owner, Reviews, Contact form + info, Footer.

## Viewing it

Double-click `index.html` to open it in a browser. Or run a tiny local server:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

### Preview trick
Add `?todo` to the address (`index.html?todo`) to highlight every placeholder still waiting on real info.

## Design

The **Craftsman** direction was chosen: warm terracotta, cream and deep green, with Fraunces
(serif) headings and Source Sans 3 body text. To tweak colors or fonts, edit the variables in
the `:root` block at the top of `css/styles.css`. Screenshots are in [`mockups/`](mockups/).

## Adding real photos

Put photos in `images/` (compress them first, under ~300 KB each is ideal), then replace a
placeholder in the gallery:

```html
<figure class="shot wide" data-cat="tile">
  <img src="images/kitchen-floor.jpg" alt="Large-format porcelain tile kitchen floor">
  <figcaption><span class="shot-cat">Floor Tile</span>Kitchen floor, Springfield</figcaption>
</figure>
```

`data-cat` must be `tile`, `bath`, or `pool` so the filter buttons work.

## Live site (GitHub Pages)

**https://bryan1bermudez.github.io/Father-s-business-website--bryan/**

GitHub Pages serves the **`gh-pages`** branch. To publish changes, update `main` and then push it to `gh-pages`:

```bash
git push origin main main:gh-pages
```

A custom domain (e.g. `bermudeztile.com`, about $10–20 a year) can be connected later under **Settings → Pages**.

## Still to do
- [ ] Fill in real business info (see `CONTENT-NEEDED.md`)
- [x] Choose a design direction (Craftsman)
- [ ] Add real project photos and an owner photo
- [ ] Connect the contact form to an email service (e.g. [Formspree](https://formspree.io), free tier)
- [ ] Logo (or keep the tile icon)
- [ ] Google Business Profile, linked from the site
- [ ] Optional: Spanish version of the site
