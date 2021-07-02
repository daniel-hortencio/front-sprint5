import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Footer from './index';

describe('Footer component', () => {
  it('renders correctly', () => {
    render(<Footer />);

    expect(
      screen.getByText('Receba ofertas e novidades por e-mail'),
    ).toBeInTheDocument();
    expect(screen.getByText('Baixe nosso App')).toBeInTheDocument();
  });
});
