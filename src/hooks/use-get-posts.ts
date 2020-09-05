import { useInfiniteQuery } from 'react-query';

import { ReturnGetPostsProps, Query } from 'types';
import { useIntersectionObserver } from 'hooks';
import { requestGetPosts } from 'services';

/* -------------------------------------------------------------------------- */

type ReturnProps = {
  ref: (node: HTMLDivElement) => void;
  data: ReturnGetPostsProps[] | undefined;
  isLoading: boolean;
  canFetchMore: boolean | undefined;
};

export const useGetPosts = (username: string): ReturnProps => {
  /**
   * Infinite get posts query
   */

  const { data, isLoading, fetchMore, canFetchMore } = useInfiniteQuery(
    [Query.GET_POSTS, username],
    (_key, username: string, offset = 0) => requestGetPosts(username, offset),
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
