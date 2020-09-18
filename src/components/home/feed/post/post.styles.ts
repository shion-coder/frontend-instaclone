import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton from '@material-ui/lab/Skeleton';

/* -------------------------------------------------------------------------- */

type ImageProps = {
  filter: string;
};

export const Container = styled.div`
  background: ${({ theme }) => theme.material.palette.background.paper};
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const Image = styled(LazyLoadImage)<ImageProps>`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  filter: ${({ filter }) => (filter ? filter : 'none')};
`;

export const ImageSkeleton = styled(Skeleton).attrs(() => ({
  animation: 'wave',
  variant: 'rect',
  width: '100%',
  height: '25rem',
}))``;

export const MoreComments = styled.p`
  font-weight: bold;
  margin: 1rem 1.25rem 0.5rem;
  cursor: pointer;
`;

export const Comments = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.material.palette.divider};
  max-height: 12.75rem;
  overflow-y: auto;
`;
