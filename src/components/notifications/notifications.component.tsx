import React, { FC, useRef, useState } from 'react';
import { IconButton } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

import { useGetNotifications, useClickOutside } from 'hooks';
import Popup from './notifications-popup';

import { StyledBadge as Badge } from './notifications.styles';

/* -------------------------------------------------------------------------- */

const Notifications: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const { data } = useGetNotifications();

  /**
   * Get unread message from query get notifications
   */

  const unread = data && data[0].unread;

  /**
   * Handle notifications popup
   */

  const handleClose = () => setOpen(false);

  const togglePopup = () => setOpen((previous) => !previous);

  useClickOutside(ref, handleClose);

  return (
    <Badge ref={ref} badgeContent={unread} color="error">
      <IconButton onClick={togglePopup}>{unread ? <NotificationsActiveIcon /> : <NotificationsIcon />}</IconButton>

      {open && <Popup handleClose={handleClose} />}
    </Badge>
  );
};

export default Notifications;
