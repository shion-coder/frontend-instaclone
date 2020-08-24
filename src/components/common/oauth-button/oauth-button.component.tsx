import React, { FC, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, ButtonProps } from '@material-ui/core';

import { useSocket, useSocketListener } from 'contexts/socket';
import { API_URL } from 'config';
import { oauthLogin } from 'store';

/* -------------------------------------------------------------------------- */

type Props = ButtonProps & {
  provider: string;
  state?: {
    from: Location;
  };
  children: string;
};

const OauthButton: FC<Props> = ({ provider, state, children, ...otherProps }) => {
  const io = useSocket();
  const history = useHistory();
  const dispatch = useDispatch();
  const popup = useRef<Window | null>(null);
  const isMounted = useRef<boolean | null>(null);
  const [disabled, setDisabled] = useState(false);

  /**
   * Set isMounted value to prevent update state on unmounted component
   */

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  /**
   * Listening socket response to login, close popup
   */

  const handleOauth = (user: Record<string, unknown>) => {
    dispatch(oauthLogin(user));

    !state ? history.push('/') : history.push(state.from.pathname);

    popup.current?.close();
  };

  useSocketListener(provider, handleOauth);

  /**
   * Launches the popup by making a request to the server and then passes along the socket id
   */

  const openPopup = () => {
    const width = 600;
    const height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;
    const url = `${API_URL}/api/auth/${provider}?socketId=${io?.id}`;

    return window.open(
      url,
      '',
      `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`,
    );
  };

  /**
   * Routinely checks the popup to re-enable the login button if the user closes the popup without authenticating.
   */

  const checkPopup = () => {
    const check = setInterval(() => {
      if (!popup.current || popup.current.closed || popup.current.closed === undefined) {
        clearInterval(check);

        isMounted.current && setDisabled(false);
      }
    }, 1000);
  };

  /**
   * Kicks off the processes of opening the popup on the server and listening to the popup
   */

  const startAuth = () => {
    if (!disabled) {
      popup.current = openPopup();
      checkPopup();

      isMounted.current && setDisabled(true);
    }
  };

  return (
    <Button onClick={startAuth} {...otherProps}>
      {children}
    </Button>
  );
};

OauthButton.propTypes = {
  provider: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default OauthButton;
