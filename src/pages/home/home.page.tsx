import React, { FC } from 'react';
import { Container, Grid } from '@material-ui/core';

import User from 'components/home/user';
import Suggestion from 'components/home/suggestion';

/* -------------------------------------------------------------------------- */

const Home: FC = () => {
  return (
    <Container maxWidth="lg">
      <Grid container justify="center">
        <Grid item xs={12} sm={8}>
          <></>
        </Grid>

        <Grid item xs={12} sm={4} container direction="column">
          <User />

          <Suggestion />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
