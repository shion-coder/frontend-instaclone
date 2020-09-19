import React, { FC } from 'react';
import { Grid } from '@material-ui/core';

import { ReturnGetUserProps } from 'types';
import { useGetSaved } from 'hooks';
import Post from '../posts/post';
import { PostsLoading, Loading } from '../posts/posts.loading';
import EmptySaved from './empty-saved';

import { Content, Load } from './saved.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  profile: ReturnGetUserProps;
};

const Saved: FC<Props> = ({
  profile: {
    user: { username },
  },
}) => {
  const { ref, data, isLoading, canFetchMore } = useGetSaved(username);

  /**
   * Render posts
   */

  const renderPosts = () => {
    if (isLoading) {
      return <Loading />;
    }

    if (data) {
      if (data[0].posts?.length === 0) {
        return <EmptySaved />;
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

export default Saved;
