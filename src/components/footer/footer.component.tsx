import React, { FC } from 'react';
import { Divider } from '@material-ui/core';

import { Wrapper, Span } from './footer.styles';

/* -------------------------------------------------------------------------- */

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <Wrapper>
      <Span variant="subtitle2" color="textSecondary">
        &copy; {year}
      </Span>

      <Divider orientation="vertical" variant="middle" flexItem />

      <Span variant="subtitle2" color="textSecondary">
        Shion
      </Span>
    </Wrapper>
  );
};

export default Footer;
