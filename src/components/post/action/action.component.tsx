import React, { FC } from 'react';
import { IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';

import { Wrapper, SavedButton } from './action.styles';

/* -------------------------------------------------------------------------- */

const Action: FC = () => (
  <Wrapper container>
    <IconButton>
      <FavoriteBorderIcon fontSize="small" />
    </IconButton>

    <IconButton>
      <ModeCommentOutlinedIcon fontSize="small" />
    </IconButton>

    <IconButton>
      <ShareOutlinedIcon fontSize="small" />
    </IconButton>

    <SavedButton>
      <BookmarkBorderOutlinedIcon fontSize="small" />
    </SavedButton>
  </Wrapper>
);

export default Action;
