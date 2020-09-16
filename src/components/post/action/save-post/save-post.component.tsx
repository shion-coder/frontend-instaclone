import React, { FC, useEffect, useState } from 'react';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import BookmarkIcon from '@material-ui/icons/Bookmark';

import { useSavePost } from 'hooks';

import { StyledIconButton as IconButton } from './save-post.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  postId: string;
  username: string;
  isSaved: boolean;
};

const SavePost: FC<Props> = ({ postId, username, isSaved }) => {
  const [savedState, setSaved] = useState(isSaved);

  const { savePost } = useSavePost(postId, username);

  useEffect(() => {
    setSaved(isSaved);
  }, [isSaved]);

  const handleToggleLike = () => {
    if (savedState) {
      setSaved(false);
      savePost();
    } else {
      setSaved(true);
      savePost();
    }
  };

  return savedState ? (
    <IconButton onClick={handleToggleLike}>
      <BookmarkIcon fontSize="small" />
    </IconButton>
  ) : (
    <IconButton onClick={handleToggleLike}>
      <BookmarkBorderOutlinedIcon fontSize="small" />
    </IconButton>
  );
};

export default SavePost;
