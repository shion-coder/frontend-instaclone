import React, { FC } from 'react';
import { Grid, Box } from '@material-ui/core';

import { ReturnGetUserProps } from 'types';
import { useCustomHistory, useLogout } from 'hooks';
import Avatar from 'components/common/avatar';
import Item from 'components/common/list-item-button';

import { Wrapper, Image } from './settings-modal.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  profile: ReturnGetUserProps;
  closeModal: () => void;
};

const SettingsModal: FC<Props> = ({
  profile: {
    user: { fullName, avatar },
  },
  closeModal,
}) => {
  const { goSettings } = useCustomHistory();
  const { logout } = useLogout();

  return (
    <Wrapper elevation={2}>
      <Grid container direction="column">
        <Image item container direction="column" justify="center" alignItems="center">
          <Avatar src={avatar} width="8rem" height="8rem" />

          <Box component="p" fontWeight="bold" letterSpacing={1}>
            {fullName}
          </Box>
        </Image>

        <Grid item onClick={goSettings}>
          <Item text="Settings" border={1} />
        </Grid>

        <Grid item onClick={logout}>
          <Item text="Logout" border={1} />
        </Grid>

        <Grid item onClick={closeModal}>
          <Item text="Cancel" />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default SettingsModal;
