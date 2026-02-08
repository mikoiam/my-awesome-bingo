import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses = 'relative flex items-center justify-center p-3 text-center rounded-md transition-transform duration-150 select-none min-h-[72px] text-base leading-tight bg-foam';

  const style: React.CSSProperties = {
    border: '1px solid var(--color-coffee-brown)'
  };

  const markedStyle: React.CSSProperties | undefined = square.isMarked
    ? isWinning
      ? { background: 'var(--color-bingo-amber)', color: 'var(--color-coffee-espresso)' }
      : { background: 'var(--color-leaf-green)', color: 'white' }
    : undefined;

  const freeSpaceClasses = square.isFreeSpace ? 'font-bold text-sm' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${freeSpaceClasses} hover:scale-105 motion-reduce:transform-none`}
      style={{ ...style, ...markedStyle }}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-xs" style={{ color: 'var(--color-coffee-espresso)' }}>✓</span>
      )}
    </button>
  );
}
