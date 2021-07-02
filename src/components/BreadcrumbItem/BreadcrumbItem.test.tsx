import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import BreadcrumbItem from './index';

describe('BreadcrumbItem component', () => {
  it('renders correctly', () => {
    render(
      <BreadcrumbItem
        id="test-breadcrumb-item"
        label="Test label"
        path="/test"
        isLastItem={false}
      />,
    );

    expect(screen.getByText('Test label')).toBeInTheDocument();
    expect(screen.getByText('/')).toBeInTheDocument();
  });
});
