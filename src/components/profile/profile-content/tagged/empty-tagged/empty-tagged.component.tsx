import React, { FC } from 'react';

import { Container, Icon, Title, Text } from './empty-tagged.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  isCurrentUser: boolean;
  fullName: string;
};

const EmptyTagged: FC<Props> = ({ isCurrentUser, fullName }) => (
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

export default EmptyTagged;
