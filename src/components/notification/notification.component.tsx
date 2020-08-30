import React, { FC, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Fab } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

import { RootStateProps } from 'store';
import { useClickOutside } from 'hooks';
import Popup from 'components/notification/notification-popup';

import { Container } from './notification.styles';

/* -------------------------------------------------------------------------- */

const Notification: FC = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const unread = useSelector((state: RootStateProps) => state.notification.unread);

  const handleClose = () => setOpen(false);

  const togglePopup = () => setOpen((previous) => !previous);

  useClickOutside(ref, handleClose);

  return (
    <Container ref={ref} badgeContent={unread} color="error">
      <Fab color="primary" size="small" component="span" onClick={togglePopup}>
        {unread ? <NotificationsActiveIcon /> : <NotificationsIcon />}
      </Fab>

      {open && <Popup handleClose={handleClose} />}
    </Container>
  );
};

export default Notification;
