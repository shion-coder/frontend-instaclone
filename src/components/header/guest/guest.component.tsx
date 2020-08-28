import React, { FC } from 'react';

import { Container, Register, Login } from './guest.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  registerPath: boolean;
  loginPath: boolean;
  goRegister: () => void;
  goLogin: () => void;
};

const Guest: FC<Props> = ({ registerPath, loginPath, goRegister, goLogin }) => (
  <Container>
    <Register color={registerPath ? 'secondary' : 'primary'} variant="outlined" onClick={goRegister}>
      Register
    </Register>

    <Login color={loginPath ? 'secondary' : 'primary'} variant="outlined" onClick={goLogin}>
      Login
    </Login>
  </Container>
);

export default Guest;
