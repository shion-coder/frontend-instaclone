import React, { FC } from 'react';
import { useQuery } from 'react-query';

import { ReturnMeProps } from 'types';
import { http } from 'services';
import Loader from 'components/loader/lottie-loader';

import { Container, StyledTypography as Text } from './dashboard.styles';

/* -------------------------------------------------------------------------- */

const Dashboard: FC = () => {
  const { isLoading, data, error } = useQuery('me', () => http.get<ReturnMeProps>('/user/me').then((res) => res.data));

  if (isLoading) return <Loader />;

  return (
    <Container>
      <Text>{error ? 'An error has occurred' : data?.user.firstName}</Text>
    </Container>
  );
};

export default Dashboard;
