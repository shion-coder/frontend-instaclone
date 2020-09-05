import React, { FC } from 'react';

import { useCustomHistory } from 'hooks';
import notFound from 'assets/animations/not-found.json';

import { Container, StyledLottie as Lottie } from './not-found.styles';

/* -------------------------------------------------------------------------- */

const NotFound: FC = () => {
  const { goHome } = useCustomHistory();

  return (
    <Container onClick={goHome}>
      <Lottie play loop animationData={notFound} />
    </Container>
  );
};

export default NotFound;
