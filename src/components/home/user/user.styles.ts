import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

/* -------------------------------------------------------------------------- */

export const UserContainer = styled(Grid)`
  background: ${({ theme }) => theme.material.palette.background.paper};
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

export const AvatarSkeleton = styled(Skeleton).attrs(() => ({
  animation: 'wave',
  variant: 'circle',
  width: '4rem',
  height: '4rem',
}))``;

export const Info = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin-left: 2rem;
  font-size: 0.9rem;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.material.palette.text.primary};
`;

export const TextSkeleton = styled(Skeleton).attrs(() => ({
  animation: 'wave',
  width: '6rem',
  height: '0.6rem',
}))``;

export const Name = styled.span`
  font-weight: bold;
  letter-spacing: 0.4px;
  cursor: pointer;
`;

export const Username = styled.span`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.material.palette.text.secondary};
`;

export const UsernameSkeleton = styled(Skeleton).attrs(() => ({
  animation: 'wave',
  width: '2rem',
  height: '0.6rem',
}))`
  margin-top: 0.3rem;
`;
