import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { Query } from 'types';
import { requestConfirmEmail } from 'services';
import { errorMessage } from 'utils';
import Loader from 'components/loader/lottie-loader';

import { Container, StyledTypography as Text } from './confirm.styles';

/* -------------------------------------------------------------------------- */

type PramsProps = {
  id: string;
};

const Confirm: FC = () => {
  const { id }: PramsProps = useParams();
  const { isLoading, data, error } = useQuery(Query.CONFIRM, () => requestConfirmEmail(id));

  if (isLoading) return <Loader />;

  return (
    <Container>
      <Text>{error ? errorMessage.wrong : data?.message}</Text>
    </Container>
  );
};

export default Confirm;
