import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BingoModal } from '../components/BingoModal';

describe('BingoModal', () => {
  it('has dialog role and focuses primary button', () => {
    const onDismiss = vi.fn();
    const { getByRole, getByText, container } = render(<BingoModal onDismiss={onDismiss} />);

    const dialog = getByRole('dialog');
    expect(dialog).toBeTruthy();
    expect(dialog).toHaveAttribute('aria-modal', 'true');

    const button = getByText(/Keep Playing/i) as HTMLButtonElement;
    expect(button).toBeTruthy();
    // The component auto-focuses the button on mount
    expect(document.activeElement).toBe(button);

    expect(container).toMatchSnapshot();
  });
});
