import React, { FC, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Button, ButtonProps } from '@material-ui/core';

import { ReturnAuthProps } from 'types';
import { addUser } from 'store';
import { useCustomHistory, usePopup } from 'hooks';
import { useSocketListener } from 'contexts/socket';

/* -------------------------------------------------------------------------- */

type Props = ButtonProps & {
  provider: string;
  state?: {
    from: Location;
  };
  children: string;
};

const OauthButton: FC<Props> = ({ provider, state, children, ...otherProps }) => {
  const popup = useRef<Window | null>(null);

  const dispatch = useDispatch();

  const { goHome, goPathname } = useCustomHistory(null, state?.from.pathname);
  const { handlePopup } = usePopup(provider, popup);

  /**
   * Listening socket response to add new user, switch route and close popup
   */

  useSocketListener(provider, (data: ReturnAuthProps) => {
    /**
     * Save user data to user store in redux and switch route after login
     */

    dispatch(addUser(data));

    state ? goPathname() : goHome();

    /**
     * Close oauth popup
     */

    popup.current?.close();
  });

  return (
    <Button variant="contained" color="primary" onClick={handlePopup} {...otherProps}>
      {children}
    </Button>
  );
};

export default OauthButton;
