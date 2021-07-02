import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { ThemeProvider } from 'styled-components';
import MessageToast from './index';

import theme from '../../styles/theme';

const TestProviders: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe('MessageToast component', () => {
  it('renders correctly', () => {
    render(
      <MessageToast
        status="error"
        text="Test message for MessageToast"
        onClick={() => console.log('Test')}
      />,
      { wrapper: TestProviders },
    );

    expect(
      screen.getByText('Test message for MessageToast'),
    ).toBeInTheDocument();

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders the correct icon for the status received', () => {
    const message1 = render(
      <MessageToast
        status="error"
        text="Test message for MessageToast"
        onClick={() => console.log('Test')}
      />,
      { wrapper: TestProviders },
    );

    const message2 = render(
      <MessageToast
        status="success"
        text="Test message for MessageToast"
        onClick={() => console.log('Test')}
      />,
      { wrapper: TestProviders },
    );

    expect(message1.getByTestId('error-icon')).toBeInTheDocument();
    expect(message2.getByTestId('success-icon')).toBeInTheDocument();
  });

  it('calling function when you click the button', () => {
    const functionRemoveMessage = jest.fn();

    render(
      <MessageToast
        status="error"
        text="Test message for MessageToast"
        onClick={functionRemoveMessage}
      />,
      { wrapper: TestProviders },
    );

    fireEvent.click(screen.getByRole('button'));

    expect(functionRemoveMessage).toHaveBeenCalled();
  });
});
