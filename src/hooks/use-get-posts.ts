import { useInfiniteQuery } from 'react-query';

import { ReturnGetPostsProps, PostProps } from 'types';
import { useIntersectionObserver } from 'hooks';
import { http } from 'services';

/* -------------------------------------------------------------------------- */

type Result = {
  ref: (node: HTMLDivElement) => void;
  data: ReturnGetPostsProps[] | undefined;
  isLoading: boolean;
  canFetchMore: boolean | undefined;
};

export const useGetPosts = (username: string, posts: { posts: PostProps[]; next?: number }): Result => {
  /**
   * Infinite query with react-query
   */

  const { data, isLoading, fetchMore, canFetchMore } = useInfiniteQuery(
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
   * Load more when scroll with intersection observer
   */

  const [ref, entry] = useIntersectionObserver({});

  entry?.isVisible && canFetchMore && fetchMore();

  return { ref, data, isLoading, canFetchMore };
};
