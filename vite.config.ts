// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages build: `STATIC_EXPORT=1 BASE_PATH=/repo-name/ bun run build`
// produces a fully pre-rendered static site in .output/public.
const staticExport = process.env["STATIC_EXPORT"] === "1";
const basePath = process.env["BASE_PATH"] || "/";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(staticExport
      ? {
          prerender: { enabled: true, crawlLinks: true },
          pages: [{ path: "/", prerender: { enabled: true } }],
        }
      : {}),
  },
  ...(staticExport
    ? { vite: { base: basePath }, nitro: { preset: "static" } }
    : {}),
});
