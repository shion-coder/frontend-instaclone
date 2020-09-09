import React, { FC } from 'react';

import Lottie from 'components/common/lottie';
import meow from 'assets/animations/loading-meow.json';

import { Wrapper } from './lottie-loader.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  width?: string;
  height?: string;
};

const LottieLoader: FC<Props> = ({ width, height }) => (
  <Wrapper>
    <Lottie animation={meow} width={width ? width : '15rem'} height={height ? height : '15rem'} />
  </Wrapper>
);

export default LottieLoader;
