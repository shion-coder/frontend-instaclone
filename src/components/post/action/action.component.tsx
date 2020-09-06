import React, { FC } from 'react';
import { LikeIcon, CommentIcon, ShareIcon, SaveIcon } from 'components/common/icon';

import { Container, Like, Comment, Share, Save } from './action.styles';

/* -------------------------------------------------------------------------- */

const Action: FC = () => (
  <Container>
    <Like>
      <LikeIcon />
    </Like>

    <Comment>
      <CommentIcon />
    </Comment>

    <Share>
      <ShareIcon />
    </Share>

    <Save>
      <SaveIcon />
    </Save>
  </Container>
);

export default Action;
