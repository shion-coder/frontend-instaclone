import React, { FC } from 'react';

import { Container, ImageSkeleton } from './post.styles';

/* -------------------------------------------------------------------------- */

export const PostLoading: FC = () => (
  <Container item xs={6} sm={4}>
    <ImageSkeleton />
  </Container>
);
