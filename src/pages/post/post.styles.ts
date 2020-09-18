import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container, Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

/* -------------------------------------------------------------------------- */

type ImageProps = {
  filter: string;
};

export const StyledContainer = styled(Container)``;

export const Wrapper = styled(Grid)`
  border: 1px solid ${({ theme }) => theme.material.palette.divider};
  background: ${({ theme }) => theme.material.palette.background.paper};

  @media screen and (min-width: 600px) {
    height: 550px;
  }
`;

export const ImageContainer = styled(Grid)`
  border-right: 1px solid ${({ theme }) => theme.material.palette.divider};

  @media screen and (min-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

export const Image = styled(LazyLoadImage)<ImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: ${({ filter }) => (filter ? filter : 'none')};

  @media screen and (max-width: 599px) {
    height: auto;
  }
`;

export const ImageSkeleton = styled(Skeleton).attrs(() => ({
  animation: 'wave',
  variant: 'rect',
}))`
  width: 100%;
  height: 100%;

  @media screen and (max-width: 599px) {
    height: 25rem;
  }
`;
