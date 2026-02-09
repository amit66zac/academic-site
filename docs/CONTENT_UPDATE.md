# Content update guide

## Add a new publication

1. **Add an entry to `_data/publications.yml`** (copy an existing block and edit):
   - `id`: unique slug (e.g. `my-paper-2025`); use this as the filename for the collection document (step 2).
   - `title`, `authors`, `venue`, `year`, `type` (journal / conference / chapter / other).
   - Optional: `volume`, `pages`, `doi`, `link`, `abstract`, `status` (e.g. forthcoming).
   - `pdf`: filename only (e.g. `My Paper.pdf`). The file must sit in `assets/pdfs/` with that exact name.

2. **Create a detail page** so the publication has its own URL:
   - Add a file `_publications/MY-ID.md` (e.g. `_publications/my-paper-2025.md`).
   - Front matter should match the YAML entry, e.g.:
     ```yaml
     ---
     layout: publication
     title: "Your Title"
     authors: "Author One, Author Two"
     venue: "Journal Name"
     year: 2025
     type: journal
     pdf: "My Paper.pdf"
     link: "https://..."
     abstract: ""
     ---
     ```
   - Leave the body empty.

3. **Add the PDF** (optional): put `My Paper.pdf` in `assets/pdfs/`. The site will link to it automatically if `pdf:` matches the filename.

## Update CV

- **Web CV:** edit `_data/cv.yml`. Sections: `person`, `education`, `appointments`, `professional`, `grants`, `teaching`, `awards`, `service`, `skills`.
- **Downloadable PDF:** replace the file in `assets/cv/` with your new PDF. Keep the filename the same as in `_config.yml` (`cv_pdf`), or update `cv_pdf` in `_config.yml` to the new filename.

## Update site title, description, contact

- In `_config.yml`: `title`, `description`, `email`, `url`, `baseurl`, `google_scholar`, `uva_profile`, `cv_pdf`.

## Add or edit pages

- **Home:** content is in `_layouts/home.html` and `index.md`.
- **Other pages:** edit the corresponding `index.md` under `publications/`, `cv/`, `research/`, `teaching/`, `contact/`.

## Abstracts

To show an abstract on a publication’s detail page, set the `abstract` field in both `_data/publications.yml` and the corresponding `_publications/SLUG.md` file.
