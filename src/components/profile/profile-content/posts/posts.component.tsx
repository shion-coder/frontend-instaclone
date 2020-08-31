import React, { FC } from 'react';

import { ReturnGetUserProps } from 'types';
import Post from './post';
import EmptyPost from './empty-post';

import { Container } from './posts.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  profile: ReturnGetUserProps;
};

const Posts: FC<Props> = ({
  profile: {
    user: { posts, fullName },
  },
}) => {
  return posts.length === 0 ? (
    <EmptyPost fullName={fullName} />
  ) : (
    <Container>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </Container>
  );
};

export default Posts;
