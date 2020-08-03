import React, { FC, useEffect, useState } from 'react';

import { LOADING_DELAY } from 'config';
import meow from 'assets/animations/loading-meow.json';

import { Container, StyledLottie as Lottie } from './lottie-loader.styles';

/* -------------------------------------------------------------------------- */

const LoaderLottie: FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(true), LOADING_DELAY);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return !loading ? null : (
    <Container>
      <Lottie play loop animationData={meow} />
    </Container>
  );
};

export default LoaderLottie;
