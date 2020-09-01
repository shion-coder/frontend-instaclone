import { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';

import { ReturnGetPostsProps } from 'types';
import { useIntersectionObserver } from 'hooks';
import { http } from 'services';

/* -------------------------------------------------------------------------- */

type Result = {
  ref: (node: HTMLDivElement) => void;
  data: ReturnGetPostsProps[] | undefined;
  isLoading: boolean;
  canFetchMore: boolean | undefined;
};

export const useGetPosts = (username: string, posts: ReturnGetPostsProps): Result => {
  /**
   * Infinite query with react-query
   */

  const { data, isLoading, fetchMore, canFetchMore, clear } = useInfiniteQuery(
    'get-posts',
    async (_key, offset = 0) => {
      const { data } = await http.get<ReturnGetPostsProps>(`/users/${username}/posts/${offset}`);

      return data;
    },
    {
      retry: false,
      refetchOnWindowFocus: false,
      initialData: [posts],
      getFetchMore: (last) => last.next,
    },
  );

  /**
   * Remove query from cache when unmount
   */

  useEffect(() => {
    return () => clear();
  }, [clear]);

  /**
   * Load more when scroll with intersection observer
   */

  const [ref, entry] = useIntersectionObserver({});

  entry?.isVisible && canFetchMore && fetchMore();

  return { ref, data, isLoading, canFetchMore };
};
