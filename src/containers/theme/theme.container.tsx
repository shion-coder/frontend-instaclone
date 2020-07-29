import React, { FC } from 'react';
import PropTypes from 'prop-types';
import {
  StylesProvider,
  ThemeProvider as MaterialThemeProvider,
  CssBaseline,
} from '@material-ui/core';
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

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
