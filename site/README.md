# ccwatch-site

Marketing site for [@terzigolu/ccwatch](https://www.npmjs.com/package/@terzigolu/ccwatch).

This is a self-contained Vite + React + TypeScript project. It does NOT import from the parent ccwatch CLI — it simulates statusline output independently so its lifecycle is decoupled from the CLI version.

## Develop

```bash
cd site
npm install
npm run dev      # http://localhost:5173
npm test         # vitest
npm run build    # → dist/
```

## Deploy

Cloudflare Pages connected to the parent repo. Build settings:
- Build command: `cd site && npm install && npm run build`
- Output directory: `site/dist`
- Root directory: `/` (repo root)

## Structure

See `docs/superpowers/specs/2026-04-27-ccwatch-site-design.md` in the parent repo for the full spec.
