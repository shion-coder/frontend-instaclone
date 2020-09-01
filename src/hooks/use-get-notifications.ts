import { useSelector } from 'react-redux';
import { useInfiniteQuery } from 'react-query';

import { ReturnGetNotificationsProps } from 'types';
import { RootStateProps } from 'store';
import { useIntersectionObserver } from 'hooks';
import { http } from 'services';

/* -------------------------------------------------------------------------- */

type Result = {
  ref: (node: HTMLDivElement) => void;
  data: ReturnGetNotificationsProps[] | undefined;
  isLoading: boolean;
  canFetchMore: boolean | undefined;
};

export const useGetNotifications = (): Result => {
  const next = useSelector((state: RootStateProps) => state.notifications.next);

  /**
   * Infinite query with react-query
   */

  const { data, isLoading, fetchMore, canFetchMore } = useInfiniteQuery(
    'get-notifications',
    async (_key, offset = next) => {
      const { data } = await http.get<ReturnGetNotificationsProps>(`/notifications/${offset}`);

      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
      enabled: Number.isInteger(next),
      getFetchMore: (last) => last.next,
    },
  );

  /**
   * Load more when scroll with intersection observer
   */

  const [ref, entry] = useIntersectionObserver({});

  entry?.isVisible && canFetchMore && fetchMore();

  return { ref, data, isLoading, canFetchMore };
};
