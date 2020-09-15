import { useInfiniteQuery } from 'react-query';

import { QUERY, ReturnSearchUsernameProps } from 'types';
import { useIntersectionObserver } from 'hooks';
import { requestSearchUsername } from 'services';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  ref: (node: HTMLDivElement) => void;
  data: ReturnSearchUsernameProps[] | undefined;
  isLoading: boolean;
  canFetchMore: boolean | undefined;
};

export const useSearchUsername = (username: string): ReturnProps => {
  /**
   * Infinite get search username query
   */

  const { data, isLoading, fetchMore, canFetchMore } = useInfiniteQuery(
    [QUERY.GET_SEARCH_USERNAME, username],
    (_key, username: string, offset = 0) => requestSearchUsername(username, offset),
    {
      getFetchMore: (last) => last.next,
      enabled: username.length > 0,
    },
  );

  /**
   * Infinite scroll enabled when entry is visible and query can fetch more
   */

  const [ref, entry] = useIntersectionObserver({});

  entry?.isVisible && canFetchMore && fetchMore();

  return { ref, data, isLoading, canFetchMore };
};
