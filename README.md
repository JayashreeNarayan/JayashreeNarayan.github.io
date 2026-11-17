# jayashreenarayan.github.io

Source for my personal website: https://jayashreenarayan.github.io/

A single-page Jekyll site. Pushing to `main` builds and deploys it automatically.

## Where things are

| What | File |
|---|---|
| About text, subtitle, photo | `index.md` |
| News (one file per item, one line each) | `_news/` |
| Publications | `_bibliography/papers.bib` |
| CV timeline (one entry per year) | `_data/timeline.yml` |
| Social links in the footer | `_data/socials.yml` |
| Page design, colours, font | `_layouts/onepage.liquid` |
| Images (photo, favicon) | `assets/img/` |

## Preview locally

```sh
bundle install
bundle exec jekyll serve
```

Then open http://127.0.0.1:4000.
