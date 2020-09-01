import React, { FC } from 'react';

import { ReturnGetUserProps } from 'types';
import { useGetPosts } from 'hooks';
import Post from './post';
import EmptyPost from './empty-post';
import { PostsLoading, Loading } from './posts.loading';

import { Container, LoadMore } from './posts.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  profile: ReturnGetUserProps;
};

const Posts: FC<Props> = ({
  profile: {
    user: { posts, fullName, username },
  },
}) => {
  const next = posts.length === 9 ? 9 : undefined;

  const { ref, data, isLoading, canFetchMore } = useGetPosts(username, { posts, next });

  const renderPosts = () =>
    isLoading ? (
      <Loading />
    ) : (
      data &&
      data.map((page, i) => (
        <React.Fragment key={i}>
          {page.posts && page.posts.map((post) => <Post key={post._id} post={post} />)}
        </React.Fragment>
      ))
    );

  return posts.length === 0 ? (
    <EmptyPost fullName={fullName} />
  ) : (
    <>
      <Container>{renderPosts()}</Container>

      {canFetchMore && (
        <LoadMore ref={ref}>
          <PostsLoading />
        </LoadMore>
      )}
    </>
  );
};

export default Posts;
