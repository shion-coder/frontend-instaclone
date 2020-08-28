import React, { FC } from 'react';

import loadingLight from 'assets/animations/loading-light.json';
import loadingDark from 'assets/animations/loading-dark.json';

import { Container, StyledLottie as Lottie } from './layer-loader.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  color: 'dark' | 'light';
  width?: string;
  height?: string;
  radius?: string;
};

const LayerLoader: FC<Props> = ({ color, width, height, radius }) => (
  <Container color={color} radius={radius}>
    <Lottie play loop animationData={color === 'dark' ? loadingLight : loadingDark} width={width} height={height} />
  </Container>
);

export default LayerLoader;
