import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootStateProps } from 'store';
import NewPost from 'components/new-post/new-post-button';

import { Container, Icon, Title, Text } from './empty-post.styles';

/* -------------------------------------------------------------------------- */

type ParamsProps = {
  username: string;
};

type Props = {
  fullName: string;
};

const EmptyPost: FC<Props> = ({ fullName }) => {
  const { username }: ParamsProps = useParams();

  const isCurrentUser = useSelector((state: RootStateProps) => state.user.data.username) === username;

  return (
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
};

export default EmptyPost;
