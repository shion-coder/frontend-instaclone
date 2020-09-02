import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { ReturnGetUserProps } from 'types';
import { http } from 'services';
import Loader from 'components/loader/lottie-loader';
import NotFound from 'pages/not-found';
import ProfileHeader from 'components/profile/profile-header';
import ProfileContent from 'components/profile/profile-content';

import { Wrapper, Container } from './profile.styles';

/* -------------------------------------------------------------------------- */

type ParamsProps = {
  username: string;
};

const Dashboard: FC = () => {
  const { username }: ParamsProps = useParams();

  /**
   * Fetch user with username in params
   */

  const { isFetching, data, error } = useQuery(['get-user', username], () =>
    http.get<ReturnGetUserProps>(`/users/${username}`).then((res) => res.data),
  );

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
      <Container>
        <ProfileHeader profile={data} />

        <ProfileContent profile={data} />
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
