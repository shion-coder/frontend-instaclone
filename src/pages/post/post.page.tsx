import React, { FC, useRef } from 'react';
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
import Field from 'components/post/field';

import { StyledContainer as Container, Wrapper, ImageContainer, Image } from './post.styles';

/* -------------------------------------------------------------------------- */

type ParamProps = {
  id: string;
};

type Props = {
  postId?: string;
};

const Post: FC<Props> = ({ postId }) => {
  const ref = useRef<HTMLInputElement | null>(null);

  const { id }: ParamProps = useParams();

  /**
   * Focus comment input function to use when click comment icon
   */

  const focusInput = () => ref.current?.focus();

  /**
   * If postId passed from upper container then use it, otherwise use id in params
   */

  const idQuery = postId ? postId : id;

  const { data, isLoading } = useQuery([QUERY.GET_POST, idQuery], () => requestGetPost(idQuery));

  if (isLoading) return <Loader />;

  if (!data) return <NotFound />;

  const {
    post: { image, filter },
  } = data;

  return (
    <Container maxWidth="lg">
      <Grid container justify="center">
        <Wrapper item xs={12} md={11} container>
          <ImageContainer item xs={12} sm={7} onClick={focusInput}>
            <Image src={image} filter={filter} />
          </ImageContainer>

          <Grid item xs={12} sm={5} container direction="column">
            <InfoHeader data={data} />

            <Comment />

            <Action data={data} focus={focusInput} />

            <Field inputRef={ref} />
          </Grid>
        </Wrapper>
      </Grid>
    </Container>
  );
};

export default Post;
