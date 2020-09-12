import React, { FC, useEffect } from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';

import { NOTIFICATION_TYPE } from 'types';
import { useGetNotifications, useReadNotifications } from 'hooks';
import { notificationMessage } from 'utils';
import { NotificationsPopupLoading } from './notifications-popup.loading';
import EmptyNotification from './empty-notification';
import Notification, { NotificationLoading } from './notification';

import { Container, Title, Name, Content, LoadMore } from './notifications-popup.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  handleClose: () => void;
};

const NotificationsPopup: FC<Props> = ({ handleClose }) => {
  const { readNotifications } = useReadNotifications();
  const { ref, data, isLoading, canFetchMore } = useGetNotifications();

  /**
   * Request read notifications when unmount
   */

  useEffect(() => {
    return () => {
      readNotifications();
    };
  }, [readNotifications]);

  /**
   * Render notifications
   */

  const renderNotifications = () => {
    if (isLoading) {
      return <NotificationsPopupLoading />;
    }

    if (data) {
      if (data[0].notifications.length === 0) {
        return <EmptyNotification />;
      }

      return data.map((page, i) => (
        <React.Fragment key={i}>
          {page.notifications &&
            page.notifications.map((notification) => {
              let text = '';

              if (notification.notificationType === NOTIFICATION_TYPE.FOLLOW) {
                text = notificationMessage.follow;
              } else if (notification.notificationType === NOTIFICATION_TYPE.LIKE) {
                text = notificationMessage.like;
              }

              return (
                <Notification
                  key={notification._id}
                  notification={notification}
                  text={text}
                  handleClose={handleClose}
                />
              );
            })}
        </React.Fragment>
      ));
    }
  };

  return (
    <Container>
      <Title container alignItems="center">
        <Name>Notifications</Name>

        <NotificationsIcon />
      </Title>

      <Content>
        {renderNotifications()}

        {canFetchMore && (
          <LoadMore ref={ref}>
            <NotificationLoading />
          </LoadMore>
        )}
      </Content>
    </Container>
  );
};

export default NotificationsPopup;
