import React, { FC } from 'react';

import { ReturnGetPostProps } from 'types';
import InfoHeader from 'components/post/info-header';

import { Container } from './post.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  data: ReturnGetPostProps;
};

const Post: FC<Props> = ({ data }) => (
  <Container>
    <InfoHeader data={data} />
  </Container>
);

export default Post;
