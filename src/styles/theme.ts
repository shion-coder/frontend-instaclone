import { DefaultTheme } from 'styled-components';
import { Theme, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

/* -------------------------------------------------------------------------- */

declare module 'styled-components' {
  export interface DefaultTheme {
    material: Theme;
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
  material: responsiveFontSizes(createMuiTheme()),
  colors: {
    black: '#000',
    white: '#fff',
    dark: '#0c0c0c',
    light: '#f8f4f4',
    primary: '#fc5c65',
    secondary: '#4ecdc4',
    nero: '#181818',
    medium: '#6e6969',
    danger: '#ff5252',
    corn: '#ffe66d',
  },
  animation: {
    delay: '0s',
  },
};
