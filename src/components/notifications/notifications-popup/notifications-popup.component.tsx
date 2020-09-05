import React, { FC, useEffect } from 'react';

import { useGetNotifications, useReadNotifications } from 'hooks';
import { NotificationsPopupLoading } from './notifications-popup.loading';
import EmptyNotification from './empty-notification';
import Notification, { NotificationLoading } from './notification';

import { Container, Title, Name, Icon, Content, LoadMore } from './notifications-popup.styles';

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

              if (notification.notificationType === 'follow') {
                text = 'started following you';
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
      <Title>
        <Name>Notifications</Name>

        <Icon />
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
