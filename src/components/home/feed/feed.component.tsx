import React, { FC } from 'react';

import { PATH } from 'types';
import { useGetPostsFeed } from 'hooks';
import Post, { PostLoading } from './post';

import { Container, LoadMore, NoContent, Icon, Title, Text, StyledLink as Link } from './feed.styles';

/* -------------------------------------------------------------------------- */

const Feed: FC = () => {
  const { ref, data, isLoading, canFetchMore } = useGetPostsFeed();

  const renderPosts = () => {
    if (isLoading) {
      return (
        <>
          <PostLoading />
          <PostLoading />
          <PostLoading />
          <PostLoading />
        </>
      );
    }

    if (data) {
      if (data[0].posts?.length === 0) {
        return (
          <NoContent>
            <Icon />

            <Title>No content available</Title>

            <Text>Your feed will display all posts of you and from accounts you follow</Text>

            <Text>
              Follow some user or go to <Link to={PATH.EXPLORE}>explore page</Link> to view new post
            </Text>
          </NoContent>
        );
      }

      return data.map((page, i) => (
        <React.Fragment key={i}>
          {page.posts && page.posts.map((post) => <Post key={post.post._id} data={post} />)}
        </React.Fragment>
      ));
    }
  };

  return (
    <Container>
      {renderPosts()}

      {canFetchMore && (
        <LoadMore ref={ref}>
          <PostLoading />
        </LoadMore>
      )}
    </Container>
  );
};

export default Feed;
