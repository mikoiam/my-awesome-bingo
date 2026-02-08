interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-cream">
      <div className="text-center max-w-sm">
        <div className="flex items-center justify-center gap-4 mb-3">
          <img src="/images/coffee-cup.svg" alt="coffee" className="w-12 h-12" />
          <h1 className="text-5xl font-heading mb-0" style={{ color: 'var(--color-coffee-espresso)' }}>Soc Ops</h1>
        </div>
        <p className="text-lg mb-8" style={{ color: 'var(--color-muted-gray)' }}>Social Bingo</p>

        <div className="bg-foam rounded-lg p-8 shadow-soft border" style={{ borderColor: 'var(--color-coffee-brown)' }}>
          <h2 className="font-semibold mb-3" style={{ color: 'var(--color-coffee-espresso)' }}>How to play</h2>
          <ul className="text-left text-sm space-y-2" style={{ color: 'var(--color-muted-gray)' }}>
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full text-white font-semibold py-4 px-8 rounded-lg text-lg mt-6"
          style={{ background: 'var(--color-cinnamon-accent)' }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
