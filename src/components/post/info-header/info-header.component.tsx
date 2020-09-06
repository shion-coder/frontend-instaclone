import React, { FC } from 'react';
import Modal from 'styled-react-modal';

import { ReturnGetPostProps } from 'types';
import { useCustomHistory, useModal } from 'hooks';
import PostModal from './post-modal';

import { Container, StyledAvatar as Avatar, Name, More } from './info-header.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  data: ReturnGetPostProps;
};

const InfoHeader: FC<Props> = ({
  data: {
    post: {
      author: { fullName, username, avatar },
    },
  },
}) => {
  const { goUser } = useCustomHistory(username);
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <Container>
      <Avatar src={avatar} onClick={goUser} />

      <Name onClick={goUser}>{fullName}</Name>

      <More onClick={openModal} />

      <Modal isOpen={isOpen} onBackgroundClick={closeModal} onEscapeKeydown={closeModal}>
        <PostModal closeModal={closeModal} />
      </Modal>
    </Container>
  );
};

export default InfoHeader;
