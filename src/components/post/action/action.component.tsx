import React, { FC } from 'react';
import Modal from 'styled-react-modal';
import { Grid, IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import { ReturnGetPostProps } from 'types';
import { useModal, useLikePost, useSavePost } from 'hooks';
import { formatDate } from 'utils';
import ShareModal from 'components/modal/share-modal';

import { Wrapper, SavedButton, StyledFavoriteIcon as FavoriteIcon, Stats, Count, Date } from './action.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  data: ReturnGetPostProps;
  focus: () => void | undefined;
};

const Action: FC<Props> = ({
  data: {
    post: {
      _id,
      likeCount,
      date,
      author: { username },
    },
    isLiked,
    isSaved,
  },
  focus,
}) => {
  const { isOpen, openModal, closeModal } = useModal();
  const { likePost } = useLikePost(_id, username);
  const { savePost } = useSavePost(_id, username);

  return (
    <Wrapper container>
      <Grid container>
        <IconButton onClick={likePost}>
          {isLiked ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
        </IconButton>

        <IconButton onClick={focus}>
          <ModeCommentOutlinedIcon fontSize="small" />
        </IconButton>

        <IconButton onClick={openModal}>
          <ShareOutlinedIcon fontSize="small" />
        </IconButton>

        <Modal isOpen={isOpen} onBackgroundClick={closeModal} onEscapeKeydown={closeModal}>
          <ShareModal id={_id} closeModal={closeModal} />
        </Modal>

        <SavedButton onClick={savePost}>
          {isSaved ? <BookmarkIcon fontSize="small" /> : <BookmarkBorderOutlinedIcon fontSize="small" />}
        </SavedButton>
      </Grid>

      <Stats container direction="column">
        <Count>
          {likeCount === 0 ? 'Be the first to like this' : likeCount === 1 ? '1 like' : `${likeCount} likes`}
        </Count>

        <Date>{formatDate(date)}</Date>
      </Stats>
    </Wrapper>
  );
};

export default Action;
