import { useInfiniteQuery } from 'react-query';

import { ReturnGetPostsProps, QUERY } from 'types';
import { useIntersectionObserver } from 'hooks';
import { requestGetSaved } from 'services';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  ref: (node: HTMLDivElement) => void;
  data: ReturnGetPostsProps[] | undefined;
  isLoading: boolean;
  canFetchMore: boolean | undefined;
};

export const useGetSaved = (username: string): ReturnProps => {
  /**
   * Infinite get saved query
   */

  const { data, isLoading, fetchMore, canFetchMore } = useInfiniteQuery(
    [QUERY.GET_SAVED, username],
    (_key, username: string, offset = 0) => requestGetSaved(username, offset),
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
