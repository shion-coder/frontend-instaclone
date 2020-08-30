import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  width: 100%;
`;

export const StyledAvatar = styled(Avatar)`
  width: 3rem;
  height: 3rem;
`;

export const AvatarSkeleton = styled(Skeleton).attrs(() => ({
  animation: 'wave',
  variant: 'circle',
  width: '3rem',
  height: '3rem',
}))``;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

export const Name = styled.span`
  font-weight: bold;
  letter-spacing: 0.4px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.dark};
  cursor: pointer;
`;

export const NameSkeleton = styled(Skeleton).attrs(() => ({
  animation: 'wave',
  width: '5rem',
  height: '0.6rem',
}))``;

export const Username = styled.span`
  font-size: 0.8rem;
  margin-top: 0.2rem;
  color: ${({ theme }) => theme.colors.medium};
`;

export const Button = styled.div`
  margin-left: auto;
`;

export const ButtonSkeleton = styled(Skeleton).attrs(() => ({
  animation: 'wave',
  width: '4rem',
  height: '2rem',
}))`
  margin-left: auto;
`;
