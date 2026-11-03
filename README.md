# B Ghost

Artist site for B Ghost — [bghosting.co](https://www.bghosting.co). Static HTML/CSS on Vercel, with content managed in Sanity.

## Structure

| Path | What it is |
| --- | --- |
| `index.html` | Home page: hero video, nav, release card, management footer |
| `tour.html` | Tour dates, served at `/tour` |
| `epk.html` | Electronic press kit, served at `/epk` |
| `style.css` | Shared styles |
| `assets/` | Fallback media, logos, favicons, OG image |
| `studio/` | Sanity Studio (schemas + config) |
| `.claude/devserver.py` | Local static server that mimics Vercel's `cleanUrls` |
| `vercel.json` | Vercel config (`cleanUrls`) |

There is no build step. The HTML files are deployed as-is.

## Content (Sanity)

Content is edited in Sanity, not in the HTML.

- **Project:** `tabkldbj` ("B Ghost"), dataset `production`
- **Studio:** [bghost.sanity.studio](https://bghost.sanity.studio), or through the sanity.io dashboard
- **Documents:**
  - **Home Page** (singleton, id `homepage`) — hero title/video/image, nav links, footer, release card (label, title, URL, cover image)
  - **Tour Dates** (`tourDate`) — event, date, link label, optional link URL

Each page fetches its content in the browser from the public CDN API (`tabkldbj.apicdn.sanity.io`). The values written into the HTML are fallbacks: they show if the fetch fails, or if a field is empty or not yet published.

- Only **published** documents are returned. Drafts never reach the site.
- New images and video belong in Sanity, not in `assets/`. Media is not committed to git.

## Run locally

```bash
python3 .claude/devserver.py
```

This serves the site at http://localhost:4401, and `/tour` and `/epk` resolve like they do on Vercel. In Claude Code, the same server is defined in `.claude/launch.json` as `bghost`.

The browser fetches content straight from Sanity, so the local origin must be on the project's CORS list. Currently allowed origins:

- `http://localhost:3000`
- `http://localhost:3333` (Studio dev)
- `https://bghosting.co`, `https://www.bghosting.co`

To add the local port:

```bash
cd studio && npx sanity cors add http://localhost:4401 --no-credentials
```

## Studio

```bash
cd studio
npm install
npm run dev      # http://localhost:3333
npm run deploy   # publishes the Studio to bghost.sanity.studio
```

Schemas live in `studio/schemaTypes/`. A new field only shows on the site once the matching page script reads it.

## Deploy

The site is hosted on Vercel. The repo is `briannalh/bghost`. Studio deploys separately with `npm run deploy`.

## Analytics

Google Analytics (`G-RDJZB9TWWY`) is loaded in the `<head>` of each page.
