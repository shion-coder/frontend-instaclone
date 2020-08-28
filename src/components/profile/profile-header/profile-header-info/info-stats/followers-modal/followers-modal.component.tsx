import React, { FC } from 'react';

import { Container, Title, Name, Cancel, Content, Empty, UserIcon, Text } from './followers-modal.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  isCurrentUser: boolean;
  closeFollowersModal: () => void;
};

const FollowersModal: FC<Props> = ({ isCurrentUser, closeFollowersModal }) => {
  return (
    <Container>
      <Title>
        <Name>Followers</Name>

        <Cancel onClick={closeFollowersModal} />
      </Title>

      <Content>
        <Empty>
          <UserIcon />

          <Text>People who follow the user</Text>

          <Text>Once somebody follows the user, you'll see them here</Text>
        </Empty>
      </Content>
    </Container>
  );
};

export default FollowersModal;
