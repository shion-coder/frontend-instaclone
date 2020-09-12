import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@material-ui/core';
import Modal from 'styled-react-modal';

import { PostProps } from 'types';
import { useModal } from 'hooks';
import PostDetail from 'pages/post';

import { Container, Image, Overlay, Content, Icon, LikeIcon, CommentIcon, Number } from './post.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  post: PostProps;
};

const Post: FC<Props> = ({ post: { _id, thumbnail, filter, likeCount, commentCount, author } }) => {
  const history = useHistory();
  const matchesXS = useMediaQuery(useTheme().breakpoints.down('xs'));
  const { isOpen, openModal, closeModal } = useModal();

  /**
   * Handle open and close modal and change url without reload page
   */

  const handleOpen = () => {
    if (matchesXS) {
      return history.push(`/post/${_id}`);
    }

    openModal();

    window.history.pushState(null, '', `/post/${_id}`);
  };

  const handleClose = () => {
    closeModal();

    window.history.pushState(null, '', `/${author.username}`);
  };

  return (
    <Container item xs={6} sm={4}>
      <Image src={thumbnail} filter={filter} />

      <Overlay onClick={handleOpen}>
        <Content>
          <Icon>
            <LikeIcon color="inherit" fontSize="small" />

            <Number>{likeCount}</Number>
          </Icon>

          <Icon>
            <CommentIcon color="inherit" fontSize="small" />

            <Number>{commentCount}</Number>
          </Icon>
        </Content>
      </Overlay>

      <Modal isOpen={isOpen} onBackgroundClick={handleClose} onEscapeKeydown={handleClose}>
        <PostDetail postId={_id} />
      </Modal>
    </Container>
  );
};

export default Post;
