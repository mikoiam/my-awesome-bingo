interface BingoModalProps {
  onDismiss: () => void;
}

import { useEffect, useRef } from 'react';

export function BingoModal({ onDismiss }: BingoModalProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss();
    };
    document.addEventListener('keydown', onKey);
    buttonRef.current?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [onDismiss]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
    >
      <div className="bg-foam rounded-xl p-6 max-w-xs w-full text-center shadow-card transform transition-all duration-200">
        <img src="/images/coffee-cup.svg" alt="celebrate" className="mx-auto mb-3 w-14 h-14" />
        <h2 className="text-3xl font-heading text-amber-500 mb-2">BINGO!</h2>
        <p className="text-muted-gray mb-6">You completed a line!</p>

        <button
          ref={buttonRef}
          onClick={onDismiss}
          className="w-full bg-[color:var(--color-cinnamon-accent)] text-white font-semibold py-3 px-6 rounded-lg active:opacity-90 transition-colors"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
