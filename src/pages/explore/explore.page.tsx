import React, { FC } from 'react';
import { Container, Grid } from '@material-ui/core';

import { useGetSuggestedPosts } from 'hooks';
import { PostsLoading, Loading } from 'components/profile/profile-content/posts';
import Post from 'components/profile/profile-content/posts/post';

import { Content, Load } from './explore.styles';

/* -------------------------------------------------------------------------- */

const Explore: FC = () => {
  const { ref, data, isLoading, canFetchMore } = useGetSuggestedPosts();

  const renderPosts = () => {
    if (isLoading) {
      return <Loading />;
    }

    if (data) {
      if (data[0].posts?.length === 0) {
        return;
      }

      return data.map((page, i) => (
        <React.Fragment key={i}>
          {page.posts && page.posts.map((post) => <Post key={post._id} post={post} />)}
        </React.Fragment>
      ));
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container justify="center">
        <Grid item xs={12} sm={11} md={10}>
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default Explore;
