## Goal

A single-page portfolio at `/` that renders like a JupyterLab notebook: a fake tab bar + toolbar, a markdown title cell, then code cells whose "outputs" are the portfolio sections — Terminal, About Me, Internships, Projects, Resume, Contact.

## Layout

```text
[ portfolio.ipynb  JupyterLab ]            Python 3 (ipykernel) ●  [☀/☾]
 toolbar: [icons only]                                    [Markdown v]
 --------------------------------------------------------------
 # Zoe Chakraborty  (markdown cell, subtitle placeholder)
 [1]: portfolio.terminal()      -> interactive zsh window
 [2]: portfolio.about()         -> bio output
 [3]: portfolio.internships()   -> internship list output
 [4]: portfolio.projects()      -> project cards output
 [5]: portfolio.resume()        -> resume viewer
 [6]: portfolio.contact()       -> email / LinkedIn / GitHub
```

## Toolbar — icons only, matching the reference

Nine icon buttons, no text, no emoji, evenly spaced, ~16px, dark grey on the light toolbar strip, matching the uploaded reference exactly:

1. Save — rounded-square floppy, **solid/filled** style
2. Plus — thin outline
3. Scissors — thin outline
4. Copy — two thin outlined squares
5. Clipboard — thin outline
6. Run — **filled** right-pointing triangle
7. Stop — **filled** small square
8. Restart — circular arrow (thin outline)
9. Run all — **filled** double right triangle (fast-forward)

Implemented with lucide-react (`Save`, `Plus`, `Scissors`, `Copy`, `Clipboard`, `Play`, `Square`, `RotateCw`, `FastForward`), rendered through one shared `ToolbarButton` wrapper. Play, Square, and FastForward get `fill="currentColor"` so they read solid like the reference; Save uses a filled-body variant. Labels exist only as `aria-label`/tooltips. The `Markdown ▾` dropdown at the right is the only visible text.

Each cell = grey input box with monospace Python source, left gutter `[n]:`, output block below without a gutter box.

## Terminal cell

Interactive fake zsh in a mac-style window (`guest@portfolio — zsh`), blinking caret, command history (↑/↓), click-to-focus. Commands: `help`, `about`, `internships`, `projects`, `resume`, `contact`, `ls`, `whoami`, `clear`, and `open <linkedin|github|email|resume>`. Unknown input prints `zsh: command not found: x`.

## Resume cell

Jupyter-style file preview: bordered viewer embedding the Google Drive file via `https://drive.google.com/file/d/1_1aZV7MccyxO0lCts8XaN8ngUVrDnqLM/preview`, with an "Open in new tab" link to the shared view URL above it and a visible fallback link if the frame is blocked. URL stored in `src/data/portfolio.ts`.

## Content

- **About Me** — placeholder bio text, easy to swap.
- **Internships** — no role titles; company, team, dates only:
  - Royal Bank of Canada — Direct Investing · May–Aug 2026
  - Royal Bank of Canada — Advice Centre / Branch Technology · Jul–Aug 2025
  - IBM — ProjectMax Developer Productivity · Jun–Aug 2024
  - University of Toronto — Climate Informatics · Jul–Aug 2022
- **Projects** — 3 placeholder entries (title, blurb, tags, repo link slot).
- **Contact** — labeled, aligned monospace lines with clickable values:
  - `Email:    ichakra4@jh.edu`
  - `LinkedIn: linkedin.com/in/zoe-chakraborty`
  - `GitHub:   github.com/zoechakra`

## Theme

Light JupyterLab (white bg, `#f5f5f5` cells, orange prompt accents) by default, dark JupyterLab palette via a toggle in the toolbar, saved to localStorage. All colors via semantic tokens in `src/styles.css` — no hardcoded color utilities. JetBrains Mono for code/terminal, clean sans for markdown headings, loaded via `<link>` in `__root.tsx`.

## Technical notes

- Rewrite `src/routes/index.tsx` as the notebook page with its own `head()` (title/description/og/twitter for Zoe's portfolio); update the generic `__root.tsx` defaults too.
- New components under `src/components/notebook/`: `NotebookChrome`, `ToolbarButton`, `Cell`, `TerminalCell`, `AboutOutput`, `InternshipsOutput`, `ProjectsOutput`, `ResumeOutput`, `ContactOutput`, plus `src/lib/terminal-commands.ts` and `src/data/portfolio.ts`.
- Theme toggle: `dark` class on `<html>`, hydration-safe (localStorage read in `useEffect`).
- No backend — static content only.
- Mobile: cells stack, gutter collapses, terminal keeps a tap-to-focus hidden input.
