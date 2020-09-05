import React, { FC } from 'react';

import NewPost from 'components/new-post/new-post-button';

import { Container, Icon, Title, Text } from './empty-post.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  isCurrentUser: boolean;
  fullName: string;
};

const EmptyPost: FC<Props> = ({ isCurrentUser, fullName }) => (
  <Container>
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
  </Container>
);

export default EmptyPost;
