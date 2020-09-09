import React, { FC } from 'react';

import Avatar from 'components/common/avatar';

import { Container, Image, Name, Item, Text } from './unfollow-modal.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  avatar: string;
  fullName: string;
  handleFollow: () => void;
  closeUnfollowModal: () => void;
};

const UnfollowModal: FC<Props> = ({ avatar, fullName, handleFollow, closeUnfollowModal }) => (
  <Container>
    <Image>
      <Avatar src={avatar} width="8rem" height="8rem" />

      <Name>{fullName}</Name>
    </Image>

    <Item button onClick={handleFollow}>
      <Text primary="Unfollow" />
    </Item>

    <Item button onClick={closeUnfollowModal}>
      <Text primary="Cancel" />
    </Item>
  </Container>
);

export default UnfollowModal;
