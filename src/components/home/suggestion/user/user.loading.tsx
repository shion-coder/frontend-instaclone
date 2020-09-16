import React, { FC } from 'react';

import { Container, AvatarSkeleton, Info, NameSkeleton, ButtonSkeleton } from './user.styles';

/* -------------------------------------------------------------------------- */

export const UserLoading: FC = () => (
  <Container>
    <AvatarSkeleton />

    <Info>
      <NameSkeleton />

      <NameSkeleton />
    </Info>

    <ButtonSkeleton />
  </Container>
);
