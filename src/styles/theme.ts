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
      lightLayer: string;
      darkLayer: string;
      solitude: string;
      nero: string;
      primary: string;
      secondary: string;
      medium: string;
      danger: string;
      corn: string;
      grey1: string;
      grey2: string;
      grey3: string;
      grey4: string;
    };
    animation: {
      delay: string;
    };
  }
}
export const theme: DefaultTheme = {
  material: responsiveFontSizes(createMuiTheme({})),
  colors: {
    white: '#fff',
    black: '#000',
    light: '#f7f8f9',
    dark: '#181818',
    lightLayer: 'rgba(247, 248, 249, 0.6)',
    darkLayer: 'rgba(0, 0, 0, 0.4)',
    solitude: '#e8ebee',
    nero: '#292929',
    primary: '#fc5c65',
    secondary: '#4ecdc4',
    medium: '#6e6969',
    danger: '#ff5252',
    corn: '#ffe66d',
    grey1: '#999',
    grey2: '#dbdbdb',
    grey3: '#fafafa',
    grey4: '#efefef',
  },
  animation: {
    delay: '0s',
  },
};
