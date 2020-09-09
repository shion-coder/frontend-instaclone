import React, { FC, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonProps } from '@material-ui/core';

import { ReturnAuthProps } from 'types';
import { addUser } from 'store';
import { useCustomHistory, usePopup } from 'hooks';
import { useSocketListener } from 'contexts/socket';
import Button from 'components/common/button';

/* -------------------------------------------------------------------------- */

type Props = ButtonProps & {
  children: string;
  provider: 'google' | 'facebook';
  state?: {
    from: Location;
  };
  layer?: 'dark' | 'light';
};

const OauthButton: FC<Props> = ({ children, provider, state, layer, ...otherProps }) => {
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
    <Button layer={layer} onClick={handlePopup} {...otherProps}>
      {children}
    </Button>
  );
};

export default OauthButton;
