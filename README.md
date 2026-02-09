# Amit Zac — Academic website

Personal academic site built with **Jekyll** for **GitHub Pages**. Clean, accessible, mobile-first, with publications, CV, research, teaching, and contact pages.

## Quick start

```bash
bundle install
bundle exec jekyll serve
```

Open [http://127.0.0.1:4000](http://127.0.0.1:4000).

## Docs

- **[SETUP.md](docs/SETUP.md)** — Run locally, deploy on GitHub Pages
- **[CONTENT_UPDATE.md](docs/CONTENT_UPDATE.md)** — Add publications, update CV
- **[BUILD_REPORT.md](docs/BUILD_REPORT.md)** — What was extracted, manual steps
- **[INSPIRATION_AND_DESIGN.md](docs/INSPIRATION_AND_DESIGN.md)** — Design directions and choices

## Structure

- Content: `_data/` (cv, publications), `_publications/` (detail pages), and `*/index.md` pages
- Layouts: `_layouts/`, `_includes/`
- Assets: `assets/css/`, `assets/js/`, `assets/cv/`, `assets/pdfs/`

PDFs are already in `assets/cv/` and `assets/pdfs/`. Set `url` and `baseurl` in `_config.yml` for your GitHub Pages URL.
