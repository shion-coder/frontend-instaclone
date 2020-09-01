import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { NotificationProps } from 'types';
import { formatDateDistance } from 'utils';

import { Container, StyledAvatar as Avatar, Info, Name, Text, Date } from './notification.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  notification: NotificationProps;
  text: string;
  handleClose: () => void;
};

const Notification: FC<Props> = ({
  notification: {
    sender: { username, avatar, fullName },
    read,
    date,
  },
  text,
  handleClose,
}) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/${username}`);

    handleClose();
  };

  return (
    <Container read={read ? 'read' : 'unread'}>
      <Avatar src={avatar} onClick={handleClick} />

      <Info>
        <Text>
          <Name onClick={handleClick}>{fullName}</Name>
          {` ${text}`}
        </Text>

        <Date>{formatDateDistance(date)}</Date>
      </Info>
    </Container>
  );
};

export default Notification;
