import styled from 'styled-components';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Skeleton from '@material-ui/lab/Skeleton';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.6rem 1.5rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const AvatarSkeleton = styled(Skeleton).attrs(() => ({
  animation: 'wave',
  variant: 'circle',
  width: '2.5rem',
  height: '2.5rem',
}))``;

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
