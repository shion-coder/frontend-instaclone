import React, { FC } from 'react';

import meow from 'assets/animations/meow.json';

import { Container, StyledLottie as Lottie } from './loading-lottie.styles';

/* -------------------------------------------------------------------------- */

const LoadingLottie: FC = () => (
  <Container>
    <Lottie play loop animationData={meow} />
  </Container>
);

export default LoadingLottie;
