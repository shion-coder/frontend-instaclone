import React, { FC } from 'react';

import { Container, Register, Login } from './guest.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  goRegister: () => void;
  goLogin: () => void;
};

const Guest: FC<Props> = ({ goRegister, goLogin }) => (
  <Container>
    <Register variant="outlined" onClick={goRegister}>
      Register
    </Register>

    <Login variant="outlined" onClick={goLogin}>
      Login
    </Login>
  </Container>
);

export default Guest;
