import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Skeleton from '@material-ui/lab/Skeleton';

/* -------------------------------------------------------------------------- */

export const Wrapper = styled(Grid)`
  padding: ${({ theme }) => theme.material.spacing(1.5, 2)};
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.material.palette.divider};
`;

export const AvatarSkeleton = styled(Skeleton).attrs(() => ({
  animation: 'wave',
  variant: 'circle',
  width: '2.5rem',
  height: '2.5rem',
}))``;

export const Name = styled.span`
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 0.8rem;
  cursor: pointer;
  margin-left: 1rem;
  color: ${({ theme }) => theme.material.palette.text.primary};
`;

export const NameSkeleton = styled(Skeleton).attrs(() => ({
  animation: 'wave',
  width: '5rem',
  height: '0.6rem',
}))``;

export const More = styled(MoreHorizIcon)`
  margin-left: auto;
  font-size: 1rem;
  cursor: pointer;
`;

export const ButtonSkeleton = styled(Skeleton).attrs(() => ({
  animation: 'wave',
  width: '2rem',
  height: '2rem',
}))`
  margin-left: auto;
`;
