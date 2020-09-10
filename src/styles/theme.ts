import { DefaultTheme } from 'styled-components';
import { Theme, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

/* -------------------------------------------------------------------------- */

declare module 'styled-components' {
  export interface DefaultTheme {
    material: Theme;
    colors: {
      light: string;
      dark: {
        main: string;
        medium: string;
        light: string;
      };
      danger: {
        main: string;
      };
      lightLayer: string;
      darkLayer: string;
      solitude: string;
      medium: string;
      grey: string;
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
        primary: {
          main: '#222831',
        },
        secondary: {
          main: '#903749',
        },
      },
    }),
  ),
  colors: {
    light: '#f7f8f9',
    dark: {
      main: '#222831',
      medium: '#323232',
      light: '#393e46',
    },
    danger: {
      main: '#903749',
    },
    lightLayer: 'rgba(247, 248, 249, 0.6)',
    darkLayer: 'rgba(0, 0, 0, 0.4)',
    solitude: '#e8ebee',
    medium: '#6e6969',
    grey: '#dbdbdb',
    corn: '#ffe66d',
    unread: '#82b1ff',
    google: '#4285f4',
  },
};
