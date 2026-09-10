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

The Pages workflow is manually triggered. Public deployment has not been enabled or approved yet. This repository contains original travel documents and private booking details; a Pages deployment can expose those files even if the repository is private.

After the owner explicitly approves the publication audience and content:

1. Configure Settings → Pages → Source as GitHub Actions, on an eligible GitHub plan or public repository.
2. Run the **Deploy trip site to GitHub Pages** workflow.
3. Confirm the deployment succeeded before sharing its URL.

## Photo

The Paris photograph is by Anthony DELANOIX and distributed under CC0. [Original and license](https://commons.wikimedia.org/wiki/File:Seine_and_Eiffel_Tower_in_Fall_in_2016.jpg).
