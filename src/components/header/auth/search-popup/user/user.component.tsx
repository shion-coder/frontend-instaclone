import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { UserProps } from 'types';
import Avatar from 'components/common/avatar';

import { Container, Info, Name, Text, Username } from './user.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  user: UserProps;
  handleClose: () => void;
};

const Notification: FC<Props> = ({ user: { username, fullName, avatar }, handleClose }) => {
  const history = useHistory();

  const handleClickUser = () => {
    history.push(`/${username}`);

    handleClose();
  };

  return (
    <Container>
      <Avatar src={avatar} width="2.5rem" height="2.5rem" cursor onClick={handleClickUser} />

      <Info>
        <Text>
          <Name onClick={handleClickUser}>{fullName}</Name>
        </Text>

        <Username>{username}</Username>
      </Info>
    </Container>
  );
};

export default Notification;
