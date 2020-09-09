import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { NotificationProps } from 'types';
import { formatDateDistance } from 'utils';
import Avatar from 'components/common/avatar';

import { Container, Info, Name, Text, Date } from './notification.styles';

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
      <Avatar src={avatar} width="3rem" height="3rem" cursor onClick={handleClick} />

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
