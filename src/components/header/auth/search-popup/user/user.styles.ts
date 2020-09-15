import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';

/* -------------------------------------------------------------------------- */

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.material.palette.divider};
`;

export const AvatarSkeleton = styled(Skeleton).attrs(() => ({
  animation: 'wave',
  variant: 'circle',
  width: '2.5rem',
  height: '2.5rem',
}))``;

export const Info = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-left: 1.5rem;
  font-size: 0.69rem;
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
  margin-top: 0.3rem;
  color: ${({ theme }) => theme.material.palette.text.secondary};
`;

export const UsernameSkeleton = styled(Skeleton).attrs(() => ({
  animation: 'wave',
  width: '2rem',
  height: '0.6rem',
}))`
  margin-top: 0.3rem;
`;
