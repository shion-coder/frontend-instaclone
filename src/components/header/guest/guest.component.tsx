import React, { FC } from 'react';

import { Wrapper, Register, Login } from './guest.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  goRegister: () => void;
  goLogin: () => void;
};

const Guest: FC<Props> = ({ goRegister, goLogin }) => (
  <Wrapper>
    <Register variant="outlined" onClick={goRegister}>
      Register
    </Register>

    <Login variant="outlined" onClick={goLogin}>
      Login
    </Login>
  </Wrapper>
);

export default Guest;
