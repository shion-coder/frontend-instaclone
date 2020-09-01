import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

/* -------------------------------------------------------------------------- */

type ReadProps = {
  read?: 'read' | 'unread';
};

export const Container = styled.div<ReadProps>`
  display: flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  width: 100%;
  background: ${({ theme, read }) => (read === 'unread' ? theme.colors.unread : theme.colors.light)};
`;

export const StyledAvatar = styled(Avatar)`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
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

export const Text = styled.span<ReadProps>`
  font-size: 0.8rem;
  color: ${({ theme, read }) => (read === 'unread' ? theme.colors.light : theme.colors.dark)};
`;

export const TextSkeleton = styled(Skeleton).attrs(() => ({
  animation: 'wave',
  width: '6rem',
  height: '0.6rem',
}))``;

export const Name = styled.span`
  font-weight: bold;
  letter-spacing: 0.4px;
  font-size: 0.8rem;
  cursor: pointer;
`;

export const Date = styled.span<ReadProps>`
  font-size: 0.8rem;
  margin-top: 0.3rem;
  color: ${({ theme, read }) => (read === 'unread' ? theme.colors.light : theme.colors.medium)};
`;

export const DateSkeleton = styled(Skeleton).attrs(() => ({
  animation: 'wave',
  width: '2rem',
  height: '0.6rem',
}))`
  margin-top: 0.3rem;
`;
