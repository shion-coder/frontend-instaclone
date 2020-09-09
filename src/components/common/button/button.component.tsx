import React, { FC } from 'react';
import { ButtonProps } from '@material-ui/core';

import Loader from 'components/loader/layer-loader';

import { StyledButton } from './button.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  children: string;
  isLoading?: boolean;
  layer?: 'dark' | 'light';
} & ButtonProps;

const Button: FC<Props> = ({ children, isLoading, layer, ...otherProps }) => (
  <StyledButton variant="contained" pointer={isLoading ? 0 : 1} disabled={isLoading} {...otherProps}>
    {layer && isLoading && <Loader color={layer} width="25px" height="25px" radius="4px" />}

    {children}
  </StyledButton>
);

export default Button;
