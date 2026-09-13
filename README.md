# Paris, together · 2026

A Hebrew, right-to-left family travel planner with ten daily itineraries, traveler filters, alternative plans, maps, and original travel documents.

## Local preview

```sh
python3 -m http.server 4173 --directory dist
```

## Validation

```sh
npm run check
npm test
```

No dependency installation or build step is needed. All website files live in `dist/`. Relative asset URLs support both domain-root hosting and a GitHub Pages project URL.

## GitHub Pages deployment

Website: [Paris, together](https://bysdan42.github.io/paris-family-trip-2026/).

Public publication of this site and its original travel documents was approved by the owner on September 10, 2026. GitHub Pages uses GitHub Actions. To publish updates, run the **Deploy trip site to GitHub Pages** workflow manually and confirm the deployment succeeds.

## Photo

The Paris photograph is by Anthony DELANOIX and distributed under CC0. [Original and license](https://commons.wikimedia.org/wiki/File:Seine_and_Eiffel_Tower_in_Fall_in_2016.jpg).

## Russian edition

`dist/ru.html` provides the complete Russian interface and itinerary. Both languages share styles and source documents. The language switch preserves the selected day, traveler, tab, route and document-library view.

Update Hebrew itinerary text in `dist/data.js`, then add its Russian equivalent in `dist/locales/ru.json`. Interface and static-page translations live in `dist/locales/ui.ru.json`. Run `npm run build:ru` to regenerate `ru.html`, `app.ru.js` and `data.ru.js`; do not edit generated files directly. `npm run check` rejects missing translations and stale generated files. No extra dependencies are required.

The owner approved public publication of both language editions, the Edgar booking details and the redacted confirmation PDF on September 13, 2026.
