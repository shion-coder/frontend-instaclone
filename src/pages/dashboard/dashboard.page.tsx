import React, { FC } from 'react';
import { useQuery } from 'react-query';

import { Query } from 'types';
import { requestGetMe } from 'services';
import { errorMessage } from 'utils';
import Loader from 'components/loader/lottie-loader';

import { Container, StyledTypography as Text } from './dashboard.styles';

/* -------------------------------------------------------------------------- */

const Dashboard: FC = () => {
  const { isLoading, data, error } = useQuery(Query.ME, requestGetMe);

  if (isLoading) return <Loader />;

  return (
    <Container>
      <Text>{error ? errorMessage.wrong : data?.user.firstName}</Text>
    </Container>
  );
};

export default Dashboard;
