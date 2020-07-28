import { DefaultTheme } from 'styled-components';

/* -------------------------------------------------------------------------- */

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      black: string;
      white: string;
      medium: string;
      light: string;
      danger: string;
      dark: string;
      corn: string;
      nero: string;
    };
    animation: {
      delay: string;
    };
  }
}

export const theme: DefaultTheme = {
  colors: {
    primary: '#fc5c65',
    secondary: '#4ecdc4',
    black: '#000',
    nero: '#181818',
    white: '#fff',
    medium: '#6e6969',
    light: '#f8f4f4',
    danger: '#ff5252',
    dark: '#0c0c0c',
    corn: '#ffe66d',
  },
  animation: {
    delay: '0s',
  },
};
