import styled from 'styled-components';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DefaultCommentIcon from '@material-ui/icons/Comment';
import Skeleton from '@material-ui/lab/Skeleton';

/* -------------------------------------------------------------------------- */

type ImageProps = {
  filter?: string;
};

export const Container = styled.div`
  position: relative;
  height: 100%;
`;

export const Image = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
  cursor: pointer;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  filter: ${({ filter }) => (filter ? filter : 'none')};
`;

export const ImageSkeleton = styled(Skeleton).attrs(() => ({
  animation: 'wave',
  variant: 'rect',
}))`
  width: 100%;
  border-radius: 4px;
  padding-top: 100%;
`;

export const Overlay = styled.div`
  position: absolute;
  border-radius: 4px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  opacity: 0;
  cursor: pointer;

  :hover {
    opacity: 1;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.light};
`;

export const Icon = styled.div`
  display: flex;
  margin: 0 1rem;
`;

export const LikeIcon = styled(FavoriteIcon)``;

export const CommentIcon = styled(DefaultCommentIcon)``;

export const Number = styled.span`
  margin-left: 0.5rem;
`;
