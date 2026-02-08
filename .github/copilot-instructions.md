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
