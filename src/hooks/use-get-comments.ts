import { useInfiniteQuery } from 'react-query';

import { ReturnGetCommentsProps, QUERY } from 'types';
import { requestGetComments } from 'services';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
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

  return { data, isLoading, isFetchingMore, fetchMore, canFetchMore };
};
