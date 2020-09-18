import React, { FC, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTheme, useMediaQuery } from '@material-ui/core';
import Modal from 'styled-react-modal';

import { ReturnGetPostProps } from 'types';
import { useModal } from 'hooks';
import PostDetail from 'pages/post';
import InfoHeader from 'components/post/info-header';
import Comment from 'components/post/comments/comment';
import Action from 'components/post/action';
import Field from 'components/post/field';

import { Container, Image, ImageSkeleton, MoreComments, Comments } from './post.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  data: ReturnGetPostProps;
};

const Post: FC<Props> = ({ data }) => {
  const {
    post: { _id, image, filter, comments, commentCount },
  } = data;

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [newComments, setNewComments] = useState(comments);

  /**
   * Handle open and close post modal and change url without reload page
   */

  const history = useHistory();
  const matchesXS = useMediaQuery(useTheme().breakpoints.down('xs'));
  const { isOpen, openModal, closeModal } = useModal();

  const handleOpen = () => {
    if (matchesXS) {
      return history.push(`/post/${_id}`);
    }

    openModal();

    window.history.pushState(null, '', `/post/${_id}`);
  };

  const handleClose = () => {
    closeModal();

    window.history.pushState(null, '', '');
  };

  /**
   * Focus comment input function to use when click comment icon
   */

  const focusInput = () => inputRef.current?.focus();

  return (
    <Container>
      <InfoHeader data={data} />

      <Image src={image} filter={filter} effect="blur" width="100%" placeholder={<ImageSkeleton />} />

      <Action data={data} focus={focusInput} />

      {commentCount > 2 && <MoreComments onClick={handleOpen}>View all {commentCount} comments</MoreComments>}

      <Comments>
        {newComments.map((comment) => (
          <Comment key={comment._id} postId={_id} data={comment} setComments={setNewComments} />
        ))}
      </Comments>

      <Field data={data} inputRef={inputRef} setComments={setNewComments} />

      <Modal isOpen={isOpen} onBackgroundClick={handleClose} onEscapeKeydown={handleClose}>
        <PostDetail postId={_id} />
      </Modal>
    </Container>
  );
};

export default Post;
