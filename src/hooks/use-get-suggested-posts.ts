import { useInfiniteQuery } from 'react-query';

import { ReturnGetSuggestedPostsProps, QUERY } from 'types';
import { useUser, useIntersectionObserver } from 'hooks';
import { requestGetSuggestedPosts } from 'services';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  ref: (node: HTMLDivElement) => void;
  data: ReturnGetSuggestedPostsProps[] | undefined;
  isLoading: boolean;
  canFetchMore: boolean | undefined;
};

export const useGetSuggestedPosts = (): ReturnProps => {
  const { username } = useUser();

  /**
   * Infinite get posts query
   */

  const { data, isLoading, fetchMore, canFetchMore } = useInfiniteQuery(
    [QUERY.GET_SUGGESTED_POSTS, username],
    (_key, username: string, offset = 0) => requestGetSuggestedPosts(offset),
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
