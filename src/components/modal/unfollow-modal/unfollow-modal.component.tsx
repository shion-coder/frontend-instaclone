import React, { FC } from 'react';
import { Grid, Box } from '@material-ui/core';

import Avatar from 'components/common/avatar';
import Item from 'components/common/list-item-button';

import { Wrapper, Image } from './unfollow-modal.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  avatar: string;
  fullName: string;
  handleFollow: () => void;
  closeUnfollowModal: () => void;
};

const UnfollowModal: FC<Props> = ({ avatar, fullName, handleFollow, closeUnfollowModal }) => (
  <Wrapper elevation={2}>
    <Grid container direction="column">
      <Image item container direction="column" justify="center" alignItems="center">
        <Avatar src={avatar} width="8rem" height="8rem" />

        <Box component="p" fontWeight="bold" letterSpacing={1}>
          {fullName}
        </Box>
      </Image>

      <Grid item onClick={handleFollow}>
        <Item text="Unfollow" border={1} />
      </Grid>

      <Grid item onClick={closeUnfollowModal}>
        <Item text="Cancel" />
      </Grid>
    </Grid>
  </Wrapper>
);

export default UnfollowModal;
