import React, { FC } from 'react';

import { Container, AvatarSkeleton, Info, NameSkeleton, ButtonSkeleton } from './user-card.styles';

/* -------------------------------------------------------------------------- */

export const UserCardLoading: FC = () => (
  <Container>
    <AvatarSkeleton />

    <Info>
      <NameSkeleton />

      <NameSkeleton />
    </Info>

    <ButtonSkeleton />
  </Container>
);
