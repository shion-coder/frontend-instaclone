import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootStateProps, readNotification, clearUnreadNotification } from 'store';
import { useGetNotifications } from 'hooks';
import { http } from 'services';
import EmptyNotification from './empty-notification';
import Notification, { NotificationLoading } from './notification';

import { Container, Title, Name, Icon, Content, LoadMore } from './notifications-popup.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  handleClose: () => void;
};

const NotificationsPopup: FC<Props> = ({ handleClose }) => {
  const notifications = useSelector((state: RootStateProps) => state.notifications.notifications);
  const length = notifications.length;
  const dispatch = useDispatch();

  /**
   * Read unread notifications
   */

  useEffect(() => {
    dispatch(readNotification());

    http.put('/notifications');

    return () => {
      dispatch(clearUnreadNotification());
    };
  }, [dispatch]);

  /**
   * Handle get more notifications
   */

  const { ref, data, canFetchMore } = useGetNotifications();

  /**
   * Render notifications already loaded in store redux
   */

  const renderLoadedNotifications = () =>
    length === 0 ? (
      <EmptyNotification />
    ) : (
      notifications.map((notification) => {
        let text = '';

        if (notification.notificationType === 'follow') {
          text = 'started following you';
        }

        return (
          <Notification key={notification._id} notification={notification} text={text} handleClose={handleClose} />
        );
      })
    );

  /**
   * Render more notifications when scroll
   */

  const renderMoreNotifications = () =>
    data &&
    data.map((page, i) => (
      <React.Fragment key={i}>
        {page.notifications &&
          page.notifications.map((notification) => {
            let text = '';

            if (notification.notificationType === 'follow') {
              text = 'started following you';
            }

            return (
              <Notification key={notification._id} notification={notification} text={text} handleClose={handleClose} />
            );
          })}
      </React.Fragment>
    ));

  /**
   * Render notification skeleton at bottom of notification list when scroll to load more
   */

  const renderLoadMore = () =>
    canFetchMore && (
      <LoadMore ref={ref}>
        <NotificationLoading />
      </LoadMore>
    );

  return (
    <Container>
      <Title>
        <Name>Notifications</Name>

        <Icon />
      </Title>

      <Content>
        {renderLoadedNotifications()}

        {renderMoreNotifications()}

        {renderLoadMore()}
      </Content>
    </Container>
  );
};

export default NotificationsPopup;
