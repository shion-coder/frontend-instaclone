import React, { FC } from 'react';
import { Grid } from '@material-ui/core';

import { Wrapper, AvatarSkeleton, Body, NameSkeleton } from './info-header.styles';

/* -------------------------------------------------------------------------- */

export const InfoHeaderLoading: FC = () => {
  return (
    <Wrapper container alignItems="center">
      <Grid item>
        <AvatarSkeleton />
      </Grid>

      <Body item>
        <NameSkeleton />
      </Body>
    </Wrapper>
  );
};
