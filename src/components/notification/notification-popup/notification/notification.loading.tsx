import React, { FC } from 'react';

import { Container, AvatarSkeleton, Info, TextSkeleton, DateSkeleton } from './notification.styles';

/* -------------------------------------------------------------------------- */

export const NotificationLoading: FC = () => (
  <Container>
    <AvatarSkeleton />

    <Info>
      <TextSkeleton />

      <DateSkeleton />
    </Info>
  </Container>
);
