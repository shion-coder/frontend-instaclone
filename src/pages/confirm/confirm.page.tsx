import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { UserConfirmProps } from 'types';
import { http } from 'services';
import Loader from 'components/loader/lottie-loader';

import { Container, StyledTypography as Text } from './confirm.styles';

/* -------------------------------------------------------------------------- */

type PramsProps = {
  id: string;
};

const Confirm: FC = () => {
  const { id }: PramsProps = useParams();

  const requestConfirm = async () => {
    const { data } = await http.put<UserConfirmProps>(`/users/email/confirm/${id}`);

    return data;
  };

  const { isLoading, data, error } = useQuery('confirm', requestConfirm);

  if (isLoading) return <Loader />;

  return (
    <Container>
      <Text>{error ? 'An error has occurred' : data?.message}</Text>
    </Container>
  );
};

export default Confirm;
