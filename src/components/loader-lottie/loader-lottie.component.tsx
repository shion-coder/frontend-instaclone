import React, { FC } from 'react';

import loading from 'assets/animations/loading-meow.json';

import { Container, StyledLottie as Lottie } from './loader-lottie.styles';

/* -------------------------------------------------------------------------- */

const LoaderLottie: FC = () => (
  <Container>
    <Lottie play loop animationData={loading} />
  </Container>
);

export default LoaderLottie;
