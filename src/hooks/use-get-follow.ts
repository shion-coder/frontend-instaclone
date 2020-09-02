import { useInfiniteQuery } from 'react-query';

import { ReturnGetFollowProps } from 'types';
import { useIntersectionObserver } from 'hooks';
import { http } from 'services';

/* -------------------------------------------------------------------------- */

type Result = {
  ref: (node: HTMLDivElement) => void;
  data: ReturnGetFollowProps[] | undefined;
  isLoading: boolean;
  canFetchMore: boolean | undefined;
};

export const useGetFollow = (id: string, route: 'followers' | 'following'): Result => {
  /**
   * Infinite query with react-query
   */

  const { data, isLoading, fetchMore, canFetchMore } = useInfiniteQuery(
    ['get-followers', id],
    (_key, id, offset = 0) => http.get<ReturnGetFollowProps>(`/users/${id}/${offset}/${route}`).then((res) => res.data),
    {
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
