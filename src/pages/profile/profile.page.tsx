import React, { FC, useEffect, useRef } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import { ReturnGetUserProps } from 'types';
import { http } from 'services';
import Loader from 'components/loader/lottie-loader';
import NotFound from 'pages/not-found';
import ProfileHeader from 'components/profile/profile-header';

import { Wrapper, Container } from './profile.styles';

/* -------------------------------------------------------------------------- */

const Dashboard: FC = () => {
  const isFirstRun = useRef(true);
  const { username } = useParams();

  /**
   * Fetch user with username in params
   */

  const { isFetching, data, error, refetch } = useQuery(
    'get-user',
    async () => {
      const { data } = await http.get<ReturnGetUserProps>(`/users/${username}`);

      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
    },
  );

  /**
   * Refetch page when username in params change, skip first render
   */

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;

      return;
    }

    refetch();
  }, [username, refetch]);

  /**
   * Display loader when fetching get user
   */

  if (isFetching) return <Loader />;

  /**
   * Display Not Found page if username is not exist or error happened
   */

  if (!data || error) return <NotFound />;

  return (
    <Wrapper>
      <Container container>
        <Grid item xs={12}>
          <ProfileHeader profile={data} />
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
