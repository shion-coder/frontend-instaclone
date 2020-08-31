import React, { FC } from 'react';

import { Container, Icon, Title, Text } from './empty-saved.styles';

/* -------------------------------------------------------------------------- */

const EmptySaved: FC = () => (
  <Container>
    <Icon />

    <Title>Save</Title>

    <Text>Save photos and videos that you want to see again</Text>

    <Text>No one is notified, and only you can see what you've saved.</Text>
  </Container>
);

export default EmptySaved;
