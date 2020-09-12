import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Grid } from '@material-ui/core';

import { QUERY } from 'types';
import { requestGetPost } from 'services';
import NotFound from 'pages/not-found';
import Loader from 'components/loader/lottie-loader';
import InfoHeader from 'components/post/info-header';
import Comment from 'components/post/comment';
import Action from 'components/post/action';

import { StyledContainer as Container, Wrapper, ImageContainer, Image } from './post.styles';

/* -------------------------------------------------------------------------- */

type ParamProps = {
  id: string;
};

const Post: FC = () => {
  /**
   * useDimension to get height of wrapper and set it to container base on responsive image
   */

  const { id }: ParamProps = useParams();
  const { data, isLoading } = useQuery([QUERY.GET_POST, id], () => requestGetPost(id));

  if (isLoading) return <Loader />;

  if (!data) return <NotFound />;

  const {
    post: { image, filter },
  } = data;

  return (
    <Container maxWidth="lg">
      <Grid container justify="center">
        <Wrapper item xs={12} md={11} container>
          <ImageContainer item xs={12} sm={7}>
            <Image src={image} filter={filter} />
          </ImageContainer>

          <Grid item xs={12} sm={5} container direction="column">
            <InfoHeader data={data} />

            <Comment />

            <Action />
          </Grid>
        </Wrapper>
      </Grid>
    </Container>
  );
};

export default Post;
