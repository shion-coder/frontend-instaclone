import { MutateFunction, useMutation, queryCache } from 'react-query';

import { ReturnReadNotificationsProps, ReturnGetNotificationsProps, Query } from 'types';
import { useUser } from 'hooks';
import { requestReadNotifications } from 'services';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  readNotifications: MutateFunction<ReturnReadNotificationsProps, unknown, undefined, unknown>;
};

export const useReadNotifications = (): ReturnProps => {
  const { username } = useUser();

  /**
   * Get read notifications function and handle it on error or on success
   */

  const [readNotifications] = useMutation(requestReadNotifications, {
    onMutate: () => {
      /**
       * Get previous data and update unread to 0, read state of all notification to true
       */

      const previousResult = queryCache.getQueryData<ReturnGetNotificationsProps[]>([
        Query.GET_NOTIFICATIONS,
        username,
      ]);

      if (!previousResult) {
        return;
      }

      const newResult = previousResult.map((queryResult) => {
        const newNotifications = queryResult.notifications.map((notification) => ({ ...notification, read: true }));

        return { ...queryResult, notifications: newNotifications, unread: 0 };
      });

      queryCache.setQueryData([Query.GET_NOTIFICATIONS, username], newResult);
    },
    onSuccess: () => {
      queryCache.invalidateQueries([Query.GET_NOTIFICATIONS, username]);
    },
  });

  return { readNotifications };
};
