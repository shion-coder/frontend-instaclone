import { DefaultTheme } from 'styled-components';
import { Theme, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

/* -------------------------------------------------------------------------- */

declare module 'styled-components' {
  export interface DefaultTheme {
    material: Theme;
    colors: {
      white: string;
      black: string;
      light: string;
      dark: string;
      solitude: string;
      nero: string;
      primary: string;
      secondary: string;
      medium: string;
      danger: string;
      corn: string;
    };
    animation: {
      delay: string;
    };
  }
}
export const theme: DefaultTheme = {
  material: responsiveFontSizes(createMuiTheme()),
  colors: {
    white: '#fff',
    black: '#000',
    light: '#f7f8f9',
    dark: '#181818',
    solitude: '#e8ebee',
    nero: '#292929',
    primary: '#fc5c65',
    secondary: '#4ecdc4',
    medium: '#6e6969',
    danger: '#ff5252',
    corn: '#ffe66d',
  },
  animation: {
    delay: '0s',
  },
};
