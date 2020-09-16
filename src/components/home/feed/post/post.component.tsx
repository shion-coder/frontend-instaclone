import React, { FC, useRef } from 'react';

import { ReturnGetPostProps } from 'types';
import InfoHeader from 'components/post/info-header';
import Comments from 'components/post/comments';
import Action from 'components/post/action';
import Field from 'components/post/field';

import { Container, Image } from './post.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  data: ReturnGetPostProps;
};

const Post: FC<Props> = ({ data }) => {
  const {
    post: { image, filter },
  } = data;

  const ref = useRef<HTMLInputElement | null>(null);

  /**
   * Focus comment input function to use when click comment icon
   */

  const focusInput = () => ref.current?.focus();

  return (
    <Container>
      <InfoHeader data={data} />

      <Image src={image} filter={filter} />

      <Comments data={data} />

      <Action data={data} focus={focusInput} />

      <Field data={data} inputRef={ref} />
    </Container>
  );
};

export default Post;
