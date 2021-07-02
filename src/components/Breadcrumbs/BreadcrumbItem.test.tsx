import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Breadcrumbs from './index';

describe('Breadcrumbs component', () => {
  it('renders correctly', () => {
    const data = [
      {
        id: 'test-breadcrumb-item-1',
        path: '#home',
        label: 'Test breadcrumb label 1',
      },
      {
        id: 'test-breadcrumb-item-2',
        path: '#home',
        label: 'Test breadcrumb label 2',
      },
      {
        id: 'test-breadcrumb-item-3',
        path: '#home',
        label: 'Test breadcrumb label 3',
      },
      {
        id: 'test-breadcrumb-item-4',
        path: undefined,
        label: 'Test breadcrumb label 4',
      },
      {
        id: 'test-breadcrumb-item-5',
        path: undefined,
        label: 'Test breadcrumb label 5',
      },
    ];

    render(<Breadcrumbs breadcrumbPath={data} />);

    expect(screen.getByText('Test breadcrumb label 1')).toBeInTheDocument();
    expect(screen.getByText('Test breadcrumb label 2')).toBeInTheDocument();
    expect(screen.getByText('Test breadcrumb label 3')).toBeInTheDocument();
    expect(screen.getByText('Test breadcrumb label 4')).toBeInTheDocument();
    expect(screen.getByText('Test breadcrumb label 5')).toBeInTheDocument();
  });
});
