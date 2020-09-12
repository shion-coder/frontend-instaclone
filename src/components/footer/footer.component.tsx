import React, { FC } from 'react';
import { Divider, Link } from '@material-ui/core';

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

      <Link href="https://github.com/shion-coder" target="_blank">
        <Span variant="subtitle2" color="textSecondary">
          Shion
        </Span>
      </Link>
    </Wrapper>
  );
};

export default Footer;
