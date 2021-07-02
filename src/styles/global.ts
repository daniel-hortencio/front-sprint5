import { createGlobalStyle } from 'styled-components';

import theme from './theme'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    font-size: 100%;    
    list-style: none;
    font-family: 'Roboto', sans-serif;
    line-height: 1.4em;
    transition: all 0.3s;
  }

  @font-face {
    font-family: Arboria;
    font-style: normal;
    font-display: swap;
    font-weight: $light;
    src: url('https://midia.fotos-riachuelo.com.br/spa-storefront/public/fonts/arboria-book.woff') format("woff");
  }
  @font-face {
      font-family: Arboria;
      font-style: normal;
      font-display: swap;
      font-weight: font-;
      src: url('https://midia.fotos-riachuelo.com.br/spa-storefront/public/fonts/arboria-medium.woff') format("woff");
  }
  @font-face {
      font-family: Arboria;
      font-style: normal;
      font-display: swap;
      font-weight: $bold;
      src: url('https://midia.fotos-riachuelo.com.br/spa-storefront/public/fonts/arboria-bold.woff') format("woff");
  }

  html,
  body,
  input {
    padding: 0;
    margin: 0;
    font-size: 100%;
    font-family: Arboria, sans-serif;
    font-weight: $light;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;

    &[disabled="true"] {
        cursor: initial;
    }
  }  

  .Test {
    border: solid 1px red;
  } 

`;

export default GlobalStyle;


