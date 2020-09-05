import React, { FC } from 'react';

import { Container, Image, StyledAvatar as Avatar, Name, Item, Text } from './unfollow-modal.styles';

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
      <Avatar src={avatar} />

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
