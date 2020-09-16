import { useInfiniteQuery } from 'react-query';

import { ReturnGetPostsFeed, QUERY } from 'types';
import { useUser, useIntersectionObserver } from 'hooks';
import { requestGetPostsFeed } from 'services';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  ref: (node: HTMLDivElement) => void;
  data: ReturnGetPostsFeed[] | undefined;
  isLoading: boolean;
  canFetchMore: boolean | undefined;
};

export const useGetPostsFeed = (): ReturnProps => {
  const { username } = useUser();

  /**
   * Infinite get posts feed query
   */

  const { data, isLoading, fetchMore, canFetchMore } = useInfiniteQuery(
    [QUERY.GET_POSTS_FEED, username],
    (_key, _username, offset = 0) => requestGetPostsFeed(offset),
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
