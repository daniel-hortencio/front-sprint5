import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import CardProduct from './index';
import { API_URL } from '../../constants/enviroments';

describe('CardProduct component', () => {
  it('renders correctly', () => {
    render(
      <CardProduct
        imageURL="ImageCardProductTest"
        id="987654321"
        description="Descrição de teste do card de produto"
        price="17.99"
      />,
      { wrapper: BrowserRouter },
    );

    expect(
      screen.getByText('Descrição de teste do card de produto'),
    ).toBeInTheDocument();
    expect(screen.getByText('R$ 17.99')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      `${API_URL}/ImageCardProductTest`,
    );
  });
});
