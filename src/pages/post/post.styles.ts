import styled from 'styled-components';
import { Container, Grid } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

type ImageProps = {
  filter: string;
};

export const StyledContainer = styled(Container)``;

export const Wrapper = styled(Grid)`
  border: 1px solid ${({ theme }) => theme.material.palette.divider};

  @media screen and (min-width: 600px) {
    height: 500px;
  }
`;

export const ImageContainer = styled(Grid)`
  @media screen and (min-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

export const Image = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: ${({ filter }) => (filter ? filter : 'none')};

  @media screen and (max-width: 599px) {
    height: auto;
  }
`;
