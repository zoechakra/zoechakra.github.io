## Goal

Use the uploaded AR molecule screenshot as the thumbnail on the `air_pollutant_forecaster` project card.

## Changes

- Upload the image to CDN storage via Lovable Assets, producing `src/assets/air-pollutant-forecaster.png.asset.json` (no binary added to the repo).
- In `src/data/portfolio.ts`, import that pointer and set on the Air Pollutant Forecaster entry:
  - `image: arAsset.url`
  - `imageAlt: "AR view of a 3D nitrogen dioxide molecule model"`

## Notes

No layout changes needed — `ProjectsOutput.tsx` already renders an image column on the right when `image` is set, keeping the tech-stack tags and bottom-left "view repo ↗" exactly where they are.
