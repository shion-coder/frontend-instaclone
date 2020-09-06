import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Grid } from '@material-ui/core';

import { Query } from 'types';
import { requestGetPost } from 'services';
import Loader from 'components/loader/lottie-loader';
import NotFound from 'pages/not-found';
import InfoHeader from 'components/post/info-header';

import { Container, Image, PostInfo } from './post.styles';

/* -------------------------------------------------------------------------- */

type ParamProps = {
  id: string;
};

const Post: FC = () => {
  const { id }: ParamProps = useParams();
  const { data, isLoading } = useQuery([Query.GET_POST, id], () => requestGetPost(id));

  if (isLoading) return <Loader />;

  if (!data) return <NotFound />;

  const {
    post: { image, filter },
  } = data;

  return (
    <Grid container>
      <Grid item xs={1} md={2} />

      <Container item container xs={10} md={8}>
        <Grid item xs={12} sm={7}>
          <Image alt="post-image" src={image} filter={filter} />
        </Grid>

        <Grid item xs={12} sm={5}>
          <PostInfo>
            <InfoHeader data={data} />
          </PostInfo>
        </Grid>
      </Container>

      <Grid item xs={1} md={2} />
    </Grid>
  );
};

export default Post;
