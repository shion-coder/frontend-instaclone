import React, { FC, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonProps } from '@material-ui/core';

import { useSocket } from 'contexts/socket';
import { API_URL } from 'config';

/* -------------------------------------------------------------------------- */

type Props = ButtonProps & {
  provider: string;
  children: string;
};

const OauthButton: FC<Props> = ({ provider, children, ...otherProps }) => {
  const [disabled, setDisabled] = useState(false);

  const io = useSocket();
  const popup = useRef<Window | null>(null);

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

  const checkPopup = () => {
    const check = setInterval(() => {
      if (!popup.current || popup.current.closed || popup.current.closed === undefined) {
        clearInterval(check);
        setDisabled(false);
      }
    }, 1000);
  };

  const startAuth = () => {
    if (!disabled) {
      popup.current = openPopup();
      checkPopup();
      setDisabled(true);
    }
  };

  useEffect(() => {
    io?.on(provider, (user: Record<string, unknown>) => {
      popup.current?.close();
    });
  }, [io, provider]);

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
