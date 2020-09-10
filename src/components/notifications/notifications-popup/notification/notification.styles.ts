import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';

/* -------------------------------------------------------------------------- */

type ReadProps = {
  read?: boolean;
};

export const Container = styled.div<ReadProps>`
  display: flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  width: 100%;
  background: ${({ theme, read }) => (!read ? theme.colors.dark.main : 'inherit')};
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

export const Text = styled.span`
  font-size: 0.8rem;
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
  font-size: 0.8rem;
  cursor: pointer;
`;

export const Date = styled.span`
  font-size: 0.8rem;
  margin-top: 0.3rem;
  color: ${({ theme }) => theme.material.palette.text.secondary};
`;

export const DateSkeleton = styled(Skeleton).attrs(() => ({
  animation: 'wave',
  width: '2rem',
  height: '0.6rem',
}))`
  margin-top: 0.3rem;
`;
