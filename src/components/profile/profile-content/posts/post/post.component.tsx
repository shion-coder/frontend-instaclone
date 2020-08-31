import React, { FC } from 'react';

import { PostProps } from 'types';

import { Container } from './post.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  post: PostProps;
};

const Post: FC<Props> = () => <Container></Container>;

export default Post;
