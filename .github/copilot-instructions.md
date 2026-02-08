# Copilot Instructions for Soc Ops Bingo

## Pre-Commit Checklist
- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
- [ ] `npm run test` passes

---

## Quick Overview
**Soc Ops**: React 19 + TypeScript social bingo game (5-in-a-row). State via custom hook [`useBingoGame`](src/hooks/useBingoGame.ts), pure game logic in [`bingoLogic.ts`](src/utils/bingoLogic.ts), localStorage persistence with validation.

## State Management
[`useBingoGame`](src/hooks/useBingoGame.ts) hook manages:
- `gameState`: 'start' | 'playing' | 'bingo'
- `board`: 25 BingoSquareData objects
- Persists to localStorage with version control & schema validation

## Game Logic
[`bingoLogic.ts`](src/utils/bingoLogic.ts) — pure, testable functions:
- `generateBoard()`: shuffles 24 prompts + free space (index 12, auto-marked)
- `toggleSquare()`: immutable mark/unmark
- `checkBingo()`: detect 5-in-a-row (rows, cols, diagonals)

## Data Types
```typescript
BingoSquareData { id: 0-24, text, isMarked, isFreeSpace }
BingoLine { type: 'row'|'column'|'diagonal', index: 0-4, squares[] }
```

## Tailwind CSS v4
No config file—tokens in [`src/index.css`](src/index.css) via `@theme`:
```css
--color-accent: #2563eb;  /* Primary blue */
--color-marked: #dcfce7;  /* Success green */
--color-bingo: #fbbf24;   /* Win amber */
```
Use as: `bg-accent`, `text-marked`. See [tailwind-4.instructions.md](.github/instructions/tailwind-4.instructions.md) for v4 features.

## Commands
- `npm run dev` — dev server
- `npm run build` — bundle
- `npm run test` — Vitest (colocated with source, e.g., `bingoLogic.test.ts`)
- `npm run lint` — ESLint

## Key Conventions
- **Immutability**: Use spread operators in game logic
- **SSR safety**: `typeof window === 'undefined'` checks before localStorage
- **Naming**: PascalCase components, camelCase utilities
- **Questions**: Extend [`data/questions.ts`](src/data/questions.ts) (max 24 for shuffling)

See [frontend-design.instructions.md](.github/instructions/frontend-design.instructions.md) for design philosophy.

## Design Guide — Cozy Coffee Shop Theme

Add this concise design guide when making UI changes so designs stay cohesive and accessible.

- **Theme tokens (CSS vars)**: prefer using variables from `src/index.css`:
	- `--color-coffee-espresso` (primary text)
	- `--color-coffee-brown` (borders/accents)
	- `--color-cinnamon-accent` (CTA)
	- `--color-cream` (page background)
	- `--color-foam` (card surface)
	- `--color-leaf-green` (marked state)
	- `--color-bingo-amber` (win highlight)

- **Typography**:
	- Headings: `font-heading` (Playfair Display) for titles and prominent labels.
	- Body: `font-body` (Inter / system) for readability in squares and paragraphs.
	- Keep heading sizes large enough to establish hierarchy (e.g., start screen title ≥ 36px).

- **Spacing & layout**:
	- Use the spacing tokens (`--space-sm`, `--space-md`, `--space-lg`) for consistent paddings.
	- Bingo grid must remain a 5x5 responsive grid; keep `aspect-square` on the grid container to preserve square cells.
	- Increase gaps and padding for touch targets (squares ≥ 44px tappable area).

- **Surfaces & shadows**:
	- Card surfaces use `--color-foam` with `--shadow-soft` for depth.
	- Borders use `--color-coffee-brown` at 1px.

- **Buttons & CTAs**:
	- Primary CTA use `--color-cinnamon-accent` with white text.
	- Ensure contrast ratio meets WCAG AA (text on backgrounds). When in doubt, prefer darker text colors.

- **Micro-assets**:
	- Use small SVGs in `public/images/` or `src/assets/icons/` (coffee cup, steam, stain) sparingly as accents — do not make them required for layout.

- **Accessibility**:
	- Maintain keyboard navigability: squares are `button`s with `aria-pressed` and the modal uses `role="dialog"` + `aria-modal`.
	- Add visible focus styles (`:focus-visible`) and respect `prefers-reduced-motion`.
	- Verify color contrast for text on `--color-cream` and CTAs.

- **When to add a design change**:
	- Small cosmetic tweaks: update the component file and add a snapshot test if appearance changes noticeably.
	- Global token or asset additions: update `src/index.css` and add assets to `public/images/` or `src/assets/`.

Example snippet — use theme tokens inline or via Tailwind utilities where possible:

```tsx
// Card wrapper
<div className="p-6 rounded-lg shadow-soft" style={{ background: 'var(--color-foam)', borderColor: 'var(--color-coffee-brown)' }}>
	<h2 className="font-heading" style={{ color: 'var(--color-coffee-espresso)' }}>Title</h2>
</div>
```

Keep this guide short and update when tokens or the theme evolve.
