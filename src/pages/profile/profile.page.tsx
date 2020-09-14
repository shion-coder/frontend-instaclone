import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Container, Grid } from '@material-ui/core';

import { QUERY } from 'types';
import { requestGetUser } from 'services';
import Loader from 'components/loader/lottie-loader';
import NotFound from 'pages/not-found';
import ProfileHeader from 'components/profile/profile-header';
import ProfileContent from 'components/profile/profile-content';

/* -------------------------------------------------------------------------- */

type ParamsProps = {
  username: string;
};

const Dashboard: FC = () => {
  const { username }: ParamsProps = useParams();
  const { data, isLoading, isError } = useQuery([QUERY.GET_USER, username], () => requestGetUser(username));

  /**
   * Display loader when fetching get user
   */

  if (isLoading) return <Loader />;

  /**
   * Display Not Found page if error happened or username is not exist
   */

  if (isError || !data) return <NotFound />;

  return (
    <Container maxWidth="lg">
      <Grid container justify="center">
        <Grid item xs={12}>
          <ProfileHeader profile={data} />
        </Grid>

        <Grid item xs={12} sm={11} md={10}>
          <ProfileContent profile={data} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
