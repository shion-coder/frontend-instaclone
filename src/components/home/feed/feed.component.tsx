import React, { FC } from 'react';

import { useGetPostsFeed } from 'hooks';
import Post from './post';

import { Container } from './feed.styles';

/* -------------------------------------------------------------------------- */

const Feed: FC = () => {
  const { data, isLoading, canFetchMore } = useGetPostsFeed();

  const renderPosts = () => {
    if (isLoading) {
      return <></>;
    }

    if (data) {
      if (data[0].posts?.length === 0) {
        return <></>;
      }

      return data.map((page, i) => (
        <React.Fragment key={i}>
          {page.posts && page.posts.map((post) => <Post key={post.post._id} data={post} />)}
        </React.Fragment>
      ));
    }
  };

  return <Container>{renderPosts()}</Container>;
};

export default Feed;
