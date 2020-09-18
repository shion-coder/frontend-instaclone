import React, { FC } from 'react';
import { Grid } from '@material-ui/core';

import { InfoHeaderLoading } from 'components/post/info-header';
import { CommentLoading } from 'components/post/comments/comment';

import { StyledContainer as Container, Wrapper, ImageContainer, ImageSkeleton } from './post.styles';

/* -------------------------------------------------------------------------- */

export const PostLoading: FC = () => (
  <Container maxWidth="md">
    <Wrapper item xs={12} container>
      <ImageContainer item xs={12} sm={7}>
        <ImageSkeleton />
      </ImageContainer>

      <Grid item xs={12} sm={5} container direction="column">
        <InfoHeaderLoading />

        <CommentLoading />
        <CommentLoading />
        <CommentLoading />
        <CommentLoading />
      </Grid>
    </Wrapper>
  </Container>
);
