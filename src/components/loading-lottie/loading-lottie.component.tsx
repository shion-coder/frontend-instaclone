import React, { FC } from 'react';
import Lottie from 'react-lottie-player';
import meow from 'assets/animations/meow.json';

import { Container } from './loading-lottie.styles';

/* -------------------------------------------------------------------------- */

const LoadingLottie: FC = () => (
  <Container>
    <Lottie loop animationData={meow} play style={{ width: 200, height: 200 }} />
  </Container>
);

export default LoadingLottie;
