import React, { FC, useState } from 'react';
import Modal from 'styled-react-modal';
import { Grid, IconButton } from '@material-ui/core';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

import { ReturnGetPostProps } from 'types';
import { useModal } from 'hooks';
import { formatDate } from 'utils';
import ShareModal from 'components/modal/share-modal';
import LikePost from './like-post';
import SavePost from './save-post';

import { Wrapper, Stats, Count, Date } from './action.styles';

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
  /**
   * Handle like state and number of likes to display
   */
  const [likesState, setLikes] = useState(likeCount);

  const incLikes = () => setLikes((previous) => previous + 1);
  const decLikes = () => setLikes((previous) => previous - 1);

  const { isOpen, openModal, closeModal } = useModal();

  return (
    <Wrapper container>
      <Grid container>
        <LikePost postId={_id} username={username} isLiked={isLiked} incLikes={incLikes} decLikes={decLikes} />

        <IconButton onClick={focus}>
          <ModeCommentOutlinedIcon fontSize="small" />
        </IconButton>

        <IconButton onClick={openModal}>
          <ShareOutlinedIcon fontSize="small" />
        </IconButton>

        <Modal isOpen={isOpen} onBackgroundClick={closeModal} onEscapeKeydown={closeModal}>
          <ShareModal id={_id} closeModal={closeModal} />
        </Modal>

        <SavePost postId={_id} username={username} isSaved={isSaved} />
      </Grid>

      <Stats container direction="column">
        <Count>
          {likesState === 0 ? 'Be the first to like this' : likesState === 1 ? '1 like' : `${likesState} likes`}
        </Count>

        <Date>{formatDate(date)}</Date>
      </Stats>
    </Wrapper>
  );
};

export default Action;
