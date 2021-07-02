import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThemeProvider } from 'styled-components';
import EmptyResults from './index';

import theme from '../../styles/theme';

describe('EmptyResults component', () => {
  it('renders correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <EmptyResults text="Teste do componente EmptyResults" />
      </ThemeProvider>,
    );

    expect(
      screen.getByText('Teste do componente EmptyResults'),
    ).toBeInTheDocument();
  });
});
