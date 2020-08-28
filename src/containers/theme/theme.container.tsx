import React, { FC } from 'react';
import { StylesProvider, ThemeProvider as MaterialThemeProvider, CssBaseline } from '@material-ui/core';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { theme, GlobalStyle } from 'styles';

/* -------------------------------------------------------------------------- */

const Theme: FC = ({ children }) => (
  <StylesProvider injectFirst>
    <MaterialThemeProvider theme={theme.material}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />

        <GlobalStyle />

        {children}
      </StyledThemeProvider>
    </MaterialThemeProvider>
  </StylesProvider>
);

export default Theme;
