import React, { FC } from 'react';
import Lottie from 'react-lottie-player';
import plane from 'assets/animations/plane.json';

import { Container } from './loading-lottie.styles';

/* -------------------------------------------------------------------------- */

const LoadingLottie: FC = () => (
  <Container>
    <Lottie loop animationData={plane} play style={{ width: 150, height: 150 }} />
  </Container>
);

export default LoadingLottie;
