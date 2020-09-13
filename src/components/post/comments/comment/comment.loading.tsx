import React, { FC } from 'react';
import { Grid } from '@material-ui/core';

import { Wrapper, AvatarSkeleton, Body, Content, NameSkeleton, DateSkeleton, Stats } from './comment.styles';

/* -------------------------------------------------------------------------- */

export const CommentLoading: FC = () => (
  <Wrapper container alignItems="center">
    <Grid item>
      <AvatarSkeleton />
    </Grid>

    <Body item>
      <Content>
        <NameSkeleton />
      </Content>

      <Stats>
        <DateSkeleton />
      </Stats>
    </Body>
  </Wrapper>
);
