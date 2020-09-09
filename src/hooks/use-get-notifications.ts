import { useInfiniteQuery } from 'react-query';

import { ReturnGetNotificationsProps, QUERY } from 'types';
import { useUser, useIntersectionObserver } from 'hooks';
import { requestGetNotifications } from 'services';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  ref: (node: HTMLDivElement) => void;
  data: ReturnGetNotificationsProps[] | undefined;
  isLoading: boolean;
  canFetchMore: boolean | undefined;
};

export const useGetNotifications = (): ReturnProps => {
  const { username, token } = useUser();

  /**
   * Infinite get notifications query
   */

  const { data, isLoading, fetchMore, canFetchMore } = useInfiniteQuery(
    [QUERY.GET_NOTIFICATIONS, username],
    (_key, _username, offset = 0) => requestGetNotifications(offset),
    {
      getFetchMore: (last) => last.next,
      enabled: token,
    },
  );

  /**
   * Infinite scroll enabled when entry is visible and query can fetch more
   */

  const [ref, entry] = useIntersectionObserver({});

  entry?.isVisible && canFetchMore && fetchMore();

  return { ref, data, isLoading, canFetchMore };
};
