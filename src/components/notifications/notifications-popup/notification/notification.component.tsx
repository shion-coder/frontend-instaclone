import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import { NotificationProps } from 'types';
import { formatDateDistance } from 'utils';
import Avatar from 'components/common/avatar';

import { Container, Info, Name, Text, Date, Image } from './notification.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  notification: NotificationProps;
  text: string;
  handleClose: () => void;
};

const Notification: FC<Props> = ({
  notification: {
    notificationData: { postId, image, filter } = {},
    sender: { username, avatar, fullName },
    read,
    date,
  },
  text,
  handleClose,
}) => {
  const history = useHistory();

  const handleClickUser = () => {
    history.push(`/${username}`);

    handleClose();
  };

  const handleClickPost = () => {
    history.push(`/post/${postId}`);

    handleClose();
  };

  return (
    <Container read={read}>
      <Avatar src={avatar} width="3rem" height="3rem" cursor onClick={handleClickUser} />

      <Info>
        <Text>
          <Name onClick={handleClickUser}>{fullName}</Name>
          {` ${text}`}
        </Text>

        <Date>{formatDateDistance(date)}</Date>
      </Info>

      {image && <Image alt="post-image" src={image} filter={filter} onClick={handleClickPost} />}
    </Container>
  );
};

export default Notification;
