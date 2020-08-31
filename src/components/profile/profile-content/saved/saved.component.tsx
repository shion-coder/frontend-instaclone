import React, { FC } from 'react';

import { ReturnGetUserProps } from 'types';
import Post from 'components/profile/profile-content/posts/post';
import EmptySaved from './empty-saved';

import { Container } from './saved.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  profile: ReturnGetUserProps;
};

const Saved: FC<Props> = ({
  profile: {
    user: { saved },
  },
}) => {
  return saved.length === 0 ? (
    <EmptySaved />
  ) : (
    <Container>
      {saved.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </Container>
  );
};

export default Saved;
