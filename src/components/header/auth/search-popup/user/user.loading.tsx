import React, { FC } from 'react';

import { Container, AvatarSkeleton, Info, TextSkeleton, UsernameSkeleton } from './user.styles';

/* -------------------------------------------------------------------------- */

export const UserLoading: FC = () => (
  <Container>
    <AvatarSkeleton />

    <Info>
      <TextSkeleton />

      <UsernameSkeleton />
    </Info>
  </Container>
);
