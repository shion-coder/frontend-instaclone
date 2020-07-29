import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import notFound from 'assets/animations/not-found.json';

import { Container, StyledLottie as Lottie } from './not-found.styles';

/* -------------------------------------------------------------------------- */

const NotFound: FC = () => {
  const history = useHistory();

  const handleClick = () => history.push('/');

  return (
    <Container onClick={handleClick}>
      <Lottie play loop animationData={notFound} />
    </Container>
  );
};

export default NotFound;
