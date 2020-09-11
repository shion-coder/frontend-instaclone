import React, { FC } from 'react';

import { PostProps } from 'types';

import { Container, Image, Overlay, Content, Icon, LikeIcon, CommentIcon, Number } from './post.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  post: PostProps;
};

const Post: FC<Props> = ({ post: { thumbnail, filter, likeCount, commentCount } }) => (
  <Container item xs={6} sm={4}>
    <Image src={thumbnail} filter={filter} />

    <Overlay>
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
  </Container>
);

export default Post;
