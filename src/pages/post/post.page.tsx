import React, { FC } from 'react';
import { Grid } from '@material-ui/core';

/* -------------------------------------------------------------------------- */

const Post: FC = () => (
  <Grid container>
    <Grid item xs={1} md={2} />

    <Grid item container xs={10} md={8}>
      <Grid item xs={7} style={{ background: 'red' }}>
        ...
      </Grid>

      <Grid item xs={5} style={{ background: 'green' }}>
        ...
      </Grid>
    </Grid>

    <Grid item xs={1} md={2} />
  </Grid>
);

export default Post;
