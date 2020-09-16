import React, { FC, useEffect, useState } from 'react';
import { IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { useLikePost } from 'hooks';

import { StyledFavoriteIcon as FavoriteIcon } from './like-post.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  postId: string;
  username: string;
  isLiked: boolean;
  incLikes: () => void;
  decLikes: () => void;
};

const LikePost: FC<Props> = ({ postId, username, isLiked, incLikes, decLikes }) => {
  const [likedState, setLiked] = useState(isLiked);

  const { likePost } = useLikePost(postId, username);

  useEffect(() => {
    setLiked(isLiked);
  }, [isLiked]);

  const handleToggleLike = () => {
    if (likedState) {
      setLiked(false);
      decLikes();
      likePost();
    } else {
      setLiked(true);
      incLikes();
      likePost();
    }
  };

  return likedState ? (
    <IconButton onClick={handleToggleLike}>
      <FavoriteIcon fontSize="small" />
    </IconButton>
  ) : (
    <IconButton onClick={handleToggleLike}>
      <FavoriteBorderIcon fontSize="small" />
    </IconButton>
  );
};

export default LikePost;
