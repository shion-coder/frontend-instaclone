import { useInfiniteQuery } from 'react-query';

import { ReturnGetCommentsProps, QUERY } from 'types';
import { useIntersectionObserver } from 'hooks';
import { requestGetComments } from 'services';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  ref: (node: HTMLDivElement) => void;
  data: ReturnGetCommentsProps[] | undefined;
  isLoading: boolean;
  isFetchingMore: false | 'previous' | 'next' | undefined;
  fetchMore: () => Promise<ReturnGetCommentsProps[] | undefined>;
  canFetchMore: boolean | undefined;
};

export const useGetComments = (id: string): ReturnProps => {
  /**
   * Infinite get comments query
   */

  const { data, isLoading, isFetchingMore, fetchMore, canFetchMore } = useInfiniteQuery(
    [QUERY.GET_COMMENTS, id],
    (_key, id: string, offset = 0) => requestGetComments(id, offset),
    {
      getFetchMore: (last) => last.next,
    },
  );

  /**
   * Infinite scroll enabled when entry is visible and query can fetch more
   */

  const [ref, entry] = useIntersectionObserver({});

  entry?.isVisible && canFetchMore && fetchMore();

  return { ref, data, isLoading, isFetchingMore, fetchMore, canFetchMore };
};
