import { DefaultTheme } from 'styled-components';
import { Theme, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

import teal from '@material-ui/core/colors/teal';

/* -------------------------------------------------------------------------- */

declare module 'styled-components' {
  export interface DefaultTheme {
    material: Theme;
    colors: {
      white: string;
      black: string;
      light: string;
      dark: string;
      lightLayer: string;
      darkLayer: string;
      solitude: string;
      medium: string;
      grey: string;
      danger: string;
      corn: string;
      unread: string;
      google: string;
    };
  }
}
export const theme: DefaultTheme = {
  material: responsiveFontSizes(
    createMuiTheme({
      palette: {
        type: 'dark',
        primary: teal,
      },
    }),
  ),
  colors: {
    white: '#fff',
    black: '#000',
    light: '#f7f8f9',
    dark: '#181818',
    lightLayer: 'rgba(247, 248, 249, 0.6)',
    darkLayer: 'rgba(0, 0, 0, 0.4)',
    solitude: '#e8ebee',
    medium: '#6e6969',
    grey: '#dbdbdb',
    danger: '#ff5252',
    corn: '#ffe66d',
    unread: '#82b1ff',
    google: '#4285f4',
  },
};
