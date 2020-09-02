import { useInfiniteQuery, queryCache } from 'react-query';

import { ReturnGetPostsProps, ReturnGetUserProps } from 'types';
import { useIntersectionObserver } from 'hooks';
import { http } from 'services';

/* -------------------------------------------------------------------------- */

type Result = {
  ref: (node: HTMLDivElement) => void;
  data: ReturnGetPostsProps[] | undefined;
  isLoading: boolean;
  canFetchMore: boolean | undefined;
};

export const useGetPosts = (username: string): Result => {
  /**
   * Infinite query with react-query
   */

  const limit = 9;
  const posts = queryCache.getQueryData<ReturnGetUserProps>(['get-user', username])?.user.posts;
  const next = posts?.length === limit ? limit : undefined;

  const { data, isLoading, fetchMore, canFetchMore } = useInfiniteQuery(
    ['get-posts', username],
    (_key, username, offset = 0) =>
      http.get<ReturnGetPostsProps>(`/users/${username}/posts/${offset}`).then((res) => res.data),
    {
      initialData: [{ posts, next }],
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
