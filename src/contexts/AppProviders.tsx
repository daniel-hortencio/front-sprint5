import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';
import { CategoriesProvider } from './Categories';
import { LoadingProvider } from './Loading';
import { MessageProvider } from './Message';
import { ProductsProvider } from './Products';
import { SearchProvider } from './Search';

export const AppProviders: React.FC = ({ children }) => {
  return (
    <LoadingProvider>
      <MessageProvider>
        <CategoriesProvider>
          <ProductsProvider>
            <SearchProvider>
              <ThemeProvider theme={theme}>
                <GlobalStyle />
                {children}
              </ThemeProvider>
            </SearchProvider>
          </ProductsProvider>
        </CategoriesProvider>
      </MessageProvider>
    </LoadingProvider>
  );
};
