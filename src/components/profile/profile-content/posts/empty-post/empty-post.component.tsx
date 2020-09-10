import React, { FC } from 'react';

import NewPost from 'components/new-post/new-post-button';

import { Wrapper, Icon, Title, Text } from './empty-post.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  isCurrentUser: boolean;
  fullName: string;
};

const EmptyPost: FC<Props> = ({ isCurrentUser, fullName }) => (
  <Wrapper container direction="column" alignItems="center">
    {isCurrentUser ? (
      <>
        <Icon />

        <Title>Share Photos</Title>

        <Text>When you share photos, they'll appear here</Text>

        <NewPost text />
      </>
    ) : (
      <>
        <Icon />

        <Title>No Posts Yet</Title>

        <Text>When {fullName} posts, you'll see their photos here</Text>
      </>
    )}
  </Wrapper>
);

export default EmptyPost;
