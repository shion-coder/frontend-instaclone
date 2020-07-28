import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

/* -------------------------------------------------------------------------- */

export const GlobalStyle = createGlobalStyle`
  ${normalize}

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
  }

  a {
    text-decoration: none;
  }
`;
