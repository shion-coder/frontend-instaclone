import { MutableRefObject, useRef, useState, useEffect } from 'react';

import { API_URL } from 'config';
import { useSocket } from 'contexts/socket';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  handlePopup: () => void;
};

export const usePopup = (provider: string, popup: MutableRefObject<Window | null>): ReturnProps => {
  const isMounted = useRef<boolean | null>(null);
  const [disabled, setDisabled] = useState(false);

  const io = useSocket();

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
   * Open popup config
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

  const handlePopup = () => {
    if (!disabled) {
      popup.current = openPopup();
      checkPopup();

      isMounted.current && setDisabled(true);
    }
  };

  return { handlePopup };
};
