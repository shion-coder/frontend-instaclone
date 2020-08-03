import React, { FC } from 'react';

import { Container, Span } from './footer.styles';

/* -------------------------------------------------------------------------- */

const Footer: FC = () => (
  <Container>
    <Span>&copy; {new Date().getFullYear()}</Span>

    <Span>|</Span>

    <Span>Shion</Span>
  </Container>
);

export default Footer;
