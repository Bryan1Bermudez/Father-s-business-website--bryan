# Father's Business Website

Website for a family construction business specializing in **floor tile**, **bathroom remodels**, and (new) **pools**.

Status: **early draft.** The layout and design are in place, but the business details (name, phone, photos, reviews) are still placeholders. See [`CONTENT-NEEDED.md`](CONTENT-NEEDED.md).

## How it's built

Plain HTML, CSS and JavaScript. No build tools and nothing to install, so it's easy to edit and free to host.

```
index.html          the whole site (one page with sections)
css/styles.css      all styling, including the 3 design themes
js/main.js          mobile menu, gallery filter, contact form, theme preview
images/             put real project photos here
mockups/            screenshots of the 3 design directions
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

### Preview tricks
| URL | What it does |
| --- | --- |
| `index.html?theme=modern` | Clean teal and white design (default) |
| `index.html?theme=rugged` | Dark, bold, construction orange |
| `index.html?theme=craftsman` | Warm terracotta, serif headings |
| `index.html?todo` | Highlights every placeholder still waiting on real info |

## Design directions

Screenshots are in [`mockups/`](mockups/). Once one is picked:
1. Set `data-theme="..."` on the `<html>` tag in `index.html`.
2. Delete the other two theme blocks at the top of `css/styles.css`.
3. Trim the Google Fonts link in `index.html` to just that theme's fonts.

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

## Publishing (free) with GitHub Pages

1. On GitHub, go to the repo's **Settings → Pages**.
2. Under "Build and deployment", choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The site will be live at `https://<username>.github.io/<repo-name>/` in a minute or two.
4. Later, a custom domain (e.g. `yourbusiness.com`, about $10–20 a year) can be connected in the same settings page.

## Still to do
- [ ] Fill in real business info (see `CONTENT-NEEDED.md`)
- [ ] Choose a design direction
- [ ] Add real project photos and an owner photo
- [ ] Connect the contact form to an email service (e.g. [Formspree](https://formspree.io), free tier)
- [ ] Logo (or keep the tile icon)
- [ ] Google Business Profile, linked from the site
- [ ] Optional: Spanish version of the site
