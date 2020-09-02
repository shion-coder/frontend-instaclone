import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { ReturnConfirmProps } from 'types';
import { http } from 'services';
import Loader from 'components/loader/lottie-loader';

import { Container, StyledTypography as Text } from './confirm.styles';

/* -------------------------------------------------------------------------- */

type PramsProps = {
  id: string;
};

const Confirm: FC = () => {
  const { id }: PramsProps = useParams();

  const { isLoading, data, error } = useQuery('confirm', () =>
    http.put<ReturnConfirmProps>(`/users/email/confirm/${id}`).then((res) => res.data),
  );

  if (isLoading) return <Loader />;

  return (
    <Container>
      <Text>{error ? 'An error has occurred' : data?.message}</Text>
    </Container>
  );
};

export default Confirm;
