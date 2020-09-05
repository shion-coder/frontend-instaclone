import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { Query } from 'types';
import { requestGetUser } from 'services';
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
  const { data, isLoading, isError } = useQuery([Query.GET_USER, username], () => requestGetUser(username));

  /**
   * Display loader when fetching get user
   */

  if (isLoading) return <Loader />;

  /**
   * Display Not Found page if error happened or username is not exist
   */

  if (isError || !data) return <NotFound />;

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
