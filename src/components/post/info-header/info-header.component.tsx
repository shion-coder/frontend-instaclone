import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import Modal from 'styled-react-modal';

import { ReturnGetPostProps } from 'types';
import { useCustomHistory, useModal } from 'hooks';
import Avatar from 'components/common/avatar';
import PostModal from 'components/modal/post-modal';

import { Wrapper, Body, Name, More } from './info-header.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  data: ReturnGetPostProps;
};

const InfoHeader: FC<Props> = ({
  data: {
    post: {
      _id,
      author: { fullName, username, avatar },
    },
    isMine,
  },
}) => {
  const { goUser } = useCustomHistory(username);
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <Wrapper container alignItems="center">
      <Grid item>
        <Avatar src={avatar} width="2.5rem" height="2.5rem" cursor onClick={goUser} />
      </Grid>

      <Body item>
        <Name onClick={goUser}>{fullName}</Name>
      </Body>

      <More onClick={openModal} />

      <Modal isOpen={isOpen} onBackgroundClick={closeModal} onEscapeKeydown={closeModal}>
        <PostModal id={_id} isMine={isMine} closeModal={closeModal} />
      </Modal>
    </Wrapper>
  );
};

export default InfoHeader;
