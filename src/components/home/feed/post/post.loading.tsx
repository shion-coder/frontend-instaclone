import React, { FC } from 'react';

import { InfoHeaderLoading } from 'components/post/info-header';
import { CommentLoading } from 'components/post/comments/comment';

import { Container, ImageSkeleton } from './post.styles';

/* -------------------------------------------------------------------------- */

export const PostLoading: FC = () => (
  <Container>
    <InfoHeaderLoading />

    <ImageSkeleton />

    <CommentLoading />

    <CommentLoading />
  </Container>
);
