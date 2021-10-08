import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Spartan', sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    max-width: 1440px;
    margin: 0 auto;
  }

  a, button {
    font-family: 'Spartan', sans-serif;
  }
`;
