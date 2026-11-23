# remiboissise.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/d5bf659e-aec3-4a95-88cd-0201c86d93ad/deploy-status)](https://app.netlify.com/sites/remiboissise/deploys)

Personal website built with Gatsby 5 and React 18.

## Requirements

Node.js 24 (see `.nvmrc`; Gatsby 5 supports Node 18 to 25).

## Commands

| Command | |
|---|---|
| `npm ci` | Install the dependencies from the lockfile |
| `npm run develop` | Development server on http://localhost:8000 |
| `npm run build` | Production build in `public/` |
| `npm run check` | Check the generated pages (lang, meta description, canonical, hreflang, size, no third-party trackers) |
| `npm test` | Build, then check |
| `npm run format` | Format the JavaScript and JSON files with Prettier |

## Content

- Texts: `src/locales/en.json` and `src/locales/fr.json`
- Projects: `data/projets.js`
- Career timeline: `data/parcours.js`
- Links, e-mail, resume: `data/config.js`

English pages keep their historical URLs (`/`, `/projects/`, `/contact/`); French pages are generated under `/fr/` by `gatsby-node.js`.

## Deployment

Netlify, configured by `netlify.toml`. HTTP security headers (CSP, HSTS…) are declared in `gatsby-config.js` (`headers`) and applied by Gatsby's Netlify adapter.
