import React, { FC } from 'react';
import { useQuery } from 'react-query';

import { MeProps } from 'types';
import { http } from 'services';
import Loader from 'components/loader/lottie-loader';

import { Container, StyledTypography as Text } from './dashboard.styles';

/* -------------------------------------------------------------------------- */

const Dashboard: FC = () => {
  const requestMe = async () => {
    const { data } = await http.get<MeProps>('/users/me');

    return data;
  };

  const { isLoading, data, error } = useQuery('me', requestMe, {
    retry: false,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <Loader />;

  return (
    <Container>
      <Text>{error ? 'An error has occurred' : data?.user.firstName}</Text>
    </Container>
  );
};

export default Dashboard;
