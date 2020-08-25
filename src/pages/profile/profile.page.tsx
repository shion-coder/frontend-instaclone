import React, { FC, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import { GetUserProps } from 'types';
import { http } from 'services';
import Loader from 'components/loader/lottie-loader';
import NotFound from 'pages/not-found';
import ProfileHeader from 'components/profile/profile-header';

import { Wrapper, Container } from './profile.styles';

/* -------------------------------------------------------------------------- */

const Dashboard: FC = () => {
  const { username } = useParams();

  const getUser = async () => {
    const { data } = await http.get<GetUserProps>(`/users/${username}`);

    return data;
  };

  const { isLoading, data, error, refetch } = useQuery('get-user', getUser, {
    retry: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    refetch();
  }, [username, refetch]);

  if (isLoading) return <Loader />;

  if (!data || error) return <NotFound />;

  return (
    <Wrapper>
      <Container container spacing={3}>
        <Grid item xs={12}>
          <ProfileHeader data={data} refetch={refetch} />
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
