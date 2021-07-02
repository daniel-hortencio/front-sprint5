import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BrowserRouter } from 'react-router-dom';
import NavbarItem from './index';

describe('NavbarItem component', () => {
  it('renders correctly', () => {
    render(
      <NavbarItem
        id="test-navbar-item-id"
        path="/"
        label="Test navbar label"
      />,
      { wrapper: BrowserRouter },
    );

    expect(screen.getByText('Test navbar label')).toBeInTheDocument();
  });
});
