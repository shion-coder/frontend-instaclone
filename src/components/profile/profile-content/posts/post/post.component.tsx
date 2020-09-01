import React, { FC } from 'react';

import { PostProps } from 'types';

import { Container, Image, Overlay, Content, Icon, LikeIcon, CommentIcon, Number } from './post.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  post: PostProps;
};

const Post: FC<Props> = ({ post: { thumbnail, filter, likeCount, commentCount } }) => (
  <Container>
    <Image src={thumbnail} filter={filter} />

    <Overlay>
      <Content>
        <Icon>
          <LikeIcon color="inherit" />

          <Number>{likeCount}</Number>
        </Icon>

        <Icon>
          <CommentIcon color="inherit" />

          <Number>{commentCount}</Number>
        </Icon>
      </Content>
    </Overlay>
  </Container>
);

export default Post;
