import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logout, clearNotification } from 'store';

import { Container, Item, Text, Image, StyledAvatar as Avatar, Name } from './settings-modal.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  avatar: string;
  name: string;
  closeSettingsModal: () => void;
};

const SettingsModal: FC<Props> = ({ avatar, name, closeSettingsModal }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const goSettings = () => history.push('/settings/edit');

  const logOut = () => {
    dispatch(logout());
    dispatch(clearNotification());
  };

  return (
    <Container>
      <Image>
        <Avatar src={avatar} />

        <Name>{name}</Name>
      </Image>

      <Item button onClick={goSettings}>
        <Text primary="Settings" />
      </Item>

      <Item button onClick={logOut}>
        <Text primary="Logout" />
      </Item>

      <Item button onClick={closeSettingsModal}>
        <Text primary="Cancel" />
      </Item>
    </Container>
  );
};

export default SettingsModal;
