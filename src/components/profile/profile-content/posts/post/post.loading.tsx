import React, { FC } from 'react';

import { Container, ImageSkeleton } from './post.styles';

/* -------------------------------------------------------------------------- */

export const PostLoading: FC = () => (
  <Container>
    <ImageSkeleton />
  </Container>
);
