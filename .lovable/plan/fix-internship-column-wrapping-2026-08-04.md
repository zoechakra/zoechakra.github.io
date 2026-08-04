# Fix internship column wrapping

## Goal
Keep each internship team entirely in its own right-side column so text such as “Branch Technology” never wraps underneath “Royal Bank of Canada.”

## Changes
- Refactor the visible `InternshipsOutput` rows from inline text plus a separate date into a responsive grid.
- Give the company a dedicated left column and the team/date content a dedicated right column.
- Add `min-w-0` and explicit wrapping within each column so long team names stay aligned to the right side on narrow screens.
- Preserve the current typography, borders, spacing, data, and desktop appearance as closely as possible.
- Keep the terminal’s internship output aligned with the same two-column behavior.

## Validation
- Check the RBC Advice Centre/Branch Technology row at mobile width and confirm every wrapped team word begins at the right-column edge.
- Check the remaining internship rows at mobile and desktop widths for alignment and overflow.