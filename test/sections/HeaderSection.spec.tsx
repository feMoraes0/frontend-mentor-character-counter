import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import HeaderSection from '../../src/sections/HeaderSection';

describe('Given the Header Component', () => {
  it('When theme button is clicked, then should validate dark to light theme switch', async () => {
    const user = userEvent.setup();
    render(<HeaderSection />);
    const buttonTheme = screen.getByRole('button', {
      name: /dark theme/i,
    });
    expect(buttonTheme).toBeInTheDocument();
    await user.click(buttonTheme);
    const darkButtonTheme = screen.queryByRole('button', {
      name: /dark theme/i,
    });
    expect(darkButtonTheme).not.toBeInTheDocument();
    const lightButtonTheme = screen.getByRole('button', {
      name: /light theme/i,
    });
    expect(lightButtonTheme).toBeInTheDocument();
  });
});
