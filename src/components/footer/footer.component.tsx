import React, { FC } from 'react';

import { Container, Span } from './footer.styles';

/* -------------------------------------------------------------------------- */

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <Container>
      <Span>&copy; {year}</Span>

      <Span>|</Span>

      <Span>Shion</Span>
    </Container>
  );
};

export default Footer;
