# Fix terminal column wrapping on mobile

## Problem

Several terminal outputs fake a second column with space padding. On a narrow
iPhone screen the line runs out of room and wraps back to the left edge, so the
right-hand text slides underneath the left column and looks messy.

Affected outputs: `help` (command / description), `about` (fact label / value),
`contact` (Email:/LinkedIn:/GitHub: label / value), and any other padded
two-column row (e.g. `internships` company/dates style rows).

## Approach

Replace padded text with real columns everywhere the terminal shows a pair.

- Extend the terminal `Line` type with an optional pair form:
  `{ label: string, desc: string, tone?: ... }` alongside the existing
  `{ text }` form.
- Convert every padded two-column output to emit pair rows instead of
  `padEnd()` strings: help list, about facts, contact list, and internships.
  Sweep the file so no `padEnd`/manual space alignment remains.
- In the terminal renderer, draw a pair row as a two-column flex row: the label
  column has a fixed width (matching current desktop alignment), the value
  column takes the remaining space and wraps inside itself, staying to the right
  of the label with nothing sliding under it. Both columns align at the top.
- On very narrow widths, shrink the label column so the value keeps usable
  space.

Single-column lines (project bullets, welcome, errors, `ls`) stay as `{ text }`
and are unchanged.

## Files

- `src/lib/terminal-commands.ts` — `Line` type, `HELP`, `aboutLines()`,
  `contactLines()`, `internshipLines()`
- `src/components/notebook/TerminalCell.tsx` — render pair rows as columns
