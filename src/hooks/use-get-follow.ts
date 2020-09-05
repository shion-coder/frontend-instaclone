import { useInfiniteQuery } from 'react-query';

import { ReturnGetFollowProps } from 'types';
import { useIntersectionObserver } from 'hooks';
import { requestGetFollow } from 'services';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  ref: (node: HTMLDivElement) => void;
  data: ReturnGetFollowProps[] | undefined;
  isLoading: boolean;
  canFetchMore: boolean | undefined;
};

export const useGetFollow = (username: string, route: 'followers' | 'following'): ReturnProps => {
  /**
   * Infinite get followers or following query
   */

  const { data, isLoading, fetchMore, canFetchMore } = useInfiniteQuery(
    [`get-${route}`, username],
    (_key, username: string, offset = 0) => requestGetFollow(username, offset, route),
    {
      getFetchMore: (last) => last.next,
    },
  );

  /**
   * Infinite scroll enabled when entry is visible and query can fetch more
   */

  const [ref, entry] = useIntersectionObserver({});

  entry?.isVisible && canFetchMore && fetchMore();

  return { ref, data, isLoading, canFetchMore };
};
