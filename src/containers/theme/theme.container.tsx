import React, { FC } from 'react';
import {
  StylesProvider,
  ThemeProvider as MaterialThemeProvider,
  CssBaseline,
} from '@material-ui/core';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyle } from 'styles';

/* -------------------------------------------------------------------------- */

const Theme: FC = ({ children }) => (
  <StylesProvider injectFirst>
    <MaterialThemeProvider theme={theme.material}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <GlobalStyle />

        {children}
      </ThemeProvider>
    </MaterialThemeProvider>
  </StylesProvider>
);

export default Theme;
