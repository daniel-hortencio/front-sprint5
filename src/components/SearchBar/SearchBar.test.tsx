import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Searchbar from './index';

describe('Searchbar component', () => {
  it('renders correctly', () => {
    render(<Searchbar />);

    expect(
      screen.getByPlaceholderText('O que você está procurando?'),
    ).toBeInTheDocument();
  });
});
