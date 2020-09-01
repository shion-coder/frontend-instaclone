import React, { FC } from 'react';

import { Container, NotificationsIcon, Text } from './empty-notification.styles';

/* -------------------------------------------------------------------------- */

const EmptyNotification: FC = () => (
  <Container>
    <NotificationsIcon />

    <Text>Notifications Center</Text>

    <Text> When someone follow, likes or comments on your posts, you'll see them here.</Text>
  </Container>
);

export default EmptyNotification;
