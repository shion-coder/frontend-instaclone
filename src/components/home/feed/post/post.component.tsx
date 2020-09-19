import React, { FC, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTheme, useMediaQuery, Grid } from '@material-ui/core';
import Modal from 'styled-react-modal';

import { ReturnGetPostProps } from 'types';
import { useCustomHistory, useModal } from 'hooks';
import { formatDate } from 'utils';
import PostDetail from 'pages/post';
import Avatar from 'components/common/avatar';
import InfoHeader from 'components/post/info-header';
import Comment from 'components/post/comments/comment';
import Action from 'components/post/action';
import Field from 'components/post/field';

import {
  Container,
  Image,
  ImageSkeleton,
  MoreComments,
  Comments,
  Caption,
  Body,
  Content,
  Name,
  Message,
  Stats,
  Date,
} from './post.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  data: ReturnGetPostProps;
};

const Post: FC<Props> = ({ data }) => {
  const {
    post: {
      _id,
      image,
      filter,
      comments,
      commentCount,
      caption,
      author: { fullName, avatar },
      date,
    },
  } = data;

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [newComments, setNewComments] = useState(comments);

  /**
   * Handle open and close post modal and change url without reload page
   */

  const history = useHistory();
  const { goUser } = useCustomHistory();
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

      {caption && (
        <Caption container alignItems="center">
          <Grid item>
            <Avatar src={avatar} width="2.5rem" height="2.5rem" cursor onClick={goUser} />
          </Grid>

          <Body item>
            <Content>
              <Name onClick={goUser}>{fullName}</Name>

              <Message>{caption}</Message>
            </Content>

            <Stats>
              <Date>{formatDate(date)}</Date>
            </Stats>
          </Body>
        </Caption>
      )}

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
