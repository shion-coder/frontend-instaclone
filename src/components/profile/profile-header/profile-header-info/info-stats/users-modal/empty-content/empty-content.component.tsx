import React, { FC } from 'react';

import { Container, UserIcon, Text } from './empty-content.styles';

/* -------------------------------------------------------------------------- */

const EmptyContent: FC = () => (
  <Container>
    <UserIcon />

    <Text>People who follow the user</Text>

    <Text>Once somebody follows the user, you'll see them here</Text>
  </Container>
);

export default EmptyContent;
