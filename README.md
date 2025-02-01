# Tarot Card Pull Prototype

A simple Eleventy site to randomly pull a tarot card from a set defined in markdown files.

## Conventions & Structure

- **Cards:** Markdown files in `src/cards/`. Each must include front matter with a `title`.
- **Layouts:** Base layout in `src/layouts/base.njk` with linked CSS.
- **Styles:** `src/styles.css` provides modern, clean styling.
- **Index:** `src/index.html` displays a button that picks a random card.

## Usage

1. **Local Development:**  
   Run `npm install` then `npm run start` to serve locally.

2. **Adding Cards:**  
   Create new markdown files in `src/cards/` with front matter (e.g., `title: "Card Name"`).  
   Optionally add an `image` key later; update templates to render it.

3. **Deployment:**  
   Push the repo to GitHub and connect via Netlify.  
   Set build command: `npm run build` and publish directory: `_site`.

## Assumptions

- Cards are defined in markdown with front matter.
- No image handling yet; design allows easy addition.
- Minimal debugging expected due to Eleventy’s simplicity.

Additional docs or inline comments can be added as needed.
