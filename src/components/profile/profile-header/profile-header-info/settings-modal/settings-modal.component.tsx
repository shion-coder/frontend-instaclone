import React, { FC } from 'react';

import { ReturnGetUserProps } from 'types';
import { useCustomHistory, useLogout } from 'hooks';
import Avatar from 'components/common/avatar';

import { Container, Image, Name, Item, Text } from './settings-modal.styles';

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
    <Container>
      <Image>
        <Avatar src={avatar} width="8rem" height="8rem" />

        <Name>{fullName}</Name>
      </Image>

      <Item button onClick={goSettings}>
        <Text primary="Settings" />
      </Item>

      <Item button onClick={logout}>
        <Text primary="Logout" />
      </Item>

      <Item button onClick={closeModal}>
        <Text primary="Cancel" />
      </Item>
    </Container>
  );
};

export default SettingsModal;
