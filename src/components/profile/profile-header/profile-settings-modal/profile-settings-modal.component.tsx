import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { logout, clearNotification } from 'store';

import { Container, Item, Text } from './profile-settings-modal.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  toggleModal: () => void;
};

const ProfileSettingsModal: FC<Props> = ({ toggleModal }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const goSettings = () => history.push('/settings');

  const logOut = () => {
    dispatch(logout());
    dispatch(clearNotification());
  };

  return (
    <Container>
      <Item button onClick={goSettings}>
        <Text primary="Settings" />
      </Item>

      <Item button onClick={logOut}>
        <Text primary="Logout" />
      </Item>

      <Item button onClick={toggleModal}>
        <Text primary="Cancel" />
      </Item>
    </Container>
  );
};

export default ProfileSettingsModal;
