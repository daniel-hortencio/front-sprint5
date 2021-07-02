import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Filters from './index';

describe('Filters component', () => {
  it('renders correctly', () => {
    const data = [
      {
        id: 'test-id-1',
        label: 'Test filter label 1',
      },
      {
        id: 'test-id-2',
        label: 'Test filter label 2',
      },
    ];
    render(<Filters filters={data} />);

    expect(screen.getByText('Test filter label 1')).toBeInTheDocument();
    expect(screen.getByText('Test filter label 2')).toBeInTheDocument();
  });
});
