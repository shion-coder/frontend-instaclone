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
    font-family: ff-tisa-sans-web-pro, sans-serif;
  }

  a {
    text-decoration: none;
  }

  /* Custom toast top right position */
  .Toastify__toast-container--top-right {
    top: 6rem;
  }
`;
