import React, { FC } from 'react';
import { Grid } from '@material-ui/core';

import { ReturnGetUserProps } from 'types';
import { useGetPosts } from 'hooks';
import Post from './post';
import { PostsLoading, Loading } from './posts.loading';
import EmptyPost from './empty-post';

import { Content, Load } from './posts.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  profile: ReturnGetUserProps;
};

const Posts: FC<Props> = ({
  profile: {
    user: { fullName, username },
    isCurrentUser,
  },
}) => {
  const { ref, data, isLoading, canFetchMore } = useGetPosts(username);

  /**
   * Render posts
   */

  const renderPosts = () => {
    if (isLoading) {
      return <Loading />;
    }

    if (data) {
      if (data[0].posts?.length === 0) {
        return <EmptyPost isCurrentUser={isCurrentUser} fullName={fullName} />;
      }

      return data.map((page, i) => (
        <React.Fragment key={i}>
          {page.posts && page.posts.map((post) => <Post key={post._id} post={post} />)}
        </React.Fragment>
      ));
    }
  };

  return (
    <Content>
      <Grid container spacing={2}>
        {renderPosts()}
      </Grid>

      {canFetchMore && (
        <Load container spacing={2} ref={ref}>
          <PostsLoading />
        </Load>
      )}
    </Content>
  );
};

export default Posts;
