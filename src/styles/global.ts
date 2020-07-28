import { createGlobalStyle } from 'styled-components';

/* -------------------------------------------------------------------------- */

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    background: transparent;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: sans-serif;
    background: ${({ theme }) => theme.colors.light};
  }

  a {
    text-decoration: none;
  }
`;
