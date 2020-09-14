import React, { FC, useState } from 'react';
import Modal from 'styled-react-modal';
import { Grid, IconButton } from '@material-ui/core';

import { CommentProps } from 'types';
import { useCustomHistory, useModal, useLikeComment } from 'hooks';
import { formatDate } from 'utils';
import Avatar from 'components/common/avatar';
import CommentModal from 'components/modal/comment-modal';

import {
  Wrapper,
  Body,
  Content,
  Name,
  Message,
  Stats,
  Date,
  Likes,
  Buttons,
  More,
  StyledFavoriteIcon as FavoriteIcon,
  StyledFavoriteBorderIcon as FavoriteBorderIcon,
} from './comment.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  postId: string;
  data: CommentProps & { isMine: boolean; isLiked: boolean };
};

const Comment: FC<Props> = ({
  postId,
  data: {
    _id,
    message,
    author: { avatar, username, fullName },
    date,
    likeCount,
    isMine,
    isLiked,
  },
}) => {
  const [isNewLiked, setIsNewLiked] = useState(isLiked);
  const [newLikeCount, setNewLikeCount] = useState(likeCount);

  const { goUser } = useCustomHistory(username);
  const { isOpen, openModal, closeModal } = useModal();
  const { likeComment } = useLikeComment(_id, postId);

  const handleLike = () => {
    likeComment();

    setIsNewLiked((previous) => !previous);
    setNewLikeCount((previous) => (isNewLiked ? previous - 1 : previous + 1));
  };

  return (
    <Wrapper container alignItems="center">
      <Grid item>
        <Avatar src={avatar} width="2.5rem" height="2.5rem" cursor onClick={goUser} />
      </Grid>

      <Body item>
        <Content>
          <Name onClick={goUser}>{fullName}</Name>

          <Message>{message}</Message>
        </Content>

        <Stats>
          <Date>{formatDate(date)}</Date>

          {newLikeCount !== 0 && <Likes>{newLikeCount === 1 ? '1 like' : `${newLikeCount} likes`}</Likes>}
        </Stats>
      </Body>

      <Buttons>
        {isMine && <More onClick={openModal} />}

        <IconButton onClick={handleLike}>{isNewLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}</IconButton>
      </Buttons>

      <Modal isOpen={isOpen} onBackgroundClick={closeModal} onEscapeKeydown={closeModal}>
        <CommentModal id={_id} postId={postId} isMine={isMine} closeModal={closeModal} />
      </Modal>
    </Wrapper>
  );
};

export default Comment;
