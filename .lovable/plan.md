# Fix terminal two-column wrapping on mobile

## Problem

Terminal output for `help` (and the `about` facts list) is plain text where the
second column is created with space padding. On a narrow iPhone screen the line
runs out of room and wraps back to the left edge, so descriptions like
"toggle dark / light mode" break underneath the command column and look messy.

## Approach

Make the two-column rows real columns instead of padded text.

- Extend the terminal `Line` type with an optional pair form:
  `{ label: string, desc: string, tone?: ... }` alongside the existing
  `{ text }` form.
- Emit `help` rows and the `about` facts rows as label/desc pairs instead of
  `padEnd()` strings.
- In the terminal renderer, draw a pair row as a two-column flex row: the label
  column has a fixed width (matching current alignment on desktop), the
  description column takes the remaining space and wraps inside itself, staying
  right of the label with no text sliding under the command column.
- On very narrow widths, shrink the label column width so the description keeps
  a usable amount of space, and keep both columns aligned at the top.

Plain `{ text }` lines (project bullets, contact lines, welcome, errors) are
unchanged.

## Files

- `src/lib/terminal-commands.ts` — `Line` type, `HELP`, `aboutLines()`
- `src/components/notebook/TerminalCell.tsx` — render label/desc rows as columns
