import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootStateProps } from 'store';

import { Container, Icon, Title, Text } from './empty-tagged.styles';

/* -------------------------------------------------------------------------- */

type ParamsProps = {
  username: string;
};

type Props = {
  fullName: string;
};

const EmptyTagged: FC<Props> = ({ fullName }) => {
  const { username }: ParamsProps = useParams();

  const isCurrentUser = useSelector((state: RootStateProps) => state.user.data.username) === username;

  return (
    <Container>
      {isCurrentUser ? (
        <>
          <Icon />

          <Title>Photos of you</Title>

          <Text>When people tag you in photos, they'll appear here</Text>

          <Text bold>This feature is not yet implemented</Text>
        </>
      ) : (
        <>
          <Icon />

          <Title>No Photos</Title>

          <Text>When people tag {fullName} in photos, they'll appear here</Text>

          <Text bold>This feature is not yet implemented</Text>
        </>
      )}
    </Container>
  );
};

export default EmptyTagged;
