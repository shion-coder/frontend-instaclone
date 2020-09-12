import React, { FC } from 'react';
import Modal from 'styled-react-modal';
import { Grid, IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import { ReturnGetPostProps } from 'types';
import { useModal } from 'hooks';
import { formatDate } from 'utils';
import ShareModal from 'components/modal/share-modal';

import { Wrapper, SavedButton, Stats, Count, Date } from './action.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  data: ReturnGetPostProps;
  focus: () => void | undefined;
};

const Action: FC<Props> = ({
  data: {
    post: { _id, likeCount, date },
    isLiked,
    isSaved,
  },
  focus,
}) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <Wrapper container>
      <Grid container>
        <IconButton>
          {isLiked ? <FavoriteIcon fontSize="small" color="secondary" /> : <FavoriteBorderIcon fontSize="small" />}
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

        <SavedButton>
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
