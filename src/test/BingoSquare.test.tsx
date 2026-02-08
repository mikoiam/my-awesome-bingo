import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BingoSquare } from '../components/BingoSquare';

const baseSquare = {
  id: 0,
  text: 'Has a plant on their desk',
  isMarked: false,
  isFreeSpace: false,
};

describe('BingoSquare', () => {
  it('matches snapshot - default', () => {
    const { container } = render(
      <BingoSquare square={baseSquare} isWinning={false} onClick={() => {}} />
    );
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot - marked', () => {
    const marked = { ...baseSquare, isMarked: true };
    const { container } = render(
      <BingoSquare square={marked} isWinning={false} onClick={() => {}} />
    );
    expect(container).toMatchSnapshot();
  });
});
