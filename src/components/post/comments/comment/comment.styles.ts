import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Skeleton from '@material-ui/lab/Skeleton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

/* -------------------------------------------------------------------------- */

export const Wrapper = styled(Grid)`
  padding: ${({ theme }) => theme.material.spacing(1.5, 0.5, 1.5, 2)};
  width: 100%;
`;

export const AvatarSkeleton = styled(Skeleton).attrs(() => ({
  animation: 'wave',
  variant: 'circle',
  width: '2.5rem',
  height: '2.5rem',
}))``;

export const Body = styled(Grid)`
  flex: 1;
  font-size: 0.8rem;
  padding: ${({ theme }) => theme.material.spacing(0, 1.5)};
`;

export const Content = styled.div``;

export const Name = styled.span`
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  color: ${({ theme }) => theme.material.palette.text.primary};
`;

export const NameSkeleton = styled(Skeleton).attrs(() => ({
  animation: 'wave',
  width: '12rem',
  height: '0.6rem',
}))``;

export const Message = styled.span`
  margin: ${({ theme }) => theme.material.spacing(0, 1)};
`;

export const Stats = styled.div`
  margin-top: 0.5rem;
`;

export const Date = styled.span`
  margin-right: 0.5rem;
`;

export const Likes = styled.span`
  font-weight: bold;
`;

export const DateSkeleton = styled(Skeleton).attrs(() => ({
  animation: 'wave',
  width: '6rem',
  height: '0.6rem',
}))``;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const More = styled(MoreHorizIcon)`
  font-size: 1rem;
  cursor: pointer;
`;

export const StyledFavoriteIcon = styled(FavoriteIcon)`
  color: ${({ theme }) => theme.material.palette.secondary.light};
  font-size: 0.6rem;
`;

export const StyledFavoriteBorderIcon = styled(FavoriteBorderIcon)`
  font-size: 0.6rem;
`;
