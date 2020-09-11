import styled from 'styled-components';
import { Container, Grid } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

type StyledContainerProps = {
  height?: number;
};

type ImageProps = {
  filter: string;
};

export const StyledContainer = styled(Container)<StyledContainerProps>`
  height: ${({ height }) => (height ? height + 'px' : 'initial')};
`;

export const Wrapper = styled(Grid)`
  border: 1px solid ${({ theme }) => theme.material.palette.divider};
`;

export const Image = styled.img<ImageProps>`
  width: 100%;
  max-height: 600px;
  object-fit: cover;
  display: block;
  filter: ${({ filter }) => (filter ? filter : 'none')};

  @media screen and (min-width: 600px) {
    min-height: 400px;
  }
`;
