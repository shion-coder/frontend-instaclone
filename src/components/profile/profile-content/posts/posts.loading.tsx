import React, { FC } from 'react';
import { useTheme, useMediaQuery } from '@material-ui/core';

import { PostLoading } from './post';

/* -------------------------------------------------------------------------- */

export const PostsLoading: FC = () => {
  const matchesXS = useMediaQuery(useTheme().breakpoints.down('xs'));

  return (
    <>
      <PostLoading />

      <PostLoading />

      <PostLoading />

      {matchesXS && <PostLoading />}
    </>
  );
};

export const Loading: FC = () => {
  const matchesXS = useMediaQuery(useTheme().breakpoints.down('xs'));

  return (
    <>
      <PostLoading />

      <PostLoading />

      <PostLoading />

      <PostLoading />

      <PostLoading />

      <PostLoading />

      <PostLoading />

      <PostLoading />

      <PostLoading />

      {matchesXS && <PostLoading />}
    </>
  );
};
