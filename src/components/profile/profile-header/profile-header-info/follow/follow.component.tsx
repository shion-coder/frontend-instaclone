import React, { FC, Dispatch, SetStateAction } from 'react';
import Modal from 'styled-react-modal';
import { Typography, Box } from '@material-ui/core';

import { ReturnGetUserProps } from 'types';
import { useModal } from 'hooks';
import UsersModal from 'components/modal/users-modal';

import { Content } from './follow.styles';

/* -------------------------------------------------------------------------- */

type Props = {
  route: 'followers' | 'following';
  count: number;
  profile: ReturnGetUserProps;
  setUserProfile: Dispatch<SetStateAction<ReturnGetUserProps>>;
};

const Follow: FC<Props> = ({ route, count, profile, setUserProfile }) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <Content>
      <Typography variant="body2" onClick={openModal}>
        <Box component="span" fontWeight="fontWeightBold">
          {count}
        </Box>

        <Box component="span" fontSize="0.8rem" letterSpacing={1}>
          {` ${route}`}
        </Box>
      </Typography>

      <Modal isOpen={isOpen} onBackgroundClick={closeModal} onEscapeKeydown={closeModal}>
        <UsersModal route={route} profile={profile} setUserProfile={setUserProfile} closeModal={closeModal} />
      </Modal>
    </Content>
  );
};

export default Follow;
