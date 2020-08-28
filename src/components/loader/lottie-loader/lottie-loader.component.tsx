import React, { FC } from 'react';

import meow from 'assets/animations/loading-meow.json';

import { Container, StyledLottie as Lottie } from './lottie-loader.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  width?: string;
  height?: string;
};

const LoaderLottie: FC<Props> = ({ width, height }) => (
  <Container>
    <Lottie play loop animationData={meow} width={width} height={height} />
  </Container>
);

export default LoaderLottie;
