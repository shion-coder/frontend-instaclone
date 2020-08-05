import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { UserConfirmProps } from 'types';
// import { useFetch } from 'hooks';
import { useQuery } from 'react-query';
import { http } from 'services';
import Loader from 'components/loader/lottie-loader';

import { Container, StyledTypography as Text } from './confirm.styles';

/* -------------------------------------------------------------------------- */

type PramsProps = {
  id: string;
};

const Confirm: FC = () => {
  const { id }: PramsProps = useParams();

  /**
   * Using useFetch custom hook
   */
  // const { isLoading, error, data } = useFetch<UserConfirmProps>({
  //   method: 'put',
  //   baseURL: `${process.env.REACT_APP_API_URL}/users/email/confirm/${id}`,
  // });

  const requestConfirm = async () => {
    const { data } = await http.put<UserConfirmProps>(`/users/email/confirm/${id}`);

    return data;
  };

  const { isLoading, error, data } = useQuery('confirm', requestConfirm);

  if (isLoading) return <Loader />;

  return (
    <Container>
      <Text>{error ? 'An error has occurred' : data?.message}</Text>
    </Container>
  );
};

export default Confirm;
