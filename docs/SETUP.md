# Setup guide — Academic site (Jekyll + GitHub Pages)

## Run locally

1. **Install Ruby** (if needed). On macOS: `brew install ruby` or use system Ruby. Jekyll 3.9 needs Ruby ≥ 2.4.

2. **Install Bundler and dependencies:**
   ```bash
   cd academic-site
   gem install bundler
   bundle install
   ```

3. **Add your PDFs** (see [Content update guide](CONTENT_UPDATE.md)):
   - Copy `Amit_Zac_CV_August.pdf` into `assets/cv/`.
   - Copy publication PDFs into `assets/pdfs/` using the filenames listed in `_data/publications.yml` (see the `pdf:` field for each entry).

4. **Serve the site:**
   ```bash
   bundle exec jekyll serve
   ```
   Open [http://127.0.0.1:4000](http://127.0.0.1:4000).

5. **Production build:**
   ```bash
   bundle exec jekyll build
   ```
   Output is in `_site/`.

## Deploy on GitHub Pages

1. **Create a GitHub repository** (e.g. `amitzac.github.io` for a user site, or `academic-site` for a project site).

2. **Push this folder** to the repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: academic site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Repo → **Settings** → **Pages**.
   - Source: **Deploy from a branch**.
   - Branch: **main** (or **master**), folder: **/ (root)**.
   - Save. The site will be at `https://YOUR_USERNAME.github.io` or `https://YOUR_USERNAME.github.io/YOUR_REPO/`.

4. **Set `baseurl` and `url` in `_config.yml`:**
   - User site (`amitzac.github.io`): `baseurl: ""`, `url: "https://amitzac.github.io"`.
   - Project site: `baseurl: "/academic-site"`, `url: "https://amitzac.github.io"` (replace with your repo name and username).

GitHub builds with Jekyll automatically. The theme and plugins used are supported on GitHub Pages.
