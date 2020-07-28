import React, { FC, useState, useEffect } from 'react';
import FadeIn from 'react-fade-in';

import { LOADING_DELAY, BOUNCE_DELAY } from 'config';

import { Container, Spinner, Bounce } from './loading.styles';

/* -------------------------------------------------------------------------- */

interface IProps {
  color?: string;
  delay?: string;
}

const Loading: FC<IProps> = ({ color, delay }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(true), LOADING_DELAY);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return !loading ? null : (
    <FadeIn>
      <Container>
        <Spinner>
          <Bounce color={color} />
          <Bounce color={color} delay={delay || BOUNCE_DELAY} />
        </Spinner>
      </Container>
    </FadeIn>
  );
};

export default Loading;
