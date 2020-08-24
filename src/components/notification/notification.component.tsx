import React, { FC } from 'react';
import { Fab } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { Container } from './notification.styles';

/* -------------------------------------------------------------------------- */

const Notification: FC = () => {
  return (
    <Container badgeContent={4} color="error">
      <Fab color="primary" size="small" component="span">
        <NotificationsIcon />
      </Fab>
    </Container>
  );
};

export default Notification;
