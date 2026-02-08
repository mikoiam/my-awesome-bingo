import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-cream">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-foam border-b" style={{ borderColor: 'var(--color-coffee-brown)' }}>
        <button
          onClick={onReset}
          className="text-sm px-3 py-2 rounded-full border"
          style={{ borderColor: 'var(--color-coffee-brown)', color: 'var(--color-muted-gray)' }}
        >
          ← Back
        </button>
        <h1 className="font-heading text-2xl" style={{ color: 'var(--color-coffee-espresso)' }}>Soc Ops</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-sm py-2 px-4" style={{ color: 'var(--color-muted-gray)' }}>
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="text-center py-2 font-semibold text-sm" style={{ background: 'var(--color-bingo-amber)', color: 'var(--color-coffee-espresso)' }}>
          <span className="inline-flex items-center gap-2 justify-center">☕ BINGO! You got a line!</span>
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
