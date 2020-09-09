import React, { FC } from 'react';

import { StyledLottie } from './lottie.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  animation: unknown;
  width?: string;
  height?: string;
};

const Lottie: FC<Props> = ({ animation, width, height }) => (
  <StyledLottie play loop animationData={animation} width={width} height={height} />
);

export default Lottie;
